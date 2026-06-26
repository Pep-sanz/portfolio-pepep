"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BiBriefcase, BiMapPin } from "react-icons/bi";
import TypeAnimation from "@/components/elements/TypeAnimation";
import MarqueeElement from "@/components/elements/MarqueeElement";
import GradientButton from "@/components/elements/GradientButton";
import SkillCard from "@/modules/about/components/SkillCard";
import { STACKS } from "@/constants/stacks";
import Image from "@/components/elements/Image";

export default function Introduction() {
  const router = useRouter();

  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center pt-16 md:pt-24 relative">
      <div className="flex flex-col gap-5 md:gap-6 relative z-10">
        <div className="">
          <h1 className="font-geist text-headline-lg text-on-surface drop-shadow-sm">
            Pepep Saepul R
          </h1>
          <TypeAnimation
            className="inline whitespace-nowrap text-headline-lg-mobile md:text-headline-xl"
            sequence={[
              "Frontend Developer",
              "Backend Developer",
              "Mobile Developer",
            ]}
          />
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-glass-border glass-card text-on-surface-variant font-geist text-mono">
            <BiBriefcase size={16} />
            <span>Remote/office workers</span>
          </div>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-glass-border glass-card text-on-surface-variant font-geist text-mono">
            <BiMapPin size={16} />
            <span>Based in Bandung 🇮🇩</span>
          </div>
        </div>
        <p className="font-inter text-body-md text-on-surface-variant max-w-lg">
          I am a software engineer specializing in frontend development for both
          mobile and web platforms. I focus on building fast, responsive, and
          visually appealing applications.
        </p>
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="/pdfs/resume.pdf"
            download="pepep-portfolio.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-glass-border glass-card text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all duration-300 font-geist text-mono"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <GradientButton onClick={() => router.push("/about")} size="md">
            About Me
            <FaArrowRight />
          </GradientButton>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0" />
        <div className="w-full h-[360px] md:h-[400px] rounded-3xl glass-card flex items-center justify-center relative z-10 overflow-hidden">
          <Image
            alt="Portrait of Pepep Saepul R"
            width={300}
            height={600}
            priority
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            src="/Images/pepep-2.png"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-2 space-y-1 overflow-x-hidden">
        {Array.from({ length: 1 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
}
