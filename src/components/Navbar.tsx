'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll para mudar o estilo da nav
  useMotionValueEvent(scrollY, "change", (latest) => {
    const triggerHeight = typeof window !== 'undefined' ? window.innerHeight * 0.4 : 300;

    if (latest > triggerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/10" 
          : "py-6 bg-transparent border-b border-transparent" 
      }`}
    >
      <div className="flex items-center gap-3 z-10 cursor-pointer group">
        
        <div className="flex -space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[2px] md:border-[2.5px] border-white bg-transparent group-hover:border-gray-300 transition-colors" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[2px] md:border-[2.5px] border-white bg-transparent group-hover:border-gray-300 transition-colors" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[2px] md:border-[2.5px] border-white bg-transparent group-hover:border-gray-300 transition-colors" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[2px] md:border-[2.5px] border-white bg-transparent group-hover:border-gray-300 transition-colors" />
        </div>

        <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase hidden md:block group-hover:text-gray-300 transition-colors">
            Audi
        </span>
      </div>

      <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
        <a href="#" className="hover:text-white transition-colors">Início</a>
        <a href="#" className="hover:text-white transition-colors">Modelos</a>
        <a href="#" className="hover:text-white transition-colors">Eletromobilidade</a>
        <a href="#" className="hover:text-white transition-colors">Vantagens</a>
        <a href="#" className="hover:text-white transition-colors">Compare</a>
      </div>

      <div className="z-10">
        <button 
            className={`group flex items-center gap-3 px-6 py-2.5 text-xs md:text-sm font-bold rounded-full transition-all duration-300 shadow-lg ${
                isScrolled 
                    ? "bg-white text-black hover:bg-gray-200 hover:scale-105" 
                    : "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black hover:border-white" 
            }`}
        >
          <span>Agendar Test-drive</span>
          
          <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled
               ? "bg-black text-white group-hover:rotate-45"
               : "bg-white text-black group-hover:bg-black group-hover:text-white group-hover:rotate-45"
          }`}>
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
             </svg>
          </div>

        </button>
      </div>
    </motion.nav>
  );
}