import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import CctvDataRecoveryPageClient from './CctvDataRecoveryPageClient';

export const metadata: Metadata = {
  title: 'CCTV & DVR Data Recovery Services in Bangalore | Data Storage Solutions',
  description: 'Recover lost, deleted, damaged or formatted footage from CCTV cameras and DVR systems. Expert CCTV data recovery services in Bangalore by Data Storage Solutions.',
  alternates: { canonical: '/services/cctv-data-recovery' },
  openGraph: {
    title: 'CCTV & DVR Data Recovery Services | Data Storage Solutions',
    description: 'Recover lost, deleted, damaged or formatted footage from CCTV cameras and DVR systems in Bangalore.',
    url: '/services/cctv-data-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV & DVR Data Recovery Services | Data Storage Solutions',
    description: 'Recover lost, deleted, damaged or formatted footage from CCTV cameras and DVR systems in Bangalore.',
  },
};

export default function CctvDataRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'CCTV Data Recovery' }]}
      />
      <ServiceSchema
        name="CCTV Data Recovery"
        description="Recovery of lost, deleted, damaged, formatted or encrypted footage from CCTV cameras and DVR systems."
        path="/services/cctv-data-recovery"
      />
      <CctvDataRecoveryPageClient />
    </>
  );
}
