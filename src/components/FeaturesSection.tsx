'use client';

import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function FeaturesSection() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center pb-32 pt-10 px-6 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-screen" 
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black" />
      </div>

      <div className="relative z-10 w-full">
        <SectionDivider theme="dark" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        <div className="text-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1]"
          >
            Engenharia <br />
            <span className="text-gray-500">sem precedentes.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          
          <div className="flex flex-col gap-8">
            <InfoCard 
              title="Tração quattro" 
              desc="Aderência lendária em qualquer terreno. O sistema distribui força entre os eixos em milissegundos." 
              delay={0.2}
            />
            <InfoCard 
              title="Carregamento 800V" 
              desc="Recarregue de 5% a 80% em menos de 23 minutos. A energia flui tão rápido quanto você." 
              delay={0.3}
            />
          </div>

          <div className="flex justify-center h-[300px] md:h-[400px] items-center my-10 md:my-0">
             <motion.div
               initial={{ rotate: 0 }}
               whileInView={{ rotate: 360 }} // Gira lentamente como uma roda
               transition={{ duration: 20, ease: "linear", repeat: Infinity }}
               className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)] overflow-hidden"
             >
                
                <img 
                  src="https://pngimg.com/d/car_wheel_PNG23312.png" 
                  alt="Audi Wheel"
                  className="w-full h-full object-cover scale-110 opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full" />
             </motion.div>
             
             <div className="absolute w-[200px] h-[20px] bg-black blur-xl bottom-10 z-[-1]" />
          </div>

          <div className="flex flex-col gap-8">
            <InfoCard 
              title="Matrix LED Digital" 
              desc="Iluminação que se adapta à estrada e projeta animações de boas-vindas no asfalto." 
              delay={0.4}
            />
            <InfoCard 
              title="Som Bang & Olufsen" 
              desc="Som 3D imersivo com 16 alto-falantes que transformam a cabine em uma sala de concerto." 
              delay={0.5}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

const InfoCard = ({ title, desc, delay }: { title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 0 }} 
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className="group relative p-6 rounded-sm border-l border-white/20 hover:border-red-600 bg-transparent transition-colors"
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-red-500 transition-colors">
      {title}
    </h3>

    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
      {desc}
    </p>
  </motion.div>
);