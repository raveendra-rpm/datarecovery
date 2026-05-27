"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, HardDrive, Server, ShieldCheck, FileSearch, Laptop, Archive, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { publicPath } from '@/lib/site';

const services = [
  {
    title: 'Data Recovery from desktop & Laptop',
    subtitle: 'All Brands Supported',
    badge: 'Free Pickup',
    desc: 'Supporting all major brands and operating systems. We handle everything from liquid damage to hardware failure.',
    icon: Laptop,
    img: '/images/laptop_desktop_recovery.jpg',
    tag: 'Starting ₹1,499',
  },
  {
    title: 'SSD Recovery',
    subtitle: 'Flash Storage Expert',
    badge: 'Most Popular',
    desc: "Solid State Drives use flash memory for storage. We specialize in recovering data from failed controllers and physical memory chips.",
    icon: Cpu,
    img: '/images/ssd_img.jpg',
    tag: 'Starting ₹2,999',
  },
  {
    title: 'External HDD Recovery',
    subtitle: 'Physical & Logical Failure',
    badge: 'High Success Rate',
    desc: 'Accidental drops or spills? We recover external drives from any physical or logical failure scenario with high success rates.',
    icon: HardDrive,
    img: '/images/hdd_recovery_img.jpg',
    tag: 'Starting ₹1,999',
  },
  {
    title: 'RAID Server Recovery',
    subtitle: 'Enterprise Grade',
    badge: 'Best Seller',
    desc: 'Our experts handle complex RAID configurations (0, 1, 5, 6, 10) and enterprise servers to minimize your business downtime.',
    icon: Server,
    img: '/images/raid_server.jpg',
    tag: 'Custom Quote',
  },
  {
    title: 'Encrypted Recovery',
    subtitle: 'BitLocker & FileVault',
    badge: 'Secure',
    desc: 'Bypass complex encryption challenges. We have unparalleled experience with BitLocker, FileVault, and custom encryption.',
    icon: ShieldCheck,
    img: '/images/encrypted_img.jpg',
    tag: 'Starting ₹3,999',
  },
  {
    title: 'File & Email Recovery',
    subtitle: 'Forensic Precision',
    badge: 'Fast Turnaround',
    desc: 'Recover corrupted databases, deleted emails, and damaged document files with our specialized forensic tools.',
    icon: FileSearch,
    img: '/images/file_mail_img.jpg',
    tag: 'Starting ₹999',
  },
  {
    title: 'Tape Data Recovery',
    subtitle: 'Legacy Format Specialist',
    badge: 'Rare Expertise',
    desc: 'Expertise in legacy tape formats (LTO, DLT). We can read and recover data from degraded or aged magnetic media.',
    icon: Archive,
    img: '/images/tape_data.jpg',
    tag: 'Custom Quote',
  },
  {
    title: 'CCTV & Surveillance',
    subtitle: 'DVR / NVR Systems',
    badge: 'Legal Evidence',
    desc: 'Recover critical footage from DVR/NVR systems. Essential for legal evidence and security audits.',
    icon: ShieldAlert,
    img: '/images/cctv_recovery_img.jpg',
    tag: 'Starting ₹2,499',
  },
  {
    title: 'NAS Data Recovery',
    subtitle: 'Network Attached Storage',
    badge: 'Specialized',
    desc: 'Expert recovery for multi-drive NAS enclosures, handling RAID configurations, corrupted volumes, and firmware issues.',
    icon: Server,
    img: '/images/nas_data.jpg',
    tag: 'Custom Quote',
  },
];

// memo: component has no props and pure static data — skip re-render if parent re-renders
const ServicesGrid = memo(function ServicesGrid() {
  return (
    <div className="pt-24 pb-24 text-white relative z-10 overflow-hidden">
      <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#4facfe]" />
            <span className="text-[#4facfe] text-xs font-bold tracking-[0.25em] uppercase">
              {'// WHAT WE DO'}
            </span>
            <span className="h-px w-10 bg-[#4facfe]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Comprehensive <span className="text-[#4facfe]">Data Recovery</span> Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            State-of-the-art repair and recovery services for all types of storage media in Bangalore.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-[28px] overflow-hidden border border-white/80 p-2.5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ boxShadow: '0 18px 42px rgba(2, 8, 23, 0.22), inset 0 1px 0 rgba(255,255,255,0.9)' }}
            >
              {/* Image Area */}
              <div className="relative h-52 w-full overflow-hidden rounded-[22px] shrink-0 bg-[#eef3f6]">
                <Image
                  src={publicPath(service.img)}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Top-left Badge — like "Best Seller" in Nike card */}
                <div className="absolute top-3 left-3 bg-white/95 text-[#0f172a] text-[10px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                  {service.badge}
                </div>

                {/* Top-right Icon Badge — like Nike logo */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <service.icon size={16} className="text-[#004b9b]" />
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 px-3 pt-4 pb-2 gap-1">
                <div className="flex min-h-[24px] items-center gap-2">
                  <h3 className="text-base font-extrabold leading-snug text-slate-950 opacity-100 group-hover:text-slate-950" style={{ color: '#0f172a' }}>
                    {service.title}
                  </h3>
                  <CheckCircle2 size={16} className="text-[#28c75d] fill-[#28c75d]/15 shrink-0" />
                </div>

                {/* Subtitle — like "Own the Court" */}
                <p className="text-[#64748b] text-xs font-semibold mb-1">{service.subtitle}</p>

                {/* Description */}
                <p className="text-[#64748b] text-xs leading-relaxed line-clamp-3 flex-1">
                  {service.desc}
                </p>

                {/* Bottom row — Price pill + CTA button */}
                <div className="flex items-center justify-between mt-5 gap-3">
                  {/* Price Pill — like "$156" */}
                  <div className="flex items-center gap-1.5 text-[#4facfe] text-xs font-extrabold whitespace-nowrap">
                    <span className="w-7 h-7 rounded-full bg-[#eaf6ff] flex items-center justify-center">
                      <service.icon size={13} className="text-[#4facfe]" />
                    </span>
                    {service.tag}
                  </div>

                  {/* CTA Button — dark pill like "Buy Now" */}
                  <Link
                    href="#"
                    className="flex items-center gap-1.5 bg-[#f8fafc] hover:bg-[#004b9b] text-[#0f172a] hover:text-white text-xs font-extrabold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm whitespace-nowrap"
                  >
                    Get Quote
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
});

export default ServicesGrid;
