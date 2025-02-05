'use client';

import React from 'react';
import Introduction from './Introduction';
import ServicesList from './ServicesList';

export default function HomeSection() {
  return (
    <section className="space-y-12 container md:max-w-[80vw] grid items-center justify-items-center">
      <Introduction />
      <ServicesList />
    </section>
  );
}
