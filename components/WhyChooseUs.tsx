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
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#004b9b]/30" />
            <span className="text-[#004b9b] text-xs font-extrabold tracking-[0.25em] uppercase">
              {'// EXPERT SOLUTIONS'}
            </span>
            <span className="h-px w-10 bg-[#004b9b]/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight tracking-tight">
            Why Trust DSS for Your <br className="hidden md:block" /> Data Recovery Needs?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
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
    </section>
  );
}
