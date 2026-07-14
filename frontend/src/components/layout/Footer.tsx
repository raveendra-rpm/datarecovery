"use client";

import React, { CSSProperties, MouseEvent, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight, Clock, Phone, Mail } from 'lucide-react';
import { publicPath } from '@/lib/site';

export default function Footer() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (rafRef.current !== null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rafRef.current = requestAnimationFrame(() => {
      glowRef.current?.style.setProperty('--glow-x', `${x}px`);
      glowRef.current?.style.setProperty('--glow-y', `${y}px`);
      rafRef.current = null;
    });
  }, []);

  if (pathname.startsWith('/admin')) return null;

  return (
    <footer
      className="relative w-full bg-[#030303] text-white overflow-hidden font-sans border-t border-white/5 group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Mouse Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(720px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(227, 24, 55, 0.16), transparent 78%)'
        } as CSSProperties}
      />
      
      {/* Decorative Red Glow on the left, matching the image */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#8a1015]/20 rounded-full blur-[150px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <Link href="/">
                <Image 
                  src={publicPath('/images/data_recovery_logo.webp')} 
                  alt="Data Storage Solutions" 
                  width={180} 
                  height={60} 
                  className="h-11 w-auto object-contain" 
                />
              </Link>
            </div>
            
            <p className="text-gray-300 text-[15px] font-medium mb-4">
              Find us on social media
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="text-white hover:text-[#FF1A1A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF1A1A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF1A1A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF1A1A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 text-[14px]">
                <Clock size={18} className="text-[#FF1A1A]" />
                <span>Mon - Sat, 10:30 am – 7:30 pm</span>
              </div>
              <a href="tel:+919880872536" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px]">
                <Phone size={18} className="text-[#FF1A1A]" />
                <span>+91 9880872536</span>
              </a>
              <a href="mailto:helpdesk@datastoragesolutions.in" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px]">
                <Mail size={18} className="text-[#FF1A1A]" />
                <span>helpdesk@datastoragesolutions.in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:pl-10">
            <h4 className="text-[22px] font-bold mb-8 uppercase tracking-wide">Our Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/who-we-are/about-us' },
                { label: 'Why Choose DSS', href: '/who-we-are/why-choose-us' },
                { label: 'Our Clients', href: '/dss/clients' },
                { label: 'Our Testimonials', href: '/dss/testimonials' },
                { label: 'Vision & Mission', href: '/who-we-are/vision-mission' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center text-gray-300 hover:text-white transition-colors text-[15px]">
                    <ChevronRight size={14} className="text-[#FF1A1A] mr-2 flex-shrink-0" strokeWidth={3} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col lg:pl-4">
            <h4 className="text-[22px] font-bold mb-8 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Pickup & Delivery', href: '/dss/pickup-and-delivery' },
                { label: 'Price & Cost', href: '/price-and-cost' },
                { label: 'Google Reviews', href: '#' },
                { label: 'Blog & News', href: '/blogs' },
                { label: 'Sitemap', href: '#' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center text-gray-300 hover:text-white transition-colors text-[15px]">
                    <ChevronRight size={14} className="text-[#FF1A1A] mr-2 flex-shrink-0" strokeWidth={3} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="flex flex-col">
            <h4 className="text-[22px] font-bold mb-8 uppercase tracking-wide">More Info.</h4>
            <ul className="space-y-4">
              {[
                'Data Recovery Services', 
                'What is Data Recovery?', 
                'Encrypted Data Recovery', 
                'Class 100 Clean Room Method', 
                'Data Recovery Methods'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center text-gray-300 hover:text-white transition-colors text-[15px]">
                    <ChevronRight size={14} className="text-[#FF1A1A] mr-2 flex-shrink-0" strokeWidth={3} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#000000] border-t border-white/5 py-5">
        <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 text-center text-gray-400 text-[15px]">
          Copyright &copy; 2024 Data Storage Solutions by{' '}
          <a
            href="https://sarthaktech.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FF1A1A] transition-colors"
          >
            Sarthak Tech
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
