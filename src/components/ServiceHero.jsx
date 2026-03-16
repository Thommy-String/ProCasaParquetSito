import React from 'react';
import { PRIMARY_CITY } from '../utils/constants';
import { pricingData } from '../utils/pricingData';
import { Star, CheckCircle, Armchair, Hammer, Layers as Layers2, Paintbrush, Sofa, Puzzle, Footprints } from 'lucide-react';

// Mappa icone usate nei servizi (evita import * da lucide-react)
const ICON_MAP = {
  Armchair, Hammer, Layers2, Paintbrush, Sofa, Puzzle, Footprints, CheckCircle,
  DropletOff: CheckCircle, Gavel: Hammer, PaintBucket: Paintbrush, Slice: CheckCircle,
};

function ServiceHero({ service }) {
    if (!service) return null;

    const priceInfo = pricingData.find(p => p.id === service.pricingId) || {};
    const displayPrice = service.priceDisplay || priceInfo.price;

    return (
        <section className="w-full pt-2 bg-[#fbfbfa] text-[#1a1a1a] font-sans">
            <div className="container mx-auto px-4 max-w-2xl">



                {/* 1. VIDEO (ALTEZZA LIMITATA PER MOBILE) */}
                <div className="w-full mb-4">
                    <div className="rounded-xl overflow-hidden  shadow-sm">
                        {service.imageSrc ? (
                            <img
                                src={service.imageSrc}
                                alt={service.hero.h1}
                                className="w-full h-[220px] md:h-[400px] object-cover rounded-lg"
                            />
                        ) : (
                            <video
                                src={service.videoSrc || "https://www.w3schools.com/howto/rain.mp4"}
                                autoPlay muted loop playsInline
                                className="w-full h-[220px] md:h-[400px] object-cover rounded-lg"
                            />
                        )}
                    </div>
                </div>

                {/* --- SOCIAL PROOF --- */}
                <div className="flex justify-center mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/60 border border-[#E5E5E5] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-default">
                        {/* 5 Stelle Gialle */}
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={15}
                                    className="fill-[#fbbf24] text-[#fbbf24]"
                                    strokeWidth={0}
                                />
                            ))}
                        </div>

                        {/* Separatore verticale sottile */}
                        <div className="h-3 w-px bg-gray-200"></div>

                        {/* Testo Rating */}
                        <div className="flex items-center gap-1">
                            <span className="text-[11px] font-bold text-[#37352f]">4.9</span>
                            <span className="text-[11px] font-medium text-gray-400"> su Google</span>
                            <div className="h-3 w-px bg-gray-200"></div>
                            <span className="text-[11px] font-medium text-gray-500">Milano e provincia</span>
                        </div>
                    </div>
                </div>

                {/* 1. HERO TITLE */}
                <div className="text-center mb-4">

                    <h1 className="text-4xl uppercase px-3 md:text-6xl font-black leading-[1] tracking-[-0.02em] bg-gradient-to-r from-blue-700 via-purple-400 to-red-600 bg-clip-text text-transparent">
                        {service.hero.h1}
                    </h1>
                </div>

                {/* 5. PARAGRAFO */}
                <h2 className="text-sm text-gray-400 font-regular text-center leading-tight mb-6 px-8 max-w-lg mx-auto">
                    {service.hero.subtitle}
                </h2>


                {/* 6. PUNTI DI FORZA (ULTRA-COMPATTI SU UNA RIGA) */}
                <div className="w-full max-w-4xl mx-auto mb-6 border-y border-gray-100 py-4">
                    <div className="flex flex-row justify-around items-start gap-2">
                        {service.features?.slice(0, 3).map((feat, index) => {
                            const IconComponent = ICON_MAP[feat.icon] || CheckCircle;

                            return (
                                <div key={index} className="flex flex-col items-center flex-1 px-1 group">
                                    {/* Icona Mini */}
                                    <div className="mb-2 p-1.5 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                                        <IconComponent
                                            size={16}
                                            className={`${feat.color || "text-blue-500"} opacity-70`}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Testo in linea e compresso */}
                                    <div className="text-center">
                                        <h3 className="text-[11px] md:text-[12px] font-black uppercase tracking-tighter text-slate-900 leading-none">
                                            {feat.tag}
                                        </h3>
                                        <p className="hidden sm:block text-[10px] text-slate-400 font-medium mt-1 leading-tight tracking-tight">
                                            {feat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
}

export default ServiceHero;