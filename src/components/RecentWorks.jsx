import React, { useState, useMemo } from 'react';

// --- IMPORT DELLE IMMAGINI ---
import rovereIta from '../assets/images/parquet/rovereIta.jpg';
import roverePrima from '../assets/images/primaDopoLavori/prima2.jpg';
import rovereDopo from '../assets/images/primaDopoLavori/dopo2.jpg';
import roverePrima3 from '../assets/images/primaDopoLavori/prima3.jpg';
import rovereDopo3 from '../assets/images/primaDopoLavori/dopo3.jpg';
import rovereNaturaleDritto from '../assets/images/parquet/rovereNaturale.jpg';
import rovereNoce from '../assets/images/primaDopoLavori/prefinitoNoce.jpg';
import rovereNaturale from '../assets/images/primaDopoLavori/rovereNaturaleDritto.jpeg';
import rovereChiaro from '../assets/images/primaDopoLavori/rovereChiaro.jpg';
import prefinitoDrittoRovere from '../assets/images/primaDopoLavori/prefinitoDrittoRovere.jpg';
import rovereFlottante from '../assets/images/primaDopoLavori/rovereFlottante.webp';
import prefinitoFlottanteLargo from '../assets/images/primaDopoLavori/prefinitoFlottanteLargo.webp';
import rovereSpinaItaMobili from '../assets/images/primaDopoLavori/rovereSpinaItaMobili.webp';
import posaSpinaUngherese from '../assets/images/primaDopoLavori/posaSpinaUngherese.jpg';

import spcSpinaPrima5 from '../assets/images/primaDopoLavori/prima5.jpg';
import spcSpinaDopo5 from '../assets/images/primaDopoLavori/dopo5.webp';
import montaggioSPCRovere from '../assets/images/primaDopoLavori/montaggioSPCRovere.jpg';
import BeaDopo from '../assets/images/primaDopoLavori/BeaDopo.jpeg';
import BeaPrima from '../assets/images/primaDopoLavori/BeaPrima.jpeg';

import spinaFrancese from '../assets/images/parquet/spinaFraRovereNaturale.webp';

import laminatoGrigio from '../assets/images/primaDopoLavori/laminatoGrigio.jpg';
import laminatoNoce from '../assets/images/primaDopoLavori/laminatoNoce.jpg';
import laminatoRovereChiaro from '../assets/images/primaDopoLavori/laminatoRovereChiaro.jpg';

