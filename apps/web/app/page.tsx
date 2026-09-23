import type { Metadata } from 'next';
import { StudioHome } from '@/components/home/StudioHome';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'ExportVid | Download social media content fast',
  description:
    'Paste a link and download videos and photos from TikTok, Instagram, YouTube, X, and more. Free, fast, and no watermark.',
  path: '/',
});

export default function HomePage() {
  return <StudioHome />;
}
