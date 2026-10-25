'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AccordionItem } from '@/components/Accordion';
import { Icon } from '@/components/Icon';
import x from '@/components/sections.module.css';
import { groups } from './faqs';
import s from './help.module.css';

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
