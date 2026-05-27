'use client';

import PageHeader from '@/components/PageHeader';
import {
  Usb, AlertTriangle, ShieldAlert, Star, HardDrive, ShieldCheck, Camera, HelpCircle, Mail
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

export default function FlashCardRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Flash Card Data Recovery"
        backgroundImage="/images/services/flash_drive_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'FLASH CARD RECOVERY' },
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

        {/* About Flash Card Recovery */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#3da3ff]">Data Storage Solutions</span> provides services for anyone who is in search of digital photo recovery solutions for SmartMedia, CompactFlash, Memory Stick (smart platter), MMC-SD, miniSD, PCMCIA, Microdrive, USB Flash Drive, JetFlash, SD or PC Card image storage devices.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
              <p className="text-amber-800 text-sm font-medium mb-3">
                In situations where you have data deleted from your USB flash drive, or if you format it by mistake, we suggest not to PANIC.
              </p>
              <ul className="text-amber-700 text-sm space-y-2 list-disc ml-5">
                <li>You need to simply eject or remove the flash drive from the computer.</li>
                <li>Get in touch with DSS by calling or emailing us.</li>
                <li><span className="font-bold">It is important not to continue the use of the drive</span> as your data might be overwritten.</li>
              </ul>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              USB flash drives have almost replaced the old floppy disk drive. The use of USB flash drives has become evidently more popular than CDs and DVDs for data storage. Because of its ease of use and the ability to erase or rewrite. But then, that feature alone has been a contributing factor for the increased possibility of data loss.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              The convenience of using a flash drive is that it facilitates the easy transfer of data. Therefore, it has become very handy for small business owners to keep all of their documents on a flash drive, considering their portability and thus, USB flash drives have become convenient and reliable.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Data Loss Circumstances */}
        <div>
          <SectionHeading icon={AlertTriangle} title="Data loss or corruption could happen in a USB Flash drive under the following circumstances:" iconBg="bg-rose-50" iconColor="text-rose-600" />

          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              {
                icon: ShieldAlert,
                title: 'Accidental Format',
                desc: 'Accidentally deleted files or formatted flash drives.',
                color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100'
              },
              {
                icon: Usb,
                title: 'Improper Removal',
                desc: 'Improperly removing the drive without ejecting can cause corruption on the drive.',
                color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100'
              },
              {
                icon: HardDrive,
                title: 'Device Mishandling',
                desc: 'Device mishandled/lifted or moved when it is still in sync to the PC.',
                color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100'
              }
            ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <div key={i} className={`bg-white border ${border} rounded-xl p-5 hover:shadow-md transition-all flex flex-col`}>
                <div className={`h-12 w-12 rounded-full ${bg} flex items-center justify-center mb-4 shrink-0`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              In such an event, <span className="font-bold text-[#3da3ff]">DSS</span> is at ease to perform for you a flash drive recovery to restore the files. Immediately when you stop using the drive and bring it or send it to us to do emergency data recovery.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Other Removable Media */}
        <div>
          <SectionHeading icon={Camera} title="Other removable media recovery:" iconBg="bg-indigo-50" iconColor="text-indigo-600" />
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Similar to flash drives, we can also do the camera media recovery even in a situation of having pictures deleted from your memory card, whether it is SD, CF, MMC, or any other format. DSS can always be relied for you to get your photos back. Please note that we will help you even in situations where you have formatted your card.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mac Data Recovery is another area DSS can handle efficiently in case there is accidental deletion of some files in iPhoto or the trash can has been emptied even before you have realized that you had some files you needed so much.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#3da3ff]">DSS</span> is a <span className="font-semibold text-slate-800">One Stop Complete Data Recovery Solution</span> as well as a <span className="font-semibold text-slate-800">digital photo recovery Facility</span> dedicated to digital image recovery as well as your other data recovery needs. If you are a professional photographer, marketing agency, news agency, journalist, security specialist or anyone who require digital photo recovery, data recovery services, you are in the right place. DSS is your Best Friend to rely on in every situation of data recovery more so during your Crisis time. We do our best to keep all our customers best satisfied.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Conclusion / Contact */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-12 w-12 text-[#3da3ff] mb-4" />
            <h3 className="text-slate-900 font-bold text-lg mb-3">Stop using the device to prevent permanent data loss!</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              Remember again and again that you must stop using the computer or any removable gadgets or devices and contact us and DSS can still get your data back.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200">
              <Mail className="h-5 w-5 text-indigo-600" />
              <p className="text-slate-700 text-sm">
                For queries on removable media: <a href="mailto:helpdesk@datastoragesolutions.in" className="font-bold text-indigo-600 hover:underline">helpdesk@datastoragesolutions.in</a>
              </p>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
