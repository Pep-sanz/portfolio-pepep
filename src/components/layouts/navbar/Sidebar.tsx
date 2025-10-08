import React from 'react';
import { DASHBOARD_ITEMS } from '@/constants/menu';
import NavItems from './NavItems';
import ToggleThemeIcon from '@/components/elements/ToggleThemeIcon';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function Sidebar() {
  const router = useRouter();
  const filtered = DASHBOARD_ITEMS.filter((item) => item.isShow);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('Error signing out:', error.message);
    } else {
      router.push('/admin/login');
    }
  };

  return (
    <div className="sm:flex min-w-56 flex-col hidden py-3 px-6 z-50 justify-between fixed left-0 top-0 bottom-0 dark:bg-secondary bg-white shadow-md">
      <div className="">
        <div className="border-b-2 border-neutral-200 dark:border-neutral-700 w-full flex justify-between items-center pb-4 mb-6">
          <p className="font-bold text-xl">Pepcode</p>
          <ToggleThemeIcon size={16} />
        </div>
        <div className="flex flex-col w-full gap-6">
          {filtered.map((item) => {
            return <NavItems key={item.title} {...item} withTitle={true} />;
          })}
        </div>
      </div>
      <div className="">
        <Button
          size="lg"
          leftIcon={<LogOut />}
          variant="outline"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
