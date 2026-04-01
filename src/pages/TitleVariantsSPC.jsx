// Demo varianti H1 — SPC (Round 3: 20 Varianti Originali)

export default function TitleVariantsSPC() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="py-8 px-6 text-center border-b border-gray-100">
        <span className="inline-block bg-blue-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-2 shadow-lg shadow-blue-900/20">
          Super Demo 20 Varianti H1 — SPC
        </span>
        <p className="text-slate-400 text-sm mt-1">Sostituisco le precedenti con 20 nuovi stili originali in linea con la Hero.</p>
      </div>

      {/* ── 1. STREET ART / STENCIL ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">01 — Stencil Urban (Grassetto + Tag)</p>
        <h1 className="text-[34px] md:text-[60px] font-[900] uppercase leading-none tracking-tighter text-slate-900">
          Installiamo il <span className="bg-black text-white px-2 py-0.5 transform -rotate-2 inline-block">tuo SPC</span>
          <br /><span className="text-blue-600">in 1–2 giorni</span> sopra il pavimento esistente.
          <br /><span className="text-slate-400 text-[0.6em] align-middle ml-2 decoration-slice decoration-yellow-300 underline font-black">Anche in case con mobili.</span>
        </h1>
      </section>

      {/* ── 2. NEON HIGHLIGHT ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-slate-900">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-5">02 — Dark Mode + Neon Border</p>
        <h1 className="text-[32px] md:text-[58px] font-[900] uppercase leading-[1.1] text-white">
          Installiamo il tuo SPC
          <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #4ade80' }}>in 1–2 giorni</span> sopra il
          <br />pavimento esistente. <span className="text-yellow-400">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 3. ARCHITECT / BLUEPRINT ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-[#f0f4f8]">
        <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-5">03 — Blueprint / Architettonico</p>
        <h1 className="text-[30px] md:text-[54px] font-[700] uppercase leading-[1.1] border-l-8 border-blue-600 pl-6 text-blue-900">
          Installiamo il tuo SPC <br />
          <span className="font-[300] italic">in 1–2 giorni</span> sopra il <br />
          pavimento esistente. <span className="font-[900] text-blue-600">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 4. RETRO STICKER ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">04 — Sticker Style</p>
        <h1 className="text-[28px] md:text-[52px] font-[900] uppercase leading-tight text-slate-900">
          Installiamo il tuo SPC
          <br /><span className="bg-yellow-300 px-4 py-1 rounded-full border-4 border-black inline-block transform rotate-1 scale-110 my-2">in 1–2 giorni</span>
          <br />sopra il pavimento esistente. <span className="bg-green-400 px-2 text-white">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 5. GIANT TYPO OVERLAP ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 relative overflow-hidden">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">05 — Typo Overlap (Editoriale)</p>
        <div className="absolute top-0 right-0 text-[180px] font-[900] text-slate-50 opacity-10 select-none leading-none">SPC</div>
        <h1 className="relative z-10 text-[32px] md:text-[56px] font-[900] uppercase leading-[1.0] text-slate-900">
          <span className="text-blue-700">Installiamo</span> il tuo SPC<br />
          in <span className="underline decoration-yellow-400 decoration-8 underline-offset-[-2px]">1–2 giorni</span> sopra il<br />
          pavimento esistente. <span className="italic font-bold text-slate-400 text-[0.8em]">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 6. CONCRETE BRUTALIST ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-[#e5e5e5]">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-5">06 — Brutalismo Cemento</p>
        <h1 className="text-[34px] md:text-[62px] font-[900] uppercase leading-[0.85] tracking-tighter text-black">
          Installiamo il tuo SPC<br />
          <span className="bg-black text-white px-1">in 1–2 giorni</span><br />
          sopra il pavimento esistente.<br />
          <span className="text-white bg-green-600 px-2 text-[0.7em]">Anche in case con mobili.</span>
        </h1>
      </section>

      {/* ── 7. SOFT GRADIENT BLUR ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">07 — Glow Progressivo</p>
        <h1 className="text-[30px] md:text-[54px] font-[900] uppercase leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Installiamo il tuo SPC</span><br />
          in 1–2 giorni sopra il<br />
          pavimento esistente. <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-xl shadow-inner">Con mobili inclusi.</span>
        </h1>
      </section>

      {/* ── 8. SLANTED BOXES ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-gray-50">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">08 — Blocchi Inclinati</p>
        <h1 className="flex flex-col gap-2">
            <span className="bg-black text-white w-fit px-4 py-1 skew-x-[-12deg] text-[28px] md:text-[48px] font-[900] uppercase">Installiamo il tuo SPC</span>
            <span className="bg-yellow-300 text-black w-fit px-4 py-1 skew-x-[-12deg] text-[28px] md:text-[48px] font-[900] uppercase">in 1–2 giorni sopra il</span>
            <span className="bg-blue-600 text-white w-fit px-4 py-1 skew-x-[-12deg] text-[28px] md:text-[48px] font-[900] uppercase">pavimento esistente.</span>
            <span className="text-slate-500 font-bold ml-6 mt-2">Anche in case con mobili.</span>
        </h1>
      </section>

      {/* ── 9. NEWSPAPER HEADLINE ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">09 — Giornale d'epoca (Classico Nero)</p>
        <h1 className="text-[38px] md:text-[68px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-slate-900 border-b-4 border-slate-900 pb-2">
          Installiamo il SPC <br />
          in 1–2 giorni sopra <br />
          pavimento esistente.
        </h1>
        <p className="mt-4 text-[18px] md:text-[24px] font-[500] italic text-slate-600 italic uppercase">Anche in case con mobili.</p>
      </section>

      {/* ── 10. DIGITAL COUNTER ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-slate-50">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">10 — Digital / Tech (Monospace feel)</p>
        <h1 className="text-[28px] md:text-[50px] font-[800] uppercase leading-tight text-slate-900">
          <span className="text-blue-600 mr-2">/</span> Installiamo il tuo SPC <br />
          <span className="bg-slate-200 px-2 rounded font-mono">1 – 2 GIORNI</span> <br />
          Sopra il pavimento esistente. <br />
          <span className="bg-green-100 text-green-700 px-2 border-l-4 border-green-600">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 11. BOLD STRIPE ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">11 — Striscia Laterale Bold</p>
        <h1 className="text-[30px] md:text-[56px] font-[900] uppercase leading-[1.05] tracking-tight text-slate-900 flex items-stretch gap-4">
          <div className="w-4 bg-yellow-400 shrink-0"></div>
          <div>
            Installiamo il tuo SPC <br />
            in 1–2 giorni sopra il <br />
            pavimento esistente. <br />
            <span className="text-blue-600 decoration-yellow-400 underline">Anche in case con mobili.</span>
          </div>
        </h1>
      </section>

      {/* ── 12. CIRCULAR PIN ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-blue-50/30">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">12 — Bollo evidenziatore</p>
        <h1 className="text-[26px] md:text-[48px] font-[800] uppercase leading-tight text-slate-900 max-w-2xl relative">
          <span className="relative z-10">
            Installiamo il tuo SPC <br />
            <span className="text-white bg-blue-600 px-3 py-1 rounded-full inline-block rotate-[-2deg]">in 1–2 giorni</span> <br />
            sopra il pavimento esistente. <br />
            Anche in case con mobili.
          </span>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-[60px] opacity-40 -z-10"></div>
        </h1>
      </section>

      {/* ── 13. STRETCHED / ANAMORPHIC ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">13 — Stretched Typo</p>
        <h1 className="text-[32px] md:text-[64px] font-[900] uppercase leading-[0.9] tracking-[-0.05em] text-slate-900">
          Installiamo <span className="scale-x-125 inline-block origin-left">il tuo SPC</span>
          <br />in 1–2 giorni sopra il
          <br /><span className="bg-black text-yellow-300 px-2">pavimento esistente.</span>
          <br /><span className="text-[0.6em] font-[400] normal-case text-slate-500 tracking-normal mt-2 block italic">Anche in case con mobili.</span>
        </h1>
      </section>

      {/* ── 14. DUAL WEIGHT BOX ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-[#1a1a1a]">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-5">14 — Black Box / Peso Variabile</p>
        <h1 className="text-[28px] md:text-[50px] uppercase leading-tight text-white">
          <span className="font-[300]">Installiamo il tuo SPC </span>
          <br /><span className="font-[900] text-[#4ade80]">in 1–2 giorni </span>
          <br /><span className="font-[300]">sopra il pavimento esistente. </span>
          <br /><span className="bg-white text-black px-2 text-[0.8em] font-[900]">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 15. CURVED HIGHLIGHT ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">15 — Curva fluida</p>
        <h1 className="text-[30px] md:text-[54px] font-[900] uppercase leading-[1.1] text-slate-900 max-w-3xl">
          Installiamo il tuo SPC
          <br /><span className="relative inline-block">
            in 1–2 giorni sopra il
            <svg className="absolute -bottom-3 left-0 w-full h-4 text-blue-300" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q25 0 50 5 T100 5 L100 10 L0 10 Z" fill="currentColor"/></svg>
          </span>
          <br />pavimento esistente. <span className="text-green-600">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 16. SPLIT VERTICAL ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-start">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5 md:hidden">16 — Vertical Split</p>
        <div className="hidden md:block text-[14px] font-black uppercase tracking-widest text-slate-400 rotate-180 [writing-mode:vertical-lr] border-l border-slate-200 pl-4 py-2">Variante 16</div>
        <h1 className="text-[32px] md:text-[56px] font-[900] uppercase leading-[1.0] text-slate-900">
          Installiamo <br />il tuo SPC <br />
          <span className="text-blue-600">1–2 giorni</span> <br />
          <span className="text-[0.6em] text-slate-400 border-t-2 border-slate-900 mt-2 pt-2 block font-bold">
            Sopra il pavimento esistente. <br />
            Anche in case con mobili.
          </span>
        </h1>
      </section>

      {/* ── 17. BADGE CLOUD ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100 bg-yellow-50/50">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">17 — Badge / Nuvola tag</p>
        <h1 className="text-[28px] md:text-[52px] font-[800] uppercase leading-relaxed text-slate-900 max-w-3xl">
          Installiamo il tuo SPC
          <span className="inline-block bg-white border-2 border-slate-900 px-3 py-1 rounded-xl mx-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[0.8em] font-[900]">in 1-2 giorni</span>
          sopra il pavimento esistente.
          <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-xl mx-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[0.8em] font-[900]">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 18. DOT GRID BG ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">18 — Dot Grid / Tecnico</p>
        <h1 className="text-[32px] md:text-[58px] font-[900] uppercase leading-[1.05] tracking-tight text-slate-900 max-w-3xl bg-white px-2 py-1 inline-block">
          Installiamo il <span className="text-blue-600 underline decoration-4 underline-offset-8">tuo SPC</span><br />
          in 1–2 giorni sopra il<br />
          pavimento esistente.<br />
          <span className="bg-yellow-100 text-[0.8em]">Anche in case con mobili.</span>
        </h1>
      </section>

      {/* ── 19. SHADOW STACK ── */}
      <section className="px-6 md:px-16 py-14 border-b border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">19 — Hard Shadow Stack</p>
        <h1 className="text-[34px] md:text-[62px] font-[900] uppercase leading-none tracking-tighter text-slate-900">
          Installiamo <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #1e293b', textShadow: '4px 4px 0px #fde047' }}>il tuo SPC</span> <br />
          in 1–2 giorni sopra il <br />
          pavimento esistente. <br />
          <span className="text-[0.6em] text-green-600">Anche con mobili.</span>
        </h1>
      </section>

      {/* ── 20. FOOTER STYLE BOLD ── */}
      <section className="px-6 md:px-16 py-14">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-5">20 — Massive / Solid Block</p>
        <div className="max-w-4xl bg-slate-900 p-8 md:p-12 rounded-[2rem]">
            <h1 className="text-[30px] md:text-[56px] font-[900] uppercase leading-[0.95] tracking-[-0.03em] text-white">
                <span className="text-yellow-300">Installiamo</span> il tuo SPC
                <br />in 1–2 giorni sopra il
                <br />pavimento esistente.
                <br /><span className="text-[0.5em] font-[700] tracking-widest text-slate-400 border-t border-slate-700 mt-6 pt-6 block">Anche in case con mobili.</span>
            </h1>
        </div>
      </section>

      {/* Footer */}
      <div className="py-10 px-6 text-center border-t border-gray-100 bg-gray-50">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Dimmi il numero (1–20) e lo applico alla pagina SPC.</p>
      </div>
    </div>
  );
}
