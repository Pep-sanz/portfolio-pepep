'use client';

import React, { ReactNode } from 'react';
import Navbar from './navbar';
import MobileHeader from './navbar/MobileHeader';
import { usePathname } from 'next/navigation';

export default function Layouts({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const hideSidebar = ['/me'].includes(pathName);

  return (
    <div className="flex items-center flex-col py-6 md:py-8 ">
      {!hideSidebar && <Navbar />}
      {!hideSidebar && <MobileHeader />}

      <main>{children}</main>
    </div>
  );
}
