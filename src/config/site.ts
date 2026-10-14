/**
 * Site-wide settings. The first two mirror the "Tweaks" in the Claude Design prototype.
 */
export const site = {
  name: 'Fiam Finance',
  /** 'A' = split hero (headline left, phone right), 'B' = centered hero. */
  heroVariant: 'A' as 'A' | 'B',
  /** Show the crypto "Coming soon" banner on the home page. */
  showCryptoTeaser: true,

  address: 'Ikeja Town Square, Obafemi Awolowo Wy, Ikeja, 101233, Lagos',

  // TODO(launch): replace with the real Play Store listing and social profiles.
  playStoreUrl: '#',
  social: { x: '#', instagram: '#', linkedin: '#' },
};

export const navLinks = [
  { key: 'features', label: 'Features', href: '/features/' },
  { key: 'security', label: 'Security', href: '/security/' },
  { key: 'crypto', label: 'Crypto', href: '/crypto/', soon: true },
  { key: 'about', label: 'About', href: '/about/' },
  { key: 'help', label: 'Help', href: '/help/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
] as const;
