"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { publicPath } from '@/lib/site';

const heroImages = [
  publicPath("/images/hero_banner/hero_banner_one.webp"),
  publicPath("/images/hero_banner/hero_banner_two.webp"),
  publicPath("/images/hero_banner/hero_banner_three.webp"),
  publicPath("/images/hero_banner/hero_banner_four.webp"),
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Keep interval ref so it doesn't restart on every render
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-screen">
      {/* Background Gradient & Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(56, 189, 248, 0.28) 0%, rgba(0, 75, 155, 0.12) 30%, transparent 60%),
            radial-gradient(circle at 18% 20%, rgba(0, 75, 155, 0.10) 0%, transparent 32%),
            radial-gradient(circle at 82% 22%, rgba(56, 189, 248, 0.13) 0%, transparent 30%),
            linear-gradient(rgba(0, 75, 155, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 75, 155, 0.055) 1px, transparent 1px),
            linear-gradient(180deg, #ffffff 0%, #f3faff 52%, #ffffff 100%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 88px 88px, 88px 88px, 100% 100%',
        }}
      />
      <div className="absolute inset-x-[14%] top-0 h-[54%] z-0 border-x border-b border-[#004b9b]/10 opacity-80" />
      <div className="absolute left-1/2 bottom-[-22%] z-0 h-[420px] w-[900px] -translate-x-1/2 rounded-[50%] border-t-4 border-[#38bdf8]/45 blur-[1px] opacity-70" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(255,255,255,0.82)_100%)]" />



      <div className="max-w-7xl 2xl:max-w-[1760px] 2xl:min-h-[calc(100vh-88px)] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20 relative z-10 pt-24 2xl:pt-10 pb-32 2xl:pb-20 flex flex-col-reverse lg:flex-row items-center gap-10 2xl:gap-24">

        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 2xl:max-w-[820px] text-[#0f172a] mt-10 lg:mt-0">
          <div className="text-[#004b9b] text-xs 2xl:text-sm font-bold tracking-wider uppercase mb-2 2xl:mb-3">
            DATA STORAGE SOLUTIONS
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px] font-bold mb-4 2xl:mb-6 leading-tight">
            Best <span className="text-[#38bdf8]">Data Recovery Services</span> in Bangalore
          </h1>

          <p className="text-sm md:text-base 2xl:text-xl mb-4 2xl:mb-6 leading-relaxed text-slate-700 max-w-2xl 2xl:max-w-[780px]">
            Experience the best <span className="text-[#004b9b]">data recovery services</span> in Bangalore at Data Storage Solutions. We provide fast and reliable data recovery from hard disk drives, SSDs, desktop computers, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 2xl:gap-4 mb-5 2xl:mb-6">
            <a href="tel:+919880872536" className="flex items-center justify-center gap-2 bg-[#e11f27] text-white px-6 2xl:px-8 py-3 2xl:py-4 text-sm 2xl:text-base font-semibold hover:bg-[#c91b22] transition-colors">
              <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 988087 2536
            </a>
            <a href="#" className="flex items-center justify-center gap-2 border border-[#004b9b] text-[#004b9b] px-6 2xl:px-8 py-3 2xl:py-4 text-sm 2xl:text-base font-semibold hover:bg-[#004b9b] hover:text-white transition-colors">
              <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 2xl:gap-10 bg-white p-3 md:px-5 md:py-3 2xl:px-7 2xl:py-4 rounded-xl shadow-lg mb-5 2xl:mb-6 w-fit">
            <div className="flex flex-col">
              <span className="font-bold text-lg 2xl:text-2xl whitespace-nowrap"><span className="text-[#e31837]">4.9</span><span className="text-[#2b5a8c]">+</span></span>
              <span className="text-slate-500 text-xs sm:text-sm 2xl:text-base whitespace-nowrap">Google Reviews</span>
            </div>
            <div className="w-px h-10 2xl:h-12 bg-slate-200 hidden sm:block"></div>

            <div className="flex flex-col">
              <span className="font-bold text-lg 2xl:text-2xl whitespace-nowrap"><span className="text-[#e31837]">25000</span><span className="text-[#2b5a8c]">+</span></span>
              <span className="text-slate-500 text-xs sm:text-sm 2xl:text-base whitespace-nowrap">Happy Customer.</span>
            </div>
            <div className="w-px h-10 2xl:h-12 bg-slate-200 hidden md:block"></div>

            <div className="flex flex-col">
              <span className="font-bold text-lg 2xl:text-2xl whitespace-nowrap"><span className="text-[#e31837]">22+ Years</span></span>
              <span className="text-slate-500 text-xs sm:text-sm 2xl:text-base whitespace-nowrap">of experience.</span>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center space-x-3 2xl:space-x-4">
            <button onClick={handlePrev} className="text-[#004b9b] hover:text-[#38bdf8] transition-colors">
              <ChevronLeft size={20} />
            </button>
            {heroImages.map((src, index) => (
              <div
                key={src}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 2xl:w-3 2xl:h-3 rounded-full bg-[#004b9b] cursor-pointer transition-opacity ${currentImageIndex === index ? 'opacity-100' : 'opacity-35'
                  }`}
              ></div>
            ))}
            <button onClick={handleNext} className="text-[#004b9b] hover:text-[#38bdf8] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div className="relative w-full max-w-lg 2xl:max-w-[880px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/10">
            {heroImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                sizes="(min-width: 1536px) 880px, (min-width: 1024px) 50vw, 100vw"
                className={`object-cover transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Shape Divider */}
      <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-[0] z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[70px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
