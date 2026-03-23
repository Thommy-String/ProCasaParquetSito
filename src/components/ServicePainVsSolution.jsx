import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

// --- Contenuto specifico per ogni servizio ---
const PAIN_VS_SOLUTION_DATA = {
  'spc': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Piastrelle scassate e pavimento rovinato?<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">Non significa demolire tutto.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Demolizioni devastanti',
          detail: 'Martello pneumatico, polvere ovunque, mobili spostati per settimane.',
        },
        {
          icon: 'dust',
          problem: 'Mesi di disagi',
          detail: 'Attesa per il massetto, gli artigiani non ci sono, il cantiere non finisce mai.',
        },
        {
          icon: 'money',
          problem: 'Costi alle stelle',
          detail: 'Demolizione, smaltimento, massetto, posa... il conto finale è il doppio.',
        },
        {
          icon: 'family',
          problem: 'Casa inabitabile',
          detail: 'Famiglia in hotel, bambini fuori scuola, stress continuo.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione SPC',
      items: [
        {
          icon: 'direct',
          benefit: 'Direttamente sulle vecchie piastrelle',
          detail: 'Zero demolizioni. L\'SPC si incastra sopra il pavimento esistente in 24 ore.',
        },
        {
          icon: 'clean',
          benefit: 'Zero polvere, zero cantiere',
          detail: 'Nessun rumore, nessun calcinaccio. La casa rimane vivibile durante i lavori.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo blindato',
          detail: 'Preventivo fisso senza sorprese. Zero acconto, paghi solo alla fine.',
        },
        {
          icon: 'speed',
          benefit: 'Finito in 1-2 giorni',
          detail: 'La cucina si rifa in mezza giornata. Calpestabile subito, niente attese.',
        },
      ],
    },
  },
  'laminato': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Pavimento logoro e opaco?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Non serve una settimana di cantiere.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Demolizioni lunghe',
          detail: 'Levare il vecchio pavimento costa tempo, fatica e soldi enormi.',
        },
        {
          icon: 'dust',
          problem: 'Polvere e rumore',
          detail: 'Martello pneumatico 8 ore al giorno. I vicini si arrabbiano, la casa è un cantiere.',
        },
        {
          icon: 'money',
          problem: 'Budget che lievita',
          detail: 'Smaltimento, massetto, controlli... il prezzo iniziale raddoppia.',
        },
        {
          icon: 'family',
          problem: 'Niente routine normale',
          detail: 'Famiglia dispersa, bambini in giro, stress continuo per settimane.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Laminato',
      items: [
        {
          icon: 'direct',
          benefit: 'Su qualsiasi fondo esistente',
          detail: 'Posiamo il laminato sopra piastrelle, parquet rovinato o cemento. Zero demolizioni.',
        },
        {
          icon: 'clean',
          benefit: 'Pulito e veloce',
          detail: 'Materassino isolante + laminato a click. Una stanza in mezza giornata.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo franco e trasparente',
          detail: 'Sappi cosa paghi. Nessun acconto, niente sorprese a fine lavoro.',
        },
        {
          icon: 'speed',
          benefit: 'Calpestabile subito',
          detail: 'Finito lunedì mattina, martedì il divano è già al suo posto.',
        },
      ],
    },
  },
  'prefinito': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Parquet rovinato e consunto?<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">Puoi avere legno vero subito.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Carteggiatura devastante',
          detail: 'Macchinari enormi, polvere di legno ovunque, vicini inferociti.',
        },
        {
          icon: 'dust',
          problem: 'Tempi biblici',
          detail: 'Carteggiatura, primer, vernice, stuccature... una settimana minimo.',
        },
        {
          icon: 'money',
          problem: 'Costi alti per risultato mediocre',
          detail: 'Spendi migliaia per un pavimento che avrà comunque i buchi della vecchia posa.',
        },
        {
          icon: 'family',
          problem: 'Odore di vernice ovunque',
          detail: 'Formaldeide e solventi in casa. Famiglia da spostare per giorni.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Parquet Prefinito',
      items: [
        {
          icon: 'direct',
          benefit: 'Legno vero finito in fabbrica',
          detail: 'Nessuna carteggiatura in casa. Il parquet arriva già verniciato e controllato.',
        },
        {
          icon: 'clean',
          benefit: 'Zero polvere, zero odori',
          detail: 'Posa con colla elastica o flottante. La casa rimane pulita e respirabile.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo competitivo',
          detail: 'Parquet vero a prezzo onesto. Nessun acconto, trasparenza totale.',
        },
        {
          icon: 'speed',
          benefit: 'Pronto in 2-3 giorni',
          detail: 'Posa + essicazione colla + arredamento. Torni alla normalità velocemente.',
        },
      ],
    },
  },
  'prefinito-flottante': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Parquet incollato che scricchiola?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Esiste un metodo senza colla.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Attesa per la colla',
          detail: '24-48 ore minimo prima di poter camminare. La casa è off-limits.',
        },
        {
          icon: 'dust',
          problem: 'Odore di colla elastica',
          detail: 'Formaldeide e solventi ovunque. I bambini sentono nausea.',
        },
        {
          icon: 'money',
          problem: 'Costi per materiali e manodopera',
          detail: 'Colla professionale, primer, stucco... la fattura sale.',
        },
        {
          icon: 'family',
          problem: 'Scricchiolii nel tempo',
          detail: 'La colla si secca, le tavole si muovono, il pavimento scricchiola dopo un anno.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Flottante',
      items: [
        {
          icon: 'direct',
          benefit: 'A click, senza colla',
          detail: 'Le tavole si aganciano tra loro. Nessuna colla, nessun odore.',
        },
        {
          icon: 'clean',
          benefit: 'Calpestabile subito',
          detail: 'Finito la posa? Puoi camminare immediatamente. Niente attesa.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo trasparente',
          detail: 'Meno materiali, meno tempo = prezzo più basso. Preventivo fisso.',
        },
        {
          icon: 'speed',
          benefit: 'Reversibile e silenzioso',
          detail: 'Il pavimento flottante è elastico e isolato. Zero scricchiolii nel tempo.',
        },
      ],
    },
  },
  'prefinito-spina': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Spina dritta e generica?<br />
        <span className="bg-[#FFF59D] px-1 border-b-[3px] border-black inline-block">La spina perfetta è geometria.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Tagli approssimativi',
          detail: 'Ogni taglio a mano, a occhio. Gli angoli non combaciano, i tagli sono storti.',
        },
        {
          icon: 'dust',
          problem: 'Tempo infinito',
          detail: 'Ogni doga va misurata, tagliata, controllata. Lavoro manuale puro.',
        },
        {
          icon: 'money',
          problem: 'Prezzo al cielo',
          detail: 'La spina costa il doppio di una posa dritta. Manodopera specializzata = denaro.',
        },
        {
          icon: 'family',
          problem: 'Risultato mediocre',
          detail: 'Le righe non sono dritte, gli angoli aperti, il carico visivo è disordinato.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Spina',
      items: [
        {
          icon: 'direct',
          benefit: 'Tracciatura laser precisa',
          detail: 'Misuriamo con laser l\'asse di simmetria. Tutto parte da lì, tutto è perfetto.',
        },
        {
          icon: 'clean',
          benefit: 'Tagli millimetrici',
          detail: 'Troncatrice professionale. Ogni angolo, ogni incrocio è geometrico.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo onesto per il risultato',
          detail: 'Sì, costa più della dritta. Ma il risultato è un quadro, non un accidente.',
        },
        {
          icon: 'speed',
          benefit: 'Spina perfetta che dura',
          detail: 'Linee dritte, simmetria, effetto sartoriale. Un capolavoro che sbalordisce.',
        },
      ],
    },
  },
  'battiscopa': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Battiscopa storto e con giunzioni?<br />
        <span className="bg-[#FFD180] px-1 border-b-[3px] border-black inline-block">Il dettaglio che fa la differenza.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Battiscopa mosci',
          detail: 'Tagli storti, giunzioni aperte, silicone giallo che cola sui muri.',
        },
        {
          icon: 'dust',
          problem: 'Angoli disastrati',
          detail: 'Non esiste il taglio a 45° preciso. Ogni angolo è una sorpresa sgradevole.',
        },
        {
          icon: 'money',
          problem: 'Retrofit costoso',
          detail: 'Se devi rifarlo, le pareti rimangono sciupate. Niente si riavvia bene.',
        },
        {
          icon: 'family',
          problem: 'Effetto "da negozio"',
          detail: 'Il battiscopa è il biglietto da visita della casa. Se è male, tutto sembra male.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Battiscopa',
      items: [
        {
          icon: 'direct',
          benefit: 'Tagli a 45° perfetti',
          detail: 'Ogni angolo è tagliato con troncatrice. Nessuna giunzione visibile.',
        },
        {
          icon: 'clean',
          benefit: 'Effetto zero-gap',
          detail: 'Silicone verniciabile tono su tono. Le pareti rimangono intatte e pulite.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo giusto per il lavoro',
          detail: 'Non è una spesa enorme. Ma è la differenza tra casa bella e casa media.',
        },
        {
          icon: 'speed',
          benefit: 'Dettagli che stupiscono',
          detail: 'Giunzioni invisibili, linee dritte, silicone pulito. Professionalità pura.',
        },
      ],
    },
  },
  'scala-parquet': {
    badge: 'Il Vecchio Metodo vs. La Nostra Soluzione',
    headline: (
      <>
        Scala scura e stanca?<br />
        <span className="bg-[#A5D6A7] px-1 border-b-[3px] border-black inline-block">Diventa un elemento di design.</span>
      </>
    ),
    painSection: {
      title: 'Il Problema del Vecchio Approccio',
      items: [
        {
          icon: 'demolition',
          problem: 'Pedate tutte uguali',
          detail: 'Rettangoli piatti, senza carattere. La scala è solo utilità, non design.',
        },
        {
          icon: 'dust',
          problem: 'Montaggio brutto',
          detail: 'I profili non combaciano, gli angoli sono visibili, l\'insieme è improvvisato.',
        },
        {
          icon: 'money',
          problem: 'Costi sorprendenti',
          detail: 'Ogni gradino è diverso, ogni misura è sorpresa. La fattura lievita.',
        },
        {
          icon: 'family',
          problem: 'Sicurezza compromessa',
          detail: 'Mancano i profili antiscivolo, le alzate non sono regolari, il rischio di caduta è reale.',
        },
      ],
    },
    solutionSection: {
      title: 'La Nostra Soluzione Scale',
      items: [
        {
          icon: 'direct',
          benefit: 'Taglio su misura gradino per gradino',
          detail: 'Misuriamo ogni pedata e alzata. Nessun modello prefabbricato, tutto fatto in cantiere.',
        },
        {
          icon: 'clean',
          benefit: 'Profili antiscivolo certificati',
          detail: 'Alluminio o acciaio. Sicurezza garantita, senza compromessi.',
        },
        {
          icon: 'price',
          benefit: 'Prezzo preventivato',
          detail: 'Rilievo preciso = preventivo accurato. Niente surprises a fine lavoro.',
        },
        {
          icon: 'speed',
          benefit: 'Scala che stupisce',
          detail: 'Rovere naturale o legno pregiato. La scala diventa protagonista della casa.',
        },
      ],
    },
  },
};

