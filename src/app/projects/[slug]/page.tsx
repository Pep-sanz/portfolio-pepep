import BackButton from '@/components/elements/BackButton';
import Container from '@/components/elements/Container';
import { projectItems } from '@/constants/dataProject';
import PageHeading from '@/components/elements/PageHeading';
import ProjectDetail from '@/modules/project/components/ProjectDetail';
// import { IProjectItem } from '@/types/projects';

// interface ProjectsDetailPageProps {
//   params: { slug: string };
// }

export default async function ProjectDetailPage({ params }) {
  const slug = params?.slug;
  const detail = projectItems.find((item) => item.slug === slug);
  console.log(slug, params);
  return (
    <div data-aos="fade-left" className="space-y-12 container md:max-w-[80vw] ">
      <section className="flex flex-col w-full dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
        <div>
          <BackButton url="/projects" />
          <PageHeading title={detail.title} description={detail.description} />
        </div>
        <ProjectDetail {...detail} />
      </section>
    </div>
  );
}

// async function getProjectDetail(slug: string): Promise<IProjectItem> {
//   const response = await getCodeBayuData();
//   const projects = response.projects;

//   const project = projects.find((item) => item.slug === slug) as IProjectItem;
//   const contents = loadMdxFiles(slug, 'projects');
//   const content = contents.find((item) => item.slug === slug);
//   const newResponse = { ...project, content: content?.content };
//   return newResponse;
// }
