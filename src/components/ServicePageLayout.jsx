import React from 'react';
import { pricingData } from '../utils/pricingData';


// Import dei componenti

import RecentWorks from '../components/RecentWorks';
import PricingSection from '../components/PricingSection';
import ServiceDescription from '../components/ServiceDescription';
import ServiceHero from './ServiceHero';
import ServiceHeroHome from './ServiceHeroHome';
import ServiceFAQ from './ServiceFAQ';
import InstallationQuiz from '../components/InstallationQuiz';
import ServiceExplainerSection from '../components/ServiceExplainerSection';
import ServicePainPoints from './ServicePainPoints';
import ServicePainVsSolution from './ServicePainVsSolution';
import SPCProblemVsSolution from './SPCProblemVsSolution';

const COMPONENT_MAP = {
  Hero: ServiceHero,
  HeroHome: ServiceHeroHome,
  RecentWorks: RecentWorks,
  ServiceFAQ: ServiceFAQ,
  ServiceDescription: ServiceDescription,
  InstallationQuiz: InstallationQuiz,
  ServicePainPoints: ServicePainPoints,
  ServiceExplainerSection: ServiceExplainerSection,
  ServicePainVsSolution: ServicePainVsSolution,
  SPCProblemVsSolution: SPCProblemVsSolution,
};

// Mappa pricingId → categoria default per il listino prezzi
const getPricingCategory = (pricingId) => {
  if (pricingId === 'spc' || pricingId === 'laminato') return 'synthetic';
  if (pricingId === 'battiscopa') return 'accessories';
  return 'wood';
};

function ServicePageLayout({ service }) {
  if (!service) return null;

  const layout = service.layout || [
    { type: 'Hero' },
    { type: 'ServiceDescription' }
  ];

  const pricingCategory = getPricingCategory(service.pricingId);

  return (
    <div className="service-page-builder">
      {layout.map((block, index) => {
        const Component = COMPONENT_MAP[block.type];
        
        // Se il componente non esiste nella mappa, lo saltiamo senza rompere tutto
        if (!Component) {
          console.error(`Componente non trovato: ${block.type}`);
          return null;
        }

        let componentProps = { service, ...block.props };
        
        // Logica specifica per PricingCard
        if (block.type === 'PricingCard') {
          const priceData = pricingData?.find(p => p.id === service.pricingId);
          if (priceData) {
            componentProps.service = priceData;
          } else {
            return null; // Salta se non trova il prezzo
          }
        }

        return (
          <section key={`${block.type}-${index}`} className="block-section">
            <Component {...componentProps} />
          </section>
        );
      })}
      
      {/* Footer-level global sections */}
      <div className="mt-8">
        <PricingSection defaultCategory={pricingCategory} />
      </div>
    </div>
  );
}

export default ServicePageLayout;