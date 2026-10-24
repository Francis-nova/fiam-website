'use client';

import { useEffect, useState } from 'react';
import { Glyph, type GlyphName } from '@/components/Glyph';
import { Phone } from '@/components/Phone';
import u from '@/components/ui.module.css';
import s from './home.module.css';

const tabs: { icon: GlyphName; title: string; body: string }[] = [
  { icon: 'lock', title: 'A PIN on every transfer', body: 'Nothing leaves your wallet until you enter your 4-digit PIN. Not a single naira.' },
  { icon: 'review', title: 'Review before you send', body: 'Every payment shows the recipient, amount and fee on one screen before you commit.' },
  { icon: 'layers', title: 'Tiered identity checks', body: 'Limits grow as you verify more of your identity, which keeps fraudsters out of the system.' },
  { icon: 'bell', title: 'Instant alerts', body: 'Every credit and debit sends an alert straight away, with a reference you can share.' },
];

const alerts = [
  { credit: true, title: 'Credit · ₦50,000.00', who: 'From Femi Johnson · Access Bank', ref: 'FM-7Q2K-91XD' },
  { credit: false, title: 'Debit · ₦25,010.00', who: 'To Chiamaka Eze · Access Bank', ref: 'FM-7Q1A-44BC' },
  { credit: true, title: 'Credit · ₦20,000.00', who: 'From Ada Okafor · GTBank', ref: 'FM-7P9Z-02LM' },
];

function Back() {
  return (
    <span className={s.round}>
      <Glyph name="back" />
    </span>
  );
}

export function SecurityTabs() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pin, setPin] = useState(2);

  useEffect(() => {
    if (paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setCur((c) => (c + 1) % tabs.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    if (cur !== 0 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setPin((n) => (n + 1) % 5), 700);
    return () => clearInterval(t);
  }, [cur]);

  return (
    <div className={s.secGrid}>
      <div className={`${s.tabs} ${paused ? s.paused : ''}`} role="tablist" aria-label="Security features">
        {tabs.map((t, i) => (
          <button
            key={t.title}
            type="button"
            role="tab"
            aria-selected={cur === i}
            className={`${s.tab} ${cur === i ? s.on : ''}`}
            onClick={() => {
              setCur(i);
              setPaused(true);
            }}
          >
            {/* keyed on `cur` so the progress bar restarts on every change */}
            <span key={cur === i ? `on${cur}` : 'off'} className={s.prog} />
            <span className={s.th}>
              <Glyph name={t.icon} />
              {t.title}
            </span>
            <p>
              <span>{t.body}</span>
            </p>
          </button>
        ))}
      </div>

      <div className={s.showcase} data-rv>
        <Phone className={s.showcasePhone}>
          <div className={`${s.view} ${cur === 0 ? s.on : ''}`}>
            <div className={s.vh}>
              <Back />
              Confirm transfer
            </div>
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <b style={{ fontSize: 17 }}>Enter your PIN</b>
              <div style={{ color: 'var(--ph-muted)', marginTop: 4 }}>To send ₦25,000.00 to Chiamaka Eze</div>
            </div>
            <div className={s.pinDots}>
              {[0, 1, 2, 3].map((k) => (
                <i key={k} className={k < pin ? s.f : ''} />
              ))}
            </div>
            <div className={s.pad}>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((k, i) => (
                <span key={i} className={k === '' || k === '⌫' ? s.x : ''}>
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className={`${s.view} ${cur === 1 ? s.on : ''}`}>
            <div className={s.vh}>
              <Back />
              Review transfer
            </div>
            <div className={s.bigAmt}>
              <small>You&apos;re sending</small>
              <b className={u.num}>₦25,000.00</b>
            </div>
            <div className={s.sum}>
              <div><span>To</span><b>Chiamaka Eze</b></div>
              <div><span>Bank</span><b>Access Bank</b></div>
              <div><span>Account</span><b className={u.num}>0456 789 112</b></div>
              <div><span>Fee</span><b className={u.num}>₦10.00</b></div>
              <div><span>Total</span><b className={u.num}>₦25,010.00</b></div>
            </div>
            <div className={s.confirm}>Confirm transfer</div>
          </div>

          <div className={`${s.view} ${cur === 2 ? s.on : ''}`}>
            <div className={s.vh}>
              <Back />
              Account tiers
            </div>
            <div className={`${s.tierrow} ${s.cur}`}>
              <span className={`${s.chip} ${s.chipLvl}`}>LVL 1</span>
              <span className={s.grow}>
                <b>Tier 1</b>
                <small>₦200,000 daily limit</small>
              </span>
              <span className={`${s.chip} ${s.chipCredit}`}>Current</span>
            </div>
            <div className={s.tierrow}>
              <span className={s.lock}><Glyph name="lock" /></span>
              <span className={s.grow}>
                <b>Tier 2</b>
                <small>Verify your identity to unlock</small>
              </span>
            </div>
            <div className={s.tierrow}>
              <span className={s.lock}><Glyph name="lock" /></span>
              <span className={s.grow}>
                <b>Tier 3</b>
                <small>Highest limits</small>
              </span>
            </div>
            <div className={s.confirm} style={{ background: 'var(--green)', color: 'var(--green-darker)' }}>
              Upgrade my tier
            </div>
          </div>

          <div className={`${s.view} ${cur === 3 ? s.on : ''}`}>
            <div className={s.vh}>Notifications</div>
            {alerts.map((a) => (
              <div key={a.ref} className={s.notif}>
                <span className={s.ic} style={a.credit ? { background: '#DDF5E5', color: '#1E8A4A' } : { background: '#F6E1E1', color: '#BC5355' }}>
                  <Glyph name={a.credit ? 'down' : 'up'} />
                </span>
                <span className={s.grow}>
                  <b>{a.title}</b>
                  <small>{a.who}</small>
                  <span className={s.ref}>
                    <span className={u.num}>Ref {a.ref}</span>
                    <span className={s.share}>Share</span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Phone>
      </div>
    </div>
  );
}
