import { ReactNode } from 'react';

interface SectionSubHeadingProps {
  children?: ReactNode;
  className?: string;
}

export default function SectionSubHeading({
  children,
  className,
}: SectionSubHeadingProps) {
  return (
    <div
      className={`flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center ${className}`}
    >
      {children}
    </div>
  );
}
