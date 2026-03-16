import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqsData } from '../utils/faqsData';

const FAQItem = ({ category, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group border-b border-white/5 transition-all duration-500 ${
        isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between py-8 px-4 md:px-10 text-left outline-none"
      >
        <div className="flex flex-col pr-8">
          {/* TAG DELLA CATEGORIA - ACCENTO BLU SU NERO */}
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500/80 mb-3 transition-all duration-300">
            {category}
          </span>
          
          <span className={`text-[20px] md:text-[22px] font-semibold tracking-tight transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}>
            {question}
          </span>
        </div>
        
        {/* Icona Plus - Minimalista Dark */}
        <div className={`mt-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-700 ease-in-out ${
          isOpen 
            ? 'rotate-[135deg] border-blue-600 bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
            : 'border-white/30 text-white/40 group-hover:border-white/40 group-hover:text-white'
        }`}>
          <Plus size={16} strokeWidth={2.5} />
        </div>
      </button>

      {/* Animazione Fluida Grid */}
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-12 md:px-10">
             {/* Linea verticale stile Notion - Più sottile e luminosa nel buio */}
             <div className="border-l border-blue-500/40 pl-8">
                <p className="max-w-3xl text-[17px] md:text-[19px] leading-relaxed text-gray-400 font-medium">
                  {answer}
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServiceFAQ({ service }) {
  const questions = faqsData[service.slug] || [];

  if (questions.length === 0) return null;

  return (
    <section className="bg-black pb-16 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Linea di chiusura superiore opzionale per separare le sezioni */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        <div className="space-y-2">
          {questions.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        
      </div>
    </section>
  );
}