import heroPrefinito from '../assets/images/parquet/rovereNaturale.jpg';
import heroPrefinitoFlottante from '../assets/images/parquet/rovereMielato.jpg';
import heroPrefinitoSpina from '../assets/images/parquet/rovereSpina90.jpg';
import heroLaminato from '../assets/images/parquet/parquetLaminato.jpg';
import heroBattiscopa from '../assets/images/parquet/battiscopa10cm.jpg';
import heroScale from '../assets/images/parquet/posaScala.jpg';
import misuraUmiditaMassetto from '../assets/images/parquet/misuraUmiditaMassetto.jpg';
import tracciaturaLaserParquet from '../assets/images/parquet/tracciaturaLaserParquet.jpg';
import posaParquetIncollato from '../assets/images/parquet/posaParquetIncollato.jpg';
import posaParquetFlottante from '../assets/images/parquet/posaParquetFlottante.jpg';
import fotoRivestimentoGradini from "../assets/images/parquet/rivestimentoScaleRovere.jpg"

//video — served from public/ to avoid bundling into JS
const videoPosaPrefinitoIncollato = '/videos/parquet/posaPrefinitoIncollato.mp4';
const videoPosaPrefinitoFlottante = '/videos/parquet/posaPrefinitoFlottante.mp4';
const videoPosaPrefinitoSpina = '/videos/parquet/posaPrefinitoSpina.mp4';
const videoPosaSPC = '/videos/parquet/posaSpc.mp4';
const videoPosaBattiscopa = '/videos/parquet/posaBattiscopa.mp4';
const spcAnimation = '/videos/parquet/SPCANIMATION.mp4';
import laminatoImage from '../assets/images/parquet/montaggioLaminato.webp';


