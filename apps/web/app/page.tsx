import type { Metadata } from 'next';
import { StudioHome } from '@/components/home/StudioHome';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Download Videos and Photos from Social Media | ExportVid',
  description:
    'Free video downloader for social media. Paste a link from YouTube, Facebook, Instagram, TikTok, and more, then save the video or photo in the best quality.',
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
