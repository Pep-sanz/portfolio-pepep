import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react';
import DownloadResume from '@/components/elements/DownloadResume';
import { BiArchive } from 'react-icons/bi';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectItems } from '@/constants/dataProject';

export default function ProjectList() {
  const fiteredProjects = projectItems.filter((project) => project?.is_show);

  if (fiteredProjects.length === 0) {
    return 'no data';
  }
  return (
    <div className="w-full gap-6 flex flex-col dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading
          title="Projects"
          icon={<BiArchive size={32} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey
          </p>
        </SectionSubHeading>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {fiteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
