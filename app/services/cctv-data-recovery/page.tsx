'use client';

import PageHeader from '@/components/PageHeader';
import {
  Cctv, AlertTriangle, ShieldCheck, Star, Flame, HardDrive, FileWarning, HelpCircle, Video
} from 'lucide-react';

const reviews = [
  { platform: 'Google', rating: '4.8', color: 'text-[#4285F4]', bg: 'bg-blue-50', border: 'border-blue-100' },
  { platform: 'Facebook', rating: '4.7', color: 'text-[#1877F2]', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { platform: 'Justdial', rating: '4.5', color: 'text-[#3da3ff]', bg: 'bg-sky-50', border: 'border-sky-100' },
  { platform: 'Sulekha', rating: '4.7', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
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

export default function CctvDataRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="CCTV Data Recovery"
        backgroundImage="/images/services/cctv_data_recovery_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'CCTV DATA RECOVERY' },
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

        {/* About CCTV Recovery */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              The use of <span className="font-bold text-slate-800">CCTV</span> has become a necessity, and its use is more widespread. CCTV Data has been a good weapon against crime as its very presence is a deterrent to people who are looking for an opportunity to do any mischief or looking for an opportunity with a criminal motive. Petty offenders simply go elsewhere if they notice that there is video surveillance. It is not just a provision of CCTV evidence in identifying a crime and finding a culprit, it has become an important tool for police and the judicial system.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thus footage recovery is a sensitive task. They commonly use CCTV and DVR cameras for both personal and commercial purposes. DSS offers you the best footage <span className="font-bold text-[#3da3ff]">recovery services</span> to recover lost, deleted, or damaged, formatted, encrypted data from the security cameras and DVRs.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl">
              <p className="text-indigo-900 text-sm font-medium">
                We offer the best <span className="font-bold">CCTV data recovery services in Bangalore</span> for you to get your footage back. We have a team of experts who are familiar with the system and can help you recover lost, deleted, or damaged footage from the security cameras and DVRs.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Causes for Damage */}
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
                desc: 'Formatted or corrupted hard drives or memory cards.',
                color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100'
              },
              {
                icon: FileWarning,
                title: 'Accidental Deletion',
                desc: 'Accidental deletions of critical saved footages.',
                color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100'
              },
              {
                icon: HelpCircle,
                title: 'Unknown Formats',
                desc: 'Data being Inaccessible due to unknown or proprietary format.',
                color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100'
              },
              {
                icon: Cctv,
                title: 'System Failures',
                desc: 'CCTV/DVR system failures, motherboard crash, or power issues.',
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

        <div className="w-full h-px bg-slate-100" />

        {/* DSS Expertise & Capabilities */}
        <div>
          <SectionHeading icon={ShieldCheck} title="Our Expertise & Capabilities" iconBg="bg-teal-50" iconColor="text-teal-600" />
          <div className="grid md:grid-cols-2 gap-6 mt-4">

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 shrink-0">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">Custom Recovery Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                <span className="font-bold text-[#3da3ff]">DSS</span> is expertise to make inaccessible camera footage accessible. We apply advanced recovery solutions. DSS is an expert in DVR and CCTV recovery. We have to our credit having recovered footage from devices when others did not recover. Ours is a custom-developed software that creates footage from the image created by CCTV and DVR systems. We are also expertise in recovering video footage from PCI based DVR devices and also DVR devices having fixed storage.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 shrink-0">
                <Cctv className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">Proprietary Format Handling</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                <span className="font-bold text-[#3da3ff]">DSS</span> is your reliable source that offers professional data recovery of CCTV footage held on DVR systems including the de-scrambling of multiplexed video from proprietary encoding systems and image enhancement/manipulation.
              </p>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}
