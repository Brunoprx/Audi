'use client';

import { motion } from 'framer-motion';

const cars = [
  {
    id: 1,
    model: "RS e-tron GT",
    tagline: "Performance Pura",
    url: "/Gallery/audi-gallery1.jpg",
  },
  {
    id: 2,
    model: "Q8 e-tron",
    tagline: "O SUV Redefinido",
    url: "/Gallery/audi-gallery2.jpg",
  },
  {
    id: 3,
    model: "e-tron Sportback",
    tagline: "Aerodinâmica Esculpida",
    url: "/Gallery/audi-gallery3.jpg",
  },
  {
    id: 4,
    model: "Interior Design",
    tagline: "Cockpit Virtual",
    url: "/Gallery/audi-gallery4.jpg",
  },
];

export default function HelixGallery() {
  return (

    <section className="relative w-full bg-zinc-950 text-white py-20 md:py-40">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-24">
        
        <div className="w-full md:w-4/12 relative md:sticky md:top-40 mb-12 md:mb-0 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
              A coleção <br />
              <span className="text-gray-600">e-tron.</span>
            </h2>
            
            <div className="w-20 h-1 bg-red-600 mb-10" />
            
            <p className="text-xl text-gray-400 max-w-sm leading-relaxed font-light">
              Design que não pede licença. Tecnologia que define o futuro. Conheça as obras de arte em movimento da Audi.
            </p>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"/>
              Explore os modelos
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-8/12 flex flex-col gap-16 md:gap-32 z-10">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative w-full h-[50vh] md:h-[85vh] bg-zinc-900 overflow-hidden cursor-pointer rounded-sm"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                style={{ backgroundImage: `url(${car.url})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-8 left-6 md:bottom-16 md:left-16 z-10">
                <p className="text-red-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
                   {car.tagline}
                </p>
                <h3 className="text-3xl md:text-7xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl">
                  {car.model}
                </h3>
                
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 mt-4 opacity-0 group-hover:opacity-100 hidden md:block">
                    <span className="inline-flex items-center gap-2 text-white border-b border-white pb-1 text-sm uppercase tracking-wide">
                        Configurar este modelo ↗
                    </span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-sm group cursor-pointer border border-white/10">
            
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105 grayscale"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1800&auto=format&fit=crop')" }} 
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.95)_100%)]" />
            
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6 md:p-10">
              
              <h3 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tighter drop-shadow-xl">
                Sua garagem <br/> 
                <span className="text-gray-400 group-hover:text-white transition-colors duration-500">
                  merece um ícone.
                </span>
              </h3>

              <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Test-drive
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}