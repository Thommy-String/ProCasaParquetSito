import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import {
  COMPANY_NAME,
  WEBSITE_URL,
  PHONE_NUMBER,
  SCHEMA_ADDRESS,
  SCHEMA_GEO,
  MAIN_CATEGORY,
  PRIMARY_CITY,
  GBP_CATEGORIES
} from '../utils/constants';

function HomePage() {
  
  // 1. CONSIGLIO VIDEO: SCHEMA MARKUP
  // Questo "spiega" a Google chi sei, dove sei e cosa fai.
  // Deve corrispondere ESATTAMENTE ai dati GBP e constants.js
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Importante: business locale
    "name": COMPANY_NAME,
    "image": `${WEBSITE_URL}/logo.png`, // Assicurati di avere un logo in /public/logo.png
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "areaServed": { // L'area di servizio principale
      "@type": "Place",
      "name": PRIMARY_CITY
    },
    "serviceType": MAIN_CATEGORY,
    "description": `Siamo ${MAIN_CATEGORY} specializzati in posa parquet, resina e LVT a ${PRIMARY_CITY}.`
  };

  return (
    <>
      
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      
      <Hero />
        <PricingSection></PricingSection>
    
      
    </>
  );
}

export default HomePage;