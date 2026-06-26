'use client';

import useHasMounted from '@/hooks/useHasMounted';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import { BsCloudMoon, BsCloudSun } from 'react-icons/bs';

export default function ToggleThemeIcon() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-on-surface-variant hover:text-on-surface hover:bg-black/[0.08] dark:hover:bg-white/[0.12] p-2 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === 'light' ? (
        <BsCloudSun size={18} />
      ) : (
        <BsCloudMoon size={18} />
      )}
    </motion.button>
  );
}
