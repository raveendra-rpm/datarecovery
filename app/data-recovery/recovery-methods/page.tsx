'use client';

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import {
  CheckCircle, ChevronDown, ChevronUp, Cpu, HardDrive,
  Layers, Lock, Magnet, Microscope, MonitorCheck, RefreshCw,
  ScanLine, Server, Shield, Wrench, Zap,
} from 'lucide-react';

// ── FAQ Data ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What data recovery methods does DSS use for physically damaged hard drives?',
    a: 'For physically damaged drives, DSS uses Class 100 Clean Room procedures including platter transplant, head stack replacement, PCB repair, and spindle motor restoration. These are performed by certified engineers using precision tools to avoid any further damage.',
  },
  {
    q: 'Can DSS recover data from a hard drive with bad sectors?',
    a: 'Yes. DSS uses advanced sector-by-sector imaging tools that intelligently skip bad sectors and recover as much data as possible. Specialized firmware-level commands are used to extract data from deteriorating drives.',
  },
  {
    q: 'What is logical data recovery and when is it used?',
    a: 'Logical recovery is applied when the drive is physically healthy but data is inaccessible due to accidental deletion, file system corruption, accidental formatting, partition loss, or operating system failure. DSS uses proprietary software and manual techniques to reconstruct lost data.',
  },
  {
    q: 'Does DSS use write-blockers during recovery to protect the original data?',
    a: 'Absolutely. DSS always uses hardware write-blockers when imaging drives to ensure the original evidence/data is never modified. This is critical for both data integrity and forensic-grade recoveries.',
  },
  {
    q: 'Can DSS recover data from RAID arrays that have failed?',
    a: 'Yes. DSS has specialized RAID reconstruction techniques for RAID 0, 1, 5, 6, and 10. Our engineers manually analyze stripe size, parity rotation, and block order to reconstruct the RAID array and recover your data.',
  },
  {
    q: 'Is it possible to recover data from a drive that was overwritten?',
    a: 'Modern high-density drives make full overwrite recovery extremely difficult. However, if only partial overwriting occurred, DSS engineers can attempt recovery using magnetic residue analysis and sector-level reconstruction in many cases.',
  },
  {
    q: 'What is firmware recovery and how does DSS handle it?',
    a: 'Firmware is the internal software that controls how a hard drive operates. When firmware is corrupt, the drive may not spin up or be recognized. DSS uses specialized tools to read and rewrite firmware modules directly, restoring drive functionality without altering user data.',
  },
  {
    q: 'Does DSS offer remote data recovery?',
    a: 'For purely logical failures on drives that are still functioning, DSS can perform remote recovery sessions over a secure encrypted connection. For physical failures, the drive must be shipped to or dropped off at our Bangalore lab.',
  },
];

