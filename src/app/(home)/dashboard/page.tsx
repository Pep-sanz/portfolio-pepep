import { getGithubData } from '@/services/github';
import Dashboard from '@/modules/dashborad/dashboardSection';

export default async function DahboardPage() {
  const githubData = await getGithubData();
  return <Dashboard githubData={githubData} />;
}
