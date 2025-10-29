import { Check, PaintBucket, Gavel } from 'lucide-react';
import rovereNaturale from '../assets/images/parquet/rovereNaturale.png';
import rovereMielato from '../assets/images/parquet/rovereMielato.png';
import rovereSpinaItaliana from '../assets/images/parquet/rovereNaturaleSpinaItaliana.png';
import rovere90 from '../assets/images/parquet/rovereNaturale90.png';
import rovereIta from '../assets/images/parquet/rovereIta.png';
import rovereSpina90 from '../assets/images/parquet/rovereSpina90.png';

const parquetImages = [
  { src: rovereNaturale, alt: 'Parquet in Rovere Naturale' },
  { src: rovereMielato, alt: 'Parquet in Noce Scuro' },
  { src: rovereSpinaItaliana, alt: 'Parquet in Rovere Sbiancato' },
  { src: rovere90, alt: 'Parquet a spina italiana' },
  { src: rovereIta, alt: 'Parquet a spina italiana' },
  { src: rovereSpina90, alt: 'Parquet a spina italiana' },
];

const statTextClass = 'text-base font-medium text-gray-600';
const statNumberClass = 'text-xl font-extrabold text-gray-900 md:text-3xl';
const iconClass = 'h-4 w-4 text-gray-500 md:h-5 md:w-5';

function HeroStats() {
  return (
    <div className="my-8 flex flex-col items-center gap-5 text-center md:items-start md:text-left">
      <div className="flex w-full flex-wrap items-center justify-center gap-3 md:justify-start">
        <Check className={iconClass} />
        <span className={statNumberClass}>159+</span>
        <span className={statTextClass}>lavori svolti</span>
        <div className="flex justify-center -space-x-3 md:justify-start">
          {parquetImages.map((img, index) => (
            <img
              key={index}
              className="inline-block h-7 w-7 rounded-full border-2 border-white object-cover shadow-md md:h-9 md:w-9"
              src={img.src}
              alt={img.alt}
              title={img.alt}
            />
          ))}
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[10px] font-medium text-gray-600 shadow-md hover:bg-gray-200 md:h-9 md:w-9 md:text-xs"
            title="Tanti altri tipi di legno disponibili"
          >
            +
          </div>
        </div>
      </div>


      <div className="flex w-full flex-wrap items-center justify-center gap-3 md:justify-start">
        <Gavel className={iconClass} />
        <span className={statNumberClass}>5908</span>
        <span className={statTextClass}>m² posati nel 2025</span>
      </div>
    </div>
  );
}

export default HeroStats;
