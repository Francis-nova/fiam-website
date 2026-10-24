'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Adds `.play` to `[data-rv]` elements below the fold as they scroll in (styles in globals.css). */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('play');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -6% 0px' },
    );
    document.querySelectorAll('[data-rv]').forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
