import React from 'react';
import { motion } from 'framer-motion';
import { projectItems } from '@/constants/dataProject';
import ProjectCard from './ProjectCard';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ProjectList() {
  const fiteredProjects = projectItems.filter((project) => project?.is_show);

  if (fiteredProjects.length === 0) {
    return 'no data';
  }
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-geist text-headline-lg text-on-surface">
          Projects
        </h2>
        <p className="font-inter text-body-sm text-on-surface-variant mt-1">
          My professional career journey
        </p>
      </div>
      <motion.div
        className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {fiteredProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
