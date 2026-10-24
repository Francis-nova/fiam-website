'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Glyph } from './Glyph';
import u from './ui.module.css';
import s from './WaitlistDialog.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** iPhone waitlist popup. Any element with `data-waitlist` opens it (see StoreButtons). */
export function WaitlistDialog() {
  const dlg = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [joined, setJoined] = useState('');

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const trigger = (e.target as Element | null)?.closest?.('[data-waitlist]');
      if (!trigger || !dlg.current) return;
      e.preventDefault();
      setError('');
      setJoined('');
      dlg.current.showModal();
      setTimeout(() => nameRef.current?.focus(), 50);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const close = () => dlg.current?.close();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = emailRef.current?.value.trim() ?? '';
    if (!EMAIL_RE.test(email)) {
      setError(email ? 'Enter a full email address, like ada@example.com.' : 'Enter your email address to join.');
      emailRef.current?.focus();
      return;
    }
    setSending(true);
    // TODO(launch): POST { name, email } to the waitlist backend (none exists yet).
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setJoined(email);
    form.reset();
    setTimeout(() => doneRef.current?.focus(), 0);
  }

  return (
    <dialog ref={dlg} className={s.wl} aria-labelledby="wlTitle" onClick={(e) => e.target === dlg.current && close()}>
      <div className={s.card}>
        <button className={s.close} type="button" aria-label="Close" onClick={close}>
          <Glyph name="plus" />
        </button>
        {joined ? (
          <div className={s.done}>
            <div className={s.ok}>
              <Glyph name="check" />
            </div>
            <h3>You&apos;re on the list</h3>
            <p className={s.sub}>
              We&apos;ll email <b className={s.em}>{joined}</b> as soon as Fiam lands on the App Store.
            </p>
            <button ref={doneRef} className={`${u.btn} ${u.btnDark}`} type="button" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className={s.badge}>
              <Glyph name="apple" />
            </div>
            <h3 id="wlTitle">Get Fiam on iPhone first</h3>
            <p className={s.sub}>Leave your email. We&apos;ll send one email when Fiam reaches the App Store, plus early access to crypto.</p>
            <form className={s.form} onSubmit={onSubmit} noValidate>
              <div className={s.field}>
                <label htmlFor="wlName">First name</label>
                <input ref={nameRef} className={s.input} id="wlName" name="name" type="text" autoComplete="given-name" placeholder="Ada" />
              </div>
              <div className={s.field}>
                <label htmlFor="wlEmail">Email address</label>
                <input
                  ref={emailRef}
                  className={s.input}
                  id="wlEmail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="ada@example.com"
                  required
                  aria-invalid={!!error}
                  aria-describedby="wlErr"
                  onInput={() => error && setError('')}
                />
                <span className={s.err} id="wlErr" role="alert">
                  {error}
                </span>
              </div>
              <button className={`${u.btn} ${u.btnGreen}`} type="submit" disabled={sending}>
                {sending ? 'Joining…' : 'Join the waitlist'}
              </button>
            </form>
            <p className={s.note}>One email, no spam. Unsubscribe any time.</p>
          </div>
        )}
      </div>
    </dialog>
  );
}
