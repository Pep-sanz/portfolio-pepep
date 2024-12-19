'use client';

import React from 'react';
import Introduction from './Introduction';
import ServicesList from './ServicesList';

export default function HomeSection() {
  return (
    <section className="space-y-12">
      <Introduction />
      <ServicesList />
    </section>
  );
}
