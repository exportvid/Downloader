import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { platformPages } from '@/lib/platforms';

const STATIC_PATHS = ['/', '/supported-sites', '/faq', '/privacy', '/terms', '/copyright', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.6,
  }));

  const platformEntries: MetadataRoute.Sitemap = Object.keys(platformPages).map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticEntries, ...platformEntries];
}
