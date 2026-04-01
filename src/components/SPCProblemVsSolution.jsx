import React from 'react';
import { X, Check, Calculator, ArrowRight } from 'lucide-react';

function SPCProblemVsSolution() {
  return (
    <div className="w-full bg-white py-16 px-4 relative z-10 overflow-hidden font-sans border-b-[3px] border-black">
      <div className="max-w-2xl mx-auto relative z-10">

        {/* Intestazione */}
        <div className="mb-10 text-center">
          <div className="inline-block bg-black text-white px-4 py-1 uppercase font-black tracking-widest text-sm mb-5 rounded-md">
            Il Problema vs. La Soluzione
          </div>
          <h2 className="text-[26px] md:text-[34px] font-[900] text-black leading-[1.05] tracking-tight uppercase">
            l'SPC è sempre più popolare<br />
            <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">
              per evitare pesanti ristrutturazioni.
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] font-[600] text-slate-600 leading-relaxed max-w-xl mx-auto">
            Il vecchio metodo richiede demolizioni, polvere, tempi lunghi e costi alti. La nostra soluzione SPC cambia tutto: posi sopra il vecchio pavimento e in 24 ore è finito.
          </p>
        </div>

        {/* Tabella Confronto */}
        <div className="border-[3px] border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

          {/* Header Row */}
          <div className="grid grid-cols-2">
            <div className="bg-red-100 px-4 py-3 border-b-[3px] border-r-[3px] border-black flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <X size={14} className="text-white" strokeWidth={3} />
              </div>
              <span className="font-black text-[13px] uppercase tracking-wider text-red-800">Vecchio metodo</span>
            </div>
            <div className="bg-emerald-100 px-4 py-3 border-b-[3px] border-black flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                <Check size={14} className="text-white" strokeWidth={3} />
              </div>
              <span className="font-black text-[13px] uppercase tracking-wider text-emerald-800">SPC</span>
            </div>
          </div>

          {/* Row 1 — Demolizioni */}
          <div className="grid grid-cols-2 border-b-[2px] border-black/15">
            <div className="px-4 py-4 border-r-[3px] border-black bg-red-50/50">
              <div className="flex items-start gap-2.5">
                <X size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[600] text-black/60 leading-snug">
                  Demolizioni devastanti: martello pneumatico, calcinaccio, mobili in magazzino per settimane.
                </p>
              </div>
            </div>
            <div className="px-4 py-4 bg-emerald-50/50">
              <div className="flex items-start gap-2.5">
                <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[700] text-black/80 leading-snug">
                  Direttamente sulle piastrelle: l'SPC si aggancia a click sopra qualsiasi pavimento. Zero polvere.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 — Tempi */}
          <div className="grid grid-cols-2 border-b-[2px] border-black/15">
            <div className="px-4 py-4 border-r-[3px] border-black bg-red-50/50">
              <div className="flex items-start gap-2.5">
                <X size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[600] text-black/60 leading-snug">
                  Tempi infiniti: massetto, asciugatura, verniciatura… la casa è invivibile per mesi.
                </p>
              </div>
            </div>
            <div className="px-4 py-4 bg-emerald-50/50">
              <div className="flex items-start gap-2.5">
                <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[700] text-black/80 leading-snug">
                  In 1-2 giorni e finito: una stanza media si posa in mezza giornata. Calpestabile subito.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 — Costi */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-4 border-r-[3px] border-black bg-red-50/50">
              <div className="flex items-start gap-2.5">
                <X size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[600] text-black/60 leading-snug">
                  Costi che lievitano: demolizione, smaltimento, massetto... il prezzo raddoppia.
                </p>
              </div>
            </div>
            <div className="px-4 py-4 bg-emerald-50/50">
              <div className="flex items-start gap-2.5">
                <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] md:text-[14px] font-[700] text-black/80 leading-snug">
                  Prezzo blindato: preventivo fisso, nessun acconto, paghi solo alla fine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter text-base border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(220,252,231,1)] hover:shadow-[2px_2px_0px_0px_rgba(220,252,231,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
            <Calculator size={20} strokeWidth={2} />
            Ottieni il tuo preventivo
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default SPCProblemVsSolution;
