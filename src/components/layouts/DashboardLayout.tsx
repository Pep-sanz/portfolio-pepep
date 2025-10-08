'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from './navbar/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const hideSidebar = pathName.includes('/login');

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {!hideSidebar && <Sidebar />}

      <main
        className={`no-scrollbar min-h-screen ${
          hideSidebar ? 'ml-0 py-0' : 'ml-56 py-12'
        } px-6 scroll-smooth transition-all duration-300`}
      >
        {children}
      </main>
      <Toaster />
    </div>
  );
}
