import React, { memo } from 'react';
import Image from 'next/image';
import { publicPath } from '@/lib/site';

const logos = [
  { name: 'Agilent Technologies', src: publicPath('/images/partner_companies/agilent_technologies_logo.webp'), className: 'h-10 sm:h-12' },
  { name: 'Airtel', src: publicPath('/images/partner_companies/airtel-logo.webp'), className: 'h-10 sm:h-12' },
  { name: 'Bharat Petroleum', src: publicPath('/images/partner_companies/bharat-petroleum_logo.webp'), className: 'h-10 sm:h-12' },
  { name: 'Blue Star', src: publicPath('/images/partner_companies/blue-star-logo.webp'), className: 'h-8 sm:h-10' },
  { name: 'BSNL', src: publicPath('/images/partner_companies/bsnl_logo.webp'), className: 'h-10 sm:h-12' },
  { name: 'Columbia Asia', src: publicPath('/images/partner_companies/columbia_asia_logo.webp'), className: 'h-8 sm:h-10' },
  { name: 'ITC Limited', src: publicPath('/images/partner_companies/itc_limited_logo.webp'), className: 'h-10 sm:h-12' },
  { name: 'Kennametal', src: publicPath('/images/partner_companies/kennametal_logo.webp'), className: 'h-8 sm:h-10' },
  { name: 'SKF', src: publicPath('/images/partner_companies/skf_logo.webp'), className: 'h-10 sm:h-12' },
];

// Duplicated at module level — stable reference, not recreated on render
const allLogos = [
  ...logos.map((l) => ({ ...l, key: l.name })),
  ...logos.map((l) => ({ ...l, key: `${l.name}-dup` })),
];

// memo: no props, pure static marquee — never needs to re-render
const LogoMarquee = memo(function LogoMarquee() {

  return (
    <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl 3xl:max-w-[1760px] mx-auto px-4 mb-8">
        <h2 className="text-center text-gray-400 text-sm font-extrabold uppercase tracking-widest">
          Trusted by 100+ Companies Globally
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center space-x-12 sm:space-x-20 px-4">
          {allLogos.map((logo) => (
            <div key={logo.key} className="flex-shrink-0 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                loading="lazy"
                className={`${logo.className} w-auto max-w-[220px] object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default LogoMarquee;
