import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Vision & Mission | Data Storage Solutions',
  description: 'Our vision is to be the leading data recovery solutions provider. Our mission is to exceed client expectations with reliable, secure and cost-effective recovery.',
  alternates: { canonical: '/who-we-are/vision-mission' },
  openGraph: {
    title: 'Vision & Mission | Data Storage Solutions',
    description: 'Our vision is to be the leading data recovery solutions provider, delivering reliable, secure and cost-effective recovery.',
    url: '/who-we-are/vision-mission',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision & Mission | Data Storage Solutions',
    description: 'Our vision is to be the leading data recovery solutions provider, delivering reliable, secure and cost-effective recovery.',
  },
};

export default function VisionMission() {
  const missionPoints = [
    'To exceed the expectations of each client by delivering comprehensive set of outstanding solutions with increased flexibility, greater value of excellent quality, service and dedication through motivated & trained staff.',
    'To give unique & creative solutions that meet client\'s business needs and expectations.',
    'To stay updated with the latest technology providing reliable, secure, quick and cost-effective data recovery.',
    'To provide specialized data management solutions to everyone across the globe.',
    'To be most professional, safe and ethical Data Recovery Solutions Provider.',
  ];

  const visionPoints = [
    'To be the Leading Data Recovery Solutions Provider, meeting the needs of the Computing Technology world over.',
    'To follow a set of values that are built on solid foundation of honesty, fair business practices and achieving professional excellence.',
    'To be recognized and respected as one of the premier institutions in data protection and data recovery services.',
    'To offer products and services with the most affordable price and the best quality.',
  ];

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Vision & Mission' }]} />

      {/* Hero Section */}
      <PageHeader
        title="Vision & Mission"
        backgroundImage="/images/who_we_are/vision_mission_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'VISION & MISSION' }]}
      />

      {/* Intro Banner */}
      <section className="bg-white relative overflow-hidden py-20 border-b border-slate-100">
        {/* Soft bg blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[160px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[130px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — Heading */}
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse"></span>
                DATA RECOVERY SERVICES
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat text-slate-900 leading-tight mb-4">
                Our <span className="relative inline-block">
                  <span className="text-[#3da3ff]">Vision</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#3da3ff] to-blue-300 rounded-full"></span>
                </span>
                {' '}& {' '}
                <span className="relative inline-block">
                  <span className="text-[#3da3ff]">Mission</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#3da3ff] to-blue-300 rounded-full"></span>
                </span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mt-6 max-w-lg">
                At DSS, every action we take is guided by a clear purpose — to be the most trusted and capable data recovery provider, delivering results with integrity, innovation, and care.
              </p>
            </div>

            {/* Right — Stat pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-[#3da3ff] mb-1">22+</div>
                <div className="text-slate-700 font-semibold text-sm">Years of Excellence</div>
                <div className="text-slate-400 text-xs mt-1">Trusted since day one</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-indigo-500 mb-1">99%</div>
                <div className="text-slate-700 font-semibold text-sm">Recovery Rate</div>
                <div className="text-slate-400 text-xs mt-1">Class 100 Clean Room</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-emerald-500 mb-1">25K+</div>
                <div className="text-slate-700 font-semibold text-sm">Happy Customers</div>
                <div className="text-slate-400 text-xs mt-1">Across India & globally</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-amber-500 mb-1">100%</div>
                <div className="text-slate-700 font-semibold text-sm">Data Privacy</div>
                <div className="text-slate-400 text-xs mt-1">No Data, No Cost policy</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent strip */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3da3ff]/40 to-transparent"></div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[150px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-slate-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#0b0c2a] to-[#1a1b4b] px-8 py-8 flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-[#3da3ff]/20 border border-[#3da3ff]/30 flex items-center justify-center shrink-0">
                  <Target className="h-7 w-7 text-[#3da3ff]" />
                </div>
                <div>
                  <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">What We Aim To Do</p>
                  <h3 className="text-white text-2xl font-black font-montserrat">Our Mission</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <ul className="space-y-5">
                  {missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5 group-hover:bg-[#3da3ff] group-hover:border-[#3da3ff] transition-colors duration-300">
                        <CheckCircle2 className="h-4 w-4 text-[#3da3ff] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-slate-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#1a1b4b] to-[#0b0c2a] px-8 py-8 flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <Eye className="h-7 w-7 text-indigo-400" />
                </div>
                <div>
                  <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-1">Where We Are Heading</p>
                  <h3 className="text-white text-2xl font-black font-montserrat">Our Vision</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <ul className="space-y-5">
                  {visionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mt-0.5 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors duration-300">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>

                {/* Spacer to balance height with mission card */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-slate-400 text-xs italic leading-relaxed">
                    &ldquo;To be recognized and trusted globally as a benchmark in data protection and recovery excellence.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
