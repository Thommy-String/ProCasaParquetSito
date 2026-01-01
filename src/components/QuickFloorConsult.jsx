import React, { useState, useRef } from 'react';
import { 
  Camera, Layers, LayoutGrid, 
  Check, MessageCircle, AlertCircle, X, ScanEye, Shield
} from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

function QuickFloorConsult() {
  const [step, setStep] = useState('select'); 
  const [floorType, setFloorType] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const CHECKLIST_TECNICA = {
    screed: [
      "Verifica visiva della grana (rischio spolverio)",
      "Controllo presenza giunti di dilatazione",
      "Individuazione crepe da ritiro",
    ],
    tiles: [
      "Stato delle fughe esistenti",
      "Planarità generale delle piastrelle",
      "Verifica dislivelli con altre stanze",
    ]
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setStep('preview');
    }
  };

  const handleWhatsApp = () => {
    const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, '');
    const context = floorType === 'screed' ? 'MASSETTO GREZZO' : 'PAVIMENTO ESISTENTE';
    const text = `Ciao! Ho caricato una foto del mio ${context} sul sito. Ve la allego qui sotto per sapere se è idoneo alla posa o se servono preparazioni specifiche.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    // CAMBIO 1: Sfondo Scuro (bg-gray-900) e testo chiaro (text-white)
    <section className="py-16 px-4 bg-gray-900 border-y border-gray-800 relative overflow-hidden">
      
      {/* Effetto sfondo sfumato (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-md mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          {/* Badge Dark Mode */}
          <div className="inline-flex items-center gap-1.5 bg-green-900/30 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-4 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
            <Shield className="w-3 h-3" /> Check Sottofondo Sicuro
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
            Il tuo fondo attuale è idoneo per la posa del nuovo parquet?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            Evita distacchi o vuoti futuri. Manda una foto per un controllo tecnico immediato.
          </p>
        </div>

        {/* CONTAINER INTERATTIVO (Dark Card) */}
        <div className="bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden relative">

          {/* STEP 1: CONTESTO */}
          {step === 'select' && (
            <div className="p-6 animate-fadeIn">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 text-center flex items-center justify-center gap-2">
                <ScanEye className="w-4 h-4" /> Seleziona superficie attuale
              </p>
              
              <div className="grid gap-4">
                <button 
                  onClick={() => { setFloorType('screed'); fileInputRef.current.click(); }}
                  className="bg-gray-700/50 hover:bg-gray-700 hover:border-blue-500/50 p-4 rounded-2xl border border-gray-600 transition-all active:scale-[0.98] group flex items-center gap-4 text-left"
                >
                  <div className="bg-gray-800 p-3 rounded-xl border border-gray-600 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors">
                    <Layers className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Massetto</h3>
                    <p className="text-xs text-gray-400">Cemento / Autolivellante</p>
                  </div>
                  <div className="ml-auto bg-gray-800 rounded-full p-2 border border-gray-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Camera className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </button>

                <button 
                  onClick={() => { setFloorType('tiles'); fileInputRef.current.click(); }}
                  className="bg-gray-700/50 hover:bg-gray-700 hover:border-amber-500/50 p-4 rounded-2xl border border-gray-600 transition-all active:scale-[0.98] group flex items-center gap-4 text-left"
                >
                  <div className="bg-gray-800 p-3 rounded-xl border border-gray-600 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-colors">
                    <LayoutGrid className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Pavimento esistente</h3>
                    <p className="text-xs text-gray-400">Piastrelle / Marmo</p>
                  </div>
                  <div className="ml-auto bg-gray-800 rounded-full p-2 border border-gray-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Camera className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </button>
              </div>

              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
          )}

          {/* STEP 2: PREVIEW & SEND */}
          {step === 'preview' && (
            <div className="animate-slideInRight bg-gray-800">
              {/* Immagine */}
              <div className="relative h-56 w-full bg-black">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover opacity-80" />
                <button 
                  onClick={() => { setStep('select'); setImagePreview(null); }}
                  className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-red-500/80 backdrop-blur-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-[10px] font-bold uppercase flex items-center gap-2 border border-white/10">
                   <Camera className="w-3 h-3 text-green-400" /> Foto pronta all'invio
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6 bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-400" />
                    Cosa controllerà il tecnico:
                  </p>
                  <ul className="space-y-3">
                    {CHECKLIST_TECNICA[floorType].map((item, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                        <div className="mt-0.5 bg-green-500/20 p-0.5 rounded-full">
                           <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 transition-transform active:scale-95 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Apri WhatsApp e Allega
                </button>
                <p className="text-[10px] text-center text-gray-500 mt-3 leading-tight">
                  Ti si aprirà la chat con Andrea. <br/>
                  <span className="text-gray-400 font-bold">Ricordati di allegare la foto dalla galleria!</span>
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default QuickFloorConsult;