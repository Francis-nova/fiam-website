import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

/** Branded 1200×630 social card: eyebrow, headline and the white Fiam logo. */
export async function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [bold, logo] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/ProductSans-Bold.ttf')),
    readFile(join(process.cwd(), 'public/images/fiam-logo-white.svg')),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'radial-gradient(60% 80% at 80% 20%, #105455 0%, #042323 70%)',
          color: '#ffffff',
          fontFamily: 'Product Sans',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 26, color: '#8fdead' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#53bc7b' }} />
          {eyebrow}
        </div>
        <div style={{ display: 'flex', fontSize: title.length > 60 ? 60 : 72, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <img src={logoSrc} width={238} height={50} alt="" />
          <div style={{ fontSize: 24, color: '#9fb8b2' }}>usefiam.com</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Product Sans', data: bold, weight: 700, style: 'normal' }] },
  );
}
