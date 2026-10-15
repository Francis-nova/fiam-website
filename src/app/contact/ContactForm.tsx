'use client';

import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import s from './contact.module.css';

const TOPICS = ['Account help', 'Transfers & funding', 'Fraud or lost phone', 'Partnerships & press', 'Something else'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], msg: '' });
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: { target: { value: string } }) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setError(false);
    },
  });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = form.name.trim() && form.msg.trim() && EMAIL_RE.test(form.email);
    if (!ok) return setError(true);
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className={s.sent} role="status">
        <Icon name="solar:check-circle-bold" size={40} color="#53BC7B" />
        <span className={s.formTitle}>Thanks, {form.name}.</span>
        <span className={s.sentBody}>We&apos;ve got your message and will reply to {form.email} soon.</span>
      </div>
    );
  }

  return (
    <>
      <span className={s.formTitle}>Send us a message</span>
      <form onSubmit={onSubmit} className={s.form} noValidate>
        <label className={s.label}>
          Your name
          <input className={s.input} autoComplete="name" {...field('name')} />
        </label>
        <label className={s.label}>
          Email
          <input className={s.input} type="email" autoComplete="email" {...field('email')} />
        </label>
        <label className={s.label}>
          Topic
          <select className={`${s.input} ${s.select}`} {...field('topic')}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className={s.label}>
          Message
          <textarea className={`${s.input} ${s.textarea}`} rows={5} {...field('msg')} />
        </label>
        {error && (
          <span className={s.error} role="alert">
            Please fill in every field with a valid email.
          </span>
        )}
        {failed && (
          <span className={s.error} role="alert">
            Something went wrong. Please try again or email support@usefiam.com.
          </span>
        )}
        <button type="submit" className={s.submit} disabled={sending}>
          {sending ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </>
  );
}
