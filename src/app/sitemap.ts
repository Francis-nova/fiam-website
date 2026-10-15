import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

const paths = ['/', '/features/', '/security/', '/crypto/', '/about/', '/help/', '/contact/', '/privacy-policy/', '/terms/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
