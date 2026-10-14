import type { Metadata } from 'next';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import { PhoneFrame, type Screen } from '@/components/PhoneFrame';
import x from '@/components/sections.module.css';
import s from './features.module.css';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Fund from any bank, send to any Nigerian bank in seconds and track every naira, all from one wallet.',
};

function Checks({ items }: { items: string[] }) {
  return (
    <div className={x.checks}>
      {items.map((t) => (
        <div key={t} className={x.check}>
          <Icon name="solar:check-circle-bold" size={22} color="#53BC7B" />
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function Copy({ icon, title, body, children }: { icon: IconName; title: string; body: string; children: React.ReactNode }) {
  return (
    <div className={`${x.stack} ${x.g18}`}>
      <span className={x.iconTile}>
        <Icon name={icon} size={24} />
      </span>
      <h2 className={x.h2}>{title}</h2>
      <p className={x.body}>{body}</p>
      {children}
    </div>
  );
}

function Stage({ screen, dark = false }: { screen: Screen; dark?: boolean }) {
  return (
    <div className={`${x.stage} ${dark ? x.stageDark : x.stageGray}`}>
      <PhoneFrame screen={screen} size="section" bordered={dark} />
    </div>
  );
}

const tiers = [
  { n: 'TIER 1', title: 'Get started', body: 'Phone number and BVN. Enough for everyday transfers.' },
  { n: 'TIER 2', title: 'Verified ID', body: 'Add a government ID and a selfie for higher daily limits.' },
  { n: 'TIER 3', title: 'Full access', body: 'Proof of address unlocks our highest limits.', highlight: true },
];

export default function FeaturesPage() {
  return (
    <>
      <section className={x.gradient}>
        <div className={x.blob} style={{ top: -200, right: -160, width: 560, height: 560, background: 'rgba(83,188,123,0.13)' }} />
        <div className={`${x.wrap} ${x.padHero} ${x.stack} ${x.g20}`}>
          <span className={x.eyebrow}>FEATURES</span>
          <h1 className={x.h1} style={{ maxWidth: 760 }}>
            The essentials, done properly.
          </h1>
          <p className={x.lead} style={{ maxWidth: 560 }}>
            Fund, send and track your naira from one wallet. No clutter, no guesswork.
          </p>
          <div className={x.chips} style={{ marginTop: 8 }}>
            <a href="#fund" className={x.chip}>Fund</a>
            <a href="#send" className={x.chip}>Send</a>
            <a href="#history" className={x.chip}>History</a>
            <a href="#limits" className={x.chip}>Tiers &amp; limits</a>
          </div>
        </div>
      </section>

      <section id="fund" className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${x.split}`}>
          <Copy
            icon="solar:card-recive-bold"
            title="Fund from any bank, instantly."
            body="Every Fiam account comes with its own account number. Send money to it from any Nigerian bank app and it lands in your wallet straight away."
          >
            <Checks
              items={[
                'A personal account number, created at sign-up',
                'Copy and share it in one tap',
                'See how much of your daily limit is left',
              ]}
            />
          </Copy>
          <Stage screen="fund" />
        </div>
      </section>

      <section id="send" className={x.gray}>
        <div className={`${x.wrap} ${x.pad} ${x.split}`}>
          <Stage screen="transfer" dark />
          <Copy
            icon="solar:plain-bold"
            title="Send to any bank in seconds."
            body="Pick a bank, enter the account number and we confirm the name before you pay. Type an amount or tap a quick preset."
          >
            <div className={s.steps}>
              {['Enter details', 'Review', 'Confirm with PIN'].map((t, i) => (
                <div key={t} className={s.step}>
                  <span className={s.stepN}>STEP {i + 1}</span>
                  <span className={s.stepT}>{t}</span>
                </div>
              ))}
            </div>
            <p className={x.muted} style={{ fontSize: 15, lineHeight: 1.5 }}>
              Every transfer gets a receipt with a reference number you can share.
            </p>
          </Copy>
        </div>
      </section>

      <section id="history" className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${x.split}`}>
          <Copy
            icon="solar:history-bold"
            title="Every naira, accounted for."
            body="Search by name or reference, filter by money in or out, and see your net total for each day. Tap any transaction for its full receipt."
          >
            <Checks
              items={[
                'Search and filters that respond as you type',
                'Daily net totals at a glance',
                'Shareable receipts for every transfer',
              ]}
            />
          </Copy>
          <Stage screen="transactions" />
        </div>
      </section>

      <section id="limits" className={x.dark}>
        <div className={`${x.wrap} ${x.pad} ${x.stack} ${x.g40}`}>
          <div className={`${x.stack} ${x.g14}`} style={{ maxWidth: 640 }}>
            <span className={x.eyebrow}>ACCOUNT TIERS</span>
            <h2 className={x.h2}>Start small. Grow your limits as you go.</h2>
            <p className={x.bodyOnDark}>
              Verify more about yourself to unlock higher daily limits. Upgrading takes a few minutes in the app.
            </p>
          </div>
          <div className={x.cards}>
            {tiers.map((t) => (
              <div key={t.n} className={`${s.tier} ${t.highlight ? s.tierHi : x.glassCard}`}>
                <span className={s.tierN}>{t.n}</span>
                <span className={s.tierTitle}>{t.title}</span>
                <span className={s.tierBody}>{t.body}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
            Exact limits for each tier are shown in the app under Profile → Account limits.
          </span>
        </div>
      </section>
    </>
  );
}
