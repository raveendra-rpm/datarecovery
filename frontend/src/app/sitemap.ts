import type { MetadataRoute } from 'next';
import { fetchBlogs } from '@/lib/blog-api';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in').replace(/\/$/, '');

// Regenerate the sitemap at most once an hour — blog posts change more often
// than the static marketing pages, so this keeps it fresh without hitting
// the backend on every crawler request.
export const revalidate = 3600;

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/blogs', changeFrequency: 'daily', priority: 0.9 },
  { path: '/who-we-are/about-us', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/who-we-are/confidentiality', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/who-we-are/quality-policy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/who-we-are/vision-mission', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/who-we-are/why-choose-us', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/cctv-data-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/desktop-laptop-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/encrypted-data-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/external-hard-drive', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/files-data-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/flash-card-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/raid-server-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/ssd-data-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/tapes-data-recovery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/price-and-cost', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/data-recovery/class-100-clean-room', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/data-recovery/recovery-methods', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/data-recovery/recovery-procedure', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/dss/clients', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/dss/faqs', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/dss/pickup-and-delivery', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/dss/testimonials', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/claims', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/contacts', changeFrequency: 'yearly', priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogs().catch(() => []);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts
    .filter((post) => !post.noindex)
    .map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [...staticEntries, ...blogEntries];
}
