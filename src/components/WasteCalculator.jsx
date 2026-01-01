import React, { useState } from 'react';
import { 
  Calculator, ArrowUp, ArrowUpRight, ChevronsUp, 
   Info, FileText 
} from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

const PATTERNS = {
  straight: {
    id: 'straight',
    label: 'Posa Dritta',
    percent: 0.07, 
    icon: <ArrowUp className="w-5 h-5" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  diagonal: {
    id: 'diagonal',
    label: 'Diagonale',
    percent: 0.12, 
    icon: <ArrowUpRight className="w-5 h-5" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  herringbone: {
    id: 'herringbone',
    label: 'Spina',
    percent: 0.16, 
    icon: <ChevronsUp className="w-5 h-5" />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  }
};

function WasteCalculator() {
  const [sqm, setSqm] = useState(50);
  const [pattern, setPattern] = useState('straight');

  const selectedPattern = PATTERNS[pattern];
  const wasteAmount = sqm * selectedPattern.percent;
  const totalAmount = sqm + wasteAmount;
  const safeOrder = Math.ceil(totalAmount); 

  // Funzione specifica per chi manda la piantina
  const handleWhatsappPlan = () => {
    // 1. Traccia la conversione (senza URL per evitare conflitti di redirect)
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
    const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, '');
    const text = `Ciao! Ho una piantina e vorrei un calcolo preciso dei mq necessari per una ${selectedPattern.label}. Posso inviartela qui?`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Intestazione */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
            <Calculator className="w-3 h-3 text-blue-500" /> Calcolatore MQ
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Quanti metri ti servono davvero per la posa?
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Evita di rimanere senza materiale a metà lavori. Calcola lo scarto tecnico corretto.
          </p>
        </div>

        {/* CARD PRINCIPALE */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative">
          
          <div className="p-8 pb-6">
            
            {/* INPUT GIGANTE */}
            <div className="flex flex-col items-center justify-center mb-10">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Inserisci i Mq Netti
              </label>
              <div className="relative group">
                <input 
                  type="number" 
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-48 text-center text-6xl font-extrabold text-gray-900 border-b-2 border-gray-100 focus:border-blue-500 outline-none pb-2 bg-transparent transition-all placeholder-gray-200 group-hover:border-gray-200"
                  placeholder="0"
                />
                <span className="absolute -right-8 bottom-6 text-gray-400 font-bold text-lg">mq</span>
              </div>
            </div>

            {/* SELETTORE POSA */}
            <div className="mb-8">
              <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
               Tipo di posa?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {Object.values(PATTERNS).map((p) => {
                  const isSelected = pattern === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPattern(p.id)}
                      className={`
                        relative py-4 px-2 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-2
                        ${isSelected 
                          ? `${p.border} ${p.bg} ring-1 ring-offset-2 ring-offset-white ${p.color.replace('text', 'ring')}`
                          : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50 text-gray-400'}
                      `}
                    >
                      <div className={isSelected ? p.color : 'text-gray-300'}>
                        {p.icon}
                      </div>
                      <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-gray-900' : 'text-gray-500'}`}>
                        {p.label}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/60' : 'bg-gray-100'}`}>
                        +{Math.round(p.percent * 100)}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BARRA VISIVA */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-2">
              <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-2 px-1">
                <span>Netto: {sqm}mq</span>
                <span className="text-amber-600">+ Sfrido {wasteAmount.toFixed(1)}mq</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-gray-800 rounded-l-full transition-all duration-500" style={{ width: '85%' }}></div>
                <div className="h-full bg-amber-400 rounded-r-full transition-all duration-500 relative pattern-diagonal-lines" style={{ width: '15%' }}></div>
              </div>
            </div>

          </div>

          {/* RISULTATO E CTA (Fondo Scuro) */}
          <div className="bg-gray-900 p-6 sm:p-8 text-white text-center">
            
            {/* 1. Il Risultato Matematico */}
            <div className="mb-8">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                Totale Consigliato
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  {safeOrder}
                </span>
                <span className="text-xl font-medium text-gray-500 mt-3">mq</span>
              </div>
            </div>

            {/* DIVISORE "OPPURE" */}
            <div className="relative flex py-2 items-center mb-6 opacity-30">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink-0 mx-4 text-xs text-gray-300 font-bold uppercase">Oppure</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* 2. La Domanda + CTA */}
            <div>
              <p className="text-white font-bold text-lg mb-1">
                Hai dubbi o una piantina complessa?
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Inviaci la foto della piantina. Calcoliamo noi i mq precisi al centimetro.
              </p>

              <button 
                onClick={handleWhatsappPlan}
                className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-lg group"
              >
                <FileText className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                <span>Invia Piantina su WhatsApp</span>
              </button>
              
              <p className="text-gray-100 text-[10px] mt-3 flex items-center justify-center gap-1.5 opacity-60">
                <Info className="w-3 h-3" />
                Analisi gratuita e senza impegno.
              </p>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .pattern-diagonal-lines {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.3) 5px, rgba(255,255,255,0.3) 10px);
        }
      `}</style>
    </section>
  );
}

export default WasteCalculator;