import React, { useState, useMemo } from 'react';
// Assicurati che i percorsi siano corretti per la tua struttura
import { pricingData } from '../utils/pricingData'; 
import { PHONE_NUMBER } from '../utils/constants';
import ProcessModal from './ProcessModal';

// Funzione helper (rimane invariata)
const parseFeature = (feature) => {
  const parts = feature.split(':');
  if (parts.length < 2) return { label: feature, value: '' };
  const label = parts[0].trim();
  const value = parts.slice(1).join(':').trim();
  return { label, value };
};

// --- MODIFICA 1 ---
// La funzione ora accetta "onShowProcessClick" che le viene
// passato da PricingSection
export function PricingCard({ service, onShowProcessClick }) {
  const { calculator } = service;
  const [quantity, setQuantity] = useState(calculator?.defaultValue ?? 50);
  const quantityLabel = calculator?.label ?? 'valore';

  const estimatedCost = useMemo(() => {
    return (quantity * service.pricePerMq).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  }, [quantity, service.pricePerMq]);

  const estimatedTime = useMemo(() => {
    const days = quantity * service.timeFactorPerMq;
    const roundedDays = Math.max(1, Math.ceil(days));
    const dayString = roundedDays > 1 ? 'Giorni' : 'Giorno';
    return `${roundedDays} ${dayString}`;
  }, [quantity, service.timeFactorPerMq]);

  const featureData = service.features.map(parseFeature);

  const thumbPositionPercentage = useMemo(() => {
    const min = calculator?.min ?? 10;
    const max = calculator?.max ?? 200;
    if (max === min) return 0; 
    const percentage = ((quantity - min) / (max - min)) * 100;
    return percentage;
  }, [quantity, calculator]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* 1. MEDIA (Invariato) */}
      {service.mediaType === 'video' ? (
        <video
          src={service.mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-64 object-cover"
        />
      ) : (
        <img src={service.mediaSrc} alt={service.name} className="w-full h-64 object-cover" />
      )}

      {/* 2. ZONA "VETRINA" (Bianca) (Invariato) */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Testata (Nome e Prezzo) */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-900 w-2/3">{service.name}</h3>
          <div className="text-right flex-shrink-0">
            {/* Ho notato che qui avevi 'text-3xl', potresti volerlo rimettere a 'text-2xl' per coerenza con la mia proposta */}
            <span className="text-3xl font-bold text-blue-600">{service.price}</span>
            <p className="text-xs text-gray-500 -mt-1">{service.unit}</p>
          </div>
        </div>

         {/* --- BLOCCO TAG/VARIANTI --- */}
        {service.variants && service.variants.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {service.variants.map((variant) => (
              <span 
                key={variant} 
                className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {variant}
              </span>
            ))}
          </div>
        )}

        {/* Descrizione */}
        <p className="text-sm text-gray-600 mb-6">{service.description}</p>

        {/* Divisore */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Tabella minimalista (invariata) */}
        <div className="space-y-3">
          {featureData.map((feature, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{feature.label}</span>
              <span className="text-sm font-medium text-gray-900 text-right">{feature.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ZONA "SIMULATORE" (Grigia) */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <h4 className="text-base font-semibold text-gray-900 text-center mb-4">
          Calcola stima costo
        </h4>
        
        {/* Slider (Invariato) */}
        <div className="relative pt-6 mb-4">
          <span 
            className="absolute text-blue-600 text-lg font-bold"
            style={{
              left: `${thumbPositionPercentage}%`,
              transform: 'translateX(-50%)',
              top: '0',
            }}
          >
            {quantity} {quantityLabel}
          </span>
          <input
            id={`mq-slider-${service.id}`}
            type="range"
            min={calculator?.min ?? 10}
            max={calculator?.max ?? 200}
            step={calculator?.step ?? 1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-blue"
          />
        </div>

        {/* Risultati (invariati) */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-xs text-gray-500 uppercase font-semibold">Costo Stimato</span>
            <p className="text-2xl font-bold text-blue-600">{estimatedCost}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500 uppercase font-semibold">Tempi Stimati</span>
            <p className="text-2xl font-bold text-gray-900">{estimatedTime}</p>
          </div>
        </div>

        {/* CTA (invariata) */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="block text-center w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/50"
        >
          Chiama ora
        </a>

  
        <button
          onClick={() => onShowProcessClick(service)}
          className="mt-3 block text-center w-full text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Come funziona
        </button>
        {/* ----------------- */}

      </div>
    </div>
  );
}


function PricingSection() {
  // Stato per gestire quale servizio mostrare nel modal (null = chiuso)
  const [selectedService, setSelectedService] = useState(null);

  // Funzione per impostare il servizio e aprire il modal
  const handleShowProcess = (service) => {
    setSelectedService(service);
  };

  // Funzione per chiudere il modal
  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Prezzi Chiari. Posa Perfetta.
          </h3>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Trova il servizio di posa parquet che cerchi e usa il simulatore per una stima immediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((service) => (
            <PricingCard 
              key={service.id} 
              service={service} 
              // Passa la funzione per aprire il modal alla card
              onShowProcessClick={handleShowProcess} 
            />
          ))}
        </div>
      </div>

      {/* Renderizza il Modal qui. */}
      <ProcessModal 
        service={selectedService} 
        onClose={handleCloseModal} 
      />
    </section>
  );
}

export default PricingSection;
