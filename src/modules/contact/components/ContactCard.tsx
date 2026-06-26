'use client';

import { FiArrowUpRight } from 'react-icons/fi';

import { SocialMedia } from '@/types/menu';

export default function ContactCard({
  id,
  title,
  description,
  href,
  icon,
}: SocialMedia) {
  function handleCardClick() {
    window.open(href, '_blank');
  }

  return (
    <div
      onClick={handleCardClick}
      className="glass-card rounded-2xl p-5 border border-glass-border hover:border-primary/30 transition-all duration-300 cursor-pointer flex items-start gap-4"
    >
      <div className="glass-card rounded-full w-12 h-12 flex items-center justify-center text-on-surface-variant/70 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-geist text-headline-sm-mobile text-on-surface">
            {title}
          </h3>
          <FiArrowUpRight className="text-on-surface-variant/50 shrink-0" size={18} />
        </div>
        <p className="font-inter text-body-sm text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}
