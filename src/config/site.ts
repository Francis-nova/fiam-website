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

  // TODO(launch): replace with the real social profiles.
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.usefiam',
  social: { x: '#', instagram: '#', linkedin: '#' },
};

export const navLinks = [
  { key: 'features', label: 'Features', href: '/features/' },
  { key: 'security', label: 'Security', href: '/security/' },
  { key: 'crypto', label: 'Crypto', href: '/crypto/', soon: true },
  { key: 'blog', label: 'Blog', href: '/blog/' },
  { key: 'help', label: 'Help', href: '/help/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
] as const;
