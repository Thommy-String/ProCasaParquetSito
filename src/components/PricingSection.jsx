import React, { useState, useMemo } from 'react';
import { pricingData } from '../utils/pricingData'; 
import { PHONE_NUMBER } from '../utils/constants';
import ProcessModal from './ProcessModal';
import PricingCard from './PricingCard'; 
import SummaryTable from './SummaryTable';
import ExtraServiceModal from './ExtraServiceModal'; // <--- IMPORTA IL NUOVO MODAL

// Importiamo Icone
import { 
  Layers, Wrench, LayoutGrid, PlusCircle, 
  Truck, Trash2, Disc, Paintbrush, Waves, Move, ShieldCheck
} from 'lucide-react';

// --- DEFINIZIONE DEGLI EXTRA CON DESCRIZIONI ---
const EXTRA_SERVICES = [
  // PREPARAZIONE
  { 
    id: 'ex_rip', name: 'Rimozione Vecchia Guaina', price: '8-15', unit: 'mq', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Rimozione meccanica della vecchia guaina bituminosa o membrana ammalorata. Include la pulizia grossolana del supporto prima della nuova applicazione."
  },
  { 
    id: 'ex_ras', name: 'Rasatura e Regolarizzazione Supporto', price: '12', unit: 'mq', isExtra: true, icon: <Waves className="w-5 h-5 text-blue-400" />,
    details: "Stesura di malta fibrorinforzata per colmare crepe, avvallamenti o irregolarità del piano prima dell'impermeabilizzazione. Fondamentale per garantire l'aderenza della guaina."
  },
  { 
    id: 'ex_prm', name: 'Primer / Promotore di Adesione', price: '5', unit: 'mq', isExtra: true, icon: <Paintbrush className="w-5 h-5 text-yellow-500" />,
    details: "Applicazione di primer bituminoso o epossidico sul supporto per garantire la massima adesione della guaina. Indispensabile su calcestruzzo vecchio o superfici polverose."
  },

  // RINFORZI
  { 
    id: 'ex_ang', name: 'Rinforzo Angoli e Raccordi', price: '20', unit: 'ml', isExtra: true, icon: <Disc className="w-5 h-5 text-gray-500" />,
    details: "Applicazione di striscia di rinforzo in tessuto non tessuto o membrana liquida doppio strato negli angoli, nei bordi e nei punti critici dove le infiltrazioni iniziano più frequentemente."
  },
  { 
    id: 'ex_scarico', name: 'Impermeabilizzazione Pluviali e Scarichi', price: '60', unit: 'cad.', isExtra: true, icon: <Move className="w-5 h-5 text-green-600" />,
    details: "Sigillatura e impermeabilizzazione di ogni punto di passaggio tra guaina e scarico/pluviale. Zona critica spesso trascurata che causa la maggior parte delle infiltrazioni."
  },

  // SISTEMI
  { 
    id: 'ex_prot', name: 'Strato Protettivo / Rifinitura', price: '10', unit: 'mq', isExtra: true, icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    details: "Applicazione di vernice protettiva UV o alluminata sulla guaina bituminosa per prolungarne la vita utile, proteggerla dai raggi solari e ridurre il surriscaldamento estivo."
  },
  { 
    id: 'ex_sma', name: 'Smaltimento Macerie', price: '60-150', unit: 'totale', isExtra: true, icon: <Truck className="w-5 h-5 text-orange-500" />,
    details: "Carico, trasporto e smaltimento dei materiali rimossi (vecchia guaina, massetto demolito) presso discariche autorizzate con rilascio del formulario rifiuti."
  },
  { 
    id: 'ex_test', name: 'Test Tenuta Idrica (Allagamento)', price: '80', unit: 'totale', isExtra: true, icon: <Wrench className="w-5 h-5 text-indigo-500" />,
    details: "Prova di tenuta idrica con allagamento controllato della superficie impermeabilizzata per 24/48 ore. Rilasciamo documentazione fotografica come garanzia del lavoro eseguito."
  },
];

const CATEGORIES = [
  { id: 'guaina', label: 'Guaina Bituminosa', icon: <Layers className="w-4 h-4"/> },
  { id: 'liquida', label: 'Membrana Liquida', icon: <Waves className="w-4 h-4"/> },
  { id: 'accessories', label: 'Accessori', icon: <Wrench className="w-4 h-4"/> },
  { id: 'extra', label: 'Servizi Extra', icon: <PlusCircle className="w-4 h-4"/> },
  { id: 'all', label: 'Tutti', icon: <LayoutGrid className="w-4 h-4"/> },
];

const getCategory = (service) => {
  const name = service.name.toLowerCase();
  if (name.includes('accessori') || name.includes('profilo') || name.includes('scarico')) return 'accessories';
  if (name.includes('liquida') || name.includes('resina') || name.includes('poliurea') || name.includes('membrana')) return 'liquida';
  return 'guaina';
};

function PricingSection({ defaultCategory = 'wood' }) {
  const [selectedService, setSelectedService] = useState(null); // Per i servizi standard (Calcolatore)
  const [selectedExtra, setSelectedExtra] = useState(null);     // Per gli extra (Popup info)
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const filteredData = useMemo(() => {
    if (activeCategory === 'extra') return EXTRA_SERVICES;
    if (activeCategory === 'all') return pricingData;
    return pricingData.filter(service => getCategory(service) === activeCategory);
  }, [activeCategory]);

  // Gestore click unificato
  const handleRowClick = (item) => {
    if (item.isExtra) {
      // Se è extra apre il nuovo modal
      setSelectedExtra(item);
    } else {
      // Se è standard scorre alla card
      setTimeout(() => {
        const element = document.getElementById(`card-${item.id}`);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Listino prezzi impermeabilizzazioni 2026
          </h2>
          <p className="text-gray-500">
            Scegli il sistema per vedere i costi dettagliati.
          </p>
        </div>

        {/* MENU FILTRI */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center bg-gray-200/60 p-1.5 rounded-2xl gap-2 backdrop-blur-md"> 
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ease-out
                    ${isActive 
                      ? 'bg-white text-gray-900 shadow-md transform scale-[1.02]' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'}
                  `}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TABELLA RIASSUNTIVA */}
        <SummaryTable 
            data={filteredData} 
            onRowClick={handleRowClick} 
        />

        {/* GRIGLIA CARD (Solo standard) */}
        {activeCategory !== 'extra' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((service) => (
               <div id={`card-${service.id}`} key={service.id}>
                  <PricingCard 
                    service={service} 
                    onShowProcessClick={setSelectedService} 
                  />
               </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
             <p className="text-gray-400 text-sm">
               Clicca sulle voci sopra per vedere i dettagli di ogni lavorazione extra.
             </p>
          </div>
        )}

      </div>

      {/* MODAL SERVIZI STANDARD (Calcolatore) */}
      <ProcessModal service={selectedService} onClose={() => setSelectedService(null)} />

      {/* MODAL SERVIZI EXTRA (Info) */}
      <ExtraServiceModal service={selectedExtra} onClose={() => setSelectedExtra(null)} />

    </section>
  );
}

export default PricingSection;