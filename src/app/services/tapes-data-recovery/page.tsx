'use client';

import PageHeader from '@/components/layout/PageHeader';
import {
  Database, AlertTriangle, CheckCircle, Star, Flame, HardDrive, FileWarning, HelpCircle, Cctv, ShieldAlert, Droplet, ArchiveX, ShieldX, Scissors
} from 'lucide-react';

const reviews = [
  { platform: 'Google',   rating: '4.8', color: 'text-[#4285F4]', bg: 'bg-blue-50',   border: 'border-blue-100' },
  { platform: 'Facebook', rating: '4.7', color: 'text-[#1877F2]', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { platform: 'Justdial', rating: '4.5', color: 'text-[#3da3ff]', bg: 'bg-sky-50',    border: 'border-sky-100' },
  { platform: 'Sulekha',  rating: '4.7', color: 'text-red-600',   bg: 'bg-red-50',    border: 'border-red-100' },
];

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

export default function TapesDataRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Tapes Data Recovery"
        backgroundImage="/images/headers_img/tapes_data_recovery.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'TAPES DATA RECOVERY' },
        ]}
      />

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

        {/* About Tapes Recovery */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              It is a common practice to back up systems to <span className="font-bold text-slate-800">tape drives</span> as they are fast, convenient, and are of high capacity. In spite of all the care taken, tapes can fail for the same reasons as other magnetic media would fail. <span className="font-bold text-[#3da3ff]">Data Storage Solutions</span> has the distinction of recovering tapes that have become corrupt in typical situations.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We have a team of experts who are specialized in tapes data recovery. We have the experience and expertise to recover tapes that have become corrupt. Our team of experts will work to solve your data corruption problem as fast as possible.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Conditions */}
        <div>
          <SectionHeading icon={Database} title="DSS can handle Tape Data Recovery in the following conditions:" iconBg="bg-indigo-50" iconColor="text-indigo-600" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { title: 'Physical damage', icon: ShieldAlert, color: 'text-rose-500', bg: 'bg-rose-50' },
              { title: 'Backup Failures', icon: ArchiveX, color: 'text-amber-500', bg: 'bg-amber-50' },
              { title: 'Tapes corrupted due to water', icon: Droplet, color: 'text-blue-500', bg: 'bg-blue-50' },
              { title: 'Overwritten Tapes', icon: FileWarning, color: 'text-violet-500', bg: 'bg-violet-50' },
              { title: 'Smoke or Chemical Damaged', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
              { title: 'Intentionally damaged', icon: ShieldX, color: 'text-red-500', bg: 'bg-red-50' },
              { title: 'Broken Tapes', icon: Scissors, color: 'text-slate-500', bg: 'bg-slate-50' },
            ].map(({ title, icon: Icon, color, bg }, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-all">
                <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <span className="text-slate-700 text-sm font-semibold leading-tight">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Causes for Damage (as per image text) */}
        <div>
          <SectionHeading icon={AlertTriangle} title="The following could be the causes for the damage:" iconBg="bg-rose-50" iconColor="text-rose-600" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              {
                icon: Flame,
                title: 'Environmental Damage',
                desc: 'Fire, heat, dust, moisture, water, and smoke damage.',
                color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100'
              },
              {
                icon: HardDrive,
                title: 'Format & Corruption',
                desc: 'Formatted or corrupted hard drives or cards.',
                color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100'
              },
              {
                icon: FileWarning,
                title: 'Accidental Deletion',
                desc: 'Accidental deletions of saved footages.',
                color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100'
              },
              {
                icon: HelpCircle,
                title: 'Unknown Formats',
                desc: 'Data being Inaccessible due to unknown format.',
                color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100'
              },
              {
                icon: Cctv,
                title: 'System Failures',
                desc: 'CCTV/DVR system failures etc.',
                color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100'
              }
            ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <div key={i} className={`bg-white border ${border} rounded-xl p-5 hover:shadow-md transition-all flex flex-col`}>
                <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center mb-3 shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed flex-grow">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
