import { MAIN_CATEGORY, PRIMARY_CITY, PHONE_NUMBER, COMPANY_NAME } from '../utils/constants';
import rovereMielato from '../assets/images/parquet/rovereMielato.png';
import HeroStats from './HeroStats';

function Hero() {
    return (
        // Usa un layout grid per un design moderno e asimmetrico
        <section className="bg-white py-6 md:py-24">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Contenuto Testuale (colonna sinistra) */}
                <div className="text-center md:text-left">

                    {/* Valutazione con badge gradient */}
                    <div className="flex justify-center md:justify-start mb-4">
                        <div className="inline-flex rounded-full bg-gradient-to-r from-blue-400/60 via-pink-400/60 to-cyan-400/60 p-[1px] shadow-[0_2px_10px_rgba(14,165,233,0.2)]">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
                                <span className="text-xs leading-none text-amber-400 tracking-[0.1em]">★★★★★</span>
                                <span className="text-xs font-semibold text-gray-700">4.7</span>
                            </div>
                        </div>
                    </div>

                    {/* H1: Il titolo SEO principale */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                        {MAIN_CATEGORY} a <span className="text-blue-600">{PRIMARY_CITY}</span>
                    </h1>
                    <h2 className="text-2xl md:text-2xl font-normal text-gray-500 leading-tight mb-6">Prefinito - SPC - LVT - Laminato</h2>


                    <HeroStats></HeroStats>

                    {/* 2. CONTENITORE FLEX PER I CTA */}
                    {/* 2. CONTENITORE FLEX PER I CTA */}
                    <div className="mt-8 flex flex-row justify-center md:justify-start gap-4">

                        {/* NUOVO BOTTONE INTERATTIVO */}
                        <button
                            onClick={() => document.getElementById('preventivatore')?.scrollIntoView({ behavior: 'smooth' })}
                            className="
            group
            relative overflow-hidden
            bg-blue-600 hover:bg-blue-700
            text-white font-bold text-base md:text-lg 
            py-4 px-8 md:px-10 
            rounded-full 
            shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]
            transition-all duration-300 transform hover:-translate-y-1 active:scale-95
            flex items-center gap-3
        "
                            title="Vai al preventivatore online"
                        >
                            {/* Effetto luce (opzionale) */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-[25deg] group-hover:animate-[shimmer_1s_infinite]"></div>


                            <span>Calcola Preventivo in 1 Minuto</span>
                        </button>

                    </div>
                    {/* Micro-copy rassicurante sotto il bottone */}
                    <div className="flex justify-center md:justify-start mt-3">
                        <p className="text-xs text-gray-500 font-medium ml-4">
                            ⚡ Risultato immediato • Senza registrazione
                        </p>
                    </div>
                </div>

                {/* Immagine (colonna destra) */}
                <div className="hidden md:flex items-center justify-center">
                    <img
                        src={rovereMielato} // Assicurati che il percorso sia corretto
                        alt={`Posatore di pavimenti esperto di ${COMPANY_NAME} a ${PRIMARY_CITY}`}
                        className="w-full max-w-[520px] rounded-3xl shadow-2xl transition-transform duration-500 transform hover:scale-105 object-cover"
                        loading="eager" // Carica subito, è la Hero image
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
