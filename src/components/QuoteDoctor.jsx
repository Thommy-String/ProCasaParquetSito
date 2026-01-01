import React, { useState, useEffect } from 'react';
import {
 AlertTriangle, FileSearch,
  CheckCircle2, XCircle, Send, ArrowRight,
  Trees, Layers, RefreshCcw, Armchair, Hammer,
  HelpCircle, Copy, Check, FileWarning, Activity
} from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

// --- DATABASE DOMANDE TECNICHE ---
const QUESTION_DATABASE = {
  // LOGISTICA (Casa Abitata)
  furniture: {
    id: 'furn',
    text: "Nel preventivo è scritto CHI sposta i mobili e se li rimettono a posto?",
    sub: "Se non è scritto, daranno per scontato che le stanze siano vuote. Il rischio è un extra di 300-500€ il primo giorno o la schiena rotta.",
    riskPoints: 20,
    missingLog: "Spostamento mobili non definito"
  },
  doors_habit: {
    id: 'doors_h',
    text: "Hanno incluso il taglio delle porte interne e della blindata?",
    sub: "In sovrapposizione il pavimento si alza. Se vivi lì, le porte ci sono già: vanno tagliate o non si aprono più.",
    riskPoints: 25,
    missingLog: "Taglio porte/blindata non incluso"
  },
  dust: {
    id: 'dust',
    text: "È specificato dove taglieranno e se usano aspiratori?",
    sub: "In casa abitata la polvere è il nemico n.1. Se tagliano in salotto senza aspirazione, pulirai polvere per mesi.",
    riskPoints: 10,
    missingLog: "Nessuna specificazione sulla polvere generata dai tagli"
  },

  // CANTIERE (Vuoto/Ristrutturazione)
  screed_moisture: {
    id: 'moist',
    text: "Hanno misurato l'umidità del massetto (Controllo al Carburo)?",
    sub: "Su massetto nuovo è OBBLIGATORIO per legge. Se posi su umido, il legno si gonfia e si stacca in 3 mesi.",
    riskPoints: 30,
    missingLog: "Controllo umidità massetto (Carburo) assente"
  },
  screed_level: {
    id: 'level',
    text: "Hanno verificato le quote rispetto ai bagni o altre stanze?",
    sub: "Se il nuovo pavimento risulta più alto delle piastrelle del bagno, serve un profilo speciale o un livellamento prima.",
    riskPoints: 15,
    missingLog: "Verifica quote/dislivelli assente"
  },

  // MATERIALE - INCOLLATO
  primer: {
    id: 'prim',
    text: "È inclusa la preparazione del fondo (Primer/Graffiatura)?",
    sub: "La colla non attacca sulla polvere o sulla vecchia ceramica liscia. Serve chimica specifica (spesso esclusa dal prezzo base).",
    riskPoints: 20,
    missingLog: "Primer/Preparazione fondo esclusi"
  },
  glue_cost: {
    id: 'glue',
    text: "La colla è 'inclusa' o 'a consumo'?",
    sub: "La colla silanica costa cara. 'A consumo' è un assegno in bianco: non sai quanto spenderai finché non finiscono.",
    riskPoints: 15,
    missingLog: "Costo colla non definito (A consumo)"
  },

  // MATERIALE - FLOTTANTE
  flatness: {
    id: 'flat',
    text: "Hanno controllato la planarità del fondo (buchi/dossi)?",
    sub: "Il flottante richiede un fondo perfetto. Se non è piano, si rompono gli incastri e il pavimento scricchiola.",
    riskPoints: 30,
    missingLog: "Verifica planarità assente (Rischio rottura incastri)"
  },
  underlay: {
    id: 'und',
    text: "È specificato marca e modello del materassino?",
    sub: "Il materassino decide il rumore e la durata. Un materassino economico si schiaccia in 6 mesi e il pavimento inizia a muoversi.",
    riskPoints: 10,
    missingLog: "Qualità materassino non specificata"
  },
  profiles: {
    id: 'prof',
    text: "Sono previsti i giunti di dilatazione (profili) nelle porte?",
    sub: "I pavimenti flottanti si dilatano col caldo. Senza giunti nelle porte, si sollevano al centro della stanza.",
    riskPoints: 15,
    missingLog: "Profili dilatazione non specificati"
  }
};

