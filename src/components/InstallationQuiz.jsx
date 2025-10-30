import React, { useState, useMemo } from 'react';
import { PHONE_NUMBER } from '../utils/constants';

// --- IMPORTA TUTTE LE ICONE NECESSARIE ---
import { 
  ClipboardCheck, Layers, Timer, Move3d, LayoutGrid, 
  Sparkles, Compass, GitBranch, Scissors, Hammer, Paintbrush, Scaling,
  Search // <-- ICONA AGGIUNTA per Sopralluogo
} from 'lucide-react';
import rovereNaturale from '../assets/images/parquet/rovereNaturale.png';
import rovereSpina from '../assets/images/parquet/rovereNaturaleSpinaItaliana.png';
import parquetLaminato from '../assets/images/parquet/parquetLaminato.png';
import parquetSPCSpina from '../assets/images/parquet/parquetSPCSpina.png';
import parquetSPC from '../assets/images/parquet/parquetSPCSpina.png';
import battiscopa5cm from '../assets/images/parquet/battiscopa5cm.png';
import battiscopa10cm from '../assets/images/parquet/battiscopa10cm.png';



// --- MAPPA ICONE PER LE FASI ---
const iconMap = {
  'search': (props) => <Search {...props} />, // <-- ICONA AGGIUNTA
  'clipboard-check': (props) => <ClipboardCheck {...props} />,
  'layers': (props) => <Layers {...props} />,
  'timer': (props) => <Timer {...props} />,
  'move-3d': (props) => <Move3d {...props} />,
  'layout-grid': (props) => <LayoutGrid {...props} />,
  'sparkles': (props) => <Sparkles {...props} />,
  'compass': (props) => <Compass {...props} />,
  'git-branch': (props) => <GitBranch {...props} />,
  'scissors': (props) => <Scissors {...props} />,
  'hammer': (props) => <Hammer {...props} />,
  'paintbrush': (props) => <Paintbrush {...props} />,
  'scaling': (props) => <Scaling {...props} />,
};

// --- CONFIGURAZIONE PREZZI (Invariata) ---
const POSA_PRICES = {
  base: {
    prefinito_dritto: 25, prefinito_spina: 30, spc_dritto: 15, spc_spina: 22, 
    laminato: 15, battiscopa_low: 7, battiscopa_high: 9,
  },
  variables: {
    primer_su_vecchio_mq: 7, rimozione_e_smaltimento_mq: 12, 
    spostamento_mobili_fisso: 150, colla_al_mq: 7, 
  }
};

