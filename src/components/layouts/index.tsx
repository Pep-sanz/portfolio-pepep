'use client';

import React, { ReactNode } from 'react';
import Navbar from './navbar';
import MobileHeader from './navbar/MobileHeader';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Layouts({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get('read-mode');

  const hideSidebar = ['/me'].includes(pathName) || readMode === 'true';

  console.log(hideSidebar);
  console.log(readMode);

  return (
    <div className="flex items-center flex-col py-6 md:py-8 ">
      {!hideSidebar && <Navbar />}
      {!hideSidebar && <MobileHeader />}

      <main>{children}</main>
    </div>
  );
}
