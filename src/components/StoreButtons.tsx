import { site } from '@/config/site';
import { Glyph } from './Glyph';
import u from './ui.module.css';

export function GooglePlayButton({ className = '' }: { className?: string }) {
  return (
    <a className={`${u.btn} ${u.btnDark} ${className}`} href={site.playStoreUrl} target="_blank" rel="noopener">
      <Glyph name="play" />
      <span className={u.stack}>
        <small>Get it on</small>Google Play
      </span>
    </a>
  );
}

/** Opens the iPhone waitlist dialog (see WaitlistDialog); falls back to the home page CTA without JS. */
export function WaitlistButton({ tone = 'soft', className = '' }: { tone?: 'soft' | 'green'; className?: string }) {
  return (
    <a className={`${u.btn} ${tone === 'green' ? u.btnGreen : u.btnSoft} ${className}`} href="/#get" data-waitlist>
      <Glyph name="apple" />
      <span className={u.stack}>
        <small>iPhone</small>Join the waitlist
      </span>
    </a>
  );
}
