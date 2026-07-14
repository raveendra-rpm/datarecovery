import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import RecoveryProcedurePageClient from './RecoveryProcedurePageClient';

export const metadata: Metadata = {
  title: 'Data Recovery Procedure | Data Storage Solutions',
  description: 'DSS follows a 4-step recovery procedure: consultation, device analysis, data recovery & backup storage, and data & device delivery. Learn how the process works.',
  alternates: { canonical: '/data-recovery/recovery-procedure' },
  openGraph: {
    title: 'Data Recovery Procedure | Data Storage Solutions',
    description: 'DSS follows a 4-step recovery procedure: consultation, device analysis, data recovery & backup storage, and delivery.',
    url: '/data-recovery/recovery-procedure',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Recovery Procedure | Data Storage Solutions',
    description: 'DSS follows a 4-step recovery procedure: consultation, device analysis, data recovery & backup storage, and delivery.',
  },
};

export default function RecoveryProcedurePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Data Recovery' },
          { name: 'Recovery Procedure' },
        ]}
      />
      <RecoveryProcedurePageClient />
    </>
  );
}
