export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Which Brevo list each form signs people up to. */
const LISTS = {
  iphone: process.env.BREVO_WAITLIST_LIST_ID ?? '6',
  crypto: process.env.BREVO_CRYPTO_LIST_ID ?? '7',
} as const;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? '').trim();
  const name = String(body?.name ?? '').trim().replace(/[\r\n]/g, ' ');
  const list = String(body?.list ?? 'iphone');

  if (!EMAIL_RE.test(email) || email.length > 254 || name.length > 100 || !(list in LISTS)) {
    return Response.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const { BREVO_API_KEY } = process.env;
  if (!BREVO_API_KEY) {
    console.error('Waitlist: BREVO_API_KEY is not set');
    return Response.json({ error: 'Waitlist is not configured' }, { status: 500 });
  }

  try {
    // updateEnabled: signing up twice adds them to the list again instead of failing.
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'api-key': BREVO_API_KEY },
      body: JSON.stringify({
        email,
        listIds: [Number(LISTS[list as keyof typeof LISTS])],
        updateEnabled: true,
        // Only send a name when given, so a nameless re-signup doesn't blank an existing one.
        ...(name && { attributes: { FIRSTNAME: name } }),
      }),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  } catch (err) {
    console.error('Waitlist: Brevo request failed', err);
    return Response.json({ error: 'Failed to join' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
