import { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesData } from '../../utils/servicesData';

function ServicePage() {
  const { slug } = useParams();

  const service = useMemo(() => {
    if (!slug) return null;
    return servicesData[slug] ?? null;
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServicePageLayout service={service} />;
}

export default ServicePage;
