import type { SVGProps } from 'react';

/** Line glyphs from the Fiam UI kit (24×24, currentColor). Size them with CSS or the `size` prop. */
const paths = {
  up: <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  down: <path d="M17 7 7 17M15 17H7V9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  plus: <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bell: <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Zm4 4.5a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  back: <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  layers: (
    <>
      <path d="m12 4 9 5-9 5-9-5 9-5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 14 9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  review: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 9h6M9 13h6M9 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  play: (
    <>
      <path d="M4.6 2.9c-.3.3-.4.7-.4 1.2v15.8c0 .5.1.9.4 1.2l.1.1 8.8-8.8v-.2L4.7 2.8l-.1.1Z" fill="#00D7FE" />
      <path d="m16.4 15.3-2.9-2.9v-.2l2.9-2.9.1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1-.2Z" fill="#FFBC00" />
      <path d="M16.5 15.2 13.5 12.2 4.6 21.1c.3.3.9.4 1.5 0l10.4-5.9" fill="#FF3A44" />
      <path d="M16.5 9.2 6.1 3.3c-.6-.4-1.2-.3-1.5 0l8.9 8.9 3-3Z" fill="#48FF48" />
    </>
  ),
  apple: (
    <path
      fill="currentColor"
      d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-4Zm-2.4-7.1c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3Z"
    />
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

export type GlyphName = keyof typeof paths;

export function Glyph({ name, size, ...rest }: { name: GlyphName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...rest}>
      {paths[name]}
    </svg>
  );
}

/** The Fiam mark (three green strokes). */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="10 34 140 90" aria-hidden="true" focusable="false" {...props}>
      <g fill="#53BC7B">
        <path d="M43 39 L57 39 Q72 41 82 50 L116 84 L102 99 Z" />
        <path d="M15 56 L34 56 Q48 58 55 66 L94 105 L94 107 Q86 116 73 120 L52 120 Q57 112 57 104 Q56 98 54 96 Z" />
        <path d="M120 56 L145 56 L124 76 L122 76 L110 64 Q109 62 110 61 Q114 58 120 56 Z" />
      </g>
    </svg>
  );
}

/** iOS status bar icons (signal, wifi, battery) for the phone mockups. */
export function StatusIcons() {
  return (
    <svg viewBox="0 0 64 12" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="6" width="3" height="6" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
        <path d="M30 3.2a8.5 8.5 0 0 1 11 0l-1.4 1.5a6.4 6.4 0 0 0-8.2 0L30 3.2Zm2.6 2.9a4.7 4.7 0 0 1 5.8 0L35.5 9l-2.9-2.9Z" />
        <rect x="45" y="1" width="16" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <rect x="47" y="3" width="11" height="6" rx="1.5" />
        <rect x="62" y="4" width="1.6" height="4" rx=".8" />
      </g>
    </svg>
  );
}
