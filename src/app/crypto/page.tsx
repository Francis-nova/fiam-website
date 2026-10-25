import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMetadata, webPageLd } from '@/lib/seo';
import { Accordion } from '@/components/Accordion';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import { PhoneFrame } from '@/components/PhoneFrame';
import { WaitlistForm } from '@/components/WaitlistForm';
import x from '@/components/sections.module.css';
import s from './crypto.module.css';

const title = 'USDT, BTC & ETH Wallet in Naira (Soon)';
const description =
  'Deposit and pay out USDT, BTC and ETH in the same wallet as your naira. See balances at live naira rates and every fee before you confirm. Join the waitlist.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/crypto/',
  keywords: ['USDT to naira', 'crypto wallet Nigeria', 'sell USDT in Nigeria', 'BTC to naira', 'TRC20 USDT wallet'],
});

type Coin = 'usdt' | 'btc' | 'eth';
const coinIcon = (c: Coin) => `cryptocurrency-color:${c}` as IconName;

const heroCoins: { c: Coin; name: string; detail: string }[] = [
  { c: 'usdt', name: 'Tether', detail: 'USDT · TRC-20 and ERC-20' },
  { c: 'btc', name: 'Bitcoin', detail: 'BTC · Bitcoin network' },
  { c: 'eth', name: 'Ethereum', detail: 'ETH · Ethereum network' },
];

const abilities: { icon: IconName; title: string; body: string }[] = [
  { icon: 'solar:qr-code-bold', title: 'Deposit', body: 'Get a wallet address and QR code for each asset to receive payments.' },
  { icon: 'solar:wallet-money-bold', title: 'Hold', body: 'See each balance and its naira value, updated with live rates.' },
  { icon: 'solar:square-transfer-horizontal-bold', title: 'Pay out', body: 'Send to any external wallet, with the network fee and arrival time shown upfront.' },
];

const depositSteps = [
  ['Pick the coin and network', "Choose USDT, BTC or ETH, then the network you're sending on."],
  ['Copy your address or scan the QR', "Paste it into your exchange or wallet's withdraw screen."],
  ['Get credited after confirmation', 'We notify you when it arrives, with its naira value at that moment.'],
];

const payoutSteps: { icon: IconName; title: string; body: string }[] = [
  { icon: 'solar:pen-new-square-bold', title: 'Type or tap an amount', body: 'Use presets like 25%, 50% or Max.' },
  { icon: 'solar:clipboard-check-bold', title: 'Paste the address', body: 'We check the format matches the network.' },
  { icon: 'solar:bill-list-bold', title: 'Review the breakdown', body: 'Network fee, arrival time, and what they receive.' },
  { icon: 'solar:lock-keyhole-bold', title: 'Confirm with your PIN', body: 'You get a receipt with the transaction hash.' },
];

const networks: { c: Coin; sym: string; name: string; label: string; net: string }[] = [
  { c: 'usdt', sym: 'USDT', name: 'Tether', label: 'Networks', net: 'TRC-20, ERC-20' },
  { c: 'btc', sym: 'BTC', name: 'Bitcoin', label: 'Network', net: 'Bitcoin' },
  { c: 'eth', sym: 'ETH', name: 'Ethereum', label: 'Network', net: 'Ethereum (ERC-20)' },
];

const faqs = [
  { q: 'When does crypto launch?', a: "Soon. Waitlist members get access first and we'll email you the day it opens." },
  {
    q: 'How long does a deposit take?',
    a: 'It depends on the network. Your balance updates once the network confirms the transaction, usually within minutes. The app shows progress as it confirms.',
  },
  {
    q: 'What does a payout cost?',
    a: "You pay the network fee for the chain you send on. It's shown on the review screen, together with what the recipient receives, before you confirm.",
  },
  {
    q: 'What if I send on the wrong network?',
    a: "Funds sent on a network we don't support for that address may not be recoverable. Always check that the network matches, and send a small test amount first if you're unsure.",
  },
  { q: 'Do I need to verify my identity?', a: 'Yes. Crypto deposits and payouts need a verified account, the same as higher naira limits.' },
];

