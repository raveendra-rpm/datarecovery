import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ContactsPageClient from './ContactsPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Data Storage Solutions Bangalore',
  description: 'Get in touch with Data Storage Solutions in Koramangala, Bangalore. Call +91 9880872536 or email helpdesk@datastoragesolutions.in for a free data recovery evaluation.',
  alternates: { canonical: '/contacts' },
  openGraph: {
    title: 'Contact Us | Data Storage Solutions',
    description: 'Get in touch with Data Storage Solutions in Koramangala, Bangalore for a free data recovery evaluation.',
    url: '/contacts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Data Storage Solutions',
    description: 'Get in touch with Data Storage Solutions in Koramangala, Bangalore for a free data recovery evaluation.',
  },
};

export default function ContactsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Contacts' }]} />
      <ContactsPageClient />
    </>
  );
}
