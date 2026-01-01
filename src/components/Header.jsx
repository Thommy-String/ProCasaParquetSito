import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Phone,
  Calculator,
  ShieldCheck,
  Ruler,
  FileText,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import { servicesData } from '../utils/servicesData';
import logoImage from '../assets/logo/favicon.png';

const toolsItems = [
  {
    label: 'Scanner Preventivi',
    sub: 'Anti-Fregatura',
    icon: ShieldCheck,
    href: '/#scanner-preventivi', // <--- CAMBIATO QUI
    color: 'text-rose-500',
    bgColor: 'bg-rose-50'
  },
  {
    label: 'Calcolatore MQ',
    sub: 'Quanto serve davvero?',
    icon: Calculator,
    href: '/#calcolatore-mq', // <--- CAMBIATO QUI
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Check Sottofondo',
    sub: 'Evita disastri futuri',
    icon: Ruler,
    href: '/#check-sottofondo', // <--- CAMBIATO QUI
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
];

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Stati per i dropdown desktop
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'tools' | null

  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Gestione Scroll (Nascondi header quando scendi, mostra quando sali)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || 0;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastScroll = lastScrollYRef.current;
          if (currentScroll <= 0) {
            setIsHidden(false);
          } else if (currentScroll > lastScroll && currentScroll > 80) {
            setIsHidden(true);
            setIsMenuOpen(false); // Chiudi mobile menu se scrolli
            setActiveDropdown(null); // Chiudi dropdown se scrolli
          } else if (currentScroll < lastScroll) {
            setIsHidden(false);
          }
          lastScrollYRef.current = currentScroll;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = useMemo(() => {
    return Object.values(servicesData)
      .filter((service) => service.slug && service.navLabel)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((service) => ({ slug: service.slug, label: service.navLabel }));
  }, []);

  // Helper per gestire l'hover dei dropdown (con ritardo per UX migliore)
  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8 h-20">

        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-2 z-50" aria-label={COMPANY_NAME}>
          <img
            src={logoImage}
            alt={COMPANY_NAME}
            className="h-9 w-auto sm:h-10"
            loading="lazy"
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">

          {/* 1. DROPDOWN SERVIZI */}
          <div
            className="relative group px-3 py-2"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 transition-colors group-hover:text-blue-600">
              Servizi
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            <div className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 p-2 overflow-hidden">
                <ul className="flex flex-col">
                  {serviceLinks.map(({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        to={`/servizi/${slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2. DROPDOWN STRUMENTI UTILI (Nuovo!) */}
          <div
            className="relative group px-3 py-2"
            onMouseEnter={() => handleMouseEnter('tools')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 transition-colors group-hover:text-blue-600">
              Strumenti & Guide
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel (più ricco con icone) */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 transition-all duration-200 ${activeDropdown === 'tools' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 p-3 overflow-hidden">
                <div className="flex flex-col gap-1">
                  {toolsItems.map((tool) => (
                    // Usiamo 'a' con href invece di Link to, così il browser gestisce lo scroll nativo all'ancora
                    <a
                      key={tool.label}
                      href={tool.href}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      onClick={() => {
                        setIsMenuOpen(false); // Chiude menu mobile se aperto
                        setActiveDropdown(null); // Chiude dropdown desktop
                      }}
                    >
                      <div className={`p-2 rounded-lg ${tool.bgColor} ${tool.color} group-hover/item:scale-110 transition-transform`}>
                        <tool.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{tool.label}</p>
                        <p className="text-xs text-gray-500 font-medium">{tool.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. LISTINO PREZZI (Trasparenza) */}
          <a
            href="#pricing"
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600"
          >
            Listino Prezzi
          </a>
        </div>

        {/* --- DESKTOP CTA (Right Side) --- */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Link Telefono Semplice */}
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
            <Phone size={16} />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* Bottone "Preventivo" (CTA Principale) */}
          <a
            href="/#preventivatore"
            className="
                group flex items-center gap-2
                bg-blue-600 hover:bg-blue-700 
                text-white px-6 py-2.5 rounded-full 
                shadow-lg shadow-blue-600/20 
                text-sm font-bold transition-all hover:-translate-y-0.5
            "
          >
            <Sparkles size={16} className="text-blue-200 group-hover:text-white transition-colors" />
            Preventivo Online
          </a>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible top-[80px]' : 'opacity-0 invisible top-[60px]'
          }`}
        style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}
      >
        <div className="container mx-auto px-5 py-6 flex flex-col gap-6">

          {/* CTA Mobile Principale */}
          <a
            href="/#preventivatore"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-blue-600 text-white p-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-blue-600/20"
          >
            <Sparkles size={20} />
            Fai Preventivo Online
          </a>

          {/* Sezione Strumenti (Mobile) */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Strumenti Utili</p>
            <div className="grid grid-cols-1 gap-2">
              {toolsItems.map((tool) => (
                <a
                  key={tool.label}
                  to={tool.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/50"
                >
                  <div className={`p-2 rounded-lg ${tool.bgColor} ${tool.color}`}>
                    <tool.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{tool.label}</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">{tool.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sezione Navigazione Classica */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Menu</p>
            <div className="flex flex-col divide-y divide-gray-100 border-t border-b border-gray-100">
              <Link to="/listino" onClick={() => setIsMenuOpen(false)} className="py-4 text-base font-medium text-gray-800 flex items-center gap-3">
                <FileText size={18} className="text-gray-400" />
                Listino Prezzi
              </Link>
              {serviceLinks.map(({ slug, label }) => (
                <Link
                  key={slug}
                  to={`/servizi/${slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-4 text-base font-medium text-gray-800 ml-2 border-l-2 border-transparent hover:border-blue-500 pl-4 transition-all"
                >
                  {label}
                </Link>
              ))}
              <a href="#contatti" onClick={() => setIsMenuOpen(false)} className="py-4 text-base font-medium text-gray-800">
                Contatti
              </a>
            </div>
          </div>

          {/* Footer Mobile */}
          <div className="mt-auto pt-6 border-t border-gray-100 text-center">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 text-gray-500 font-medium bg-gray-100 px-6 py-3 rounded-full w-full">
              <Phone size={18} />
              Chiama {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;