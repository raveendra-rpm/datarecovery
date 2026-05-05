"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  "/images/hero_banner/hero_banner_one.jpg",
  "/images/hero_banner/hero_banner_two.jpg",
  "/images/hero_banner/hero_banner_three.jpg",
  "/images/hero_banner/hero_banner_four.jpg",
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



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 flex flex-col lg:flex-row items-center">

        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-white">
          <div className="text-[#d1b3ff] text-xs font-bold tracking-wider uppercase mb-2">
            DATA STORAGE SOLUTIONS
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best Data Recovery Services in Bangalore
          </h1>

          <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-100 max-w-2xl">
            Experience the best <span className="text-[#d1b3ff]">data recovery services</span> in Bangalore at Data Storage Solutions. We provide fast and reliable data recovery from hard disk drives, SSDs, desktop computers, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a href="tel:+919880872536" className="flex items-center justify-center gap-2 bg-[#ff1a1a] text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 988087 2536
            </a>
            <a href="#" className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 bg-white p-3 md:px-5 md:py-3 rounded-xl shadow-lg mb-5 w-fit">
            <div className="flex flex-col">
              <span className="font-bold text-lg whitespace-nowrap"><span className="text-[#e31837]">4.9</span><span className="text-[#2b5a8c]">+</span></span>
              <span className="text-slate-500 text-xs sm:text-sm whitespace-nowrap">Google Reviews</span>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>

            <div className="flex flex-col">
              <span className="font-bold text-lg whitespace-nowrap"><span className="text-[#e31837]">23000</span><span className="text-[#2b5a8c]"> +</span></span>
              <span className="text-slate-500 text-xs sm:text-sm whitespace-nowrap">Happy Customer.</span>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>

            <div className="flex flex-col">
              <span className="font-bold text-lg whitespace-nowrap"><span className="text-[#e31837]">20+ Years</span></span>
              <span className="text-slate-500 text-xs sm:text-sm whitespace-nowrap">of experience.</span>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center space-x-3">
            <button onClick={handlePrev} className="text-white hover:text-gray-300 transition-colors">
              <ChevronLeft size={20} />
            </button>
            {heroImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full bg-white cursor-pointer transition-opacity ${currentImageIndex === index ? 'opacity-100' : 'opacity-50'
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
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/10">
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[70px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
