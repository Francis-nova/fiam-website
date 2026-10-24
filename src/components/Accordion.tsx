'use client';

import { useId, useState } from 'react';
import { Glyph } from './Glyph';
import s from './Accordion.module.css';

export type QA = { q: string; a: string };

/** One-open-at-a-time FAQ list. `defaultOpen` is the index open on load (-1 for none). */
export function Accordion({ items, defaultOpen = -1 }: { items: QA[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={s.list}>
      {items.map((item, i) => (
        <AccordionItem key={item.q} item={item} open={open === i} onToggle={() => setOpen((o) => (o === i ? -1 : i))} />
      ))}
    </div>
  );
}

export function AccordionItem({ item, open, onToggle }: { item: QA; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className={`${s.item} ${open ? s.open : ''}`}>
      <button type="button" className={s.button} aria-expanded={open} aria-controls={id} onClick={onToggle}>
        <span className={s.q}>{item.q}</span>
        <span className={s.pm}>
          <Glyph name="plus" />
        </span>
      </button>
      {open && (
        <p id={id} className={s.a}>
          {item.a}
        </p>
      )}
    </div>
  );
}
