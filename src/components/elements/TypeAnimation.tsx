"use client";

import React from "react";
import { TypeAnimation as TypeAnimationComponent } from "react-type-animation";

interface TypeAnimationProps {
  sequence: string[];
  delay?: number;
  className?: string;
}
export default function TypeAnimation({
  sequence,
  delay = 1000,
  className,
}: TypeAnimationProps) {
  const modifiedSequence: (string | number)[] = [];

  sequence.forEach((item, index) => {
    modifiedSequence.push(item);

    if (index < sequence.length) {
      modifiedSequence.push(delay);
    }
  });

  return (
    <TypeAnimationComponent
      className={className}
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
    />
  );
}
