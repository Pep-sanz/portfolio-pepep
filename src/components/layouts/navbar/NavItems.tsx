import { MenuItemProps } from "@/types/menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MotionLink = motion(Link);

interface NavItemsProps extends MenuItemProps {
  scrolled: boolean;
  showIndicator: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function NavItems({
  title,
  icon,
  href,
  scrolled,
  showIndicator,
  isHovered,
  onHover,
  onLeave,
}: NavItemsProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  const showText = !scrolled || isActive || isHovered;

  return (
    <MotionLink
      href={href}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300 font-geist text-mono"
    >
      {showIndicator && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute inset-0 bg-primary/15 dark:bg-white/[0.07] rounded-full -z-10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span
        className={`relative z-10 flex-shrink-0 transition-colors duration-200 ${isActive ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface"}`}
      >
        {icon}
      </span>
      <motion.span
        className="relative z-10 overflow-hidden whitespace-nowrap"
        initial={false}
        animate={{
          maxWidth: showText ? 200 : 0,
          opacity: showText ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        <span
          className={`transition-colors duration-200 ${isActive ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface"}`}
        >
          {title}
        </span>
      </motion.span>
    </MotionLink>
  );
}
