import heroPrefinito from '../assets/images/parquet/rovereNaturale.png';
import heroPrefinitoFlottante from '../assets/images/parquet/rovereMielato.png';
import heroPrefinitoSpina from '../assets/images/parquet/rovereSpina90.png';
import heroSpc from '../assets/images/parquet/parquetSPC.png';
import heroLaminato from '../assets/images/parquet/parquetLaminato.png';
import heroBattiscopa from '../assets/images/parquet/battiscopa10cm.png';
import heroScale from '../assets/images/parquet/posaScala.jpg';
import misuraUmiditaMassetto from '../assets/images/parquet/misuraUmiditaMassetto.png';
import tracciaturaLaserParquet from '../assets/images/parquet/tracciaturaLaserParquet.png';
import posaParquetIncollato from '../assets/images/parquet/posaParquetIncollato.png';
import posaParquetFlottante from '../assets/images/parquet/posaParquetFlottante.png';

export const servicesData = {
  'posa-parquet-prefinito-piacenza': {
    order: 1,
    navLabel: 'Posa parquet prefinito',
    slug: 'posa-parquet-prefinito-piacenza',
    pricingId: 'prefinito',
    pageTitle: 'Posa Parquet Prefinito a Piacenza | Pro Casa Parquet',
    metaDescription:
      'Posa parquet prefinito a Piacenza: analisi del massetto, incollaggio professionale e finiture certificate. Squadra specializzata Pro Casa Parquet.',
    hero: {
      h1: 'Posa parquet prefinito a Piacenza',
      subtitle: 'Incolliamo o posiamo flottante il tuo pavimento in legno con tempi certi e finitura perfetta.',
      image: heroPrefinito,
    },
    overview:
      'Il parquet prefinito nasce per chi desidera il calore del legno con tempi di cantiere rapidi. Con Pro Casa Parquet ottieni un sopralluogo tecnico, se necessario la preparazione del sottofondo e la posa professionale con collanti certificati EC1.',
    sections: [
      {
        title: 'Sopralluogo tecnico e diagnosi del sottofondo',
        image: misuraUmiditaMassetto,
        paragraphs: [
          'Rileviamo l’umidità residua con igrometro a carburo e controlliamo planarità e resistenza del massetto per evitare distacchi nel tempo.',
          'Definiamo lo schema di posa, la necessità di giunti di dilatazione e la direzione della luce naturale per valorizzare le venature della doga.',
        ],
        bullets: [
          {
            label: 'Analisi umidità CM',
            detail: 'Interveniamo solo se il valore rientra nei parametri (<2%) oppure pianifichiamo primer e barriera vapore.',
          },
          {
            label: 'Collanti certificati',
            detail: 'Utilizziamo adesivi silanici o poliuretanici EC1, elastici e privi di solventi.',
          },
          {
            label: 'Tracciatura ambienti',
            detail: 'Disegniamo assi e riferimenti in laser per allineare i tagli con porte e aperture.',
          },
        ],
      },
      {
        title: 'Preparazione, incollaggio e pressatura',
        image: posaParquetIncollato,
        paragraphs: [
          'Stendiamo primer consolidanti o autolivellanti dove necessario e incolliamo le doghe con spatola dentata adeguata al formato.',
          'Ogni fila viene pressata con martinetti e battitori in gomma per annullare micro-fughe e differenze di quota.',
        ],
        bullets: [
          {
            label: 'Giunzioni invisibili',
            detail: 'Tagliamo con troncatrice radiale e giunti a 45° nelle soglie per un risultato sartoriale.',
          },
          {
            label: 'Battiscopa coordinato',
            detail: 'Posiamo profili in MDF, legno o alluminio con silicone neutro colore parete.',
          },
        ],
      },
      {
        title: 'Finiture e collaudo finale',
        image: heroPrefinito,
        paragraphs: [
          'Lasciamo assestare l’adesivo per 24-48 ore, rimuoviamo residui e sigilliamo giunti per un’estetica impeccabile.',
          'Consegniamo scheda prodotti e protocollo di manutenzione per garantire la durabilità del pavimento.',
        ],
        bullets: [
          {
            label: 'Pulizia professionale',
            detail: 'Utilizziamo detergenti neutri senza aloni per lasciare il pavimento pronto all’arredo.',
          },
          {
            label: 'Collaudo con cliente',
            detail: 'Verifichiamo insieme stabilità, allineamenti e dettagli prima della consegna lavori.',
          },
        ],
      },
    ],
  },
  'posa-parquet-prefinito-flottante-piacenza': {
    order: 2,
    navLabel: 'Prefinito flottante',
    slug: 'posa-parquet-prefinito-flottante-piacenza',
    pricingId: 'prefinito-flottante',
    pageTitle: 'Posa Prefinito Flottante a Piacenza | Pavimento a click',
    metaDescription:
      'Posa parquet prefinito flottante a Piacenza: materassino certificato, posa a click e battiscopa coordinati. Squadra Pro Casa Parquet.',
    hero: {
      h1: 'Posa parquet prefinito flottante a Piacenza',
      subtitle: 'Il comfort del legno con posa senza colla: veloce, pulita e subito calpestabile.',
      image: heroPrefinitoFlottante,
    },
    overview:
      'Il prefinito flottante è ideale per ristrutturazioni rapide: posa a click su materassino tecnico, zero colla e possibilità di sostituire singole doghe nel tempo.',
    sections: [
      {
        title: 'Materassino tecnico e preparazione del sottofondo',
        image: 'https://media.adeo.com/media/556713/media.png?width=300',
        paragraphs: [
          'Valutiamo planarità e rigidità del supporto, intervenendo con rasature veloci quando necessario.',
          'Scegliamo materassini certificati per impianti radianti o isolamento acustico condominiale.',
        ],
        bullets: [
          {
            label: 'Barriera anti umidità',
            detail: 'Film PE integrato per posa su pavimenti esistenti senza rischio di risalita.',
          },
          {
            label: 'Spessori calibrati',
            detail: 'Compensano micro dislivelli mantenendo le tolleranze del produttore.',
          },
        ],
      },
      {
        title: 'Assemblaggio flottante con sistemi click',
        image: posaParquetFlottante,
        paragraphs: [
          'Utilizziamo blocchi di battuta e martelli in gomma per proteggere gli incastri.',
          'Sagomiamo stipiti e colonne con seghe a lama fine per giunti invisibili.',
        ],
        bullets: [
          {
            label: 'Giunti perimetrali controllati',
            detail: 'Distanziatori calibrati assicurano la corretta dilatazione del legno.',
          },
          {
            label: 'Sistema reversibile',
            detail: 'È possibile sostituire singole doghe in futuro senza intaccare l’intero pavimento.',
          },
        ],
      },
      {
        title: 'Finiture e consegna lavori',
        image: heroPrefinitoFlottante,
        paragraphs: [
          'Installiamo battiscopa coordinati o verniciabili e sigilliamo la parte superiore per evitare fughe d’ombra.',
          'Puliamo a fondo il pavimento e consegniamo il kit di manutenzione consigliato.',
        ],
        bullets: [
          {
            label: 'Soglie complanari',
            detail: 'Profili bassi in alluminio per raccordare ambienti con pavimenti differenti.',
          },
          {
            label: 'Consigli di manutenzione',
            detail: 'Scheda detergenti neutri e istruzioni per la cura quotidiana.',
          },
        ],
      },
    ],
  },
  'posa-parquet-prefinito-spina-piacenza': {
    order: 3,
    navLabel: 'Prefinito a spina',
    slug: 'posa-parquet-prefinito-spina-piacenza',
    pricingId: 'prefinito-spina',
    pageTitle: 'Posa Parquet Prefinito a Spina a Piacenza | Schemi sartoriali',
    metaDescription:
      'Posa parquet prefinito a spina a Piacenza: tracciatura laser, incollaggio professionale e finiture sartoriali. Prenota un sopralluogo Pro Casa Parquet.',
    hero: {
      h1: 'Posa parquet prefinito a spina a Piacenza',
      subtitle: 'Spina italiana, francese o ungherese: precisione millimetrica e incollaggio ad alte prestazioni.',
      image: heroPrefinitoSpina,
    },
    overview:
      'Studiamo geometrie e simmetrie, tagliamo ogni doga a misura e incolliamo con collanti elastici certificati per uno schema a spina stabile e scenografico.',
    sections: [
      {
        title: 'Tracciatura laser e definizione dello schema',
        image: tracciaturaLaserParquet,
        paragraphs: [
          'Definiamo l’asse principale con laser e calcoliamo sfondati per centrare l’effetto visivo.',
          'Realizziamo un campo di prova per verificare angolo e ritmo della spina prima dell’incollaggio definitivo.',
        ],
        bullets: [
          {
            label: 'Allineamento corridoi e porte',
            detail: 'Posizioniamo l’asse per ottenere file simmetriche nelle zone di passaggio.',
          },
          {
            label: 'Scelta schema',
            detail: 'Presentiamo varianti italiana 90°, francese 45° o ungherese 60°.',
          },
        ],
      },
      {
        title: 'Incollaggio e tagli sartoriali',
        image: 'https://mrsander.co.uk/wp-content/uploads/chevron-vs-herringbone-engineered-oak-herringbone-parquet-glue-down.jpeg',
        paragraphs: [
          'Stendiamo collante silanico bicomponente e posiamo con pressori per evitare micro fughe.',
          'Tagliamo con troncatrice radiale e rifiniamo con filettature su richiesta per un effetto boiserie.',
        ],
        bullets: [
          {
            label: 'Collanti elastici',
            detail: 'Assorbono le tensioni e riducono il rischio di scricchiolii nel tempo.',
          },
          {
            label: 'Tagli a vista invisibili',
            detail: 'Lame extra fini e carteggiatura bordo garantiscono chiusure precise.',
          },
        ],
      },
      {
        title: 'Sigillatura e protezione finale',
        image: heroPrefinitoSpina,
        paragraphs: [
          'Sigilliamo lungo le pareti con silicone neutro e installiamo battiscopa e profili coordinati.',
          'Puliamo e consegniamo il protocollo di manutenzione, con opzione trattamento UV protettivo.',
        ],
        bullets: [
          {
            label: 'Trattamento opzionale UV',
            detail: 'Protegge il legno da macchie e variazioni cromatiche nelle aree trafficante.',
          },
          {
            label: 'Collaudo con cliente',
            detail: 'Verifichiamo allineamento degli incroci e planarità prima del rilascio lavori.',
          },
        ],
      },
    ],
  },
  'posa-pavimento-spc-piacenza': {
    order: 4,
    navLabel: 'Posa SPC impermeabile',
    slug: 'posa-pavimento-spc-piacenza',
    pricingId: 'spc',
    pageTitle: 'Posa Pavimento SPC a Piacenza | Vinilico 100% impermeabile',
    metaDescription:
      'Installazione pavimenti SPC a Piacenza: rilievo, preparazione del supporto e posa a click con finiture impermeabili. Pro Casa Parquet.',
    hero: {
      h1: 'Posa pavimenti SPC a click a Piacenza',
      subtitle: 'Impermeabile, stabile e sottile: ideale per ristrutturazioni rapide senza demolizioni.',
      image: heroSpc,
    },
    overview:
      'Lo SPC (Stone Polymer Composite) abbina l’estetica del legno alla resistenza di un cuore minerale. È impermeabile al 100% e perfetto per bagni, cucine e locali commerciali. Ci occupiamo di tutto: dalla verifica del supporto alla posa a click con finiture coordinate.',
    sections: [
      {
        title: 'Accertamento dislivelli',
        image: 'https://m.media-amazon.com/images/I/51BBYk6GqPL._AC_UF1000,1000_QL80_.jpg',
        paragraphs: [
          'Misuriamo le differenze di quota: analizziamo insieme se necessario autolivellante rapido o materassini HD per uniformare micro dislivelli.',
          'Se necessario installiamo tappetini extra acustici certificati per impianti radianti o soluzioni anti-rumore.',
        ],
        bullets: [
          {
            label: 'Materassini specifici',
            detail: 'Utilizziamo tappetini con protezione anti-umidità integrata per posa su pavimenti esistenti.',
          },
          {
            label: 'Taglio porte e battute',
            detail: 'Rialziamo le porte esistenti e rimuoviamo battute ostacolanti per una posa continua.',
          },
        ],
      },
      {
        title: 'Posa a click',
        image: 'https://sc04.alicdn.com/kf/H0fb5232f9e9d41a98d5c0146482bd7e3y.jpg',
        paragraphs: [
          'Assemblaggio a secco con ferramenta dedicata per evitare tensioni lungo le pareti.',
          'Utilizziamo distanziatori calibrati per mantenere il giusto giunto perimetrale ed evitare rigonfiamenti nel tempo.',
        ],
        bullets: [
          {
            label: 'Incastro rinforzato',
            detail: 'Martello in gomma e blocchi di posa evitano micro-sbeccature sugli incastri.',
          },
          {
            label: 'Tagli complessi',
            detail: 'Sagomiamo intorno a colonne e sanitari con troncatrici a nastro per finiture precise.',
          },
        ],
      },
      {
        title: '',
        image: 'https://m.media-amazon.com/images/I/711s59GfBkL.jpg',
        paragraphs: [
          'Montiamo profili di terminazione coordinati, siliconiamo punti sensibili (docce, cucine) e installiamo battiscopa o coprifili.',
          'Consegniamo il pavimento già pronto al calpestio: niente tempi di asciugatura o odori.',
        ],
        bullets: [
          {
            label: 'Finitura bordo doccia',
            detail: 'Sigilliamo con silicone antibatterico trasparente ottimizzato per ambienti umidi.',
          },
          {
            label: 'Consigli manutentivi',
            detail: 'Fornitura scheda detergenti anti-graffio e guida per la pulizia quotidiana.',
          },
        ],
      },
    ],
  },
  'posa-pavimento-laminato-piacenza': {
    order: 5,
    navLabel: 'Posa laminato',
    slug: 'posa-pavimento-laminato-piacenza',
    pricingId: 'laminato',
    pageTitle: 'Posa Pavimento Laminato a Piacenza | Installazione rapida e pulita',
    metaDescription:
      'Posa laminato a Piacenza con materassino acustico, tagli a misura e rifiniture sartoriali. Preventivo rapido Pro Casa Parquet.',
    hero: {
      h1: 'Posa pavimento laminato a Piacenza',
      subtitle: 'Soluzione flottante ad alta resistenza: perfetta per rinnovare casa senza demolizioni.',
      image: heroLaminato,
    },
    overview:
      'Il laminato è l’alleato ideale per un restyling veloce: si posa flottante, resiste a graffi e usura e richiede poca manutenzione. Studiamo il progetto, prepariamo il piano di posa e montiamo battiscopa e profili per un risultato coerente con il tuo stile.',
    sections: [
      {
        title: 'Analisi e preparazione del piano di posa',
        image: 'https://m.media-amazon.com/images/I/51BBYk6GqPL._AC_UF1000,1000_QL80_.jpg',
        paragraphs: [
          'Controlliamo planarità e stabilità del supporto: se necessario interveniamo con rasature rapide o pannelli correttivi.',
          'Selezioniamo il materassino più adatto (acustico, termico, barriera vapore) in funzione dell’ambiente e dell’impianto radiante.',
        ],
        bullets: [
          {
            label: 'Materassini certificati',
            detail: 'Soluzioni 19dB condominiali o specifiche per riscaldamento a pavimento.',
          },
          {
            label: 'Posa sopra pavimento esistente',
            detail: 'Gestiamo soglie e differenze quota con profili adattatori coordinati.',
          },
        ],
      },
      {
        title: 'Posa flottante con sistemi click',
        image: 'https://cdn.manomano.com/media/edison/a/c/5/e/ac5e7257aeea.jpg',
        paragraphs: [
          'Assemblaggio veloce ma preciso, con controllo continuo dei giunti perimetrali per consentire la dilatazione del laminato.',
          'Sagomiamo gli elementi con sega circolare e rifinitori per ottenere incastri puliti attorno a stipiti e pilastri.',
        ],
        bullets: [
          {
            label: 'Protezione incastri',
            detail: 'Utilizziamo kit di battitura dedicati per evitare scheggiature.',
          },
          {
            label: 'Giunzioni sottoporta',
            detail: 'Profili bassi in alluminio o PVC per continuità estetica fra ambienti.',
          },
        ],
      },
      {
        title: 'Collaudo finale',
        image: 'https://www.floorcity.com/cdn/shop/collections/0445U_01027_ROOM.webp?v=1705635924',
        paragraphs: [
          'Installiamo battiscopa coordinati o verniciabili, sigillando lungo i muri per un aspetto ordinato.',
          'Prima della consegna effettuiamo un check completo e forniamo le istruzioni di manutenzione consigliate dal produttore.',
        ],
        bullets: [
          {
            label: 'Tagli invisibili',
            detail: 'Angoli a 45° e accostamenti senza fessure visibili.',
          },
          {
            label: 'Consegna documentazione',
            detail: 'Schede tecniche e certificati del materiale posato.',
          },
        ],
      },
    ],
  },
  'posa-battiscopa-piacenza': {
    order: 6,
    navLabel: 'Posa battiscopa',
    slug: 'posa-battiscopa-piacenza',
    pricingId: 'battiscopa',
    pageTitle: 'Posa Battiscopa a Piacenza | Tagli sartoriali e finiture pulite',
    metaDescription:
      'Posa professionale battiscopa a Piacenza: rilievo, taglio a 45°, incollaggio e sigillatura. Rifinire gli ambienti con Pro Casa Parquet.',
    hero: {
      h1: 'Posa battiscopa su misura a Piacenza',
      subtitle: 'Taglio di precisione, incollaggio pulito e sigillatura finale per stanze impeccabili.',
      image: heroBattiscopa,
    },
    overview:
      'Un battiscopa perfetto chiude il lavoro in modo professionale. Realizziamo sopralluogo, tagliamo con troncatrice a 45°, incolliamo o fissiamo con chiodini invisibili e sigilliamo la parte superiore per un risultato rifinito.',
    sections: [
      {
        title: 'Rilievo misure e scelta del profilo',
        image: 'https://m.media-amazon.com/images/I/61gfc0lQ2+L.jpg',
        paragraphs: [
          'Misuriamo lineari, angoli e nicchie per calcolare giacenze e punti critici.',
          'Consigliamo essenze o finiture laccate in funzione del pavimento e delle pareti.',
        ],
        bullets: [
          {
            label: 'Soluzioni coordinate',
            detail: 'Legno massello, MDF laccato, alluminio anodizzato o copricavi integrati.',
          },
          {
            label: 'Compatibilità impianti',
            detail: 'Studiamo tagli e forature per passaggi TV, rete o pompe di calore.',
          },
        ],
      },
      {
        title: 'Taglio e posa senza sbavature',
        image: 'https://lirp.cdn-website.com/bf9fdae6/dms3rep/multi/opt/massimo_gambino_lucidatura_pavimenti_016-432w.jpg',
        paragraphs: [
          'Tagliamo ogni pezzo con troncatrice radiale professionale e lame a 80 denti per evitare scheggiature.',
          'Applichiamo adesivi a presa rapida o chiodini in acciaio con finitura invisibile.',
        ],
        bullets: [
          {
            label: 'Angoli a coda di rondine',
            detail: 'Per angoli interni perfetti utilizziamo giunzioni a dente riducendo al minimo le fughe.',
          },
          {
            label: 'Corretta dilatazione',
            detail: 'Garantiamo micro-giunti perimetrali in presenza di pavimenti flottanti.',
          },
        ],
      },
      {
        title: 'Sigillatura e controllo finale',
        image: 'https://prestoimpresa.it/cdn/shop/products/Battiscopa55959659_grande.jpg?v=1673983876',
        paragraphs: [
          'Sigilliamo la parte superiore con silicone verniciabile o acrilico per eliminare fughe d’ombra.',
          'Puliamo le superfici e consegniamo l’ambiente pronto per l’arredo.',
        ],
        bullets: [
          {
            label: 'Silicone tono su tono',
            detail: 'Campioniamo il colore parete per un effetto ottico uniforme.',
          },
          {
            label: 'Collaudo',
            detail: 'Controlliamo la tenuta meccanica e l’allineamento prima di lasciare il cantiere.',
          },
        ],
      },
    ],
  },
  'rivestimento-scale-piacenza': {
    order: 7,
    navLabel: 'Rivestimento scale',
    slug: 'rivestimento-scale-piacenza',
    pricingId: 'scala-parquet',
    pageTitle: 'Rivestimento Scale in Parquet a Piacenza | Progettazione su misura',
    metaDescription:
      'Rivestiamo scale a Piacenza con legno prefinito o massello, pedate antiscivolo e finiture coordinate. Lavorazione sartoriale Pro Casa Parquet.',
    hero: {
      h1: 'Rivestimento scale in parquet su misura',
      subtitle: 'Sagomatura millimetrica, profili antiscivolo e finiture coordinate per scale scenografiche.',
      image: heroScale,
    },
    overview:
      'Trasformiamo la tua scala con rivestimenti in legno o SPC che si integrano con il pavimento esistente. Uniamo rilievo tridimensionale, taglio CNC e montaggio in opera per un risultato di design resistente nel tempo.',
    sections: [
      {
        title: 'Rilievo e progettazione del rivestimento',
        image: 'https://m.media-amazon.com/images/I/61gfc0lQ2+L.jpg',
        paragraphs: [
          'Rileviamo alzate e pedate con laser e modelli cartacei per replicare ogni geometria',
          'Definiamo battute, sagome dei pianerottoli e profili terminali in base allo stile della casa.',
        ],
        bullets: [
          {
            label: 'Campionatura finiture',
            detail: 'Disponiamo grafiche compatibili con il pavimento orizzontale o soluzioni a contrasto.',
          },
          {
            label: 'Studio antiscivolo',
            detail: 'Profili in alluminio zigrinato o fresature integrate per la massima sicurezza.',
          },
        ],
      },
      {
        title: 'Taglio e assemblaggio sartoriale',
        image: 'https://www.valles-parquet.it/wp-content/uploads/scale-in-legno-rovere-2.jpg',
        paragraphs: [
          'Sagomiamo ogni elemento con macchine CNC o sega a formato per ottenere incastri millimetrici.',
          'Incolliamo su supporti in compensato marino per garantire la stabilità anche in presenza di scale in cemento non perfette.',
        ],
        bullets: [
          {
            label: 'Incollaggio strutturale',
            detail: 'Adesivi poliuretanici bicomponente per un fissaggio definitivo.',
          },
          {
            label: 'Pedate monopezzo',
            detail: 'Utilizziamo tavole fino a 2,4 metri per evitare giunzioni visibili.',
          },
        ],
      },
      {
        title: 'Finiture, e collaudo',
        image: 'https://www.casiraghiparquet.com/wp-content/uploads/2019/04/scala-in-rovere.jpg',
        paragraphs: [
          'Se necessario Installiamo profili led, battiscopa laterali e raccordi con il pavimento del piano superiore.',
          'Trattiamo i bordi con vernici protettive antiscivolo e verifichiamo ogni alzata con il cliente.',
        ],
        bullets: [
          {
            label: 'Illuminazione integrata',
            detail: 'Opzionale: strip LED incassata con alimentazione nascosta.',
          },
          {
            label: 'Manutenzione programmata',
            detail: 'Consigliamo kit per il ritocco e la manutenzione annuale.',
          },
        ],
      },
    ],
  },
};
