import React from 'react';
import { MENU_ITEMS } from '@/constants/menu';
import NavItems from './NavItems';
import { Button } from '@/components/ui/button';
import ToggleThemeIcon from '@/components/elements/ToggleThemeIcon';
import { FiPlusCircle } from 'react-icons/fi';

export default function Navbar() {
  const filtered = MENU_ITEMS.filter((item) => item.isShow);

  return (
    <div className="sm:flex hidden py-3 px-6 z-50 justify-between items-center sticky dark:bg-secondary bg-white rounded-md shadow-md">
      <div className="flex gap-6">
        {filtered.map((item) => {
          return <NavItems key={item.title} {...item} />;
        })}
      </div>
      <div className="space-x-6 flex justify-center items-center">
        <ToggleThemeIcon />
        <Button>
          <p>Hire Me</p>
          <FiPlusCircle />
        </Button>
      </div>
    </div>
  );
}
