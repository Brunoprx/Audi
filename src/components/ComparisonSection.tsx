'use client';

import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#050505] overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <SectionDivider theme="dark" />

        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tighter uppercase"
          >
            Não dirija apenas. <br />
            <span className="text-gray-500">Sinta.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="h-full bg-zinc-900/30 border border-white/5 rounded-sm p-8 md:p-10 backdrop-blur-sm grayscale opacity-60 hover:opacity-80 transition-opacity">
              
              <div className="mb-8 border-b border-white/5 pb-6">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Expectativa</h3>
                <p className="text-2xl font-bold text-gray-400 mt-2">Veículo Premium</p>
              </div>

              <div className="flex flex-col gap-8">
                <SpecItem label="Propósito" value="Meio de Transporte" bad />
                <SpecItem label="Design" value="Funcional" bad />
                <SpecItem label="Tecnologia" value="Padrão de Mercado" bad />
                <SpecItem label="Valor" value="Depreciação Comum" bad />
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-sm opacity-30 group-hover:opacity-100 blur-sm transition duration-1000" />
            
            <div className="relative h-full bg-[#080808] border border-white/10 rounded-sm p-8 md:p-12 overflow-hidden">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                <div>
                    <h3 className="text-xs font-mono text-white uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"/>
                        Audi Experience
                    </h3>
                    <p className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tighter">Vorsprung durch Technik</p>
                </div>
                <div className="px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md">
                    <span className="text-white font-bold text-sm tracking-widest">GERMANY</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                 <AudiSpec label="Sensação" value="Emoção Pura" sub="Conexão total carro-motorista" />
                 <AudiSpec label="Acabamento" value="Artesanal" sub="Materiais nobres e precisão milimétrica" />
                 <AudiSpec label="Iluminação" value="Matrix LED Digital" sub="Segurança que desenha o caminho" />
                 <AudiSpec label="Engenharia" value="Lendária" sub="Quattro® e Performance RS" />
              </div>

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

const SpecItem = ({ label, value, bad }: { label: string, value: string, bad?: boolean }) => (
    <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">{label}</span>
        <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-500">{value}</span>
        </div>

        <div className="w-full h-[2px] bg-zinc-900 mt-2 overflow-hidden">
            <div className="h-full bg-zinc-700 w-[40%]" />
        </div>
    </div>
);

const AudiSpec = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="flex flex-col gap-1 group">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{value}</span>
        <span className="text-sm text-gray-400 font-light">{sub}</span>
        
        <div className="w-full h-[2px] bg-zinc-800 mt-3 overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-white shadow-[0_0_10px_white]" 
            />
        </div>
    </div>
);