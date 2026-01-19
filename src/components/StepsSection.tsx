'use client';

import { motion } from 'framer-motion';

const StepIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 border border-white/5">
    {icon}
  </div>
);

export default function StepsSection() {
  return (
    <section className="relative w-full bg-black pb-32 pt-10 px-6">
      
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="w-full md:w-5/12">
          <div className="sticky top-40">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8 leading-[1.1]"
            >
              Sua jornada <br />
              começa aqui.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105 border border-transparent hover:border-white/20">
                <span>Iniciar configuração</span>
                
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-45 transition-transform duration-300">
                     <path d="M7 17L17 7M17 7H7M17 7V17" />
                   </svg>
                </div>
              </button>
              
              <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Concessionárias abertas agora.
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col gap-8 md:gap-24">
          
          <StepCard number="01" title="Personalize seu Audi" desc="Escolha o modelo, a cor e os acabamentos. Crie um veículo tão único quanto você.">
             <div className="w-full p-6 bg-black/40 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-4">
                   <p className="text-xs text-gray-400 uppercase tracking-widest">RS e-tron GT</p>
                   <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-600 border border-white/20 cursor-pointer"></div>
                      <div className="w-4 h-4 rounded-full bg-red-700 border border-white/20 cursor-pointer ring-2 ring-white ring-offset-2 ring-offset-black"></div>
                      <div className="w-4 h-4 rounded-full bg-black border border-white/20 cursor-pointer"></div>
                   </div>
                </div>
                <div className="w-full h-40 bg-zinc-900 rounded-lg relative overflow-hidden flex items-center justify-center">
                   <img 
                      src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500" 
                      alt="Audi Config" 
                      className="w-full h-full object-cover opacity-80"
                   />
                   <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">
                      Vermelho Tango Metálico
                   </div>
                </div>
             </div>
          </StepCard>

          <StepCard number="02" title="Sinta a performance" desc="Agende uma visita exclusiva. Nossos especialistas apresentarão cada detalhe tecnológico.">
             <div className="w-full p-6 bg-black/40 rounded-xl border border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-zinc-900 p-3 rounded-lg border border-white/5">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                   </div>
                   <div>
                      <p className="text-white text-sm font-bold">Quarta-feira, 24 Ago</p>
                      <p className="text-gray-500 text-xs">14:00 - Audi Center Jardins</p>
                   </div>
                   <div className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20">
                      Confirmado
                   </div>
                </div>
                <p className="text-xs text-gray-500 text-center">
                   *Trazer CNH válida para a experiência.
                </p>
             </div>
          </StepCard>

          <StepCard number="03" title="Entrega técnica" desc="O momento é seu. Receba as chaves e uma aula completa sobre os recursos do seu novo Audi.">
             <div className="w-full p-6 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=500')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                   </div>
                   <p className="text-lg font-bold text-white tracking-widest uppercase">Bem-vindo</p>
                   <p className="text-xs text-gray-300">à família Audi</p>
                </div>
             </div>
          </StepCard>

        </div>
      </div>
    </section>
  );
}

const StepCard = ({ number, title, desc, children }: { number: string, title: string, desc: string, children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="group relative p-8 rounded-sm border-l-2 border-white/10 bg-[#0F0F0F] hover:bg-[#141414] hover:border-red-600 transition-all"
    >
      <div className="absolute top-8 right-8 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
        {number}
      </div>
      <div className="mb-8">

         <div className="w-12 h-1 bg-white/20 mb-6 group-hover:bg-red-600 transition-colors"></div>
         
         <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{title}</h3>
         <p className="text-gray-400 leading-relaxed max-w-sm">{desc}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/5">
         {children}
      </div>
    </motion.div>
  );
};