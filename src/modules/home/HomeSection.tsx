import React from "react";
import Introduction from "./components/Introduction";
import ServicesList from "./components/ServicesList";
import LatestProjects from "./components/LatestProjects";
import DecorativeDivider from "./components/DecorativeDivider";
import PageContainer from "@/components/elements/PageContainer";

export default function HomeSection() {
  return (
    <PageContainer showTopGlow>
      <Introduction />
      <DecorativeDivider color="primary" />
      <LatestProjects />
      <DecorativeDivider color="secondary" />
      <ServicesList />
    </PageContainer>
  );
}
