'use client';

import { useId, useState, type FormEvent } from 'react';
import { Icon } from './Icon';
import s from './WaitlistForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  buttonLabel?: string;
  /** Confirmation text; `{email}` is replaced with the submitted address. */
  success?: string;
  /** 'home' = download section (48px, green focus); 'crypto' = crypto hero (50px, gold focus, max 480px). */
  variant?: 'home' | 'crypto';
};

export function WaitlistForm({
  buttonLabel = 'Notify me',
  success = "You're on the list. We'll be in touch at {email}.",
  variant = 'home',
}: Props) {
  const errorId = useId();
  const v = variant === 'crypto' ? s.crypto : '';
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [joined, setJoined] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) return setError(true);
    setSending(true);
    setFailed(false);
    try {
      // The crypto variant signs up to the crypto early-access list; otherwise the iPhone waitlist.
      const res = await fetch('/api/waitlist/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), list: variant === 'crypto' ? 'crypto' : 'iphone' }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setJoined(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (joined) {
    return (
      <div className={`${s.success} ${v}`} role="status">
        <Icon name="solar:check-circle-bold" size={22} color="#53BC7B" />
        <span>{success.replace('{email}', email)}</span>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className={`${s.form} ${v}`} noValidate>
        <input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          aria-invalid={error}
          aria-describedby={error ? errorId : undefined}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
          className={s.input}
        />
        <button type="submit" className={s.button} disabled={sending}>
          {sending ? 'Joining…' : buttonLabel}
        </button>
      </form>
      {error && (
        <span id={errorId} className={s.error}>
          Enter a valid email address.
        </span>
      )}
      {failed && (
        <span className={s.error} role="alert">
          Something went wrong. Please try again in a moment.
        </span>
      )}
    </>
  );
}
