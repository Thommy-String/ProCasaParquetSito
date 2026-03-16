// src/utils/quizData.js

export const quizDatabase = {
  
  // 1. PAGINA GENERICA PREFINITO (PricingId: 'prefinito')
  // Qui ha senso chiedere la macro-categoria
  'prefinito': {
    title: "Preventivo Rapido in 30 secondi",
    question1: "Quale tecnica di posa preferisci?",
    allowedTypes: ['prefinito_dritto', 'prefinito_spina', 'prefinito_flottante'], 
    extraQuestions: [
      {
        id: 'cantiere_status',
        question: "Situazione immobile:",
        options: [
          { label: "Cantiere Vuoto", value: "cantiere", detail: "Ristrutturazione" },
          { label: "Casa Abitata", value: "abitato", detail: "Ci sono mobili" }
        ]
      },
      {
        id: 'subfloor_type',
        question: "Su cosa posiamo?",
        options: [
          { label: "Massetto Nuovo", value: "screed" },
          { label: "Pavimento Esistente", value: "existing" },
          { label: "Non lo so", value: "unknown" }
        ]
      }
    ]
  },

  // 2. PAGINA SPECIFICA SPINA (PricingId: 'prefinito-spina')
  // Qui la domanda 1 è SPECIFICA sulle spine
  'prefinito-spina': {
    title: "Preventivo Rapido in 30 secondi",
    question1: "Quale geometria a Spina desideri?",
    allowedTypes: ['spina_italiana', 'spina_ungherese', 'spina_francese'], // <--- OPZIONI NUOVE
    
    extraQuestions: [
      {
        id: 'subfloor_condition',
        question: "Il fondo è perfettamente piano?",
        options: [
          { label: "Sì, in bolla", value: "flat", detail: "La spina richiede fondo perfetto" },
          { label: "No / Non so", value: "uneven", detail: "Potrebbe servire rasatura" }
        ]
      },
      {
        id: 'cantiere_status',
        question: "Situazione immobile:",
        options: [
          { label: "Cantiere Vuoto", value: "cantiere" },
          { label: "Casa Abitata", value: "abitato" }
        ]
      }
    ]
  },

  // 3. PAGINA SPECIFICA FLOTTANTE (PricingId: 'prefinito-flottante')
  'prefinito-flottante': {
    title: "Preventivo Rapido in 30 secondi",
    question1: "Che disegno di posa vuoi?",
    allowedTypes: ['flottante_dritto', 'flottante_diagonale', 'flottante_spina'], // <--- OPZIONI NUOVE
    
    extraQuestions: [
      {
        id: 'subfloor_type',
        question: "Su cosa appoggiamo il materassino?",
        options: [
          { label: "Massetto", value: "screed" },
          { label: "Pavimento Esistente", value: "existing" }
        ]
      },
      {
        id: 'cantiere_status',
        question: "Situazione immobile:",
        options: [
          { label: "Cantiere Vuoto", value: "cantiere" },
          { label: "Casa Abitata", value: "abitato" }
        ]
      }
    ]
  },

  // 4. PAGINA SPC (PricingId: 'spc')
  'spc': {
    title: "Preventivo in 30 secondi",
    question1: "Tipo di posa?",
    allowedTypes: ['spc_dritto', 'spc_spina'],
    extraQuestions: [
      {
        id: 'subfloor_regularity',
        question: "Il pavimento sotto ha fughe larghe?",
        options: [
          { label: "No, è liscio", value: "smooth" },
          { label: "Sì, fughe molto grandi o dislivelli", value: "grout_lines", detail: "Rischio che si vedano in controluce" }
        ]
      },
      {
        id: 'cantiere_status',
        question: "Situazione immobile:",
        options: [
          { label: "Cantiere Vuoto", value: "cantiere" },
          { label: "Casa Abitata", value: "abitato" }
        ]
      }
    ]
  },

  // 5. PAGINA LAMINATO (PricingId: 'laminato')
  'laminato': {
    title: "Preventivo Rapido in 30 secondi",
    question1: "Cosa devi installare?",
    allowedTypes: ['laminato_standard'],
    extraQuestions: [
       {
        id: 'cantiere_status',
        question: "Situazione immobile:",
        options: [
          { label: "Cantiere Vuoto", value: "cantiere" },
          { label: "Casa Abitata", value: "abitato" }
        ]
      },
      {
        id: 'subfloor_condition',
        question: "Il fondo è regolare?",
        options: [
          { label: "Sì", value: "flat" },
          { label: "No", value: "uneven" }
        ]
      }
    ]
  },
  
  // 6. PAGINA BATTISCOPA
 'battiscopa': {
    title: "Preventivo Rapido in 30 secondi",
    question1: "Altezza profilo",
    allowedTypes: ['battiscopa_low', 'battiscopa_high'],
    extraQuestions: [
      {
        id: 'existing_skirting',
        question: "C'è un vecchio battiscopa?",
        options: [
          { label: "No, muri liberi", value: "no", detail: "Posa su muro pulito" },
          { label: "Sì, da rimuovere", value: "yes", detail: "Dobbiamo staccare il vecchio" }
        ]
      },
      // Questa domanda appare solo se rispondi "Sì" sopra
      {
        id: 'wall_condition_risk',
        question: "Temi che l'intonaco si stacchi?",
        options: [
          { label: "No, intonaco solido", value: "safe", detail: "Rimozione semplice" },
          { label: "Sì, muro delicato", value: "risk", detail: "Servirà stuccatura/ripristino" }
        ]
      }
    ]
  },
  
  // 7. PAGINA SCALE
  'scala-parquet': {
      title: "Preventivo Rapido in 30 secondi",
      question1: "Tipo di scala",
      allowedTypes: ['scala_parquet'],
      extraQuestions: [
          {
            id: 'stair_material',
            question: "Materiale attuale:",
            options: [
              { label: "Cemento Grezzo", value: "concrete" },
              { label: "Marmo / Pietra", value: "marble" }
            ]
          }
      ]
  }
};