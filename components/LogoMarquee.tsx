import React from 'react';
import Image from 'next/image';

const logos = [
  { name: 'Agilent Technologies', src: '/images/partner_companies/agilent_technologies_logo.png' },
  { name: 'Airtel', src: '/images/partner_companies/airtel-logo.png' },
  { name: 'Bharat Petroleum', src: '/images/partner_companies/bharat-petroleum_logo.png' },
  { name: 'Blue Star', src: '/images/partner_companies/blue-star-logo.png' },
  { name: 'BSNL', src: '/images/partner_companies/bsnl_logo.png' },
  { name: 'Columbia Asia', src: '/images/partner_companies/columbia_asia_logo.png' },
  { name: 'ITC Limited', src: '/images/partner_companies/itc_limited_logo.png' },
  { name: 'Kennametal', src: '/images/partner_companies/kennametal_logo.png' },
  { name: 'SKF', src: '/images/partner_companies/skf_logo.webp' },
];

export default function LogoMarquee() {
  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest">
          Trusted by 100+ Companies Globally
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center space-x-12 sm:space-x-20 px-4">
          {allLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
