import React from 'react';
import { X, Info, CheckCircle2 } from 'lucide-react';

function ExtraServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop scuro */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Card Modale */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
        
        {/* Header colorato in base all'icona */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {service.name}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white hover:bg-gray-100 rounded-full transition-colors border border-transparent hover:border-gray-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Prezzo in evidenza */}
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold text-blue-600">
              {service.price}€
            </span>
            <span className="text-sm font-medium text-gray-400 uppercase">
               / {service.unit}
            </span>
          </div>

          {/* Descrizione del servizio */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
              <Info className="w-4 h-4" /> In cosa consiste
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.details || "Servizio accessorio valutabile in fase di sopralluogo."}
            </p>
          </div>

          {/* Box Disclaimer Sopralluogo */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong>Niente sorprese:</strong> Il prezzo finale potrebbe variare leggermente in base alla complessità reale del cantiere. Verificheremo tutto durante il sopralluogo gratuito e il prezzo sarà bloccato prima di iniziare.
            </div>
          </div>
        </div>

        {/* Footer con bottone chiudi */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 text-center">
          <button 
            onClick={onClose}
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-all active:scale-95"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraServiceModal;