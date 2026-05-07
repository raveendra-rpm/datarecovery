import React from 'react';
import { Banknote, Settings, BrainCircuit, Zap, ShieldCheck, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Banknote,
    title: 'Reasonable Price / Cost',
    desc: 'Transparent pricing with no hidden fees. We provide the best Data Recovery Services at the most competitive rates.',
  },
  {
    icon: Settings,
    title: 'Quality Service',
    desc: 'DSS never compromises on quality. Our clean-room environments and expert staff ensure the highest recovery standards.',
  },
  {
    icon: BrainCircuit,
    title: '20+ Years Experience',
    desc: 'With nearly two decades of expertise, we have handled every possible data loss scenario for thousands of clients.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    desc: 'Time is critical. We offer emergency data recovery services to get your business back online as quickly as possible.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Confidential',
    desc: 'Your privacy is our priority. We maintain strict non-disclosure policies and military-grade data security protocols.',
  },
  {
    icon: Wrench,
    title: 'Advanced Lab Tools',
    desc: 'Equipped with cutting-edge hardware tools and proprietary software to recover data from even the most damaged media.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white pt-24 pb-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="pointer-events-none absolute right-8 top-10 z-0 hidden w-[180px] opacity-[0.08] mix-blend-multiply md:block 2xl:right-20 2xl:top-14 2xl:w-[250px]">
        <svg viewBox="0 0 180 240" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="174" height="234" rx="8" fill="#8f8caf" stroke="#4d4a70" strokeWidth="5" />
          <circle cx="20" cy="20" r="7" fill="#4f4b72" />
          <circle cx="160" cy="20" r="7" fill="#4f4b72" />
          <circle cx="20" cy="220" r="7" fill="#4f4b72" />
          <circle cx="160" cy="220" r="7" fill="#4f4b72" />
          <circle cx="90" cy="94" r="70" fill="#f8f7ff" stroke="#4a4968" strokeWidth="8" />
          <path d="M22 86C42 92 59 99 78 107C65 74 55 45 50 24C34 36 24 57 22 86Z" fill="#e6e3ff" />
          <path d="M101 26C141 35 165 73 157 114C150 145 126 167 97 173C108 139 111 89 101 26Z" fill="#e6e3ff" />
          <circle cx="90" cy="94" r="35" fill="#b8b3dc" />
          <circle cx="90" cy="94" r="16" fill="#5e5a83" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <circle
              key={angle}
              cx={90 + Math.cos((angle * Math.PI) / 180) * 20}
              cy={94 + Math.sin((angle * Math.PI) / 180) * 20}
              r="5"
              fill="#625d86"
            />
          ))}
          <path d="M125 129L80 182" stroke="#625d86" strokeWidth="15" strokeLinecap="round" />
          <path d="M128 127L95 151" stroke="#f8f7ff" strokeWidth="9" strokeLinecap="round" />
          <path d="M38 154L68 184L52 210H28L15 191L23 167L38 154Z" fill="#f0efff" stroke="#4a4968" strokeWidth="8" />
          <circle cx="66" cy="184" r="12" fill="#8f8caf" stroke="#4a4968" strokeWidth="7" />
          <path d="M115 192L144 173H170V216L151 233H115V192Z" fill="#f79216" stroke="#4a4968" strokeWidth="7" />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-[260px] overflow-hidden md:block">
        <svg
          className="absolute left-1/2 bottom-[-42px] h-[280px] w-[1180px] -translate-x-1/2"
          viewBox="0 0 1180 280"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="expert-bottom-line" x1="590" y1="62" x2="590" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4facfe" stopOpacity="0.56" />
              <stop offset="0.48" stopColor="#1d7cff" stopOpacity="0.24" />
              <stop offset="1" stopColor="#4facfe" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="expert-bottom-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(590 70) rotate(90) scale(170 420)">
              <stop stopColor="#bfdbfe" stopOpacity="0.95" />
              <stop offset="0.46" stopColor="#dff1ff" stopOpacity="0.68" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="590" cy="118" rx="420" ry="135" fill="url(#expert-bottom-glow)" />

          {[-380, -320, -260, -200, -145, -92, -42, 42, 92, 145, 200, 260, 320, 380].map((endX) => (
            <path
              key={endX}
              d={`M 590 70 C ${590 + endX * 0.18} ${endX < 0 ? 112 : 28}, ${590 + endX * 0.62} 118, ${590 + endX} 280`}
              stroke="url(#expert-bottom-line)"
              strokeWidth="1.15"
            />
          ))}

          {[-110, -74, -38, 38, 74, 110].map((loopX) => (
            <path
              key={loopX}
              d={`M 590 70 C ${590 + loopX} -18, ${590 + loopX * 1.28} 92, 590 70`}
              stroke="url(#expert-bottom-line)"
              strokeWidth="1"
            />
          ))}

          <path d="M 590 70 C 570 16, 570 16, 590 70 C 610 16, 610 16, 590 70" stroke="url(#expert-bottom-line)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-[1366px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 2xl:w-12 bg-[#e11f27]" />
            <span className="text-[#e11f27] font-semibold text-sm 2xl:text-base uppercase tracking-widest">
              {'// EXPERT SOLUTIONS'}
            </span>
            <span className="h-px w-8 2xl:w-12 bg-[#e11f27]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight tracking-tight">
            Why Trust DSS for Your <br className="hidden md:block" /> Data Recovery Needs?
          </h2>
        </div>

        {/* Grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-[#004b9b]/25 transition-all duration-500 hover:-translate-y-2 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_26px_65px_rgba(0,75,155,0.14)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#4facfe]/0 rounded-full blur-3xl pointer-events-none transition-colors duration-500 group-hover:bg-[#4facfe]/20" />

                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center mb-6 border border-[#004b9b]/10 group-hover:bg-[#004b9b] transition-all duration-500 group-hover:scale-110 shadow-inner">
                  <Icon size={32} className="text-[#004b9b] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="relative z-10 text-[#0f172a] text-xl font-bold mb-4 group-hover:text-[#004b9b] transition-colors">
                  {reason.title}
                </h3>
                <p className="relative z-10 text-[#64748b] text-base leading-relaxed transition-colors">
                  {reason.desc}
                </p>

                {/* Decorative glow inside card */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#004b9b]/5 rounded-full blur-2xl group-hover:bg-[#004b9b]/10 transition-all duration-500" />
              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
