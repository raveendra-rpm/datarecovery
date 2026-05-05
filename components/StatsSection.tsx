import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function StatsSection() {
  return (
    <section className="w-full bg-[#0a0a1f] py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] p-10 relative overflow-hidden group shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />
            
            <h3 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mb-4 tracking-tighter">
              23,000+
            </h3>
            <h4 className="text-white text-2xl font-bold mb-5 tracking-tight">Complete Projects</h4>
            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
              Unmatched expertise in delivering successful recoveries for businesses and individuals worldwide. Our track record speaks for itself.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] p-10 relative overflow-hidden group shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors" />
            
            <h3 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] mb-4 tracking-tighter">
              22,000+
            </h3>
            <h4 className="text-white text-2xl font-bold mb-5 tracking-tight">Happy Customers</h4>
            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
              Join thousands of satisfied clients who trusted us with their most critical data. We guarantee a 100% professional experience.
            </p>
          </div>
        </div>

        {/* Bottom Content Card */}
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 hover:border-white/10 transition-colors duration-500 group">
          
          <div className="max-w-4xl z-10">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
              ))}
              <span className="text-white/80 text-sm font-bold ml-2">4.8+ Industry Rating</span>
            </div>
            
            <p className="text-gray-300 text-lg md:text-[22px] leading-relaxed font-medium mb-10 italic">
              "DSS has built a name as the most reliable company in the data recovery business. Our facilities and specialized technicians are certified to handle the most complex recovery scenarios with absolute safety and confidentiality."
            </p>
            
            <a href="#" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider group-hover:bg-[#4facfe] group-hover:text-white group-hover:border-[#4facfe] transition-all duration-300">
              <span>View Case Studies</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Decorative Star Element */}
          <div className="hidden md:flex w-48 h-48 rounded-full bg-gradient-to-br from-[#1b439c]/20 to-[#0a0a1f] items-center justify-center shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-700">
            <Star size={80} fill="#4facfe" className="text-[#4facfe] drop-shadow-[0_0_15px_rgba(79,172,254,0.5)]" />
          </div>
        </div>

      </div>
    </section>
  );
}
