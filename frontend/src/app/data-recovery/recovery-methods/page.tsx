import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import RecoveryMethodsPageClient from './RecoveryMethodsPageClient';

export const metadata: Metadata = {
  title: 'Data Recovery Methods | Disk Imaging, RAID, Firmware & More | Data Storage Solutions',
  description: 'Explore the 8 core data recovery methods DSS uses — disk imaging, logical recovery, clean room physical recovery, firmware repair, RAID reconstruction and more.',
  alternates: { canonical: '/data-recovery/recovery-methods' },
  openGraph: {
    title: 'Data Recovery Methods | Data Storage Solutions',
    description: 'The 8 core data recovery methods DSS uses — disk imaging, logical recovery, clean room recovery, firmware repair, RAID reconstruction and more.',
    url: '/data-recovery/recovery-methods',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Recovery Methods | Data Storage Solutions',
    description: 'The 8 core data recovery methods DSS uses — disk imaging, logical recovery, clean room recovery, firmware repair, RAID reconstruction and more.',
  },
};

const faqItems = [
  {
    question: 'What data recovery methods does DSS use for physically damaged hard drives?',
    answer: 'For physically damaged drives, DSS uses Class 100 Clean Room procedures including platter transplant, head stack replacement, PCB repair, and spindle motor restoration. These are performed by certified engineers using precision tools to avoid any further damage.',
  },
  {
    question: 'Can DSS recover data from a hard drive with bad sectors?',
    answer: 'Yes. DSS uses advanced sector-by-sector imaging tools that intelligently skip bad sectors and recover as much data as possible. Specialized firmware-level commands are used to extract data from deteriorating drives.',
  },
  {
    question: 'What is logical data recovery and when is it used?',
    answer: 'Logical recovery is applied when the drive is physically healthy but data is inaccessible due to accidental deletion, file system corruption, accidental formatting, partition loss, or operating system failure. DSS uses proprietary software and manual techniques to reconstruct lost data.',
  },
  {
    question: 'Does DSS use write-blockers during recovery to protect the original data?',
    answer: 'Absolutely. DSS always uses hardware write-blockers when imaging drives to ensure the original evidence/data is never modified. This is critical for both data integrity and forensic-grade recoveries.',
  },
  {
    question: 'Can DSS recover data from RAID arrays that have failed?',
    answer: 'Yes. DSS has specialized RAID reconstruction techniques for RAID 0, 1, 5, 6, and 10. Our engineers manually analyze stripe size, parity rotation, and block order to reconstruct the RAID array and recover your data.',
  },
  {
    question: 'Is it possible to recover data from a drive that was overwritten?',
    answer: 'Modern high-density drives make full overwrite recovery extremely difficult. However, if only partial overwriting occurred, DSS engineers can attempt recovery using magnetic residue analysis and sector-level reconstruction in many cases.',
  },
  {
    question: 'What is firmware recovery and how does DSS handle it?',
    answer: "Firmware is the internal software that controls how a hard drive operates. When firmware is corrupt, the drive may not spin up or be recognized. DSS uses specialized tools to read and rewrite firmware modules directly, restoring drive functionality without altering user data.",
  },
  {
    question: 'Does DSS offer remote data recovery?',
    answer: 'For purely logical failures on drives that are still functioning, DSS can perform remote recovery sessions over a secure encrypted connection. For physical failures, the drive must be shipped to or dropped off at our Bangalore lab.',
  },
];

export default function RecoveryMethodsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Data Recovery' },
          { name: 'Recovery Methods' },
        ]}
      />
      <FAQSchema items={faqItems} />
      <RecoveryMethodsPageClient />
    </>
  );
}
