import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { LEGAL_PATHS, LOCALES, LOCALIZED_STATIC_PATHS, PLATFORM_SLUGS, localePath } from '@/lib/i18n/config';
import { languageAlternates } from '@/lib/seo';

// No lastModified: build time is not a real edit date, and search engines learn to ignore dates that always change.
export default function sitemap(): MetadataRoute.Sitemap {
  const translated = ['/', ...LOCALIZED_STATIC_PATHS, ...PLATFORM_SLUGS.map((s) => `/${s}`)];

  // Every translated page is listed once per language, each entry pointing at all of its alternates.
  const entries: MetadataRoute.Sitemap = translated.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      alternates: { languages: languageAlternates(path) },
    })),
  );

  // Legal pages exist in English only.
  return [...entries, ...LEGAL_PATHS.map((path) => ({ url: `${SITE_URL}${path}` }))];
}
