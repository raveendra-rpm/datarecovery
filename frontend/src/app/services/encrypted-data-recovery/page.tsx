import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import EncryptedDataRecoveryPageClient from './EncryptedDataRecoveryPageClient';

export const metadata: Metadata = {
  title: 'Encrypted Data Recovery Services | BitLocker, FileVault, VeraCrypt | Data Storage Solutions',
  description: 'Recover data from BitLocker, FileVault, VeraCrypt and other encrypted drives without compromising security. Strict data privacy protocols throughout recovery.',
  alternates: { canonical: '/services/encrypted-data-recovery' },
  openGraph: {
    title: 'Encrypted Data Recovery Services | Data Storage Solutions',
    description: 'Recover data from BitLocker, FileVault, VeraCrypt and other encrypted drives without compromising security.',
    url: '/services/encrypted-data-recovery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encrypted Data Recovery Services | Data Storage Solutions',
    description: 'Recover data from BitLocker, FileVault, VeraCrypt and other encrypted drives without compromising security.',
  },
};

export default function EncryptedDataRecovery() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Services' }, { name: 'Encrypted Data Recovery' }]}
      />
      <ServiceSchema
        name="Encrypted Data Recovery"
        description="Recovery of data from BitLocker, FileVault, VeraCrypt and other encrypted or hardware-encrypted drives with strict data security protocols."
        path="/services/encrypted-data-recovery"
      />
      <EncryptedDataRecoveryPageClient />
    </>
  );
}
