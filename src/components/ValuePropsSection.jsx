import React from 'react';
import { ArrowRight, CheckCircle2, Banknote, ShieldCheck, Sofa, UserCheck, MessageCircle } from 'lucide-react';

const ValuePropsSection = () => {
  const props = [
    {
      title: "TI FIDARESTI DI UN ACCONTO? NOI NO. PAGHI SOLO A LAVORO FINITO.",
      tag: "ACCONTO ZERO",
      tagColor: "bg-blue-100 text-blue-700",
      buttonColor: "bg-blue-50",
      subtitle: "Non chiediamo anticipi. Paghi solo per quello che abbiamo effettivamente posato. Se il montaggio dura più giorni, dividiamo il totale al termine di ogni giornata. Ad esempio, su un lavoro da €1.000 che dura due giorni, pagherai €500 al termine della prima giornata di lavoro e i restanti €500 solo quando il pavimento sarà finito.",
      cta: "Domande? Parlaimone su whatsapp",
      fuds: "Senza impegno",
      icon: <Banknote className="w-5 h-5" />,
      image: "https://i.ebayimg.com/images/g/NCAAAOSwRetf3deR/s-l1200.jpg",
    },
    {
      title: "SAI GIÀ QUANTO PAGHI PRIMA DI INIZIARE, PRECISO AL CENTESIMO.",
      tag: "PREZZO BLOCCATO",
      tagColor: "bg-orange-100 text-orange-700",
      buttonColor: "bg-orange-50",
      subtitle: "Basta preventivi che lievitano 'per imprevisti'. Il nostro prezzo è blindato: include tutti i dettagli tecnici che altri ti farebbero pagare extra a fine cantiere a caro prezzo.",
      cta: "Ottieni preventivo gratis su Whatsapp",
      fuds: "Senza impegno.",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "https://www.nikkisplate.com/wp-content/uploads/2023/03/Modern-white-oak-flooring-ideas-2.jpeg",
      reverse: true
    },
    {
      title: "NON ALZARE UN DITO: SE HAI MOBILI LI SPOSTIAMO NOI.",
      tag: "HAI MOBILI? E QUINDI?",
      tagColor: "bg-green-100 text-green-700",
      buttonColor: "bg-green-50",
      subtitle: "La tua unica preoccupazione deve essere scegliere il pavimento. Gestiamo noi il trasloco interno dei mobili a tariffe agevolate. E se vuoi aiutarci, ti premiamo con uno sconto extra per l'efficienza.",
      cta: "Hai mobili molto pesanti? Parliamone",
      fuds: "Troviamo una soluzione comoda per i tuoi mobili.",
      icon: <Sofa className="w-5 h-5" />,
      image: "https://static.vecteezy.com/system/resources/thumbnails/032/384/976/small/furniture-on-white-background-ai-generative-photo.jpg",
    },
    {
      title: "SOLO POSATORI DI FIDUCIA IN CASA TUA. NESSUNO SCONOSCIUTO.",
      tag: "SICUREZZA",
      tagColor: "bg-purple-100 text-purple-700",
      buttonColor: "bg-purple-50",
      subtitle: "Sappiamo chi entra in casa tua: solo professionisti con anni di esperienza e referenze certificate con cui lavoriamo da una vita, come Andrea o Lorenzo. Niente personale improvvisato o ragazzi in tirocino. Rispetto assoluto per la tua casa e i tuoi spazi.",
      cta: "Chiedi quale parquettista verrà da te",
      fuds: "Personale qualificato e rispettoso",
      icon: <UserCheck className="w-5 h-5" />,
      image: "https://dpr-parquet.com/wp-content/uploads/2022/12/posa_in_opera.jpg",
      reverse: true
    },
    {
      title: "OTTIENI IL TUO PREZZO REALE IN 10 MINUTI.",
      tag: "VELOCITÀ",
      tagColor: "bg-yellow-100 text-yellow-700",
      buttonColor: "bg-yellow-50",
      subtitle: "Non aspettare giorni per un appuntamento. Mandaci le foto della tua stanza su WhatsApp: riceverai una stima tecnica precisa in tempo reale, valida come pre-sopralluogo gratuito per bloccare la data.",
      cta: "Scrivici su Whatsapp. Sempre online",
      fuds: "Senza impegno. Zero insistenza o spam.",
      icon: <MessageCircle className="w-5 h-5" />,
      image: "https://www.rossatopavimenti.it/wp-content/uploads/2022/12/posa-pavimento-legno-lisca-di-pesce-noale.jpg",
    }
  ];

  const handleWhatsAppClick = (propTitle) => {
    // Evento Conversione Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYYY', // Sostituisci con il tuo ID reale
      });
    }

    const phoneNumber = "393342221212";
    const message = encodeURIComponent(`Ciao! Vorrei informazioni su: ${propTitle}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-white py-16 md:py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-40">
        {props.map((prop, index) => (
          <div 
            key={index} 
            className={`flex flex-col gap-10 md:gap-20 items-center ${prop.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* --- TESTO --- */}
            <div className="w-full md:w-1/2 space-y-6">
              {/* Tag Notion-Style Colorato */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md font-bold text-[11px] uppercase tracking-wider ${prop.tagColor} shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]`}>
                {prop.icon}
                {prop.tag}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 leading-[0.95] uppercase tracking-tighter">
                {prop.title}
              </h2>
              
              <p className="text-[15px] md:text-lg text-slate-600 leading-relaxed border-l-4 border-slate-900 pl-5">
                {prop.subtitle}
              </p>

              <div className="pt-4 flex flex-col items-start gap-4">
                {/* Bottone Brutalista con il colore del Tag */}
                <button 
                  onClick={() => handleWhatsAppClick(prop.title)}
                  className={`
                    group relative inline-flex items-center gap-3
                    border-[2.5px] border-slate-900 
                    px-8 py-4 rounded-xl
                    text-slate-900 font-black uppercase tracking-tighter text-sm
                    transition-all duration-200
                    shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]
                    hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]
                    hover:translate-x-0.5 hover:translate-y-0.5
                    ${prop.buttonColor}
                  `}
                >
                  {prop.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* FUDS */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                  <div className="p-0.5 bg-green-100 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  {prop.fuds}
                </div>
              </div>
            </div>

            {/* --- IMMAGINE --- */}
            <div className="w-full md:w-1/2">
              <div className={`
                relative aspect-[4/3] overflow-hidden 
                border-[3px] border-slate-900 rounded-[2.5rem]
                shadow-[15px_15px_0px_0px_rgba(15,23,42,1)]
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                hover:rotate-0 transition-transform duration-500
              `}>
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropsSection;