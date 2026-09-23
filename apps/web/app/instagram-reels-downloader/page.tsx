import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PlatformDownloaderPage } from '@/components/PlatformDownloaderPage';
import { getPlatformPage } from '@/lib/platforms';
import { pageMetadata } from '@/lib/seo';

const SLUG = 'instagram-reels-downloader';

export function generateMetadata(): Metadata {
  const config = getPlatformPage(SLUG);
  if (!config) return {};
  return pageMetadata({ title: config.metaTitle, description: config.metaDescription, path: `/${SLUG}` });
}

export default function Page() {
  const config = getPlatformPage(SLUG);
  if (!config) return notFound();
  return <PlatformDownloaderPage config={config} />;
}
