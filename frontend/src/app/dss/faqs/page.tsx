import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import FAQsPageClient from './FAQsPageClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Data Storage Solutions',
  description: 'Answers to common data recovery questions: what data recovery is, how long analysis takes, causes of hard disk failure, and our step-by-step analysis process.',
  alternates: { canonical: '/dss/faqs' },
  openGraph: {
    title: 'FAQs | Data Storage Solutions',
    description: 'Answers to common data recovery questions about analysis time, causes of failure, and our recovery process.',
    url: '/dss/faqs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | Data Storage Solutions',
    description: 'Answers to common data recovery questions about analysis time, causes of failure, and our recovery process.',
  },
};

const faqItems = [
  {
    question: 'What is data recovery?',
    answer: 'Data recovery is the process of retrieving deleted or inaccessible data from failed electronic storage media such as computer hard disk drives, removable drives and optical devices. Your data can become inaccessible due to a software problem, computer virus, mechanical or electrical malfunction, or a deliberate human act.',
  },
  {
    question: 'How long does the analysis take?',
    answer: 'The time required for analysis depends on the condition of the media. It generally takes 3-4 hours to analyze the device, but in rare scenarios it could take longer.',
  },
  {
    question: 'What are the reasons for hard disk failure?',
    answer: 'Hard disk failure broadly falls into two categories: Logical Issues, where the platter is fine but data is lost due to formatting, partition table corruption, accidental deletion, virus infection, or OS installation without backup; and Physical Issues, where the hard disk is undetectable, makes a clicking noise, has bad components, or is detectable but data cannot be accessed due to bad sectors.',
  },
  {
    question: 'What is the analysis process?',
    answer: 'All devices go through an extensive analysis: Step 1 - determine whether the problem is physical, logical, or both. Step 2 - if physical, determine whether the needed parts are in inventory. Step 3 - create a complete backup of the hard disk. Step 4 - evaluate the data structure and determine how much data is recoverable. Step 5 - contact you with the results, time frame, and cost for recovery, and obtain approval to proceed.',
  },
];

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'FAQs' }]} />
      <FAQSchema items={faqItems} />
      <FAQsPageClient />
    </>
  );
}
