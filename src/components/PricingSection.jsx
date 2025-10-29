import React, { useState, useMemo } from 'react';
import { pricingData } from '../utils/pricingData';
import { PHONE_NUMBER } from '../utils/constants';
import { TrendingUp, ShieldCheck } from 'lucide-react';

function PricingCard({ service }) {
  const { calculator } = service;
  const [quantity, setQuantity] = useState(calculator?.defaultValue ?? 50);
  const quantityLabel = calculator?.label ?? 'mq';

  const estimatedCost = useMemo(() => {
    return (quantity * service.pricePerMq).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  }, [quantity, service.pricePerMq]);

  const estimatedTime = useMemo(() => {
    const days = quantity * service.timeFactorPerMq;
    const roundedDays = Math.max(1, Math.ceil(days));
    const dayString = roundedDays > 1 ? 'Giorni' : 'Giorno';
    return `${roundedDays} ${dayString}`;
  }, [quantity, service.timeFactorPerMq]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {service.mediaType === 'video' ? (
        <video
          src={service.mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-48 object-cover"
        />
      ) : (
        <img src={service.mediaSrc} alt={service.name} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 h-16">{service.description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-blue-600">{service.price}</span>
          <span className="text-base text-gray-500 ml-1">{service.unit}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <ShieldCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-auto">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor={`mq-slider-${service.id}`} className="text-sm font-semibold text-gray-800">
              Stima per <span className="text-blue-600 text-lg font-bold">{quantity} {quantityLabel}</span>
            </label>
            <TrendingUp className="h-5 w-5 text-gray-500" />
          </div>

          <input
            id={`mq-slider-${service.id}`}
            type="range"
            min={calculator?.min ?? 10}
            max={calculator?.max ?? 200}
            step={calculator?.step ?? 5}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-blue"
          />

          <div className="flex justify-between mt-3 text-center">
            <div className="w-1/2 pr-2">
              <span className="text-xs text-gray-500">COSTO STIMATO</span>
              <p className="text-xl font-bold text-gray-900">{estimatedCost}</p>
            </div>
            <div className="w-1/2 pl-2 border-l border-gray-300">
              <span className="text-xs text-gray-500">TEMPI DI POSA</span>
              <p className="text-xl font-bold text-gray-900">{estimatedTime}</p>
            </div>
          </div>
        </div>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="mt-6 block text-center w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/50"
        >
          Chiama ora
        </a>

        
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Prezzi Chiari. Posa Perfetta.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Usa il nostro simulatore per una stima immediata dei costi e dei tempi di posa per il tuo nuovo pavimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((service) => (
            <PricingCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
