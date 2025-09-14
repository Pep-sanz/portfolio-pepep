'use client';

import React, { ReactNode } from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import MobileHeader from './navbar/MobileHeader';

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const hideSidebar = ['/me', '/test'].includes(pathName);

  return (
    <div className="space-y-6 md:space-y-10 py-6 min-h-screen h-full overflow-x-hidden">
      <div className="container md:max-w-[80vw] items-center justify-center">
        {!hideSidebar && <Navbar />}
        {!hideSidebar && <MobileHeader />}
      </div>

      <main className="no-scrollbar h-full w-full scroll-smooth transition-all duration-300 lg:min-h-screen">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
