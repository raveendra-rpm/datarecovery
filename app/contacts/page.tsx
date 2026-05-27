'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Globe, Mail, Phone, CheckCircle } from 'lucide-react';

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
      <div className="flex flex-col items-center justify-center py-12 text-center bg-[#bce3f6] rounded-sm p-7">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-slate-800 font-bold text-lg mb-2">Thank You!</h3>
        <p className="text-slate-600 text-sm">
          We&apos;ve received your request. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#bce3f6] p-8">
      <h3 className="text-slate-900 font-bold text-2xl mb-6">Interact with us :</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="c-name" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="c-name"
            type="text"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#f4f4f4] border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#3da3ff] focus:border-[#3da3ff] transition"
          />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="c-phone"
            type="tel"
            required
            placeholder="081234 56789"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-[#f4f4f4] border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#3da3ff] focus:border-[#3da3ff] transition"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-[#f4f4f4] border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#3da3ff] focus:border-[#3da3ff] transition"
          />
        </div>
        <div>
          <label htmlFor="c-service" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Services <span className="text-red-500">*</span>
          </label>
          <select
            id="c-service"
            required
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
            className="w-full bg-[#f4f4f4] border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#3da3ff] focus:border-[#3da3ff] transition"
          >
            <option value=""></option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="c-message" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Message
          </label>
          <textarea
            id="c-message"
            rows={3}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="w-full bg-[#f4f4f4] border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#3da3ff] focus:border-[#3da3ff] transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#24a0ed] hover:bg-[#1b88cd] text-white text-sm font-semibold py-2 px-6 transition-colors duration-200"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHeader
        title="Contacts"
        backgroundImage="/images/contact_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'CONTACTS' },
        ]}
      />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[#8e74cc] text-[11px] font-bold uppercase tracking-widest mb-2">
                  {"// CONTACT DETAILS"}
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  Contact us
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  Give us a call or drop by anytime, we endeavour to answer all enquiries within 24
                  hours on business days. We will be happy to answer your questions.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-[#71aff4]">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Our Address:</h4>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-xs">
                      Shop# S-11 &amp; S-12, 2nd Floor, KHB Colony, 80 Feet Road, 5th Block,
                      Koramangala, Bangalore 560095
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-[#71aff4]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Our Mailbox:</h4>
                    <a
                      href="mailto:helpdesk@datastoragesolutions.in"
                      className="text-slate-500 text-sm font-semibold hover:text-[#3da3ff] transition-colors"
                    >
                      helpdesk@datastoragesolutions.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-[#71aff4]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Our Phone:</h4>
                    <p className="text-slate-500 text-sm font-semibold">
                      <a href="tel:+919880872536" className="hover:text-[#3da3ff] transition-colors">
                        +91 9880872536
                      </a>
                      {', '}
                      <a href="tel:+919880979123" className="hover:text-[#3da3ff] transition-colors">
                        +91 9880979123
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Map ─────────────────────────────────────────────────── */}
      <section id="map" className="w-full h-[450px]">
        <iframe
          title="Data Storage Solutions Location"
          src="https://maps.google.com/maps?q=Data+Storage+Solutions,+Shop+S-11+%26+S-12,+2nd+floor,+20th+Main+Rd,+KHB+Colony,+5th+Block,+Koramangala,+Bengaluru,+Karnataka+560095&output=embed&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          suppressHydrationWarning
        />
      </section>

      <Footer />
    </main>
  );
}