export const servicesData = {
  'posa-parquet-prefinito-milano': {
    order: 1,
    navLabel: 'Posa parquet prefinito',
    slug: 'posa-parquet-prefinito-milano',
    pricingId: 'prefinito',
    pageTitle: 'Posa Parquet Prefinito a Milano',
    metaDescription:
      'Posa parquet prefinito a Milano: analisi del massetto, incollaggio professionale e finiture certificate. Squadra specializzata si parquettisti',
    hero: {
      h1: 'Posa parquet in legno',
      subtitle: 'Incolliamo o posiamo flottante il tuo pavimento in legno con tempi certi e finitura perfetta.',
      image: heroPrefinito,
    },
    overview:
      'Il parquet prefinito nasce per chi desidera il calore del legno con tempi di cantiere rapidi. Con Milano Posa Parquet ottieni un sopralluogo tecnico, se necessario la preparazione del sottofondo e la posa professionale con collanti certificati EC1.',
    sections: [
      {
        id: '01',
        title: 'Diagnosi Massetto',
        description: 'Al sopralluogo rileviamo l’umidità con igrometro a carburo e verifichiamo la planarità.',
        detail: 'Preveniamo distacchi e scricchiolii futuri.',
        icon: '📏',
        size: 'big',
        image: misuraUmiditaMassetto
      },
      {
        id: '02',
        title: 'Posa in opera ',
        description: 'Le mani dei nostri parquettisti hanno anni di esperienza. Che sia una posa incollata o flottante, ogni tavola è posata con cura.',
        detail: 'Ambiente salubre e massima tenuta meccanica.',
        icon: '🧪',
        size: 'small',
        image: posaParquetIncollato
      },
      {
        id: '04',
        title: 'Collaudo Finale',
        description: 'Pulizia dell\'ambiente di lavoro e consegna finale.',
        detail: 'Pronto per il calpestio dopo 24h se installazione con collante, o subito se installazione flottante (con materassino).',
        icon: '✨',
        size: 'big',
        image: heroPrefinito
      }
    ],
    priceDisplay: "€25 / mq",
    videoSrc: videoPosaPrefinitoIncollato,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'RecentWorks', props: { category: 'prefinito', title: 'I nostri ultimi lavori' } },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServiceDescription' },
      { type: 'ServiceFAQ' },
    ],
    features: [
      {
        id: 'senza-sbatti',
        icon: 'Footprints', // Nome della lucide-icon
        tag: 'Calpestabile subito',
        label: 'Anche su pavimento esistente',
        color: 'text-blue-400'
      },
      {
        id: 'casa-piena',
        icon: 'Armchair',
        tag: 'Anche in case abitate con mobili',
        label: 'Anche in case abitate con mobili',
        color: 'text-amber-400'
      },
      {
        id: 'tipo',
        icon: 'Hammer', // Nome della lucide-icon
        tag: 'Montaggio con o senza colla',
        label: 'incollato: €25 / mq - flottante: €22 / mq',
        color: 'text-green-400'
      },
    ]
  },
  'posa-parquet-prefinito-flottante-milano': {
    order: 2,
    navLabel: 'Prefinito flottante',
    slug: 'posa-parquet-prefinito-flottante-milano',
    pricingId: 'prefinito-flottante',
    pageTitle: 'Posa Parquet Prefinito Flottante a Milano',
    metaDescription:
      'Posa parquet prefinito flottante a Milano: materassino certificato, posa a click e battiscopa coordinati. Squadra Milano Posa Parquet.',
    hero: {
      h1: 'Posa parquet flottante',
      subtitle: 'Il comfort del legno con posa senza colla: veloce, pulita e subito calpestabile.',
      image: heroPrefinitoFlottante,
    },
    overview:
      'Il prefinito flottante è ideale per ristrutturazioni rapide: posa a click su materassino tecnico, zero colla e possibilità di sostituire singole doghe nel tempo.',
    sections: [
      {
        id: '00',
        title: 'Controllo sottofondo esistente',
        description: 'Al sopralluogo rileviamo l’umidità con igrometro a carburo e verifichiamo la planarità.',
        detail: 'Preveniamo distacchi e scricchiolii futuri.',
        icon: '📏',
        size: 'big',
        image: 'https://media.adeo.com/media/556713/media.png?width=300'
      },
      {
        id: '01',
        title: 'Inizio posa - Stesura materassino',
        description: 'Posa di materassino per isolamento acustico + eventuale barriera a vapore.',
        detail: 'Comfort termico e abbattimento rumore calpestio.',
        icon: '🛡️',
        size: 'big',
        image: 'https://media.adeo.com/media/556713/media.png?width=300'
      },
      {
        id: '02',
        title: 'Posa flottante',
        description: 'Assemblaggio senza colla: veloce, pulito e immediatamente utilizzabile.',
        detail: 'Ideale per case abitate e uffici.',
        icon: '🧩',
        size: 'small',
        image: posaParquetFlottante
      },
      {
        id: '03',
        title: 'Battiscopa',
        description: 'Se previsto come da accordi: finitura con tagli precisi a 45 gradi e sigillatura.',
        detail: 'Zero rigonfiamenti nel tempo.',
        icon: '🔨',
        size: 'small',
        image: heroPrefinitoFlottante
      },
      {
        id: '04',
        title: 'Consegna',
        description: 'Pulizia dell\'area di lavoro e chiusura. Il sistema flottante in futuro permette di sostituire singole doghe senza smontare tutta la stanza.',
        detail: 'Manutenzione facile per tutta la vita. Calpestabile subito dopo la posa.',
        icon: '📦',
        size: 'big',
        image: heroPrefinitoFlottante
      }
    ],
     priceDisplay: "€22 / mq",
    videoSrc: videoPosaPrefinitoFlottante,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'RecentWorks', props: { category: 'prefinito-flottante', title: 'I nostri ultimi lavori' } },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServiceDescription' },
      { type: 'ServiceFAQ' },
    ],
    features: [
      {
       id: 'materassino',
       icon: 'DropletOff',
       tag: 'Senza colla',
       label: 'apoggiato su tappeto isolante',
       color: 'text-green-400'
     },
      {
        id: 'SENZA COLLA',
        icon: 'Layers2', // Nome della lucide-icon
        tag: 'Su materassino',
        label: 'posa senza colla anche su pavimento esistente',
        color: 'text-blue-400'
      },
      {
        id: 'casa-piena',
        icon: 'Sofa',
        tag: 'Anche in case con mobili',
        label: 'Anche in case abitate con mobili',
        color: 'text-amber-400'
      },
      
    ]
  },
  'posa-parquet-prefinito-spina-milano': {
    order: 3,
    navLabel: 'Prefinito a spina',
    slug: 'posa-parquet-prefinito-spina-milano',
    pricingId: 'prefinito-spina',
    pageTitle: 'Posa Parquet Prefinito a Spina a Milano | Spina italiana, spina francese, spina ungherese',
    metaDescription:
      'Posa parquet prefinito a spina a Milano: tracciatura laser, incollaggio professionale e finiture sartoriali. Prenota un sopralluogo con noi di Milano Posa Parquet.',
    hero: {
      h1: 'Posa parquet a spina',
      subtitle: 'Spina italiana, francese o ungherese: precisione millimetrica e incollaggio che dura.',
      image: heroPrefinitoSpina,
    },
    overview:
      'Studiamo geometrie e simmetrie, tagliamo ogni doga a misura e incolliamo con collanti elastici certificati per uno schema a spina stabile e scenografico.',
   sections: [
    {
        id: '00',
        title: 'Controllo sottofondo esistente',
        description: 'Al sopralluogo rileviamo l’umidità con e verifichiamo la planarità.',
        detail: 'Stabilità eterna per schemi complessi.',
        icon: '🕵🏻‍♂️',
        size: 'small',
        image: 'https://mrsander.co.uk/wp-content/uploads/chevron-vs-herringbone-engineered-oak-herringbone-parquet-glue-down.jpeg'
      },
      {
        id: '01',
        title: 'Tracciatura',
        description: 'Tracciatura per centrare la geometria della spina negli ambienti.',
        detail: 'Simmetria perfetta tra corridoi e stanze.',
        icon: '📐',
        size: 'big',
        image: tracciaturaLaserParquet
      },
      {
        id: '03',
        title: 'Posa a spina',
        description: 'Gestione spina italiana, francese o ungherese con tagli di precisione.',
        detail: 'Verso di posa a scelta del cliente, anche diagonale.',
        icon: '👷🏼‍♂️',
        size: 'small',
        image: heroPrefinitoSpina
      },
      {
        id: '04',
        title: 'Consegna Finale',
        description: 'Pulizia dell\'ambiente di lavoro e consegna finale.',
        detail: 'Pronto per il calpestio dopo 24h.',
        icon: '✨',
        size: 'big',
        image: heroPrefinito
      }
    ],
     priceDisplay: "€30 / mq",
    videoSrc: videoPosaPrefinitoSpina,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'RecentWorks', props: { category: 'prefinito-spina', title: 'I nostri ultimi lavori' } },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServiceDescription' },
      { type: 'ServiceFAQ' },
    ],
    features: [
      {
       id: 'tipologie',
       icon: 'Gavel',
       tag: 'Tutti i tipi di spina',
       label: 'spina italiana, francese o ungherese',
       color: 'text-green-400'
     },
      {
        id: 'collante',
        icon: 'PaintBucket', // Nome della lucide-icon
        tag: 'posa incollata',
        label: 'su massetto o su pavimenti esistenti',
        color: 'text-blue-400'
      },
      {
        id: 'casa-piena',
        icon: 'Armchair',
        tag: 'Anche in case abitate con mobili',
        label: 'Anche in case abitate con mobili',
        color: 'text-amber-400'
      },
    ]
  },
  'posa-pavimento-spc-milano': {
    order: 4,
    navLabel: 'Posa SPC a click',
    slug: 'posa-pavimento-spc-milano',
    pricingId: 'spc',
    pageTitle: 'Parquettisti per posa SPC a Milano',
    metaDescription:
      "Posa parquet SPC a click a Milano senza colla. Pavimento vinilico 100% impermeabile, stabile e silenzioso anche su piastrelle esistenti. Sopralluogo e preventivo gratuiti.",
    hero: {
      h1: 'Installiamo il tuo nuovo SPC.',
      subtitle: 'Esperti nel montaggio di SPC / LVT direttamente sul pavimento esistente, senza colla, e ai mobili ci pensiamo noi.',
      image: videoPosaSPC,
    },
    overview:
      'SPC abbina l’estetica del legno alla resistenza della pietra. È impermeabile e perfetto per bagni, cucine e locali commerciali. Ci occupiamo di tutto: dalla verifica del supporto alla posa a click con finiture coordinate.',
    sections: [
  {
    id: '01',
    title: 'Sopralluogo Gratuito',
    description: 'Analisi planarità del sottofondo e altezze porte.',
    detail: 'Eliminiamo il rischio di imprevisti o costi extra dopo l’inizio.',
    icon: '📏',
    size: 'big'
  },
  {
    id: '02',
    title: 'Preventivo',
    descripion: 'Documento dettagliato con tutte le voci viste insieme.',
    detail: 'Trasparenza totale: sai esattamente cosa paghi.',
    icon: '📄',
    size: 'small'
  },
  {
    id: '03',
    title: 'Conferma e inizio Posa',
    description: 'Installazione SPC a incastro click anche su pavimenti esistenti ben livellati, senza polvere o colle chimiche.',
    detail: 'Ambiente calpestabile subito dopo la posa.',
    icon: '👷🏼‍♂️',
    size: 'small'
  },
  {
    id: '04',
    title: 'Chiusura e Pulizia',
    description: 'Finitura battiscopa se prevista e pulizia dello spazio di lavoro.',
    detail: 'Ti riconsegniamo la casa pronta da vivere.',
    icon: '✨',
    size: 'big'
  }
],
    priceDisplay: "€17 / mq",
    videoSrc: spcAnimation,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'RecentWorks', props: { category: 'spc', title: 'Nel 2025 Abbiamo posato più di 2595 pacchi di SPC. Qualsiasi marchio e formato.' } },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServicePainPoints' },
      { type: 'ServiceDescription' },
    ],
    features: [
      {
       id: 'incastro',
       icon: 'Hammer',
       tag: 'Sul pavimento esistente',
       label: 'tempi medi montaggio: 1-2 giorni',
       color: 'text-blue-400'
     },
     {
        id: 'casa-piena',
        icon: 'Armchair',
        tag: 'Anche in case con mobili',
        label: 'Anche in case abitate con mobili',
        color: 'text-amber-400'
      },
      {
        id: 'colla',
        icon: 'DropletOff',
        tag: 'senza colla o demolizioni',
        label: 'direttamente sul pavimento esistente',
        color: 'text-green-400'
      },

    ]
  },
  'posa-pavimento-laminato-milano': {
    order: 5,
    navLabel: 'Posa laminato',
    slug: 'posa-pavimento-laminato-milano',
    pricingId: 'laminato',
    pageTitle: 'Posa Pavimento Laminato a Milano | Installazione rapida e pulita',
    metaDescription:
      'Posa parquet laminato a Milano su materassino, tagli a misura e rifiniture sartoriali. Preventivo rapido online.',
    hero: {
      h1: 'Installiamo il tuo nuovo laminato, sul pavimento esistente.',
      subtitle: 'Installazione rapida sul vecchio pavimento. Senza colla, senza demolizioni, e se hai mobili ci pensiamo noi.',
      image: heroLaminato,
    },
    overview:
      'Il laminato è l’alleato ideale per un restyling veloce: si posa flottante, resiste a graffi e usura e richiede poca manutenzione. Studiamo il progetto, prepariamo il piano di posa e montiamo battiscopa e profili per un risultato coerente con il tuo stile.',
     sections: [
  {
    id: '01',
    title: 'Sopralluogo Tecnico',
    description: 'Analisi planarità del sottofondo e altezze porte.',
    detail: 'Eliminiamo il rischio di imprevisti o costi extra dopo l’inizio.',
    icon: '📏',
    size: 'big'
  },
  {
    id: '02',
    title: 'Ricezione Preventivo',
    description: 'Documento dettagliato con tutte le voci viste insieme.',
    detail: 'Trasparenza totale: sai esattamente cosa paghi.',
    icon: '📄',
    size: 'small'
  },
  {
    id: '03',
    title: 'Conferma e inizio Posa',
    description: 'Stesura materassino isolante e successiva installazione parquet laminato a incastro anche su pavimenti esistenti ben livellati, senza polvere o colle chimiche.',
    detail: 'Ambiente calpestabile subito dopo la posa.',
    icon: '👷🏼‍♂️',
    size: 'small'
  },
  {
    id: '04',
    title: 'Chiusura e Pulizia',
    description: 'Finitura battiscopa se prevista e pulizia dello spazio di lavoro.',
    detail: 'Ti riconsegniamo la casa pronta da vivere.',
    icon: '✨',
    size: 'big'
  }
],
     priceDisplay: "€17 / mq",
    imageSrc: laminatoImage,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'RecentWorks', props: { category: 'laminato', title: 'I nostri ultimi lavori' } },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServicePainPoints' },
      { type: 'ServiceDescription' },
    ],
    features: [
      {
       id: 'incastro',
       icon: 'Puzzle',
       tag: 'posa rapida sul vecchio pavimento',
       label: 'a incastro su materassino isolante',
       color: 'text-green-400'
     },
      {
        id: 'colla',
        icon: 'DropletOff', // Nome della lucide-icon
        tag: 'senza colla',
        label: 'su pavimenti esistenti ben livellati',
        color: 'text-blue-400'
      },
      {
        id: 'casa-piena',
        icon: 'Armchair',
        tag: 'Anche in case con mobili',
        label: 'Anche in case abitate con mobili',
        color: 'text-amber-400'
      },
    ]
  },
  'posa-battiscopa-milano': {
    order: 6,
    navLabel: 'Posa battiscopa',
    slug: 'posa-battiscopa-milano',
    pricingId: 'battiscopa',
    pageTitle: 'Posa Battiscopa a Milano | Tagli e finiture pulite',
    metaDescription:
      'Posa professionale battiscopa a Milano: rilievo, taglio a 45°, incollaggio e sigillatura. Sopralluogo e preventivo gratuiti online',
    hero: {
      h1: 'Posa battiscopa',
      subtitle: 'Taglio di precisione, incollaggio pulito e sigillatura finale per stanze impeccabili.',
      image: heroBattiscopa,
    },
    overview:
      'Un battiscopa perfetto chiude il lavoro in modo professionale. Realizziamo sopralluogo, tagliamo con troncatrice a 45°, incolliamo o fissiamo con chiodini invisibili e sigilliamo la parte superiore per un risultato rifinito.',
    sections: [
      {
        id: '01',
        title: 'Rilievo',
        description: 'Misurazione dei lineari e consulenza sulla scelta del battiscopa (MDF, Legno, Alluminio).',
        detail: 'Soluzioni coordinate al pavimento e alle pareti.',
        icon: '🕵🏻‍♂️',
        size: 'big',
        image: 'https://m.media-amazon.com/images/I/61gfc0lQ2+L.jpg'
      },
      {
        id: '02',
        title: 'Inizio Posa',
        description: 'Tagli millimetrici per incroci perfetti e incollaggio angoli senza sbavature.',
        detail: 'Incroci perfetti anche su muri fuori squadro.',
        icon: '⚙️',
        size: 'small',
        image: 'https://lirp.cdn-website.com/bf9fdae6/dms3rep/multi/opt/massimo_gambino_lucidatura_pavimenti_016-432w.jpg'
      },
      {
        id: '03',
        title: 'Fissaggio Smart',
        description: 'Incollaggio a presa rapida o micro-chiodini in acciaio.',
        detail: 'Tenuta estrema senza sporcare le pareti.',
        icon: '📌',
        size: 'small',
        image: 'https://prestoimpresa.it/cdn/shop/products/Battiscopa55959659_grande.jpg?v=1673983876'
      },
      {
        id: '04',
        title: 'Sigillatura',
        description: 'Chiusura delle fughe d’ombra con silicone acrilico verniciabile o tono su tono.',
        detail: 'Effetto ottico uniforme e pulizia facilitata.',
        icon: '🖌️',
        size: 'big',
        image: heroBattiscopa
      }
    ],
     priceDisplay: "€5-7 / ml",
    videoSrc: videoPosaBattiscopa,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServiceFAQ' },
      { type: 'ServiceDescription' },
    ],
    features: [
      {
       id: 'tagli',
       icon: 'Slice',
       tag: 'Tagli precisi',
       label: 'a 45 gradi per incroci perfetti',
       color: 'text-green-400'
     },
      {
        id: 'sigillatura',
        icon: 'Paintbrush', // Nome della lucide-icon
        tag: 'Sigillatura pulita',
        label: 'pulita per finitura estetica',
        color: 'text-blue-400'
      },
    ]
  },
  'rivestimento-scale-milano': {
    order: 7,
    navLabel: 'Rivestimento scale',
    slug: 'rivestimento-scale-milano',
    pricingId: 'scala-parquet',
    pageTitle: 'Rivestimento Scale in Parquet a Milano | Progettazione su misura',
    metaDescription:
      'Rivestiamo scale a Milano con legno prefinito, pedate antiscivolo e finiture coordinate. Sopralluogo e preventivo gratuiti.',
    hero: {
      h1: 'Rivestimento scale in legno',
      subtitle: 'Sagomatura millimetrica, profili antiscivolo e finiture coordinate per scale perfette.',
      image: heroScale,
    },
    overview:
      'Trasformiamo la tua scala con rivestimenti in legno o SPC che si integrano con il pavimento esistente. Uniamo rilievo tridimensionale, taglio CNC e montaggio in opera per un risultato di design resistente nel tempo.',
    sections: [
      {
        id: '01',
        title: 'Rilievo',
        description: 'Controllo di alzate e pedate per replicare esattamente la geometria della scala.',
        detail: 'Precisione su ogni gradino.',
        icon: '📐',
        size: 'big',
        image: 'https://m.media-amazon.com/images/I/61gfc0lQ2+L.jpg'
      },
      {
        id: '03',
        title: 'Posa Strutturale',
        description: 'Incollaggio solido per garantire stabilità e silenziosità al calpestio.',
        detail: 'Eliminiamo scricchiolii e movimenti nel tempo.',
        icon: '🏗️',
        size: 'small',
        image: 'https://www.casiraghiparquet.com/wp-content/uploads/2019/04/scala-in-rovere.jpg'
      },
      {
        id: '04',
        title: 'Safety Check',
        description: 'Installazione di profili antiscivolo e collaudo finale di ogni singola alzata.',
        detail: 'Sicurezza prima di tutto.',
        icon: '🛡️',
        size: 'big',
        image: fotoRivestimentoGradini
      }
    ],
      priceDisplay: "€70 / gradino",
    videoSrc: fotoRivestimentoGradini,
    stats: {
      projects: "180+",
      mq: "6.200",
      year: "2025"
    },
    layout: [
      { type: 'HeroHome' },
      { type: 'ServiceExplainerSection' },
      { type: 'ServicePainVsSolution' },
      { type: 'ServiceFAQ' },
      { type: 'ServiceDescription' },
    ],
    features: [
      {
       id: 'tagli',
       icon: 'Slice',
       tag: 'Rivestimento completo o parziale',
       label: 'per incroci perfetti',
       color: 'text-green-400'
     },
      {
        id: 'tipo',
        icon: 'Paintbrush', // Nome della lucide-icon
        tag: 'finiture precise',
        label: 'rivestimento completo o parziale',
        color: 'text-blue-400'
      },
    ]
  },
};
