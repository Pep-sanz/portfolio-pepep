"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/constants/menu";
import NavItems from "./NavItems";
import ToggleThemeIcon from "@/components/elements/ToggleThemeIcon";
import GradientButton from "@/components/elements/GradientButton";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const filtered = MENU_ITEMS.filter((item) => item.isShow);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = filtered.findIndex((item) => pathname === item.href);
  const indicatorIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 justify-center mt-4 pointer-events-none hidden md:flex">
      <div className="dynamic-island rounded-full flex items-center justify-between gap-2 md:gap-4 px-5 py-3 pointer-events-auto transition-all duration-300 max-w-max">
        <div className="font-geist font-semibold text-on-surface text-sm md:text-base whitespace-nowrap flex-shrink-0">
          Pepcode
        </div>
        <nav className="flex items-center gap-0.5 md:gap-1">
          {filtered.map((item, index) => (
            <NavItems
              key={item.title}
              {...item}
              scrolled={scrolled}
              showIndicator={index === indicatorIndex && indicatorIndex >= 0}
              isHovered={index === hoveredIndex}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </nav>
        <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
          <ToggleThemeIcon />
          <GradientButton onClick={() => router.push("/contact")} size="sm">
            Hire Me
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
