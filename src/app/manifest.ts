import { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Pepcode',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: SITE.themeColor,
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  };
}
