import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import PriceAndCostPageClient from './PriceAndCostPageClient';

export const metadata: Metadata = {
  title: 'Data Recovery Price & Cost in Bangalore | Data Storage Solutions',
  description: 'Transparent data recovery pricing for HDD, SSD, RAID, flash drives and more. Free diagnosis & evaluation. Fixed quote after inspection — no hidden charges.',
  alternates: { canonical: '/price-and-cost' },
  openGraph: {
    title: 'Data Recovery Price & Cost | Data Storage Solutions',
    description: 'Transparent data recovery pricing for HDD, SSD, RAID, flash drives and more. Free diagnosis & evaluation.',
    url: '/price-and-cost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Recovery Price & Cost | Data Storage Solutions',
    description: 'Transparent data recovery pricing for HDD, SSD, RAID, flash drives and more. Free diagnosis & evaluation.',
  },
};

export default function PriceAndCostPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Price and Cost' }]} />
      <PriceAndCostPageClient />
    </>
  );
}
