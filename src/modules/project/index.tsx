"use client";
import React from "react";
import ProjectList from "./components/ProjectsList";
import PageContainer from "@/components/elements/PageContainer";

export default function ProjectSection() {
  return (
    <PageContainer contentClassName="pt-20 md:pt-28">
      <ProjectList />
    </PageContainer>
  );
}
