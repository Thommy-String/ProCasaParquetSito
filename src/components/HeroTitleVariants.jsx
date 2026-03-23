// FILE TEMPORANEO — 5 varianti di stile per il titolo Hero SPC
// Scegli quella che preferisci e poi la applichiamo a ServiceHeroHome

import React from 'react';

export function HeroTitleVariants() {
  return (
    <div className="bg-[#f4f4f0] py-16 px-4 space-y-24">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 1 — Brutalista con box highlight (stile attuale migliorato)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 1 —</p>
        <h1 className="text-[26px] md:text-[40px] font-[900] uppercase leading-[1.1] tracking-tight text-black">
          Nuovo SPC in 48 ore{' '}
          <span className="bg-[#FFF176] px-2 py-0.5 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            in 48 ore direttamente sul pavimento esistente.
          </span>
          <br className="hidden md:block" />
          <span className="mt-3 inline-block">Anche in case </span>
          <span className="bg-[#81D4FA] px-2 py-0.5 border-[3px] border-black inline-block transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            con mobili.
          </span>
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 2 — Minimal underline (linea sotto gli highlight)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 2 —</p>
        <h1 className="text-[26px] md:text-[40px] font-[900] uppercase leading-[1.15] tracking-tight text-black">
          Nuovo pavimento SPC in 48 ore{' '}
          <span className="bg-[#FFF176] px-1 border-b-[4px] border-black inline-block">
            direttamente sulle piastrelle.
          </span>
          <br />
          <span className="mt-2 inline-block">Anche in case </span>
          <span className="bg-[#81D4FA] px-1 border-b-[4px] border-black inline-block">
            con mobili.
          </span>
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 3 — Elegante serif mixed (titolo misto serif/sans)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 3 —</p>
        <h1 className="text-[28px] md:text-[44px] leading-[1.1] tracking-tight text-black">
          <span className="font-[900] uppercase">Nuovo pavimento SPC</span>
          <br />
          <span className="font-serif italic font-normal text-[24px] md:text-[36px]">in 48 ore, </span>
          <span className="bg-[#FFF176] px-2 rounded-lg font-[800]">
            sulle piastrelle.
          </span>
          <br />
          <span className="font-serif italic font-normal text-[24px] md:text-[36px]">Anche con </span>
          <span className="bg-[#81D4FA] px-2 rounded-lg font-[800]">
            mobili in casa.
          </span>
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 4 — Bold stacked (ogni riga separata, colori a blocchi)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 4 —</p>
        <h1 className="text-[24px] md:text-[38px] font-[900] uppercase leading-[1.2] tracking-tighter text-black">
          <span className="block">Nuovo pavimento SPC</span>
          <span className="block bg-[#FFF176] px-3 py-1 my-2 rounded-xl border-2 border-black inline-block">
            in 48 ore sulle piastrelle
          </span>
          <span className="block text-slate-500 text-[20px] md:text-[28px] font-bold normal-case mt-2">
            Anche in case con mobili — senza demolizioni.
          </span>
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 5 — Clean gradient text (moderno, highlight sfumato)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 5 —</p>
        <h1 className="text-[26px] md:text-[42px] font-[800] leading-[1.15] tracking-tight">
          <span className="text-black">Nuovo pavimento SPC in 48 ore</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-lime-300 bg-clip-text text-transparent">
            direttamente sulle piastrelle.
          </span>
          <br />
          <span className="text-slate-600 text-[20px] md:text-[30px] font-semibold">
            Anche in case con mobili.
          </span>
        </h1>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          VARIANTE 6 (BONUS) — Ultra minimal (nessun colore, solo peso font)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">— Variante 6 (bonus) —</p>
        <h1 className="text-[26px] md:text-[42px] leading-[1.15] tracking-tight text-black">
          <span className="font-[900] uppercase">Nuovo pavimento SPC in 48 ore</span>
          <br />
          <span className="font-[400] text-[22px] md:text-[34px]">
            direttamente sulle piastrelle.
          </span>
          <br />
          <span className="font-[900] uppercase">Anche in case con mobili.</span>
        </h1>
      </div>

    </div>
  );
}

export default HeroTitleVariants;
