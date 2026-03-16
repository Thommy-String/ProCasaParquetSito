import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

function ServiceDescription({ service }) {
  const sections = service?.sections || [];
  if (sections.length === 0) return null;

  return (
    <section className="bg-white py-12 px-6 font-sans border-t border-slate-100">
      <div className="max-w-2xl mx-auto">
        
        {/* Header Ultra-Compatto */}
        <div className="mb-10 flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Tutto il processo.
          </h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
             {service.pricingId}
          </span>
        </div>

        {/* Lista Verticale Notion-Style */}
        <div className="space-y-6">
          {sections.map((item, idx) => {
            const description = item.description || (item.paragraphs && item.paragraphs[0]);
            const badge = item.detail || (item.bullets && item.bullets[0]?.label);

            return (
              <div key={idx} className="flex gap-4 group">
                {/* Colonna Icona/Linea */}
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-sm shadow-sm group-hover:border-blue-400 transition-colors">
                    {item.icon || <CheckCircle2 size={16} className="text-slate-400" />}
                  </div>
                  {idx !== sections.length - 1 && (
                    <div className="h-full w-px bg-slate-100 mt-2" />
                  )}
                </div>

                {/* Contenuto Testuale */}
                <div className="pb-6">
                  <h3 className="text-base font-bold text-slate-900 leading-none mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 mb-2">
                    {description}
                  </p>
                  
                  {/* Dettaglio Tecnico (Badge) */}
                  {badge && (
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-slate-50 px-2 py-0.5 border border-slate-100">
                      <div className="h-1 w-1 rounded-full bg-blue-500" />
                      <span className="text-[11px] font-medium text-slate-600 italic">
                        {badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout finale compatto */}
        <div className="mt-6 flex items-start gap-3 rounded-lg bg-blue-50/50 p-4 border border-blue-100/50">
          <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed text-slate-600">
            <strong>Standard di Posa:</strong> Pulizia ambiente di lavoro inclusa al termine di ogni giornata.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ServiceDescription;