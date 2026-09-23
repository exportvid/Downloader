export const LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'id', 'ar', 'ru', 'hi', 'ja', 'bn', 'vi', 'tr', 'it', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];

/** English lives at the root (no prefix). Every other language lives under /<code>. */
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export interface LocaleMeta {
  /** Language name written in that language, shown in the selector. */
  name: string;
  /** English name of the language, shown small under the native name so it is easy to spot in an unfamiliar script. */
  english: string;
  dir: 'ltr' | 'rtl';
  /** Open Graph locale. */
  og: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { name: 'English', english: 'English', dir: 'ltr', og: 'en_US' },
  es: { name: 'Español', english: 'Spanish', dir: 'ltr', og: 'es_ES' },
  pt: { name: 'Português', english: 'Portuguese', dir: 'ltr', og: 'pt_BR' },
  fr: { name: 'Français', english: 'French', dir: 'ltr', og: 'fr_FR' },
  de: { name: 'Deutsch', english: 'German', dir: 'ltr', og: 'de_DE' },
  id: { name: 'Bahasa Indonesia', english: 'Indonesian', dir: 'ltr', og: 'id_ID' },
  ar: { name: 'العربية', english: 'Arabic', dir: 'rtl', og: 'ar_AR' },
  ru: { name: 'Русский', english: 'Russian', dir: 'ltr', og: 'ru_RU' },
  hi: { name: 'हिन्दी', english: 'Hindi', dir: 'ltr', og: 'hi_IN' },
  ja: { name: '日本語', english: 'Japanese', dir: 'ltr', og: 'ja_JP' },
  bn: { name: 'বাংলা', english: 'Bengali', dir: 'ltr', og: 'bn_BD' },
  vi: { name: 'Tiếng Việt', english: 'Vietnamese', dir: 'ltr', og: 'vi_VN' },
  tr: { name: 'Türkçe', english: 'Turkish', dir: 'ltr', og: 'tr_TR' },
  it: { name: 'Italiano', english: 'Italian', dir: 'ltr', og: 'it_IT' },
  ko: { name: '한국어', english: 'Korean', dir: 'ltr', og: 'ko_KR' },
};

/** Scripts whose display type comes from system fonts and needs the non-Latin heading rules in globals.css. */
export const SYSTEM_FONT_LOCALES: readonly Locale[] = ['ar', 'hi', 'bn', 'ja', 'ko'];

export const PLATFORM_SLUGS = [
  'youtube-video-downloader',
  'youtube-shorts-downloader',
  'facebook-video-downloader',
  'facebook-reels-downloader',
  'instagram-video-downloader',
  'instagram-reels-downloader',
  'tiktok-video-downloader',
  'x-video-downloader',
  'reddit-video-downloader',
  'pinterest-video-downloader',
  'snapchat-video-downloader',
  'twitch-clip-downloader',
  'linkedin-video-downloader',
  'tumblr-video-downloader',
  'vimeo-video-downloader',
] as const;
export type PlatformSlug = (typeof PLATFORM_SLUGS)[number];

/** Pages that exist in every language. Legal pages stay English only, so they are not listed here. */
export const LOCALIZED_STATIC_PATHS = ['/faq', '/supported-sites', '/contact'] as const;
export const LEGAL_PATHS = ['/privacy', '/terms', '/copyright'] as const;

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** True for paths that have a translated version (home, platform pages, FAQ, supported sites, contact). */
export function isLocalizedPath(path: string): boolean {
  if (path === '/' || path === '') return true;
  if ((LOCALIZED_STATIC_PATHS as readonly string[]).includes(path)) return true;
  return (PLATFORM_SLUGS as readonly string[]).includes(path.slice(1));
}

/** Builds the URL path for a page in a language. English has no prefix. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '' ? '/' : path;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** Splits a browser pathname into its language and the language-free path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const seg = pathname.split('/')[1];
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) {
    const rest = pathname.slice(seg.length + 1);
    return { locale: seg, path: rest === '' ? '/' : rest };
  }
  return { locale: DEFAULT_LOCALE, path: pathname === '' ? '/' : pathname };
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`));
}
