import type { Block, Post, TopicId } from './types';
import { sendMoney } from './posts/send-money-to-any-bank';
import { wrongAccount } from './posts/sent-money-to-wrong-account';
import { fakeAlert } from './posts/spot-a-fake-credit-alert';
import { protectAccount } from './posts/protect-your-bank-account';
import { accountTiers } from './posts/account-tiers-and-limits';
import { usdtNetworks } from './posts/usdt-networks';
import { openAccount } from './posts/open-a-fiam-account';
import { whyWeBuiltFiam } from './posts/why-we-built-fiam';
import { reportFraud } from './posts/report-fraudulent-transaction';

export type { Block, Post, TopicId } from './types';

export type Topic = {
  id: TopicId;
  name: string;
  title: string;
  description: string;
  /** <title> override; defaults to "<title>: Guides". */
  seoTitle?: string;
};

/** Topic hubs, in navigation order. */
export const topics: Topic[] = [
  {
    id: 'sending-money',
    name: 'Sending money',
    title: 'Sending money in Nigeria',
    description: 'How bank transfers work, what they cost, how long they take and what to do when one goes wrong.',
  },
  {
    id: 'staying-safe',
    name: 'Staying safe',
    title: 'Staying safe from fraud',
    description: 'Spot fake alerts and payment scams, and build the habits that keep your account and PIN out of the wrong hands.',
  },
  {
    id: 'accounts-and-limits',
    name: 'Accounts & limits',
    title: 'Accounts, tiers and limits',
    description: 'Account numbers, BVN and NIN, KYC tiers and the daily limits that come with each one, explained plainly.',
  },
  {
    id: 'crypto',
    name: 'Crypto',
    title: 'Crypto, counted in naira',
    description: 'Stablecoins, networks and fees: the basics you need before you move USDT, BTC or ETH.',
  },
  {
    id: 'inside-fiam',
    name: 'Inside Fiam',
    title: 'Inside Fiam',
    seoTitle: 'Inside Fiam: Our Story, Founders & News',
    description: 'The people behind Fiam, why we built it and what we are working on next.',
  },
];

/** Newest first. */
export const posts: Post[] = [sendMoney, wrongAccount, fakeAlert, protectAccount, accountTiers, usdtNetworks, openAccount, whyWeBuiltFiam, reportFraud].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getTopic = (id: string) => topics.find((t) => t.id === id);
export const postsInTopic = (id: TopicId) => posts.filter((p) => p.topic === id);

export const postPath = (slug: string) => `/blog/${slug}/`;
export const topicPath = (id: TopicId) => `/blog/topic/${id}/`;

/** Same-topic posts first, then posts sharing the most keywords, then newest. */
export function relatedPosts(post: Post, count = 3): Post[] {
  const shared = (p: Post) => p.keywords.filter((k) => post.keywords.includes(k)).length;
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (p.topic === post.topic ? 10 : 0) + shared(p) }))
    .sort((a, b) => b.score - a.score || b.p.published.localeCompare(a.p.published))
    .slice(0, count)
    .map((x) => x.p);
}

const strip = (t: string) => t.replace(/\*\*|\[([^\]]+)\]\([^)]+\)/g, '$1');

function blockText(b: Block): string {
  switch (b.type) {
    case 'ul':
    case 'ol':
      return b.items.join(' ');
    case 'callout':
      return `${b.title} ${b.text}`;
    case 'quote':
      return `${b.text} ${b.cite}`;
    case 'table':
      return [...b.head, ...b.rows.flat()].join(' ');
    default:
      return b.text;
  }
}

export function wordCount(post: Post) {
  const text = [...post.body.map(blockText), ...post.faqs.flatMap((f) => [f.q, f.a])].map(strip).join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

/** At roughly 230 words a minute. */
export const readMinutes = (post: Post) => Math.max(1, Math.round(wordCount(post) / 230));

/** Full ISO 8601 datetime in Lagos time (WAT), which Google expects in structured data. */
export const isoDateTime = (date: string) => `${date}T09:00:00+01:00`;

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
