import HomeSection from "@/modules/home/HomeSection";

import type { Metadata } from "next";
import { SITE } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: "Pepcode — Software Engineer",
  description:
    "Portofolio Software Engineer dengan Next.js, TypeScript, dan Supabase. Tunjukkan proyek nyata dan kontribusi modern.",
  openGraph: {
    title: "Pepcode — Software Engineer",
    description:
      "Portofolio Software Engineer dengan Next.js, TypeScript, dan Supabase.",
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og?title=Pepcode&subtitle=Software%20Engineer`,
        width: 1200,
        height: 630,
        alt: "Pepcode Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pepcode — Software Engineer",
    description:
      "Portofolio Software Engineer dengan Next.js, TypeScript, dan Supabase.",
    images: [`${SITE.url}/og?title=Pepcode&subtitle=Software%20Engineer`],
  },
};

export default async function Home() {
  return <HomeSection />;
}
