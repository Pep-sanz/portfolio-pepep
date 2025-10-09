import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import ProjectSection from "@/modules/project";

export const metadata = {
  title: "Projects",
  description: "Kumpulan proyek produksi & eksperimen oleh Pepcode.",
  alternates: { canonical: "https://www.pepcode.my.id/projects" },
};

export default async function page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.pepcode.my.id" },
          { name: "Projects", url: "https://www.pepcode.my.id/projects" },
        ])}
      />
      <ProjectSection />
    </>
  );
}
