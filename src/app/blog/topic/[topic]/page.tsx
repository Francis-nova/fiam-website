import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, PostCard, TopicFooter, TopicNav } from '@/components/blog/BlogParts';
import s from '@/components/blog/blog.module.css';
import { getTopic, postPath, postsInTopic, topicPath, topics } from '@/content/blog';
import { abs, breadcrumbLd, pageMetadata, webPageLd } from '@/lib/seo';

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => topics.map((t) => ({ topic: t.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic((await params).topic);
  if (!topic) return {};
  return pageMetadata({
    title: `${topic.title}: Guides`,
    description: `${topic.description} Guides from Fiam, the naira wallet.`,
    path: topicPath(topic.id),
    keywords: postsInTopic(topic.id).flatMap((p) => p.keywords.slice(0, 2)),
  });
}

export default async function TopicPage({ params }: Props) {
  const topic = getTopic((await params).topic);
  if (!topic) notFound();
  const list = postsInTopic(topic.id);
  const path = topicPath(topic.id);

  return (
    <>
      <JsonLd
        data={[
          {
            ...webPageLd({ type: 'CollectionPage', name: topic.title, description: topic.description, path }),
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(postPath(p.slug)), name: p.title })),
            },
          },
          breadcrumbLd([
            { name: 'Blog', path: '/blog/' },
            { name: topic.name, path },
          ]),
        ]}
      />
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroInner}`}>
          <Breadcrumbs trail={[{ name: 'Blog', path: '/blog/' }, { name: topic.name }]} />
          <span className={s.eyebrow}>Topic</span>
          <h1>{topic.title}</h1>
          <p className={s.lead}>{topic.description}</p>
          <TopicNav active={topic.id} />
        </div>
      </section>

      <section className={s.listing}>
        <div className={`${s.wrap} ${s.listingInner}`}>
          <div className={s.grid}>
            {list.map((p) => (
              <PostCard key={p.slug} post={p} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>

      <TopicFooter />
    </>
  );
}
