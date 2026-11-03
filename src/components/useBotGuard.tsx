'use client';

import { useCallback, useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

let script: Promise<Turnstile> | null = null;
function loadTurnstile() {
  script ??= new Promise<Turnstile>((resolve, reject) => {
    const el = document.createElement('script');
    el.src = SCRIPT_SRC;
    el.async = true;
    el.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile missing')));
    el.onerror = () => {
      script = null;
      reject(new Error('Turnstile failed to load'));
    };
    document.head.appendChild(el);
  });
  return script;
}

// Off-screen rather than display:none, which some bots skip.
const hidden = { position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 } as const;

type Waiter = { resolve: (token: string) => void; reject: (err: Error) => void };

/**
 * Bot protection for a form (checked server-side by src/lib/botGuard.ts).
 * Render `fields` inside the <form>, and spread `await proof()` into the JSON body.
 * Turnstile starts solving when the visitor first focuses the form (it takes a few seconds),
 * so a token is usually ready by submit. It only shows a widget when Cloudflare wants a click.
 */
export function useBotGuard(action: 'contact' | 'waitlist') {
  const start = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement | null>(null);
  const widget = useRef<{ id?: string; token?: string; waiters: Waiter[] }>({ waiters: [] });

  useEffect(() => {
    start.current = Date.now();
  }, []);

  const begin = useCallback(async () => {
    const w = widget.current;
    if (!SITE_KEY || w.id !== undefined) return;
    w.id = '';
    try {
      const turnstile = await loadTurnstile();
      if (!box.current || widget.current !== w) return;
      w.id = turnstile.render(box.current, {
        sitekey: SITE_KEY,
        action,
        appearance: 'interaction-only',
        'response-field': false,
        callback: (token: string) => {
          const next = w.waiters.shift();
          if (next) next.resolve(token);
          else w.token = token;
        },
        'expired-callback': () => (w.token = undefined),
        'error-callback': () => {
          w.token = undefined;
          w.waiters.splice(0).forEach((x) => x.reject(new Error('Turnstile error')));
        },
        'timeout-callback': () => w.waiters.splice(0).forEach((x) => x.reject(new Error('Turnstile timeout'))),
      });
    } catch (err) {
      w.id = undefined;
      w.waiters.splice(0).forEach((x) => x.reject(err as Error));
    }
  }, [action]);

  // The form can unmount (e.g. after a successful send), so the widget lives and dies with this box.
  const boxRef = useCallback(
    (el: HTMLDivElement | null) => {
      box.current = el;
      const form = el?.closest('form');
      form?.addEventListener('focusin', begin, { once: true });
      return () => {
        form?.removeEventListener('focusin', begin);
        const w = widget.current;
        if (w.id) window.turnstile?.remove(w.id);
        w.waiters.forEach((x) => x.reject(new Error('Form closed')));
        widget.current = { waiters: [] };
        box.current = null;
      };
    },
    [begin],
  );

  async function proof() {
    const base = { website: honeypot.current?.value ?? '', elapsed: Date.now() - start.current };
    if (!SITE_KEY) return base;
    const w = widget.current;
    let turnstileToken = w.token;
    if (turnstileToken) {
      w.token = undefined;
    } else {
      const pending = new Promise<string>((resolve, reject) => w.waiters.push({ resolve, reject }));
      void begin();
      turnstileToken = await pending;
    }
    // Tokens are single-use: start on a fresh one for a retry or the next submit.
    if (w.id) window.turnstile?.reset(w.id);
    return { ...base, turnstileToken };
  }

  const fields = (
    <>
      <input ref={honeypot} name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={hidden} />
      <div ref={boxRef} style={{ display: 'contents' }} />
    </>
  );

  return { fields, proof };
}
