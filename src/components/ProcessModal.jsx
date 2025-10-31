import React from 'react';
import { PHONE_NUMBER } from '../utils/constants';

// IMPORTA TUTTE LE ICONE NECESSARIE
import { 
  X, 
  ClipboardCheck, 
  Layers, 
  Sparkles, 
  Move3d, 
  LayoutGrid, 
  Timer, 
  Compass, 
  GitBranch, 
  Scissors, 
  Hammer, 
  Paintbrush, 
  Scaling 
} from 'lucide-react';

// MAPPA COMPLETA DELLE ICONE (invariata)
const iconMap = {
  'clipboard-check': (props) => <ClipboardCheck {...props} />,
  'layers': (props) => <Layers {...props} />,
  'sparkles': (props) => <Sparkles {...props} />,
  'move-3d': (props) => <Move3d {...props} />,
  'layout-grid': (props) => <LayoutGrid {...props} />,
  'timer': (props) => <Timer {...props} />,
  'compass': (props) => <Compass {...props} />,
  'git-branch': (props) => <GitBranch {...props} />,
  'scissors': (props) => <Scissors {...props} />,
  'hammer': (props) => <Hammer {...props} />,
  'paintbrush': (props) => <Paintbrush {...props} />,
  'scaling': (props) => <Scaling {...props} />,
};

// Funzione "Anti-Paura" (invariata)
const getReassuranceText = (title) => {
  if (title.includes('Preparazione') || title.includes('Fondo') || title.includes('Tracciatura')) {
    return 'Garanzia: Massima precisione, zero sorprese.';
  }
  if (title.includes('Posa') || title.includes('Installazione') || title.includes('Incollaggio')) {
    return 'Garanzia: Lavoro pulito e a regola d\'arte.';
  }
  if (title.includes('Finitura') || title.includes('Assestamento') || title.includes('Uso')) {
    return 'Garanzia: Rispetto dei tempi e pulizia finale.';
  }
  return 'Garanzia: Qualità in ogni fase.';
};

function ProcessModal({ service, onClose }) {
  if (!service) return null;

  return (
    // --- MODIFICA 1: OVERLAY ---
    // Tolto 'p-4'. Aggiunto 'items-end' per mobile e 'md:items-center' per desktop.
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 animate-fadeIn md:items-center"
      onClick={onClose}
    >
      {/* --- MODIFICA 2: PANNELLO MODAL ---
        - Aggiunte classi per il comportamento mobile "sheet"
        - 'rounded-t-2xl' (mobile) -> 'md:rounded-2xl' (desktop)
        - 'max-h-[95vh]' (mobile) -> 'md:max-h-[90vh]' (desktop)
      */}
      <div 
        className="bg-white rounded-t-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[95vh] animate-slideUp md:rounded-2xl md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 1. HEADER (Fisso) */}
        {/* --- MODIFICA 3: POSIZIONE ---
          - Aggiunto 'relative' qui per dare un contesto al bottone 'X'
        */}
        <div className="relative p-6 md:p-8 border-b border-gray-200 flex-shrink-0">
          
          {/* Bottone Chiudi (Sticky) */}
          {/* --- MODIFICA 4: POSIZIONE BOTTONE ---
            - Ora 'top-6 right-6' lo posiziona DENTRO l'header
          */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <p className="text-base text-gray-600">{service.description}</p>
        </div>

        {/* 2. CONTENUTO (Scrollabile) (invariato) */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Come funziona</h3>
          <ol className="relative border-l border-gray-200">
            {service.processSteps?.map((step, index) => {
              const Icon = iconMap[step.icon] || ClipboardCheck; 
              const reassurance = getReassuranceText(step.title);
              
              return (
                <li key={index} className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                    <Icon className="w-5 h-5 text-blue-800" />
                  </span>
                  <div className="ml-2">
                    <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm font-semibold text-blue-700">{reassurance}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* 3. FOOTER / CTA (Fisso) (invariato) */}
        <div className="p-6 md:p-8 border-t border-gray-200 bg-gray-50 flex-shrink-0">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="block text-center w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/50"
          >
            Chiama per un sopralluogo
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default ProcessModal;