import React from 'react';
import { PHONE_NUMBER } from '../utils/constants';

// --- IMPORTS ICONE ---
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
  Scaling,
  ShieldCheck, 
  PhoneCall,
  ArrowRight
} from 'lucide-react';

// --- IMPORTS VIDEO LOCALI (Come fallback) ---
import posaBattiscopa from '../assets/videos/parquet/posaBattiscopa.mp4';
import posaLaminato from '../assets/videos/parquet/posaLaminato.mp4';
import posaPrefinitoFlottante from '../assets/videos/parquet/posaPrefinitoFlottante.mp4';
import posaPrefinitoIncollato from '../assets/videos/parquet/posaPrefinitoIncollato.mp4';
import posaPrefinitoSpina from '../assets/videos/parquet/posaPrefinitoSpina.mp4';
import posaSpc from '../assets/videos/parquet/posaSpc.mp4';

// --- MAPPA ICONE ---
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

// --- LOGICA SELEZIONE VIDEO ---
const resolveVideo = (service) => {
  // 1. PRIORITÀ ASSOLUTA: Se l'oggetto ha già il video, usa quello.
  if (service.mediaSrc) return service.mediaSrc;

  // 2. FALLBACK: Se manca mediaSrc, proviamo a indovinare dal nome
  const id = service.id ? service.id.toLowerCase() : '';
  const name = service.name ? service.name.toLowerCase() : '';

  if (id.includes('battiscopa') || name.includes('battiscopa')) return posaBattiscopa;
  if (id.includes('spina') || name.includes('spina')) return posaPrefinitoSpina;
  if (id.includes('incollato') || name.includes('incollato')) return posaPrefinitoIncollato;
  if (id.includes('spc') || name.includes('spc') || name.includes('lvt')) return posaSpc;
  if (id.includes('flottante') || name.includes('flottante')) return posaPrefinitoFlottante;
  
  // 3. DEFAULT
  return posaLaminato; 
};

// --- LOGICA TESTI GARANZIA ---
const getReassuranceText = (title) => {
  if (title.includes('Preparazione') || title.includes('Fondo') || title.includes('Tracciatura')) {
    return 'Precisione millimetrica garantita.';
  }
  if (title.includes('Posa') || title.includes('Installazione') || title.includes('Incollaggio')) {
    return 'Lavoro pulito e a regola d\'arte.';
  }
  if (title.includes('Finitura') || title.includes('Assestamento') || title.includes('Uso')) {
    return 'Rispetto tempi e pulizia finale.';
  }
  return 'Qualità controllata in ogni fase.';
};

function ProcessModal({ service, onClose }) {
  if (!service) return null;

  // Risolviamo il video corretto
  const videoSrc = resolveVideo(service);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm animate-fadeIn md:items-center p-0 md:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-50 w-full max-w-2xl flex flex-col max-h-[95vh] md:max-h-[90vh] animate-slideUp rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* --- HEADER --- */}
        <div className="relative px-8 py-12 bg-gray-900 text-white flex-shrink-0 overflow-hidden group">
          
          <div className="absolute inset-0 z-0">
             {/* Key fondamentale per ricaricare il video se cambia servizio */}
             <video 
               key={videoSrc}
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover blur-[3px] opacity-50 scale-105 transition-transform duration-[10s] ease-in-out group-hover:scale-110"
             >
               <source src={videoSrc} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/30"></div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all backdrop-blur-md border border-white/10 hover:scale-110 active:scale-95"
          >
            <X size={20} />
          </button>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/40 px-3 py-1 rounded-full text-xs font-bold text-blue-100 uppercase tracking-wider mb-4 shadow-lg backdrop-blur-sm">
              <Sparkles size={12} className="text-blue-200" /> {service.name}
            </div>
            
        
            
            <p className="text-gray-200 text-sm md:text-base max-w-md leading-relaxed font-medium drop-shadow-md">
              {service.description}
            </p>
          </div>
        </div>

        {/* --- TIMELINE --- */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-gray-50 scrollbar-hide">
          <div className="relative">
            <div className="absolute top-4 left-6 bottom-4 w-0.5 bg-gray-200 border-l border-dashed border-gray-300"></div>

            <div className="space-y-8">
              {service.processSteps?.map((step, index) => {
                const Icon = iconMap[step.icon] || ClipboardCheck; 
                const reassurance = getReassuranceText(step.title);
                
                return (
                  <div key={index} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-12 h-12 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-3 py-2 rounded-lg w-full">
                        <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-xs font-bold text-green-800">
                           {reassurance}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-3">
             <p className="text-center text-xs text-gray-400 mb-1">
               Dubbi su questo processo?
             </p>
             <a
               href={`tel:${PHONE_NUMBER}`}
               className="w-full bg-gray-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-xl active:scale-95"
             >
               <PhoneCall className="w-5 h-5" />
               <span>Parla direttamente con il Tecnico</span>
               <ArrowRight className="w-4 h-4 opacity-50" />
             </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProcessModal;