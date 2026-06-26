import React from "react";
import SkillList from "./components/SkillList";
import Summary from "./components/Summary";
import Career from "./components/Career";
import DecorativeDivider from "@/modules/home/components/DecorativeDivider";
import PageContainer from "@/components/elements/PageContainer";

export default function AboutSection() {
  return (
    <PageContainer contentClassName="pt-20 md:pt-28">
      <Summary />
      <DecorativeDivider color="primary" />
      <Career />
      <DecorativeDivider color="secondary" />
      <SkillList />
    </PageContainer>
  );
}
