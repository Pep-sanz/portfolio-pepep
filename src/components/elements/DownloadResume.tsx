'use client';

import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi';

export default function DownloadResume() {
  return (
    <a
      href="/pdfs/resume.pdf"
      download="pepep-portfolio.pdf"
      className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300 font-geist text-mono"
    >
      <div className="overflow-hidden border-b-2 border-on-surface-variant/50 hover:border-primary">
        <DownloadIcon
          data-testid="download-icon"
          className="animate-rain-arrow"
        />
      </div>
      <span>Download Resume</span>
    </a>
  );
}
