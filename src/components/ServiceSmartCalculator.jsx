import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Package, Layers, MessageCircle, Minus, Plus, Check, Trash2, Sofa, Lamp, DoorOpenIcon, DoorClosed, Send, SaveAllIcon, SaveIcon, LucideSave } from 'lucide-react';

// Definiamo gli Extra disponibili globalmente
const GLOBAL_EXTRAS = [
    { 
        id: 'furniture', 
        label: 'Spostamento Piccoli Mobili', 
        price: 50, 
        type: 'fixed',
        icon: Lamp,
        description: 'Gestione arredi stanza'
    },
    { 
        id: 'furniture-big', 
        label: 'Spostamento Grandi Mobili', 
        price: 150, 
        type: 'fixed',
        icon: Sofa,
        description: 'Gestione arredi stanza'
    },
    { 
        id: 'removal', 
        label: 'Rimozione Vecchio Battiscopa', 
        price: 3, 
        type: 'variable',
        icon: Trash2,
        description: 'Inclusa discarica'
    },
    { 
        id: 'skirting', 
        label: 'Posa nuovo Battiscopa', 
        price: 7, 
        type: 'variable',
        icon: Layers,
        description: 'Installazione nuovo battiscopa'
    },
    { 
        id: 'portaInterna', 
        label: 'Taglio porta interna', 
        price: 45, 
        type: 'fixed',
        icon: DoorOpenIcon,
        description: 'Adattamento altezza'
    },
     { 
        id: 'portaBlindata', 
        label: 'Taglio porta blindata', 
        price: 120, 
        type: 'fixed',
        icon: DoorClosed,
        description: 'Adattamento sicurezza'
    },
];

