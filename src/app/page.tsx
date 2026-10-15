import Link from 'next/link';
import { site } from '@/config/site';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import { PhoneFrame, type Screen } from '@/components/PhoneFrame';
import { GooglePlayButton, WaitlistButton } from '@/components/StoreButtons';
import { WaitlistForm } from '@/components/WaitlistForm';
import s from './home.module.css';

export default function HomePage() {
  return (
    <>
      {site.heroVariant === 'B' ? <HeroCentered /> : <HeroSplit />}
      <Features />
      <Security />
      {site.showCryptoTeaser && <CryptoTeaser />}
      <Download />
    </>
  );
}

function LiveBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className={s.badge}>
      <span className={s.badgeDot} />
      {children}
    </span>
  );
}

function MoreLink({ href, children, tone }: { href: string; children: React.ReactNode; tone: 'dark' | 'mint' | 'gold' }) {
  return (
    <Link href={href} className={`${s.more} ${s[`more_${tone}`]}`}>
      {children} <Icon name="solar:arrow-right-linear" size={18} />
    </Link>
  );
}

/* ---------- Hero A · Split ---------- */
function HeroSplit() {
  return (
    <section id="top" className={s.heroA}>
      <div className={s.heroABlob1} />
      <div className={s.heroABlob2} />
      <div className={s.heroAInner}>
        <div className={s.heroACopy}>
          <LiveBadge>Now on Android</LiveBadge>
          <h1 className={s.heroATitle}>Your naira, calm and in control.</h1>
          <p className={s.heroLead}>
            Get your own account number, fund from any bank and send to anyone in Nigeria, with every transfer
            protected by your PIN.
          </p>
          <div className={s.heroButtons}>
            <GooglePlayButton />
            <WaitlistButton href="#waitlist" />
          </div>
        </div>
        <div className={s.heroAVisual}>
          <img src="/images/ob-splash.png" alt="" width={314} height={426} className={s.heroACouple} />
          <PhoneFrame screen="home" size="hero" priority liftActions />
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero B · Centered ---------- */
function HeroCentered() {
  return (
    <section id="top" className={s.heroB}>
      <div className={s.heroBBlob} />
      <div className={s.heroBInner}>
        <LiveBadge>Now on Android · iPhone soon</LiveBadge>
        <h1 className={s.heroBTitle}>Send, fund and track your naira.</h1>
        <p className={`${s.heroLead} ${s.heroBLead}`}>
          One wallet with your own account number, instant transfers to any Nigerian bank and a clear view of every
          naira.
        </p>
        <div className={`${s.heroButtons} ${s.center}`}>
          <GooglePlayButton />
          <WaitlistButton href="#waitlist" />
        </div>
        <div className={s.heroBVisual}>
          <img src="/images/ob-splash.png" alt="" width={314} height={426} className={s.heroBSide} style={{ width: 240 }} />
          <PhoneFrame screen="home" size="heroB" priority />
          <img src="/images/ob-login-hero.png" alt="" width={1624} height={1720} className={s.heroBSide} style={{ width: 260 }} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
const features: { icon: IconName; title: string; body: string; screen: Screen; dark?: boolean }[] = [
  {
    icon: 'solar:card-recive-bold',
    title: 'Fund from any bank',
    body: 'Your own account number. Transfer in from any bank and get credited straight away.',
    screen: 'fund',
  },
  {
    icon: 'solar:plain-bold',
    title: 'Send in seconds',
    body: 'Pay anyone at any Nigerian bank. Review, confirm with your PIN, done, with a receipt every time.',
    screen: 'transfer',
    dark: true,
  },
  {
    icon: 'solar:history-bold',
    title: 'See where it all goes',
    body: 'Search and filter every transaction, with daily totals so you always know your net.',
    screen: 'transactions',
  },
];

function Features() {
  return (
    <section id="features" className={s.features}>
      <div className={s.featuresInner}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>FEATURES</span>
          <h2 className={s.h2}>Everything you do with money, in three taps.</h2>
          <MoreLink href="/features/" tone="dark">
            Explore all features
          </MoreLink>
        </div>
        <div className={s.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={`${s.featureCard} ${f.dark ? s.featureDark : ''}`}>
              <div className={s.featureCopy}>
                <span className={s.featureIcon}>
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className={s.featureTitle}>{f.title}</h3>
                <p className={s.featureBody}>{f.body}</p>
              </div>
              <div className={s.featurePhone}>
                <PhoneFrame screen={f.screen} size="card" bordered={f.dark} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Security ---------- */
const securityPoints: { icon: IconName; title: string; body: string }[] = [
  { icon: 'solar:lock-keyhole-bold', title: 'PIN on every transfer', body: 'Money only leaves your wallet after you confirm with your 4-digit PIN.' },
  { icon: 'solar:eye-scan-bold', title: 'Review before you send', body: 'A clear review step shows the recipient, amount and fee before anything goes out.' },
  { icon: 'solar:user-id-bold', title: 'Verified accounts', body: 'Tiered identity checks keep limits sensible and keep fraud out.' },
  { icon: 'solar:bell-bing-bold', title: 'Instant alerts', body: 'Every credit and debit shows up right away, with a reference you can share.' },
];

function Security() {
  return (
    <section id="security" className={s.security}>
      <div className={s.securityInner}>
        <div className={s.securityCopy}>
          <div className={s.sectionHeadTight}>
            <span className={`${s.eyebrow} ${s.eyebrowMint}`}>SECURITY</span>
            <h2 className={s.h2}>Built so nothing moves without you.</h2>
            <MoreLink href="/security/" tone="mint">
              How we keep you safe
            </MoreLink>
          </div>
          <div className={s.securityGrid}>
            {securityPoints.map((p) => (
              <div key={p.title} className={s.securityPoint}>
                <Icon name={p.icon} size={26} color="#53BC7B" />
                <span className={s.securityTitle}>{p.title}</span>
                <span className={s.securityBody}>{p.body}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={s.securityArt}>
          <div className={s.securityArtBlob} />
          <img src="/images/ob-approved.png" alt="" width={393} height={648} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Crypto teaser ---------- */
function CryptoTeaser() {
  return (
    <section className={s.teaser} aria-labelledby="crypto-teaser-title">
      <div className={s.teaserInner}>
        <div className={s.teaserCard}>
          <div className={s.teaserBlob} />
          <div className={s.teaserCopy}>
            <span className={s.soonPill}>Coming soon</span>
            <h2 id="crypto-teaser-title" className={s.teaserTitle}>
              Crypto, in the same wallet.
            </h2>
            <p className={s.teaserBody}>
              Deposit and pay out USDT, BTC and ETH alongside your naira, with every balance shown in naira at live rates.
            </p>
            <div className={s.teaserPoints}>
              <div className={s.teaserPoint}>
                <Icon name="solar:arrow-down-bold" size={20} color="#53BC7B" style={{ marginTop: 2 }} />
                <span>
                  <b>Deposit</b>: your own address and QR for each coin and network.
                </span>
              </div>
              <div className={s.teaserPoint}>
                <Icon name="solar:arrow-up-bold" size={20} color="#DDA90C" style={{ marginTop: 2 }} />
                <span>
                  <b>Payout</b>: send to any wallet, with the fee and arrival time upfront.
                </span>
              </div>
            </div>
            <MoreLink href="/crypto/" tone="gold">
              See what&apos;s coming
            </MoreLink>
          </div>
          <div className={s.coins}>
            {(['cryptocurrency-color:usdt', 'cryptocurrency-color:btc', 'cryptocurrency-color:eth'] as const).map((c) => (
              <span key={c} className={s.coin}>
                <Icon name={c} size={32} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Download + waitlist ---------- */
function Download() {
  return (
    <section id="download" className={s.download}>
      <div className={s.downloadBlob} />
      <div className={s.downloadInner}>
        <div className={s.downloadCopy}>
          <h2 className={s.downloadTitle}>Get Fiam Finance today.</h2>
          <p className={s.downloadLead}>Free to download on Android. Set up your account in minutes.</p>
          <div className={s.selfStart}>
            <GooglePlayButton />
          </div>
        </div>
        <div id="waitlist" className={s.waitlist}>
          <div className={s.waitlistHead}>
            <Icon name="mdi:apple" size={24} color="#FFFFFF" />
            <span className={s.waitlistTitle}>On iPhone? Join the waitlist.</span>
          </div>
          <span className={s.waitlistBody}>
            We&apos;ll email you once when Fiam lands on the App Store, plus early access to crypto.
          </span>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
