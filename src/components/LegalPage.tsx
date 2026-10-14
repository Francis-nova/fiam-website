import Link from 'next/link';
import s from './LegalPage.module.css';

export type LegalSection = { id: string; title: string; body: string };

/** Privacy / Terms layout: dark title band, sticky contents list, numbered sections. */
export function LegalPage({
  title,
  updated,
  sections,
  other,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
  other: { label: string; href: string };
}) {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>LEGAL</span>
          <h1 className={s.title}>{title}</h1>
          <span className={s.updated}>{updated}</span>
        </div>
      </section>
      <section className={s.body}>
        <div className={s.grid}>
          <nav className={s.toc} aria-label="On this page">
            <span className={s.tocTitle}>ON THIS PAGE</span>
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className={s.tocLink}>
                {sec.title}
              </a>
            ))}
            <Link href={other.href} className={s.other}>
              {other.label} →
            </Link>
          </nav>
          <div className={s.content}>
            {sections.map((sec, i) => (
              <div key={sec.id} id={sec.id} className={s.section}>
                <h2 className={s.h2}>
                  {i + 1}. {sec.title}
                </h2>
                <p className={s.p}>{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
