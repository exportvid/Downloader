import type { Locale, PlatformSlug } from './config';
import type { PlatformContent } from '../platforms';
import { es } from './platforms/es';

import { pt } from './platforms/pt';
import { fr } from './platforms/fr';
import { de } from './platforms/de';
import { id } from './platforms/id';
import { it } from './platforms/it';
import { tr } from './platforms/tr';
import { vi } from './platforms/vi';
import { ru } from './platforms/ru';
import { ar } from './platforms/ar';
import { hi } from './platforms/hi';
import { bn } from './platforms/bn';
import { ja } from './platforms/ja';
import { ko } from './platforms/ko';
type PlatformSet = Record<PlatformSlug, PlatformContent>;

// One file per language. Each must define all 15 platform pages, which TypeScript enforces. English lives in lib/platforms.ts.
const sets: Record<Exclude<Locale, 'en'>, PlatformSet> = { es, pt, fr, de, id, it, tr, vi, ru, ar, hi, bn, ja, ko };

export function getPlatformContent(locale: Locale, slug: PlatformSlug): PlatformContent | undefined {
  return locale === 'en' ? undefined : sets[locale][slug];
}
