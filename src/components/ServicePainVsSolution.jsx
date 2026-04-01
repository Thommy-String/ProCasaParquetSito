import React from 'react';
import { ArrowRight, Calculator, X, Check } from 'lucide-react';

// --- Mappa dei nomi prodotti per ogni servizio ---
const PRODUCT_NAME_MAP = {
  'spc': 'SPC',
  'laminato': 'Laminato',
  'prefinito': 'Prefinito',
  'prefinito-flottante': 'Flottante',
  'prefinito-spina': 'Spina',
  'battiscopa': 'Battiscopa',
  'scala-parquet': 'Scale',
};

// --- Contenuto specifico per ogni servizio (Pain vs Solution) ---
const PAIN_VS_SOLUTION_DATA = {
  'spc': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        l'SPC è sempre più popolare<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">per evitare pesanti ristrutturazioni.</span>
      </>
    ),
    intro: 'Il vecchio metodo richiede demolizioni, polvere, tempi lunghi e costi alti. La nostra soluzione SPC cambia tutto: posi sopra il vecchio pavimento e in 24 ore è finito.',
    rows: [
      { pain: 'Demolizioni devastanti: martello pneumatico, calcinaccio, mobili in magazzino per settimane.', solution: 'Direttamente sulle piastrelle: l\'SPC si aggancia a click sopra qualsiasi pavimento. Zero polvere.' },
      { pain: 'Tempi infiniti: massetto, asciugatura, verniciatura… la casa è invivibile per mesi.', solution: 'In 1–2 giorni è finito: una stanza media si posa in mezza giornata. Calpestabile subito.' },
      { pain: 'Costi che lievitano: demolizione, smaltimento, massetto… il prezzo raddoppia.', solution: 'Prezzo blindato: preventivo fisso, nessun acconto, paghi solo alla fine.' },
    ],
  },
  'laminato': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Pavimento logoro e cantiere infinito?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Il laminato è la risposta.</span>
      </>
    ),
    intro: 'Demolire il vecchio pavimento è caro e lungo. Il laminato si posa sopra quello che già hai: in 2 giorni la casa è rifinita.',
    rows: [
      { pain: 'Smaltimento costoso: togliere il vecchio pavimento costa una fortuna tra massetto e controlli.', solution: 'Su qualsiasi fondo: piastrelle, gres, cemento, parquet rovinato — si posa sopra tutto.' },
      { pain: 'Polvere e rumore: martello pneumatico per giorni, casa cantiere, vicini furiosi.', solution: 'Pulito e veloce: materassino isolante + click. Casa abitabile dal primo giorno.' },
      { pain: 'Tempi biblici: demolizione, massetto, asciugatura, posa… una settimana minimo.', solution: 'Prezzo onesto: nessun acconto, preventivo preciso, paghi solo a lavoro verificato.' },
    ],
  },
  'prefinito': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Parquet rovinato e desideri legno vero?<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">Il prefinito è la soluzione.</span>
      </>
    ),
    intro: 'Carteggiare il vecchio parquet è devastante: polvere di legno, formaldeide, settimane di attesa. Il prefinito arriva già finito, zero problemi.',
    rows: [
      { pain: 'Carteggiatura in casa: macchinari enormi, polvere ovunque, odore di vernice persistente.', solution: 'Legno vero, finito in fabbrica: verniciato, controllato, pronto. Zero polvere in casa.' },
      { pain: 'Tempo lunghissimo: carteggiatura, primer, vernice, essiccazione… una settimana minimo.', solution: 'Posa incollata o flottante: entrambi metodi puliti, veloci, senza disagi.' },
      { pain: 'Risultato incerto: buchi della vecchia posa e micro-graffi rimangono visibili.', solution: 'Prezzo trasparente: legno vero a prezzo onesto, preventivo fisso, paghi al completamento.' },
    ],
  },
  'prefinito-flottante': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Parquet incollato che scricchiola?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Esiste il metodo flottante.</span>
      </>
    ),
    intro: 'La colla elastica richiede attesa di 24-48 ore e lascia odori sgradevoli. Il flottante è immediato, silenzioso e nessun odore.',
    rows: [
      { pain: 'Attesa per la colla: 24-48 ore prima di camminare. La casa è off-limits.', solution: 'A click, senza colla: le tavole si agganciano tra loro. Nessun odore, nessun veleno.' },
      { pain: 'Odori persistenti: formaldeide e solventi ovunque, aria pesante per giorni.', solution: 'Calpestabile subito: la posa finisce e puoi camminarci immediatamente.' },
      { pain: 'Scricchiolii nel tempo: la colla si secca, le tavole si muovono dopo un anno.', solution: 'Silenzioso e elastico: il materassino isola termicamente e acusticamente.' },
    ],
  },
  'prefinito-spina': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Spina dritta e generica?<br />
        <span className="bg-[#FFF59D] px-1 border-b-[3px] border-black inline-block">La spina perfetta è geometria.</span>
      </>
    ),
    intro: 'Una posa a spina male eseguita rovina tutto: angoli aperti, tagli storti, effetto disordinato. La nostra spina è millimetrica.',
    rows: [
      { pain: 'Tagli approssimativi: a mano, a occhio. Angoli che non combaciano, linee che ondeggiano.', solution: 'Tracciatura laser precisa: asse di simmetria perfetto, tutto allineato al millimetro.' },
      { pain: 'Tempo lunghissimo: ogni doga misurata, tagliata, posata. Lavoro manuale estenuante.', solution: 'Tagli millimetrici: troncatrice professionale per ogni angolo e incrocio.' },
      { pain: 'Risultato mediocre: righe storte, angoli aperti, effetto confusionario.', solution: "Effetto sartoriale: linee perfette, simmetria totale, un'opera d'arte." },
    ],
  },
  'battiscopa': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Battiscopa storto e con giunzioni aperte?<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">Il dettaglio che decide tutto.</span>
      </>
    ),
    intro: 'Un battiscopa posato male rovina un pavimento perfetto. Angoli aperti, silicone giallo che cola, effetto da negozio.',
    rows: [
      { pain: 'Tagli storti: giunzioni aperte, silicone che cola sui muri, aspetto improvvisato.', solution: 'Tagli a 45° perfetti: troncatrice professionale, nessuna giunzione visibile.' },
      { pain: 'Silicone giallo: cola sui muri, annerisce con lo sporco, si vede anche da lontano.', solution: 'Effetto zero-gap: silicone acrilico verniciabile tono su tono, pareti intatte.' },
      { pain: 'Effetto negativo: battiscopa male = tutta la casa sembra fatta male.', solution: 'Professionalità pura: giunzioni invisibili, linee dritte, aspetto lussuoso.' },
    ],
  },
  'scala-parquet': {
    badge: 'Il Problema vs. La Soluzione',
    headline: (
      <>
        Scala scura e stanca?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Diventa protagonista.</span>
      </>
    ),
    intro: 'Una scala non rivestita rimane anonima. Rivestirla male è peggio. La nostra scala è un elemento di design.',
    rows: [
      { pain: 'Pedate tutte uguali: rettangoli piatti senza carattere, solo utilità.', solution: 'Taglio su misura gradino per gradino: tutto misurato e fatto in cantiere.' },
      { pain: 'Montaggio improvvisato: profili non allineati, angoli visibili, aspetto al risparmio.', solution: 'Profili antiscivolo certificati: alluminio spazzolato o acciaio inox.' },
      { pain: 'Sicurezza dubbia: profili antiscivolo mancanti, alzate irregolari, rischio caduta.', solution: 'Elemento di design: rovere naturale, rivestimento perfetto, fulcro visivo della casa.' },
    ],
  },
};

