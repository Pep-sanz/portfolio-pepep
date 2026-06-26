import { Metadata } from 'next';
import ContactSection from '@/modules/contact/ContactSection';
import JsonLd, { breadcrumbSchema } from '@/components/elements/JsonLd';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Pepep Saepul Rohman. Connect on GitHub, LinkedIn, or send me a message directly.',
  openGraph: {
    title: 'Contact — Pepcode',
    description: 'Get in touch with Pepep Saepul Rohman.',
  },
};

export default async function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />
      <ContactSection />
    </>
  );
}
