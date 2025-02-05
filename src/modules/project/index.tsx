'use client';
import React from 'react';
import ProjectList from './components/ProjectsList';

export default function ProjectSection() {
  return (
    <section className="space-y-12 container md:max-w-[80vw]">
      <ProjectList />
    </section>
  );
}
