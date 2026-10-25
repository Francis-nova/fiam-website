import type { Metadata, Viewport } from 'next';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/700.css';
import './globals.css';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { WaitlistDialog } from '@/components/WaitlistDialog';
import { RevealObserver } from '@/components/RevealObserver';

export const metadata: Metadata = {
  title: {
    default: 'Fiam Finance · Your naira, calm and in control',
    template: '%s · Fiam Finance',
  },
  description:
    'Get your own account number, fund from any bank and send to anyone in Nigeria, with every transfer protected by your PIN. Free on Android.',
  icons: { icon: '/images/fiam-logo.png' },
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
        <RevealObserver />
      </body>
    </html>
  );
}
