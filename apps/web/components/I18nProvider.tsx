'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { ClientMessages } from '@/lib/i18n/messages';

interface I18nValue {
  locale: Locale;
  t: ClientMessages;
}

const I18nContext = createContext<I18nValue | null>(null);

/** Gives client components the current language and its interface strings. */
export function I18nProvider({ locale, messages, children }: { locale: Locale; messages: ClientMessages; children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, t: messages }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used inside I18nProvider');
  return value;
}
