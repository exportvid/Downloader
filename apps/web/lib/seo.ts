import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './config';
import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localePath, type Locale } from './i18n/config';

const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;

/** Every language version of a page, plus x-default pointing at English. Used for hreflang. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}${localePath(l, path)}`;
  languages['x-default'] = `${SITE_URL}${localePath(DEFAULT_LOCALE, path)}`;
  return languages;
}

/**
 * Page metadata with a self-referencing canonical and hreflang links.
 * `path` is the language-free path (for example "/faq"). Set `localized: false` for pages that only exist in English.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  localized?: boolean;
  ogAlt?: string;
  noIndex?: boolean;
}): Metadata {
  const locale = opts.locale ?? DEFAULT_LOCALE;
  const localized = opts.localized ?? true;
  const url = `${SITE_URL}${localePath(locale, opts.path)}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url, ...(localized ? { languages: languageAlternates(opts.path) } : {}) },
    robots: opts.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: LOCALE_META[locale].og,
      images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: opts.ogAlt ?? SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE_URL],
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
  };
}

export function websiteJsonLd(locale: Locale = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}${localePath(locale, '/')}`,
    inLanguage: locale,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale: Locale = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${localePath(locale, item.path)}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[], locale: Locale = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function webApplicationJsonLd(description: string, locale: Locale = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: `${SITE_URL}${localePath(locale, '/')}`,
    description,
    inLanguage: locale,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}
