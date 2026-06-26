import React from 'react';

interface DecorativeDividerProps {
  color?: 'primary' | 'secondary';
}

export default function DecorativeDivider({ color = 'primary' }: DecorativeDividerProps) {
  const glowColor = color === 'primary' ? 'bg-primary/50' : 'bg-secondary/50';
  const diamondBorder = 'border-glass-border';

  return (
    <div className="w-full flex items-center justify-center relative py-12">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
      <div className={`absolute w-32 h-[2px] ${glowColor} blur-[4px]`} />
      <div className={`absolute w-5 h-5 rotate-45 border-2 ${diamondBorder} bg-slate-base`} />
    </div>
  );
}
