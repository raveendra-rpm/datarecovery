'use client';

import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Globe, Mail, Phone, CheckCircle } from 'lucide-react';

const inputClass =
  'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition';
const labelClass = 'block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^\d{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number (digits only)';
    return e;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setForm(f => ({ ...f, phone: val }));
    if (errors.phone) setErrors(ev => ({ ...ev, phone: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setServerError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center bg-slate-50 rounded-2xl border border-slate-200 p-8">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-slate-800 font-bold text-lg mb-2">Thank You!</h3>
        <p className="text-slate-500 text-sm">We&apos;ve received your message. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="c-name" className={labelClass}>Name :</label>
            <input
              id="c-name" type="text" value={form.name}
              onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(ev => ({ ...ev, name: '' })); }}
              className={`${inputClass} ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="c-email" className={labelClass}>Email :</label>
            <input
              id="c-email" type="email" value={form.email}
              onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(ev => ({ ...ev, email: '' })); }}
              className={`${inputClass} ${errors.email ? 'border-red-400 focus:ring-red-200' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Phone + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="c-phone" className={labelClass}>Phone :</label>
            <input
              id="c-phone" type="tel" inputMode="numeric" value={form.phone}
              onChange={handlePhoneChange}
              className={`${inputClass} ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="c-company" className={labelClass}>Company :</label>
            <input
              id="c-company" type="text" value={form.company}
              onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label htmlFor="c-message" className={labelClass}>How Can We Assist You :</label>
          <textarea
            id="c-message" rows={5} value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className={`${inputClass} resize-none`}
          />
        </div>

        {serverError && <p className="text-red-500 text-xs font-medium">{serverError}</p>}

        <button
          type="submit" disabled={loading}
          className="w-full bg-slate-900 hover:bg-slate-700 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-colors duration-200"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white">
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

    </main>
  );
}
