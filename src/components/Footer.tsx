'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 border-t border-white/10 relative z-10">
      
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="flex flex-col gap-8">
              {/* LOGO AUDI (com CSS - 4 Anéis) */}
              <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-[3px] border-white bg-transparent" />
                    <div className="w-8 h-8 rounded-full border-[3px] border-white bg-transparent" />
                    <div className="w-8 h-8 rounded-full border-[3px] border-white bg-transparent" />
                    <div className="w-8 h-8 rounded-full border-[3px] border-white bg-transparent" />
                 </div>
                 <span className="text-xl font-bold text-white tracking-widest uppercase ml-2">
                    Audi Brasil
                 </span>
              </div>
              
              <div className="flex gap-4">
                  <SocialIcon><Instagram /></SocialIcon>
                  <SocialIcon><Youtube /></SocialIcon>
                  <SocialIcon><Linkedin /></SocialIcon>
                  <SocialIcon><Facebook /></SocialIcon>
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 text-sm font-medium text-gray-400">
              <FooterLink>Modelos</FooterLink>
              <FooterLink>Eletromobilidade</FooterLink>
              <FooterLink>Tecnologia</FooterLink>
              <FooterLink>Sustentabilidade</FooterLink>
              <FooterLink>Audi Sport</FooterLink>
              <FooterLink>Carreira</FooterLink>
          </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full py-10 select-none pointer-events-none overflow-hidden">
          <h1 className="text-[25vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 via-zinc-900 to-black opacity-50 translate-y-4">
              AUDI
          </h1>
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6 text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">
            
            <div className="flex gap-6 order-2 md:order-1">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Legal</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>

            <button 
                onClick={scrollToTop} 
                className="flex items-center gap-2 hover:text-white transition-colors group order-1 md:order-2"
            >
                Voltar ao topo
                <div className="p-2 rounded-full border border-white/10 group-hover:border-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-y-0.5 transition-transform">
                      <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </div>
            </button>

            <div className="order-3 text-center md:text-right">
                © 2026 Audi Brasil. Vorsprung durch Technik.
            </div>
        </div>
      </div>

    </footer>
  );
}

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
        {children}
    </a>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="hover:text-white transition-colors block py-1 group flex items-center gap-1">
        <span className="w-0 h-[1px] bg-white group-hover:w-2 transition-all duration-300" />
        {children}
    </a>
);

const Facebook = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Linkedin = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const Youtube = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;