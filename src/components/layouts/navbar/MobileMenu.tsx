import { motion } from 'framer-motion';
import { FC } from 'react';

import { MENU_ITEMS } from '@/constants/menu';
import Menu from './Menu';
import { useRouter } from 'next/navigation';
import { useMenu } from '@/hooks/menu';
import GradientButton from '@/components/elements/GradientButton';

const MobileMenu: FC = () => {
  const router = useRouter();
  const { hideMenu } = useMenu();
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  const handleHireMe = () => {
    hideMenu();
    router.push('/contact');
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-start justify-center md:hidden pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={hideMenu}
      />
      <motion.div
        className="relative w-[90vw] max-w-[400px] dynamic-island rounded-3xl p-5"
        initial={{ y: -24, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -24, opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="font-geist font-semibold text-on-surface text-sm mb-3 px-2"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          Navigation
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Menu list={filteredMenu} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15 }}
        >
          <GradientButton onClick={handleHireMe} size="md" className="w-full justify-center mt-4">
            Hire Me
          </GradientButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
