import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

export function Card({ children, className = '', ...others }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      data-testid="card"
      className={cn(
        'rounded-xl shadow-md transition-all duration-300 hover:shadow-none',
        className,
      )}
      {...others}
    >
      {children}
    </motion.div>
  );
}

export function GlossyCard({ children, className = '', ...others }: CardProps) {
  return (
    <div
      className={cn(
        'inset-shadow rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900',
        className,
      )}
      {...others}
    >
      <div className=" rounded-md bg-gradient-to-b from-white to-neutral-100 px-6 py-4  dark:from-neutral-800 dark:to-neutral-900">
        {children}
      </div>
    </div>
  );
}
