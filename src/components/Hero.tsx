'use client';

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Hero() {
  return (
    
    <section className="sticky top-0 w-full h-screen bg-[#0a0a0a] z-0 overflow-hidden">
      
      {/* Container Relativo para o conteúdo */}
      <div className="relative w-full h-full">
        
        {/* 1. BACKGROUND DE VÍDEO */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/audi-hero.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0" />
        </div>
        
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 h-full px-6 md:px-12 pt-20">
          
          <div className="col-span-1 md:col-span-8 flex flex-col justify-center h-full">
            <div className="flex flex-col relative -left-1"> 
              <TextReveal>
                <h1 className="text-[clamp(5rem,14vw,12rem)] font-bold tracking-tighter leading-[0.8] mb-2 uppercase text-white drop-shadow-lg">
                  Audi
                </h1>
              </TextReveal>
              
              <TextReveal delay={0.15}>
                <h1 className="text-[clamp(5rem,14vw,12rem)] font-bold tracking-tighter leading-[0.8] text-gray-400 uppercase drop-shadow-lg">
                  Brasil
                </h1>
              </TextReveal>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="mt-8 ml-2"
              >
                 <p className="text-lg md:text-xl text-white font-semibold tracking-[0.25em] uppercase pl-4 border-l-[3px] border-red-600">
                   A evolução da espécie.
                 </p>
              </motion.div>

            </div>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col justify-center gap-8 mt-10 md:mt-0 relative">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5"
            >
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"/>
                O futuro é elétrico.
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed font-light">
                Performance progressiva, design sofisticado e tecnologia de ponta. Conheça a nova geração de veículos 100% elétricos.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pl-6"
            >
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Configure o seu ↗
              </button>
              <button className="px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-md transition-colors">
                Agendar Test-drive
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row items-end justify-between border-t border-white/10 pt-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs md:text-sm text-gray-400 mb-4 md:mb-0 tracking-[0.2em] uppercase font-medium"
            >
              Vorsprung durch Technik
            </motion.div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { staggerChildren: 0.2, delayChildren: 1.2 }
                }
              }}
              className="flex items-center gap-4 md:gap-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <span className="hidden md:block text-[10px] text-gray-500 uppercase tracking-widest font-bold border-r border-white/10 pr-6">
                Technology Partners
              </span>

              <PartnerLogo delay={0}>
                 <svg viewBox="0 0 100 20" className="h-4 w-auto fill-current">
                    <path d="M12.6,15.8c0-3.3,0-6.7,0-10c2.4,0,4.2,0.4,5.3,1.3c1.1,0.9,1.7,2.2,1.7,4c0,1.2-0.3,2.2-0.8,3c-0.6,0.8-1.4,1.4-2.4,1.6 c1.1,0.2,2,0.8,2.7,1.6c0.7,0.8,1,1.9,1,3.2c0,1.7-0.5,3-1.6,4c-1.1,1-2.9,1.5-5.2,1.5c-0.3,0-0.6,0-0.8,0V15.8z M15.6,13.7h1.4 c1.2,0,2.1-0.2,2.7-0.7c0.5-0.5,0.8-1.2,0.8-2.1c0-0.9-0.3-1.6-0.8-2c-0.6-0.5-1.4-0.7-2.6-0.7H15.6V13.7z M15.6,23.5h1.7 c1.3,0,2.3-0.3,2.9-0.8c0.6-0.5,0.9-1.3,0.9-2.2c0-1-0.3-1.8-1-2.3c-0.6-0.5-1.6-0.8-2.9-0.8h-1.6V23.5z"/>
                    <path d="M35.4,5.8c3.2,0,5.7,1,7.5,3c1.8,2,2.7,4.7,2.7,8.2c0,3.4-0.9,6.1-2.7,8.1c-1.8,2-4.3,3-7.5,3c-3.1,0-5.7-1-7.5-3 c-1.8-2-2.7-4.7-2.7-8.1c0-3.4,0.9-6.2,2.7-8.2C29.7,6.8,32.2,5.8,35.4,5.8z M35.4,25.6c2.2,0,3.9-0.7,5-2.2c1.1-1.5,1.7-3.6,1.7-6.4 c0-2.8-0.6-4.9-1.7-6.4c-1.1-1.5-2.8-2.2-5-2.2c-2.2,0-3.9,0.7-5,2.2c-1.1,1.5-1.7,3.6-1.7,6.4c0,2.8,0.6,4.9,1.7,6.4 C31.5,24.9,33.2,25.6,35.4,25.6z"/>
                 </svg>
              </PartnerLogo>
              <PartnerLogo delay={0.1}>
                 <svg viewBox="0 0 100 20" className="h-4 w-auto fill-current">
                    <path d="M10,0L0,20h4l2.5-5h7L16,10h-5l2-4h4l1-2H10z"/>
                    <text x="25" y="16" fontFamily="Arial" fontWeight="bold" fontSize="16" letterSpacing="2">IONITY</text>
                 </svg>
              </PartnerLogo>
              <PartnerLogo delay={0.2}>
                 <svg viewBox="0 0 120 30" className="h-3 md:h-4 w-auto fill-current">
                    <path d="M0,0h40v5H10v20H5V5H0V0z M45,0h5v25h-5V0z M60,0h15c2,0,4,1,4,4s-2,4-4,4h-10v5h10v5h-10v7h-5V0z"/>
                    <rect x="85" y="0" width="5" height="25"/>
                    <rect x="95" y="0" width="5" height="25"/>
                    <rect x="105" y="0" width="5" height="25"/>
                 </svg>
              </PartnerLogo>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

const PartnerLogo = ({ children, delay }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.1, color: "#ffffff" }}
    className="text-gray-500 cursor-pointer transition-colors duration-300 hover:text-white"
  >
    {children}
  </motion.div>
);