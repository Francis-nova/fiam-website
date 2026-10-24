import type { ReactNode } from 'react';
import { StatusIcons } from './Glyph';
import s from './Phone.module.css';

/** A live-HTML phone mockup: frame, dynamic island and a 9:41 status bar. Decorative, so hidden from AT. */
export function Phone({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${s.phone} ${className}`} aria-hidden="true">
      <div className={s.screen}>
        <div className={s.island} />
        <div className={s.sbar}>
          <span>9:41</span>
          <StatusIcons />
        </div>
        {children}
      </div>
    </div>
  );
}
