/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';

import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { BsGithub as GithubIcon } from 'react-icons/bs';

import Calendar from './Calendar';
import Overview from './Overview';
import { GITHUB_ACCOUNTS } from '@/constants/github';

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section className="flex flex-col space-y-4 dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          passHref
          className="font-code text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </SectionSubHeading>

      {!githubData && <div className="dark:text-neutral-400">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </section>
  );
}