function QuoteDoctor() {
  const [step, setStep] = useState(0);
  const [context, setContext] = useState(null);
  const [material, setMaterial] = useState(null);

  const [quizQueue, setQuizQueue] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const [riskScore, setRiskScore] = useState(0);
  const [missingItems, setMissingItems] = useState([]);
  const [copied, setCopied] = useState(false); // Stato per il bottone copia

  // Generazione Dinamica Domande
  const generateQuestions = (ctx, mat) => {
    let q = [];
    // Contesto
    if (ctx === 'lived') {
      q.push(QUESTION_DATABASE.furniture);
      q.push(QUESTION_DATABASE.doors_habit);
      q.push(QUESTION_DATABASE.dust);
    } else {
      if (mat === 'glued_wood') q.push(QUESTION_DATABASE.screed_moisture);
      q.push(QUESTION_DATABASE.screed_level);
    }
    // Materiale
    if (mat === 'glued_wood') {
      q.push(QUESTION_DATABASE.primer);
      q.push(QUESTION_DATABASE.glue_cost);
    } else if (mat === 'floating_wood') {
      q.push(QUESTION_DATABASE.flatness);
      if (ctx === 'empty') q.push(QUESTION_DATABASE.screed_moisture);
      q.push(QUESTION_DATABASE.profiles);
    } else if (mat === 'spc') {
      q.push(QUESTION_DATABASE.flatness);
      q.push(QUESTION_DATABASE.profiles);
      q.push(QUESTION_DATABASE.underlay);
    }
    return q;
  };

  const handleContextSelect = (ctx) => { setContext(ctx); setStep(2); };

  const handleMaterialSelect = (mat) => {
    setMaterial(mat);
    const questions = generateQuestions(context, mat);
    setQuizQueue(questions);
    setStep(3);
  };

  const handleAnswer = (isGood) => {
    const currentQ = quizQueue[currentQIndex];
    if (!isGood) {
      setRiskScore(prev => prev + currentQ.riskPoints);
      setMissingItems(prev => [...prev, currentQ.missingLog]);
    }
    if (currentQIndex < quizQueue.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setStep(4);
    }
  };

  // --- LOGICA RISCHIO VISIVO (TACHIMETRO) ---
  const getRiskColor = () => {
    if (riskScore === 0) return 'bg-green-500';
    if (riskScore < 30) return 'bg-yellow-500';
    return 'bg-red-600';
  };
  const getRiskWidth = () => {
    // Normalizziamo su un max di 100 punti circa
    const pct = Math.min((riskScore / 80) * 100, 100);
    return `${pct}%`;
  };

  // --- GENERATORE TESTO NEGOZIAZIONE ---
  const getNegotiationText = () => {
    let text = "Ciao, stavo rileggendo il preventivo. Ho notato che mancano alcune specifiche importanti:\n\n";
    missingItems.forEach(item => text += `- ${item}\n`);
    text += "\nPotete inserirle per iscritto nel preventivo finale prima di procedere? Grazie.";
    return text;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getNegotiationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getVerdict = () => {
    if (riskScore === 0) return {
      title: "Preventivo Tecnico Blindato",
      desc: "Sembra tutto in ordine. Chi ha fatto questo preventivo è trasparente.",
      color: "bg-green-50 text-green-900 border-green-200",
      icon: <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
    };
    if (riskScore <= 35) return {
      title: "Attenzione: Lacune Tecniche",
      desc: "Mancano specifiche importanti. Rischi che ti chiedano questi soldi dopo.",
      color: "bg-amber-50 text-amber-900 border-amber-200",
      icon: <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
    };
    return {
      title: "Blocca Tutto: Preventivo Pericoloso",
      desc: "Mancano le basi strutturali (fondo, porte, logistica). Questo prezzo basso è un'esca: pagherai il 30% in più in extra.",
      color: "bg-red-50 text-red-900 border-red-200",
      icon: <XCircle className="w-16 h-16 text-red-600 mb-4" />
    };
  };

  const restart = () => {
    setStep(0); setContext(null); setMaterial(null);
    setRiskScore(0); setMissingItems([]); setCurrentQIndex(0);
  };

  const handleWhatsAppReview = () => {
    // 1. Traccia la conversione (senza URL per evitare conflitti di redirect)
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }

    if (!estimate) return;
    const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, '');
    const text = `Ciao, ho fatto il check preventivo sul vostro sito.\nTi mando la foto del preventivo che ho ricevuto (oscurata) per un parere gratuito?`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* CARD PRINCIPALE */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative min-h-[600px] flex flex-col">

          {/* HEADER SCANNER */}
          <div className="bg-gray-900 p-5 shadow-md z-10 relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                  <FileSearch className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-none">Scanner Anti-Fregatura</h3>
                  <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Analisi Anti-Sorprese</p>
                </div>
              </div>
              {step >= 3 && step < 4 && (
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Livello Rischio</p>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getRiskColor()}`}
                      style={{ width: getRiskWidth() }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          
          {/* STEP 0: INTRO - "RED FLAG" */}
          {step === 0 && (
            <div className="p-8 flex-1 flex flex-col justify-center text-center animate-fadeIn">

              {/* IMMAGINE VETTORIALE "PREVENTIVO SBAGLIATO" */}
              <div className="relative w-24 h-32 mx-auto mb-6 bg-white border border-gray-200 shadow-xl rounded-lg transform rotate-[-2deg]">
                <div className="absolute top-2 left-2 right-2 h-2 bg-gray-100 rounded"></div>
                <div className="absolute top-6 left-2 w-1/2 h-2 bg-gray-100 rounded"></div>
                <div className="absolute top-12 left-2 right-2 space-y-2">
                  <div className="h-1 bg-gray-100 rounded w-full"></div>
                  <div className="h-1 bg-gray-100 rounded w-full"></div>
                  <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                </div>
                <div className="absolute top-10 right-4 w-6 h-6 border-2 border-red-500 rounded-full opacity-80 animate-ping"></div>
                <div className="absolute bottom-8 left-4 w-8 h-8 border-2 border-red-500 rounded-full opacity-80"></div>
                <div className="absolute -right-4 -bottom-2 bg-red-100 p-2 rounded-full border border-red-200 shadow-lg">
                  <FileWarning className="w-6 h-6 text-red-600" />
                </div>
              </div>

              {/* --- NUOVO BADGE SOCIAL PROOF --- */}
              <div className="flex justify-center mb-6">
                 <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">
                       9 preventivi analizzati oggi
                    </span>
                 </div>
              </div>
              {/* ------------------------------- */}

              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                Hai già un preventivo? <br />
                <span className="font-bold text-red-600 bg-red-50 px-1">Analizzalo con Scanner ANTI-FREGATURA</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Spesso il "prezzo più basso" nasconde costi che ti presenteranno a lavori iniziati.
                <br /><br />
                Nel 70% dei casi mancano voci critiche come <span className="font-medium text-gray-800">taglio porte, primer o profili</span>.
                Risultato? <span className="font-bold text-red-600 bg-red-50 px-1">Il prezzo finale schizza. </span> Togliti ogni dubbio.
              </p>

              <button
                onClick={() => setStep(1)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg shadow-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
              >
                Inizia il Check Gratuito (30sec) <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-gray-400 mt-4">
                 <Activity className="w-3 h-3 inline mr-1"/> 
                 Oltre 478 proprietari di casa salvati da costi extra.
              </p>
            </div>
          )}

          {/* STEP 1: CONTESTO */}
          {step === 1 && (
            <div className="p-8 flex-1 flex flex-col animate-slideInRight">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Situazione Attuale</h3>
              <p className="text-gray-500 mb-6 text-sm">Le voci di costo (e i rischi) cambiano totalmente.</p>

              <div className="grid gap-4 mt-2">
                <button onClick={() => handleContextSelect('lived')} className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700 group-hover:scale-110"><Armchair className="w-6 h-6" /></div>
                  <div>
                    <span className="block font-bold text-gray-900 text-lg">Casa Abitata / Arredata</span>
                    <span className="text-xs text-gray-500">Logistica complessa: mobili, porte, polvere</span>
                  </div>
                </button>
                <button onClick={() => handleContextSelect('empty')} className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700 group-hover:scale-110"><Hammer className="w-6 h-6" /></div>
                  <div>
                    <span className="block font-bold text-gray-900 text-lg">Cantiere / Ristrutturazione</span>
                    <span className="text-xs text-gray-500">Rischi strutturali: massetto, quote, umidità</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: MATERIALE */}
          {step === 2 && (
            <div className="p-8 flex-1 flex flex-col animate-slideInRight">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tipo di Posa Prevista</h3>

              <div className="grid gap-3 mt-4">
                <button onClick={() => handleMaterialSelect('glued_wood')} className="p-4 border-2 border-gray-100 rounded-xl hover:border-amber-600 hover:bg-amber-50 flex items-center gap-3 text-left transition-all">
                  <Trees className="w-5 h-5 text-amber-700" />
                  <span className="font-bold text-gray-800">Parquet Legno (Incollato)</span>
                </button>

                <button onClick={() => handleMaterialSelect('floating_wood')} className="p-4 border-2 border-gray-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 flex items-center gap-3 text-left transition-all">
                  <Layers className="w-5 h-5 text-orange-600" />
                  <div>
                    <span className="block font-bold text-gray-800">Prefinito (Flottante)</span>
                    <span className="block text-xs text-gray-500">Posa su materassino, no colla</span>
                  </div>
                </button>

                <button onClick={() => handleMaterialSelect('spc')} className="p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 flex items-center gap-3 text-left transition-all">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-800">SPC / Laminato</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DOMANDE DINAMICHE */}
          {step === 3 && quizQueue.length > 0 && (
            <div className="p-8 flex-1 flex flex-col animate-slideInRight">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-bold text-gray-400 uppercase">Check Tecnico {currentQIndex + 1}/{quizQueue.length}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {quizQueue[currentQIndex].text}
                </h3>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-blue-900 italic">
                    <span className="font-bold not-italic">Il rischio:</span> {quizQueue[currentQIndex].sub}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 mt-6">
                <button onClick={() => handleAnswer(true)} className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-800 font-bold text-gray-600 transition-all flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600" /> Sì, scritto chiaramente
                </button>
                <button onClick={() => handleAnswer(false)} className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-500 hover:text-red-800 font-bold text-gray-600 transition-all flex items-center gap-3 shadow-sm">
                  <XCircle className="w-5 h-5 text-red-600" /> No / Non so / Assente
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RISULTATO E AZIONI */}
          {step === 4 && (
            <div className="p-8 text-center flex-1 flex flex-col animate-scaleIn overflow-y-auto">
              {(() => {
                const verdict = getVerdict();
                return (
                  <>
                    <div className="flex justify-center">{verdict.icon}</div>
                    <h2 className={`text-2xl font-extrabold mb-2 ${riskScore === 0 ? 'text-green-800' : riskScore <= 35 ? 'text-amber-700' : 'text-red-700'
                      }`}>{verdict.title}</h2>

                    <div className={`p-4 rounded-xl border mb-6 text-sm ${verdict.color}`}>
                      {verdict.desc}
                    </div>

                    {/* SEZIONE KILLER FEATURE: COPIA INCOLLA */}
                    {missingItems.length > 0 && (
                      <div className="text-left bg-gray-50 p-5 rounded-xl mb-6 border border-gray-200 shadow-inner">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                            🛡️ Messaggio Negoziazione
                          </p>
                          <span className="text-[10px] text-gray-400">Copia e manda all'azienda</span>
                        </div>

                        <div className="bg-white border border-gray-300 rounded p-3 text-xs text-gray-600 font-mono mb-3">
                          {getNegotiationText()}
                        </div>

                        <button
                          onClick={handleCopyText}
                          className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                          {copied ? <><Check className="w-4 h-4" /> Copiato!</> : <><Copy className="w-4 h-4" /> Copia Testo</>}
                        </button>
                      </div>
                    )}

          

                    <div className="mt-auto">

                      <p className="text-[10px] text-gray-400 mt-2 mb-6">
                        Oppure 
                      </p>
                      <button
                        onClick={handleWhatsAppReview}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                      >
                        <Send className="w-5 h-5" /> {/* Usa icona Send o MessageCircle */}
                        Inviaci il preventivo su Whatsapp.
                      </button>
                      <p className="text-[10px] text-gray-400 mt-2">
                        Basta una foto veloce. Faremo un controllo più approfondito. Puoi cancellare nomi.
                      </p>
                    </div>
                  </>
                );
              })()}

              <button onClick={restart} className="mt-4 text-gray-300 text-xs underline hover:text-gray-500 flex items-center justify-center gap-1">
                <RefreshCcw className="w-3 h-3" /> Riavvia Test
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default QuoteDoctor;