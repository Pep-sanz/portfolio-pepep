/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import dynamic from "next/dynamic";

import { BsGithub as GithubIcon } from "react-icons/bs";

import Overview from "./Overview";
import { GITHUB_ACCOUNTS } from "@/constants/github";

const Calendar = dynamic(() => import("./Calendar"), { ssr: false });

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-glass-border flex flex-col gap-6 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-secondary-container/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-geist text-headline-lg text-on-surface flex items-center gap-2">
            <GithubIcon className="text-on-surface-variant/70" size={24} />
            Contributions
          </h2>
          <p className="font-inter text-body-sm text-on-surface-variant mt-1">
            My contributions from last year on GitHub.
          </p>
        </div>
        <Link
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          passHref
          className="font-geist text-mono text-on-surface-variant hover:text-primary transition-colors duration-200 shrink-0"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </div>

      {!githubData && <div className="text-on-surface-variant">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </div>
  );
}
