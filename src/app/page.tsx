import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { faqLd, mobileAppLd, pageMetadata, webPageLd } from '@/lib/seo';
import { Glyph, Logo } from '@/components/Glyph';
import { Phone } from '@/components/Phone';
import { PostCard } from '@/components/blog/BlogParts';
import b from '@/components/blog/blog.module.css';
import { posts } from '@/content/blog';
import { GooglePlayButton, WaitlistButton } from '@/components/StoreButtons';
import u from '@/components/ui.module.css';
import { SecurityTabs } from './SecurityTabs';
import s from './home.module.css';

const title = 'Fiam: Naira Wallet & Instant Bank Transfers in Nigeria';
const description =
  'Get your own account number, fund from any Nigerian bank and send money to any bank in seconds, with every transfer protected by your PIN. Free on Android.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/',
  absoluteTitle: true,
  keywords: ['naira wallet', 'mobile wallet Nigeria', 'send money to any bank in Nigeria', 'instant bank transfer app', 'account number app Nigeria', 'Fiam app'],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webPageLd({ name: title, description, path: '/' }), mobileAppLd, faqLd(faqs)]} />
      <Hero />
      <Banks />
      <Features />
      <section id="security" className={`${s.sec} ${s.band}`}>
        <div className={u.wrap}>
          <SectionHead eyebrow="Security" title="Built so nothing moves without you">
            Four checks sit between your balance and anyone who wants it.
          </SectionHead>
          <SecurityTabs />
        </div>
      </section>
      {site.showCryptoTeaser && <Crypto />}
      <Everyday />
      <Guides />
      <Faq />
      <FinalCta />
    </>
  );
}

