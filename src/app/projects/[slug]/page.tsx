import { Metadata } from "next";
import BackButton from "@/components/elements/BackButton";
import { projectItems } from "@/constants/dataProject";
import ProjectDetail from "@/modules/project/components/ProjectDetail";
import PageContainer from "@/components/elements/PageContainer";
import { SITE } from "@/lib/seo.config";
import JsonLd, {
  breadcrumbSchema,
  projectSchema,
} from "@/components/elements/JsonLd";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projectItems.filter((p) => p.is_show).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail = projectItems.find((item) => item.slug === params.slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      title: detail.title,
      description: detail.description,
      images: [{ url: `${SITE.url}${detail.image}` }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const slug = params?.slug;
  const detail = projectItems.find((item) => item.slug === slug);
  const project = detail;
  return (
    <div data-aos="fade-left">
      <PageContainer contentClassName="pt-20 md:pt-28">
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Projects", url: "/projects" },
            { name: project?.title || "", url: `/projects/${slug}` },
          ])}
        />
        {project && (
          <JsonLd
            data={projectSchema({
              title: project.title,
              description: project.description,
              image: project.image,
              url: `/projects/${project.slug}`,
              stacks: project.stacks,
            })}
          />
        )}
        <section className="glass-card rounded-2xl p-6 md:p-12 flex flex-col w-full">
          <div className="space-y-2 mb-8">
            <BackButton url="/projects" />
            <h1 className="font-geist text-headline-lg text-on-surface">
              {project?.title}
            </h1>
          </div>
          <ProjectDetail {...detail} />
        </section>
      </PageContainer>
    </div>
  );
}
