import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton = ({
  expandMenu,
  setExpandMenu,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setExpandMenu(!expandMenu)}
      className="relative flex items-center justify-center w-6 h-6"
      aria-label="Toggle menu"
    >
      <motion.span
        className="absolute w-5 h-0.5 rounded-full bg-on-surface-variant"
        animate={expandMenu ? 'open' : 'closed'}
        variants={{
          closed: { rotate: 0, y: -4 },
          open: { rotate: 45, y: 0 },
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute w-5 h-0.5 rounded-full bg-on-surface-variant"
        animate={expandMenu ? 'open' : 'closed'}
        variants={{
          closed: { opacity: 1, x: 0 },
          open: { opacity: 0, x: 6 },
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute w-5 h-0.5 rounded-full bg-on-surface-variant"
        animate={expandMenu ? 'open' : 'closed'}
        variants={{
          closed: { rotate: 0, y: 4 },
          open: { rotate: -45, y: 0 },
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      />
    </button>
  );
};

export default MobileMenuButton;
