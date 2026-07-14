import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import ExternalHardDrivePageClient from './ExternalHardDrivePageClient';

export const metadata: Metadata = {
  title: 'External Hard Drive Data Recovery Services | Data Storage Solutions',
  description: 'Recover data from dropped, crushed, overheated or accidentally formatted external hard drives. 22+ years of expertise across all external HDD brands.',
  alternates: { canonical: '/services/external-hard-drive' },
  openGraph: {
    title: 'External Hard Drive Data Recovery | Data Storage Solutions',
    description: 'Recover data from dropped, crushed, overheated or accidentally formatted external hard drives.',
    url: '/services/external-hard-drive',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'External Hard Drive Data Recovery | Data Storage Solutions',
    description: 'Recover data from dropped, crushed, overheated or accidentally formatted external hard drives.',
  },
};

export default function ExternalHardDrive() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'External Hard Drive' }]}
      />
      <ServiceSchema
        name="External Hard Drive Data Recovery"
        description="Recovery of data from external hard drives affected by physical damage, accidental formatting, deletion or virus infection."
        path="/services/external-hard-drive"
      />
      <ExternalHardDrivePageClient />
    </>
  );
}
