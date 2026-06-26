import { Metadata } from 'next';
import AboutSection from '@/modules/about';
import JsonLd, { breadcrumbSchema } from '@/components/elements/JsonLd';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Pepep Saepul Rohman — a Software Engineer specializing in frontend development. Explore my career journey, skills, and professional experience.',
  openGraph: {
    title: 'About — Pepcode',
    description:
      'Learn about Pepep Saepul Rohman — a Software Engineer specializing in frontend development.',
  },
};

export default async function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ])}
      />
      <AboutSection />
    </>
  );
}
