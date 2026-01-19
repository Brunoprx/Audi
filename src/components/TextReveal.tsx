'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }} 
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }} 
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.1, 0.25, 1], 
          delay: delay 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}