import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';
import Counter from '@/components/ui/Counter';
import { publicPath } from '@/lib/site';
import { Award, Settings, HardDrive, Database, Lock, Server, FileText, Cpu, Video, Users, CheckCircle, ShieldCheck, Calendar } from 'lucide-react';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Why Choose Us | Class 100 Clean Room & 99% Success Rate | Data Storage Solutions',
  description: 'Why choose Data Storage Solutions: Class 100 Clean Room, 99% success rate, No Data No Cost guarantee, and 22+ years of data recovery expertise in Bangalore.',
  alternates: { canonical: '/who-we-are/why-choose-us' },
  openGraph: {
    title: 'Why Choose Us | Data Storage Solutions',
    description: 'Class 100 Clean Room, 99% success rate, No Data No Cost guarantee, and 22+ years of data recovery expertise.',
    url: '/who-we-are/why-choose-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Us | Data Storage Solutions',
    description: 'Class 100 Clean Room, 99% success rate, No Data No Cost guarantee, and 22+ years of data recovery expertise.',
  },
};

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Why Choose Us' }]} />

      {/* Hero Section */}
      <PageHeader
        title="Why Choose Us"
        backgroundImage="/images/who_we_are/why_choose_us_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'WHY CHOOSE US' }]}
      />

      {/* Intro Section */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Image with floating badge */}
          <div className="relative">
            {/* Decorative accent block */}
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#3da3ff]/30 to-blue-600/10 z-0"></div>
            <div className="relative h-[580px] rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src={publicPath("/images/who_we_are/why_choose_dss.jpg")}
                fill
                className="object-cover"
                alt="Why Choose DSS"
              />
              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#3da3ff] flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">22+ Years</p>
                  <p className="text-white/80 text-xs mt-1">of trusted data recovery expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="relative">
            {/* Decorative blur blob */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse"></span>
              WHY CHOOSE DSS
            </span>

            <h3 className="text-4xl md:text-5xl font-black font-montserrat text-slate-900 mb-6 leading-tight">
              Why Choose <span className="text-[#3da3ff]">DSS</span> Data<br className="hidden lg:block" /> Recovery Services
            </h3>

            <p className="text-slate-500 mb-10 leading-relaxed text-sm">
              There are many ways for individuals and organizations today to acquire data protection/storage technology. But we know you will prefer to choose Data Storage Solutions (DSS) for{' '}
              <span className="text-[#3b82f6] font-bold">Data Recovery Services</span>{' '}
              as all your worries about any data loss, a disaster would vanish and in turn, your productivity loss is quickly arrested as well when you rely and trust on us. We are here to serve you the best data recovery services. Our expertise, services, quality solutions, and competitive prices show you the way.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#3da3ff] transition-colors duration-300 border border-blue-100">
                  <Award className="text-[#3b82f6] group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Experience</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Our great team of more than 22+ Years of Data Recovery experts.</p>
              </div>

              <div className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#3da3ff] transition-colors duration-300 border border-blue-100">
                  <Settings className="text-[#3b82f6] group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Quick Support</h4>
                <p className="text-slate-500 text-xs leading-relaxed">We help you resolve data loss quickly with round-the-clock support.</p>
              </div>

              <div className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#3da3ff] transition-colors duration-300 border border-blue-100">
                  <ShieldCheck className="text-[#3b82f6] group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">100% Privacy</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Strict confidentiality guaranteed — No Data, No Cost policy.</p>
              </div>

              <div className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#3da3ff] transition-colors duration-300 border border-blue-100">
                  <CheckCircle className="text-[#3b82f6] group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">High Success Rate</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Class 100 Clean Room with 99% data recovery success rate.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#0b0c2a] py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-500/20 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {/* Item 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]">
              <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/30">
                <Users className="text-blue-400 h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-montserrat mb-3 text-white drop-shadow-md">
                <Counter end={25000} suffix="+" />
              </div>
              <div className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">
                HAPPY CUSTOMER
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-cyan-500/50 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.3)]">
              <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/30">
                <CheckCircle className="text-cyan-400 h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-montserrat mb-3 text-white drop-shadow-md">
                <Counter end={26000} suffix="+" />
              </div>
              <div className="text-cyan-300 text-xs font-bold tracking-[0.2em] uppercase">
                PROJECTS DONE
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-emerald-500/50 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)]">
              <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-500/30">
                <ShieldCheck className="text-emerald-400 h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-montserrat mb-3 text-white drop-shadow-md">
                <Counter end={99} suffix=" %" />
              </div>
              <div className="text-emerald-300 text-xs font-bold tracking-[0.2em] uppercase">
                RECOVER DATA
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-purple-500/50 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)]">
              <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/30">
                <Calendar className="text-purple-400 h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-montserrat mb-3 text-white drop-shadow-md">
                <Counter end={22} suffix="+" />
              </div>
              <div className="text-purple-300 text-xs font-bold tracking-[0.2em] uppercase">
                WORKING YEARS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wide Variety List */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse"></span>
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat text-slate-900 leading-tight">
              We Offer a Wide Variety of<br className="hidden md:block" />
              <span className="text-[#3da3ff]"> Data Recovery Services</span>
            </h2>
            <div className="mt-5 w-16 h-1 bg-[#3da3ff] rounded-full mx-auto"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { text: "Data Storage Solutions (DSS) has been a leading company of high reliability in computer data recovery carrying with it an experience of over 22+ years.", color: "border-blue-500", bg: "bg-blue-50", num: "text-blue-500" },
              { text: "DSS will be your most trusted company as it provides you with the best and most cost-effective data recovery services such as Hard Drive recovery, RAID/NAS recovery, Server recovery, etc.", color: "border-cyan-500", bg: "bg-cyan-50", num: "text-cyan-500" },
              { text: "DSS is equipped with the best-in-class tools and techniques to offer to all its customers the most reliable customer service of a high order.", color: "border-violet-500", bg: "bg-violet-50", num: "text-violet-500" },
              { text: "We strongly believe in maintaining a good relationship with all our customers supported by our transparent business practices.", color: "border-emerald-500", bg: "bg-emerald-50", num: "text-emerald-500" },
              { text: "In case of requests from our valued customers, we do arrange to pick up and deliver back the material on a chargeable basis.", color: "border-amber-500", bg: "bg-amber-50", num: "text-amber-500" },
              { text: "DSS is equipped with a CLASS 100 Clean Room for successful hard disk recovery.", color: "border-rose-500", bg: "bg-rose-50", num: "text-rose-500" },
              { text: "A Laptop of one of our very important Corporate client fell from 2nd floor. The laptop contained encrypted data in the hard drive. Data was successfully recovered.", color: "border-blue-500", bg: "bg-blue-50", num: "text-blue-500" },
              { text: "Data was recovered even in a case where the PC hard drive burnt due to a short circuit.", color: "border-orange-500", bg: "bg-orange-50", num: "text-orange-500" },
              { text: "We could recover the data even when the external drive was damaged in water.", color: "border-teal-500", bg: "bg-teal-50", num: "text-teal-500" },
              { text: "We were successful in recovering data in a case where the hard drive had been handled or tampered with in a very unprofessional manner with the fingerprint on the platter.", color: "border-purple-500", bg: "bg-purple-50", num: "text-purple-500" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group flex items-start gap-5 bg-white border-l-4 ${item.color} rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                  <span className={`${item.num} font-black text-sm`}>{(idx + 1).toString().padStart(2, '0')}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Banner */}
      <section className="relative py-28 text-white overflow-hidden" style={{ backgroundColor: 'rgb(225, 31, 39)' }}>
        {/* Decorative overlays */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              OUR DATA RECOVERY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat leading-tight">
              We Deliver Solution with<br className="hidden md:block" /> the Goal of Trusting Relationships
            </h2>
            <div className="mt-5 w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <HardDrive className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">HDD DATA<br />RECOVERY</span>
            </div>

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">SSD DATA<br />RECOVERY</span>
            </div>

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">ENCRYPTED<br />DATA<br />RECOVERY</span>
            </div>

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">RAID SERVER<br />DATA<br />RECOVERY</span>
            </div>

            {/* Files card - highlight on hover only */}
            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">FILES DATA<br />RECOVERY</span>
            </div>

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">FLASH CARD<br />DATA<br />RECOVERY</span>
            </div>

            <div className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-[#3da3ff] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_12px_40px_rgba(61,163,255,0.5)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-wider leading-snug">CCTV DATA<br />RECOVERY</span>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
