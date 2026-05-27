import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { publicPath } from '@/lib/site';

export default function AboutSection() {
  return (
    <section className="py-20 2xl:py-28 bg-white w-full relative overflow-hidden">
      <div className="max-w-[1366px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-20 relative z-10">
        {/* Top label */}
        <div className="flex items-center justify-center gap-2 2xl:gap-3 mb-4 2xl:mb-5">
          <span className="h-px w-10 2xl:w-14 bg-[#e11f27]" />
          <span className="text-[#e11f27] font-semibold text-sm 2xl:text-base uppercase tracking-widest">
            #1 Data Recovery Services
          </span>
          <span className="h-px w-10 2xl:w-14 bg-[#e11f27]" />
        </div>

        {/* Main heading */}
        <h2 className="text-center text-[2rem] md:text-[2.6rem] 2xl:text-[3.4rem] font-bold text-[#1a1a2e] leading-tight mb-14 2xl:mb-20 max-w-3xl 2xl:max-w-5xl mx-auto">
          Get the Best{' '}
          <span className="inline-block whitespace-nowrap rounded-xl border border-[#b8dcff] bg-[#e8f4ff] px-3 py-1 text-[0.82em] text-[#004b9b]">
            Data Recovery Services
          </span>{' '}
          in Bangalore
        </h2>

        {/* Two-column layout */}
        <div className="space-y-12 2xl:space-y-16">
          {/* Left — paragraphs */}
          <div className="max-w-6xl 2xl:max-w-[1500px] mx-auto space-y-7 text-center text-[#111827] leading-[1.7] 2xl:leading-[1.75] text-[18px] 2xl:text-[24px] font-normal">
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
              To us, it doesn&apos;t matter what caused your data loss—hardware failure, software
              issues, virus infection, or anything else. We can totally help get your important
              information back. We customize our data recovery to fit each client&apos;s unique
              situation. We offer flexible timing to limit downtime and recover data faster.
            </p>
            <p>
              We&apos;re proud that we can recover data even from really tricky situations. We&apos;ve
              got a proven track record of getting back people&apos;s information from all kinds of
              devices—hard drives, SSDs, RAID systems, you name it.
            </p>
          </div>

          {/* Right — connected highlight panels */}
          <div className="relative max-w-5xl 2xl:max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 gap-5 2xl:gap-7 md:grid-cols-3">
              <div className="group relative min-h-[270px] 2xl:min-h-[360px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 2xl:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.3),transparent_46%),linear-gradient(180deg,rgba(248,250,252,0.88),rgba(255,255,255,0.98))]" />
                <div className="relative mb-8 min-h-[140px] 2xl:min-h-[190px] overflow-hidden rounded-2xl bg-white/50">
                  <Image
                    src={publicPath('/images/all_device_cover_recovery.webp')}
                    alt="All devices covered"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl 2xl:text-2xl font-semibold leading-tight text-[#111827]">
                    All Devices Covered
                  </h3>
                  <p className="mt-2 text-sm 2xl:text-base leading-relaxed text-[#64748b]">
                    Hard disks, SSDs, USB drives, RAID systems and more.
                  </p>
                </div>
              </div>

              <div className="group relative min-h-[270px] 2xl:min-h-[360px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 2xl:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.3),transparent_48%),linear-gradient(180deg,rgba(248,250,252,0.88),rgba(255,255,255,0.98))]" />
                <div className="relative mb-8 min-h-[140px] 2xl:min-h-[190px] overflow-hidden rounded-2xl bg-white/50">
                  <Image
                    src={publicPath('/images/flexible_timing_recovery.webp')}
                    alt="Flexible timing"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl 2xl:text-2xl font-semibold leading-tight text-[#111827]">
                    Flexible Timing
                  </h3>
                  <p className="mt-2 text-sm 2xl:text-base leading-relaxed text-[#64748b]">
                    Recovery support scheduled around your downtime.
                  </p>
                </div>
              </div>

              <div className="group relative min-h-[270px] 2xl:min-h-[360px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 2xl:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.26),transparent_48%),linear-gradient(180deg,rgba(248,250,252,0.88),rgba(255,255,255,0.98))]" />
                <div className="relative mb-8 min-h-[140px] 2xl:min-h-[190px] overflow-hidden rounded-2xl bg-white/50">
                  <Image
                    src={publicPath('/images/safe_confidential_recovery.webp')}
                    alt="Safe and confidential"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl 2xl:text-2xl font-semibold leading-tight text-[#111827]">
                    Safe & Confidential
                  </h3>
                  <p className="mt-2 text-sm 2xl:text-base leading-relaxed text-[#64748b]">
                    Protected data and retrieval through secure handling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <a
              href="#"
              className="group inline-flex items-center gap-3 bg-[#004B9B] hover:bg-[#003d82] text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 shadow-[0_8px_24px_rgba(0,75,155,0.3)] hover:shadow-[0_12px_32px_rgba(0,75,155,0.45)] hover:-translate-y-0.5"
            >
              Learn More About Us
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
