export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: { y: [0, -20, 0] },
  transition: { duration: 6, repeat: Infinity },
};

export const scaleAnimation = {
  animate: { scale: [1, 1.1, 1] },
  transition: { duration: 2, repeat: Infinity },
};