function ServiceScientificCalc({ serviceData }) {
    if (!serviceData) return null;

    // 1. Configurazioni
    const minVal = serviceData.calculator?.min || 10;
    const maxVal = serviceData.calculator?.max || 200;
    const defaultVal = serviceData.calculator?.defaultValue || 45;
    const step = serviceData.calculator?.step || 1;
    const basePrice = serviceData.pricePerMq;
    const unitLabel = serviceData.calculator?.label || 'mq';

    // Stato locale
    const [quantity, setQuantity] = useState(defaultVal);
    const [selectedExtras, setSelectedExtras] = useState([]);

    // Resetta lo stato se cambia il servizio
    useEffect(() => {
        setQuantity(serviceData.calculator?.defaultValue || 45);
        setSelectedExtras([]);
    }, [serviceData]);

    // --- LOGICA FILTRO EXTRA INTELLIGENTE ---
    const availableExtras = useMemo(() => {
        return GLOBAL_EXTRAS.filter(extra => {
            // Es. Se il servizio è battiscopa, nascondi l'extra battiscopa per evitare duplicati
            if (serviceData.id.includes('battiscopa') && extra.id === 'skirting') return false;
            return true;
        });
    }, [serviceData.id]);

    // --- LOGICA RAPID FIRE ---
    const timerRef = useRef(null);
    const intervalRef = useRef(null);

    const updateQuantity = (amount) => {
        setQuantity(prev => {
            const next = prev + amount;
            if (next > maxVal) return maxVal;
            if (next < minVal) return minVal;
            return next;
        });
    };

    const startChange = (amount) => {
        updateQuantity(amount);
        timerRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                updateQuantity(amount);
            }, 50); 
        }, 400); 
    };

    const stopChange = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const toggleExtra = (extraId) => {
        setSelectedExtras(prev => 
            prev.includes(extraId) ? prev.filter(id => id !== extraId) : [...prev, extraId]
        );
    };

    // --- CALCOLI FINALI ---
    const { totalCost, estimatedDays, extrasCost } = useMemo(() => {
        const base = quantity * basePrice;
        let extrasTotal = 0;
        selectedExtras.forEach(id => {
            const option = availableExtras.find(opt => opt.id === id);
            if (option) {
                extrasTotal += option.type === 'fixed' ? option.price : option.price * quantity;
            }
        });

        const days = Math.max(1, Math.ceil(quantity * (serviceData.timeFactorPerMq || 0.03)));
        
        return { totalCost: base + extrasTotal, estimatedDays: days, extrasCost: extrasTotal };
    }, [quantity, selectedExtras, basePrice, serviceData.timeFactorPerMq, availableExtras]);

    const percentage = ((quantity - minVal) / (maxVal - minVal)) * 100;

    // --- WHATSAPP & CONVERSION TRACKING ---
    const handleWhatsAppClick = (actionType) => {
        const extraNames = selectedExtras.map(id => availableExtras.find(o => o.id === id)?.label).join(', ');
        
        // Messaggio leggermente diverso in base al bottone cliccato (opzionale, ma utile per te)
        const intro = actionType === 'write' ? "Ciao! Vorrei maggiori informazioni su questo preventivo:" : "Ciao! Sto salvando questo preventivo:";

        const text = `👋 ${intro} *${serviceData.name}*\n` +
                     `📐 Quantità: ${quantity} ${unitLabel}\n` +
                     `💶 Prezzo Base: €${basePrice}/${unitLabel}\n` +
                     (extraNames ? `➕ Extra richiesti: ${extraNames}\n` : '') +
                     `💰 *TOTALE STIMATO: €${totalCost}*\n` +
                     `⏱ Tempo previsto: ~${estimatedDays} gg lavorativi`;
        
        // 1. TRACKING GOOGLE ADS (Per entrambi i pulsanti)
        if (typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion();
        }
        
        // 2. APERTURA WHATSAPP
        window.open(`https://wa.me/393342221212?text=${encodeURIComponent(text)}`, '_self');
    };

    return (
        <div className="w-full max-w-[440px] mx-auto mb-4 px-4 font-sans text-[#37352f]">
            
            {/* 1. TAG PREZZO BASE */}
            <div className="flex justify-center -mb-3 relative z-20">
                <span className="px-3 py-1 bg-[#eaf5f0] text-[#1e7e5a] text-sm font-medium italic rounded-md border border-dashed border-[#1e7e5a]/40 shadow-sm transform rotate-[-1deg]">
                     <span className='font-black'>€{basePrice} al {unitLabel} - Milano e dintorni</span>
                </span>
            </div>

            {/* CONTAINER CARD */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-[#E5E5E5] overflow-hidden relative z-10">
                
                {/* 2. ZONA INPUT QUANTITÀ */}
                <div className="p-8 pb-12">
                    <div className="flex flex-col items-center">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                           Inserisci i {unitLabel}
                        </span>

                        {/* CONTROLLI +/- */}
                        <div className="flex items-center justify-center gap-6 select-none w-full mb-8">
                            <button 
                                onMouseDown={() => startChange(-step)}
                                onMouseUp={stopChange}
                                onMouseLeave={stopChange}
                                onTouchStart={(e) => { e.preventDefault(); startChange(-step); }}
                                onTouchEnd={stopChange}
                                className="w-12 h-12 rounded-2xl bg-[#F7F7F5] border border-transparent hover:border-[#D4D4D4] flex items-center justify-center text-gray-500 active:scale-90 transition-all touch-none"
                            >
                                <Minus size={22} />
                            </button>

                            <div className="flex flex-col items-center w-32">
                                <span className="text-6xl font-black tracking-tighter tabular-nums text-[#37352f] leading-none">
                                    {quantity}
                                </span>
                                <span className="text-sm font-bold text-gray-400 mt-1 uppercase">{unitLabel}</span>
                            </div>

                            <button 
                                onMouseDown={() => startChange(step)}
                                onMouseUp={stopChange}
                                onMouseLeave={stopChange}
                                onTouchStart={(e) => { e.preventDefault(); startChange(step); }}
                                onTouchEnd={stopChange}
                                className="w-12 h-12 rounded-2xl bg-[#F7F7F5] border border-transparent hover:border-[#D4D4D4] flex items-center justify-center text-gray-500 active:scale-90 transition-all touch-none"
                            >
                                <Plus size={22} />
                            </button>
                        </div>

                        {/* SLIDER */}
                        <div className="w-full px-2 relative group">
                            <div className="h-4 bg-[#F0F0F0] rounded-full overflow-hidden shadow-inner">
                                <div 
                                    className="h-full bg-gradient-to-r from-[#1e7e5a] to-[#4ade80] transition-all duration-100 ease-out" 
                                    style={{ width: `${percentage}%` }} 
                                />
                            </div>
                            <input
                                type="range"
                                min={minVal}
                                max={maxVal}
                                step={step}
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer py-4" 
                            />
                            <div 
                                className="absolute w-8 h-8 bg-white border-[4px] border-[#1e7e5a] rounded-full shadow-md pointer-events-none top-1/2 -translate-y-1/2 transition-transform group-active:scale-110 flex items-center justify-center"
                                style={{ left: `calc(${percentage}% - 16px)` }}
                            >
                                <div className="w-2 h-2 bg-[#1e7e5a] rounded-full opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. ZONA OUTPUT TOTALE */}
                <div className="bg-[#37352f] text-white p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-6 -mt-3 bg-[#37352f] rounded-t-2xl"></div>
                    
                    <div className="flex flex-col items-center relative z-10">
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">
                            Totale Stimato
                        </span>
                        <div className="flex items-start justify-center leading-none">
                            <span className="text-2xl font-medium text-white/40 mr-1 mt-2">€</span>
                            <span className="text-[4.5rem] font-bold tracking-tighter tabular-nums">
                                {totalCost.toLocaleString()}
                            </span>
                        </div>
                        
                        <div className="mt-2 text-[9px] tracking-tight text-white/40 font-mono">
                            <p>per {quantity}{unitLabel} - ⏱ {estimatedDays} giorni di lavoro</p>
                        </div>
                    </div>
                </div>

                {/* 4. SEZIONE EXTRA + CTA DOPPIA */}
                <div className="bg-white shadow-[inset_0_4px_6px_-4px_rgba(0,0,0,0.1)] border-t border-[#37352f]/5 p-6">
                    <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest mb-4">
                     Servizi Opzionali
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {availableExtras.map((opt) => {
                            const isSelected = selectedExtras.includes(opt.id);
                            const displayCost = opt.type === 'fixed' ? opt.price : opt.price * quantity;
                            
                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => toggleExtra(opt.id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-200 active:scale-95
                                        ${isSelected 
                                            ? 'bg-[#EDF3EC] border-[#1e7e5a] text-[#1e7e5a] shadow-sm' 
                                            : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100 hover:border-gray-200'
                                        }
                                    `}
                                >
                                    {isSelected ? <Check size={14} strokeWidth={3} /> : <opt.icon size={14} className="opacity-70" />}
                                    <span>{opt.label}</span>
                                    <span className={`text-[10px] font-normal ml-0.5 ${isSelected ? 'text-[#1e7e5a]/70' : 'text-gray-400'}`}>
                                        (+€{displayCost})
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* --- DOPPIA CTA STILE HERO BRUTALISTA --- */}
                    <div className="flex flex-col gap-4">
                        
                        {/* 1. CTA PRINCIPALE (Scrivici) */}
                        <div className="flex flex-col items-center">
                            <button 
                                onClick={() => handleWhatsAppClick('write')}
                                className="
                                    group relative w-full inline-flex items-center justify-center gap-3
                                    bg-white border-[2.5px] border-slate-900 
                                    px-6 py-4 rounded-xl
                                    text-slate-900 font-black uppercase tracking-tighter
                                    transition-all duration-200
                                    shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]
                                    hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]
                                    hover:translate-x-1 hover:translate-y-1
                                    active:bg-gray-50
                                "
                            >
                                <div className="p-1.5 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                    <MessageCircle size={18} className="text-green-600" />
                                </div>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] text-green-600 font-bold mb-1 tracking-widest uppercase">Rispondiamo in 4 min</span>
                                    <span className="text-base md:text-lg italic">Contattaci su WhatsApp</span>
                                </div>
                            </button>
                            <span className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-tighter">Nessun obbligo di acquisto</span>
                        </div>

                        {/* 2. CTA SECONDARIA (Salva) — accenti gialli su base bianca */}
                        <div className="flex flex-col items-center">
                            <button 
                                onClick={() => handleWhatsAppClick('save')}
                                className="
                                    group relative w-full inline-flex items-center justify-center gap-3
                                    bg-white border-[2.5px] border-slate-900 
                                    px-6 py-3.5 rounded-xl
                                    text-slate-900 font-black uppercase tracking-tighter
                                    transition-all duration-200
                                    shadow-[6px_6px_0px_0px_rgba(245,158,11,0.5)]
                                    hover:shadow-[2px_2px_0px_0px_rgba(245,158,11,0.5)]
                                    hover:translate-x-1 hover:translate-y-1
                                    active:bg-gray-50
                                "
                            >
                                <div className="p-1.5 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                                    <LucideSave size={18} className="text-amber-600" />
                                </div>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] text-amber-600 font-bold mb-1 tracking-widest uppercase">Non perderlo</span>
                                    <span className="text-sm md:text-base italic">Salvalo su Whatsapp</span>
                                </div>
                            </button>
                            <span className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-tighter">Ti arriva in chat · Zero spam</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ServiceScientificCalc;