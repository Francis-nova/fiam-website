import Link from 'next/link';
import { site } from '@/config/site';
import { Icon } from './Icon';
import { GooglePlayButton, WaitlistButton } from './StoreButtons';
import s from './SiteFooter.module.css';

type FooterLink = { label: string; href: string; soon?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Features', href: '/features/' },
      { label: 'Fund your wallet', href: '/features/#fund' },
      { label: 'Send money', href: '/features/#send' },
      { label: 'Transaction history', href: '/features/#history' },
      { label: 'Account tiers & limits', href: '/features/#limits' },
      { label: 'Crypto', href: '/crypto/', soon: true },
    ],
  },
  {
    title: 'TRUST',
    links: [
      { label: 'Security', href: '/security/' },
      { label: 'Staying safe', href: '/security/#tips' },
      { label: 'Report fraud', href: '/contact/#fraud' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About us', href: '/about/' },
      { label: 'What we believe', href: '/about/#values' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Help centre', href: '/help/' },
      { label: 'Getting started', href: '/help/#account' },
      { label: 'Transfers', href: '/help/#transfers' },
      { label: 'Get in touch', href: '/contact/' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy policy', href: '/privacy/' },
      { label: 'Terms of use', href: '/terms/' },
      { label: 'Cookies', href: '/privacy/#cookies' },
    ],
  },
];

const socials = [
  { label: 'X', href: site.social.x, icon: 'ri:twitter-x-fill', size: 16 },
  { label: 'Instagram', href: site.social.instagram, icon: 'ri:instagram-line', size: 17 },
  { label: 'LinkedIn', href: site.social.linkedin, icon: 'ri:linkedin-fill', size: 16 },
] as const;

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.cta}>
          <div className={s.ctaText}>
            <span className={s.ctaTitle}>Your naira, calm and in control.</span>
            <span className={s.ctaSub}>Free on Android. iPhone coming soon.</span>
          </div>
          <div className={s.ctaButtons}>
            <GooglePlayButton size="md" href="/#download" />
            <WaitlistButton size="md" />
          </div>
        </div>

        <div className={s.grid}>
          <div className={s.brandCol}>
            <Link href="/" className={s.brand}>
              <span className={s.logo}>
                <img src="/images/fiam-logo.png" alt="" width={22} height={22} />
              </span>
              <span className={s.name}>Fiam Finance</span>
            </Link>
            <span className={s.tagline}>Send, fund and track your naira in one calm wallet.</span>
          </div>
          {columns.map((col) => (
            <div key={col.title} className={s.col}>
              <span className={s.colTitle}>{col.title}</span>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className={s.link}>
                  {l.label}
                  {l.soon && <span className={s.soon}>Soon</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={s.maker}>
          <span className={s.makerLogo}>
            <img src="/images/awuya-digital.png" alt="Awuya Digital" width={87} height={44} />
          </span>
          <div className={s.makerText}>
            <span className={s.makerTitle}>Fiam Finance is a product of Awuya Digital Limited.</span>
            <span className={s.makerSub}>Built and operated by Awuya Digital Limited, Nigeria.</span>
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.copy}>© 2026 Awuya Digital Limited. All rights reserved.</span>
          <div className={s.socials}>
            {socials.map((x) => (
              <a key={x.label} href={x.href} aria-label={x.label} className={s.social}>
                <Icon name={x.icon} size={x.size} color="#FFFFFF" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
