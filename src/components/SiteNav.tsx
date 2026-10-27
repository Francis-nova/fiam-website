'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks, site } from '@/config/site';
import { Glyph, LogoLockup } from './Glyph';
import u from './ui.module.css';
import s from './SiteNav.module.css';

function ThemeToggle() {
  const [light, setLight] = useState(false);

  // The pre-paint script in layout.tsx already applied the saved theme; just sync the label.
  useEffect(() => setLight(document.documentElement.getAttribute('data-theme') === 'light'), []);

  function toggle() {
    const next = light ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    setLight(!light);
    try {
      localStorage.setItem('fiam-theme', next);
    } catch {}
  }

  return (
    <button type="button" className={s.toggle} onClick={toggle} aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}>
      <Glyph name="moon" className={s.moon} />
      <Glyph name="sun" className={s.sun} />
    </button>
  );
}

export function SiteNav() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = matchMedia('(min-width: 881px)');
    const onWide = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <>
      <header className={`${s.nav} ${scrolled ? s.scrolled : ''} ${open ? s.open : ''}`}>
        <div className={`${u.wrap} ${s.bar}`}>
          <Link href="/" className={s.brand} aria-label="Fiam home">
            <LogoLockup aria-hidden="true" />
          </Link>

          <nav className={s.links} aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.key} href={l.href} className={isActive(l.href) ? s.active : ''} aria-current={isActive(l.href) ? 'page' : undefined}>
                {l.label}
                {'soon' in l && l.soon && <span className={u.soon}>Soon</span>}
              </Link>
            ))}
          </nav>

          <div className={s.right}>
            <ThemeToggle />
            <a className={`${u.btn} ${u.btnGreen} ${u.btnSm} ${s.cta}`} href="/#get">
              Get the app
            </a>
            <button
              type="button"
              className={s.menuBtn}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mnav"
              onClick={() => setOpen((o) => !o)}
            >
              <span className={s.bars}>
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>

        <div id="mnav" className={s.mnav}>
          <div>
            <nav className={s.mnavIn} aria-label="Main">
              {navLinks.map((l) => (
                <Link key={l.key} href={l.href} className={s.ml} aria-current={isActive(l.href) ? 'page' : undefined}>
                  <span>
                    {l.label}
                    {'soon' in l && l.soon && <span className={u.soon}>Soon</span>}
                  </span>
                  <Glyph name="arrow" />
                </Link>
              ))}
              <a className={`${u.btn} ${u.btnGreen}`} href={site.playStoreUrl} target="_blank" rel="noopener">
                Get the app
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className={`${s.scrim} ${open ? s.scrimOn : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
    </>
  );
}
