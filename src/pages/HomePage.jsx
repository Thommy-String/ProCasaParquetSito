import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import InstallationQuiz from '../components/InstallationQuiz';
import DescrizioneMainCategories from '../components/DescrizioneMainCategories';
import logoImage from '../assets/images/logo.png';
import {
  COMPANY_NAME,
  WEBSITE_URL,
  PHONE_NUMBER,
  SCHEMA_ADDRESS,
  SCHEMA_GEO,
  MAIN_CATEGORY,
  PRIMARY_CITY,
  GBP_CATEGORIES,
  SERVICE_AREAS
} from '../utils/constants';

import RecentWorks from '../components/RecentWorks';
import FloorMatcher from '../components/QuoteDoctor';
import QuoteDoctor from '../components/QuoteDoctor';
import WasteCalculator from '../components/WasteCalculator';
import QuickFloorConsult from '../components/QuickFloorConsult';

function HomePage() {

  // 1. CONSIGLIO VIDEO: SCHEMA MARKUP
  // Questo "spiega" a Google chi sei, dove sei e cosa fai.
  // Deve corrispondere ESATTAMENTE ai dati GBP e constants.js
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Importante: business locale
    "name": COMPANY_NAME,
    "image": [logoImage],
    "@id": WEBSITE_URL,
    "url": WEBSITE_URL,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$", // Fascia di prezzo (opzionale)
    "address": {
      "@type": "PostalAddress",
      ...SCHEMA_ADDRESS
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...SCHEMA_GEO
    },
    "areaServed": SERVICE_AREAS.map(area => ({
      "@type": "Place",
      "name": area.name
    })),
    "knowsAbout": GBP_CATEGORIES,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "serviceType": MAIN_CATEGORY,
    "description": `Siamo ${MAIN_CATEGORY} specializzati in posa parquet, resina e LVT a ${PRIMARY_CITY}.`
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <Hero />

      {/* Sezione Lavori Recenti */}
      <RecentWorks />

      {/* QUIZ */}
      <section id="preventivatore" className="scroll-mt-28">
        <InstallationQuiz />
      </section>

      {/* 1. SCANNER PREVENTIVI (QuoteDoctor) */}
      {/* Aggiungiamo id="scanner-preventivi" e scroll-margin */}
      <section id="scanner-preventivi" className="scroll-mt-28">
        <QuoteDoctor />
      </section>

      <PricingSection />

      {/* 2. CHECK SOTTOFONDO (QuickFloorConsult) */}
      <section id="check-sottofondo" className="scroll-mt-28">
        <QuickFloorConsult />
      </section>

      {/* 3. CALCOLATORE MQ (WasteCalculator) */}
      <section id="calcolatore-mq" className="scroll-mt-28">
        <WasteCalculator />
      </section>

      <DescrizioneMainCategories />

    </>
  );
}

export default HomePage;
