'use client';

import { motion } from 'framer-motion';

const moments = [
  {
    id: 1,
    category: "QUATTRO",
    desc: "Domine o terreno",
    // GIF: Audi Headlights / Chuva
    video: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZkanRwdHIweXc2aHZsaXlwYmk2cGpkamd6cWdzNDl1MmUyaHk3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K8b14hZQqk9ahHc948/giphy.gif", 
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>)
  },
  {
    id: 2,
    category: "COCKPIT",
    desc: "Imersão total",
    // GIF: Night Drive / Painel
    video: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzdtNnJha2w1cGljb2Fncm9icjBwM2plYmpia3dlNTg4Y3BlM2dwbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kSA5X6x8GQ8hm7y7SC/giphy.gif",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>)
  },
  {
    id: 3,
    category: "PERFORMANCE",
    desc: "Adrenalina pura",
    // GIF: Velocidade (Mesmo do 2 ou alternativo)
    video: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXp6bHEzN2JmbnhhZmptMzJkYXZzcXMyeHQxbXYyOW14bjBqanBzYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pVzFBLEiCXnEEnYoK2/giphy.gif",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>)
  },
  {
    id: 4,
    category: "LIFESTYLE",
    desc: "Design em movimento",
    // GIF: Luzes Audi
    video: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZwdjJ5anNlbjBrdGp6cDQ1bHVxYmVhYzlnNnFzaTNlZWt3cWYxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KuPiloTGr75Y3y7nTH/giphy.gif",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)
  },
  {
    id: 5,
    category: "E-TRON",
    desc: "Silêncio elétrico",
    // GIF: Painel noturno
    video: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a2t1eXhoYjRvcmI3YWp3ZHZvOWFheWoxMW4wOXZiZWRndG0wN2J6dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zf2rhpiwbHlO1wBPvw/giphy.gif",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 12h-6"/><path d="M17 12l-4-4"/><path d="M17 12l-4 4"/><path d="M3 12h6"/><path d="M9 12l4-4"/><path d="M9 12l4 4"/></svg>)
  },
];

const infiniteMoments = [...moments, ...moments, ...moments, ...moments];

export default function StoriesSection() {
  return (
    <section className="relative w-full bg-[#080808] py-24 overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative z-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tighter max-w-xl leading-[1.05]"
          >
            Cada viagem é <br />
            <span className="text-gray-500">uma história.</span>
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-black transition-all"
          >
            Siga a @audibr
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </div>
          </motion.button>
        </div>
      </div>

      {/* ========================================================
          CARROSSEL INFINITO (COM GIFS)
         ======================================================== */}
      <div className="relative w-full z-10">
        
        {/* MÁSCARAS LATERAIS (Gradiente Suave - Sem Blur) */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#080808] via-[#080808]/90 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-4 md:gap-6 w-max pl-6 md:pl-0"
          animate={{ x: ["0%", "-25%"] }} 
          transition={{ 
            duration: 40,
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {infiniteMoments.map((moment, i) => (
            <MomentCard key={`${moment.id}-${i}`} moment={moment} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

const MomentCard = ({ moment }: { moment: any }) => {
  return (
    <div
      className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-sm overflow-hidden group border border-white/10 hover:border-white/30 transition-colors shrink-0 bg-zinc-900"
    >
      <img 
        src={moment.video}
        alt={moment.category}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-90" />

      <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
         <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] font-mono text-white tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]"/>
                {moment.category}
            </span>
         </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
             {moment.icon}
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-none tracking-tight">{moment.category}</span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">{moment.desc}</span>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white/20 mt-4 rounded-full overflow-hidden">
             <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-[3000ms] ease-linear" />
        </div>
      </div>
    </div>
  );
};