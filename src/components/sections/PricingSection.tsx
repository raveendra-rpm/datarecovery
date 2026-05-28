"use client";

import React, { CSSProperties, MouseEvent, useRef, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    category: "LOGICAL RECOVERY",
    level: "Level - 1",
    time: "1 to 2Day",
    price: "Rs 2,000/-",
    suffix: "to 3,000/-",
    depends: "Depends on Conditions",
    features: [
      "DELETED DATA",
      "FORMATTED DATA",
      "PARTITION CORRUPTED/LOST",
      "SECTORS OVERWRITTEN"
    ],
    theme: {
      cardBg: "bg-[#f4fbff]",
      featureBg: "bg-[#eaf8ee]",
      buttonBg: "bg-[#1d1d1f] text-white",
      buttonHover: "hover:bg-[#333]"
    }
  },
  {
    category: "HARDWARE RECOVERY",
    level: "Level - 2",
    time: "2 to 4Days",
    price: "Rs 3,000/-",
    suffix: "& Above",
    depends: "Depends on Conditions",
    features: [
      "CRC ERRORS",
      "BAD SECTORS",
      "PCB ISSUES",
      "FIRMWARE ISSUES"
    ],
    theme: {
      cardBg: "bg-white",
      featureBg: "bg-[#fcffe0]",
      buttonBg: "bg-[#1d1d1f] text-white",
      buttonHover: "hover:bg-[#333]"
    }
  },
  {
    category: "PHYSICAL RECOVERY",
    level: "Level - 3",
    time: "6 to 12Days",
    price: "Rs 7,000/-",
    suffix: "& Above",
    depends: "Depends on Conditions",
    features: [
      "MOTOR ISSUES",
      "CLICKING NOISE",
      "BEEPING NOISE",
      "GRINDING NOISE"
    ],
    theme: {
      cardBg: "bg-[#fff2f9]",
      featureBg: "bg-[#ffeef2]",
      buttonBg: "bg-[#1d1d1f] text-white",
      buttonHover: "hover:bg-[#333]"
    }
  },
  {
    category: "RAID & SERVER",
    level: "Server Recovery", // Filled the missing label to match design flow
    time: "4 to 15Days",
    price: "Rs 10,000/-",
    suffix: "& Above",
    depends: "Depends on Conditions",
    features: [
      "ARRAY CORRUPTED",
      "DRIVES FAILURES",
      "LOGICAL ERRORS",
      "RAID CONTROLLER"
    ],
    theme: {
      cardBg: "bg-[#f5f5fc]",
      featureBg: "bg-[#ebf1ff]",
      buttonBg: "bg-[#1d1d1f] text-white",
      buttonHover: "hover:bg-[#333]"
    }
  }
];

export default function PricingSection() {
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
    <section 
      className="w-full bg-[#1a1a24] py-24 relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Mouse Glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59, 154, 225, 0.15), transparent 80%)'
        } as CSSProperties}
      />
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-3 text-[#4facfe] font-semibold text-sm 2xl:text-base uppercase tracking-widest mb-4 2xl:mb-5">
            <span className="h-px w-8 2xl:w-12 bg-[#4facfe]" />
            {'// AFFORDABLE'}
            <span className="h-px w-8 2xl:w-12 bg-[#4facfe]" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Plan and Pricing
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.category}
              className={`${plan.theme.cardBg} rounded-[32px] p-8 flex flex-col shadow-xl transition-transform duration-300 hover:-translate-y-1 relative`}
            >
              
              {/* Top Text & Title */}
              <div className="min-h-[110px] flex flex-col justify-start">
                <h3 className="text-[#1d1d1f] text-xl xl:text-2xl font-bold tracking-tight mb-2 leading-tight">
                  {plan.category}
                </h3>
                <p className="text-[#86868b] text-[15px] font-medium">
                  {plan.level}
                </p>
              </div>
              
              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl lg:text-[2.8rem] font-medium tracking-tighter text-[#1d1d1f]">
                  {plan.price}
                </span>
              </div>
              <p className="text-[#86868b] text-[14px] font-medium -mt-5 mb-8">
                {plan.suffix}
              </p>

              {/* Features Block (Colored Soft Box) */}
              <div className={`${plan.theme.featureBg} rounded-[20px] p-6 mb-8`}>
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#34c759] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[#1d1d1f] text-[14px] font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description / Time */}
              <div className="mb-8">
                <p className="text-[#1d1d1f] text-[14px] font-medium mb-1">
                  Time Duration: {plan.time}
                </p>
                {plan.depends && (
                  <p className="text-[#86868b] text-[13px]">
                    ({plan.depends})
                  </p>
                )}
              </div>

              {/* Action Button */}
              <button 
                className={`mt-auto w-full py-[18px] rounded-[24px] font-medium text-[16px] transition-colors duration-300 ${plan.theme.buttonBg} ${plan.theme.buttonHover}`}
              >
                View More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
