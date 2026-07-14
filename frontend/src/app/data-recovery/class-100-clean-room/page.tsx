import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import Class100CleanRoomPageClient from './Class100CleanRoomPageClient';

export const metadata: Metadata = {
  title: 'Class 100 Clean Room Data Recovery | Data Storage Solutions',
  description: 'DSS performs physical hard drive repairs — head swaps, platter transplants — inside an ISO-certified Class 100 Clean Room in Bangalore to safely recover your data.',
  alternates: { canonical: '/data-recovery/class-100-clean-room' },
  openGraph: {
    title: 'Class 100 Clean Room Data Recovery | Data Storage Solutions',
    description: 'Physical hard drive repairs performed inside an ISO-certified Class 100 Clean Room in Bangalore.',
    url: '/data-recovery/class-100-clean-room',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Class 100 Clean Room Data Recovery | Data Storage Solutions',
    description: 'Physical hard drive repairs performed inside an ISO-certified Class 100 Clean Room in Bangalore.',
  },
};

export default function Class100CleanRoomPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Data Recovery' },
          { name: 'Class 100 Clean Room' },
        ]}
      />
      <Class100CleanRoomPageClient />
    </>
  );
}
