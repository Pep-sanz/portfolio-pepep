'use client';

import { AnimatePresence } from 'framer-motion';

import { useMenu } from '@/hooks/menu';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import ToggleThemeIcon from '@/components/elements/ToggleThemeIcon';

export default function MobileHeader() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 pointer-events-none md:hidden">
        <div className="dynamic-island rounded-full flex items-center justify-between px-5 py-3 pointer-events-auto w-[90vw] max-w-[400px]">
          <div className="font-geist font-semibold text-on-surface text-sm whitespace-nowrap">
            Pepcode
          </div>
          <div className="flex items-center gap-2">
            <ToggleThemeIcon />
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        </div>
      </div>
      <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
}
