'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image'; 

export default function FinalCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const containerScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const containerRadius = useTransform(scrollYProgress, [0, 1], ["4rem", "0rem"]);
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.8, 1], [40, 0]);
  const textScale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);
  const textBlur = useTransform(scrollYProgress, [0.8, 1], ["10px", "0px"]);

  return (
    <section ref={containerRef} className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative z-10">
      
      <motion.div 
        style={{ 
          scale: containerScale, 
          borderRadius: containerRadius 
        }}
        className="relative w-full h-full overflow-hidden origin-center"
      >
        
        <motion.div 
          className="absolute inset-0 w-full h-[120%]"
          style={{ y: imageY }} 
        >
           <Image
             src="/audi-cta.jpg" 
             alt="Audi e-tron vista traseira"
             fill 
             className="object-cover object-center"
             priority={false}
           />
        </motion.div>

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 z-10" />

        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6">
          
          <motion.div 
            style={{ 
              opacity: textOpacity, 
              y: textY,
              scale: textScale,
              filter: textBlur 
            }}
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 drop-shadow-2xl">
              O futuro espera.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-lg mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
              Não dirija apenas um carro. <br/>
              Dirija uma declaração de progresso.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full text-lg font-bold mx-auto hover:bg-gray-200 transition-colors shadow-[0_0_50px_rgba(255,255,255,0.3)]"
            >
              Configure o seu Audi
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </motion.button>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}