// --- DATI DEI LAVORI CON CATEGORIE ---
const works = [
    {
        id: 2,
        category: 'prefinito-flottante',
        title: 'Prefinito flottante: senza colla',
        location: 'Navigli - MILANO',
        sqm: 91,
        price: 2002,
        time: '3 giorni',
        description: 'Montaggio senza colla direttamente sulle mattonelle in buono stato esistenti tramite materassino isolante fornito dal cliente. Il parquet è rovere a tre strati da 14mm di spessore.',
        imageAfter: rovereDopo,
        imageBefore: roverePrima,
        review: { text: "Molto soddisfatta trovati su Google. Tempi previsti di 3 giorni rispettati.", avatar: "https://i.pravatar.cc/150?u=25" }
    },
    {
        id: 3,
        category: 'prefinito',
        title: 'Prefinito dritto',
        location: 'Porta Nuova - Milano',
        sqm: 44,
        price: 1628,
        time: '9 ore',
        description: 'Montaggio con collante di parquet rovere mielato largo 19cm su massetto. Sotto presente anche sistema di riscaldamento a pavimento.',
        imageAfter: rovereNaturaleDritto,
        imageBefore: null,
        review: { text: "Avevo acquistato il parquet e mi serviva un parquettista su Milano. Consiglio.", avatar: "https://i.pravatar.cc/150?u=19" }
    },
    {
        id: 19,
        category: 'spc',
        title: 'Nuovo ambiente in SPC',
        location: 'Milano - Sesto San Giovanni',
        sqm: 10,
        price: 430,
        time: '5 ore',
        description: 'Posa SPC in cucina su mattonella esistente. Abbiamo fatto prima una rapida pulizia generale del fondo prima di iniziare, stesto il materassino che non era integrato nell\' SPC, e infine posato il nuovo pavimento direttamente sopra quello esistente.',
        imageAfter: BeaDopo,
        imageBefore: BeaPrima,
        review: { text: "Professionalità, precisione e grande attenzione ai dettagli. Il lavoro è stato eseguito con cura impeccabile, rispettando tempi e aspettative. Il risultato finale ha valorizzato gli ambienti, superando le nostre aspettative. Consigliato a chi cerca un parquettista affidabile e di alta qualità. Grazie mille Andrea e Thomas!", avatar: "https://ui-avatars.com/api/?name=B&background=0D8ABC&color=fff" }
    },
    {
        id: 1,
        category: 'spc',
        title: 'Posa SPC a Spina Italiana',
        location: 'in Provincia di Milano',
        sqm: 71,
        price: 1562,
        time: '2 giorni',
        description: 'Montaggio SPC/LVT a incastro click con materassino integrato in appartamento con mobili presenti. Abbiamo posato su mattonelle esistenti e applicato dell\'autolivellante in alcuni punti di dislivello critici.',
        imageAfter: spcSpinaDopo5,
        imageBefore: spcSpinaPrima5,
        review: { text: "Super precisi, il parquet è stupendo e la cucina è proprio come la volevo! Bravo Andrea il parquettista!", avatar: "https://i.pravatar.cc/150?u=13" }
    },
    {
        id: 10,
        category: 'spc',
        title: 'SPC a incastro click',
        location: 'Milano - Provincia',
        sqm: 57,
        price: 1255,
        time: '3 giorni',
        description: 'Montaggio SPC da 5mm di spessore con materassino integrato su pavimento esistente + installazione battiscopa bianco ducale. Nell\'appartamento erano presenti vari mobili che abbiamo dovuto spostare mano mano.',
        imageAfter: montaggioSPCRovere,
        review: { text: "Puliti e puntuali dal primo preventivo all'ultimo giorno di montaggio. Molto contento.", avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=g" }
    },
    {
        id: 4,
        category: 'spc',
        title: 'SPC a incastro click',
        location: 'Studi - Milano',
        sqm: 74,
        price: 1410,
        time: '3 giorni',
        description: 'Montaggio SPC da 6mm di spessore con materassino integrato su mattonelle gres esistenti. Abbiamo dovuto spostare i mobili presenti.',
        imageAfter: rovereDopo3,
        imageBefore: roverePrima3,
        review: { text: "Posato a regola d'arte. Perfetto per questo appartamento in affitto.", avatar: "https://i.pravatar.cc/150?u=21" }
    },
    
    {
        id: 5,
        category: 'prefinito-spina',
        title: 'Prefinito Spina Italiana',
        location: 'Calvairate - MILANO',
        sqm: 65,
        price: 2405,
        time: '2 giorni',
        description: 'Montaggio con collante di parquet rovere naturale a spina Italiana largo 9cm su nuovo massetto.',
        imageAfter: rovereIta,
        imageBefore: null,
        review: { text: "Risultato eccellente e ragazzi trasparenti dall'inizio alla fine, educati!", avatar: "https://i.pravatar.cc/150?u=41" }
    },
    {
        id: 6,
        category: 'prefinito-spina',
        title: 'Prefinito Spina Francese',
        location: 'Cerro Maggiore - Milano',
        sqm: 53,
        price: 1855,
        time: '3 giorni',
        description: 'Montaggio di parquet a due strati: rovere naturale a spina Francese largo 9cm su marmo. Eseguita anche graffiatura con disco diamantato.',
        imageAfter: spinaFrancese,
        imageBefore: null,
        review: { text: "Bravi esperienza positiva...", avatar: "https://i.pravatar.cc/150?u=46" }
    },
    {
        id: 7,
        category: 'laminato',
        title: 'Laminato grigio',
        location: 'Milano Provincia',
        sqm: 87,
        price: 1405,
        time: '3 giorni',
        description: 'Montaggio laminato da 12mm di spessore colore grigio su materassino fonoassorbente e isolante. Eseguito anche livellamento di alcuni punti critici con autilivellante',
        imageAfter: laminatoGrigio,
        imageBefore: null,
        review: { text: "Proprio come lo volevamo. Bravi.", avatar: "https://i.pravatar.cc/150?u=500" }
    },
    {
        id: 8,
        category: 'laminato',
        title: 'Laminato noce',
        location: 'Milano Centro',
        sqm: 46,
        price: 700,
        time: '8 ore',
        description: 'Montaggio in un piccolo appartamento di Milano di un parquet laminato da 10mm di spessore su nuovo massetto sopra materassino fonoassorbente e isolante. Nessun mobile presente quindi il lavoro è stato più veloce. Battiscopa bianco ducale in perfetto abbinamento al parquet noce.',
        imageAfter: laminatoNoce,
        imageBefore: null,
        review: { text: "5 stelle", avatar: "https://ui-avatars.com/api/?name=M&background=0D8ABC&color=fff" }
    },
    {
        id: 9,
        category: 'laminato',
        title: 'Laminato rovere chiaro',
        location: 'Milano',
        sqm: 51,
        price: 1250,
        time: '8 ore',
        description: 'Montaggio in un appartamento abitato di un parquet laminato da 12mm di spessore su pavimento esistente tramite materassino fonoassorbente e isolante. Molti mobili presenti tra cui divani e armadi, che hanno rallentato il ritmo di posa. Risultato eccellente!',
        imageAfter: laminatoRovereChiaro,
        imageBefore: null,
        review: { text: "La mia paura era il fatto di vivere in casa e avere tutti i mobili in mezzo, ma non sopprtavo più il vecchio pavimento preistorico. Sono molto contenta del risultato finale. Consiglio", avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Mario" }
    },
    {
        id: 11,
        category: 'prefinito',
        title: 'Prefinito Rovere',
        location: '1 ora da Milano',
        sqm: 66,
        price: 1750,
        time: '3 giorni',
        description: 'Posa con collante di parquet rovere naturale largo 19cm su massetto. Nessun mobile presente e nessun autolivellante necessario.',
        imageAfter: rovereNaturale,
        review: { text: "Ottimo lavoro Andrea e Massimiliano.", avatar: "https://ui-avatars.com/api/?name=GP&background=0D8ABC&color=fff" }
    },
    {
        id: 12,
        category: 'prefinito',
        title: 'Prefinito Noce',
        location: 'Provincia di milano ',
        sqm: 110,
        price: 2820,
        time: '5 giorni',
        description: 'Montaggio con collante di parquet rovere tinto noce largo 15cm su massetto. Nessun mobile presente e nessuna lavorazione di livellamento per il massetto necessaria.',
        imageAfter: rovereNoce,
        review: { text: "Prezzi e tempi chiari, lavorerò sicuramente ancora e consiglio ad amici.", avatar: "https://ui-avatars.com/api/?name=AF&background=0D8ABC&color=fff" }
    },
    {
        id: 13,
        category: 'prefinito',
        title: 'Prefinito Chiaro',
        location: 'Provincia di milano ',
        sqm: 38,
        price: 1786,
        time: '3 giorni',
        description: 'Posa parquet prefinito da 10mm di spessore su pavimento esistente, previa graffiatura con disco diamantato e promotore di adesione (primer) + autolivellante',
        imageAfter: rovereChiaro,
        review: { text: "Qualche lavorazione in più necessaria come livellaggio e graffiatura ma il pavimento sotto era storto, ho fatto la cosa giusta.", avatar: "https://i.pravatar.cc/150?u=20" }
    },
    {
        id: 14,
        category: 'prefinito',
        title: 'Prefinito rovere senza nodi',
        location: '2 ore da Milano',
        sqm: 79,
        price: 3250,
        time: '4 giorni',
        description: 'Posa parquet prefinito da 12mm di spessore su pavimento esistente, previa graffiatura con disco diamantato e promotore di adesione (primer) + autolivellante',
        imageAfter: prefinitoDrittoRovere,
        review: { text: "Pavimento rinato senza togliere quello sotto. Risultato impeccabile, caldo, accogliente...", avatar: "https://ui-avatars.com/api/?name=A&background=0D8ABC&color=fff" }
    },
     {
        id: 15,
        category: 'prefinito-flottante',
        title: 'Prefinito rovere senza colla',
        location: '2 ore da Milano',
        sqm: 68,
        price: 3250,
        time: '2 giorni',
        description: 'Posa parquet prefinito da 14mm di spessore su pavimento esistente, con materassino fornito dal cliente.',
        imageAfter: rovereFlottante,
        review: { text: "Soluzione comoda senza togliere il pavimento esistente. Bravi!", avatar: "https://ui-avatars.com/api/?name=A&background=0D8ABC&color=fff" }
    },
    {
        id: 16,
        category: 'prefinito-flottante',
        title: 'Prefinito flottante largo',
        location: 'Milano - Provincia',
        sqm: 120,
        price: 2650,
        time: '4 giorni',
        description: 'Posa parquet prefinito plancia larga con 15mm di spessore su pavimento esistente perfettamente livellato, con materassino fornito dal cliente. Nessuna lavorazione extra necessaria.',
        imageAfter: prefinitoFlottanteLargo,
        review: { text: "Velocissimi nelle risposte sempre disponibili. Il nuovo parquet è stupendo.", avatar: "https://ui-avatars.com/api/?name=MD&background=0D8ABC&color=fff" }
    },
    {
        id: 17,
        category: 'prefinito-spina',
        title: 'Prefinito spina Italiana',
        location: 'Milano - Provincia',
        sqm: 32,
        price: 1184,
        time: '1 giorno',
        description: 'Montaggio su massetto ben livellato di un parquet prefinito rovere da 10mm di spessore. Nessun mobile presente al momento del montaggio e nessuna lavorazione extra necessaria oltre il promotore primer.',
        imageAfter: rovereSpinaItaMobili,
        review: { text: "Un ringraziamento a tutta la squadra preparata e puntuale. Trovati su Google.", avatar: "https://ui-avatars.com/api/?name=PL&background=0D8ABC&color=fff" }
    },
    {
        id: 18,
        category: 'prefinito-spina',
        title: 'Prefinito spina Ungherese',
        location: 'Milano',
        sqm: 68,
        price: 2516,
        time: '3 giorni',
        description: 'Posa spina formato ungherese da 10mm di spessore su massetto nuovo esistente ben livellato. Abbiamo prima passato il primer per una adesione impeccabile. ',
        imageAfter: posaSpinaUngherese,
        review: { text: "Mi ritengo soddisfatto ad aver affidato a loro l'installazione del mio parquet. Ottimo lavoro.", avatar: "https://ui-avatars.com/api/?name=GV&background=0D8ABC&color=fff" }
    },
];

const formatPrice = (p) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p);

const filterCategories = {
    'all': 'Tutti',
    'prefinito': 'Prefinito',
    'prefinito-flottante': 'Flottante',
    'prefinito-spina': 'Spina',
    'spc': 'SPC',
    'laminato': 'Laminato'
};

// --- COMPONENTE CARD ---
const MinimalCard = ({ work }) => {
    const [showBefore, setShowBefore] = useState(false);
    const hasBeforeImage = work.imageBefore && work.imageBefore.trim() !== '';

    return (
        <div className="snap-center flex-shrink-0 w-[80vw] md:w-full bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* FOTO */}
            <div className="relative h-[280px] w-full bg-gray-100 overflow-hidden group">
                <img
                    src={(hasBeforeImage && showBefore) ? work.imageBefore : work.imageAfter}
                    alt={work.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${showBefore ? 'scale-100 grayscale-[10%]' : 'scale-105'}`}
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm border border-white/20">
                        {work.location}
                    </span>
                </div>
                {hasBeforeImage && (
                    <button
                        onClick={() => setShowBefore(!showBefore)}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white text-gray-800 px-5 py-2 rounded-full shadow-lg border border-gray-100 active:scale-95 transition-all z-10"
                    >
                        <svg className={`w-4 h-4 ${showBefore ? 'text-amber-500' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        <span className="text-xs font-bold tracking-wide whitespace-nowrap">{showBefore ? 'VEDI RISULTATO' : "VEDI COM'ERA"}</span>
                    </button>
                )}
            </div>

            {/* DATI TECNICI */}
            <div className="flex border-b border-gray-100 divide-x divide-gray-100 bg-white">
                <div className="flex-1 py-3 text-center">
                    <span className="block text-[10px] text-gray-400 uppercase font-medium">Tempo</span>
                    <span className="block text-sm font-bold text-gray-800">{work.time}</span>
                </div>
                <div className="flex-1 py-3 text-center">
                    <span className="block text-[10px] text-gray-400 uppercase font-medium">Area</span>
                    <span className="block text-sm font-bold text-gray-800">{work.sqm} mq</span>
                </div>
                <div className="flex-1 py-3 text-center bg-blue-50/30">
                    <span className="block text-[10px] text-blue-400 uppercase font-medium">Costo</span>
                    <span className="block text-sm font-bold text-blue-600">{formatPrice(work.price)}</span>
                </div>
            </div>

            {/* INFO & RECENSIONE */}
            <div className="p-5 flex flex-col gap-4 flex-grow">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{work.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{work.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-3 border-t border-gray-50">
                    <img src={work.review.avatar} alt="Client" loading="lazy" className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                    <p className="text-xs text-gray-600 italic leading-snug">"{work.review.text}"</p>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPALE DINAMICO ---
function RecentWorks({ service, category, title, showFilter = false }) {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredWorks = useMemo(() => {
        // Logica per la Home Page con i filtri
        if (showFilter) {
            const sortedWorks = [...works].sort((a, b) => b.id - a.id);
            if (activeCategory === 'all') {
                return sortedWorks;
            }
            if (activeCategory === 'prefinito') {
                 return sortedWorks.filter(w => w.category.startsWith('prefinito'));
            }
            return sortedWorks.filter(w => w.category === activeCategory);
        }

        // Logica esistente per le pagine servizio
        if (category) {
            return works.filter(w => w.category === category);
        }

        const type = service?.pricingId || "";
        if (type.includes('spc')) return works.filter(w => w.category === 'spc');
        if (type.includes('laminato')) return works.filter(w => w.category === 'laminato');
        if (type.includes('prefinito')) {
            if (type === 'prefinito') {
                return works.filter(w => w.category.startsWith('prefinito'));
            }
            return works.filter(w => w.category === type);
        }

        // Fallback di sicurezza (mantiene il vecchio comportamento se nessuna condizione è soddisfatta)
        return [...works].sort((a, b) => b.id - a.id).slice(0, 6);

    }, [service, category, showFilter, activeCategory]);

    const displayTitle = title || (service ? `I nostri lavori: ${service.navLabel}` : "Costi reali di lavori finiti.");

    if (filteredWorks.length === 0) return null;

    return (
        <section className="bg-gray-50 pt-12 pb-12 md:pt-20 md:pb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-center uppercase tracking-tighter">
                    {displayTitle}
                </h2>

                {/* Filtri visibili solo in homepage */}
                {showFilter && (
                    <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-10">
                        {Object.entries(filterCategories).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-200 shadow-sm
                                    ${activeCategory === key
                                        ? 'bg-slate-900 text-white scale-105 shadow-lg'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}

                <div className="
                    flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 
                    md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0
                    scrollbar-hide 
                ">
                    {filteredWorks.map((work) => <MinimalCard key={work.id} work={work} />)}
                </div>
            </div>
        </section>
    );
}

export default RecentWorks;