// src/lib/schema.ts
import { SITE } from "./seo.config";

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.person.name,
  jobTitle: SITE.person.jobTitle,
  url: SITE.url,
  image: SITE.person.avatar
    ? new URL(SITE.person.avatar, SITE.url).toString()
    : undefined,
  sameAs: SITE.person.sameAs,
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const projectSchema = (project: {
  name: string;
  url: string;
  description?: string;
  image?: string;
  technologies?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.name,
  url: project.url,
  description: project.description,
  codeRepository: project.url,
  programmingLanguage: "TypeScript",
  keywords: project.technologies?.join(", "),
  image: project.image,
  author: {
    "@type": "Person",
    name: SITE.person.name,
    url: SITE.url,
  },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});
