import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeInY } from '@/lib/framer/variants';

type Props = {
  children: ReactNode;
};

const BlogLayout = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={asPath}
          variants={fadeInY(40)}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          className="pt-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BlogLayout;
