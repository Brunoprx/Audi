'use client';

import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function ProblemSection() {
  return (
    <section className="w-full bg-black pt-10 pb-24 md:py-32 px-6 md:px-12 relative z-10">
        <SectionDivider theme="dark" />
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          
          <div className="flex flex-col relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]"
            >
              Por que escolher entre <br />
              <span className="text-gray-400">potência e o planeta?</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 md:pl-20 relative z-20"
          >
            <h3 className="text-xl md:text-2xl text-gray-200 font-medium border-l-2 border-red-600 pl-6">
              O mito de que carros elétricos são entediantes acabou. A linha e-tron entrega torque instantâneo com zero emissões.
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed pl-6">
              Não é apenas sobre chegar ao destino. <br />
              É sobre sentir cada curva do caminho.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 group"
        >
          <video 
             src="/audi-tech-lights.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
          /> 
          
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black pointer-events-none" />
          
          <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
            <span className="text-[10px] font-mono text-white/90 tracking-widest uppercase">
              Audi Matrix LED Technology
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}