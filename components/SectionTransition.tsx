import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotate: 5
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1.02
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay > 0 ? delay : 0.2,
        type: "spring",
        damping: 15,
        stiffness: 120
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;