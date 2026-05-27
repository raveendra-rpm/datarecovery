'use client';

import PageHeader from '@/components/PageHeader';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kushalkumar Jamb...',
    role: 'Satisfied Customer',
    stars: 5,
    text: "I used to feel like my data was lost forever. After reaching out to DSS, I'm not just relieved—I'm more focused on my work and more present for my clients. This was the recovery I truly needed.",
    initial: 'K',
    color: 'bg-indigo-600',
  },
  {
    name: 'Narendra Yadav',
    role: 'Business Owner',
    stars: 5,
    text: "The expert-driven approach changed everything. Seeing how they managed to get my all data recovered from a faulty hard disk made it easy to trust their process. I've found a level of reliability I thought was gone.",
    initial: 'N',
    color: 'bg-emerald-700',
  },
  {
    name: 'Mahesh Kumar',
    role: 'Software Engineer',
    stars: 5,
    text: "Unlike every other service, this felt like a partnership. Their team was there through the stress and the urgency. It's the first time a data recovery plan felt sustainable and human.",
    initial: 'M',
    color: 'bg-amber-700',
  },
  {
    name: 'Priya Sharma',
    role: 'Graphic Designer',
    stars: 5,
    text: "All my project files were recovered within 24 hours. I was amazed at how professional the team was. They kept me updated at every step and delivered beyond expectations. Highly recommended!",
    initial: 'P',
    color: 'bg-pink-700',
  },
  {
    name: 'Ravi Verma',
    role: 'IT Manager',
    stars: 5,
    text: "Our company's RAID server crashed and we thought all data was lost. DSS recovered 98% of the data in just 5 days. Their technical expertise is unmatched. A true lifesaver for our business.",
    initial: 'R',
    color: 'bg-sky-700',
  },
  {
    name: 'Sunita Patel',
    role: 'Freelance Consultant',
    stars: 5,
    text: "My laptop's hard drive failed right before a major presentation. DSS recovered all my critical files overnight. I cannot thank them enough for saving my career. Truly exceptional service!",
    initial: 'S',
    color: 'bg-violet-700',
  },
  {
    name: 'Arjun Nair',
    role: 'Startup Founder',
    stars: 5,
    text: "We lost months of startup data due to accidental formatting. DSS not only recovered everything but also gave us data backup advice. They are more than just a recovery service — they are partners.",
    initial: 'A',
    color: 'bg-teal-700',
  },
  {
    name: 'Deepak Menon',
    role: 'Data Analyst',
    stars: 5,
    text: "I had nearly given up on recovering my external drive data. DSS diagnosed the issue within hours and had everything back in two days. The professionalism and care they showed was outstanding.",
    initial: 'D',
    color: 'bg-rose-700',
  },
  {
    name: 'Kavitha Rao',
    role: 'Architect',
    stars: 5,
    text: "Years of project drawings and blueprints were on that crashed hard drive. DSS retrieved everything. Their process was transparent, pricing was fair, and the results exceeded my expectations.",
    initial: 'K',
    color: 'bg-orange-700',
  },
  {
    name: 'Sameer Qureshi',
    role: 'Photographer',
    stars: 5,
    text: "I thought thousands of irreplaceable photos were gone forever. DSS brought them all back. Professional, courteous, and genuinely invested in helping. I recommend them to everyone I know.",
    initial: 'S',
    color: 'bg-cyan-700',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
      {/* Top row: avatar + name + stars */}
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-black text-base`}
        >
          {t.initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-slate-900 font-bold text-sm leading-tight truncate">{t.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
          <div className="mt-1.5">
            <StarRating count={t.stars} />
          </div>
        </div>
        {/* Google G icon */}
        <span className="shrink-0 text-xl font-black leading-none" style={{ color: '#4285F4' }}>
          G
        </span>
      </div>

      {/* Quote icon + review text */}
      <div className="relative">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-slate-100 fill-slate-100" />
        <p className="text-slate-600 text-sm leading-relaxed pl-4">
          &quot;{t.text}&quot;
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Testimonials"
        backgroundImage="/images/headers_img/testimonials.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'TESTIMONIALS' },
        ]}
      />

      {/* ── Testimonials Section ──────────────────────────────────── */}
      <section className="bg-[#f8f9fb] py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Google Reviews badge row */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="font-black text-lg" style={{ color: '#4285F4' }}>G</span>
              <span className="text-slate-700 font-semibold text-sm">Check Google Reviews</span>
            </div>
            <a
              href="https://www.google.com/search?q=Data+Storage+Solutions+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3da3ff] text-sm font-semibold hover:underline"
            >
              View all reviews →
            </a>
          </div>

          {/* Section heading */}
          <div className="mb-10">
            <p className="text-[#3da3ff] text-xs font-bold tracking-widest uppercase mb-2">
              // Our Testimonials
            </p>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">
              What Our Clients Say
            </h1>
          </div>

          {/* 2-column equal-height grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="flex">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
