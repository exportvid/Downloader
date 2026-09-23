import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { platformPages } from '@/lib/platforms';

const STATIC_PATHS = ['/', '/supported-sites', '/faq', '/privacy', '/terms', '/copyright', '/contact'];

// No lastModified: build time is not a real edit date, and search engines learn to ignore dates that always change.
export default function sitemap(): MetadataRoute.Sitemap {
  return [...STATIC_PATHS, ...Object.keys(platformPages).map((slug) => `/${slug}`)].map((path) => ({ url: `${SITE_URL}${path}` }));
}
