import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LEGAL_PATHS, LOCALE_COOKIE, isLocale, isLocalizedPath, splitLocale } from '@/lib/i18n/config';

/**
 * URL layout: English at the root, every other language under /<code>.
 * Pages are stored under app/[locale], so root URLs are rewritten to /en/... internally.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split('/')[1];

  // /en/... is not a public URL. English lives at the root.
  if (first === DEFAULT_LOCALE) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || '/';
    return NextResponse.redirect(url, 308);
  }

  // Anything that is not a real page in its language (including legal pages under a language prefix) gets the
  // localized 404 page.
  const { locale, path } = splitLocale(pathname);
  const exists = isLocalizedPath(path) || (locale === DEFAULT_LOCALE && (LEGAL_PATHS as readonly string[]).includes(path));
  if (!exists) {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}/page-not-found`;
    return NextResponse.rewrite(url, { status: 404 });
  }

  if (isLocale(first)) return NextResponse.next();

  // Returning visitors who chose another language get sent to it. Visitors without the cookie, including
  // search engines, always see the English page at this URL.
  const saved = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved) && saved !== DEFAULT_LOCALE && isLocalizedPath(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname === '/' ? `/${saved}` : `/${saved}${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, the OG image route, robots, sitemap, and any file with an extension.
  matcher: ['/((?!_next|api|opengraph-image|robots.txt|sitemap.xml|.*\\..*).*)'],
};
