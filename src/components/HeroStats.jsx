import React from 'react';
import rovereNaturale from '../assets/images/parquet/rovereNaturale.png';
import rovereMielato from '../assets/images/parquet/rovereMielato.png';
import rovereSpinaItaliana from '../assets/images/parquet/rovereNaturaleSpinaItaliana.png';
import rovere90 from '../assets/images/parquet/rovereNaturale90.png';
import rovereIta from '../assets/images/parquet/rovereIta.png';
import rovereSpina90 from '../assets/images/parquet/rovereSpina90.png';

const parquetImages = [
  { src: rovereNaturale, alt: 'Parquet Rovere Naturale' },
  { src: rovereMielato, alt: 'Parquet Noce Scuro' },
  { src: rovereSpinaItaliana, alt: 'Parquet Rovere Sbiancato' },
  { src: rovere90, alt: 'Parquet Spina Italiana' },
  { src: rovereIta, alt: 'Parquet Rovere' },
  { src: rovereSpina90, alt: 'Parquet Spina' },
];

function HeroStats() {
  return (
    <div className="flex justify-center w-full py-6">
      
      {/* CARD UNICA "GLASS" - Sembra un widget sospeso */}
      <div className="
        inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 
        bg-white/80 backdrop-blur-md border border-gray-100 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        rounded-3xl py-4 px-8 md:px-10
        transition-transform hover:scale-[1.02] duration-500
      ">

        {/* LATO SINISTRO: La "Community" visiva */}
        <div className="flex flex-col items-center sm:items-end gap-1">
          {/* I Parquet (Face-pile) */}
          <div className="flex -space-x-4 pl-2">
            {parquetImages.slice(0, 5).map((img, index) => (
              <div key={index} className="relative z-0 hover:z-10 transition-all duration-300 hover:-translate-y-2">
                 <img
                  className="
                    h-10 w-10 md:h-12 md:w-12 
                    rounded-full border-[3px] border-white 
                    object-cover shadow-sm 
                  "
                  src={img.src}
                  alt={img.alt}
                />
              </div>
            ))}
            <div className="
              flex h-10 w-10 md:h-12 md:w-12 items-center justify-center 
              rounded-full border-[3px] border-white bg-gray-900 
              text-xs font-bold text-white shadow-sm z-10
            ">
              +150
            </div>
          </div>
          <span className="text-xs font-medium text-gray-400 mt-1 mr-2">156 Progetti realizzati</span>
        </div>

        {/* DIVISORE (Punto centrale) */}
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-200"></div>

        {/* LATO DESTRO: Il Dato puro */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-baseline">
             <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
                5926
             </span>
             <span className="text-lg md:text-xl font-medium text-gray-400 ml-1">m²</span>
          </div>
          <span className="text-xs font-medium text-gray-400">Posati nel 2025</span>
        </div>

      </div>
    </div>
  );
}

export default HeroStats;