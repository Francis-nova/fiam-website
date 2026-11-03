/**
 * Server-side bot protection for the form API routes, checked in order:
 *  1. Rate limit per IP (Upstash Redis when configured, else in memory per instance).
 *  2. Honeypot field and minimum fill time: obvious bots get a fake success so they learn nothing.
 *  3. Cloudflare Turnstile token, verified with Cloudflare.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
/** Faster than this from page load to submit is a script, not a person. */
const MIN_FILL_MS = 2000;

type Limit = { max: number; windowMs: number };
const hits = new Map<string, { count: number; reset: number }>();

function clientIp(req: Request) {
  const fwd = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return fwd || req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || '';
}

/**
 * Shared counter in Upstash Redis, so the limit holds across Vercel's function instances.
 * Returns seconds to wait (0 = allowed), or null if Redis isn't configured or failed.
 */
async function redisLimited(key: string, { max, windowMs }: Limit) {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const k = `rl:${key}`;
  try {
    const res = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify([
        ['SET', k, '0', 'PX', String(windowMs), 'NX'],
        ['INCR', k],
        ['PTTL', k],
      ]),
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const [, count, ttl] = (await res.json()) as { result: number }[];
    return count.result > max ? Math.max(1, Math.ceil(ttl.result / 1000)) : 0;
  } catch (err) {
    console.error('Rate limit: Redis request failed, using in-memory limit', err);
    return null;
  }
}

/** Per-instance fallback for local dev or if Redis is down. */
function memoryLimited(key: string, { max, windowMs }: Limit) {
  const now = Date.now();
  // Drop expired windows now and then so the map can't grow without bound.
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset <= now) hits.delete(k);
  const entry = hits.get(key);
  if (!entry || entry.reset <= now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return 0;
  }
  entry.count++;
  return entry.count > max ? Math.ceil((entry.reset - now) / 1000) : 0;
}

/**
 * Returns a Response to send back if the request should be stopped, or null to carry on.
 * `action` must match the action the form's Turnstile widget was rendered with.
 */
export async function guardForm(req: Request, body: Record<string, unknown> | null, action: string, limit: Limit) {
  const ip = clientIp(req);
  if (ip) {
    const key = `${action}:${ip}`;
    const retryAfter = (await redisLimited(key, limit)) ?? memoryLimited(key, limit);
    if (retryAfter) {
      return Response.json({ error: 'Too many requests' }, { status: 429, headers: { 'Retry-After': String(retryAfter) } });
    }
  }

  const elapsed = Number(body?.elapsed);
  if (body?.website || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    console.warn(`${action}: dropped likely bot (honeypot or too fast)`, ip);
    return Response.json({ ok: true });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV !== 'production') return null;
    console.error(`${action}: TURNSTILE_SECRET_KEY is not set`);
    return Response.json({ error: 'Bot protection is not configured' }, { status: 500 });
  }

  const token = String(body?.turnstileToken ?? '');
  if (!token || token.length > 2048) return Response.json({ error: 'Verification failed' }, { status: 403 });

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, ...(ip && { remoteip: ip }) }),
    });
    const data = (await res.json()) as { success?: boolean; action?: string; 'error-codes'?: string[] };
    // Cloudflare's test keys return no action, so only reject a mismatched one.
    if (!data.success || (data.action && data.action !== action)) {
      console.warn(`${action}: Turnstile rejected`, data['error-codes'], data.action);
      return Response.json({ error: 'Verification failed' }, { status: 403 });
    }
  } catch (err) {
    console.error(`${action}: Turnstile verify failed`, err);
    return Response.json({ error: 'Verification unavailable' }, { status: 502 });
  }
  return null;
}
