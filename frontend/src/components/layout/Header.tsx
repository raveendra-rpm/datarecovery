'use client';
import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

import { publicPath } from '@/lib/site';

// ── Dropdown Data ───────────────────────────────────────────────
const whoWeAreData = [
  { title: 'About Us', desc: 'Learn about our history and commitment to data recovery.', img: '/images/headers_img/about_us.jpg', href: '/who-we-are/about-us/' },
  { title: 'Why Choose Us', desc: 'Discover why thousands trust us with their critical data.', img: '/images/headers_img/why_choose_us.jpg', href: '/who-we-are/why-choose-us/' },
  { title: 'Vision & Mission', desc: 'Our goal is to be the world leader in data recovery.', img: '/images/headers_img/vision_mission.jpg', href: '/who-we-are/vision-mission/' },
  { title: 'Quality Policy', desc: 'Strict standards to ensure the highest success rates.', img: '/images/headers_img/quality_policy.jpg', href: '/who-we-are/quality-policy/' },
  { title: 'Confidentiality', desc: 'Your data is safe with our certified security protocols.', img: '/images/headers_img/confidentiality.jpg', href: '/who-we-are/confidentiality/' },
];

const servicesData = [
  { title: 'Desktop & Laptop Recovery', desc: 'Expert recovery for all computer types.', img: '/images/headers_img/desktop_laptop.jpg', href: '/services/desktop-laptop-recovery/' },
  { title: 'SSD Data Recovery', desc: 'Fast recovery from all failed solid state drives.', img: '/images/headers_img/ssd_recovery.jpg', href: '/services/ssd-data-recovery/' },
  { title: 'Encrypted Data Recovery', desc: 'Decrypting and recovering locked files.', img: '/images/headers_img/encrypted_data.jpg', href: '/services/encrypted-data-recovery/' },
  { title: 'RAID Server Recovery', desc: 'Enterprise-level RAID and server recovery.', img: '/images/headers_img/raid_server.jpg', href: '/services/raid-server-recovery/' },
  { title: 'External Hard Drive', desc: 'Recovering data from portable drives.', img: '/images/headers_img/external_hard_drive.jpg', href: '/services/external-hard-drive/' },
  { title: 'Files Data Recovery', desc: 'Specialized recovery for all file types.', img: '/images/headers_img/files_data_recovery.jpg', href: '/services/files-data-recovery/' },
  { title: 'Flash Card Recovery', desc: 'SD cards, USB sticks, and more.', img: '/images/headers_img/flash_card_recovery.jpg', href: '/services/flash-card-recovery/' },
  { title: 'CCTV Data Recovery', desc: 'Recovering footage from security systems.', img: '/images/headers_img/cctv_data_recovery.jpg', href: '/services/cctv-data-recovery/' },
  { title: 'Tapes Data Recovery', desc: 'Legacy tape and archival recovery.', img: '/images/headers_img/tapes_data_recovery.jpg', href: '/services/tapes-data-recovery/' },
];

const dataRecoveryMethodsData = [
  { title: 'Recovery Methods', desc: 'The advanced techniques we use for recovery.', img: '/images/headers_img/recovery_methods.jpg', href: '/data-recovery/recovery-methods/' },
  { title: 'Recovery Procedure', desc: 'Step-by-step look at our recovery process.', img: '/images/headers_img/recovery_procedure.jpg', href: '/data-recovery/recovery-procedure/' },
  { title: 'Class 100 Clean Room', desc: 'Our certified dust-free environment.', img: '/images/headers_img/data_recovery_clean_room.jpg', href: '/data-recovery/class-100-clean-room/' },
];

const dssData = [
  { title: 'Pickup & Delivery', desc: 'Safe transport of your media to our lab.', img: '/images/headers_img/pickup_delivery.jpg', href: '/dss/pickup-and-delivery/' },
  { title: 'FAQs', desc: 'Answers to common data recovery questions.', img: '/images/headers_img/faqs.jpg', href: '/dss/faqs/' },
  { title: 'Clients', desc: 'Organizations that trust DSS for recovery.', img: '/images/headers_img/clients.jpg', href: '/dss/clients/' },
  { title: 'Testimonials', desc: 'What our happy customers have to say.', img: '/images/headers_img/testimonials.jpg', href: '/dss/testimonials/' },
];

