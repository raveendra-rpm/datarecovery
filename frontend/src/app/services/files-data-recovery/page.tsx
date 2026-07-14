import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import FilesDataRecoveryPageClient from './FilesDataRecoveryPageClient';

export const metadata: Metadata = {
  title: 'File Data Recovery Services | Email, Excel, Word, PDF & Images | Data Storage Solutions',
  description: 'Recover damaged or deleted Outlook emails, Excel files, Word documents, password-protected PDFs and corrupted image files with DSS file repair utilities.',
  alternates: { canonical: '/services/files-data-recovery' },
  openGraph: {
    title: 'File Data Recovery Services | Data Storage Solutions',
    description: 'Recover damaged or deleted Outlook emails, Excel files, Word documents, PDFs and image files.',
    url: '/services/files-data-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File Data Recovery Services | Data Storage Solutions',
    description: 'Recover damaged or deleted Outlook emails, Excel files, Word documents, PDFs and image files.',
  },
};

export default function FilesDataRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'Files Data Recovery' }]}
      />
      <ServiceSchema
        name="Files Data Recovery"
        description="Repair and recovery of damaged Outlook email files, Excel spreadsheets, Word documents, password-protected PDFs and corrupted image files."
        path="/services/files-data-recovery"
      />
      <FilesDataRecoveryPageClient />
    </>
  );
}
