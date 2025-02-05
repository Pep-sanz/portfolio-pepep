/* eslint-disable @typescript-eslint/no-explicit-any */

import Contributions from './components/Contributions';

interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <section className="space-y-12 container md:max-w-[80vw]">
      <Contributions githubData={githubData} />
    </section>
  );
}
