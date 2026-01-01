import React, { useState, useMemo } from 'react';
import { PHONE_NUMBER } from '../utils/constants';

// Funzione helper per le caratteristiche
const parseFeature = (feature) => {
  const parts = feature.split(':');
  if (parts.length < 2) return { label: feature, value: '' };
  return { label: parts[0].trim(), value: parts.slice(1).join(':').trim() };
};

export function PricingCard({ service, onShowProcessClick }) {
  const { calculator } = service;
  const [quantity, setQuantity] = useState(calculator?.defaultValue ?? 50);
  const quantityLabel = calculator?.label ?? 'mq';

  const estimatedCost = useMemo(() => {
    return (quantity * service.pricePerMq).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  }, [quantity, service.pricePerMq]);

  const estimatedTime = useMemo(() => {
    const days = Math.max(1, Math.ceil(quantity * service.timeFactorPerMq));
    return `${days} ${days > 1 ? 'Giorni' : 'Giorno'}`;
  }, [quantity, service.timeFactorPerMq]);

  const featureData = service.features.map(parseFeature);
  
  const thumbPositionPercentage = useMemo(() => {
    const min = calculator?.min ?? 10;
    const max = calculator?.max ?? 200;
    return ((quantity - min) / (max - min)) * 100;
  }, [quantity, calculator]);

  return (
    <div className="bg-white rounded-[20px] shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Media */}
      <div className="h-56 overflow-hidden relative">
         {service.mediaType === 'video' ? (
          <video src={service.mediaSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={service.mediaSrc} alt={service.name} className="w-full h-full object-cover" />
        )}
        {/* Gradiente per leggere meglio il testo sopra l'immagine */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold text-shadow">{service.name}</h3>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Intestazione Prezzo */}
        <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
           <div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Prezzo al {service.unit}</span>
             <div className="flex items-baseline gap-1">
               <span className="text-2xl font-bold text-gray-900">{service.price}</span>
             </div>
           </div>
           <button 
             onClick={() => onShowProcessClick(service)} 
             className="text-blue-600 text-xs font-bold bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-100"
           >
             Info Posa ⓘ
           </button>
        </div>

        {/* Features List Compact */}
        <div className="space-y-2 mb-6 flex-grow">
          {featureData.slice(0, 3).map((f, i) => (
             <div key={i} className="flex justify-between text-sm">
               <span className="text-gray-500">{f.label}</span>
               <span className="font-medium text-gray-800">{f.value}</span>
             </div>
          ))}
        </div>

        {/* Simulator Area (Gray Box) */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
           {/* Slider */}
           <div className="relative mb-4 pt-5">
              <span 
                className="absolute -top-1 text-blue-600 text-xs font-bold transition-all duration-75" 
                style={{ left: `${thumbPositionPercentage}%`, transform: 'translateX(-50%)' }}
              >
                {quantity} {quantityLabel}
              </span>
              <input 
                type="range" 
                min={calculator?.min ?? 10} 
                max={calculator?.max ?? 200} 
                step={1} 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-blue" 
              />
           </div>
           
           {/* Risultati Simulazione */}
           <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Stima Totale</p>
                <p className="text-lg font-bold text-blue-600">{estimatedCost}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Tempo</p>
                <p className="text-lg font-bold text-gray-800">{estimatedTime}</p>
              </div>
           </div>

           {/* Bottone Chiama */}
           <a 
             href={`tel:${PHONE_NUMBER}`} 
             className="flex items-center justify-center w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition-all active:scale-95 text-sm shadow-md"
           >
             Chiama per questo
           </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;