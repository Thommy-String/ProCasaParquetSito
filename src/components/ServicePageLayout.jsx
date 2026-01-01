import { useMemo, useState } from 'react';
import { PHONE_NUMBER } from '../utils/constants';
import { ArrowDown } from 'lucide-react';
import { pricingData } from '../utils/pricingData';
import  PricingCard  from './PricingCard';
import ProcessModal from './ProcessModal';

function ServicePageLayout({ service }) {
  const [selectedPricingService, setSelectedPricingService] = useState(null);

  const backgroundImage = service.hero?.image
    ? { backgroundImage: `url(${service.hero.image})` }
    : undefined;

  const pricingService = useMemo(() => {
    if (!service?.pricingId) return null;
    return pricingData.find((item) => item.id === service.pricingId) ?? null;
  }, [service?.pricingId]);

  const handleShowProcess = (pricingServiceItem) => {
    setSelectedPricingService(pricingServiceItem);
  };

  const handleCloseProcessModal = () => {
    setSelectedPricingService(null);
  };

  return (
    <article className="bg-white text-gray-900">
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-slate-900">
        {service.hero?.image && (
          <img
            src={service.hero.image}
            alt={service.hero?.h1 ?? service.pageTitle}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white sm:px-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {service.hero?.h1 ?? service.pageTitle}
          </h1>
          {service.hero?.subtitle && (
            <p className="mt-4 text-base font-medium text-white/85 sm:text-lg">
              {service.hero.subtitle}
            </p>
          )}
        </div>
      </section>

{pricingService && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto max-w-5xl px-6 sm:px-10">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Preventivo in 1 minuto
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <PricingCard
                service={pricingService}
                onShowProcessClick={handleShowProcess}
              />
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
        {service.overview && (
          <div className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-700 sm:text-lg">
            {service.overview}
          </div>

          
        )}

        <div className="mt-12 flex flex-col gap-10">
          {service.sections?.map((section, index) => (
            <div key={section.title ?? index} className="flex flex-col items-center gap-6">
              <section className="w-full rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:shadow-lg sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {section.image ?? service.hero?.image ? (
                    <div className="md:w-60 md:flex-shrink-0">
                      <div className="overflow-hidden rounded-2xl bg-slate-100">
                        <img
                          src={section.image ?? service.hero?.image}
                          alt={section.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : null}
                  <div className="flex-1 space-y-5">
                    <header>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Fase {index + 1}
                      </p>
                      <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    </header>
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-relaxed text-slate-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bullet.label ?? bulletIndex}
                            className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                          >
                            <p className="text-sm font-semibold text-slate-800">
                              {bullet.label}
                            </p>
                            {bullet.detail && (
                              <p className="mt-1 text-xs text-slate-500">
                                {bullet.detail}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
              {index < (service.sections?.length ?? 0) - 1 && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 shadow-sm">
                  <ArrowDown className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    

      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center sm:max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Pronto a parlarne con un posatore?
          </h2>
          <p className="text-base text-white/90">
            Prepariamo una proposta precisa e fissiamo un sopralluogo gratuito in 24 ore.
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-slate-100 sm:text-base"
          >
            Chiama {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <ProcessModal
        service={selectedPricingService}
        onClose={handleCloseProcessModal}
      />
    </article>
  );
}

export default ServicePageLayout;
