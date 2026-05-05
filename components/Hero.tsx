"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { publicPath } from '@/lib/site';

const heroImages = [
  publicPath("/images/hero_banner/hero_banner_one.jpg"),
  publicPath("/images/hero_banner/hero_banner_two.jpg"),
  publicPath("/images/hero_banner/hero_banner_three.jpg"),
  publicPath("/images/hero_banner/hero_banner_four.jpg"),
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#59008c] min-h-screen">
      {/* Background Gradient & Dot Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(135deg, #7c00af 0%, #2e005f 100%)
          `,
          backgroundSize: '16px 16px, 100% 100%',
        }}
      />



      <div className="max-w-7xl 2xl:max-w-[1760px] 2xl:min-h-[calc(100vh-88px)] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20 relative z-10 pt-24 2xl:pt-0 pb-32 2xl:pb-20 flex flex-col lg:flex-row items-center gap-10 2xl:gap-24">

        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 2xl:max-w-[820px] text-white">
          <div className="text-[#d1b3ff] text-xs 2xl:text-sm font-bold tracking-wider uppercase mb-2 2xl:mb-3">
            DATA STORAGE SOLUTIONS
          </div>

          <h1 className="text-3xl md:text-4xl 2xl:text-[68px] font-bold mb-4 2xl:mb-6 leading-tight">
            Best Data Recovery Services in Bangalore
          </h1>

          <p className="text-sm md:text-base 2xl:text-xl mb-4 2xl:mb-6 leading-relaxed text-gray-100 max-w-2xl 2xl:max-w-[780px]">
            Experience the best <span className="text-[#d1b3ff]">data recovery services</span> in Bangalore at Data Storage Solutions. We provide fast and reliable data recovery from hard disk drives, SSDs, desktop computers, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 2xl:gap-4 mb-5 2xl:mb-6">
            <a href="tel:+919880872536" className="flex items-center justify-center gap-2 bg-[#ff1a1a] text-white px-6 2xl:px-8 py-3 2xl:py-4 text-sm 2xl:text-base font-semibold hover:bg-red-700 transition-colors">
              <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 988087 2536
            </a>
            <a href="#" className="flex items-center justify-center gap-2 border border-white text-white px-6 2xl:px-8 py-3 2xl:py-4 text-sm 2xl:text-base font-semibold hover:bg-white hover:text-black transition-colors">
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
              <span className="font-bold text-lg 2xl:text-2xl whitespace-nowrap"><span className="text-[#e31837]">23000</span><span className="text-[#2b5a8c]"> +</span></span>
              <span className="text-slate-500 text-xs sm:text-sm 2xl:text-base whitespace-nowrap">Happy Customer.</span>
            </div>
            <div className="w-px h-10 2xl:h-12 bg-slate-200 hidden md:block"></div>

            <div className="flex flex-col">
              <span className="font-bold text-lg 2xl:text-2xl whitespace-nowrap"><span className="text-[#e31837]">20+ Years</span></span>
              <span className="text-slate-500 text-xs sm:text-sm 2xl:text-base whitespace-nowrap">of experience.</span>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center space-x-3 2xl:space-x-4">
            <button onClick={handlePrev} className="text-white hover:text-gray-300 transition-colors">
              <ChevronLeft size={20} />
            </button>
            {heroImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 2xl:w-3 2xl:h-3 rounded-full bg-white cursor-pointer transition-opacity ${currentImageIndex === index ? 'opacity-100' : 'opacity-50'
                  }`}
              ></div>
            ))}
            <button onClick={handleNext} className="text-white hover:text-gray-300 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
          <div className="relative w-full max-w-lg 2xl:max-w-[880px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/10">
            {heroImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                priority={index === 0}
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
