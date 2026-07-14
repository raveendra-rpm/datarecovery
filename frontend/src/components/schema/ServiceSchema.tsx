// Service JSON-LD for individual service pages (e.g. /services/ssd-data-recovery).
import { SITE_URL, SITE_NAME } from '@/lib/seo';

interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string; // e.g. "/services/ssd-data-recovery"
}

export default function ServiceSchema({ name, description, path }: ServiceSchemaProps) {
  const url = `${SITE_URL}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: name,
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
