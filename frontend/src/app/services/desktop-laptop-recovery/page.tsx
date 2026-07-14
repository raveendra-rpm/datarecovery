import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import DesktopLaptopRecoveryPageClient from './DesktopLaptopRecoveryPageClient';

export const metadata: Metadata = {
  title: 'Desktop & Laptop Hard Drive Data Recovery Services | Data Storage Solutions',
  description: 'Expert data recovery for desktop and laptop hard drives — all brands, all failure types. No Data, No Cost guarantee. Free diagnostic evaluation in Bangalore.',
  alternates: { canonical: '/services/desktop-laptop-recovery' },
  openGraph: {
    title: 'Desktop & Laptop Hard Drive Data Recovery | Data Storage Solutions',
    description: 'Expert data recovery for desktop and laptop hard drives — all brands, all failure types. No Data, No Cost guarantee.',
    url: '/services/desktop-laptop-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desktop & Laptop Hard Drive Data Recovery | Data Storage Solutions',
    description: 'Expert data recovery for desktop and laptop hard drives — all brands, all failure types. No Data, No Cost guarantee.',
  },
};

const faqItems = [
  {
    question: 'What types of data recovery services does DSS provide for desktop and laptop hard drives?',
    answer: 'DSS provides complete data recovery services for all types of desktop and laptop hard drives including HDDs, SSDs, SATA, IDE/PATA drives and more. We handle logical failures, physical damage, accidental deletion, formatted drives, corrupted file systems, and firmware issues.',
  },
  {
    question: 'Do I get a diagnostic report before proceeding with data recovery?',
    answer: 'Yes. DSS provides a detailed diagnostic report before starting the actual data recovery process. This report lists all recoverable files and folders so you know exactly what to expect before any charges are applied.',
  },
  {
    question: 'How does DSS ensure timely updates on the status and progress of data recovery?',
    answer: 'Our team provides regular status updates throughout the recovery process via phone and email. You will always know the current stage of your recovery and the estimated completion time.',
  },
  {
    question: 'Are DSS data recovery services available for all desktop makes and brands?',
    answer: 'Yes. DSS offers data recovery services for all desktop and laptop makes and brands, including Dell, HP, Lenovo, Acer, Asus, Apple, Sony, Toshiba, Samsung and more, regardless of age or model.',
  },
  {
    question: 'Is it fine to use a particular operating system or file system that DSS supports for data recovery?',
    answer: 'DSS supports all major operating systems and file systems including Windows (FAT16, FAT32, NTFS, exFAT), Linux (Ext2, Ext3, Ext4), macOS (HFS, HFS+, APFS) and more. No system is too old or too new for us.',
  },
  {
    question: 'What are the charges if my desktop or laptop is failing and my important data is at risk?',
    answer: 'DSS follows a strict No Data, No Cost policy. You are only charged if we successfully recover your data. A free diagnostic evaluation is performed first to assess the situation before any commitment.',
  },
  {
    question: 'Should I stop using my laptop or desktop if it is failing and I suspect data loss?',
    answer: 'Yes, immediately stop using the device. Continued use of a failing drive increases the risk of permanent data loss. Power it off and contact DSS as soon as possible to prevent further damage.',
  },
  {
    question: 'How much time does DSS take for recovering data from a desktop or laptop hard drive?',
    answer: 'Standard recovery typically takes 3-7 business days depending on the extent of damage. Urgent and express recovery options are also available for critical situations at an additional charge.',
  },
  {
    question: "Is DSS's data recovery service available only in Bangalore, or do you serve other parts of India as well?",
    answer: 'While our primary lab is located in Bangalore, DSS provides data recovery services across India through our secure Pickup & Delivery service. Clients from any city can courier their devices to us safely.',
  },
  {
    question: 'Can DSS provide data recovery services for any generation of desktop or laptop hard drives?',
    answer: 'Absolutely. DSS has experience recovering data from hard drives spanning over 22+ years of technology, from legacy IDE/PATA drives to the latest NVMe SSDs. No drive generation is beyond our expertise.',
  },
];

export default function DesktopLaptopRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services' },
          { name: 'Desktop & Laptop Recovery' },
        ]}
      />
      <ServiceSchema
        name="Desktop & Laptop Hard Drive Data Recovery"
        description="Complete data recovery for desktop and laptop hard drives across all brands, covering logical, physical, encrypted and firmware failures."
        path="/services/desktop-laptop-recovery"
      />
      <FAQSchema items={faqItems} />
      <DesktopLaptopRecoveryPageClient />
    </>
  );
}
