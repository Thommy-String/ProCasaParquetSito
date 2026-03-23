import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Calculator, Ruler, Phone, X, Menu, Sparkles, ChevronRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import { serviceNavLinks } from '../utils/serviceNavLinks';
import logoImage from '../assets/logo/favicon.png';

// --- DATI ---
const toolsItems = [
  { label: 'Scanner Preventivi', sub: 'Anti-Fregatura', icon: ShieldCheck, href: '/#scanner-preventivi', color: 'text-rose-500', bgColor: 'bg-rose-50' },
  { label: 'Calcolatore MQ', sub: 'Quanto serve?', icon: Calculator, href: '/#calcolatore-mq', color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { label: 'Check Sottofondo', sub: 'Evita disastri', icon: Ruler, href: '/#check-sottofondo', color: 'text-amber-500', bgColor: 'bg-amber-50' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Modifica: Header sempre visibile al caricamento (sia mobile che desktop).
  // Lo scroll handler lo nasconderà quando l'utente scrolla giù.
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // 1. Chiudi il menu quando cambia la rotta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // 2. Gestione Scroll (Nascondi scendendo, Mostra salendo)
  // Usa useRef + confronto per evitare re-render inutili su ogni pixel di scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;

        // Se il menu è aperto, l'header DEVE restare visibile
        if (isMenuOpen) {
          setIsVisible(true);
          lastScrollY.current = window.scrollY;
          return;
        }

        const currentScrollY = window.scrollY;
        const isMobile = window.innerWidth < 768;
        let newVisible = isVisible;

        if (!isMobile) {
          if (currentScrollY < 10) {
            newVisible = true;
          } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            newVisible = false;
          } else if (currentScrollY < lastScrollY.current) {
            newVisible = true;
          }
        } else {
          // Mobile: mostra sempre in cima, nascondi scrollando giù, mostra scrollando su
          if (currentScrollY < 10) {
            newVisible = true;
          } else if (currentScrollY > lastScrollY.current) {
            newVisible = false;
          } else if (currentScrollY < lastScrollY.current) {
            newVisible = true;
          }
        }

        lastScrollY.current = currentScrollY;

        // Aggiorna stato solo se cambia davvero (evita re-render inutili)
        if (newVisible !== isVisible) {
          setIsVisible(newVisible);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, isVisible]);

  // 3. Blocca lo scroll del sito quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMenuOpen]);

  const serviceLinks = useMemo(() => {
    return serviceNavLinks
      .filter((s) => s.slug && s.navLabel)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, []);

  return (
    <>
      <style>
        {`
          :root {
            --header-height-mobile: 4.5rem; /* Increased from 3.5rem */
            --header-height-desktop: 5rem; /* Increased from 4rem */
          }
          
          /* Spazio per l'header solo su desktop o quando visibile secondo logica */
          body {
            padding-top: var(--header-height-desktop);
          }

          @media (max-width: 767px) {
            /* Su mobile, rimuoviamo il padding-top del body per recuperare spazio */
            /* L'header è fixed, ma inizialmente nascosto e compare sopra il contenuto */
            body {
               padding-top: 0 !important;
            }
          }
        `}
      </style>

      {/* --- HEADER BAR (FISSO MA A SCOMPARSA) --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: 'var(--header-height, 4rem)' }} 
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
          
          {/* 1. LOGO & BRANDING */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 z-[61]">
            <img src={logoImage} alt={COMPANY_NAME} className="h-9 md:h-11 w-auto" />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-tight leading-none text-gray-900">
                PosaParquetMilano.it 
              </span>
              <span className="text-[10px] font-medium uppercase tracking-tighter text-gray-500 leading-tight">
                Parquettisti spc - parquet  - laminati
              </span>
            </div>
          </Link>

          {/* 2. LATO DESTRO (CTA + HAMBURGER) */}
          <div className="flex items-center gap-3 md:gap-5">
            
            {/* CTA VISIBILE SU DESKTOP */}
            <div className="hidden sm:flex items-center gap-4">
               <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black transition-colors">
                <Phone size={16} /> 
                <span className="hidden lg:inline">{PHONE_NUMBER}</span>
              </a>
              <Link to="/#preventivatore" className="bg-[#1a1a1a] hover:bg-black text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest transition-transform active:scale-95">
                Preventivo
              </Link>
            </div>

            {/* HAMBURGER BUTTON (SEMPRE VISIBILE) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors z-[61] active:scale-90"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </header>

      {/* --- MENU A TUTTO SCHERMO (OVERLAY) --- */}
      <div 
        className={`fixed inset-0 bg-white z-[50] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
        // Padding top adattato alla nuova altezza più sottile
        style={{ paddingTop: '70px' }} 
      >
        {/* Contenitore scrollabile */}
        <div className="h-full overflow-y-auto px-6 pb-20">
          <div className="container mx-auto max-w-2xl flex flex-col gap-6 py-4">

            {/* CTA Mobile (Visibile solo se lo schermo è piccolo) */}
            <div className="sm:hidden w-full">
                <Link to="/#preventivatore" className="w-full bg-blue-600 text-white p-3.5 rounded-xl flex justify-center items-center gap-2 font-bold shadow-lg shadow-blue-600/20 mb-4 text-sm">
                    <Sparkles size={18} /> Fai Preventivo
                </Link>
            </div>

            {/* Sezione STRUMENTI */}
            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">
                Strumenti
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {toolsItems.map((t) => (
                  <Link key={t.label} to={t.href} className="flex sm:flex-col items-center sm:items-start gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
                     <div className={`p-2 rounded-lg ${t.bgColor} ${t.color}`}><t.icon size={20} /></div>
                     <div>
                       <div className="font-bold text-gray-900 text-sm leading-tight">{t.label}</div>
                       <div className="text-[10px] text-gray-500 mt-1">{t.sub}</div>
                     </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sezione NAVIGAZIONE */}
            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 pb-2">
                Menu
              </h3>
              <div className="flex flex-col">
                <Link to="/#pricing" className="py-3.5 text-lg font-bold text-gray-900 border-b border-gray-50 hover:text-blue-600 flex justify-between items-center group">
                  Listino Prezzi
                  <ChevronRight className="text-gray-300 group-hover:text-blue-600" size={18}/>
                </Link>
                
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`/servizi/${s.slug}`} className="py-3.5 text-lg font-bold text-gray-900 border-b border-gray-50 hover:text-blue-600 flex justify-between items-center group">
                    {s.navLabel}
                    <ChevronRight className="text-gray-300 group-hover:text-blue-600" size={18}/>
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTATTI FOOTER DEL MENU */}
            <div className="mt-6 pt-6 border-t border-gray-100">
                <a href={`tel:${PHONE_NUMBER}`} className="flex justify-center items-center gap-3 w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors text-sm">
                <Phone size={18} /> Chiama {PHONE_NUMBER}
                </a>
            </div>

          </div>
        </div>
      </div>

      {/* --- SPACER (EVITA CHE IL CONTENUTO FINISCA SOTTO L'HEADER) --- */}
      <div className="h-16 md:h-16 w-full"></div>
    </>
  );
}

export default Header;