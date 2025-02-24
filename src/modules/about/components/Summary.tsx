import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import Tooltip from '@/components/elements/Tooltip';
import { summaryMock } from '@/constants/summary';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLeaf } from 'react-icons/bi';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

export default function Summary() {
  return (
    <div className="space-y-6 dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading
          title="About"
          icon={<BiLeaf size={32} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">A short story of me</p>
        </SectionSubHeading>
      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-6">
        <div className="space-y-3 flex flex-col items-center h-fit">
          <Image
            src="/Images/pepep-1.png"
            width={250}
            height={200}
            alt="profile"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="mt-1 flex items-center gap-2">
              <Link href="/" passHref>
                <h2 className="flex-grow dark:text-white whitespace-nowrap text-lg font-bold lg:text-xl">
                  Pepep Saepul Rohman
                </h2>
              </Link>
              <Tooltip title="Verified">
                <VerifiedIcon size={18} className="text-blue-400" />
              </Tooltip>
            </div>
            <Link
              href="/"
              className="font-semibold cursor-pointer text-neutral-600 dark:text-neutral-400"
            >
              @pepCode
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-6 font-sans text-neutral-800 dark:text-neutral-300">
          <p>{summaryMock.paragraphOne}</p>
          <p>{summaryMock.paragraphTwo}</p>
          <p>{summaryMock.paragraphThree}</p>
          <p>{summaryMock.paragraphFour}</p>
        </div>
      </div>
    </div>
  );
}
