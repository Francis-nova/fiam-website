/**
 * Article content is plain data so pages, the sitemap and structured data all read from one source.
 * Inline text supports **bold** and [links](/path/).
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export type TopicId = 'sending-money' | 'staying-safe' | 'accounts-and-limits' | 'crypto' | 'inside-fiam';

export type Post = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> tag, kept under ~45 characters so the " · Fiam Finance" suffix still fits. */
  seoTitle: string;
  /** Meta description, 140–160 characters. */
  description: string;
  /** One or two sentences for cards. */
  excerpt: string;
  topic: TopicId;
  keywords: string[];
  published: string;
  updated: string;
  body: Block[];
  faqs: { q: string; a: string }[];
};
