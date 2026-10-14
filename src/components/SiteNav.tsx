'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/config/site';
import { Icon } from './Icon';
import s from './SiteNav.module.css';

function Soon() {
  return <span className={s.soon}>Soon</span>;
}

export function SiteNav() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className={s.header}>
      <div className={s.bar}>
        <Link href="/" className={s.brand}>
          <span className={s.logo}>
            <img src="/images/fiam-logo.png" alt="" width={22} height={22} />
          </span>
          <span className={s.name}>Fiam Finance</span>
        </Link>

        <nav className={s.desktop} aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`${s.link} ${isActive(l.href) ? s.active : ''}`}
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              {l.label}
              {'soon' in l && l.soon && <Soon />}
            </Link>
          ))}
        </nav>

        <div className={s.actions}>
          <a href="/#download" className={s.cta}>
            <Icon name="logos:google-play-icon" size={16} />
            Get the app
          </a>
          <button
            type="button"
            className={s.menuBtn}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} size={22} color="#FFFFFF" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className={s.mobile} aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`${s.mobileLink} ${isActive(l.href) ? s.active : ''}`}
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              <span className={s.mobileLabel}>
                {l.label}
                {'soon' in l && l.soon && <Soon />}
              </span>
              <Icon name="solar:alt-arrow-right-linear" size={18} color="rgba(255,255,255,0.5)" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
