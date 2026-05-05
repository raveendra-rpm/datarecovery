"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, HardDrive, Server, ShieldCheck, FileSearch, Laptop, Archive, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'SSD Recovery',
    subtitle: 'Flash Storage Expert',
    badge: 'Most Popular',
    desc: "Solid State Drives use flash memory for storage. We specialize in recovering data from failed controllers and physical memory chips.",
    icon: Cpu,
    img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80',
    tag: 'Starting ₹2,999',
  },
  {
    title: 'External HDD Recovery',
    subtitle: 'Physical & Logical Failure',
    badge: 'High Success Rate',
    desc: 'Accidental drops or spills? We recover external drives from any physical or logical failure scenario with high success rates.',
    icon: HardDrive,
    img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80',
    tag: 'Starting ₹1,999',
  },
  {
    title: 'RAID Server Recovery',
    subtitle: 'Enterprise Grade',
    badge: 'Best Seller',
    desc: 'Our experts handle complex RAID configurations (0, 1, 5, 6, 10) and enterprise servers to minimize your business downtime.',
    icon: Server,
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tag: 'Custom Quote',
  },
  {
    title: 'Encrypted Recovery',
    subtitle: 'BitLocker & FileVault',
    badge: 'Secure',
    desc: 'Bypass complex encryption challenges. We have unparalleled experience with BitLocker, FileVault, and custom encryption.',
    icon: ShieldCheck,
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    tag: 'Starting ₹3,999',
  },
  {
    title: 'File & Email Recovery',
    subtitle: 'Forensic Precision',
    badge: 'Fast Turnaround',
    desc: 'Recover corrupted databases, deleted emails, and damaged document files with our specialized forensic tools.',
    icon: FileSearch,
    img: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&q=80',
    tag: 'Starting ₹999',
  },
  {
    title: 'Laptop Data Recovery',
    subtitle: 'All Brands Supported',
    badge: 'Free Pickup',
    desc: 'Supporting all major brands and operating systems. We handle everything from liquid damage to hardware failure.',
    icon: Laptop,
    img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80',
    tag: 'Starting ₹1,499',
  },
  {
    title: 'Tape Data Recovery',
    subtitle: 'Legacy Format Specialist',
    badge: 'Rare Expertise',
    desc: 'Expertise in legacy tape formats (LTO, DLT). We can read and recover data from degraded or aged magnetic media.',
    icon: Archive,
    img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800&q=80',
    tag: 'Custom Quote',
  },
  {
    title: 'CCTV & Surveillance',
    subtitle: 'DVR / NVR Systems',
    badge: 'Legal Evidence',
    desc: 'Recover critical footage from DVR/NVR systems. Essential for legal evidence and security audits.',
    icon: ShieldAlert,
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    tag: 'Starting ₹2,499',
  },
];

export default function ServicesGrid() {
  return (
    <div className="py-24 bg-[#0a0a1f] text-white relative z-10">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#4facfe]/50" />
            <span className="text-[#4facfe] text-xs font-bold tracking-[0.25em] uppercase">
              WHAT WE DO
            </span>
            <span className="h-px w-10 bg-[#4facfe]/50" />
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
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[28px] overflow-hidden border border-white/80 p-2.5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ boxShadow: '0 18px 42px rgba(2, 8, 23, 0.22), inset 0 1px 0 rgba(255,255,255,0.9)' }}
            >
              {/* Image Area */}
              <div className="relative h-52 w-full overflow-hidden rounded-[22px] shrink-0 bg-[#eef3f6]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
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
                  <div className="flex items-center gap-1.5 text-[#334155] text-xs font-extrabold whitespace-nowrap">
                    <span className="w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center">
                      <service.icon size={13} className="text-[#004b9b]" />
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
}
