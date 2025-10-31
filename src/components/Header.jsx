import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import logoImage from '../assets/logo/Pro-CasaParquet logo.png';

const navItems = [
  { href: '#pricing', label: 'Prezzi' },
  { href: '#contatti', label: 'Contatti' },
];

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

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
            setIsMenuOpen(false);
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

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-4"
          aria-label={COMPANY_NAME}
        >
          <img
            src={logoImage}
            alt={COMPANY_NAME}
            className="h-8 w-auto sm:h-10 md:h-10"
            loading="lazy"
          />
          
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="rounded-full border border-blue-100 bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Chiama ora
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-700 transition hover:border-blue-200 hover:text-blue-600 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Apri menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-5 pb-6">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-blue-100/40 ring-1 ring-blue-50">
              <div className="bg-gradient-to-r from-blue-50/80 to-transparent px-5 py-4">
                <span className="text-xs uppercase tracking-[0.3em] text-blue-500">
                  Naviga
                </span>
              </div>
              <div className="flex flex-col gap-4 px-5 pb-5 pt-4">
                {navItems.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl border border-transparent bg-gray-50/80 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-600"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-blue-100 bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-700"
                >
                  Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
