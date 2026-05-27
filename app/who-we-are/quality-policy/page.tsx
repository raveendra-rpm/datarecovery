import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Star, ClipboardCheck, Lightbulb, Users, TrendingUp, Heart, Zap, ShieldCheck } from 'lucide-react';

const values = [
  { icon: ClipboardCheck, label: 'Quality', desc: 'Highest standards in every recovery job we undertake.' },
  { icon: Star, label: 'Value', desc: 'Cost-effective solutions without compromising results.' },
  { icon: Heart, label: 'Convenience', desc: 'Pickup & delivery services at your doorstep.' },
  { icon: ShieldCheck, label: 'Commitment', desc: 'We stand by our No Data, No Cost promise.' },
  { icon: TrendingUp, label: 'Excellence', desc: 'Class 100 Clean Room with 99% success rate.' },
  { icon: Zap, label: 'Continual Improvement', desc: 'Always evolving with the latest recovery tech.' },
  { icon: Users, label: 'Teamwork', desc: '20+ years of expert collaboration & dedication.' },
  { icon: Lightbulb, label: 'Innovation', desc: 'Cutting-edge tools for even the toughest recoveries.' },
  { icon: CheckCircle2, label: 'Customer-Centric', desc: 'Your satisfaction is the only metric that matters.' },
];

const reviews = [
  { platform: 'Google', rating: '4.8', color: 'text-[#4285F4]', bg: 'bg-blue-50', border: 'border-blue-100' },
  { platform: 'Facebook', rating: '4.7', color: 'text-[#1877F2]', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { platform: 'Justdial', rating: '4.5', color: 'text-[#3da3ff]', bg: 'bg-sky-50', border: 'border-sky-100' },
  { platform: 'Sulekha', rating: '4.7', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
];

export default function QualityPolicy() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <PageHeader
        title="Quality Policy"
        backgroundImage="/images/who_we_are/quality_policy_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'QUALITY POLICY' }]}
      />

      {/* Intro Section */}
      <section className="bg-white py-20 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[160px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[130px] opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse"></span>
              OUR COMMITMENT
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-slate-900 leading-tight mb-6">
              Quality <span className="text-[#3da3ff]">Policy</span>
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
              <p>
                It is our commitment to provide all our customers with the <span className="text-slate-800 font-semibold">best and most reliable Data Recovery Solution services</span>. We are confident to achieve Customer Satisfaction through not just excellence in service but through continual improvement in our quality processes.
              </p>
              <p>
                We promise to show our level of commitment and excellence to all our customers, not just in words, but completely in spirit and action.
              </p>
              <p>
                Our Quality Policy guides all of us — the management and employees alike — giving us the right direction in our journey of excellence. In DSS, <span className="text-[#3b82f6] font-semibold">everyone has adopted a service-oriented mindset</span>.
              </p>
              <p>
                We believe that we can only exist better when we serve our customers to their satisfaction.
              </p>
            </div>
          </div>

          {/* Right — Reviews Dashboard */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.07)] p-8">
            <div className="text-center mb-8">
              <p className="text-[#3da3ff] font-black italic text-3xl tracking-wide">DSS</p>
              <p className="text-slate-500 text-xs tracking-widest font-semibold uppercase mt-1">Data Storage Solutions</p>
              <div className="mt-3 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-2">Rated by thousands of customers</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {reviews.map(({ platform, rating, color, bg, border }) => (
                <div key={platform} className={`${bg} ${border} border rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow`}>
                  <p className={`${color} font-black text-lg mb-2`}>{platform}</p>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs">Rating <span className="font-black text-amber-500 text-sm ml-1">{rating}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-28 overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3da3ff] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#3da3ff] rounded-full animate-pulse"></span>
              WHAT GUIDES US
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat text-slate-900 leading-tight">
              Our Core <span className="text-[#3da3ff]">Values</span>
            </h3>
            <div className="mt-5 w-16 h-1 bg-[#3da3ff] rounded-full mx-auto"></div>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, label, desc }, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#3da3ff]/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(61,163,255,0.15)] transition-all duration-300 cursor-default"
              >
                {/* Large watermark number */}
                <span className="absolute top-4 right-5 text-[72px] font-black text-slate-50 select-none leading-none pointer-events-none group-hover:text-[#3da3ff]/10 transition-colors duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="p-7 relative z-10">
                  {/* Icon badge */}
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#3da3ff] group-hover:border-[#3da3ff] group-hover:shadow-[0_0_15px_rgba(61,163,255,0.4)] transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#3da3ff] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-[#3da3ff] transition-colors duration-300">{label}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">{desc}</p>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#3da3ff] to-blue-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

