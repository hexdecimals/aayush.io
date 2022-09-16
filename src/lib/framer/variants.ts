import { Variants } from 'framer-motion';

export const fadeInY = (direction: number, duration = 0.5): Variants => {
  return {
    initial: {
      y: direction,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration,
        ease: 'easeInOut',
      },
    },
  };
};