// --- COMPONENTE PRINCIPALE ---
export function ServicePainVsSolution({ service }) {
  const pricingId = service?.pricingId || service?.slug;
  const data = PAIN_VS_SOLUTION_DATA[pricingId];
  const productName = PRODUCT_NAME_MAP[pricingId] || 'Pro Casa';

  if (!data) return null;

  const scrollToQuiz = (e) => {
    e.preventDefault();
    const el = document.getElementById('home-preventivatore');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white py-16 px-4 relative z-10 overflow-hidden font-sans border-b-[3px] border-black">
      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-block bg-black text-white px-4 py-1 uppercase font-black tracking-widest text-sm mb-5 rounded-md">
            {data.badge}
          </div>
          <h2 className="text-[26px] md:text-[34px] font-[900] text-black leading-[1.05] tracking-tight uppercase">
            {data.headline}
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] font-[600] text-slate-600 leading-relaxed max-w-xl mx-auto">
            {data.intro}
          </p>
        </div>

        {/* Tabella comparativa */}
        <div className="border-[3px] border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

          {/* Intestazione tabella */}
          <div className="grid grid-cols-2">
            <div className="bg-red-100 px-4 py-3 border-b-[3px] border-r-[3px] border-black flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <X className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <span className="font-black text-[13px] uppercase tracking-wider text-red-800">Vecchio metodo</span>
            </div>
            <div className="bg-emerald-100 px-4 py-3 border-b-[3px] border-black flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <span className="font-black text-[13px] uppercase tracking-wider text-emerald-800">{productName}</span>
            </div>
          </div>

          {/* Righe della tabella */}
          {data.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < data.rows.length - 1 ? 'border-b-[2px] border-black/15' : ''}`}
            >
              {/* Colonna Problema */}
              <div className="px-4 py-4 border-r-[3px] border-black bg-red-50/50">
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[13px] md:text-[14px] font-[600] text-black/60 leading-snug">
                    {row.pain}
                  </p>
                </div>
              </div>

              {/* Colonna Soluzione */}
              <div className="px-4 py-4 bg-emerald-50/50">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[13px] md:text-[14px] font-[700] text-black/80 leading-snug">
                    {row.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToQuiz}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter text-base border-[3px] border-black shadow-[6px_6px_0px_0px_#DCFCE7] hover:shadow-[2px_2px_0px_0px_#DCFCE7] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            <Calculator className="w-5 h-5" />
            Ottieni il tuo preventivo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ServicePainVsSolution;
