import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter, Space_Grotesk, Bebas_Neue, Oswald } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { I18nProvider } from '@/components/I18nProvider';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/config';
import { LOCALES, LOCALE_META, SYSTEM_FONT_LOCALES, isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic', 'vietnamese'], variable: '--font-inter', display: 'swap' });
const studio = Bebas_Neue({ subsets: ['latin', 'latin-ext'], weight: '400', variable: '--font-studio-display', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['500', '600', '700'] });
// Bebas Neue has no Cyrillic or Vietnamese, so Russian and Vietnamese headings use Oswald, a similar condensed face.
const condensed = Oswald({ subsets: ['latin', 'cyrillic', 'vietnamese'], variable: '--font-condensed', display: 'swap' });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { site } = getMessages(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${site.meta.homeTitle} | ExportVid`, template: '%s | ExportVid' },
    description: site.meta.siteDescription,
    icons: { icon: '/favicon.svg' },
  };
}

// Runs before first paint so the chosen theme never flashes the wrong colors.
// No saved choice means System: follow the device setting.
const THEME_INIT = `try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}`;

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const meta = LOCALE_META[locale];

  return (
    <html
      lang={locale}
      dir={meta.dir}
      data-theme="dark"
      data-script={SYSTEM_FONT_LOCALES.includes(locale) ? 'system' : 'latin'}
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${studio.variable} ${condensed.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body id="top" className="flex min-h-screen flex-col">
        <I18nProvider locale={locale} messages={messages.client}>
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd(locale)} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </I18nProvider>
      </body>
    </html>
  );
}
