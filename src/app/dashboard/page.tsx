import { Metadata } from 'next';
import { getGithubData } from '@/services/github';
import Dashboard from '@/modules/dashborad/dashboardSection';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false },
};

export default async function DahboardPage() {
  const githubData = await getGithubData();
  return <Dashboard githubData={githubData} />;
}
