'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
  withMarginTop?: boolean;
}

export default function Container({
  children,
  className = '',
  withMarginTop = false,
  ...others
}: ContainerProps) {
  return (
    <div
      className={` px-3 py-6 ${
        withMarginTop && 'sm:mt-20 md:mt-24'
      } ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
