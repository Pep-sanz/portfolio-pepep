import { MetadataRoute } from 'next';
import { projectItems } from '@/constants/dataProject';
import { SITE } from '@/lib/seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE.url}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const projectPages = projectItems
    .filter((p) => p.is_show)
    .map((p) => ({
      url: `${SITE.url}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...projectPages];
}
