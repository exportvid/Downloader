import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PlatformDownloaderPage } from '@/components/PlatformDownloaderPage';
import { getPlatformPage, platformPages } from '@/lib/platforms';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(platformPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const config = getPlatformPage(slug);
  if (!config) return {};
  return pageMetadata({ title: config.metaTitle, description: config.metaDescription, path: `/${slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getPlatformPage(slug);
  if (!config) return notFound();
  return <PlatformDownloaderPage config={config} />;
}
