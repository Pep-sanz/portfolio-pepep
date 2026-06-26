import { ReactNode } from 'react';

interface SimpleContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SimpleContainer({ children, className = '' }: SimpleContainerProps) {
  return (
    <section className={`space-y-12 container md:max-w-[80vw] ${className}`}>
      {children}
    </section>
  );
}
