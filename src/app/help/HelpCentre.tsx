'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AccordionItem, type QA } from '@/components/Accordion';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import x from '@/components/sections.module.css';
import s from './help.module.css';

const groups: { id: string; title: string; icon: IconName; items: QA[] }[] = [
  {
    id: 'account',
    title: 'Getting started',
    icon: 'solar:user-plus-bold',
    items: [
      {
        q: 'How do I open an account?',
        a: 'Download Fiam from Google Play, sign up with your phone number, verify with the code we send and set your PIN. It takes a few minutes.',
      },
      {
        q: 'How do I get my account number?',
        a: 'Your personal account number is created as soon as you sign up. Find it on the Fund screen, where you can copy or share it.',
      },
      { q: 'Is there an iPhone app?', a: "Not yet. Join the waitlist on our home page and we'll email you when it launches." },
    ],
  },
  {
    id: 'funding',
    title: 'Funding',
    icon: 'solar:card-recive-bold',
    items: [
      { q: 'How do I add money?', a: 'Transfer from any Nigerian bank app to your Fiam account number. It shows up in your wallet straight away.' },
      { q: 'Does funding cost anything?', a: 'Funding your wallet is free.' },
      {
        q: "My deposit hasn't arrived",
        a: "Most deposits arrive within seconds. If it's been more than 30 minutes, contact us with the sender's bank and the transfer reference.",
      },
    ],
  },
  {
    id: 'transfers',
    title: 'Transfers',
    icon: 'solar:plain-bold',
    items: [
      {
        q: 'How long do transfers take?',
        a: 'Transfers to Nigerian banks usually arrive within seconds. You get a receipt with a reference number for every one.',
      },
      { q: 'What does a transfer cost?', a: "A small fee applies to outgoing transfers. It's shown on the review screen before you confirm." },
      {
        q: 'I sent money to the wrong account',
        a: "Transfers can't be reversed once confirmed, which is why we show the recipient's name first. Contact us right away and we'll help you reach the receiving bank.",
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & limits',
    icon: 'solar:shield-check-bold',
    items: [
      { q: 'I forgot my PIN', a: "Go to Profile → Security → Reset PIN. You'll verify your identity before setting a new one." },
      {
        q: 'How do I raise my limits?',
        a: 'Upgrade your tier in the app by adding a government ID and selfie, or proof of address for the highest tier.',
      },
      { q: 'I lost my phone', a: "Contact us straight away and we'll freeze your account until you're back in." },
    ],
  },
];

export function HelpCentre() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState('');

  const q = query.trim().toLowerCase();
  const visible = groups
    .map((g) => ({ ...g, items: g.items.filter((f) => !q || `${f.q} ${f.a}`.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length);

  return (
    <>
      <section className={x.gradient}>
        <div className={`${x.wrap} ${x.narrow} ${x.padHeroSm} ${s.hero}`}>
          <span className={x.eyebrow}>Help centre</span>
          <img src="/images/ob-login-hero.png" alt="" width={1624} height={1720} className={s.heroArt} />
          <h1 className={s.title}>How can we help?</h1>
          <div className={s.search}>
            <Icon name="solar:magnifer-linear" size={20} color="var(--muted)" className={s.searchIcon} />
            <input
              type="search"
              placeholder="Search questions"
              aria-label="Search questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={`${x.chips} ${s.cats}`}>
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className={`${x.chip} ${s.cat}`}>
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={x.gray}>
        <div className={`${x.wrap} ${x.narrow} ${x.padSm} ${x.stack} ${x.g48}`}>
          {visible.map((g) => (
            <div key={g.id} id={g.id} className={`${x.stack} ${x.g14} ${s.group}`}>
              <div className={s.groupHead}>
                <span className={s.groupIcon}>
                  <Icon name={g.icon} size={20} color="#8FDEAD" />
                </span>
                <h2 className={s.groupTitle}>{g.title}</h2>
              </div>
              {g.items.map((f) => {
                const key = g.id + f.q;
                return (
                  <AccordionItem key={key} item={f} open={open === key} onToggle={() => setOpen((o) => (o === key ? '' : key))} />
                );
              })}
            </div>
          ))}
          {visible.length === 0 && (
            <div className={s.empty} role="status">
              No questions match &ldquo;{query}&rdquo;. Try another word, or contact us below.
            </div>
          )}
          <div className={s.still}>
            <span className={s.stillTitle}>Still need help?</span>
            <Link href="/contact/" className={`${x.btn} ${x.btnGreen}`}>
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
