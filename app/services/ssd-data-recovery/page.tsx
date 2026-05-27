'use client';

import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import {
  HardDrive, CheckCircle, Star, Info, AlertTriangle, ShieldAlert
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

export default function SSDDataRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="SSD Data Recovery"
        backgroundImage="/images/services/ssd_data_recovery.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'SSD DATA RECOVERY' },
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

        {/* About SSD Data Recovery */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT SSD DATA RECOVERY
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Solid State Drives are referred commonly to as SSD. It&apos;s a <span className="font-bold text-[#3da3ff]">data storage</span> platter/medium which uses solid-state memory to store data. These devices are hailed for their features for their reliability, portability, and speed. It is similar to a hard disk except that, it doesn&apos;t have any mechanical or moving parts. It has numerous advantages over hard disk along with features like:
            </p>
          </div>

          <div className="mt-4 mb-6">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
              <BulletList items={[
                'High data transfer',
                'Safer & solid',
                'Consumes less power',
                'Random access time'
              ]} />
              <BulletList items={[
                'Disk fragmentation does not affect the performance',
                'SSD makes no noise',
                'Tolerates temperature',
                'Environmental factors like vibration, shock, or magnetic fields cannot affect'
              ]} />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              But, whatever be its statistical features, these solid-state drives can fail without any warning or notice. It is therefore very important to have a regular backup since it is hard to predict when the <span className="font-bold text-[#3da3ff]">SSD drive</span> can fail. So, the big question is, in case there is no backup, how the data is to be recovered from these SSD devices?
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              It would be very difficult to recover data by yourself and the data naturally will be very essential for you. But no worries, DSS is there for you to rely on in all such cases of crisis and we shall recover your data.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Reasons for data loss */}
        <div>
          <SectionHeading icon={AlertTriangle} title="Reasons for data loss from SSD drives leading to partial or complete data loss:" iconBg="bg-amber-50" iconColor="text-amber-500" />
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              {
                icon: Info,
                title: 'Human Errors',
                desc: 'Accidental deletion or format is one of the main reasons for data loss from SSD devices purely due to human errors.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                hover: 'hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)]',
              },
              {
                icon: ShieldAlert,
                title: 'File System Corruption',
                desc: 'Corruption generally happens due to virus attacks on the device and thereby the File system corruption, leading to inaccessibility of the device resulting in data loss.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                border: 'border-rose-100',
                hover: 'hover:border-rose-300 hover:shadow-[0_4px_20px_rgba(225,29,72,0.12)]',
              },
              {
                icon: HardDrive,
                title: 'Operating System Crash',
                desc: 'Due to registry error or software malfunction also OS crashes can happen to lead to data loss.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-100',
                hover: 'hover:border-emerald-300 hover:shadow-[0_4px_20px_rgba(5,150,105,0.12)]',
              },
              {
                icon: AlertTriangle,
                title: 'Power Failure',
                desc: 'Power failure during file transfer or during the copying process is the most valid reason for the data loss.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                hover: 'hover:border-amber-300 hover:shadow-[0_4px_20px_rgba(217,119,6,0.12)]',
              },
            ].map(({ icon: Icon, title, desc, color, bg, border, hover }, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 border ${border} ${hover} rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-default`}
              >
                <div className={`shrink-0 h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-sm mb-1">{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
