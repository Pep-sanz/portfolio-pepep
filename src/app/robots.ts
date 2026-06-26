import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/projects', '/contact'],
        disallow: ['/dashboard', '/api/'],
      },
    ],
    sitemap: 'https://www.pepcode.my.id/sitemap.xml',
  };
}