// --- COMPONENTE ---
export function ServicePainVsSolution({ service }) {
  const pricingId = service?.pricingId;
  const data = PAIN_VS_SOLUTION_DATA[pricingId];

  if (!data) return null;

  const scrollToQuiz = (e) => {
    e.preventDefault();
    const quiz = document.getElementById('home-preventivatore');
    if (quiz) {
      quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'demolition':
        return '💥';
      case 'dust':
        return '💨';
      case 'money':
        return '💸';
      case 'family':
        return '👨‍👩‍👧‍👦';
      case 'direct':
        return '✅';
      case 'clean':
        return '✨';
      case 'price':
        return '💰';
      case 'speed':
        return '⚡';
      default:
        return '•';
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4 relative z-10 border-b-[3px] border-black overflow-hidden font-sans">

      {/* Decorazioni brutaliste */}
      <div className="absolute top-6 left-4 text-black/5 font-black text-[120px] leading-none select-none pointer-events-none rotate-6">
        ///
      </div>
      <div className="absolute bottom-6 right-4 text-black/5 font-black text-[80px] leading-none select-none pointer-events-none -rotate-3">
        →→→
      </div>

      <div className="max-w-md mx-auto relative z-10">

        {/* Badge + Headline */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-black text-white px-4 py-1 uppercase font-black tracking-widest text-sm mb-5 transform rotate-1 rounded-md">
            {data.badge}
          </div>
          <h2 className="text-[28px] md:text-[36px] font-[900] text-black leading-[1.05] tracking-tight uppercase">
            {data.headline}
          </h2>
        </div>

        {/* Grid Pain vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* PAIN SECTION */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" strokeWidth={2.5} />
              <h3 className="text-[18px] md:text-[20px] font-[900] text-red-600 uppercase tracking-tight leading-tight">
                {data.painSection.title}
              </h3>
            </div>

            {data.painSection.items.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-red-50/40 border-2 border-red-200 rounded-xl hover:bg-red-50/60 transition-colors">
                <span className="text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {getIcon(item.icon)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] md:text-[14px] font-[800] text-red-700 uppercase tracking-tight leading-snug">
                    {item.problem}
                  </p>
                  <p className="text-[12px] md:text-[13px] text-red-600/80 font-[600] leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SOLUTION SECTION */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" strokeWidth={2.5} />
              <h3 className="text-[18px] md:text-[20px] font-[900] text-green-700 uppercase tracking-tight leading-tight">
                {data.solutionSection.title}
              </h3>
            </div>

            {data.solutionSection.items.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-green-50/40 border-2 border-green-200 rounded-xl hover:bg-green-50/60 transition-colors">
                <span className="text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {getIcon(item.icon)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] md:text-[14px] font-[800] text-green-700 uppercase tracking-tight leading-snug">
                    {item.benefit}
                  </p>
                  <p className="text-[12px] md:text-[13px] text-green-600/80 font-[600] leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA — scroll al quiz */}
        <div className="flex justify-center">
          <button
            onClick={scrollToQuiz}
            className="
              inline-flex items-center gap-3
              bg-black text-white
              px-8 py-4 rounded-2xl
              font-black uppercase tracking-tighter text-base
              border-[3px] border-black
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-1 hover:translate-y-1
              transition-all duration-200
            "
          >
            Scopri come risparmiare
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ServicePainVsSolution;
