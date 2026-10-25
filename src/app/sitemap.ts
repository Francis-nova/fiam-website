import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { postPath, posts, topicPath, topics } from '@/content/blog';

const paths = ['/', '/features/', '/security/', '/crypto/', '/about/', '/help/', '/contact/', '/privacy-policy/', '/terms/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = posts.reduce((d, p) => (p.updated > d ? p.updated : d), '');
  return [
    ...paths.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : 0.7,
    })),
    { url: `${site.url}/blog/`, lastModified: latest, changeFrequency: 'weekly', priority: 0.8 },
    ...topics.map((t) => ({ url: `${site.url}${topicPath(t.id)}`, lastModified: latest, changeFrequency: 'weekly' as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}${postPath(p.slug)}`, lastModified: p.updated, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
