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
        <section className="w-full pt-8 pb-12 bg-[#fbfbfa] text-[#1a1a1a] font-sans">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* --- SUPER-HEADER: BREADCRUMB / CATEGORY --- */}
                <div className="flex justify-center mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-blue-100">
                        Servizio Specializzato • {PRIMARY_CITY}
                    </span>
                </div>

                {/* --- HERO TITLE & SUBTITLE --- */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4 lowercase first-letter:uppercase">
                        {service.hero.h1}
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        {service.hero.subtitle}
                    </p>
                </div>

                {/* --- VISUAL CORE: IMAGE/VIDEO & PRICE BADGE --- */}
                <div className="relative w-full mb-12">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
                        {service.imageSrc ? (
                            <img
                                src={service.imageSrc}
                                alt={service.hero.h1}
                                className="w-full h-[280px] md:h-[480px] object-cover"
                            />
                        ) : (
                            <video
                                src={service.videoSrc || "https://www.w3schools.com/howto/rain.mp4"}
                                autoPlay muted loop playsInline
                                className="w-full h-[280px] md:h-[480px] object-cover"
                            />
                        )}
                    </div>

                    {/* Badge Prezzo Integrato con la Visual */}
                    <div className="absolute -bottom-6 right-6 md:right-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center min-w-[120px]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">da soli</span>
                        <div className="flex items-start">
                            <span className="text-lg font-bold text-slate-900 mt-1">€</span>
                            <span className="text-4xl font-black text-slate-900 leading-none">{displayPrice}</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase mt-1">al mq</span>
                    </div>
                </div>

                {/* --- VALIDATION BAR --- */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-12 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-slate-700">4.9/5 Rating Google</span>
                    </div>
                    <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-xs font-bold text-slate-600 tracking-tight">Posa Certificata</span>
                    </div>
                    <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <Footprints size={16} />
                        <span className="text-xs font-bold tracking-tight">Sopralluogo Gratuito</span>
                    </div>
                </div>

                {/* --- KEY FEATURES (GRID) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </section>
    );
}

export default ServiceHero;