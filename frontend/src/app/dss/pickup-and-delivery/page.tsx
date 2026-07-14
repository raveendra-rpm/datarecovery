import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import PickupAndDeliveryPageClient from './PickupAndDeliveryPageClient';

export const metadata: Metadata = {
  title: 'Pickup & Delivery Service in Bangalore | Data Storage Solutions',
  description: 'Doorstep pickup and delivery of your storage media within 30 km of Bangalore, plus secure pan-India courier service. Schedule a free pickup for data recovery.',
  alternates: { canonical: '/dss/pickup-and-delivery' },
  openGraph: {
    title: 'Pickup & Delivery Service | Data Storage Solutions',
    description: 'Doorstep pickup and delivery of your storage media within 30 km of Bangalore, plus secure pan-India courier service.',
    url: '/dss/pickup-and-delivery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pickup & Delivery Service | Data Storage Solutions',
    description: 'Doorstep pickup and delivery of your storage media within 30 km of Bangalore, plus secure pan-India courier service.',
  },
};

export default function PickupAndDeliveryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'DSS' },
          { name: 'Pickup & Delivery' },
        ]}
      />
      <PickupAndDeliveryPageClient />
    </>
  );
}
