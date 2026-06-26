import React from 'react';
import CareerCard from './CareerCard';
import DownloadResume from '@/components/elements/DownloadResume';

export default function Career() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-geist text-headline-lg text-on-surface">
            Career
          </h2>
          <p className="font-inter text-body-sm text-on-surface-variant mt-1">
            My professional career journey
          </p>
        </div>
        <DownloadResume />
      </div>
      <CareerCard />
    </section>
  );
}