// --- DATABASE PROCESSI (Invariato) ---
const POSA_PROCESS_STEPS = {
  prefinito_dritto: [
    { icon: 'clipboard-check', title: 'Fase 1: Preparazione Fondo', description: 'Verifica umidità e planarità del massetto. Stesura del collante ecologico.' },
    { icon: 'layers', title: 'Fase 2: Posa Incollata Dritta', description: 'Incolliamo ogni tavola con precisione, garantendo una posa solida, stabile e silenziosa.' },
    { icon: 'timer', title: 'Fase 3: Assestamento (24-48h)', description: 'Il pavimento necessita di 24-48 ore per l\'asciugatura completa della colla prima di poter essere calpestato.' }
  ],
  prefinito_spina: [
    { icon: 'compass', title: 'Fase 1: Tracciatura Millimetrica', description: 'La posa a spina (Italiana, Francese o Ungherese) richiede una tracciatura a terra precisa dell\'asse centrale.' },
    { icon: 'git-branch', title: 'Fase 2: Incollaggio a Schema', description: 'Ogni singola tavola viene incollata al massetto seguendo lo schema con massima precisione.' },
    { icon: 'timer', title: 'Fase 3: Assestamento (48h)', description: 'Data la complessità, attendiamo 48 ore per garantire l\'adesione perfetta di ogni elemento.' }
  ],
  spc_dritto: [
    { icon: 'move-3d', title: 'Fase 1: Posa del Materassino', description: 'Stendiamo il materassino isolante specifico per SPC, che serve a compensare micro-irregolarità.' },
    { icon: 'layout-grid', title: 'Fase 2: Installazione a Click', description: 'La posa avviene a secco, senza colla. Le doghe vengono incastrate tra loro con il sistema a click.' },
    { icon: 'sparkles', title: 'Fase 3: Finitura e Uso Immediato', description: 'Installiamo il battiscopa. Il pavimento è flottante, quindi calpestabile e arredabile subito.' }
  ],
  spc_spina: [
    { icon: 'compass', title: 'Fase 1: Tracciatura e Materassino', description: 'Stendiamo il materassino e tracciamo l\'asse di posa per la spina, che richiede più precisione.' },
    { icon: 'layout-grid', title: 'Fase 2: Installazione a Click (Spina)', description: 'La posa avviene a secco, incastrando le doghe con lo schema a spina dedicato.' },
    { icon: 'sparkles', title: 'Fase 3: Finitura e Uso Immediato', description: 'Installiamo il battiscopa. Il pavimento è flottante e subito calpestabile.' }
  ],
  laminato: [
    { icon: 'move-3d', title: 'Fase 1: Posa del Tappetino', description: 'Stendiamo il tappetino isolante, essenziale per il comfort acustico e per proteggere il laminato.' },
    { icon: 'layout-grid', title: 'Fase 2: Posa Flottante a Click', description: 'Le tavole di laminato vengono posate a secco, incastrandole l\'una con l\'altra.' },
    { icon: 'sparkles', title: 'Fase 3: Finitura Immediata', description: 'Dopo aver posato le tavole, installiamo il battiscopa. Il pavimento è subito pronto.' }
  ],
  battiscopa_low: [
    { icon: 'scissors', title: 'Fase 1: Taglio di Precisione', description: 'Eseguiamo tagli a 45° precisi sugli angoli (interni ed esterni) per giunzioni invisibili.' },
    { icon: 'hammer', title: 'Fase 2: Fissaggio', description: 'Fissiamo il battiscopa alla parete utilizzando collanti specifici o chiodini in acciaio quasi invisibili.' },
    { icon: 'paintbrush', title: 'Fase 3: Sigillatura', description: 'Per un look pulito e finito, sigilliamo la parte superiore del battiscopa e gli angoli.' }
  ],
  battiscopa_high: [ 
    { icon: 'scissors', title: 'Fase 1: Taglio di Precisione', description: 'Eseguiamo tagli a 45° precisi sugli angoli (interni ed esterni) per giunzioni invisibili.' },
    { icon: 'hammer', title: 'Fase 2: Fissaggio', description: 'Fissiamo il battiscopa alla parete utilizzando collanti specifici o chiodini in acciaio quasi invisibili.' },
    { icon: 'paintbrush', title: 'Fase 3: Sigillatura', description: 'Per un look pulito e finito, sigilliamo la parte superiore del battiscopa e gli angoli.' }
  ],
};

// --- MODIFICA 4: MAPPA DEI NOMI PULITI ---
const SERVICE_NAME_MAP = {
  prefinito_dritto: "Posa Prefinito Dritto",
  prefinito_spina: "Posa Prefinito a Spina",
  spc_dritto: "Posa SPC Dritto",
  spc_spina: "Posa SPC a Spina",
  laminato: "Posa Laminato",
  battiscopa_low: "Posa Battiscopa (<= 5cm)",
  battiscopa_high: "Posa Battiscopa (> 5cm)",
};

const SERVICE_BACKGROUND_MAP = {
  prefinito_dritto: rovereNaturale,
  prefinito_spina: rovereSpina,
  spc_dritto: parquetSPC,
  spc_spina: parquetSPCSpina,
  laminato: parquetLaminato,
  battiscopa_low: battiscopa5cm,
  battiscopa_high: battiscopa10cm,
};

