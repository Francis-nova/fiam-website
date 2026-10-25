import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { formatDate, getTopic, postPath, posts, postsInTopic, readMinutes, topicPath, topics, type Post, type TopicId } from '@/content/blog';
import s from './blog.module.css';

/** Visible breadcrumb trail; pairs with breadcrumbLd on the same page. */
export function Breadcrumbs({ trail }: { trail: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className={s.crumbs}>
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {trail.map((c) => (
          <li key={c.name}>{c.path ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

/** Hub navigation: all articles plus one tab per topic hub. */
export function TopicNav({ active }: { active?: TopicId }) {
  return (
    <nav aria-label="Blog topics" className={s.topicNav}>
      <Link href="/blog/" className={!active ? s.on : ''} aria-current={!active ? 'page' : undefined}>
        All articles <span>{posts.length}</span>
      </Link>
      {topics.map((t) => (
        <Link key={t.id} href={topicPath(t.id)} className={active === t.id ? s.on : ''} aria-current={active === t.id ? 'page' : undefined}>
          {t.name} <span>{postsInTopic(t.id).length}</span>
        </Link>
      ))}
    </nav>
  );
}

export function PostMeta({ post }: { post: Post }) {
  return (
    <span className={s.meta}>
      <time dateTime={post.published}>{formatDate(post.published)}</time>
      <i aria-hidden="true">·</i>
      {readMinutes(post)} min read
    </span>
  );
}

export function PostCard({ post, headingLevel = 3, featured }: { post: Post; headingLevel?: 2 | 3; featured?: boolean }) {
  const H = `h${headingLevel}` as const;
  const topic = getTopic(post.topic)!;
  return (
    <article className={`${s.card} ${featured ? s.featured : ''}`}>
      <Link href={topicPath(topic.id)} className={s.cardTopic}>
        {topic.name}
      </Link>
      <H className={s.cardTitle}>
        <Link href={postPath(post.slug)} className={s.cardLink}>
          {post.title}
        </Link>
      </H>
      <p className={s.cardExcerpt}>{post.excerpt}</p>
      <PostMeta post={post} />
    </article>
  );
}

export function RelatedPosts({ posts: list }: { posts: Post[] }) {
  return (
    <section className={s.related} aria-labelledby="related-title">
      <div className={s.wrap}>
        <h2 id="related-title" className={s.sectionTitle}>
          Related articles
        </h2>
        <div className={s.grid}>
          {list.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Topic footer: every hub with its articles, so each page links into the whole cluster. */
export function TopicFooter() {
  return (
    <section className={s.topicFooter} aria-labelledby="topics-title">
      <div className={s.wrap}>
        <div className={s.topicFooterHead}>
          <h2 id="topics-title" className={s.sectionTitle}>
            Explore by topic
          </h2>
          <Link href="/blog/" className={s.allLink}>
            All articles <Icon name="solar:arrow-right-linear" size={18} />
          </Link>
        </div>
        <div className={s.topicCols}>
          {topics.map((t) => (
            <div key={t.id} className={s.topicCol}>
              <Link href={topicPath(t.id)} className={s.topicColTitle}>
                {t.name}
              </Link>
              <p>{t.description}</p>
              <ul>
                {postsInTopic(t.id).map((p) => (
                  <li key={p.slug}>
                    <Link href={postPath(p.slug)}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
