import { Icon } from './Icon';
import { site } from '@/config/site';
import s from './StoreButtons.module.css';

type Size = 'lg' | 'md';

export function GooglePlayButton({ size = 'lg', href = site.playStoreUrl }: { size?: Size; href?: string }) {
  return (
    <a href={href} className={`${s.btn} ${s[size]} ${s.solid}`}>
      <Icon name="logos:google-play-icon" className={s.icon} />
      <span className={s.label}>
        <span className={s.small}>Get it on</span>
        <span className={s.big}>Google Play</span>
      </span>
    </a>
  );
}

export function WaitlistButton({ size = 'lg', href = '/#waitlist' }: { size?: Size; href?: string }) {
  return (
    <a href={href} className={`${s.btn} ${s[size]} ${s.outline}`}>
      <Icon name="mdi:apple" className={s.icon} />
      <span className={s.label}>
        <span className={s.small}>iPhone</span>
        <span className={s.big}>Join the waitlist</span>
      </span>
    </a>
  );
}
