import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, PostCard, TopicFooter, TopicNav } from '@/components/blog/BlogParts';
import s from '@/components/blog/blog.module.css';
import { isoDateTime, postPath, posts, postsInTopic, topicPath, topics } from '@/content/blog';
import { abs, authorLd, breadcrumbLd, pageMetadata, webPageLd } from '@/lib/seo';

const title = 'Money Guides for Nigerians';
const description =
  'Plain-English guides to bank transfers, fake alerts and fraud, account tiers and limits, and crypto in naira. Practical help from the team behind the Fiam wallet.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/blog/',
  keywords: ['money tips Nigeria', 'bank transfer guide', 'fake alert', 'account tier limits', 'USDT to naira', 'Fiam blog'],
});

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <JsonLd
        data={[
          {
            ...webPageLd({ type: 'CollectionPage', name: title, description, path: '/blog/' }),
            mainEntity: {
              '@type': 'Blog',
              '@id': abs('/blog/#blog'),
              name: 'Fiam Guides',
              blogPost: posts.map((p) => ({
                '@type': 'BlogPosting',
                headline: p.title,
                url: abs(postPath(p.slug)),
                image: abs(`${postPath(p.slug)}opengraph-image/`),
                datePublished: isoDateTime(p.published),
                dateModified: isoDateTime(p.updated),
                author: authorLd,
              })),
            },
          },
          breadcrumbLd([{ name: 'Blog', path: '/blog/' }]),
        ]}
      />
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroInner}`}>
          <Breadcrumbs trail={[{ name: 'Blog' }]} />
          <span className={s.eyebrow}>Fiam Guides</span>
          <h1>Money guides for Nigerians</h1>
          <p className={s.lead}>
            Clear, practical help with sending money, staying safe from scams, understanding your limits and making sense
            of crypto in naira.
          </p>
          <TopicNav />
        </div>
      </section>

      <section className={s.listing}>
        <div className={`${s.wrap} ${s.listingInner}`}>
          <div className={s.grid}>
            <PostCard post={featured} headingLevel={2} featured />
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} headingLevel={2} />
            ))}
          </div>

          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>Browse by topic</h2>
            <p>Each topic hub collects every guide on that subject, from the basics to what to do when something goes wrong.</p>
          </div>
          <div className={s.hubGrid}>
            {topics.map((t) => (
              <Link key={t.id} href={topicPath(t.id)} className={s.hubCard}>
                <b>
                  {t.name} <Icon name="solar:arrow-right-linear" size={18} />
                </b>
                <p>{t.description}</p>
                <small>
                  {postsInTopic(t.id).length} {postsInTopic(t.id).length === 1 ? 'guide' : 'guides'}
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TopicFooter />
    </>
  );
}
