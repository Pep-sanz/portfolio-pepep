import PageContainer from "@/components/elements/PageContainer";
import Contributions from "./components/Contributions";

interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <PageContainer contentClassName="pt-16 md:pt-24">
      <Contributions githubData={githubData} />
    </PageContainer>
  );
}
