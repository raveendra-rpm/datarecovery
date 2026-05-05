"use client";

import React, { useState } from 'react';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Kushalkumar Jamb...",
    role: "Satisfied Customer",
    stars: 5,
    text: "I used to feel like my data was lost forever. After reaching out to DSS, I'm not just relieved—I'm more focused on my work and more present for my clients. This was the recovery I truly needed.",
    avatar: "https://ui-avatars.com/api/?name=Kushalkumar+Jamb&background=4f46e5&color=fff",
    featured: false
  },
  {
    name: "Narendra Yadav",
    role: "Business Owner",
    stars: 5,
    text: "The expert-driven approach changed everything. Seeing how they managed to get my all data recovered from a faulty hard disk made it easy to trust their process. I've found a level of reliability I thought was gone.",
    avatar: "https://ui-avatars.com/api/?name=Narendra+Yadav&background=065f46&color=fff",
    featured: true
  },
  {
    name: "Mahesh Kumar",
    role: "Software Engineer",
    stars: 5,
    text: "Unlike every other service, this felt like a partnership. Their team was there through the stress and the urgency. It's the first time a data recovery plan felt sustainable and human.",
    avatar: "https://ui-avatars.com/api/?name=Mahesh+Kumar&background=b45309&color=fff",
    featured: false
  },
  {
    name: "Priya Sharma",
    role: "Graphic Designer",
    stars: 5,
    text: "All my project files were recovered within 24 hours. I was amazed at how professional the team was. They kept me updated at every step and delivered beyond expectations. Highly recommended!",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=be185d&color=fff",
    featured: false
  },
  {
    name: "Ravi Verma",
    role: "IT Manager",
    stars: 5,
    text: "Our company's RAID server crashed and we thought all data was lost. DSS recovered 98% of the data in just 5 days. Their technical expertise is unmatched. A true lifesaver for our business.",
    avatar: "https://ui-avatars.com/api/?name=Ravi+Verma&background=0369a1&color=fff",
    featured: true
  },
  {
    name: "Sunita Patel",
    role: "Freelance Consultant",
    stars: 5,
    text: "My laptop's hard drive failed right before a major presentation. DSS recovered all my critical files overnight. I cannot thank them enough for saving my career. Truly exceptional service!",
    avatar: "https://ui-avatars.com/api/?name=Sunita+Patel&background=7c3aed&color=fff",
    featured: false
  },
  {
    name: "Arjun Nair",
    role: "Startup Founder",
    stars: 5,
    text: "We lost months of startup data due to accidental formatting. DSS not only recovered everything but also gave us data backup advice. They are more than just a recovery service — they are partners.",
    avatar: "https://ui-avatars.com/api/?name=Arjun+Nair&background=0f766e&color=fff",
    featured: false
  }
];

const CARDS_PER_VIEW = 3;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const maxIndex = testimonials.length - CARDS_PER_VIEW;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="w-full bg-[#fbfbfd] pt-8 pb-32 relative overflow-hidden">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <p className="text-[#8b5cf6] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            {'// OUR CLIENTS'}
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-black text-[#1d1d1f] mb-10 leading-tight tracking-tight">
            We are Trusted DSS Clients
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${CARDS_PER_VIEW} + (32px / ${CARDS_PER_VIEW}))))` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`flex-none w-[calc((100%-64px)/3)] rounded-[40px] p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                  t.featured
                    ? 'bg-gradient-to-br from-[#004B9B] to-[#003d82] text-white'
                    : 'bg-white text-[#1d1d1f]'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={t.featured ? "fill-white text-white" : "fill-[#004B9B] text-[#004B9B]"}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className={`mb-4 ${t.featured ? 'text-white/20' : 'text-gray-100'}`}>
                  <Quote size={40} fill="currentColor" />
                </div>

                {/* Text */}
                <p className={`text-lg leading-relaxed italic mb-12 flex-grow ${t.featured ? 'text-white' : 'text-[#515154]'}`}>
                  &quot;{t.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                    <p className={`text-sm ${t.featured ? 'text-blue-100' : 'text-[#004B9B] font-medium'}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-between mt-12 mb-16">
          {/* Dot Indicators */}
          <div className="flex gap-3">
            {testimonials.slice(0, maxIndex + 1).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-3 bg-[#004B9B]'
                    : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-14 h-14 rounded-full border-2 border-gray-200 hover:border-[#004B9B] hover:bg-[#004B9B] hover:text-white flex items-center justify-center text-[#1d1d1f] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              <ChevronLeft size={22} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="w-14 h-14 rounded-full bg-[#004B9B] hover:bg-[#003d82] text-white flex items-center justify-center transition-all duration-300 shadow-[0_8px_20px_rgba(0,75,155,0.3)] disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              <ChevronRight size={22} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-[#004B9B] hover:bg-[#003d82] text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 shadow-[0_8px_24px_rgba(0,75,155,0.3)] hover:shadow-[0_12px_32px_rgba(0,75,155,0.45)] hover:-translate-y-0.5">
            OUR TESTIMONIALS
            <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
