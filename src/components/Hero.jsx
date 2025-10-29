import { MAIN_CATEGORY, PRIMARY_CITY, PHONE_NUMBER, COMPANY_NAME } from '../utils/constants';
import rovereMielato from '../assets/images/parquet/rovereMielato.png';
import HeroStats from './HeroStats';
import { Link } from 'react-router-dom'; // <-- 1. IMPORTA LINK

function Hero() {
    return (
        // Usa un layout grid per un design moderno e asimmetrico
        <section className="bg-white py-10 md:py-24">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Contenuto Testuale (colonna sinistra) */}
                <div className="text-center md:text-left">
                    {/* Valutazione con stelline */}

                    <div className="flex justify-center md:justify-start items-center mb-1 text-yellow-400 text-md">
                        {/* Esempio di 5 stelle piene */}
                        <span className="mr-2">★★★★★</span>
                        <span className="text-gray-600 text-base font-medium">4.7</span>
                    </div>

                    {/* H1: Il titolo SEO principale */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        {MAIN_CATEGORY} a <span className="text-blue-600">{PRIMARY_CITY}</span>: prefinito, SPC, LVT e laminato.
                    </h1>


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

                        {/* 3. NUOVO CTA (Scopri Prezzi) */}
                        <Link
                            to="/prezzi" // Cambia questo link se necessario
                            className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-bold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 text-base transform hover:scale-105"
                            // MODIFICATO: px-4 -> px-6, py-2 -> py-3, text-sm -> text-base
                            title="Scopri i nostri prezzi per la posa"
                        >
                            Scopri Prezzi
                        </Link>

                    </div>
                </div>

                {/* Immagine del parquettista (colonna destra) */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={rovereMielato} // Assicurati che il percorso sia corretto
                        alt={`Posatore di pavimenti esperto di ${COMPANY_NAME} a ${PRIMARY_CITY}`}
                        className="max-w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 transform hover:scale-105"
                        loading="eager" // Carica subito, è la Hero image
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;