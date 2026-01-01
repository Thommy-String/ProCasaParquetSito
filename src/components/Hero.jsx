import React from 'react';
import { MAIN_CATEGORY, PRIMARY_CITY, COMPANY_NAME } from '../utils/constants';
import rovereMielato from '../assets/images/parquet/rovereMielato.png';
import HeroStats from './HeroStats';
import { Sparkles } from 'lucide-react'; // Icona "Fulmine" per il concetto di velocità/smart

function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Background Sfumato molto sottile */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-3xl"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-50/60 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- COLONNA SINISTRA --- */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">

                        {/* BADGE TOP */}
                        <div className="flex justify-center md:justify-start mb-6">
                            <div className="
        group relative inline-flex items-center gap-2 px-4 py-2 
        rounded-full bg-white border border-blue-100 shadow-[0_2px_10px_rgba(37,99,235,0.1)]
        hover:border-blue-300 transition-colors duration-300 cursor-default
    ">
                                {/* Sfondo animato leggero all'hover */}
                                <div className="absolute inset-0 bg-blue-50/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Icona 'Magia' animata */}
                                <span className="relative text-amber-400 group-hover:rotate-12 transition-transform duration-300">
                                    <Sparkles size={16} fill="currentColor" />
                                </span>

                                {/* Testo con gradiente */}
                                <span className="relative text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent">
                                    parquettisti esperti
                                </span>
                            </div>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight">
                            {MAIN_CATEGORY} <br className="hidden lg:block" />
                            a <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-4">{PRIMARY_CITY}</span>
                        </h1>

                        {/* H2 - Copywriting migliorato */}
                        <h2 className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed font-medium">
                            anche su pavimenti esistenti.<br className="hidden md:block" />
                            <span className="text-gray-500 text-base mt-1 block">
                                Specialisti in Prefinito, SPC, LVT e Laminato.
                            </span>
                        </h2>

                        {/* HERO STATS */}
                        <div className="w-full mb-8 lg:mb-10">
                            <HeroStats />
                        </div>

                        {/* CTA BLU (Originale) */}
                        <div className="w-full sm:w-auto">
                            <button
                                onClick={() => document.getElementById('preventivatore')?.scrollIntoView({ behavior: 'smooth' })}
                                className="
                                    group relative w-full sm:w-auto
                                    bg-blue-600 hover:bg-blue-700
                                    text-white text-lg font-bold
                                    py-5 px-10 rounded-2xl
                                    shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(37,99,235,0.5)]
                                    transition-all duration-300 transform hover:-translate-y-1
                                    overflow-hidden flex items-center justify-center gap-3
                                "
                            >
                                {/* Effetto Shimmer */}
                                <div className="absolute top-0 -left-full w-2/3 h-full bg-white/20 skew-x-[25deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>

                                <span>Calcola Preventivo online</span>

                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            <p className="mt-3 text-xs text-gray-400 font-medium">
                                ⚡️ Risposta immediata • Nessuna registrazione
                            </p>
                        </div>
                    </div>

                    {/* --- COLONNA DESTRA (Immagine Desktop Only) --- */}
                    <div className="hidden lg:block relative">
                        {/* Pattern decorativo */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
                        </div>

                        <div className="relative z-10 group">
                            {/* Immagine */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform transition-transform duration-700 group-hover:scale-[1.01]">
                                <img
                                    src={rovereMielato}
                                    alt={`Posa pavimenti ${COMPANY_NAME}`}
                                    className="w-full h-auto object-cover max-h-[600px]"
                                    loading="eager"
                                />

                                {/* Label flottante */}
                                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm py-3 px-5 rounded-xl shadow-lg border border-gray-100">
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Realizzazione</p>
                                    <p className="text-sm font-bold text-gray-900">Prefinito dritto a correre</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;