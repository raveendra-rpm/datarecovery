import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import SsdDataRecoveryPageClient from './SsdDataRecoveryPageClient';

export const metadata: Metadata = {
  title: 'SSD Data Recovery Services | SATA, NVMe, mSATA | Data Storage Solutions',
  description: 'Advanced SSD data recovery for SATA, NVMe and mSATA drives affected by controller failure, firmware corruption or physical damage. Bangalore lab, 22+ years experience.',
  alternates: { canonical: '/services/ssd-data-recovery' },
  openGraph: {
    title: 'SSD Data Recovery Services | Data Storage Solutions',
    description: 'Advanced SSD data recovery for SATA, NVMe and mSATA drives affected by controller or firmware failure.',
    url: '/services/ssd-data-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSD Data Recovery Services | Data Storage Solutions',
    description: 'Advanced SSD data recovery for SATA, NVMe and mSATA drives affected by controller or firmware failure.',
  },
};

export default function SsdDataRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'SSD Data Recovery' }]}
      />
      <ServiceSchema
        name="SSD Data Recovery"
        description="Recovery of data from SATA, NVMe and mSATA solid-state drives affected by controller failure, firmware corruption or physical damage."
        path="/services/ssd-data-recovery"
      />
      <SsdDataRecoveryPageClient />
    </>
  );
}
