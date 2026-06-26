import PageContainer from "@/components/elements/PageContainer";
import Contributions from "./components/Contributions";

interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <PageContainer contentClassName="pt-24 md:pt-32">
      <Contributions githubData={githubData} />
    </PageContainer>
  );
}
