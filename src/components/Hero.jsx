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
                                <span className="text-xs font-semibold text-gray-700">4.7 / 5 clienti soddisfatti</span>
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
                    <div className="mt-8 flex flex-row justify-center md:justify-start gap-4">
                        {/* MODIFICATO: flex-row per forzare l'allineamento, gap-4 per più spazio */}

                        {/* CTA principale (Chiama Ora) */}
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 border-2 border-transparent rounded-lg shadow-xl hover:bg-blue-700 transition-all duration-300 text-base transform hover:scale-105"
                            // MODIFICATO: px-4 -> px-6, py-2 -> py-3, text-sm -> text-base
                            title={`Chiama ${COMPANY_NAME} per un preventivo rapido`}
                        >
                            Chiama Ora
                        </a>
                    </div>
                </div>

                {/* Immagine del parquettista (colonna destra) */}
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
