'use client';

import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';
import { localePath } from '@/lib/i18n/config';

export default function NotFound() {
  const { locale, t } = useI18n();
  return (
    <div className="container-tool flex flex-col items-center py-28 text-center sm:py-36">
      <p className="bg-brand-gradient bg-clip-text font-[family-name:var(--font-studio-display)] text-[110px] leading-none text-transparent sm:text-[150px]">404</p>
      <h1 className="mt-2 text-xl font-semibold text-ink">{t.notFound.title}</h1>
      <p className="mt-2 text-[15px] text-ink-dim">{t.notFound.body}</p>
      <Link href={localePath(locale, '/')} className="press mt-8 inline-flex h-12 items-center rounded-2xl bg-brand-gradient px-7 text-[15px] font-bold text-white shadow-glow transition-[filter] hover:brightness-110">
        {t.notFound.button}
      </Link>
    </div>
  );
}
