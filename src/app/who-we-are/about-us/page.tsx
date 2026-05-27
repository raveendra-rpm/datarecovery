import LogoMarquee from '@/components/ui/LogoMarquee';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { publicPath } from '@/lib/site';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <PageHeader
        title="About Us"
        backgroundImage="/images/who_we_are/about_us_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'ABOUT US' }]}
      />

      {/* Intro & Grid Section */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text Content */}
          <div className="relative">
            {/* Decorative blob */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></span>
              ABOUT DATA RECOVERY SERVICES IN BANGALORE
            </span>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-zblack font-montserrat text-slate-900 mb-6 leading-tight">
              Data Recovery<br />
              <span className="text-[#3da3ff]">Services</span> in Bangalore
            </h3>

            <p className="text-slate-500 mb-4 leading-relaxed text-sm">
              Data Storage Solutions (DSS) is a leading Data Recovery Company based out of Bangalore. With more than 22 years of experience, DSS has made a mark as a reliable data recovery provider.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              DSS offers comprehensive, prompt and cost-effective data recovery solutions to individuals, medium enterprises and large corporate entities.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-700 text-xs font-semibold">No Data No Cost</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-700 text-xs font-semibold">100% Data Privacy</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-700 text-xs font-semibold">Free Initial Checkup</span>
              </div>
            </div>

            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#3da3ff] to-blue-600 hover:from-blue-600 hover:to-[#3da3ff] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase transition-all duration-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              Contact Us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right — Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-52 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Mission" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-base drop-shadow-md">Our Mission</span>
              </div>
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Choose" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-base drop-shadow-md">Why Choose DSS?</span>
              </div>
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Vision" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-base drop-shadow-md">Our Vision</span>
              </div>
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
              <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Testimonials" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold text-base drop-shadow-md">Our Testimonials</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="bg-white py-8 border-y border-slate-100">
        <LogoMarquee />
      </div>

      {/* What We Actually Do */}
      <section className="bg-[#1f2041] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#3da3ff] transform -translate-x-6 translate-y-6 rounded-lg opacity-80"></div>
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80" fill className="object-cover" alt="Hard Drive" />
              <div className="absolute bottom-6 left-6 border-l-4 border-red-500 pl-4 bg-black/40 backdrop-blur-sm p-2">
                <h3 className="text-4xl font-black text-red-500 uppercase tracking-widest leading-none">DATA</h3>
                <h3 className="text-3xl font-black text-white uppercase tracking-widest leading-none mt-1">RECOVERY</h3>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#3da3ff] text-xs font-bold tracking-widest uppercase mb-3">ABOUT DATA RECOVERY SERVICES IN BANGALORE</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-8">
              What We Actually Do
            </h3>
            <h4 className="text-lg font-bold mb-4">Data Recovery Services</h4>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm">
              We have Skills an Expertise in performing data recovery and can recover data from all kinds of storage devices like RAID servers, NAS, SAS, SAD, SAN, desktops, laptop/notebook computers, magnetic tapes, flash media, Smart Phones/Tablets, Floppy Disks, Optical media DVDs, CDs and from almost every electronic device or media. DSS recovers data from all platforms of Windows, Macintosh (Mac OS), and Linux operating systems.
            </p>
          </div>
        </div>
      </section>

      {/* OS & Reviews Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#3b82f6] text-xs font-bold tracking-widest uppercase mb-3">DATA RECOVERY IN BANGALORE</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-slate-900 leading-tight">
              We can recover data from the<br className="hidden md:block" /> below-operating systems
            </h3>
            <div className="mt-4 w-16 h-1 bg-[#3da3ff] rounded-full mx-auto"></div>
          </div>

          {/* OS Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

            {/* Windows */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-5 transition-colors duration-300 border border-blue-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
                  <path d="M3 5.5L11 4v8H3V5.5Z" fill="#0078D4" />
                  <path d="M12 3.82L21 2.5V12h-9V3.82Z" fill="#0078D4" />
                  <path d="M3 13h8v7.5L3 19V13Z" fill="#0078D4" />
                  <path d="M12 13h9v8.5L12 20.18V13Z" fill="#0078D4" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#3b82f6] transition-colors">Windows</h4>
              <p className="text-slate-400 text-xs mt-1">All Versions</p>
            </div>

            {/* Apple */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center mb-5 transition-colors duration-300 border border-slate-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#3b82f6] transition-colors">Apple</h4>
              <p className="text-slate-400 text-xs mt-1">macOS / iOS</p>
            </div>

            {/* Linux */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-5 transition-colors duration-300 border border-amber-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021C7.576.299 3.203 3.865 2.684 8.62c-.24 2.262.113 4.204.938 5.791-.25.894-.437 2.02-.406 3.224.068 2.619 1.139 4.023 2.565 4.023.849 0 1.682-.417 2.514-1.217a11.5 11.5 0 001.5.82c-.16.71-.316 1.71-.322 2.68-.03 2.432 1.081 3.855 2.712 3.855.888 0 1.784-.455 2.556-1.38.788 1.06 1.724 1.38 2.572 1.38 1.708 0 2.741-1.636 2.741-4.256 0-.989-.154-2.144-.38-3.144a11.34 11.34 0 001.38-.772c.862.822 1.722 1.254 2.594 1.254 1.411 0 2.463-1.347 2.463-3.777a8.26 8.26 0 00-.395-2.494c.673-1.46.979-3.254.735-5.281C23.12 3.6 18.548.028 13.952.003c-.483-.003-.963.003-1.448.003zm-.037 1.88c.4 0 .8.007 1.198.022 3.856.143 7.652 2.869 8.138 6.661.17 1.333-.026 2.605-.522 3.703.049.255.089.516.12.776l.023.176c.142 1.102.144 2.11.014 2.887-.126.76-.387 1.226-.722 1.226-.395 0-.96-.387-1.638-1.26l-.37-.472-.405.44c-.35.38-.725.75-1.114 1.11l-.468.424.361.521c.553.798.933 1.613.997 2.327.073.814-.158 1.36-.614 1.36-.54 0-1.119-.496-1.697-1.431l-.338-.545-.42.49c-.744.868-1.485 1.325-2.123 1.325-.739 0-1.26-.685-1.24-2.076.008-.84.154-1.762.303-2.49l.122-.607-.597-.188c-.48-.152-.947-.37-1.395-.654l-.476-.302-.344.449c-.665.866-1.279 1.291-1.793 1.291-.57 0-1.032-.638-1.057-2.017-.022-.93.138-1.82.354-2.604l.08-.29-.151-.265c-.63-1.102-.93-2.707-.72-4.571.39-3.677 3.87-6.6 7.837-6.869.391-.027.784-.041 1.176-.043z" fill="#f5a623" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#3b82f6] transition-colors">Linux</h4>
              <p className="text-slate-400 text-xs mt-1">All Distros</p>
            </div>

            {/* Android */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-5 transition-colors duration-300 border border-green-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#3DDC84">
                  <path d="M17.523 15.341a.99.99 0 01-.992-.988.993.993 0 011.984 0 .99.99 0 01-.992.988m-11.046 0a.99.99 0 01-.992-.988.993.993 0 011.984 0 .99.99 0 01-.992.988m11.404-6.161l1.966-3.407a.41.41 0 00-.149-.559.41.41 0 00-.559.149l-1.99 3.451A11.67 11.67 0 0012 7.91a11.67 11.67 0 00-5.149 1.204L4.861 5.663a.41.41 0 00-.559-.149.41.41 0 00-.149.559l1.966 3.407C3.353 10.895 1.555 13.542 1.333 16.67h21.334c-.222-3.128-2.02-5.775-4.786-7.49z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#3b82f6] transition-colors">Android</h4>
              <p className="text-slate-400 text-xs mt-1">All Versions</p>
            </div>

          </div>

          {/* Reviews Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0b0c2a] to-[#1a1b4b] px-10 py-8 flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-1">TRUSTED BY THOUSANDS</p>
                <h4 className="text-white text-2xl font-black font-montserrat">Our Ratings Across Platforms</h4>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-blue-400 italic font-black text-3xl">DSS</span>
                <p className="text-slate-400 text-xs tracking-widest">DATA STORAGE SOLUTIONS</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">

              <div className="p-8 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors duration-300">
                <span className="font-black text-2xl text-[#4285F4] mb-1">Google</span>
                <div className="flex items-center my-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <div className="text-3xl font-black text-slate-800">4.8</div>
                <div className="text-slate-400 text-xs mt-1">Reviews</div>
              </div>

              <div className="p-8 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors duration-300">
                <span className="font-black text-2xl text-[#1877F2] mb-1">Facebook</span>
                <div className="flex items-center my-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <div className="text-3xl font-black text-slate-800">4.7</div>
                <div className="text-slate-400 text-xs mt-1">Reviews</div>
              </div>

              <div className="p-8 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors duration-300">
                <span className="font-black text-2xl text-[#e83b3b] mb-1">Justdial</span>
                <div className="flex items-center my-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <div className="text-3xl font-black text-slate-800">4.5</div>
                <div className="text-slate-400 text-xs mt-1">Reviews</div>
              </div>

              <div className="p-8 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors duration-300">
                <span className="font-black text-2xl text-[#e05c1c] mb-1">Sulekha</span>
                <div className="flex items-center my-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <div className="text-3xl font-black text-slate-800">4.7</div>
                <div className="text-slate-400 text-xs mt-1">Reviews</div>
              </div>

            </div>
          </div>

          {/* Text content blocks */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-8 h-1 bg-[#3da3ff] rounded mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">Our Company have core focus on Data Recovery Services. We have 22+ years of experience in data recovery, serving individuals, SME&apos;s, corporates &amp; Govt Organizations.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-8 h-1 bg-[#3da3ff] rounded mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">We have the state-of-the-art Class 100 Clean Room Facility and the core expertise in our data recovery, which makes us to provide high success rate in data recovery in Bangalore.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-8 h-1 bg-[#3da3ff] rounded mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">We guarantee safe and secure process, 100% privacy to your data with strict confidentiality.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-8 h-1 bg-[#3da3ff] rounded mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">We assure you to return your exact data intact on 100% recovery process. We have a wide range of satisfied clients with our professional and transparent business values.</p>
            </div>
            <div className="md:col-span-2 bg-gradient-to-r from-[#3da3ff]/10 to-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#3da3ff] flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-800 font-semibold text-sm">We provide Free Initial Check up | No Data No Cost | 100% Data Privacy Guaranteed.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Recovery Trends */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#3b82f6] text-xs font-bold tracking-widest uppercase mb-3">DATA RECOVERY TRENDS</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-slate-900 mb-6">
              Improve and Innovate with the Recovery Trends
            </h3>
            <p className="text-slate-600 mb-12 text-sm leading-relaxed">
              Constant improvement and innovation helps us to provide better services to our customers.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-3 text-sm">
                  <span>DATA RECOVERY PROCESS</span>
                  <span>98%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3da3ff] w-[98%] rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-3 text-sm">
                  <span>DATA RECOVERY RATE</span>
                  <span>95%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3da3ff] w-[95%] rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] flex justify-center items-center">
            <div className="relative w-[80%] h-full rounded-2xl overflow-hidden shadow-lg">
              <Image src={publicPath("/images/who_we_are/data_recovery_trends.jpg")} fill className="object-cover" alt="Recovery Trends Illustration" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
