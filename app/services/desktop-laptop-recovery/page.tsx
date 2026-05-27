'use client';

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import {
  CheckCircle, AlertTriangle, Wrench,
  HardDrive, ChevronDown, ChevronUp, Shield, Star,
  Monitor, Lock, Droplets, Flame, Cpu, ShieldAlert
} from 'lucide-react';

const faqs = [
  {
    q: 'What types of data recovery services does DSS provide for desktop and laptop hard drives?',
    a: 'DSS provides complete data recovery services for all types of desktop and laptop hard drives including HDDs, SSDs, SATA, IDE/PATA drives and more. We handle logical failures, physical damage, accidental deletion, formatted drives, corrupted file systems, and firmware issues.',
  },
  {
    q: 'Do I get a diagnostic report before proceeding with data recovery?',
    a: 'Yes. DSS provides a detailed diagnostic report before starting the actual data recovery process. This report lists all recoverable files and folders so you know exactly what to expect before any charges are applied.',
  },
  {
    q: 'How does DSS ensure timely updates on the status and progress of data recovery?',
    a: 'Our team provides regular status updates throughout the recovery process via phone and email. You will always know the current stage of your recovery and the estimated completion time.',
  },
  {
    q: 'Are DSS data recovery services available for all desktop makes and brands?',
    a: 'Yes. DSS offers data recovery services for all desktop and laptop makes and brands — including Dell, HP, Lenovo, Acer, Asus, Apple, Sony, Toshiba, Samsung, and more — regardless of age or model.',
  },
  {
    q: 'Is it fine to use a particular operating system or file system that DSS supports for data recovery?',
    a: 'DSS supports all major operating systems and file systems including Windows (FAT16, FAT32, NTFS, exFAT), Linux (Ext2, Ext3, Ext4), macOS (HFS, HFS+, APFS), and more. No system is too old or too new for us.',
  },
  {
    q: 'What are the charges if my desktop or laptop is failing and my important data is at risk?',
    a: 'DSS follows a strict No Data, No Cost policy. You are only charged if we successfully recover your data. A free diagnostic evaluation is performed first to assess the situation before any commitment.',
  },
  {
    q: 'Should I stop using my laptop or desktop if it is failing and I suspect data loss?',
    a: 'Yes — immediately stop using the device. Continued use of a failing drive increases the risk of permanent data loss. Power it off and contact DSS as soon as possible to prevent further damage.',
  },
  {
    q: 'How much time does DSS take for recovering data from a desktop or laptop hard drive?',
    a: 'Standard recovery typically takes 3–7 business days depending on the extent of damage. Urgent and express recovery options are also available for critical situations at an additional charge.',
  },
  {
    q: "Is DSS's data recovery service available only in Bangalore, or do you serve other parts of India as well?",
    a: 'While our primary lab is located in Bangalore, DSS provides data recovery services across India through our secure Pickup & Delivery service. Clients from any city can courier their devices to us safely.',
  },
  {
    q: 'Can DSS provide data recovery services for any generation of desktop or laptop hard drives?',
    a: 'Absolutely. DSS has experience recovering data from hard drives spanning over 20+ years of technology — from legacy IDE/PATA drives to the latest NVMe SSDs. No drive generation is beyond our expertise.',
  },
];

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

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-blue-50 transition-colors duration-200"
          >
            <span className={`font-semibold text-sm ${open === i ? 'text-[#3da3ff]' : 'text-slate-800'}`}>
              {i + 1}. {faq.q}
            </span>
            {open === i
              ? <ChevronUp className="shrink-0 h-4 w-4 text-[#3da3ff] ml-4" />
              : <ChevronDown className="shrink-0 h-4 w-4 text-slate-400 ml-4" />
            }
          </button>
          {open === i && (
            <div className="px-5 pb-5 pt-1 bg-blue-50/50 text-slate-600 text-sm leading-relaxed border-t border-blue-100">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DesktopLaptopRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Desktop & Laptop Hard Drive Data Recovery Services"
        backgroundImage="/images/services/laptop_recovery_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'DESKTOP & LAPTOP RECOVERY' },
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

        {/* Divider */}
        <div className="w-full h-px bg-slate-100" />

        {/* About the Service */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            ABOUT THE SERVICE
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              DSS RECOVERY SERVICE is a well-qualified and the most skilled data recovery service provider for you today. It is an experts team of data recovery professionals and with us, you don&apos;t have to worry about data loss. DSS Recovery Services has some of the most brilliant Data Recovery experts of the industry and is therefore renowned as one of the best companies of its kind. DSS has been handling desktop and laptop data recovery for over 20+ years and is associated with customers from all over India.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              At DSS, we don&apos;t believe in treating all data loss issues the same way. We understand that each customer has unique needs, and that every data loss situation is different. Our engineers follow a careful, methodical process to ensure the best possible outcome. Whether the drive is clicking, the file system is corrupt, or you accidentally deleted important files — we have the tools and expertise to handle it.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              A Laptop of one of our very important corporate clients fell from the 2nd floor. The laptop contained encrypted data on the hard drive. Data was successfully recovered by our expert team. We have also successfully recovered data from hard drives that burnt due to short circuits, or were damaged in water, or had been handled in an unprofessional manner with fingerprints on the platter.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Additionally, the power supply of a computer being suddenly lost, leading to an unexpected shut-down, damages the file system severely. We also handle such cases with success. After examining the drive, we provide a comprehensive diagnostic report that lists recoverable files, helping you make an informed decision before committing to the recovery.
            </p>
            <p className="text-slate-500 text-xs italic border-l-4 border-[#3da3ff] pl-4">
              Free Tips: Do not switch on a New Monitor for the capabilities of Data Recovery.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Services Offered */}
        <div>
          <SectionHeading icon={Wrench} title="Desktop and Laptop Recovery Services offered by DSS are:" iconBg="bg-blue-100" iconColor="text-[#3da3ff]" />
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              {
                icon: Monitor,
                title: 'All Brands Supported',
                desc: 'Dell, HP, Lenovo, Apple, Acer, Asus, Sony, Samsung, Toshiba and all other brands — we recover them all.',
                color: 'text-[#3da3ff]',
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                hover: 'hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(61,163,255,0.12)]',
              },
              {
                icon: HardDrive,
                title: 'Physical Damage Recovery',
                desc: 'Recovery from physically damaged, clicking, grinding, or completely seized hard drives.',
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                border: 'border-violet-100',
                hover: 'hover:border-violet-300 hover:shadow-[0_4px_20px_rgba(124,58,237,0.12)]',
              },
              {
                icon: Cpu,
                title: 'Logical Failure Recovery',
                desc: 'Corrupted file system, accidental format, accidentally deleted files — all handled with expertise.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-100',
                hover: 'hover:border-emerald-300 hover:shadow-[0_4px_20px_rgba(5,150,105,0.12)]',
              },
              {
                icon: Lock,
                title: 'Encrypted Drive Recovery',
                desc: 'Full recovery from BitLocker, FileVault, and other encrypted drives without data compromise.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                hover: 'hover:border-amber-300 hover:shadow-[0_4px_20px_rgba(217,119,6,0.12)]',
              },
              {
                icon: Droplets,
                title: 'Water Damaged Drives',
                desc: 'Specialized recovery from water-damaged and flood-affected laptop and desktop hard drives.',
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                border: 'border-sky-100',
                hover: 'hover:border-sky-300 hover:shadow-[0_4px_20px_rgba(2,132,199,0.12)]',
              },
              {
                icon: Flame,
                title: 'Fire & PCB Damage',
                desc: 'Firmware repair and PCB replacement to recover from burnt or fire-damaged laptop drives.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                border: 'border-rose-100',
                hover: 'hover:border-rose-300 hover:shadow-[0_4px_20px_rgba(225,29,72,0.12)]',
              },
              {
                icon: ShieldAlert,
                title: 'Virus & Ransomware',
                desc: 'Data recovery from virus-infected or ransomware-attacked desktop and laptop systems.',
                color: 'text-fuchsia-600',
                bg: 'bg-fuchsia-50',
                border: 'border-fuchsia-100',
                hover: 'hover:border-fuchsia-300 hover:shadow-[0_4px_20px_rgba(192,38,211,0.12)]',
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

        <div className="w-full h-px bg-slate-100" />

        {/* Signs of Data Loss */}
        <div>
          <SectionHeading icon={AlertTriangle} title="Signs or Indications of a Desktop or Laptop likely to experience Data Loss are:" iconBg="bg-amber-50" iconColor="text-amber-500" />
          <BulletList color="text-amber-500" items={[
            'The drive is making unusual clicking, grinding, or beeping sounds',
            'The system is very slow or freezes frequently',
            'Blue screen of death (BSOD) errors appearing repeatedly',
            'Files or folders suddenly disappearing or becoming inaccessible',
            'The operating system fails to boot or shows boot errors',
            'The drive is not detected in BIOS or Disk Management',
            'Frequent bad sector warnings or read/write errors',
          ]} />
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Guidance */}
        <div>
          <SectionHeading icon={Shield} title="Guidance about what can be done when your Desktop or Laptop is failing:" iconBg="bg-emerald-50" iconColor="text-emerald-600" />
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              {
                step: '01',
                title: 'Stop Using the Device',
                desc: 'Stop using the device immediately to prevent further overwriting of lost data.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-100',
                hover: 'hover:border-emerald-300',
              },
              {
                step: '02',
                title: 'Do Not Reinstall OS',
                desc: 'Do not attempt to reinstall the operating system or format the drive under any circumstances.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                hover: 'hover:border-blue-300',
              },
              {
                step: '03',
                title: 'Avoid Disk Utilities',
                desc: 'Do not run chkdsk or any disk repair utilities on a physically failing drive — it causes more harm.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                border: 'border-rose-100',
                hover: 'hover:border-rose-300',
              },
              {
                step: '04',
                title: 'No Repeated Reboots',
                desc: 'Avoid switching the device on and off repeatedly, especially if you hear abnormal sounds.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                hover: 'hover:border-amber-300',
              },
              {
                step: '05',
                title: 'Note Error Messages',
                desc: 'Make a note of any error messages or unusual behavior you have observed for the technician.',
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                border: 'border-violet-100',
                hover: 'hover:border-violet-300',
              },
              {
                step: '06',
                title: 'Contact DSS Immediately',
                desc: 'Contact DSS as soon as possible — the sooner you act, the higher the chance of full recovery.',
                color: 'text-[#3da3ff]',
                bg: 'bg-sky-50',
                border: 'border-sky-100',
                hover: 'hover:border-sky-300',
              },
              {
                step: '07',
                title: 'Use Pickup & Delivery',
                desc: 'Arrange for our secure Pickup & Delivery service if you cannot visit our Bangalore lab in person.',
                color: 'text-teal-600',
                bg: 'bg-teal-50',
                border: 'border-teal-100',
                hover: 'hover:border-teal-300',
              },
              {
                step: '08',
                title: 'Never Open the Drive',
                desc: 'Do not attempt opening the hard drive casing under any circumstances — it must be done in a Class 100 Clean Room.',
                color: 'text-slate-600',
                bg: 'bg-slate-100',
                border: 'border-slate-200',
                hover: 'hover:border-slate-400',
              },
            ].map(({ step, title, desc, color, bg, border, hover }, i) => (
              <div
                key={i}
                className={`group relative flex items-start gap-4 border ${border} ${hover} rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm cursor-default overflow-hidden`}
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

        {/* OS / File Systems */}
        <div>
          <SectionHeading icon={HardDrive} title="List of Operating Systems / File Systems" iconBg="bg-slate-100" iconColor="text-slate-600" />
          <div className="grid sm:grid-cols-2 gap-10 mt-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Operating Systems</p>
              <BulletList color="text-slate-500" items={[
                'Windows XP / Vista / 7 / 8 / 10 / 11',
                'macOS / OS X (all versions)',
                'Linux (Ubuntu, Fedora, Debian, CentOS, etc.)',
                'Windows Server 2003 / 2008 / 2012 / 2016 / 2019',
                'Unix and other legacy OS variants',
              ]} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">File Systems</p>
              <BulletList color="text-slate-500" items={[
                'FAT16, FAT32, exFAT',
                'NTFS, NTFS5',
                'Ext2, Ext3, Ext4 (Linux)',
                'HFS, HFS+, APFS (macOS)',
                'ReiserFS, XFS, JFS, Btrfs',
              ]} />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* FAQs */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              FAQ
            </span>
            <h2 className="text-slate-900 font-bold text-xl">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>

      </div>

    </main>
  );
}
