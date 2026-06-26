import React from 'react';
import Link from 'next/link';
import Image from '@/components/elements/Image';
import Tooltip from '@/components/elements/Tooltip';
import { projectItems } from '@/constants/dataProject';
import { STACKS } from '@/constants/stacks';

export default function LatestProjects() {
  const visible = projectItems.filter((p) => p.is_show);
  const latest = visible.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-geist text-headline-lg text-on-surface">
          Latest Projects
        </h2>
        <Link
          href="/projects"
          className="group font-geist text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 flex items-center gap-1"
        >
          View All Projects
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {latest.map((project) => {
          const trimmedDesc =
            project.description.slice(0, 100) +
            (project.description.length > 100 ? '...' : '');

          return (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group">
              <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    width={600}
                    height={200}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-geist text-headline-sm-mobile text-on-surface group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant flex-1">
                    {trimmedDesc}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.stacks?.slice(0, 5).map((stack: string, index: number) => (
                      <div key={index} className="w-5 h-5">
                        <Tooltip title={stack}>
                          <span className="text-on-surface-variant/70">{STACKS[stack]}</span>
                        </Tooltip>
                      </div>
                    ))}
                    {project.stacks && project.stacks.length > 5 && (
                      <span className="text-xs text-on-surface-variant/50 font-geist">
                        +{project.stacks.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
