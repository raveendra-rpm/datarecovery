import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import RaidServerRecoveryPageClient from './RaidServerRecoveryPageClient';

export const metadata: Metadata = {
  title: 'RAID & Server Data Recovery Services | Data Storage Solutions',
  description: 'Expert RAID 0, 1, 5, 6, 10 and server data recovery in Bangalore. Manual stripe & parity reconstruction for NAS, SAN and multi-drive failure scenarios.',
  alternates: { canonical: '/services/raid-server-recovery' },
  openGraph: {
    title: 'RAID & Server Data Recovery | Data Storage Solutions',
    description: 'Expert RAID 0, 1, 5, 6, 10 and server data recovery for NAS, SAN and multi-drive failure scenarios.',
    url: '/services/raid-server-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAID & Server Data Recovery | Data Storage Solutions',
    description: 'Expert RAID 0, 1, 5, 6, 10 and server data recovery for NAS, SAN and multi-drive failure scenarios.',
  },
};

export default function RaidServerRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'RAID Server Recovery' }]}
      />
      <ServiceSchema
        name="RAID & Server Data Recovery"
        description="Reconstruction and recovery of RAID 0, 1, 5, 6 and 10 arrays, NAS and SAN systems, including multi-drive failure scenarios."
        path="/services/raid-server-recovery"
      />
      <RaidServerRecoveryPageClient />
    </>
  );
}
