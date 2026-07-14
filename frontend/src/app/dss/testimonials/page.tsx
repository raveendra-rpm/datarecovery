import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import TestimonialsPageClient from './TestimonialsPageClient';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Data Storage Solutions',
  description: 'Read what our clients say about Data Storage Solutions — real testimonials from customers whose hard disks, RAID servers, and laptops we successfully recovered.',
  alternates: { canonical: '/dss/testimonials' },
  openGraph: {
    title: 'Client Testimonials & Reviews | Data Storage Solutions',
    description: 'Real testimonials from customers whose hard disks, RAID servers, and laptops we successfully recovered.',
    url: '/dss/testimonials',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials & Reviews | Data Storage Solutions',
    description: 'Real testimonials from customers whose hard disks, RAID servers, and laptops we successfully recovered.',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Testimonials' }]} />
      <TestimonialsPageClient />
    </>
  );
}
