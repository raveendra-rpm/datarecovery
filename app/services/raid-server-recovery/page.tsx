'use client';

import PageHeader from '@/components/PageHeader';
import {
  Server, ShieldAlert, CheckCircle, Star, AlertTriangle, Layers, Database, Cpu, HardDrive
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

export default function RaidServerRecovery() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="RAID Server Data Recovery"
        backgroundImage="/images/services/raid_recovery_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SERVICES' },
          { label: 'RAID SERVER RECOVERY' },
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

        {/* About RAID Recovery */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 block w-fit">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse inline-block" />
            RAID SERVER DATA RECOVERY
          </span>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-bold text-[#3da3ff]">Data Storage Solutions</span> provides RAID data recovery for all RAID configurations. We can recover from all RAID configurations including RAID 0, RAID 1, RAID 5, RAID 6, RAID 10, RAID 50 and RAID 60.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              A great advantage of having a RAID array is that you can lose a drive without losing any data. However, any hardware that relies on mechanical parts is subject to fail at some point. When this happens you need a proven RAID data recovery expert to retrieve your valuable data.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              When you need data recovery for your RAID server, you must rely on a professional Data Recovery Company like DSS. We have a team of RAID experts. We have the required technology, tools and clean room facility to perform data recovery on a damaged Server.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              RAID arrays are widely used in enterprise server environments due to the speed and redundancy they provide. The term RAID stands for <span className="font-semibold text-slate-800">Redundant Array of Independent Disks</span>. They can be created either with hardware or software. We provide RAID data recovery services from both software and hardware RAID arrays.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* What is RAID? */}
        <div>
          <SectionHeading icon={Server} title="What is RAID?" iconBg="bg-indigo-50" iconColor="text-indigo-600" />
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              RAID stands for Redundant Array of Independent Disks (or sometimes Redundant Array of Inexpensive Disks). The basic idea is that a set of multiple disks is connected together in a single logical unit. It is broadly used to provide fault tolerance (reliability), capacity, and performance. RAID is commonly used in enterprise server environments because of the benefits.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Both RAID 0 and RAID 1 are commonly used. Performance is increased due to the disks being read/written in parallel instead of serially. Fault tolerance is increased typically by using mirror copies or parity bits which means a drive can fail but the array is still intact.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              The exact method used to achieve these goals is dependent upon the specific RAID architecture. The array is managed by a hardware RAID controller or by software RAID array manager. We provide data recovery for all RAID levels and architectures.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Types of RAID: Software vs Hardware */}
        <div>
          <SectionHeading icon={Layers} title="Types of RAID" iconBg="bg-blue-50" iconColor="text-blue-600" />

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Software RAID */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-[#3da3ff]" />
                Software RAID
              </h3>
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>Software RAID is generally implemented via the Operating System.</p>
                <p>In this setup, a software application manages the RAID array instead of a dedicated RAID controller card (Hardware).</p>
                <p>Software RAID is generally cheaper than Hardware RAID but requires more host system resources to operate. RAID 0, 1, 5, 10 are common Software RAID levels. A software RAID is typically used when you need a RAID but do not have the budget or are unable to add a hardware RAID card.</p>
                <p>Data loss from a software RAID array happens frequently. Software RAIDs rely on the host system to operate. The host system has an OS, RAM, motherboard, CPU etc. If any of these fail it can cause the Software RAID to become inaccessible. The most common cause of data loss on a software RAID is corruption of the OS. When the OS fails the RAID may be lost.</p>
                <p>The recommended method to recover from a software RAID failure is to create a clone of the drives and then attempt to rebuild the array. If the drives are healthy, this may be all that is needed.</p>
                <p>Data loss in software RAID array is recovered by DSS expert engineers. The failures are evaluated and best method is used to recover your data securely.</p>
              </div>
            </div>

            {/* Hardware RAID */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-violet-600" />
                Hardware RAID
              </h3>
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>Hardware RAID refers to using a dedicated Hardware Controller Card to manage the Array.</p>
                <p>A Hardware RAID has a dedicated processor to manage the raid array operations.</p>
                <p>Hardware RAID controllers provide fault tolerance, improved performance, and easier management. They are more complex and costly compared to Software RAID, but offer better reliability and performance.</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-slate-800 font-bold text-sm mb-3">Advantages of Hardware RAID:</h4>
                <ul className="space-y-2">
                  {[
                    'Performance is significantly improved.',
                    'OS independent so host system resources are not used.',
                    'Can have battery backup to protect data if power is lost.',
                    'Support Hot Swapping.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-violet-500 mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-slate-600 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* RAID Failure */}
        <div>
          <SectionHeading icon={AlertTriangle} title="RAID Failure Causes" iconBg="bg-red-50" iconColor="text-red-600" />
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                'Disk crash', 'Power surges', 'Natural disasters',
                'System malfunctions', 'Virus attack', 'Fire and Water',
                'Malfunction of controller', 'Wiring or cables configuration', 'Sabotage/Terrorism',
                'Physical damage', 'Wrong configuration', 'Operator or user error'
              ].map((cause, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ShieldAlert className="text-red-500 h-4 w-4 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{cause}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Data loss in a RAID system is a complex issue and requires a specific and professional approach. A single mistake could cause permanent data loss. When you experience data loss in a RAID array, it is best to power down the server and contact a professional Data Recovery Company like DSS. We analyze the RAID configuration, identify the missing drives, read the data directly off the drives, and construct the array virtually before extracting the files to another secure location.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Configurations, Levels, Drives */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">RAID Array Configurations</h3>
            <p className="text-slate-500 text-xs mb-3">DSS is an expert in all Disk based Hardware and Software RAID Array Configurations, like:</p>
            <div className="flex flex-wrap gap-2">
              {['RAID 0', 'RAID 1', 'RAID 10', 'RAID 1E', 'RAID 3', 'RAID 4', 'RAID 5', 'RAID 5E', 'RAID 6', 'RAID 50', 'RAID 60', 'RAID ADG', 'RAID 0+1', 'JBOD', 'SPAN'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">RAID Drive Types</h3>
            <ul className="space-y-2">
              {[
                'SATA/PATA (IDE) / ATA / ZIF / LIF',
                'SAS / SCSI / FC',
                'SSD / Flash / Micro SATA / mSATA',
                'M.2 (SATA & NVMe) / PCIe',
                'CFast / CF / SD / Micro SD / Memory'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HardDrive className="text-[#3da3ff] mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* RAID Levels Explained */}
        <div>
          <SectionHeading icon={Server} title="RAID Levels Explained" iconBg="bg-sky-50" iconColor="text-sky-600" />
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              { level: 'RAID 0', name: 'Striped volume', desc: 'Distributes data across multiple drives but provides no fault tolerance. If one drive fails, all data is lost.' },
              { level: 'RAID 1', name: 'Mirrored volume', desc: 'Creates an exact copy (or mirror) of a set of data on two or more drives. Provides fault tolerance but no performance gain.' },
              { level: 'RAID 5', name: 'Striped with distributed parity', desc: 'Distributes data and parity across three or more drives. It provides fault tolerance and performance.' },
              { level: 'RAID 6', name: 'Striped with dual distributed parity', desc: 'Similar to RAID 5 but includes a second parity scheme distributed across drives. Withstands the failure of two drives.' },
              { level: 'RAID 10', name: 'Mirrored and Striped', desc: 'A combination of RAID 1 and RAID 0. Provides high performance and high fault tolerance but requires minimum of four drives.' },
              { level: 'RAID 50', name: 'Striped and Parity', desc: 'A combination of RAID 5 and RAID 0. Provides high performance and fault tolerance, suitable for databases.' },
              { level: 'RAID 60', name: 'Striped and Dual Parity', desc: 'A combination of RAID 6 and RAID 0. Provides high performance and dual fault tolerance.' },
              { level: 'RAID ADG', name: 'Advanced Data Guarding', desc: 'A proprietary RAID level from HP that provides high fault tolerance, allowing up to two drive failures without data loss.' },
            ].map(({ level, name, desc }, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 hover:shadow-sm transition-all">
                <h4 className="text-sky-600 font-bold text-sm mb-1">{level} <span className="text-slate-400 font-medium">({name})</span></h4>
                <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100" />

        {/* Storage Media & Manufacturers */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">Storage Media Types</h3>
            <ul className="space-y-3">
              {[
                'Desktop/Laptop Hard Drives',
                'NAS (Network Attached Storage)',
                'SAN (Storage Area Network)',
                'Server Hard Drives (Web/File/Database etc.)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Database className="text-emerald-500 mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">RAID ARRAY Manufacturers</h3>
            <div className="flex flex-wrap gap-2">
              {['Lenovo', 'NetApp', 'HP', 'EMC', 'Dell/Wyse', 'Hitachi Data Systems', 'IBM', 'Netgear', 'LaCie/Seagate', 'Synology', 'Qnap', 'Buffalo', 'Drobo', 'Promise', 'Apple'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
