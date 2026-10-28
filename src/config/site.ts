/**
 * Site-wide settings.
 */
export const site = {
  name: 'Fiam Finance',
  // Must match the primary domain on Vercel (the bare domain redirects to www).
  url: 'https://www.usefiam.com',
  /** Show the crypto "Soon" band on the home page. */
  showCryptoTeaser: true,

  address: 'Ikeja Town Square, Obafemi Awolowo Wy, Ikeja, 101233, Lagos',

  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.usefiam',
};

/** Fiam's social profiles, shown in the footer and on the contact page. */
export const socialLinks = [
  { label: 'Instagram', handle: '@fiamfinance', href: 'https://www.instagram.com/fiamfinance/', icon: 'ri:instagram-line' },
  { label: 'LinkedIn', handle: 'Fiam Finance', href: 'https://www.linkedin.com/company/fiam-finance', icon: 'ri:linkedin-fill' },
  { label: 'TikTok', handle: '@fiamfinance', href: 'https://www.tiktok.com/@fiamfinance', icon: 'ri:tiktok-fill' },
] as const;

export const navLinks = [
  { key: 'features', label: 'Features', href: '/features/' },
  { key: 'security', label: 'Security', href: '/security/' },
  { key: 'crypto', label: 'Crypto', href: '/crypto/', soon: true },
  { key: 'blog', label: 'Blog', href: '/blog/' },
  { key: 'help', label: 'Help', href: '/help/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
] as const;
