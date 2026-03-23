// PAGINA TEMPORANEA — Vai a /title-demo per vedere le varianti
import HeroTitleVariants from '../components/HeroTitleVariants';

export default function TitleVariantsDemo() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-6 text-center sticky top-0 z-50">
        <h2 className="text-xl font-bold">🎨 Demo Varianti Titolo Hero SPC</h2>
        <p className="text-sm text-white/70 mt-1">Scorri per vedere tutte le varianti — dimmi quale preferisci!</p>
      </div>
      <HeroTitleVariants />
    </div>
  );
}
