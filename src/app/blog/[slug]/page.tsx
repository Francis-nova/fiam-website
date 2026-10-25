import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { GooglePlayButton } from '@/components/StoreButtons';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { Breadcrumbs, PostMeta, RelatedPosts, TopicFooter } from '@/components/blog/BlogParts';
import s from '@/components/blog/blog.module.css';
import { getPost, getTopic, isoDateTime, postPath, posts, relatedPosts, topicPath, wordCount } from '@/content/blog';
import { abs, authorLd, authorName, breadcrumbLd, faqLd, pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: postPath(post.slug),
    keywords: post.keywords,
    type: 'article',
    image: { url: `${postPath(post.slug)}opengraph-image/`, alt: post.title },
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
      publishedTime: isoDateTime(post.published),
      modifiedTime: isoDateTime(post.updated),
      section: getTopic(post.topic)!.name,
      tags: post.keywords,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const topic = getTopic(post.topic)!;
  const path = postPath(post.slug);
  const headings = post.body.flatMap((b) => (b.type === 'h2' ? [b] : []));

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': abs(`${path}#article`),
            mainEntityOfPage: abs(path),
            headline: post.title,
            description: post.description,
            image: abs(`${path}opengraph-image/`),
            datePublished: isoDateTime(post.published),
            dateModified: isoDateTime(post.updated),
            inLanguage: 'en-NG',
            articleSection: topic.name,
            keywords: post.keywords.join(', '),
            wordCount: wordCount(post),
            author: authorLd,
            publisher: { '@id': abs('/#organization') },
            isPartOf: { '@id': abs('/blog/#blog') },
          },
          breadcrumbLd([
            { name: 'Blog', path: '/blog/' },
            { name: topic.name, path: topicPath(topic.id) },
            { name: post.title, path },
          ]),
          faqLd(post.faqs),
        ]}
      />

      <section className={`${s.hero} ${s.articleHero}`}>
        <div className={`${s.wrap} ${s.heroInner}`}>
          <Breadcrumbs trail={[{ name: 'Blog', path: '/blog/' }, { name: topic.name, path: topicPath(topic.id) }, { name: post.title }]} />
          <Link href={topicPath(topic.id)} className={s.eyebrow}>
            {topic.name}
          </Link>
          <h1>{post.title}</h1>
          <p className={s.lead}>{post.description}</p>
          <div className={s.byline}>
            <span>
              By <b>{authorName}</b>
            </span>
            <PostMeta post={post} />
          </div>
        </div>
      </section>

      <div className={s.articleBody}>
        <div className={`${s.wrap} ${s.articleGrid}`}>
          <nav className={s.toc} aria-label="In this article">
            <span className={s.tocTitle}>IN THIS ARTICLE</span>
            {headings.map((h) => (
              <a key={h.id} href={`#${h.id}`}>
                {h.text}
              </a>
            ))}
            <a href="#faq">Frequently asked questions</a>
          </nav>

          <article className={s.main}>
            <ArticleBody blocks={post.body} />

            <section id="faq" className={s.faq} style={{ scrollMarginTop: 96 }}>
              <h2>Frequently asked questions</h2>
              {post.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>

            <aside className={s.cta}>
              <div>
                <b>Move naira with less worry</b>
                <p>Your own account number, transfers to any Nigerian bank and a PIN on every payment. Free on Android.</p>
              </div>
              <GooglePlayButton />
            </aside>
          </article>
        </div>
      </div>

      <RelatedPosts posts={relatedPosts(post)} />
      <TopicFooter />
    </>
  );
}
