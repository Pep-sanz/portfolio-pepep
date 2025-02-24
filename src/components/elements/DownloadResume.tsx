'use client';

import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi';

export default function DownloadResume() {
  return (
    <a
      href="/pdfs/resume.pdf"
      download="pepep-portfolio.pdf"
      className="flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300"
      // data-umami-event="Download Resume"
    >
      <div className="overflow-hidden border-b-2 border-neutral-600 dark:border-neutral-500">
        <DownloadIcon
          data-testid="download-icon"
          className="animate-rain-arrow"
        />
      </div>
      <span>Download Resume</span>
    </a>
  );
}
