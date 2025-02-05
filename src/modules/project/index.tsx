'use client';
import React from 'react';
import ProjectList from './ProjectsList';

export default function ProjectSection() {
  return (
    <section className="space-y-12 container md:max-w-[80vw] grid items-center justify-items-center">
      <ProjectList />
    </section>
  );
}
