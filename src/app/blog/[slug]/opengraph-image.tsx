import { getPost, getTopic, posts } from '@/content/blog';
import { ogImage, ogSize } from '@/lib/og';

export const alt = 'Fiam Guides article';
export const size = ogSize;
export const contentType = 'image/png';

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)!;
  return ogImage({ eyebrow: `Fiam Guides · ${getTopic(post.topic)!.name}`, title: post.title });
}
