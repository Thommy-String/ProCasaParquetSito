import React, { useState } from 'react';


// --- IMPORT DELLE IMMAGINI ---
// Assegna un nome a piacere a ogni immagine (es. spcPrima, spcDopo, ecc.)

// Lavoro 1

import rovereIta from '../assets/images/parquet/rovereIta.png';

// Lavoro 2
import roverePrima from '../assets/images/primaDopoLavori/prima2.jpg';
import rovereDopo from '../assets/images/primaDopoLavori/dopo2.jpg';

// Lavoro 3 (Solo Dopo)
import roverePrima3 from '../assets/images/primaDopoLavori/prima3.jpg';
import rovereDopo3  from '../assets/images/primaDopoLavori/dopo3.jpg';

//Lavoro 4
import rovereNaturaleDritto  from '../assets/images/parquet/rovereNaturale.png';

//lavoro 5
import spcSpinaPrima5  from '../assets/images/primaDopoLavori/prima5.jpg';
import spcSpinaDopo5  from '../assets/images/primaDopoLavori/dopo5.webp';

//Lavoro 6
import spinaFrancese  from '../assets/images/parquet/spinaFraRovereNaturale.webp';

// --- DATI ---
const works = [
    {
        id: 1,
        title: 'SPC - spina Italiana 90°',
        location: 'in Provincia di Milano',
        sqm: 71,
        price: 1562,
        time: '2 giorni',
        description: 'Montaggio SPC/LVT a incastro click con materassino integrato in appartamento con mobili presenti. Abbiamo posato su mattonelle esistenti e applicato dell\'autolivellante in alcuni punti di dislivello critici. In cucina abbiamo abbiamo spostato e posato sotto l\'isola della cucina.',
        imageAfter: spcSpinaDopo5,
        imageBefore: spcSpinaPrima5,
        review: { text: "Super precisi, il parquet è stupendo e la cucina è proprio come la volevo! Bravo Andrea il parquettista!", avatar: "https://i.pravatar.cc/150?u=13" }
    },
     {
        id: 2,
        title: 'Prefinito flottante: senza colla ',
        location: 'Navigli - MILANO',
        sqm: 91,
        price: 2002,
        time: '3 giorni',
        description: ' Montaggio senza colla direttamente sulle mattonelle in buono stato esistenti tramite materassino isolante fornito dal cliente. Il parquet è rovere a tre strati da 14mm di spessore.',
        imageAfter: rovereDopo,
        imageBefore: roverePrima,
        review: { text: "Molto soddisfatta trovati su Google. Tempi previsti di 3 giorni rispettati. Volevamo installare senza colla per facilità di rimozone in futuro.", avatar: "https://i.pravatar.cc/150?u=25" }
    },
    {
        id: 3,
        title: 'Prefinito dritto',
        location: 'Porta Nuova - Milano',
        sqm: 44,
        price: 1628,
        time: '9 ore',
        description: 'Montaggio con collante fornito dal cliente, di parquet rovere mielato largo 19cm su massetto. Sotto presente anche sistema di riscaldamento a pavimento.',
        imageAfter: rovereNaturaleDritto,
        imageBefore: null,
        review: { text: "Avevo acquistato il parquet e mi serviva un parquettista su Milano. Sono stato fortunato a trovare loro. Consiglio.", avatar: "https://i.pravatar.cc/150?u=19" }
    },
    {
        id: 4,
        title: 'SPC a incastro click',
        location: 'Studi - Milano',
        sqm: 74,
        price: 1310,
        time: '3 giorni',
        description: 'Montaggio SPC da 6mm di spessore con materassino integrato su mattonelle gres esistenti. Abbiamo dovuto spostare i mobili presenti nell\'appartamento abitato. Foto curate come da rivista realizzate e ritoccate dal nostro fotografo Matteo Versoni.',
        imageAfter: rovereDopo3,
        imageBefore: roverePrima3,
        review: { text: "Posato a regola d'arte. Perfetto per questo appartamento in affitto.", avatar: "https://i.pravatar.cc/150?u=21" }
    },
   
    {
        id: 5,
        title: 'Prefinito Spina Italiana',
        location: 'Calvairate - MILANO',
        sqm: 65,
        price: 2405,
        time: '2 giorni',
        description: 'Montaggio con collante fornito da noi, di parquet rovere naturale a spina Italiana largo 9cm su nuovo massetto in un appartamento appena ristrutturato. Sotto presente anche sistema di riscaldamento a pavimento.',
        imageAfter: rovereIta,
        imageBefore: null,
        review: { text: "Risultato eccellente e ragazzi trasparenti dall'inizio alla fine, educati!", avatar: "https://i.pravatar.cc/150?u=41" }
    },
    {
        id: 6,
        title: 'Prefinito Spina Francese',
        location: 'Cerro Maggiore - Milano',
        sqm: 53,
        price: 1855,
        time: '3 giorni',
        description: 'Montaggio con collante fornito dal cliente, di parquet a due strati: rovere naturale a spina Francese largo 9cm su marmo. Eseguita anche graffiatura con disco diamantato sul marmo per promuovere adesione al nuovo parquet.',
        imageAfter: spinaFrancese,
        imageBefore: null,
        review: { text: "Bravi esperienza positiva...", avatar: "https://i.pravatar.cc/150?u=46" }
    },
    
    
];

const formatPrice = (p) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p);

// --- COMPONENTE CARD ---
const MinimalCard = ({ work }) => {
    const [showBefore, setShowBefore] = useState(false);
    const hasBeforeImage = work.imageBefore && work.imageBefore.trim() !== '';

    return (
        <div className="
            snap-center flex-shrink-0 
            w-[80vw] md:w-full 
            bg-white rounded-[24px] overflow-hidden 
            border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300
            flex flex-col
        ">
        {/* MODIFICA FATTA SOPRA:
            - w-[80vw] (invece di 85vw) permette di vedere meglio la card successiva.
            - snap-center mantiene l'effetto di centratura piacevole mentre scorri.
        */}

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
                        <span className="text-xs font-bold tracking-wide whitespace-nowrap">
                            {showBefore ? 'VEDI RISULTATO' : "VEDI COM'ERA"}
                        </span>
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
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {work.description}
                    </p>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-3 border-t border-gray-50">
                    <div className="relative flex-shrink-0">
                        <img src={work.review.avatar} alt="Client" className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                    </div>
                    <p className="text-xs text-gray-600 italic leading-snug">
                        "{work.review.text}"
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- MAIN SECTION ---
function RecentWorks() {
    return (
        <section className="bg-gray-50 pt-12 pb-0 md:pt-20 md:pb-8">
            <div className="container mx-auto px-4">

               

                {/* MODIFICA IMPORTANTE QUI SOTTO:
                   - Rimossa classe 'justify-center'.
                   - Ora le card partono da sinistra.
                   - Su desktop (md e lg) il grid gestisce tutto, quindi nessun problema.
                */}
                <div className="
                    flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 
                    md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0
                    scrollbar-hide 
                ">
                    {works.map((work) => <MinimalCard key={work.id} work={work} />)}
                </div>

            </div>
        </section>
    );
}

export default RecentWorks;