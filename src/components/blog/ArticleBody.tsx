import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Block } from '@/content/blog';
import s from './blog.module.css';

/** Renders **bold** and [label](href) inside a string. Internal links use <Link>. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={m.index}>{m[1]}</strong>);
    else if (m[3].startsWith('/'))
      out.push(
        <Link key={m.index} href={m[3]}>
          {m[2]}
        </Link>,
      );
    else
      out.push(
        <a key={m.index} href={m[3]} target="_blank" rel="noopener">
          {m[2]}
        </a>,
      );
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className={s.prose}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case 'h2':
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>
            );
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'ul':
          case 'ol': {
            const List = b.type;
            return (
              <List key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>
                    <Inline text={t} />
                  </li>
                ))}
              </List>
            );
          }
          case 'callout':
            return (
              <aside key={i} className={s.callout}>
                <span className={s.calloutTitle}>{b.title}</span>
                <p>
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          case 'table':
            return (
              <div key={i} className={s.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) =>
                          k === 0 ? (
                            <th key={k} scope="row">
                              {c}
                            </th>
                          ) : (
                            <td key={k}>{c}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
