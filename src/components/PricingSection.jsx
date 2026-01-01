import React, { useState, useMemo } from 'react';
import { pricingData } from '../utils/pricingData'; 
import { PHONE_NUMBER } from '../utils/constants';
import ProcessModal from './ProcessModal';
import PricingCard from './PricingCard'; 
import SummaryTable from './SummaryTable';
import ExtraServiceModal from './ExtraServiceModal'; // <--- IMPORTA IL NUOVO MODAL

// Importiamo Icone
import { 
  Trees, Layers, Wrench, LayoutGrid, PlusCircle, 
  Truck, Armchair, Trash2, Disc, Paintbrush, Waves, Scissors, DoorOpen, Move 
} from 'lucide-react';

// --- DEFINIZIONE DEGLI EXTRA CON DESCRIZIONI ---
const EXTRA_SERVICES = [
  // LOGISTICA
  { 
    id: 'ex_mob', name: 'Spostamento Mobili', price: '50-200', unit: 'stanza', isExtra: true, icon: <Armchair className="w-5 h-5 text-indigo-500" />,
    details: "Spostiamo noi i mobili pesanti (armadi, divani, librerie) per liberare la stanza prima della posa e li rimettiamo al loro posto a lavoro finito. Il costo varia in base alla quantità e al peso degli arredi."
  },
  { 
    id: 'ex_sma', name: 'Smaltimento Macerie', price: '150', unit: 'viaggio', isExtra: true, icon: <Truck className="w-5 h-5 text-orange-500" />,
    details: "Ci occupiamo del carico, trasporto e smaltimento del vecchio pavimento o battiscopa presso discariche autorizzate, rilasciando il formulario rifiuti. Zero polvere e zero fatica per te."
  },

  // RIMOZIONI (Correggi ID unici qui sotto)
  { 
    id: 'ex_bat_rem', name: 'Rimozione Battiscopa', price: '3', unit: 'ml', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Stacchiamo il vecchio zoccolino esistente con cura per non rovinare l'intonaco. Necessario per posare il nuovo pavimento accostato correttamente al muro."
  },
  { 
    id: 'ex_moq', name: 'Rimozione Moquette', price: '7', unit: 'mq', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Rimuoviamo la vecchia moquette e raschiamo via i residui di colla superficiali per preparare il fondo alla nuova posa."
  },
  { 
    id: 'ex_prq_old', name: 'Rimozione Vecchio Parquet', price: '9', unit: 'mq', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Demolizione del vecchio parquet incollato o inchiodato. Include la pulizia grossolana del sottofondo."
  },
  { 
    id: 'ex_pia', name: 'Rimozione Piastrelle', price: '15', unit: 'mq', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Demolizione completa di pavimenti in ceramica o gres. Attenzione: questa operazione richiede quasi sempre un successivo rifacimento del massetto o autolivellante."
  },
  { 
    id: 'ex_mar', name: 'Rimozione Marmo / Granito', price: '18', unit: 'mq', isExtra: true, icon: <Trash2 className="w-5 h-5 text-red-400" />,
    details: "Rimozione di pavimentazioni in pietra naturale. Operazione rumorosa e polverosa, consigliata solo se strettamente necessaria per problemi di quote."
  },

  // PREPARAZIONE
  { 
    id: 'ex_grf', name: 'Graffiatura (Promotore)', price: '5', unit: 'mq', isExtra: true, icon: <Disc className="w-5 h-5 text-gray-500" />,
    details: "Passaggio con monospazzola e disco diamantato o abrasivo per irruvidire la superficie di ceramiche lisce o marmi. Fondamentale per far aggrappare la colla del nuovo parquet."
  },
  { 
    id: 'ex_liv', name: 'Autolivellante (Rasatura)', price: '18', unit: 'mq', isExtra: true, icon: <Waves className="w-5 h-5 text-blue-400" />,
    details: "Stesura di un composto liquido cementizio che si autolivella per eliminare dislivelli, buchi o pendenze errate. A volte indispensabile per la posa di SPC o formati grandi."
  },
  { 
    id: 'ex_prm', name: 'Primer Promotore', price: '7', unit: 'mq', isExtra: true, icon: <Paintbrush className="w-5 h-5 text-yellow-500" />,
    details: "Applicazione di una resina liquida che funge da 'ponte di adesione' tra il vecchio fondo e la nuova colla. Blocca anche eventuale polverosità residua."
  },

  // ADATTAMENTI
  { 
    id: 'ex_tgi', name: 'Taglio Porte Interne', price: '30', unit: 'cad.', isExtra: true, icon: <Scissors className="w-5 h-5 text-gray-600" />,
    details: "Accorciamo le porte in legno esistenti (senza smontare il telaio se possibile) per adattarle al nuovo livello del pavimento sovrapposto."
  },
  { 
    id: 'ex_tgb', name: 'Taglio Blindata', price: '180', unit: 'cad.', isExtra: true, icon: <DoorOpen className="w-5 h-5 text-gray-800" />,
    details: "Smontaggio della porta blindata, taglio della lamiera e dei pannelli, rimontaggio e regolazione. Operazione complessa e delicata eseguita da un nostro parquettista specializzato."
  },
  { 
    id: 'ex_prf', name: 'Profili e Soglie', price: '25', unit: 'cad.', isExtra: true, icon: <Move className="w-5 h-5 text-green-600" />,
    details: "Installazione di profili di raccordo in alluminio (o colore simile al legno) in corrispondenza delle porte o cambi di pavimentazione."
  },
];

const CATEGORIES = [
  { id: 'wood', label: 'Parquet', icon: <Trees className="w-4 h-4"/> },
  { id: 'synthetic', label: 'SPC / LVT', icon: <Layers className="w-4 h-4"/> },
  { id: 'accessories', label: 'Accessori', icon: <Wrench className="w-4 h-4"/> },
  { id: 'extra', label: 'Servizi Extra', icon: <PlusCircle className="w-4 h-4"/> },
  { id: 'all', label: 'Tutti', icon: <LayoutGrid className="w-4 h-4"/> },
];

const getCategory = (service) => {
  const name = service.name.toLowerCase();
  if (name.includes('battiscopa') || name.includes('accessori')) return 'accessories';
  if (name.includes('spc') || name.includes('laminato') || name.includes('lvt')) return 'synthetic';
  return 'wood';
};

function PricingSection() {
  const [selectedService, setSelectedService] = useState(null); // Per i servizi standard (Calcolatore)
  const [selectedExtra, setSelectedExtra] = useState(null);     // Per gli extra (Popup info)
  const [activeCategory, setActiveCategory] = useState('wood');

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
            Listino Trasparente
          </h2>
          <p className="text-gray-500">
            Scegli la categoria per vedere i costi dettagliati.
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