import type { Locale } from '../config';
import { en, type Messages } from './en';
import { es } from './es';

import { pt } from './pt';
import { fr } from './fr';
import { de } from './de';
import { id } from './id';
import { it } from './it';
import { tr } from './tr';
import { vi } from './vi';
import { ru } from './ru';
import { ar } from './ar';
import { hi } from './hi';
import { bn } from './bn';
import { ja } from './ja';
import { ko } from './ko';
const all: Record<Locale, Messages> = { en, es, pt, fr, de, id, it, tr, vi, ru, ar, hi, bn, ja, ko };

/** Returns the messages for a language. Every language must be defined, which TypeScript enforces. */
export function getMessages(locale: Locale): Messages {
  return all[locale];
}

export type { Messages, ClientMessages } from './en';
