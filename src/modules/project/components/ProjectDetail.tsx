import Image from 'next/image'

import { STACKS } from '@/constants/stacks'
import ProjectLink from './ProjectLink'

type ProjectDetailProps = {
  title: string
  description: string
  image: string
  stacks: string[]
  link_demo?: string | null
  link_github?: string | null
}

export default function ProjectDetail({
  title,
  description,
  image,
  stacks,
  link_demo,
  link_github,
}: ProjectDetailProps) {
  return (
    <div className="flex flex-col items-stretch gap-8 md:gap-10">
      {description && (
        <p className="text-body text-on-surface-variant leading-relaxed">{description}</p>
      )}

      {stacks && stacks.length > 0 && (
        <div>
          <h3 className="font-geist text-label-caps text-on-surface-variant mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack: string, index: number) => (
              <div
                key={index}
                className="glass-card rounded-full px-3 py-1.5 flex items-center gap-2 border border-glass-border"
              >
                <div className="w-4 h-4 text-on-surface-variant/70 shrink-0">
                  {STACKS[stack]}
                </div>
                <span className="font-geist text-mono text-on-surface-variant text-xs">
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {image && (
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
          <div className="relative h-60 w-full overflow-hidden rounded-2xl grayscale transition-all duration-500 hover:grayscale-0 md:h-72 lg:h-96">
            <Image
              src={image}
              alt={title || 'Project image'}
              fill
              className="object-cover object-top duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      )}

      <ProjectLink link_demo={link_demo} link_github={link_github} />
    </div>
  )
}
