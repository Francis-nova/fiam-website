import Link from 'next/link';
import { site } from '@/config/site';
import { Logo } from './Glyph';
import u from './ui.module.css';
import s from './SiteFooter.module.css';

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features/' },
      { label: 'Funding', href: '/features/#fund' },
      { label: 'Sending', href: '/features/#send' },
      { label: 'History', href: '/features/#history' },
      { label: 'Tiers & limits', href: '/features/#limits' },
      { label: 'Crypto', href: '/crypto/' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Security', href: '/security/' },
      { label: 'Staying safe', href: '/security/#tips' },
      { label: 'Report fraud', href: '/contact/#fraud' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about/' },
      { label: 'Values', href: '/about/#values' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', href: '/help/' },
      { label: 'Getting started', href: '/help/#account' },
      { label: 'Transfers', href: '/help/#transfers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy-policy/' },
      { label: 'Terms of use', href: '/terms/' },
      { label: 'Cookies', href: '/privacy-policy/#cookies' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className={s.footer}>
      <div className={`${u.wrap} ${s.inner}`}>
        <div className={s.top}>
          <div className={s.about}>
            <Link href="/" className={s.brand}>
              <Logo />
              Fiam
            </Link>
            <p>
              A naira wallet for funding, sending and tracking your money. A product of Awuya Digital Limited, {site.address}.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={s.bottom}>
          <span>© 2026 Awuya Digital Limited. All rights reserved.</span>
          <span>usefiam.com</span>
        </div>
        <div className={s.wordmark} aria-hidden="true">
          fiam
        </div>
      </div>
    </footer>
  );
}
