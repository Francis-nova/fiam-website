import type { Metadata } from 'next';
import { site } from '@/config/site';

/** Absolute URL for a site path ("/features/" → "https://www.usefiam.com/features/"). */
export const abs = (path: string) => new URL(path, site.url).toString();

// Trailing slash matches trailingSlash: true, so crawlers don't hit a redirect.
const defaultImage = { url: '/opengraph-image/', alt: 'Fiam: your naira, calm and in control' };

/**
 * Per-page metadata: unique title and description, canonical URL, Open Graph and Twitter tags.
 * Setting openGraph replaces the inherited one, so the image is always set explicitly: the site card by
 * default, or a page's own (blog articles pass their generated opengraph-image).
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  absoluteTitle,
  image = defaultImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
  /** Skip the "· Fiam Finance" template (home page). */
  absoluteTitle?: boolean;
  image?: { url: string; alt: string };
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { type, url: path, siteName: site.name, title: fullTitle, description, locale: 'en_NG', images: [{ ...image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image.url] },
  };
}

/* ---------- Structured data (schema.org JSON-LD) ---------- */

const orgId = abs('/#organization');
const siteId = abs('/#website');

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: site.name,
  legalName: 'Awuya Digital Limited',
  url: site.url,
  logo: abs('/images/fiam-logo.png'),
  email: 'support@usefiam.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ikeja Town Square, Obafemi Awolowo Way',
    addressLocality: 'Ikeja',
    addressRegion: 'Lagos',
    postalCode: '101233',
    addressCountry: 'NG',
  },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@usefiam.com', areaServed: 'NG', availableLanguage: 'English' },
  ],
  sameAs: [site.playStoreUrl],
};

/** Byline for blog articles. */
export const authorName = 'Ellis Awuya';
export const authorLd = { '@type': 'Person', name: authorName, worksFor: { '@id': orgId } };

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': siteId,
  name: site.name,
  url: site.url,
  inLanguage: 'en-NG',
  publisher: { '@id': orgId },
};

export const mobileAppLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Fiam',
  operatingSystem: 'Android',
  applicationCategory: 'FinanceApplication',
  description: 'A naira wallet with its own account number. Fund from any Nigerian bank, send to any bank and track every transaction.',
  url: site.url,
  downloadUrl: site.playStoreUrl,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'NGN' },
  publisher: { '@id': orgId },
};

export function webPageLd({ type = 'WebPage', name, description, path }: { type?: string; name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': abs(path),
    url: abs(path),
    name,
    description,
    inLanguage: 'en-NG',
    isPartOf: { '@id': siteId },
    publisher: { '@id': orgId },
  };
}

/** Breadcrumb trail; Home is added automatically. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
