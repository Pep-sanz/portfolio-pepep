import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react';
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import CareerCard from './CareerCard';
import DownloadResume from '@/components/elements/DownloadResume';

export default function Career() {
  return (
    <div className="w-full gap-6 flex flex-col dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading
          title="Career"
          icon={<CareerIcon size={32} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey
          </p>
          <DownloadResume />
        </SectionSubHeading>
      </div>
      <CareerCard />
    </div>
  );
}
