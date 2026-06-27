'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

import Image from '@/components/elements/Image';
import Tooltip from '@/components/elements/Tooltip';
import { IProjectItem } from '@/types/projects';
import { STACKS } from '@/constants/stacks';

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  mock_dark,
  mock_light,
  stacks,
  is_featured,
}: IProjectItem) {
  const { theme } = useTheme();
  const resolvedImage = theme === 'dark' && mock_dark ? mock_dark
    : theme === 'light' && mock_light ? mock_light
    : image;
  const trimmedContent =
    description.slice(0, 100) + (description.length > 100 ? '...' : '');
  return (
    <Link href={`/projects/${slug}`} className="group">
      <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
        {is_featured && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-emerald-500 px-3 py-1.5 font-geist text-label-caps text-white">
            Featured
          </div>
        )}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={resolvedImage}
            width={600}
            height={200}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
          <h3 className="font-geist text-headline-sm-mobile text-on-surface group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="font-inter text-body-sm text-on-surface-variant flex-1">
            {trimmedContent}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.slice(0, 5).map((stack: string, index: number) => (
              <div key={index} className="w-5 h-5">
                <Tooltip title={stack}>
                  <span className="text-on-surface-variant/70">{STACKS[stack]}</span>
                </Tooltip>
              </div>
            ))}
            {stacks && stacks.length > 5 && (
              <span className="text-xs text-on-surface-variant/50 font-geist">
                +{stacks.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
