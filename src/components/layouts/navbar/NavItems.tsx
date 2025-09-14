import Tooltip from '@/components/elements/Tooltip';
import { MenuItemProps } from '@/types/menu';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavItems({
  title,
  icon,
  href,
  withTitle = false,
}: MenuItemProps) {
  const [isHover, setIsHover] = React.useState(false);
  const pathName = usePathname();
  const isActivePath = pathName === href;
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ ease: 'linear', duration: 0.4 }}
      className={clsx('flex justify-center w-auto items-center')}
    >
      <motion.a
        href={href}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className={clsx(
          'flex items-center justify-start gap-2 px-4 py-2 hover:bg-hover rounded-full w-full h-10 transition-all duration-300 ease-in',
          isActivePath && 'bg-hover dark:text-white text-black',
          isHover && !isActivePath && 'bg-hover',
          !withTitle &&
            'flex items-center justify-center gap-2 px-4 py-2 hover:bg-hover rounded-full w-10 h-10 transition-all duration-300 ease-in',
        )}
      >
        <Tooltip title={title}>
          <div className="flex items-center gap-3">
            {icon}
            {withTitle && title}
          </div>
        </Tooltip>
      </motion.a>
    </motion.div>
  );
}
