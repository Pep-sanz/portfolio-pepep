import { Metadata } from 'next';
import ProjectSection from '@/modules/project';
import JsonLd, { breadcrumbSchema } from '@/components/elements/JsonLd';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse my portfolio of projects built with modern technologies like Next.js, TypeScript, and TailwindCSS — from enterprise CRM systems to personal tools.',
  openGraph: {
    title: 'Projects — Pepcode',
    description:
      'Browse my portfolio of projects built with modern technologies.',
  },
};

export default async function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ])}
      />
      <ProjectSection />
    </>
  );
}
