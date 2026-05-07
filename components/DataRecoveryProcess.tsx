"use client";

import React, { CSSProperties, useRef, useCallback, MouseEvent } from 'react';
import { ArrowRight, Car, ZoomIn, FileText, Database, MonitorCheck, CircleDollarSign, Package } from 'lucide-react';
import ServicesGrid from './ServicesGrid';

const steps = [
  { num: '01', label: 'Media Pickup', icon: Car, position: 'bottom' },
  { num: '02', label: 'Media Analysis', icon: ZoomIn, position: 'top' },
  { num: '03', label: 'Analysis Report', icon: FileText, position: 'bottom' },
  { num: '04', label: 'Data Recovery', icon: Database, position: 'top' },
  { num: '05', label: 'Data Verification', icon: MonitorCheck, position: 'bottom' },
  { num: '06', label: 'Payment Process', icon: CircleDollarSign, position: 'top' },
  { num: '07', label: 'Data Delivery', icon: Package, position: 'bottom' },
];

export default function DataRecoveryProcess() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

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

  return (
    <section className="w-full bg-[#0a0a1f] relative pt-0 pb-0 overflow-hidden group" onMouseMove={handleMouseMove}>
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)'
        } as CSSProperties}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] z-0"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 2.5px, transparent 2.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at top left, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top left, black 10%, transparent 70%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 2.5px, transparent 2.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at bottom right, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at bottom right, black 10%, transparent 70%)'
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700 opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700 opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Timeline Container */}
      <div className="w-full relative z-10">
        <div className="relative w-full overflow-hidden flex flex-col justify-start pt-14 md:pt-20 xl:pt-16 2xl:pt-8">

          <div className="w-full max-w-[1366px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

            {/* Header */}
            <div className="text-center mb-16 xl:mb-20 2xl:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#4facfe]" />
                <span className="text-[#4facfe] text-xs font-bold tracking-[0.25em] uppercase">
                  {'// DATA RECOVERY SERVICES'}
                </span>
                <span className="h-px w-10 bg-[#4facfe]" />
              </div>
              <h2 className="text-white text-[2rem] md:text-[2.6rem] 2xl:text-[3.4rem] font-bold leading-tight">
                Our <span className="text-[#4facfe]">Data Recovery</span> Process
              </h2>
              <p className="text-gray-400 text-sm 2xl:text-base mt-3 2xl:mt-4 max-w-xl 2xl:max-w-3xl mx-auto leading-relaxed">
                A transparent, step-by-step approach to getting your critical data back safely and efficiently.
              </p>
            </div>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden xl:block w-full">
              <div className="max-w-[1100px] 2xl:max-w-[1520px] mx-auto">
                <div className="relative h-[280px] 2xl:h-[270px] ml-[60px] mr-[250px] 2xl:ml-[70px] 2xl:mr-[220px]">
                  
                  {/* SVG Connecting Line */}
                  <svg 
                    className="absolute inset-0 w-full h-full overflow-visible pointer-events-none opacity-80" 
                    preserveAspectRatio="none" 
                    viewBox="0 0 600 100"
                  >
                    <defs>
                      <linearGradient id="lineGradientBase" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4facfe" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.15" />
                      </linearGradient>
                      <linearGradient id="lineGradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f2fe" />
                        <stop offset="50%" stopColor="#4facfe" />
                        <stop offset="100%" stopColor="#00f2fe" />
                      </linearGradient>
                    </defs>

                    {/* Base Dim Line */}
                    <path 
                      d="M 0 80 C 50 80, 50 20, 100 20 C 150 20, 150 80, 200 80 C 250 80, 250 20, 300 20 C 350 20, 350 80, 400 80 C 450 80, 450 20, 500 20 C 550 20, 550 80, 600 80" 
                      fill="none" 
                      stroke="url(#lineGradientBase)" 
                      strokeWidth="2.5" 
                      vectorEffect="non-scaling-stroke" 
                    />

                    {/* Animated Bright Line */}
                    <path 
                      d="M 0 80 C 50 80, 50 20, 100 20 C 150 20, 150 80, 200 80 C 250 80, 250 20, 300 20 C 350 20, 350 80, 400 80 C 450 80, 450 20, 500 20 C 550 20, 550 80, 600 80" 
                      fill="none" 
                      stroke="url(#lineGradientFill)" 
                      strokeWidth="2.5" 
                      vectorEffect="non-scaling-stroke" 
                      className="drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"
                    />
                  </svg>

                  {/* Timeline Steps */}
                  {steps.map((step, index) => {
                    const leftPercent = (index / (steps.length - 1)) * 100;
                    
                    return (
                      <div 
                        key={step.num}
                        className="absolute flex items-center -translate-x-[28px] 2xl:-translate-x-[34px] -translate-y-1/2 group transition-all duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 opacity-100 scale-100 grayscale-0"
                        style={{ 
                          left: `${leftPercent}%`, 
                          top: step.position === 'top' ? '20%' : '80%',
                          zIndex: 20
                        }}
                      >
                        <div className="relative z-10 flex items-center bg-gradient-to-r from-[#11235a]/90 to-[#1b439c]/90 backdrop-blur-sm rounded-full p-1.5 2xl:p-2 pr-6 2xl:pr-8 shadow-[0_0_20px_rgba(27,67,156,0.5)] border border-[#4facfe]/40 transition-colors duration-500 group-hover:border-[#4facfe]/40">
                          <div className="flex flex-col items-center justify-center w-14 h-14 2xl:w-16 2xl:h-16 rounded-full text-white shrink-0 z-20 transition-all duration-500 group-hover:bg-gradient-to-tr group-hover:from-[#00f2fe] group-hover:to-[#4facfe] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] shadow-[0_0_20px_rgba(0,242,254,0.6)]">
                            <span className="text-[8px] 2xl:text-[9px] uppercase tracking-wider font-bold opacity-90 leading-none mb-0.5">Step</span>
                            <span className="text-[17px] 2xl:text-[20px] font-extrabold leading-none">{step.num}</span>
                          </div>
                          <div className="flex items-center gap-2.5 2xl:gap-3 ml-4 2xl:ml-5">
                            <span className="text-white text-sm 2xl:text-base font-semibold whitespace-nowrap">{step.label}</span>
                            <step.icon size={20} className="transition-colors duration-500 group-hover:text-[#00f2fe] text-[#00f2fe]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Vertical Timeline */}
            <div className="xl:hidden w-full max-w-lg mx-auto px-2 relative">
              <div className="absolute left-[36px] sm:left-[42px] top-4 bottom-4 w-1 bg-[#4facfe]/10 z-0 rounded-full"></div>
              
              <div 
                className="absolute left-[36px] sm:left-[42px] top-4 w-1 bg-gradient-to-b from-[#00f2fe] to-[#4facfe] shadow-[0_0_10px_rgba(0,242,254,0.6)] z-0 rounded-full"
                style={{ height: 'calc(100% - 2rem)' }}
              ></div>

              <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                {steps.map((step, index) => {
                  return (
                    <div key={step.num} className="flex items-center gap-4 w-full group transition-all duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 opacity-100 scale-100 grayscale-0">
                      <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shrink-0 z-20 transition-all duration-500 group-hover:bg-gradient-to-tr group-hover:from-[#00f2fe] group-hover:to-[#4facfe] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] shadow-[0_0_20px_rgba(0,242,254,0.6)]">
                        <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold opacity-90 leading-none mb-0.5">Step</span>
                        <span className="text-lg sm:text-xl font-extrabold leading-none">{step.num}</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-[#11235a]/90 to-[#1b439c]/90 backdrop-blur-sm rounded-2xl sm:rounded-full p-4 sm:px-6 shadow-[0_0_15px_rgba(27,67,156,0.5)] border border-[#4facfe]/40 flex items-center justify-between transition-all duration-500 group-hover:border-[#4facfe]/40">
                        <span className="text-white text-sm sm:text-base font-semibold">{step.label}</span>
                        <step.icon size={22} className="shrink-0 transition-colors duration-500 group-hover:text-[#00f2fe] text-[#00f2fe]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 xl:mt-4 flex justify-center relative z-20">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-white px-8 py-3 text-sm font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all rounded-full group"
              >
                Start Your Recovery Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded Services Grid */}
      <div className="relative z-20">
        <ServicesGrid />
      </div>

    </section>
  );
}
