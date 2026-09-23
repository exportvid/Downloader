import type { Metadata } from 'next';
import NotFound from '../not-found';
import { isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

// The middleware rewrites every unknown URL here, with a 404 status, so visitors see the localized 404 page
// inside the normal layout.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: isLocale(locale) ? getMessages(locale).client.notFound.title : 'Page not found',
    robots: { index: false, follow: false },
  };
}

export default function PageNotFound() {
  return <NotFound />;
}
