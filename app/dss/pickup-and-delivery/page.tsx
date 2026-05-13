'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { publicPath } from '@/lib/site';
import { CheckCircle, Truck, MapPin, Phone, Mail, Clock } from 'lucide-react';

const services = [
  'Hard Disk Drive (HDD)',
  'Solid State Drive (SSD)',
  'External Hard Drive',
  'USB Flash Drive / Memory Card',
  'RAID / Server Storage',
  'Tape Media',
  'CCTV / DVR Storage',
  'Laptop & Desktop Drives',
];

const steps = [
  {
    step: '01',
    title: 'Schedule a Pickup',
    desc: 'Call or fill the form. Our executive will contact you to arrange a convenient pickup time.',
    color: 'text-[#3da3ff]',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    step: '02',
    title: 'Secure Packaging',
    desc: 'We provide anti-static, padded packaging to ensure your media reaches our lab safely.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    step: '03',
    title: 'Lab Analysis & Recovery',
    desc: 'Our engineers perform a free diagnostic and proceed with recovery upon your approval.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    step: '04',
    title: 'Safe Delivery',
    desc: 'Once data is recovered, your device and recovered data are delivered back to you securely.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-slate-800 font-bold text-lg mb-2">Thank You!</h3>
        <p className="text-slate-500 text-sm">
          We&apos;ve received your request. Our team will contact you shortly to arrange the pickup.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="pd-name" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="pd-name"
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da3ff]/30 focus:border-[#3da3ff] transition"
        />
      </div>
      <div>
        <label htmlFor="pd-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="pd-phone"
          type="tel"
          required
          placeholder="081234 56789"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da3ff]/30 focus:border-[#3da3ff] transition"
        />
      </div>
      <div>
        <label htmlFor="pd-email" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="pd-email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da3ff]/30 focus:border-[#3da3ff] transition"
        />
      </div>
      <div>
        <label htmlFor="pd-service" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Services <span className="text-red-500">*</span>
        </label>
        <select
          id="pd-service"
          required
          value={form.service}
          onChange={e => setForm({ ...form, service: e.target.value })}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3da3ff]/30 focus:border-[#3da3ff] transition bg-white"
        >
          <option value="">Select a service</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pd-message" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Message
        </label>
        <textarea
          id="pd-message"
          rows={3}
          placeholder="Describe your issue..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da3ff]/30 focus:border-[#3da3ff] transition resize-none"
        />
      </div>
      <button
        type="submit"
        id="pd-submit-btn"
        className="w-full bg-[#3da3ff] hover:bg-[#2b8ee8] text-white font-bold text-sm py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Submit Form
      </button>
    </form>
  );
}

export default function PickupAndDelivery() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHeader
        title="Pickup & Delivery"
        backgroundImage="/images/headers_img/pickup_delivery.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'DSS' },
          { label: 'PICKUP & DELIVERY' },
        ]}
      />

      {/* ── Page Title Banner ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">
            Pickup &amp; Delivery of your Data Recovery in Bangalore
          </h1>
        </div>
      </section>

      {/* ── Main Content: 2-Row 2-Column Layout ──────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          {/* Row 1 — Description (left) + Contact Form (right) */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — Description + Media List */}
            <div className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#3da3ff]">
                DATA STORAGE SOLUTIONS
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Pickup &amp; Delivery
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pickup and Delivery of the Hard Drive or Storage Media
                can be arranged in Bangalore up to <span className="font-semibold text-slate-700">30 Km&apos;s</span> surrounding.
                Our executive will contact and visit the place for pickup of the media,
                detailed documentation for material submission will be provided along with
                Serial No. of the media.
              </p>

              {/* Media types — 2 column checklist */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Media We Pick Up
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#3da3ff] shrink-0" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="bg-[#d0eaf8] rounded-2xl p-7 shadow-sm">
              <h3 className="text-slate-800 font-bold text-base mb-5">
                Request a Pickup
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-100" />

          {/* Row 2 — Image + Info (left) + Steps (right) */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — Image + Info text */}
            <div className="space-y-5">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={publicPath("/images/headers_img/pickup_delivery.jpg")}
                  alt="Pickup and Delivery Executive"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-sm text-slate-600 leading-relaxed">
                <p>
                  The drive will be delivered to our Lab. Post technical analysis of the media, our engineers
                  will provide the update on the media/drive condition, quote &amp; time frame required for
                  data recovery completion.
                </p>
              </div>
            </div>

            {/* Right — 4-Step Process (2×2 grid) */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                How It Works
              </p>
              <div className="grid grid-cols-2 gap-4">
                {steps.map(({ step, title, desc, color, bg, border }) => (
                  <div
                    key={step}
                    className={`relative flex flex-col gap-3 border ${border} rounded-xl p-5 overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default bg-white`}
                  >
                    <div className={`shrink-0 h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                      <span className={`${color} font-black text-sm`}>{step}</span>
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-bold text-sm mb-1">{title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                    <span className="absolute -bottom-1 -right-1 text-[52px] font-black text-slate-100 select-none leading-none pointer-events-none">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Use Our Service ───────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              WHY CHOOSE OUR PICKUP SERVICE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Convenient, Secure &amp; Professional
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Truck,
                title: 'Doorstep Pickup',
                desc: 'We come to your location within 30 km of Bangalore. No need to travel to our lab.',
                color: 'text-[#3da3ff]',
                bg: 'bg-blue-50',
              },
              {
                icon: CheckCircle,
                title: 'Documented Handover',
                desc: 'Full documentation with serial numbers provided at pickup for complete traceability.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
              },
              {
                icon: MapPin,
                title: 'Pan-India Courier',
                desc: 'Outside Bangalore? Ship your media via our secure courier channel from anywhere in India.',
                color: 'text-violet-600',
                bg: 'bg-violet-50',
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                desc: 'Express recovery options available. Standard recovery in 3–7 business days.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
              },
            ].map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className={`h-11 w-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h4 className="text-slate-800 font-bold text-sm mb-2">{title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info Strip ──────────────────────────────────────────── */}
      <section className="bg-[#0b0c2a] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { icon: Phone, label: 'Call Us', value: '+91 9880872536', href: 'tel:+919880872536' },
              { icon: Mail, label: 'Email Us', value: 'helpdesk@datastoragesolutions.in', href: 'mailto:helpdesk@datastoragesolutions.in' },
              { icon: MapPin, label: 'Visit Us', value: 'Shop S-11 & S-12, 20th Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru 560095', href: '#map' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#3da3ff] transition-colors duration-200">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-white font-semibold text-sm group-hover:text-[#3da3ff] transition-colors">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Map ─────────────────────────────────────────────────── */}
      <section id="map" className="w-full h-[420px]">
        <iframe
          title="Data Storage Solutions Location"
          src="https://maps.google.com/maps?q=Data+Storage+Solutions,+Shop+S-11+%26+S-12,+2nd+floor,+20th+Main+Rd,+KHB+Colony,+5th+Block,+Koramangala,+Bengaluru,+Karnataka+560095&output=embed&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </main>
  );
}
