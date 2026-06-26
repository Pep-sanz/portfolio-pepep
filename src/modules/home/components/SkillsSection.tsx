import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiGit,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Git / CI/CD', icon: SiGit },
];

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-geist text-headline-lg text-on-surface text-center">
        Tech Stack &amp; Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="glass-card p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <Icon className="text-3xl md:text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="font-geist text-mono text-on-surface text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
