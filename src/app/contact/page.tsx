import type { Metadata } from 'next';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons.generated';
import x from '@/components/sections.module.css';
import { ContactForm } from './ContactForm';
import s from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Chat in the app, email support, or send us a message. Report fraud or a lost phone and we freeze your account first.',
};

// TODO(launch): placeholder addresses from the design; replace with real mailboxes.
const channels: { icon: IconName; title: string; detail: string; href?: string }[] = [
  { icon: 'solar:chat-round-dots-bold', title: 'Chat in the app', detail: 'Profile → Help & support' },
  { icon: 'solar:letter-bold', title: 'Email support', detail: 'support@fiamwallet.com', href: 'mailto:support@fiamwallet.com' },
  { icon: 'solar:case-round-bold', title: 'Partnerships & press', detail: 'hello@fiamwallet.com', href: 'mailto:hello@fiamwallet.com' },
];

export default function ContactPage() {
  return (
    <>
      <section className={x.gradient}>
        <div className={`${x.wrap} ${x.padHeroSm} ${x.stack} ${x.g20}`}>
          <span className={x.eyebrow}>CONTACT</span>
          <h1 className={x.h1Sm} style={{ maxWidth: 720 }}>
            We&apos;re here when you need us.
          </h1>
          <p className={x.lead} style={{ maxWidth: 560 }}>
            For account questions, the fastest way is chat in the app. For everything else, use the form below.
          </p>
        </div>
      </section>

      <section className={x.white}>
        <div className={`${x.wrap} ${x.padSm} ${s.grid}`}>
          <div className={`${x.stack} ${x.g12}`}>
            {channels.map((c) => {
              const inner = (
                <>
                  <Icon name={c.icon} size={26} color="#1F4C44" />
                  <div className={x.stack} style={{ gap: 4 }}>
                    <span className={s.channelTitle}>{c.title}</span>
                    <span className={s.channelDetail}>{c.detail}</span>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className={`${s.channel} ${s.channelLink}`}>
                  {inner}
                </a>
              ) : (
                <div key={c.title} className={s.channel}>
                  {inner}
                </div>
              );
            })}
            <div id="fraud" className={`${s.channel} ${s.fraud}`}>
              <Icon name="solar:shield-warning-bold" size={26} color="#FFFFFF" />
              <div className={x.stack} style={{ gap: 6 }}>
                <span className={s.channelTitle}>Report fraud or a lost phone</span>
                <span className={s.fraudBody}>
                  Choose &ldquo;Fraud or lost phone&rdquo; in the form and we&apos;ll freeze your account first, then
                  investigate.
                </span>
              </div>
            </div>
          </div>
          <div className={s.formCard}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
