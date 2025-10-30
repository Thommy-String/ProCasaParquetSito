import posaScala from '../assets/images/parquet/posaScala.jpg';
import posaSpcVideo from '../assets/videos/parquet/posaSpc.mp4';
import posaLaminato from '../assets/videos/parquet/posaLaminato.mp4';
import posaPrefinitoIncollato from '../assets/videos/parquet/posaPrefinitoIncollato.mp4';
import posaPrefinitoSpina from '../assets/videos/parquet/posaPrefinitoSpina.mp4';
import posaBattiscopa from '../assets/videos/parquet/posaBattiscopa.mp4';
import posaPrefinitoFlottante from '../assets/videos/parquet/posaPrefinitoFlottante.mp4';

export const pricingData = [
  {
    id: 'prefinito',
    name: 'Posa Parquet Prefinito',
    price: '€25', 
    pricePerMq: 25, 
    unit: '/mq ',
    timeFactorPerMq: 0.05, 
    mediaType: 'video',
    mediaSrc: posaPrefinitoIncollato,
    description: 'Posa incollata con verifica umidità: solida, silenziosa al calpestio.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 50,
    },
    features: [
      'Installazione: Incollata',
      'Calpestabile: Dopo 24-48 ore',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'clipboard-check', // Nome icona da Lucide React
        title: 'Fase 1: Preparazione Fondo',
        description: 'Verifichiamo l\'umidità del massetto e ci assicuriamo che la superficie sia perfettamente piana, pulita e asciutta prima di stendere il collante.'
      },
      {
        icon: 'layers',
        title: 'Fase 2: Posa e Incollaggio',
        description: 'Procediamo con l\'incollaggio delle tavole, utilizzando collanti ecologici. Ogni tavola viene posata con precisione per garantire solidità.'
      },
      {
        icon: 'timer',
        title: 'Fase 3: Assestamento',
        description: 'Il pavimento necessita di 24-48 ore per l\'asciugatura completa della colla prima di poter essere calpestato e arredato.'
      }
    ]
  },
  {
    id: 'spc',
    name: 'Posa SPC / Vinilico',
    price: '€15',
    pricePerMq: 15,
    unit: '/mq',
    timeFactorPerMq: 0.03, 
    mediaType: 'video',
    mediaSrc: posaSpcVideo,
    description: 'Posa a click appoggiato su materassino senza colla: rapida e pulita.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 45,
    },
    features: [
      'Installazione:  Flottante su materassino',
      'Calpestabile: Subito dopo la posa',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'layout-grid',
        title: 'Fase 1: Installazione a incastro Click',
        description: 'La posa avviene senza colla. Le doghe vengono incastrate tra loro con il sistema a click, garantendo un\'installazione rapida e pulita.'
      },
      {
        icon: 'sparkles',
        title: 'Fase 2: Finitura e Uso Immediato',
        description: 'Se scelto installiamo il battiscopa coordinato. Il pavimento è flottante, quindi è calpestabile e arredabile immediatamente dopo la posa.'
      }
    ]
  },
  {
    id: 'laminato',
    name: 'Posa Laminato',
    price: '€15',
    pricePerMq: 15,
    unit: '/mq',
    timeFactorPerMq: 0.03, 
    mediaType: 'video',
    mediaSrc: posaLaminato,
    description: 'Posa flottante con click e tappetino: installazione veloce e pulita.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 45,
    },
    features: [
      'Installazione: Flottante su materassino',
      'Calpestabile: Subito dopo la posa',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'move-3d',
        title: 'Fase 1: Posa del Tappetino',
        description: 'Il primo passo è stendere il tappetino (o materassino) isolante, essenziale per il comfort acustico e per proteggere il laminato dall\'umidità.'
      },
      {
        icon: 'layout-grid',
        title: 'Fase 2: Posa Flottante a Click',
        description: 'Le tavole di laminato vengono posate incastrandole l\'una con l\'altra tramite il sistema a incastro. È un processo veloce e che non sporca.'
      },
      {
        icon: 'sparkles',
        title: 'Fase 3: Finitura Immediata',
        description: 'Se scelto, dopo aver posato le tavole, installiamo il battiscopa. Il pavimento è subito pronto per essere vissuto, senza tempi di attesa.'
      }
    ]
  },
  {
    id: 'prefinito-flottante',
    name: 'Posa Prefinito Flottante',
    price: '€22',
    pricePerMq: 22,
    unit: '/mq',
    timeFactorPerMq: 0.035,
    mediaType: 'video',
    mediaSrc: posaPrefinitoFlottante,
    description: 'Posa a incastro senza colla, su materassino. Facile da smontare in futuro.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 180,
      step: 5,
      defaultValue: 40,
    },
    features: [
      'Installazione: Flottante su materassino',
      'Calpestabile: Subito dopo la posa',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'move-3d',
        title: 'Fase 1: Posa Materassino Specifico',
        description: 'Stendiamo un materassino di alta qualità che fornisce isolamento acustico e protegge il legno prefinito dall\'umidità di risalita.'
      },
      {
        icon: 'layout-grid',
        title: 'Fase 2: Posa a Incastro',
        description: 'Le tavole di prefinito vengono incastrate a secco, senza l\'uso di collanti. Questo metodo è pulito e permette future ispezioni o rimozioni.'
      },
      {
        icon: 'sparkles',
        title: 'Fase 3: Uso Immediato',
        description: 'Completata la posa e installato il battiscopa, il pavimento in legno è immediatamente calpestabile e pronto per essere arredato.'
      }
    ]
  },
  {
    id: 'prefinito-spina',
    name: 'Posa Prefinito a Spina',
    price: '€30',
    pricePerMq: 30,
    unit: '/mq',
    timeFactorPerMq: 0.06,
    mediaType: 'video',
    mediaSrc: posaPrefinitoSpina,
    description: 'Spine italiane, francesi o ungheresi posate incollando ogni tavola su tracciatura millimetrica.',
    variants: ['Spina Italiana', 'Spina Francese', 'Spina Ungherese'],
    calculator: {
      label: 'mq',
      min: 10,
      max: 150,
      step: 5,
      defaultValue: 35,
    },
    features: [
      'Installazione: Schema a spina incollata',
      'Calpestabile: Dopo 48 ore per completa adesione',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'compass',
        title: 'Fase 1: Tracciatura Millimetrica',
        description: 'A differenza della posa dritta, la posa a spina richiede una tracciatura a terra precisa al millimetro per definire l\'asse centrale e l\'angolo di posa.'
      },
      {
        icon: 'git-branch',
        title: 'Fase 2: Incollaggio a Schema',
        description: 'Ogni singola tavola viene incollata al massetto seguendo lo schema (Italiana, Francese, Ungherese) con massima precisione nei tagli e negli accostamenti.'
      },
      {
        icon: 'timer',
        title: 'Fase 3: Assestamento Completo',
        description: 'Data la complessità dello schema, è fondamentale attendere 48 ore prima di calpestare l\'area, per garantire l\'adesione perfetta di ogni elemento.'
      }
    ]
  },
  {
    id: 'battiscopa',
    name: 'Posa Battiscopa',
    price: '€7',
    pricePerMq: 7,
    unit: '/ml',
    timeFactorPerMq: 0.01,
    mediaType: 'video',
    mediaSrc: posaBattiscopa,
    description: 'Fissaggio battiscopa con tagli a 45° e sigillatura: finitura pulita e ordinata.',
    calculator: {
      label: 'ml',
      min: 10,
      max: 120,
      step: 5,
      defaultValue: 35,
    },
    features: [
      'Installazione: Incollata o con chiodini',
      'Consiglio: Meglio avere le porte già montate',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'scissors',
        title: 'Fase 1: Taglio di Precisione',
        description: 'La qualità della posa si vede dai dettagli. Eseguiamo tagli a 45° precisi sugli angoli (interni ed esterni) per giunzioni invisibili.'
      },
      {
        icon: 'hammer',
        title: 'Fase 2: Fissaggio',
        description: 'Fissiamo il battiscopa alla parete utilizzando collanti specifici o chiodini in acciaio quasi invisibili, garantendo una tenuta perfetta.'
      },
      {
        icon: 'paintbrush',
        title: 'Fase 3: Sigillatura',
        description: 'Per un look pulito e finito, sigilliamo la parte superiore del battiscopa e gli angoli, chiudendo ogni fessura ed evitando accumuli di polvere.'
      }
    ]
  },
  {
    id: 'scala-parquet',
    name: 'Rivestimento Scala con Parquet',
    price: '€40',
    pricePerMq: 40,
    unit: '/gradino',
    timeFactorPerMq: 0.08,
    mediaType: 'image',
    mediaSrc: posaScala,
    description: 'Gradini rivestiti con frontali e pedate in legno, rifiniti con profili antisdrucciolo coordinati.',
    calculator: {
      label: 'gradini',
      min: 3,
      max: 25,
      step: 1,
      defaultValue: 12,
    },
    features: [
      'Installazione: Taglio e incollaggio a misura',
      'Calpestabile: Dopo 24 ore dalla posa',
    ],
    // NUOVA PROPRIETÀ
    processSteps: [
      {
        icon: 'scaling',
        title: 'Fase 1: Rilievo e Sagomatura',
        description: 'Ogni gradino è unico. Prendiamo le misure esatte di pedata e alzata e tagliamo il legno su misura per ogni singolo gradino.'
      },
      {
        icon: 'layers',
        title: 'Fase 2: Posa e Incollaggio',
        description: 'Rivestiamo prima l\'alzata (verticale) e poi la pedata (orizzontale), incollando il materiale con collanti ad alta tenuta.'
      },
      {
        icon: 'timer',
        title: 'Fase 3: Finitura e Assestamento',
        description: 'Installiamo i profili di finitura e antisdrucciolo. La scala non deve essere utilizzata per 24 ore per permettere un fissaggio perfetto.'
      }
    ]
  },
];