// ── Method Cards Data ──────────────────────────────────────────────────────
const methods = [
  {
    icon: ScanLine,
    title: 'Disk Imaging',
    badge: 'Foundation Step',
    badgeColor: 'bg-blue-100 text-blue-700',
    color: 'text-[#3da3ff]',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hover: 'hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(61,163,255,0.12)]',
    desc: 'Before any recovery attempt, DSS creates a sector-by-sector forensic clone of the failing drive. This protects the original media from further stress and allows all subsequent recovery work to be performed on the image safely.',
    points: ['Hardware write-blocked cloning', 'Sector-level bit-for-bit copy', 'Intelligent bad-sector management', 'Source drive preserved untouched'],
  },
  {
    icon: Layers,
    title: 'Logical Recovery',
    badge: 'Software Layer',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    hover: 'hover:border-emerald-300 hover:shadow-[0_4px_20px_rgba(5,150,105,0.12)]',
    desc: 'Applied when the drive is mechanically healthy but data is inaccessible. DSS engineers reconstruct lost partition tables, repair corrupted file systems, and recover accidentally deleted or overwritten files.',
    points: ['File system reconstruction (NTFS, FAT, Ext, APFS)', 'Partition table repair', 'Deleted file carving', 'MBR/GPT recovery'],
  },
  {
    icon: Wrench,
    title: 'Physical Recovery (Clean Room)',
    badge: 'Class 100 Clean Room',
    badgeColor: 'bg-violet-100 text-violet-700',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    hover: 'hover:border-violet-300 hover:shadow-[0_4px_20px_rgba(124,58,237,0.12)]',
    desc: 'Physically damaged drives require precision disassembly in our ISO-certified Class 100 Clean Room. DSS engineers replace failed read/write heads, platters, and spindle motors with donor parts to restore drive functionality.',
    points: ['Head stack assembly replacement', 'Platter transplant & swap', 'Spindle motor repair', 'PCB component-level repair'],
  },
  {
    icon: Cpu,
    title: 'Firmware Recovery',
    badge: 'Micro-level',
    badgeColor: 'bg-amber-100 text-amber-700',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    hover: 'hover:border-amber-300 hover:shadow-[0_4px_20px_rgba(217,119,6,0.12)]',
    desc: 'Firmware corruption prevents drives from initializing. Using specialized hardware interfaces and ROM readers, DSS engineers repair or rewrite the drive\'s internal firmware modules to restore normal operation.',
    points: ['ROM chip reading & reflashing', 'Firmware module patching', 'SA zone restoration', 'Adaptive parameters recalibration'],
  },
  {
    icon: Magnet,
    title: 'Magnetic Surface Analysis',
    badge: 'Advanced Technique',
    badgeColor: 'bg-rose-100 text-rose-700',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    hover: 'hover:border-rose-300 hover:shadow-[0_4px_20px_rgba(225,29,72,0.12)]',
    desc: 'For drives with extensive surface damage or bad sectors, DSS employs magnetic force microscopy and low-level scanning to map recoverable regions and extract data byte-by-byte from damaged platters.',
    points: ['Bad sector bypass techniques', 'Head alignment diagnostics', 'Platter surface scanning', 'Residual magnetic signal analysis'],
  },
  {
    icon: Lock,
    title: 'Encrypted Drive Recovery',
    badge: 'Security Preserving',
    badgeColor: 'bg-sky-100 text-sky-700',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    hover: 'hover:border-sky-300 hover:shadow-[0_4px_20px_rgba(2,132,199,0.12)]',
    desc: 'DSS recovers data from BitLocker, FileVault, VeraCrypt, and hardware-encrypted drives without compromising encryption integrity. With your credentials, our engineers safely decrypt and extract your files.',
    points: ['BitLocker & FileVault support', 'VeraCrypt container recovery', 'Hardware encryption bypass (with credentials)', 'Data extracted with security maintained'],
  },
  {
    icon: Server,
    title: 'RAID Reconstruction',
    badge: 'Enterprise Grade',
    badgeColor: 'bg-teal-100 text-teal-700',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    hover: 'hover:border-teal-300 hover:shadow-[0_4px_20px_rgba(13,148,136,0.12)]',
    desc: 'Failed RAID arrays require deep understanding of stripe patterns and parity. DSS manually reconstructs RAID 0, 1, 5, 6, and 10 arrays, even from degraded or multi-disk failure scenarios.',
    points: ['RAID 0, 1, 5, 6, 10 support', 'Manual stripe & parity analysis', 'Multi-drive failure handling', 'NAS & SAN recovery'],
  },
  {
    icon: RefreshCw,
    title: 'File Carving',
    badge: 'Deep Scan',
    badgeColor: 'bg-fuchsia-100 text-fuchsia-700',
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-100',
    hover: 'hover:border-fuchsia-300 hover:shadow-[0_4px_20px_rgba(192,38,211,0.12)]',
    desc: 'When file system metadata is destroyed, DSS uses signature-based file carving to scan raw disk sectors and reconstruct files based on their known binary signatures — recovering photos, documents, videos, and databases.',
    points: ['Signature-based deep scanning', 'Photos, videos, documents recovery', 'Database file reconstruction', 'Works without file system metadata'],
  },
];

// ── Why Methods Work section ───────────────────────────────────────────────
const advantages = [
  { icon: Shield, title: 'No-Risk Imaging First', desc: 'Every recovery starts with a forensic image — your original drive is never directly worked on.' },
  { icon: Microscope, title: 'Lab-Grade Equipment', desc: 'We use professional-grade hardware tools and ISO-certified clean room facilities.' },
  { icon: MonitorCheck, title: 'Verified Recovery Output', desc: 'Recovered data is verified and checksummed before delivery to ensure integrity.' },
  { icon: Zap, title: 'Fastest Turnaround', desc: 'Our parallel lab process means your data is recovered in the shortest possible timeframe.' },
];

// ── Sub-components ─────────────────────────────────────────────────────────
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

