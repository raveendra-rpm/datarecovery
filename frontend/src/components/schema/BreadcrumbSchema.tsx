// Generic BreadcrumbList JSON-LD, reusable across any static page.
import { SITE_URL } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  path?: string; // relative path, e.g. "/services/ssd-data-recovery" — omit for the current (last) page
}

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path ? `${SITE_URL}${item.path}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
