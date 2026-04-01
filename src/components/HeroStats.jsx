import React from 'react';
import rovereNaturale from '../assets/images/parquet/rovereNaturale.webp';
import rovereMielato from '../assets/images/parquet/rovereMielato.webp';
import rovereSpinaItaliana from '../assets/images/parquet/rovereNaturaleSpinaItaliana.webp';
import rovere90 from '../assets/images/parquet/rovereNaturale90.webp';
import rovereIta from '../assets/images/parquet/rovereIta.webp';
import rovereSpina90 from '../assets/images/parquet/rovereSpina90.webp';

const parquetImages = [
  { src: rovereNaturale, alt: 'Rovere naturale' },
  { src: rovereMielato, alt: 'Rovere mielato' },
  { src: rovereSpinaItaliana, alt: 'Rovere spina italiana' },
  { src: rovere90, alt: 'Rovere 90°' },
  { src: rovereIta, alt: 'Rovere italiana' },
  { src: rovereSpina90, alt: 'Rovere spina 90°' },
];

function HeroStats() {
  return (
    <div className="flex items-center gap-4 pt-3">
      
      {/* Face-pile parquet */}
      <div className="flex -space-x-2.5">
        {parquetImages.slice(0, 5).map((img, index) => (
          <div key={index} className="relative transition-transform hover:-translate-y-1 duration-300">
            <img
              className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[9px] font-black text-white shadow-sm z-10">
          +300
        </div>
      </div>

      {/* Stat badge — stile Stencil Pastel */}
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-[11px] font-[900] uppercase tracking-tighter text-slate-900">
          284+ parquet posati <span className="bg-yellow-50 text-yellow-800 px-1 py-0.5 border border-yellow-100 rounded-sm text-[10px] inline-block transform -rotate-1">ogni anno</span>
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Lombardia &amp; Milano</span>
      </div>
    </div>
  );
}

export default HeroStats;