function SectionHead({ eyebrow, title, children }: { eyebrow: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className={u.secHead} data-rv>
      <span className={u.eyebrow}>
        <Logo />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function Rings({ sizes, style }: { sizes: number[]; style?: React.CSSProperties }) {
  return (
    <div className={s.rings} style={style} aria-hidden="true">
      {sizes.map((n) => (
        <i key={n} style={{ width: n, height: n }} />
      ))}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <header className={s.hero}>
      <div className={u.wrap}>
        <div className={`${u.secHead} ${s.heroHead}`}>
          <span className={u.eyebrow}>
            <span className={u.dot} />
            Now on Android
          </span>
          <h1>
            Your naira, calm <br />
            and in control.
          </h1>
          <p className={s.lead}>
            Get your own account number, fund from any bank and send to anyone in Nigeria, with every transfer protected
            by your PIN.
          </p>
          <div className={u.ctaRow}>
            <GooglePlayButton />
            <WaitlistButton />
          </div>
        </div>

        <div className={s.stage}>
          <Rings sizes={[560, 820, 1100]} />

          <div className={`${s.float} ${s.f1}`} aria-hidden="true">
            <div className={s.fRow}>
              <span className={s.fLabel}>Your account number</span>
              <span className={`${s.chip} ${s.chipDark}`}>Fiam</span>
            </div>
            <div className={`${s.fBig} ${u.num}`} style={{ letterSpacing: '.05em', margin: '6px 0 12px' }}>
              901 234 5678
            </div>
            <div className={s.fRow}>
              <span className={`${s.chip} ${s.chipCredit}`}>+ ₦20,000 received</span>
              <span className={s.iconBtn}>
                <Glyph name="down" />
              </span>
            </div>
          </div>

          <div className={`${s.float} ${s.f2}`} aria-hidden="true">
            <div className={s.fRow}>
              <span className={s.fLabel}>Spent this week</span>
              <span className={`${s.fLabel} ${u.num}`}>₦31,400</span>
            </div>
            <div className={s.minibars}>
              {[40, 62, 30, 52, 92, 44, 24].map((h, i) => (
                <i key={i} className={i === 4 ? s.on : ''} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className={s.minidays}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
          </div>

          <div className={`${s.float} ${s.f3}`} aria-hidden="true">
            <div className={s.fRow} style={{ justifyContent: 'flex-start', gap: 10 }}>
              <span className={s.iconBtn} style={{ background: 'var(--green-darker)', color: 'var(--green-light)' }}>
                <Glyph name="lock" />
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>PIN confirmed</div>
                <div className={s.fLabel}>₦12,500 to Tunde · GTBank</div>
              </div>
            </div>
          </div>

          <div className={s.shotWrap}>
            <img
              className={s.heroShot}
              src="/images/hero-phone.webp"
              width={840}
              height={1301}
              fetchPriority="high"
              alt="A hand holding a phone showing the Fiam home screen with a ₦66,250.00 balance, quick actions and bill payments"
            />
          </div>
          <div className={s.fade} />
        </div>
      </div>
    </header>
  );
}

/* ---------- Banks marquee ---------- */
const banks = ['Access Bank', 'GTBank', 'Zenith Bank', 'First Bank', 'UBA', 'Moniepoint', 'Kuda', 'OPay', 'PalmPay', 'Wema Bank', 'Fidelity', 'Sterling'];

function Banks() {
  return (
    <div className={s.marqueeSec}>
      <p className={s.marqueeTitle}>Fund from and send to any Nigerian bank</p>
      <div className={s.marquee} aria-hidden="true">
        {/* two copies so the -50% loop is seamless */}
        <div className={s.track}>
          {[...banks, ...banks].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */
function Features() {
  return (
    <section id="features" className={s.sec}>
      <div className={u.wrap}>
        <SectionHead eyebrow="Features" title="Everything you do with money, in three taps">
          One account number, every Nigerian bank, and a clear record of where your money went.
        </SectionHead>
        <div className={s.grid3}>
          <article className={s.fcard} data-rv>
            <div className={s.fart}>
              <div className={`${s.mini} ${s.acctcard}`} style={{ transform: 'rotate(-4deg) translateY(-14px)' }}>
                <div className={s.lbl}>Fund your wallet by transfer</div>
                <div className={`${s.no} ${u.num}`}>901 234 5678</div>
                <div className={s.fRow}>
                  <span className={s.fLabel}>Fiam · Ada Okafor</span>
                  <span className={`${s.chip} ${s.chipGhost}`}>Copy</span>
                </div>
              </div>
              <div className={s.toast} style={{ bottom: 28, right: 20 }}>
                <span className={s.ok}>
                  <Glyph name="check" />
                </span>
                <span>
                  Credited <b className={u.num}>₦20,000.00</b>
                </span>
              </div>
            </div>
            <div className={s.fbody}>
              <h3>Fund from any bank</h3>
              <p>Get your own account number. Transfer in from any bank app and see it land straight away.</p>
            </div>
          </article>

          <article className={s.fcard} data-rv>
            <div className={s.fart}>
              <div className={s.mini}>
                <div className={s.banklist}>
                  {[
                    { lg: 'GT', bg: '#E0592A', name: 'Tunde Bakare', acct: 'GTBank · 0123…789' },
                    { lg: 'AC', bg: '#105455', name: 'Chiamaka Eze', acct: 'Access · 0456…112', sel: true },
                    { lg: 'ZB', bg: '#6B5500', name: 'Bola Ade', acct: 'Zenith · 2087…340' },
                  ].map((b) => (
                    <div key={b.lg} className={`${s.bank} ${b.sel ? s.sel : ''}`}>
                      <span className={s.lg} style={{ background: b.bg }}>
                        {b.lg}
                      </span>
                      <span className={s.grow}>
                        {b.name}
                        <small>{b.acct}</small>
                      </span>
                      <span className={`${s.radio} ${b.sel ? s.radioOn : ''}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.fbody}>
              <h3>Send in seconds</h3>
              <p>Pay any Nigerian bank. Review the payment, confirm with your PIN and get a receipt.</p>
            </div>
          </article>

          <article className={s.fcard} data-rv>
            <div className={s.fart}>
              <div className={s.mini}>
                <div className={s.donutWrap}>
                  <svg viewBox="0 0 42 42" aria-hidden="true">
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="var(--btn-soft)" strokeWidth="6" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#105455" strokeWidth="6" strokeDasharray="42 58" strokeDashoffset="25" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#53BC7B" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="-17" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#FFBF00" strokeWidth="6" strokeDasharray="16 84" strokeDashoffset="-47" />
                  </svg>
                  <div className={s.legend}>
                    <b className={u.num} style={{ fontSize: 18 }}>
                      ₦12,450
                    </b>
                    <span style={{ color: 'var(--muted)', marginTop: -6 }}>out today</span>
                    <span><i style={{ background: '#105455' }} />Transfers</span>
                    <span><i style={{ background: '#53BC7B' }} />Airtime</span>
                    <span><i style={{ background: '#FFBF00' }} />Bills</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.fbody}>
              <h3>See where it all goes</h3>
              <p>Search and filter every transaction, with daily totals so you always know your net.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Crypto band ---------- */

/** Decorative QR-style pattern; seeded so server and client render the same thing. */
function QrPattern() {
  let seed = 7;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280), seed / 233280);
  const cells: [number, number][] = [];
  for (let y = 0; y < 25; y++)
    for (let x = 0; x < 25; x++) {
      if ((x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16)) continue;
      if (rnd() > 0.52) cells.push([x, y]);
    }
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill="#042323" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#042323" />
    </g>
  );
  return (
    <svg className={s.qr} viewBox="0 0 25 25" shapeRendering="crispEdges">
      <rect width="25" height="25" fill="#fff" />
      {cells.map(([x, y]) => (
        <rect key={`${x}.${y}`} x={x} y={y} width="1" height="1" fill="#042323" />
      ))}
      {finder(0, 0)}
      {finder(18, 0)}
      {finder(0, 18)}
    </svg>
  );
}

const coins = [
  { sym: '₮', bg: '#26A17B', name: 'Tether', code: 'USDT', ngn: '₦158,400', amt: '100.00 USDT' },
  { sym: '₿', bg: '#F7931A', name: 'Bitcoin', code: 'BTC', ngn: '₦176,200', amt: '0.0012 BTC' },
  { sym: 'Ξ', bg: '#627EEA', name: 'Ethereum', code: 'ETH', ngn: '₦78,280', amt: '0.014 ETH' },
];

function Crypto() {
  return (
    <section id="crypto" className={`${s.sec} ${s.cband}`}>
      <Rings sizes={[620, 900, 1200]} style={{ top: '62%' }} />
      <div className={u.wrap} style={{ position: 'relative' }}>
        <div className={`${u.secHead} ${s.cbandHead}`} data-rv>
          <span className={`${u.eyebrow} ${s.cbandEyebrow}`}>
            <span className={u.soon}>Soon</span>Crypto
          </span>
          <h2>Crypto, counted in naira</h2>
          <p>
            Deposit and pay out USDT, BTC and ETH. Balances show in naira at live rates, and every payout shows its fee
            and arrival time before you confirm.
          </p>
        </div>
        <div className={s.cstage}>
          <div className={`${s.cfloat} ${s.l}`} aria-hidden="true">
            <div className={s.fRow}>
              <b>Deposit USDT</b>
              <small>Your address</small>
            </div>
            <div className={s.netsel}>
              <span className={s.on}>TRC20</span>
              <span>ERC20</span>
              <span>BEP20</span>
            </div>
            <QrPattern />
            <div className={s.addr}>
              <span className={u.num}>TQ8f…9vKx2</span>
              <b>Copy</b>
            </div>
          </div>
          <div className={`${s.cfloat} ${s.r}`} aria-hidden="true">
            <b>Payout summary</b>
            <div style={{ marginTop: 8 }}>
              {[
                ['You send', '100 USDT'],
                ['You receive', '₦158,400'],
                ['Fee', '₦600'],
                ['Arrives in', 'About 5 min'],
              ].map(([k, v]) => (
                <div key={k} className={s.prow}>
                  <span>{k}</span>
                  <b className={u.num}>{v}</b>
                </div>
              ))}
            </div>
          </div>
          <Phone>
            <div className={s.app}>
              <div className={s.vh}>Crypto</div>
              <div className={s.bal}>
                <div className={s.t}>
                  <span>Crypto balance in naira</span>
                  <span className={s.chip} style={{ background: 'rgba(143,222,173,.18)', color: 'var(--green-light)', height: 20 }}>
                    Live rate
                  </span>
                </div>
                <div className={`${s.amt} ${u.num}`}>₦412,880.00</div>
              </div>
              {coins.map((c) => (
                <div key={c.code} className={s.coin}>
                  <span className={s.cl} style={{ background: c.bg }}>
                    {c.sym}
                  </span>
                  <span className={s.grow}>
                    <b>{c.name}</b>
                    <small>{c.code}</small>
                  </span>
                  <span className={s.r}>
                    <b className={u.num}>{c.ngn}</b>
                    <small className={u.num}>{c.amt}</small>
                  </span>
                </div>
              ))}
              <div className={s.acts} style={{ gridTemplateColumns: '1fr 1fr' }}>
                <span className={s.act}>
                  <i className={s.p}>
                    <Glyph name="down" />
                  </i>
                  Deposit
                </span>
                <span className={s.act}>
                  <i>
                    <Glyph name="up" />
                  </i>
                  Pay out
                </span>
              </div>
            </div>
          </Phone>
          <div className={s.fade} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Everyday bento ---------- */
function Everyday() {
  return (
    <section id="everyday" className={s.sec}>
      <div className={u.wrap}>
        <SectionHead eyebrow="Everyday" title="The small things, done properly">
          The details you notice on the tenth transfer, not just the first.
        </SectionHead>
        <div className={s.bento}>
          <article className={`${s.bc} ${s.b1}`} data-rv>
            <h3>Every transaction, searchable</h3>
            <p>Find any payment by name, bank or amount, and filter by what came in or went out.</p>
            <div className={s.art}>
              <div className={s.txlist}>
                <div className={s.search}>
                  <Glyph name="search" />
                  Search transactions
                </div>
                <div className={s.filters}>
                  <span className={s.on}>All</span>
                  <span>Money in</span>
                  <span>Money out</span>
                  <span>This week</span>
                </div>
                <div className={s.dayhdr}>
                  <span>Today</span>
                  <span className={u.num}>Net +₦24,990</span>
                </div>
                <div className={s.tx}>
                  <span className={s.ic} style={{ background: '#DDF5E5', color: '#1E8A4A' }}>
                    <Glyph name="down" />
                  </span>
                  <span className={s.grow}>
                    Femi Johnson<small>Access Bank · 2:14 pm</small>
                  </span>
                  <span className={`${s.amt} ${s.in} ${u.num}`}>+₦50,000.00</span>
                </div>
                <div className={s.tx}>
                  <span className={s.ic} style={{ background: '#F6E1E1', color: '#BC5355' }}>
                    <Glyph name="up" />
                  </span>
                  <span className={s.grow}>
                    Chiamaka Eze<small>Access Bank · 11:02 am</small>
                  </span>
                  <span className={`${s.amt} ${u.num}`}>−₦25,010.00</span>
                </div>
              </div>
            </div>
          </article>

          <article className={`${s.bc} ${s.b2}`} data-rv>
            <h3>Receipts you can share</h3>
            <p>Every transfer ends with a receipt and a reference, ready to send.</p>
            <div className={s.art}>
              <div className={s.receipt}>
                <div className={s.ok}>
                  <Glyph name="check" />
                </div>
                <b className={`${s.a} ${u.num}`}>₦25,000.00</b>
                <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>Sent to Chiamaka Eze</div>
                <div className={s.rr}>
                  <span>Reference</span>
                  <b className={u.num}>FM-7Q1A-44BC</b>
                </div>
                <div className={s.rr}>
                  <span>Status</span>
                  <b style={{ color: '#1E8A4A' }}>Successful</b>
                </div>
              </div>
            </div>
          </article>

          <article className={`${s.bc} ${s.b3}`} data-rv>
            <h3>Limits you can see</h3>
            <p>Your tier and daily limit stay on screen, so a transfer never surprises you.</p>
            <div className={s.art}>
              <div className={s.limitcard}>
                <div className={s.fRow}>
                  <b>Today&apos;s limit</b>
                  <span className={`${s.chip} ${s.chipLvl}`}>LVL 1</span>
                </div>
                <div className={s.meter}>
                  <i />
                </div>
                <div className={s.limRow}>
                  <span className={u.num}>₦76,000 used</span>
                  <span className={u.num}>₦200,000</span>
                </div>
              </div>
            </div>
          </article>

          <article className={`${s.bc} ${s.b4}`} data-rv>
            <h3>Help from people who answer</h3>
            <p>Guides for getting started and transfers, plus a direct line when something looks wrong.</p>
            <div className={s.art}>
              <div className={s.help}>
                <div className={`${s.bubble} ${s.bu}`}>I sent money to the wrong account. What do I do?</div>
                <div className={`${s.bubble} ${s.bs}`}>
                  Report it from the receipt and we&apos;ll start a recall with the receiving bank right away.
                </div>
                <div className={s.helplinks}>
                  <span>Getting started</span>
                  <span>Transfers</span>
                  <span>Report fraud</span>
                  <span>Staying safe</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Guides (latest blog posts) ---------- */
function Guides() {
  return (
    <section id="guides" className={s.sec}>
      <div className={u.wrap}>
        <SectionHead eyebrow="Guides" title="Know your money better">
          Plain-English guides to transfers, scams, limits and crypto in naira.
        </SectionHead>
        <div className={`${b.grid} ${s.guides}`} data-rv>
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
        <div className={u.ctaRow}>
          <Link href="/blog/" className={`${u.btn} ${u.btnSoft}`}>
            Read all guides <Glyph name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: 'How do I get a Fiam account number?',
    a: 'Download Fiam on Android and sign up. Your personal account number is created for you, and you can fund it from any Nigerian bank right away.',
  },
  {
    q: 'Which banks can I send money to?',
    a: 'Any bank account in Nigeria. Pick the bank, enter the account number, review the details and confirm with your PIN.',
  },
  {
    q: 'How is my money protected?',
    a: 'Every transfer needs your 4-digit PIN and a review step. Identity checks set your limits, and you get an instant alert for every credit and debit.',
  },
  {
    q: 'What are account tiers and limits?',
    a: 'Tiers set how much you can move each day. You start on Tier 1 and unlock higher limits by verifying more of your identity in the app.',
  },
  {
    q: 'When is Fiam coming to iPhone?',
    a: "Soon. Join the waitlist and you'll get one email when Fiam reaches the App Store, plus early access to crypto.",
  },
  { q: 'Who runs Fiam?', a: `Fiam is a product of Awuya Digital Limited, ${site.address}.` },
];

function Faq() {
  return (
    <section id="faq" className={`${s.sec} ${s.band}`}>
      <div className={`${u.wrap} ${s.faq}`}>
        <div className={s.faqHead} data-rv>
          <span className={u.eyebrow}>
            <Logo />
            FAQ
          </span>
          <h2>Questions, answered</h2>
          <p>
            Can&apos;t find what you need? The <a href="/help/">help centre</a> covers getting started, transfers and
            staying safe.
          </p>
        </div>
        <div className={s.qa}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className={s.pm}>
                  <Glyph name="plus" />
                </span>
              </summary>
              <div className={s.ans}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCta() {
  return (
    <section id="get" className={s.final}>
      <div className={u.wrap}>
        <div className={s.ctacard} data-rv>
          <div className={s.txt}>
            <h2>Free on Android. iPhone is next.</h2>
            <p>
              Download Fiam from Google Play today. On iPhone? Join the waitlist for one email when we reach the App
              Store, plus early crypto access.
            </p>
            <div className={`${u.ctaRow} ${s.ctaRow}`}>
              <GooglePlayButton />
              <WaitlistButton tone="green" className={s.ctaBtn2} />
            </div>
          </div>
          <div className={s.ph}>
            <Phone>
              <div className={s.success}>
                <div className={s.ok}>
                  <Glyph name="check" />
                </div>
                <b style={{ fontSize: 16 }}>Transfer successful</b>
                <b className={`${s.a} ${u.num}`}>₦25,000.00</b>
                <span style={{ color: 'var(--ph-muted)' }}>to Chiamaka Eze · Access Bank</span>
                <div className={s.sum}>
                  <div>
                    <span>Reference</span>
                    <b className={u.num}>FM-7Q1A-44BC</b>
                  </div>
                  <div>
                    <span>Date</span>
                    <b>12 Jun, 11:02 am</b>
                  </div>
                </div>
              </div>
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