// Componente helper per le card-bottone (Invariato, corretto)
function QuizOption({ label, description, name, value, selectedValue, onChange, background }) {
  const isSelected = selectedValue === value;
  if (background) {
    return (
      <label
        className={`relative flex min-h-[140px] cursor-pointer overflow-hidden rounded-2xl border transition-all ${
          isSelected
            ? 'border-blue-500 ring-2 ring-blue-400'
            : 'border-gray-200 hover:border-blue-200'
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative z-10 flex w-full flex-col justify-end p-4 text-white">
          <span className="text-sm font-semibold drop-shadow-md">{label}</span>
          {description && (
            <p className="text-xs text-white/80 mt-1 drop-shadow-md">
              {description}
            </p>
          )}
        </div>
        <input 
          type="radio" 
          name={name} 
          value={value} 
          checked={isSelected} 
          onChange={onChange}
          className="sr-only"
        />
      </label>
    );
  }

  return (
    <label
      className={`block cursor-pointer rounded-2xl border p-4 transition-all ${
        isSelected
          ? 'border-blue-500 ring-2 ring-blue-400 bg-blue-50'
          : 'border-gray-200 hover:border-blue-200 bg-white'
      }`}
    >
      <input 
        type="radio" 
        name={name} 
        value={value} 
        checked={isSelected} 
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm font-semibold text-gray-900">{label}</span>
      {description && (
        <p className="text-xs text-gray-600 mt-1">
          {description}
        </p>
      )}
    </label>
  );
}

// Il componente principale del Quiz
function InstallationQuiz() {
  const [unitValue, setUnitValue] = useState(50);
  const [showResult, setShowResult] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [answers, setAnswers] = useState({
    serviceType: '',
    subfloor: 'massetto',
    removal: 'no',
    furniture: 'no',
    colla: 'no',
    timing: 'valuto'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
    if (name === 'serviceType' && value) {
      setIsExpanded(true);
    }
    setShowResult(false);
  };

  const handleUnitChange = (e) => {
    setUnitValue(Number(e.target.value));
    setShowResult(false);
  };

  // --- LOGICA DINAMICA (Invariata) ---
  const isBattiscopa = answers.serviceType?.includes('battiscopa') ?? false;
  const unitLabel = isBattiscopa ? 'ml' : 'mq';
  const canShowDetails = isExpanded && Boolean(answers.serviceType);
  const showExtraQuestions = canShowDetails && !isBattiscopa;

  const thumbPositionPercentage = useMemo(() => {
    const min = 10, max = 200;
    return ((unitValue - min) / (max - min)) * 100;
  }, [unitValue]);

  // --- MOTORE DI CALCOLO AGGIORNATO ---
  const estimate = useMemo(() => {
    const { serviceType, subfloor, removal, furniture, colla } = answers;

    if (!serviceType) {
      return null;
    }
    
    // --- MODIFICA 4: Usa la mappa dei nomi ---
    const serviceName = SERVICE_NAME_MAP[serviceType] || "Servizio";

    let baseCost = POSA_PRICES.base[serviceType] * unitValue;
    let variableItems = [];
    let total = baseCost;
    
    if (showExtraQuestions) {
      if (removal === 'si') {
        const cost = POSA_PRICES.variables.rimozione_e_smaltimento_mq * unitValue;
        variableItems.push({ label: `Rimozione e smaltimento (~${unitValue}mq)`, cost });
        total += cost;
      }
      if (removal === 'no' && subfloor === 'pavimento_esistente' && (serviceType.includes('incollato') || serviceType.includes('spina'))) {
        const cost = POSA_PRICES.variables.primer_su_vecchio_mq * unitValue;
        variableItems.push({ label: `Preparazione fondo (Primer su piastrella per ~${unitValue}mq)`, cost });
        total += cost;
      }
      if (colla === 'si') {
        const cost = POSA_PRICES.variables.colla_al_mq * unitValue;
        variableItems.push({ label: `Fornitura colla (~${unitValue}mq)`, cost });
        total += cost;
      }
    }
    
    if (furniture === 'si') {
      const cost = POSA_PRICES.variables.spostamento_mobili_fisso;
      variableItems.push({ label: `Spostamento mobili (costo fisso)`, cost });
      total += cost;
    }

    let typeStepsKey = serviceType;
    if (serviceType.includes('prefinito_spina')) typeStepsKey = 'prefinito_spina';
    
    const typeSteps = POSA_PROCESS_STEPS[typeStepsKey];

    return {
      // --- MODIFICA 4: Label pulita ---
      baseLabel: `${serviceName} (~${unitValue}${unitLabel})`,
      baseCost,
      variableItems,
      total,
      typeSteps,
    };
  // --- MODIFICA 2: Aggiunta 'pavimento_esistente' alla dipendenza ---
  }, [unitValue, answers, showExtraQuestions, isBattiscopa, unitLabel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answers.serviceType) {
      setShowResult(false);
      return;
    }
    setShowResult(true);
  };

  return (
    <section id="preventivatore" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Preventivo in 30sec
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* --- IL FORM --- */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
              
              {/* Step 1 - Tipo di servizio */}
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Che tipo di posa ti serve?
                </h3>
                <p className="text-sm text-gray-500 mb-6">Seleziona una voce per sbloccare gli altri passaggi.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <QuizOption label="Prefinito Dritto" description="(Incollato)" name="serviceType" value="prefinito_dritto" background={SERVICE_BACKGROUND_MAP.prefinito_dritto} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="Prefinito Spina" description="90°, 45°, 60°" name="serviceType" value="prefinito_spina" background={SERVICE_BACKGROUND_MAP.prefinito_spina} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="Laminato" description="(Flottante)" name="serviceType" value="laminato" background={SERVICE_BACKGROUND_MAP.laminato} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="SPC Dritto" description="(Flottante)" name="serviceType" value="spc_dritto" background={SERVICE_BACKGROUND_MAP.spc_dritto} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="SPC Spina" description="(Flottante)" name="serviceType" value="spc_spina" background={SERVICE_BACKGROUND_MAP.spc_spina} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="Battiscopa (fino 5cm)" name="serviceType" value="battiscopa_low" background={SERVICE_BACKGROUND_MAP.battiscopa_low} selectedValue={answers.serviceType} onChange={handleChange} />
                  <QuizOption label="Battiscopa (oltre 5cm)" name="serviceType" value="battiscopa_high" background={SERVICE_BACKGROUND_MAP.battiscopa_high} selectedValue={answers.serviceType} onChange={handleChange} />
                </div>
              </div>

              {canShowDetails && (
                <>
                  {/* Step 2 - Quantità */}
                  <div className="py-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      2. Seleziona i {isBattiscopa ? "Metri Lineari" : "Metri Quadri"}
                    </h3>
                    <div className="relative pt-6">
                      <span 
                        className="absolute text-blue-600 text-2xl font-bold"
                        style={{
                          left: `${thumbPositionPercentage}%`,
                          transform: 'translateX(-50%)',
                          top: '0',
                        }}
                      >
                        {unitValue} {unitLabel}
                      </span>
                      <input
                        type="range" min={10} max={200} step={5} value={unitValue} onChange={handleUnitChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-blue"
                      />
                    </div>
                  </div>

                  {/* Step 3 - Dettagli fondo (solo se necessario) */}
                  {showExtraQuestions && (
                    <div className="py-8 border-t border-gray-200 space-y-8">
                      <h3 className="text-xl font-semibold text-gray-900">3. Dettagli sul sottofondo</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div>
                          <h4 className="text-base font-semibold text-gray-700 mb-3">Su cosa posiamo?</h4>
                          <div className="space-y-3">
                            <QuizOption label="Massetto" name="subfloor" value="massetto" selectedValue={answers.subfloor} onChange={handleChange} />
                            <QuizOption label="Pavimento esistente" name="subfloor" value="pavimento_esistente" selectedValue={answers.subfloor} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-700 mb-3">Devi rimuovere il pavimento attuale?</h4>
                          <div className="space-y-3">
                            <QuizOption label="No, posiamo sopra" name="removal" value="no" selectedValue={answers.removal} onChange={handleChange} />
                            <QuizOption label="Sì, va rimosso" name="removal" value="si" selectedValue={answers.removal} onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-700 mb-3">Hai bisogno della fornitura di colla?</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <QuizOption label="Sì, fornita da voi" name="colla" value="si" selectedValue={answers.colla} onChange={handleChange} />
                          <QuizOption label="No, l'ho già io" name="colla" value="no" selectedValue={answers.colla} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step finale - Tempi e mobili */}
                  <div className="py-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      {showExtraQuestions ? "4. Tempi e spazi" : "3. Tempi e spazi"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-base font-semibold text-gray-700 mb-3">Stanze già vuote?</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <QuizOption label="Sì, libere" name="furniture" value="no" selectedValue={answers.furniture} onChange={handleChange} />
                          <QuizOption label="No, ci sono mobili" name="furniture" value="si" selectedValue={answers.furniture} onChange={handleChange} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-700 mb-3">Quando vorresti iniziare?</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <QuizOption label="Il prima possibile" name="timing" value="subito" selectedValue={answers.timing} onChange={handleChange} />
                          <QuizOption label="Sto valutando" name="timing" value="valuto" selectedValue={answers.timing} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {/* BOTTONE CALCOLA */}
              <div className="text-center mt-10">
                <button 
                  type="submit"
                  disabled={!canShowDetails}
                  className={`px-12 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-blue-500/50 ${
                    canShowDetails
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  Mostra la mia stima
                </button>
              </div>

            </div>
          </form>

          {/* --- IL BLOCCO DEI RISULTATI --- */}
          {showResult && estimate && (
            <div className="mt-12 bg-white p-6 md:p-10 rounded-2xl border-2 border-blue-600 shadow-2xl animate-fadeIn">
              
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">La tua stima è pronta</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Colonna 1: Preventivo */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Dettaglio Costi</h4>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <ul className="divide-y divide-gray-200">
                      <li className="flex justify-between items-center py-3">
                        <span className="text-gray-700">{estimate.baseLabel}</span>
                        <span className="font-semibold text-gray-900">{estimate.baseCost.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
                      </li>
                      {estimate.variableItems.map((item, index) => (
                        <li key={index} className="flex justify-between items-center py-3">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-semibold text-gray-900">{item.cost.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
                        </li>
                      ))}
                      <li className="flex justify-between items-center pt-4 mt-4 border-t-2 border-gray-300">
                        <span className="text-xl font-bold text-gray-900">Stima Totale</span>
                        <span className="text-2xl font-bold text-blue-600">{estimate.total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    *Questa stima è approssimativa. Costi extra per livellamento massetto o riparazioni saranno valutati solo durante il sopralluogo gratuito.
                  </p>
                </div>
                
                {/* Colonna 2: Processo di Posa */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Il Tuo Processo di Posa</h4>
                  <ol className="relative border-l border-gray-200">
                    
                    {/* --- MODIFICA 5: FASE 0 (Sopralluogo) --- */}
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                        <Search className="w-5 h-5 text-blue-800" />
                      </span>
                      <div className="ml-2">
                        <h5 className="text-sm font-semibold text-gray-900">Fase 0: Sopralluogo Gratuito</h5>
                        <p className="text-sm text-gray-600">Confermiamo le misure e verifichiamo il sottofondo per finalizzare il preventivo senza sorprese.</p>
                      </div>
                    </li>

                    {/* Fasi Tecniche */}
                    {estimate.typeSteps.map((step, index) => {
                      const Icon = iconMap[step.icon] || ClipboardCheck;
                      return (
                        <li key={index} className="mb-6 ml-6">
                          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <Icon className="w-5 h-5 text-blue-800" />
                          </span>
                          <div className="ml-2">
                            <h5 className="text-sm font-semibold text-gray-900">{step.title}</h5>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

              </div>
              
              {/* CTA Finale */}
              <div className="text-center mt-10 border-t border-gray-200 pt-8">
                <p className="text-lg text-gray-700 mb-4">Parliamone.</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-700 md:px-10 md:py-4 md:text-lg"
                >
                  Chiama per un sopralluogo gratuito
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default InstallationQuiz;
