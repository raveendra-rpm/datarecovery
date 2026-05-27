'use client';

import PageHeader from '@/components/PageHeader';
import {
  ShieldCheck, Lock, CheckCircle, Star, FileKey, Wrench, ShieldAlert
} from 'lucide-react';

const reviews = [
  { platform: 'Google', rating: '4.8', color: 'text-[#4285F4]', bg: 'bg-blue-50', border: 'border-blue-100' },
  { platform: 'Facebook', rating: '4.7', color: 'text-[#1877F2]', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { platform: 'Justdial', rating: '4.5', color: 'text-[#3da3ff]', bg: 'bg-sky-50', border: 'border-sky-100' },
  { platform: 'Sulekha', rating: '4.7', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
];

function BulletList({ items, color = 'text-[#3da3ff]' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle className={`${color} mt-0.5 h-4 w-4 shrink-0`} />
          <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ icon: Icon, title, iconBg, iconColor }: {
  icon: React.ElementType; title: string; iconBg: string; iconColor: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`h-10 w-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <h2 className="text-slate-900 font-bold text-xl">{title}</h2>
    </div>
  );
}

export default function EncryptedDataRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Encrypted Data Recovery"
        backgroundImage="/images/services/encrypted_data_recovery_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'ENCRYPTED DATA RECOVERY' },
        ]}
      />

      {/* ── All Content ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Customer Reviews */}
        <div>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              CUSTOMER REVIEWS &amp; RATINGS
            </span>
          </div>
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mb-6">Rated by thousands of satisfied customers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {reviews.map(({ platform, rating, color, bg, border }) => (
              <div key={platform} className={`${bg} ${border} border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow`}>
                <p className={`${color} font-black text-base mb-1.5`}>{platform}</p>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-500 text-xs">Rating <span className="font-black text-amber-500 text-sm ml-1">{rating}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* About Service */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#3da3ff]">Data Storage Solutions</span> is a company having over 15 years of data recovery experience and having been a name of substance with the most advanced tools to recover encrypted media and files. DSS uses strict data security protocols to ensure your data privacy through every stage in the data recovery process. Your data is secure from the time you give it to us till it is returned to you.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              DSS desires that the end-users or administrators provide their encryption information (user key, password or passphrase, etc.) in order for us to recover encrypted data.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              We request you to provide this information to our specialist at the time of submission which saves time on your recovery.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              The encryption <span className="font-bold text-[#3da3ff]">data recovery service</span> can help you recover data that has been encrypted. With our service, you will be able to decrypt the data securely.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Recovering from Encrypted Hard Drive */}
        <div>
          <SectionHeading icon={Wrench} title="Recovering from an Encrypted Hard Drive" iconBg="bg-blue-100" iconColor="text-[#3da3ff]" />
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            We follow the same handling procedures in all other media like in recovering from the hard disk that is encrypted. The processes followed are outlined in the below given high-level steps:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              {
                step: '01',
                title: 'Operation Assessment',
                desc: 'Hard Drive Operation Assessment.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-100',
              },
              {
                step: '02',
                title: 'Clean-room Escalation',
                desc: 'Escalation (if necessary): When physical or electronic damage is present.',
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                border: 'border-violet-100',
              },
              {
                step: '03',
                title: 'Image drive data',
                desc: 'Creating a secure image of the drive data.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-100',
              },
              {
                step: '04',
                title: 'Secure original media',
                desc: 'Securing the original media to prevent any modification.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
              },
              {
                step: '05',
                title: 'Decryption Process',
                desc: 'Executing the decryption process using provided credentials.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                border: 'border-rose-100',
              },
              {
                step: '06',
                title: 'Verified List',
                desc: 'Create On track Verified list of recoverable data and send it to the customer for approval.',
                color: 'text-teal-600',
                bg: 'bg-teal-50',
                border: 'border-teal-100',
              },
              {
                step: '07',
                title: 'Repair file system',
                desc: 'Repairing the file system for data integrity.',
                color: 'text-fuchsia-600',
                bg: 'bg-fuchsia-50',
                border: 'border-fuchsia-100',
              },
              {
                step: '08',
                title: 'Prepare data',
                desc: 'Prepare data for delivery to the client.',
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                border: 'border-sky-100',
              },
            ].map(({ step, title, desc, color, bg, border }, i) => (
              <div
                key={i}
                className={`group relative flex items-start gap-4 border ${border} rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm cursor-default overflow-hidden`}
              >
                {/* Watermark step number */}
                <span className="absolute -bottom-2 -right-1 text-[64px] font-black text-slate-100 select-none leading-none pointer-events-none">
                  {step}
                </span>
                {/* Step badge */}
                <div className={`shrink-0 h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <span className={`${color} font-black text-sm`}>{step}</span>
                </div>
                <div className="relative z-10">
                  <h4 className="text-slate-800 font-bold text-sm mb-1">{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Types of Encryption */}
        <div>
          <SectionHeading icon={Lock} title="Types of Encryption:" iconBg="bg-indigo-50" iconColor="text-indigo-500" />
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Bit locker, Sophos, PGP, Checkpoint, Safe boot, MacAfee Endpoint Encryption, True Crypt, FileVault / FileVault 2, Safeguard ETC.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}
