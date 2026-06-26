'use client';

import React, { ReactNode, useEffect } from 'react';
import Navbar from './navbar';
import MobileHeader from './navbar/MobileHeader';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layouts({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const hideSidebar = ['/me'].includes(pathName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathName]);

  return (
    <div className="min-h-screen h-full overflow-x-hidden bg-slate-base">
      {!hideSidebar && (
        <>
          <Navbar />
          <MobileHeader />
        </>
      )}

      <main className="w-full scroll-smooth min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathName}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!hideSidebar && <Footer />}
      <Toaster />
    </div>
  );
}
