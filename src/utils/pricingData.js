
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
    price: '€25', // Prezzo mostrato staticamente
    pricePerMq: 25, // Numero per il calcolo
    unit: '/mq ',
    timeFactorPerMq: 0.05, // Fattore di calcolo tempo (es. 2.5 giorni / 50mq)
    mediaType: 'video',
    mediaSrc: posaPrefinitoIncollato,
    description: 'Posa incollata con verifica umidità: solida, silenziosa e pronta da levigare in futuro.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 50,
    },
    features: [
      'Installazione: Stabile (incollata)',
      'Durata: 20+ anni (levigabile in futuro)',
      'Calpestabile: Dopo 24-48 ore',
    ],
  },
  {
    id: 'spc',
    name: 'Posa SPC / Vinilico',
    price: '€15',
    pricePerMq: 15,
    unit: '/mq',
    timeFactorPerMq: 0.03, // Fattore di calcolo tempo (es. 1.5 giorni / 50mq)
    mediaType: 'video',
    mediaSrc: posaSpcVideo,
    description: 'Posa a click appoggiato su materassino: rapida e pulita, ideale per ambienti vissuti.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 45,
    },
    features: [
      'Installazione: Rapida (flottante)',
      'Durata: 15+ anni (alta resistenza ai graffi)',
      'Calpestabile: Subito',
    ],
  },
  {
    id: 'laminato',
    name: 'Posa Laminato',
    price: '€15',
    pricePerMq: 15,
    unit: '/mq',
    timeFactorPerMq: 0.03, // Fattore di calcolo tempo (es. 1.5 giorni / 50mq)
    mediaType: 'video',
    mediaSrc: posaLaminato,
    description: 'Sistema flottante con click e tappetino: installazione veloce e pulita.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 200,
      step: 5,
      defaultValue: 45,
    },
    features: [
      'Installazione: Rapida (flottante)',
      'Durata: 10-15 anni (buona resistenza)',
      'Calpestabile: Subito',
    ],
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
    description: 'Pannelli prefinito con incastri click, posa su materassino elastico per comfort acustico immediato.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 180,
      step: 5,
      defaultValue: 40,
    },
    features: [
      'Installazione: Flottante (senza colla)',
      'Durata: 15-20 anni (strato nobile rigenerabile)',
      'Calpestabile: Subito dopo la posa',
    ],
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
    calculator: {
      label: 'mq',
      min: 10,
      max: 150,
      step: 5,
      defaultValue: 35,
    },
    features: [
      'Installazione: Schema a spina con tagli di precisione',
      'Durata: 20+ anni (levigabile)',
      'Calpestabile: Dopo 48 ore per completa adesione',
    ],
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
    description: 'Fissaggio battiscopa con tagli a 45° e sigillatura: finitura pulita e coordinate al pavimento.',
    calculator: {
      label: 'ml',
      min: 10,
      max: 120,
      step: 5,
      defaultValue: 35,
    },
    features: [
      'Installazione: Incollata o con chiodini invisibili',
      'Durata: 10+ anni senza distacchi',
      'Calpestabile: Subito (rifinitura finale)',
    ],
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
      'Durata: 15+ anni con manutenzione ordinaria',
      'Calpestabile: Dopo 24 ore dalla posa',
    ],
  },
];
