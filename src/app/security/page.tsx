import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import x from '@/components/sections.module.css';
import s from './security.module.css';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Transaction PIN, review before send, identity checks, instant alerts and encrypted data. How Fiam keeps your money safe.',
};

const protections: { icon: IconName; title: string; body: string }[] = [
  { icon: 'solar:lock-keyhole-bold', title: 'Transaction PIN', body: 'A 4-digit PIN, separate from your login, is needed for every transfer.' },
  { icon: 'solar:eye-scan-bold', title: 'Review before send', body: "We confirm the recipient's name and show the fee before you approve." },
  { icon: 'solar:user-id-bold', title: 'Identity checks', body: 'Tiered verification keeps limits sensible and keeps fraud out.' },
  { icon: 'solar:bell-bing-bold', title: 'Instant alerts', body: "You're notified the moment money comes in or goes out." },
  { icon: 'solar:shield-keyhole-bold', title: 'Encrypted data', body: 'Your personal details are encrypted in transit and at rest.' },
  { icon: 'solar:snowflake-bold', title: 'Freeze anytime', body: "Lost your phone? Contact us and we'll freeze your account right away." },
];

const tips = [
  'Keep your PIN and one-time codes to yourself.',
  "Check the recipient's name on the review screen before you confirm.",
  'Be wary of offers that sound too good, or anyone rushing you to pay.',
  'Only download Fiam from Google Play or links on this website.',
];

export default function SecurityPage() {
  return (
    <>
      <section className={x.dark}>
        <div
          className={x.blob}
          style={{ top: -220, left: '50%', marginLeft: -360, width: 720, height: 720, background: 'rgba(83,188,123,0.10)' }}
        />
        <div className={`${x.wrap} ${x.padHero} ${x.split}`} style={{ gap: 48 }}>
          <div className={`${x.stack} ${x.g20}`}>
            <span className={x.eyebrow}>SECURITY</span>
            <h1 className={x.h1}>Nothing moves without you.</h1>
            <p className={x.lead} style={{ maxWidth: 520 }}>
              Every step that touches your money is built to make sure it&apos;s really you, and that you meant it.
            </p>
          </div>
          <div className={s.art}>
            <div className={x.blob} style={{ top: -80, left: -60, width: 300, height: 300, background: 'rgba(83,188,123,0.16)' }} />
            <img src="/images/ob-approved.png" alt="" width={393} height={648} />
          </div>
        </div>
      </section>

      <section className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${x.stack} ${x.g40}`}>
          <h2 className={x.h2} style={{ maxWidth: 640 }}>
            How we protect your wallet
          </h2>
          <div className={x.cards}>
            {protections.map((p) => (
              <div key={p.title} className={x.card}>
                <Icon name={p.icon} size={28} color="#1F4C44" />
                <span className={x.cardTitle}>{p.title}</span>
                <span className={x.cardBody}>{p.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className={x.gray}>
        <div className={`${x.wrap} ${x.pad} ${s.tipsGrid}`}>
          <div className={`${x.stack} ${x.g14}`}>
            <span className={`${x.eyebrow} ${x.eyebrowGreen}`}>STAYING SAFE</span>
            <h2 className={x.h2}>Fiam will never ask for your PIN.</h2>
            <p className={x.body}>Not by phone, email, SMS or social media. If someone does, it isn&apos;t us.</p>
          </div>
          <ol className={s.tips}>
            {tips.map((t, i) => (
              <li key={t} className={s.tip}>
                <span className={s.tipN}>{String(i + 1).padStart(2, '0')}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={x.white}>
        <div className={x.wrap} style={{ paddingTop: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(48px,6vw,80px)' }}>
          <div className={`${s.report} ${x.banner}`}>
            <div className={`${x.stack}`} style={{ gap: 8, maxWidth: 560 }}>
              <span className={s.reportTitle}>Spotted something wrong?</span>
              <span className={s.reportBody}>Report it now and we&apos;ll freeze your account while we look into it.</span>
            </div>
            <Link href="/contact/#fraud" className={`${x.btn} ${x.btnOnRed}`}>
              Report fraud <Icon name="solar:arrow-right-linear" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
