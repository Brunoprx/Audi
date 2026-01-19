'use client';

import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function SimpleSection() {
  return (
    <section className="w-full bg-white pt-20 pb-40 px-6 flex flex-col items-center overflow-hidden">
      
      <SectionDivider theme="light" />

      <div className="max-w-5xl mx-auto text-center mt-16 md:mt-24 relative">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-50 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10 relative z-10"
        >
          <span className="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase">
            Pureza do Design
          </span>

          <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.95]">
            A sofisticação da <br />
            <span className="text-slate-400">simplicidade.</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed">
            Eliminamos o desnecessário para focar no essencial. <br className="hidden md:block"/>
            Linhas limpas, materiais nobres e uma acústica perfeita.
          </p>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3 px-8 py-3 bg-slate-900 text-white rounded-sm hover:bg-black transition-all shadow-xl shadow-slate-200">
                <span className="font-bold tracking-wide text-sm uppercase">Conheça o Interior</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </div>
            <span className="text-[10px] text-slate-400 tracking-widest uppercase group-hover:text-slate-600 transition-colors">
                Agende uma visita
            </span>
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}