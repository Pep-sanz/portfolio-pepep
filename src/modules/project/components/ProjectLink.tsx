import Link from 'next/link'

import { FiExternalLink as LinkIcon } from 'react-icons/fi'

type ProjectLinkProps = {
  link_demo?: string | null
  link_github?: string | null
}

export default function ProjectLink({ link_demo, link_github }: ProjectLinkProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {link_demo && (
        <Link
          href={link_demo}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-full px-4 py-2 flex items-center gap-2 border border-glass-border hover:border-primary/30 transition-all"
        >
          <LinkIcon size={18} className="text-on-surface-variant/70" />
          <span className="font-geist text-label-caps text-on-surface-variant">Live Demo</span>
        </Link>
      )}
      {link_github && (
        <Link
          href={link_github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-full px-4 py-2 flex items-center gap-2 border border-glass-border hover:border-primary/30 transition-all"
        >
          <LinkIcon size={18} className="text-on-surface-variant/70" />
          <span className="font-geist text-label-caps text-on-surface-variant">Source Code</span>
        </Link>
      )}
    </div>
  )
}
