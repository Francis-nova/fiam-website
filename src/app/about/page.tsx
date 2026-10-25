import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMetadata, webPageLd } from '@/lib/seo';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import x from '@/components/sections.module.css';
import s from './about.module.css';

const title = 'About Fiam: A Calmer Way to Move Naira';
const description =
  'Fiam is a naira wallet built by Awuya Digital Limited in Lagos. Our promise: clear fees, fast transfers and protection that stays out of your way.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/about/',
  keywords: ['about Fiam', 'Awuya Digital Limited', 'Nigerian fintech Lagos'],
});

const promises = [
  ['Clear, always', 'Fees shown before you pay. Names confirmed before you send. No fine print surprises.'],
  ['Fast by default', 'The things you do most take the fewest taps.'],
  ['Safe without friction', 'Protection where it matters, out of your way everywhere else.'],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[webPageLd({ type: 'AboutPage', name: title, description, path: '/about/' }), breadcrumbLd([{ name: 'About', path: '/about/' }])]} />
      <section className={x.gradient}>
        <div className={`${x.wrap} ${x.stack} ${x.g20} ${s.heroCopy}`}>
          <span className={x.eyebrow}>About Fiam</span>
          <h1 className={x.h1} style={{ maxWidth: 820 }}>
            Money in Nigeria should feel calm.
          </h1>
          <p className={x.lead} style={{ maxWidth: 600 }}>
            We&apos;re building a wallet that&apos;s simple, fast and honest about what&apos;s happening with your money.
          </p>
        </div>
        <div className={x.wrap}>
          <div className={s.banner}>
            <div className={x.blob} style={{ top: -120, left: '50%', marginLeft: -260, width: 520, height: 520, background: 'rgba(83,188,123,0.14)' }} />
            <img src="/images/ob-splash.png" alt="" width={314} height={426} style={{ height: '96%', maxWidth: '40%' }} />
            <img src="/images/ob-approved.png" alt="" width={393} height={648} style={{ height: '88%', maxWidth: '28%' }} />
            <img src="/images/ob-login-hero.png" alt="" width={1624} height={1720} style={{ height: '90%', maxWidth: '34%' }} />
          </div>
        </div>
      </section>

      <section className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${s.story}`}>
          <h2 className={x.h2}>Why we started</h2>
          <div className={`${x.stack} ${x.g18}`}>
            <p className={s.storyP}>
              Moving money shouldn&apos;t mean squinting at cluttered screens, guessing at fees or wondering if a transfer
              went through. We started Fiam to fix that, one essential at a time.
            </p>
            <p className={s.storyP}>
              We&apos;re a small team building for everyday people and small businesses. We&apos;re starting with the basics,
              fund, send and track, and we&apos;ll grow the wallet with you.
            </p>
          </div>
        </div>
      </section>

      <section id="values" className={x.gray}>
        <div className={`${x.wrap} ${x.pad} ${x.stack} ${x.g40}`}>
          <div className={`${x.stack} ${x.g14}`}>
            <span className={`${x.eyebrow} ${x.eyebrowGreen}`}>What we believe</span>
            <h2 className={x.h2} style={{ textWrap: 'initial' }}>
              Three promises
            </h2>
          </div>
          <div className={x.cards}>
            {promises.map(([t, b], i) => (
              <div key={t} className={`${x.card} ${x.cardOnGray}`}>
                <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
                <span className={x.cardTitle}>{t}</span>
                <span className={x.cardBody}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={x.white}>
        <div className={`${x.wrap} ${x.padSm} ${x.banner}`}>
          <div className={x.stack} style={{ gap: 8, maxWidth: 600 }}>
            <span className={s.talkTitle}>Want to talk to us?</span>
            <span className={x.muted} style={{ fontSize: 16, lineHeight: 1.5 }}>
              Partnerships, press or just feedback, we read everything.
            </span>
          </div>
          <Link href="/contact/" className={`${x.btn} ${x.btnDark}`}>
            Get in touch <Icon name="solar:arrow-right-linear" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
