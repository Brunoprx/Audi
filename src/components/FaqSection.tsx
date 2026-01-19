'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './SectionDivider';

const faqs = [
  {
    question: "Como funciona o Audi Signature?",
    answer: "O Audi Signature é o nosso serviço exclusivo de carro por assinatura. Você escolhe o modelo (Blindado ou não), define o plano (12, 24 ou 36 meses) e paga uma mensalidade fixa que já inclui seguro, IPVA, manutenção e documentação."
  },
  {
    question: "Quais são as opções de financiamento?",
    answer: "Com o Audi Financial Services, oferecemos planos flexíveis como o Audi Pass, que garante a recompra do seu veículo ao final do contrato, facilitando a troca por um Audi 0km a cada 2 ou 3 anos com parcelas reduzidas."
  },
  {
    question: "Como agendar uma revisão programada?",
    answer: "Você pode agendar serviços diretamente pelo aplicativo myAudi ou pelo site. Nossas revisões seguem um padrão global de excelência, com peças originais e técnicos certificados pela fábrica na Alemanha."
  },
  {
    question: "O que é o Audi Connect?",
    answer: "É a suíte de conectividade inteligente do seu veículo. Ela integra navegação com Google Earth™, controle remoto pelo smartphone (trancar/destrancar), Wi-Fi a bordo e assistência de emergência 24h."
  },
  {
    question: "Qual é a garantia dos veículos?",
    answer: "Todos os modelos Audi 0km possuem garantia total de 2 anos sem limite de quilometragem. Para a linha elétrica (e-tron), a bateria de alta tensão conta com garantia estendida de 8 anos ou 160.000 km."
  },
  {
    question: "Posso personalizar meu Audi antes da compra?",
    answer: "Sim. Através do programa Audi Exclusive, você pode personalizar cores da carroceria, tipos de couro, costuras e acabamentos internos, tornando seu veículo uma peça única no mundo."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <SectionDivider theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mt-20">
          
          <div className="lg:col-span-5">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="sticky top-32"
             >
                <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
                  Suporte
                </h2>
                
                <h3 className="text-xl text-white font-medium mb-4">
                  Excelência em cada detalhe.
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                  Seja sobre manutenção, serviços financeiros ou tecnologia, estamos aqui para garantir a melhor experiência.
                </p>

                <button className="group px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all flex items-center gap-2">
                  Falar com um consultor
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
             </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {faq.question}
        </span>
        
        <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-500'}`}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M6 9l6 6 6-6"/>
           </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};