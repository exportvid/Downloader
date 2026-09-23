import type { Metadata } from 'next';
import { StudioHome } from '@/components/home/StudioHome';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Download Videos and Photos from Social Media | ExportVid',
  description:
    'Download videos and photos from YouTube, Facebook, Instagram, TikTok, and more. Paste a link, pick a quality, and save it. Free, with no watermark.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webApplicationJsonLd()} />
      <StudioHome />
    </>
  );
}