// Preloading logic removed in favor of Next.js Image Optimization

const MegaMenuDropdown = memo(function MegaMenuDropdown({
  label,
  data,
  columns = 3,
  imageLeft = false,
  menuSize = 'default',
}: {
  label: string;
  data: { title: string; desc: string; img: string; href?: string }[];
  columns?: number;
  imageLeft?: boolean;
  menuSize?: 'compact' | 'default' | 'tall';
}) {
  const menuHeight = menuSize === 'tall' ? 'h-[424px]' : menuSize === 'compact' ? 'h-[204px]' : 'h-[314px]';
  const gridHeight = menuSize === 'tall' ? 'h-[370px]' : menuSize === 'compact' ? 'h-[150px]' : 'h-[260px]';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close dropdown automatically when user navigates
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className="h-full flex items-center group/menu"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-0.5 2xl:gap-1 3xl:gap-1.5 text-[11px] 2xl:text-[13px] 3xl:text-[15px] font-semibold rounded-full px-1 py-1 2xl:px-2.5 2xl:py-2 3xl:px-4 3xl:py-2.5 border border-transparent whitespace-nowrap text-[#0f172a] group-hover/menu:bg-[#e6f4ff] group-hover/menu:text-[#004b9b] transition-colors`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
        />
      </button>

      <div
        className={`absolute left-0 right-0 top-full ${menuHeight} bg-white shadow-xl border-x border-b border-gray-200 border-t-2 border-t-[#004b9b] z-50 rounded-b-lg overflow-hidden ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
      >
        {/* Header bar */}
        <div className="px-8 py-4 border-b border-gray-100 bg-gray-50">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700">
            {label.toUpperCase()}
          </p>
        </div>

        {/* Card Grid */}
        <div className={`grid ${columns === 4 ? 'grid-cols-4' : 'grid-cols-3'} auto-rows-[94px] gap-5 ${gridHeight} px-8 py-6`}>
          {data.map((item) => (
            <Link
              href={item.href || '#'}
              key={item.title}
              onClick={handleLinkClick}
              tabIndex={isOpen ? undefined : -1}
              className={`group/card border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-[border-color,box-shadow] duration-200 ${imageLeft ? 'flex flex-row' : ''}`}
            >
              <div className={`${imageLeft ? 'w-28 h-full shrink-0' : 'w-full h-32'} overflow-hidden bg-gray-100 relative`}>
                <Image
                  src={publicPath(item.img)}
                  alt={item.title}
                  fill
                  sizes={imageLeft ? '112px' : '(min-width: 768px) 33vw, 100vw'}
                  className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className={`px-4 py-3 bg-white ${imageLeft ? 'flex flex-col justify-center' : ''}`}>
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-800 group-hover/card:text-[#004b9b] transition-colors leading-snug">
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
    </div>
  );
});

// ── Simple Nav Link ────────────────────────────────────────────
const NavLink = memo(function NavLink({ label, href = '/' }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="text-[11px] 2xl:text-[13px] 3xl:text-[15px] font-semibold text-[#0f172a] rounded-full px-1 py-1 2xl:px-2.5 2xl:py-2 3xl:px-4 3xl:py-2.5 border border-transparent hover:bg-[#e6f4ff] hover:text-[#004b9b] transition-colors whitespace-nowrap"
    >
      {label}
    </Link>
  );
});

// ── Mobile Nav Accordion ──────────────────────────────────────────
const MobileNavAccordion = memo(function MobileNavAccordion({
  label,
  data,
  setIsOpen,
}: {
  label: string;
  data: { title: string; href?: string }[];
  setIsOpen: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left font-bold text-slate-800"
      >
        {label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 pl-4 space-y-3">
          {data.map((item) => (
            <Link
              key={item.title}
              href={item.href || '#'}
              prefetch={false}
              onClick={close}
              className="block text-sm text-slate-600 hover:text-[#004b9b] transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});

// ── Header ─────────────────────────────────────────────────────
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const pathname = usePathname();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  if (pathname.startsWith('/admin')) return null;

  return (
    <header className="w-full bg-white/90 sticky top-0 z-50">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,250,255,0.85))] backdrop-blur-sm border-b border-[#004b9b]/10" />
      <div className="max-w-[1366px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 2xl:px-10">
        <div className="relative flex items-center justify-between h-[70px] 2xl:h-[88px] gap-1 2xl:gap-8 w-full max-w-full">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Image
                src={publicPath('/images/data_recovery_logo.webp')}
                alt="Data Storage Solutions"
                width={210}
                height={62}
                className="h-8 2xl:h-10 3xl:h-12 w-auto object-contain"
                priority
                loading="eager"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center justify-end gap-0 2xl:gap-1.5 3xl:gap-3 h-full flex-shrink">
            <NavLink label="Home" href="/" />
            <MegaMenuDropdown label="Who We Are" data={whoWeAreData} columns={3} imageLeft />
            <MegaMenuDropdown label="Services" data={servicesData} columns={3} imageLeft menuSize="tall" />
            <NavLink label="Price and Cost" href="/price-and-cost/" />
            <MegaMenuDropdown label="Data Recovery" data={dataRecoveryMethodsData} columns={3} imageLeft menuSize="compact" />
            <MegaMenuDropdown label="DSS" data={dssData} columns={4} imageLeft menuSize="compact" />
            <div className="flex items-center gap-0 2xl:gap-1 3xl:gap-2">
              <NavLink label="Claims" href="/claims/" />
              <NavLink label="Contacts" href="/contacts/" />
              <NavLink label="Blogs" href="/blogs/" />
            </div>
            <a
              href="tel:+919880872536"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-[#e11f27] bg-[#e11f27] px-2 py-1.5 2xl:px-4 2xl:py-2.5 3xl:px-7 3xl:py-3.5 text-[11px] 2xl:text-[13px] 3xl:text-[15px] font-extrabold text-white transition-colors hover:bg-[#c91b22] whitespace-nowrap ml-1 2xl:ml-2 flex-shrink-0"
            >
              <Phone size={16} strokeWidth={2.5} />
              +91 988087 2536
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden flex items-center justify-center p-2 -mr-2 text-[#1d1d1f] hover:text-[#004b9b] transition-colors active:scale-90"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Menu size={32} strokeWidth={2.5} />
          </button>

        </div>
      </div>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col xl:hidden overflow-y-auto will-change-transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-[70px] border-b border-slate-100 shrink-0 bg-white sticky top-0 z-10">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                closeMenu();
              }
            }}
          >
            <Image
              src={publicPath('/images/data_recovery_logo.webp')}
              alt="Data Storage Solutions"
              width={160}
              height={48}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            className="p-2 -mr-2 text-[#1d1d1f] hover:text-[#e11f27] transition-colors hover:rotate-90 active:scale-90"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="px-6 py-4 flex-1">
          <Link href="/" className="block py-4 font-bold text-slate-800 border-b border-slate-100">
            Home
          </Link>
          <MobileNavAccordion label="Who We Are" data={whoWeAreData} setIsOpen={setIsMobileMenuOpen} />
          <MobileNavAccordion label="Services" data={servicesData} setIsOpen={setIsMobileMenuOpen} />
          <Link href="/price-and-cost/" className="block py-4 font-bold text-slate-800 border-b border-slate-100">
            Price and Cost
          </Link>
          <MobileNavAccordion label="Data Recovery" data={dataRecoveryMethodsData} setIsOpen={setIsMobileMenuOpen} />
          <MobileNavAccordion label="DSS" data={dssData} setIsOpen={setIsMobileMenuOpen} />
          <Link href="/claims/" className="block py-4 font-bold text-slate-800 border-b border-slate-100">
            Claims
          </Link>
          <Link href="/contacts/" className="block py-4 font-bold text-slate-800 border-b border-slate-100">
            Contacts
          </Link>
          <Link href="/blogs/" className="block py-4 font-bold text-slate-800 border-b border-slate-100">
            Blogs
          </Link>
        </div>

        {/* Mobile Call CTA */}
        <div className="px-6 pb-8 pt-4 bg-slate-50 border-t border-slate-100 shrink-0">
          <a
            href="tel:+919880872536"
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#e11f27] bg-[#e11f27] px-5 py-3.5 text-[15px] font-extrabold text-white transition-colors hover:bg-[#c91b22] hover:shadow-lg active:scale-95"
          >
            <Phone size={18} strokeWidth={2.5} />
            +91 988087 2536
          </a>
        </div>
      </div>
    </header>
  );
}
