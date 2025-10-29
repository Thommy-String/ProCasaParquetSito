import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';

function Footer() {
  return (
    <footer
      id="contatti"
      className="border-t border-gray-200 bg-white/80 backdrop-blur"
    >
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
            {COMPANY_NAME}
          </span>
          <p className="text-xs text-gray-500">
            Posatori di parquet per interni, scale e rifiniture.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="rounded-full border border-blue-100 bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition hover:bg-blue-700"
          >
            {PHONE_NUMBER}
          </a>
          <p className="text-xs text-gray-400">
            Disponibili 7/7 dalle 8:00 alle 20:00
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
