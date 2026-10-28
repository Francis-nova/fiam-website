'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Glyph, Logo } from './Glyph';
import u from './ui.module.css';
import w from './WaitlistDialog.module.css';
import s from './NewsletterDialog.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SEEN_KEY = 'fiam-nl-seen';

function seen() {
  try {
    return localStorage.getItem(SEEN_KEY);
  } catch {
    return null;
  }
}
function markSeen(v = String(Date.now())) {
  try {
    localStorage.setItem(SEEN_KEY, v);
  } catch {}
}

/**
 * Newsletter popup. Any element with `data-newsletter` opens it (see SiteFooter).
 * It also opens once per visitor after they scroll halfway down a page or after 25s,
 * and never on top of another open dialog.
 */
export function NewsletterDialog() {
  const dlg = useRef<HTMLDialogElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    function open() {
      if (!dlg.current || document.querySelector('dialog[open]')) return false;
      setError('');
      setFailed(false);
      setSubscribed('');
      dlg.current.showModal();
      markSeen();
      setTimeout(() => emailRef.current?.focus(), 60);
      return true;
    }

    function onClick(e: MouseEvent) {
      if (!(e.target as Element | null)?.closest?.('[data-newsletter]')) return;
      e.preventDefault();
      open();
    }
    document.addEventListener('click', onClick);

    let timer: ReturnType<typeof setTimeout> | undefined;
    function onScroll() {
      const h = document.documentElement;
      if ((h.scrollTop + innerHeight) / h.scrollHeight > 0.5) tryAuto();
    }
    function tryAuto() {
      clearTimeout(timer);
      removeEventListener('scroll', onScroll);
      // Another dialog (e.g. the waitlist) is open: check again shortly.
      if (!seen() && !open()) timer = setTimeout(tryAuto, 8000);
    }
    if (!seen()) {
      timer = setTimeout(tryAuto, 25000);
      addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('click', onClick);
      removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  const close = () => dlg.current?.close();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = emailRef.current?.value.trim() ?? '';
    if (!EMAIL_RE.test(email)) {
      setError(email ? 'Enter a full email address, like you@example.com.' : 'Enter your email address to subscribe.');
      emailRef.current?.focus();
      return;
    }
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch('/api/waitlist/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, list: 'newsletter' }),
      });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      setFailed(true);
      return;
    } finally {
      setSending(false);
    }
    markSeen('subscribed');
    setSubscribed(email);
    form.reset();
    setTimeout(() => doneRef.current?.focus(), 0);
  }

  return (
    <dialog ref={dlg} className={s.nl} aria-labelledby="nlTitle" onClick={(e) => e.target === dlg.current && close()}>
      <div className={s.card}>
        <button className={w.close} type="button" aria-label="Close" onClick={close}>
          <Glyph name="plus" />
        </button>
        <div className={s.art} aria-hidden="true">
          <span className={s.rings}>
            <i style={{ width: 240, height: 240 }} />
            <i style={{ width: 360, height: 360 }} />
            <i style={{ width: 500, height: 500 }} />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.mascot} src="/images/nl-mascot.webp" width={600} height={660} alt="" loading="lazy" />
          <div className={`${s.fc} ${s.c1}`}>
            <span className={s.dot} style={{ background: '#53BC7B', color: '#042323' }}>
              <Glyph name="down" />
            </span>
            <span>
              <b>+₦20,000</b>
              <small>Received · just now</small>
            </span>
          </div>
          <div className={`${s.fc} ${s.c2}`}>
            <span className={s.dot} style={{ background: '#FFBF00', color: '#3a2e00' }}>
              Tip
            </span>
            <span>
              <b>Stretch your salary</b>
              <small>Money tips</small>
            </span>
          </div>
          <div className={`${s.fc} ${s.c3}`}>
            <span className={s.dot} style={{ background: '#8FDEAD', color: '#042323' }}>
              New
            </span>
            <span>
              <b>Sub-accounts</b>
              <small>Coming soon</small>
            </span>
          </div>
        </div>
        <div className={s.body}>
          {subscribed ? (
            <div className={s.done}>
              <div className={s.ok}>
                <Glyph name="check" />
              </div>
              <h3>You&apos;re subscribed</h3>
              <p className={w.sub}>
                Look out for the next Fiam newsletter at <b className={s.em}>{subscribed}</b>.
              </p>
              <button ref={doneRef} className={`${u.btn} ${u.btnDark}`} type="button" onClick={close}>
                Back to Fiam
              </button>
            </div>
          ) : (
            <div>
              <span className={`${u.eyebrow} ${s.eyebrow}`}>
                <Logo />
                Newsletter
              </span>
              <h3 id="nlTitle">Stay ahead with your money</h3>
              <p className={w.sub}>Product news, new features before anyone else, and simple money tips for life in naira.</p>
              <ul className={s.perks}>
                <li>
                  <Glyph name="check" />
                  One email a month, never spam
                </li>
                <li>
                  <Glyph name="check" />
                  First look at new Fiam features
                </li>
                <li>
                  <Glyph name="check" />
                  Unsubscribe in one click
                </li>
              </ul>
              <form onSubmit={onSubmit} noValidate>
                <label htmlFor="nlEmail" className={s.srOnly}>
                  Email address
                </label>
                <div className={s.row}>
                  <input
                    ref={emailRef}
                    className={w.input}
                    id="nlEmail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    required
                    aria-invalid={!!error}
                    aria-describedby="nlErr"
                    onInput={() => error && setError('')}
                  />
                  <button className={`${u.btn} ${u.btnGreen}`} type="submit" disabled={sending}>
                    {sending ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </div>
                <span className={`${w.err} ${s.err}`} id="nlErr" role="alert">
                  {error || (failed && 'Something went wrong. Please try again in a moment.')}
                </span>
              </form>
              <p className={s.legal}>
                By subscribing you agree to our <Link href="/privacy-policy/" onClick={close}>
                  Privacy policy
                </Link>.
              </p>
              <button className={s.skip} type="button" onClick={close}>
                No thanks
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
