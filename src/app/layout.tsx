import type { Metadata, Viewport } from 'next';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/700.css';
import './globals.css';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { WaitlistDialog } from '@/components/WaitlistDialog';
import { NewsletterDialog } from '@/components/NewsletterDialog';
import { RevealObserver } from '@/components/RevealObserver';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/config/site';
import { organizationLd, websiteLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Fiam Finance · Your naira, calm and in control',
    template: '%s · Fiam Finance',
  },
  description:
    'Get your own account number, fund from any bank and send to anyone in Nigeria, with every transfer protected by your PIN. Free on Android.',
  applicationName: site.name,
  publisher: 'Awuya Digital Limited',
  category: 'finance',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_NG' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: '/images/fiam-logo.png', apple: '/images/fiam-logo.png' },
  verification: { google: 'yE9VKpXJcIyHsHDF7okmexn-lIyS3778WLnaNJ0MjB4' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#042323',
};

// Apply the saved theme before first paint so light-mode visitors don't see a dark flash.
const themeScript = `try{var t=localStorage.getItem('fiam-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={[organizationLd, websiteLd]} />
      </head>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) inject attributes on <body> before hydration. */}
      <body suppressHydrationWarning>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <SiteNav />
          <main id="top" style={{ flex: 1 }}>
            {children}
          </main>
          <SiteFooter />
        </div>
        <WaitlistDialog />
        <NewsletterDialog />
        <RevealObserver />
      </body>
    </html>
  );
}
