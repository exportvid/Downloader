import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/config';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const studio = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-studio-display', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Download Videos and Photos from Social Media | ExportVid',
    template: '%s | ExportVid',
  },
  description:
    'Free video downloader for social media. Paste a link from YouTube, Facebook, Instagram, TikTok, and more, then save the video or photo in the best quality.',
  icons: { icon: '/favicon.svg' },
};

// Runs before first paint so the chosen theme never flashes the wrong colors.
// No saved choice means System: follow the device setting.
const THEME_INIT = `try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${studio.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body id="top" className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
