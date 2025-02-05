'use client';
import React from 'react';
import SkillList from './components/SkillList';
import Summary from './components/Summary';
import Career from './components/Career';

export default function AboutSection() {
  return (
    <section className="space-y-12 container md:max-w-[80vw] grid items-center justify-items-center">
      <Summary />
      <Career />
      <SkillList />
    </section>
  );
}
