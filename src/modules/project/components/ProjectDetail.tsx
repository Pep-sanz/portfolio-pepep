import Image from 'next/image';

import Tooltip from '@/components/elements/Tooltip';
import { IProjectItem } from '@/types/projects';
import { STACKS } from '@/constants/stacks';
import ProjectLink from './ProjectLink';

// projectDetail
export default function ProjectDetail({
  title,
  image,
  stacks,
  link_demo,
  link_github,
  content,
}: IProjectItem) {
  return (
    <div className="space-y-8 overflow-hidden flex items-center justify-center flex-col ">
      <div className="w-full flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-[15px] text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>
                  <div className="w-5">{STACKS[stack]}</div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo || ''}
          link_github={link_github || ''}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className="transition-all duration-300 hover:scale-105"
      />
      {/* {content && (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      )} */}
    </div>
  );
}
