import { motion } from 'framer-motion';
import { FC } from 'react';

import { MENU_ITEMS } from '@/constants/menu';
import Menu from './Menu';

const MobileMenu: FC = () => {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <motion.div
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Menu list={filterdMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