export default function CryptoPage() {
  return (
    <>
      <JsonLd data={[webPageLd({ type: 'WebPage', name: title, description, path: '/crypto/' }), breadcrumbLd([{ name: 'Crypto', path: '/crypto/' }]), faqLd(faqs)]} />
      <section className={x.gradient}>
        <div className={x.blob} style={{ top: -200, right: -140, width: 560, height: 560, background: 'rgba(221,169,12,0.10)' }} />
        <div className={`${x.wrap} ${x.padHero} ${x.split}`} style={{ gap: 48 }}>
          <div className={`${x.stack} ${x.g20}`}>
            <span className={x.soonPill}>Coming soon</span>
            <h1 className={x.h1}>Crypto, right next to your naira.</h1>
            <p className={x.lead} style={{ maxWidth: 520 }}>
              Receive, hold and pay out USDT, BTC and ETH in the same calm wallet. Join the waitlist for early access.
            </p>
            <WaitlistForm variant="crypto" buttonLabel="Get early access" success="You're on the list. We'll email {email} first." />
          </div>
          <div className={`${x.stack} ${x.g12}`}>
            {heroCoins.map((c) => (
              <div key={c.c} className={`${x.glassCard} ${s.heroCoin}`}>
                <Icon name={coinIcon(c.c)} size={40} />
                <div className={x.stack} style={{ gap: 2 }}>
                  <span className={s.heroCoinName}>{c.name}</span>
                  <span className={s.heroCoinDetail}>{c.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${x.stack} ${x.g40}`}>
          <h2 className={x.h2} style={{ maxWidth: 640 }}>
            What you&apos;ll be able to do
          </h2>
          <div className={x.cards}>
            {abilities.map((a) => (
              <div key={a.title} className={x.card}>
                <Icon name={a.icon} size={28} color="var(--green)" />
                <span className={x.cardTitle}>{a.title}</span>
                <span className={x.cardBody}>{a.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deposit" className={x.gray}>
        <div className={`${x.wrap} ${x.pad} ${x.split}`}>
          <div className={`${x.stack} ${x.g20}`}>
            <span className={s.tag}>
              <Icon name="solar:arrow-down-bold" size={16} color="#53BC7B" />
              DEPOSIT
            </span>
            <h2 className={x.h2}>Receive crypto from any wallet or exchange.</h2>
            <p className={x.body}>
              Every Fiam account gets its own deposit address for each coin and network. Share it, or show the QR code,
              and your balance updates once the network confirms.
            </p>
            <ol className={s.steps}>
              {depositSteps.map(([t, b], i) => (
                <li key={t} className={s.step}>
                  <span className={s.stepN}>{i + 1}</span>
                  <div className={x.stack} style={{ gap: 2 }}>
                    <span className={s.stepT}>{t}</span>
                    <span className={s.stepB}>{b}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className={`${x.stage} ${x.stageDark}`}>
            <PhoneFrame screen="collect" size="sectionTall" bordered />
          </div>
        </div>
      </section>

      <section id="payout" className={x.white}>
        <div className={`${x.wrap} ${x.pad} ${x.split}`}>
          <div className={`${x.stage} ${x.stageGray}`}>
            <PhoneFrame screen="payout" size="sectionTall" />
          </div>
          <div className={`${x.stack} ${x.g20}`}>
            <span className={`${s.tag} ${s.tagGray}`}>
              <Icon name="solar:arrow-up-bold" size={16} color="var(--yellow)" />
              PAYOUT
            </span>
            <h2 className={x.h2}>Send crypto out, with no surprises.</h2>
            <p className={x.body}>
              Pay out to any external wallet. Before you confirm, you see the network fee, how long it should take, and
              exactly what the recipient will get.
            </p>
            <div className={s.payoutGrid}>
              {payoutSteps.map((p) => (
                <div key={p.title} className={s.payoutStep}>
                  <Icon name={p.icon} size={22} color="var(--green)" />
                  <span className={s.payoutT}>{p.title}</span>
                  <span className={s.payoutB}>{p.body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={x.dark}>
        <div className={`${x.wrap} ${x.pad} ${x.stack}`} style={{ gap: 36 }}>
          <div className={`${x.stack} ${x.g14}`} style={{ maxWidth: 640 }}>
            <span className={x.eyebrow}>Supported at launch</span>
            <h2 className={x.h2}>Coins and networks</h2>
          </div>
          <div className={x.cards}>
            {networks.map((n) => (
              <div key={n.sym} className={`${x.glassCard} ${s.net}`}>
                <div className={s.netHead}>
                  <Icon name={coinIcon(n.c)} size={36} />
                  <div className={x.stack}>
                    <span className={s.netSym}>{n.sym}</span>
                    <span className={s.netName}>{n.name}</span>
                  </div>
                </div>
                <dl className={s.netRows}>
                  {[
                    [n.label, n.net],
                    ['Deposit', 'Yes'],
                    ['Payout', 'Yes'],
                  ].map(([k, v]) => (
                    <div key={k} className={s.netRow}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className={s.warn}>
            <Icon name="solar:danger-triangle-bold" size={24} color="var(--yellow)" />
            <span>
              <b>Always match the network.</b> Sending a coin on a different network from the one you selected can mean
              the funds are lost for good. When in doubt, send a small test amount first.
            </span>
          </div>
        </div>
      </section>

      <section className={x.gray}>
        <div className={`${x.wrap} ${x.narrow} ${x.pad} ${x.stack} ${x.g32}`}>
          <h2 className={x.h2} style={{ textWrap: 'initial' }}>
            Crypto questions
          </h2>
          <Accordion items={faqs} defaultOpen={0} />
        </div>
      </section>
    </>
  );
}
