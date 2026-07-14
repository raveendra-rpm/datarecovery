'use client';

import PageHeader from '@/components/layout/PageHeader';
import {
  HardDrive, CheckCircle, Star, AlertTriangle, ShieldCheck, Usb, Info
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

export default function ExternalHardDrive() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="External Hard Drive Data Recovery"
        backgroundImage="/images/services/extrenal_hdd_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'EXTERNAL HARD DRIVE' },
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

        {/* About External Hard Drives */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              An external Hard drive is a portable storage device that can be attached to a computer through a USB. The external drive is an easy way to add additional storage or options to your computer. With an External Hard drive, you can store a lot of data for backup or move it to another computer. External hard drives are compact which are easy to carry and hassle-free.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#3da3ff]">External Hard drive</span> usually comes with a casing with USB 2.0 / USB 3.0 connectivity.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We need to be careful while using the <span className="font-bold text-slate-800">External drive</span> as the drive is carried from place to place and as a result, they get dropped, knocked, crushed, not safely ejected, overheated, accidentally format/deleted, affected by the virus.,etc which causes <span className="font-bold text-red-500">drive failure</span>.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-amber-800 text-sm font-medium">
                When the drive is not functioning properly we suggest not connecting the drive again and again as it may further damage your drive.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Guidelines / Services Offered */}
        <div>
          <SectionHeading icon={ShieldCheck} title="External Hard Drive Care & Recovery Guidelines:" iconBg="bg-emerald-50" iconColor="text-emerald-600" />

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                icon: Info,
                title: 'Handle with Care',
                desc: 'Always carry your external drive safely to avoid physical shocks and bumps.',
                color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100'
              },
              {
                icon: AlertTriangle,
                title: 'Avoid Physical Damage',
                desc: 'Prevent drops, knocks, and crushing which can severely damage mechanical parts.',
                color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100'
              },
              {
                icon: HardDrive,
                title: 'Select Surface Carefully',
                desc: 'Place the external HDD on a flat, stable surface while in operation.',
                color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100'
              },
              {
                icon: Usb,
                title: 'Safe Ejection & Handling',
                desc: 'Do not lift the HDD while plugged in. Wait 10-15 seconds after unplugging before moving it.',
                color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100'
              },
              {
                icon: HardDrive,
                title: 'Never Overload',
                desc: 'Avoid filling the drive to absolute maximum capacity to ensure smooth operation.',
                color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100'
              },
              {
                icon: Usb,
                title: 'Cable Safety',
                desc: 'Don\'t pull the USB cable abruptly. Always disconnect it gently from the port.',
                color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100'
              },
              {
                icon: CheckCircle,
                title: 'Check for Bad Sectors',
                desc: 'Regularly scan the drive for bad sectors to catch early signs of failure.',
                color: 'text-fuchsia-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-100'
              },
              {
                icon: Usb,
                title: 'Connector Health',
                desc: 'Regularly check the USB connector for dust or physical damage.',
                color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100'
              },
              {
                icon: AlertTriangle,
                title: 'Prevent Overheating',
                desc: 'Ensure the drive has proper ventilation and is not exposed to direct heat.',
                color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100'
              },
            ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 border ${border} rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm cursor-default`}
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

        <div className="w-full h-px bg-slate-100" />

        {/* Conclusion */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
          <HardDrive className="h-10 w-10 text-[#3da3ff] mx-auto mb-4" />
          <p className="text-slate-700 font-medium text-base mb-3">
            We recover data from all kinds of external storage devices, with or without adaptors.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-3xl mx-auto">
            Our team of <span className="font-semibold text-slate-700">data recovery experts</span> will help you provide the best solution, whether it is a logical or physical failure. We assure you that we will provide a higher success rate as we use high-end recovery tools and have in-hand experience for over two decades in data recovery services in Bangalore.
          </p>
        </div>

      </div>

    </main>
  );
}
