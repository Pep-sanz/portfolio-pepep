"use client";

import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import React, { useEffect } from "react";
// import DownloadResume from '@/components/elements/DownloadResume';
import { BiArchive } from "react-icons/bi";
import { motion } from "framer-motion";
// import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/lib/supabase/client";
import ProjectCard from "@/modules/project/components/ProjectCard";
import { useProjectStore } from "@/stores/projects.sotre";

export default function ProjectContainer() {
  // const { toast } = useToast();
  const { data, getData } = useProjectStore();
  const fiteredProjects = data?.filter((project) => project?.is_show);

  useEffect(() => {
    getData();
  }, []);

  if (fiteredProjects.length === 0) {
    return "no data";
  }

  return (
    <div className="w-full gap-6 flex flex-col dark:bg-secondary bg-white rounded-md shadow-md p-3 md:p-6 lg:p-12">
      <div className="space-y-2">
        <SectionHeading
          title="Projects"
          icon={<BiArchive size={32} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My last project</p>
        </SectionSubHeading>
      </div>
      <div className="grid w-full md:grid-cols-2 gap-6">
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