// ── Page ───────────────────────────────────────────────────────────────────
export default function RecoveryMethodsPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Data Recovery Methods"
        backgroundImage="/images/headers_img/recovery_methods.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'DATA RECOVERY' },
          { label: 'RECOVERY METHODS' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* ── Intro ──────────────────────────────────────────────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            OVERVIEW
          </span>
          <h2 className="text-slate-900 font-bold text-2xl mb-4">
            Advanced Techniques DSS Uses for Data Recovery
          </h2>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              At DSS, data recovery is not a one-size-fits-all process. Every failed drive presents a unique combination of physical, logical, and electronic challenges. Our engineers select and combine the appropriate recovery methods based on a thorough diagnosis of each individual case.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Over 20+ years of experience, DSS has developed and refined proprietary processes for recovering data from every type of storage failure — from simple accidental deletions to catastrophic physical damage requiring Class 100 Clean Room surgery. Our methodical, multi-stage approach ensures the highest possible success rate while protecting the integrity of your data throughout the process.
            </p>
            <p className="text-slate-500 text-xs italic border-l-4 border-[#3da3ff] pl-4">
              Free Tip: Never attempt DIY recovery on a physically failing drive. Every spin of a damaged head causes irreversible platter damage that reduces recovery chances significantly.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* ── Why Our Methods Work ────────────────────────────────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            WHY IT WORKS
          </span>
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4 border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#3da3ff]" />
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

        {/* ── Recovery Methods Grid ───────────────────────────────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            RECOVERY METHODS
          </span>
          <h2 className="text-slate-900 font-bold text-2xl mb-8">
            The 8 Core Methods DSS Uses to Recover Your Data
          </h2>

          <div className="space-y-6">
            {methods.map(({ icon: Icon, title, badge, badgeColor, color, bg, border, hover, desc, points }, i) => (
              <div
                key={i}
                className={`group border ${border} ${hover} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5`}
              >
                {/* Header row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 h-12 w-12 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-slate-900 font-bold text-base">{title}</h3>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Points */}
                <div className={`ml-16 pt-4 border-t ${border}`}>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className={`${color} mt-0.5 h-3.5 w-3.5 shrink-0`} />
                        <span className="text-slate-500 text-xs leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* ── Recovery Stages Timeline ────────────────────────────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            HOW WE APPLY THEM
          </span>
          <h2 className="text-slate-900 font-bold text-2xl mb-8">Recovery Method Selection Process</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-blue-100 hidden sm:block" />

            <div className="space-y-6">
              {[
                { step: '01', title: 'Intake & Initial Assessment', desc: 'The device is registered and a non-invasive physical inspection is performed to identify visible damage, sounds, and symptoms.' },
                { step: '02', title: 'Diagnostic Evaluation', desc: 'Using specialized diagnostic tools, our engineers determine whether the failure is physical, logical, firmware, or a combination of issues.' },
                { step: '03', title: 'Method Selection', desc: 'Based on the diagnosis, our team selects the optimal recovery method(s) — clean room, firmware repair, logical recovery, or RAID reconstruction.' },
                { step: '04', title: 'Forensic Imaging', desc: 'A sector-by-sector image of the drive is created using hardware write-blockers, preserving the source media in its current state.' },
                { step: '05', title: 'Data Extraction & Reconstruction', desc: 'Recovery work is performed on the forensic image using the selected methods until all recoverable data is extracted.' },
                { step: '06', title: 'Verification & Delivery', desc: 'Recovered files are verified, catalogued, and delivered to you on a secure storage medium of your choice.' },
              ].map(({ step, title, desc }, i) => (
                <div key={i} className="sm:pl-14 relative">
                  {/* Circle */}
                  <div className="hidden sm:flex absolute left-0 top-0 h-10 w-10 rounded-full bg-[#3da3ff] text-white items-center justify-center font-black text-xs shrink-0 shadow-[0_0_0_4px_rgba(61,163,255,0.15)]">
                    {step}
                  </div>
                  <div className="border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="sm:hidden inline-flex h-6 w-6 rounded-full bg-[#3da3ff] text-white items-center justify-center font-black text-[10px]">{step}</span>
                      <h4 className="text-slate-800 font-bold text-sm">{title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* ── CTA Banner ──────────────────────────────────────────── */}
        <div className="rounded-2xl bg-gradient-to-br from-[#004b9b] to-[#0070d6] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-xl mb-1">Need Data Recovery? Let DSS Help.</h3>
            <p className="text-blue-100 text-sm">No Data, No Cost guarantee. Free diagnostic evaluation for all cases.</p>
          </div>
          <a
            href="tel:+919880872536"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#004b9b] font-extrabold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call Us Now: +91 988087 2536
          </a>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* ── FAQs ────────────────────────────────────────────────── */}
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
