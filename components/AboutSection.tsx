import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const highlights = [
  {
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    title: 'All Devices Covered',
    desc: 'Hard disks, SSDs, USB drives, RAID systems & more.',
  },
  {
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80',
    title: 'Safe & Confidential',
    desc: 'Your data is handled with strict confidentiality.',
  },
  {
    img: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=400&q=80',
    title: 'Flexible Timing',
    desc: 'We work around your schedule to limit downtime.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#fafafa] w-full relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-100 opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Top label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-10 bg-[#ff1a1a]" />
          <span className="text-[#ff1a1a] font-semibold text-sm uppercase tracking-widest">
            #1 Data Recovery Services
          </span>
          <span className="h-px w-10 bg-[#ff1a1a]" />
        </div>

        {/* Main heading */}
        <h2 className="text-center text-[2rem] md:text-[2.6rem] font-bold text-[#1a1a2e] leading-tight mb-14 max-w-3xl mx-auto">
          Get the Best{' '}
          <span className="text-[#004b9b]">Data Recovery Services</span>{' '}
          in Bangalore
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — paragraphs */}
          <div className="space-y-5 text-[#4b5563] leading-[1.85] text-[15.5px] text-justify">
            <p>
              Data Storage Solutions bring hope to businesses and individuals that lose their
              data either intentionally or because of some mishap, hardware malfunction, or
              hacking attack. These services guarantee that any lost, corrupted, or
              inaccessible data can be recovered from gadgets including hard disks, SSDs, USB
              drives, and servers. That is why professional data recovery services are so
              valuable, as they do not only manage to recover the necessary data but also do it
              without compromising its quality and therefore they prevent businesses from
              incurring important time and energy losses.
            </p>
            <p>
              To us, it doesn't matter what caused your data loss—hardware failure, software
              issues, virus infection, or anything else. We can totally help get your important
              information back. We customize our data recovery to fit each client's unique
              situation. We offer flexible timing to limit downtime and recover data faster.
            </p>
            <p>
              We're proud that we can recover data even from really tricky situations. We've
              got a proven track record of getting back people's information from all kinds of
              devices—hard drives, SSDs, RAID systems, you name it.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#004b9b] text-white px-7 py-3 font-semibold text-sm hover:bg-blue-800 transition-colors rounded-sm group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right — highlight cards (Asymmetric Grid) */}
          <div className="grid grid-cols-2 gap-4 h-full">

            {/* Big Card - spans 2 columns */}
            <div className="col-span-2 sm:col-span-2 rounded-[24px] p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1 group">
              {/* Full Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Storage Devices"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70"></div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-lg tracking-tight">
                  All Devices Covered
                </h3>
              </div>
              <p className="text-gray-100 text-base sm:text-lg relative z-10 max-w-[80%] mt-8 leading-relaxed font-medium drop-shadow-md">
                Hard disks, SSDs, USB drives, RAID systems & more.
              </p>
            </div>

            {/* Small Card 1 */}
            <div className="col-span-2 sm:col-span-1 rounded-[24px] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1 group">
              {/* Full Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80"
                alt="Security Lock"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70"></div>
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight relative z-10 drop-shadow-lg tracking-tight">
                Safe & Confidential
              </h3>
              <p className="text-gray-100 text-sm sm:text-base mt-6 leading-relaxed relative z-10 drop-shadow-md font-medium">
                Your data is handled with strict confidentiality.
              </p>
            </div>

            {/* Small Card 2 */}
            <div className="col-span-2 sm:col-span-1 rounded-[24px] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-transform hover:-translate-y-1 group">
              {/* Full Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80"
                alt="Clock Timing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70"></div>
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight relative z-10 drop-shadow-lg tracking-tight">
                Flexible Timing
              </h3>
              <p className="text-gray-100 text-sm sm:text-base mt-6 leading-relaxed relative z-10 drop-shadow-md font-medium">
                We work around your schedule to limit downtime.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
