'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'lucide-react';
import { publicPath } from '@/lib/site';

// ── Dropdown Data with Images ───────────────────────────────────────

const whoWeAreData = [
  { title: 'About Us', desc: 'Learn about our history and commitment to data recovery.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80' },
  { title: 'Why Choose Us', desc: 'Discover why thousands trust us with their critical data.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
  { title: 'Vision & Mission', desc: 'Our goal is to be the world leader in data recovery.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
  { title: 'Quality Policy', desc: 'Strict standards to ensure the highest success rates.', img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=400&q=80' },
  { title: 'Confidentiality', desc: 'Your data is safe with our certified security protocols.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80' },
];

const servicesData = [
  { title: 'Desktop & Laptop Recovery', desc: 'Expert recovery for all computer types.', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
  { title: 'SSD Data Recovery', desc: 'Fast recovery from all failed solid state drives.', img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80' },
  { title: 'Encrypted Data Recovery', desc: 'Decrypting and recovering locked files.', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80' },
  { title: 'RAID Server Recovery', desc: 'Enterprise-level RAID and server recovery.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80' },
  { title: 'External Hard Drive', desc: 'Recovering data from portable drives.', img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&q=80' },
  { title: 'Files Data Recovery', desc: 'Specialized recovery for all file types.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&q=80' },
  { title: 'Flash Card Recovery', desc: 'SD cards, USB sticks, and more.', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&q=80' },
  { title: 'CCTV Data Recovery', desc: 'Recovering footage from security systems.', img: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?w=400&q=80' },
  { title: 'Tapes Data Recovery', desc: 'Legacy tape and archival recovery.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80' },
];

const dataRecoveryMethodsData = [
  { title: 'Recovery Methods', desc: 'The advanced techniques we use for recovery.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { title: 'Recovery Procedure', desc: 'Step-by-step look at our recovery process.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80' },
  { title: 'Class 100 Clean Room', desc: 'Our certified dust-free environment.', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&q=80' },
];

const dssData = [
  { title: 'Pickup & Delivery', desc: 'Safe transport of your media to our lab.', img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&q=80' },
  { title: 'FAQs', desc: 'Answers to common data recovery questions.', img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&q=80' },
  { title: 'Clients', desc: 'Organizations that trust DSS for recovery.', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80' },
  { title: 'Testimonials', desc: 'What our happy customers have to say.', img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80' },
];

// ── Mega Menu Dropdown ───────────────────────────────────────────
function MegaMenuDropdown({
  label,
  data,
  columns = 3,
  imageLeft = false,
}: {
  label: string;
  data: { title: string; desc: string; img: string }[];
  columns?: number;
  imageLeft?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<any>(null);

  const handleEnter = () => { clearTimeout(timer.current); setOpen(true); };
  const handleLeave = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 2xl:gap-1.5 text-sm 2xl:text-[15px] font-semibold transition-all pb-1 border-b-2 border-transparent hover:border-[#004b9b] hover:text-[#004b9b] ${open ? 'border-[#004b9b] text-[#004b9b]' : 'text-gray-700'
          }`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="fixed left-4 right-4 bg-white shadow-2xl border border-gray-200 z-50 rounded-lg overflow-hidden"
          style={{ top: '71px' }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* Header bar */}
          <div className="px-8 py-4 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-700">
              {label.toUpperCase()}
            </p>
          </div>

          {/* Card Grid */}
          <div className={`grid ${columns === 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-5 px-8 py-6`}>
            {data.map((item, i) => (
              <Link
                href="#"
                key={i}
                className={`group border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all ${imageLeft ? 'flex flex-row' : ''}`}
              >
                <div className={`${imageLeft ? 'w-28 shrink-0' : 'w-full h-32'} overflow-hidden bg-gray-100 relative`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`px-4 py-3 bg-white ${imageLeft ? 'flex flex-col justify-center' : ''}`}>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-gray-800 group-hover:text-[#004b9b] transition-colors leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Simple Nav Link ────────────────────────────────────────────
function NavLink({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="text-sm 2xl:text-[15px] font-semibold text-gray-700 pb-1 border-b-2 border-transparent hover:border-[#004b9b] hover:text-[#004b9b] transition-all"
    >
      {label}
    </Link>
  );
}

// ── Header ─────────────────────────────────────────────────────
export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1366px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 2xl:px-10">
        <div className="flex items-center justify-between h-[70px] 2xl:h-[88px] gap-8 2xl:gap-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={publicPath('/images/data_recovery_logo.webp')}
                alt="Data Storage Solutions"
                width={210}
                height={62}
                className="h-8 2xl:h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-end gap-7 2xl:gap-12">
            <NavLink label="Home" />
            <MegaMenuDropdown label="Who We Are" data={whoWeAreData} columns={3} imageLeft />
            <MegaMenuDropdown label="Services" data={servicesData} columns={3} imageLeft />
            <NavLink label="Price and Cost" />
            <MegaMenuDropdown label="Data Recovery" data={dataRecoveryMethodsData} columns={3} imageLeft />
            <MegaMenuDropdown label="DSS" data={dssData} columns={4} imageLeft />
            <NavLink label="Claims" />
            <NavLink label="Contacts" />
            <a
              href="tel:+919880872536"
              className="inline-flex items-center justify-center gap-2 bg-[#ff1a1a] px-5 2xl:px-7 py-3 2xl:py-3.5 text-xs 2xl:text-[15px] font-extrabold text-white shadow-[0_8px_18px_rgba(255,26,26,0.25)] transition-colors hover:bg-[#d91414] whitespace-nowrap"
            >
              <Phone size={16} strokeWidth={2.5} />
              +91 988087 2536
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
