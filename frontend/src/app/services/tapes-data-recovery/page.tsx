import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import TapesDataRecoveryPageClient from './TapesDataRecoveryPageClient';

export const metadata: Metadata = {
  title: 'Tape Data Recovery Services | LTO, DLT, DAT | Data Storage Solutions',
  description: 'Recover data from damaged or corrupted LTO, DLT and DAT backup tapes. Expert tape media data recovery in Bangalore with 22+ years of experience.',
  alternates: { canonical: '/services/tapes-data-recovery' },
  openGraph: {
    title: 'Tape Data Recovery Services | Data Storage Solutions',
    description: 'Recover data from damaged or corrupted LTO, DLT and DAT backup tapes.',
    url: '/services/tapes-data-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tape Data Recovery Services | Data Storage Solutions',
    description: 'Recover data from damaged or corrupted LTO, DLT and DAT backup tapes.',
  },
};

export default function TapesDataRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'Tapes Data Recovery' }]}
      />
      <ServiceSchema
        name="Tape Data Recovery"
        description="Recovery of data from damaged or corrupted LTO, DLT and DAT backup tapes."
        path="/services/tapes-data-recovery"
      />
      <TapesDataRecoveryPageClient />
    </>
  );
}
