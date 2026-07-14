import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import FlashCardRecoveryPageClient from './FlashCardRecoveryPageClient';

export const metadata: Metadata = {
  title: 'Flash Card & USB Drive Data Recovery Services | Data Storage Solutions',
  description: 'Recover deleted or corrupted photos, videos and files from USB flash drives, SD cards, micro SD and compact flash cards. Expert recovery in Bangalore.',
  alternates: { canonical: '/services/flash-card-recovery' },
  openGraph: {
    title: 'Flash Card & USB Drive Data Recovery | Data Storage Solutions',
    description: 'Recover deleted or corrupted photos, videos and files from USB flash drives, SD cards and memory cards.',
    url: '/services/flash-card-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash Card & USB Drive Data Recovery | Data Storage Solutions',
    description: 'Recover deleted or corrupted photos, videos and files from USB flash drives, SD cards and memory cards.',
  },
};

export default function FlashCardRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'Flash Card Recovery' }]}
      />
      <ServiceSchema
        name="Flash Card & USB Drive Data Recovery"
        description="Recovery of deleted, corrupted or inaccessible data from USB flash drives, SD cards, micro SD and compact flash cards."
        path="/services/flash-card-recovery"
      />
      <FlashCardRecoveryPageClient />
    </>
  );
}
