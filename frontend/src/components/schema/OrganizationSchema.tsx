// Sitewide Organization + LocalBusiness + WebSite JSON-LD, rendered once in the root layout.
import { SITE_URL, SITE_NAME, LOGO_URL } from '@/lib/seo';

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: 'DSS',
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: LOGO_URL,
          contentUrl: LOGO_URL,
          caption: `${SITE_NAME} Logo`,
        },
        image: LOGO_URL,
        telephone: '+91-9880872536',
        email: 'helpdesk@datastoragesolutions.in',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop# S-11 & S-12, 2nd Floor, KHB Colony, 80 Feet Road, 5th Block, Koramangala',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          postalCode: '560095',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9352,
          longitude: 77.6146,
        },
        areaServed: {
          '@type': 'City',
          name: 'Bangalore',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/blogs?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
