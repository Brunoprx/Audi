'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      
      document.body.style.overflow = 'unset';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-6">
                
                <div className="flex -space-x-4">
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 1.2, 
                                delay: i * 0.2, 
                                repeat: Infinity,
                                repeatType: "mirror", 
                                ease: "easeInOut"
                            }}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white bg-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        />
                    ))}
                </div>
                
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-gray-400 font-mono text-[10px] tracking-[0.4em] uppercase"
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}