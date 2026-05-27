'use client';

import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is data recovery?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm leading-relaxed">
        <li>
          Data recovery is the process of retrieving deleted or inaccessible data from failed
          electronic storage platter such as computer hard disk drives, removable drives, optical
          devices, etc.
        </li>
        <li>
          Your data can become inaccessible due to a software problem, computer virus, mechanical
          or electrical malfunction or a deliberate human act.
        </li>
      </ul>
    ),
  },
  {
    q: 'How long does the analysis take?',
    answer: (
      <p className="text-slate-600 text-sm leading-relaxed">
        The time required for analysis depends on the problem of platter. It generally takes{' '}
        <span className="font-semibold text-slate-800">3–4 hrs</span> to analyze the device, but
        in rare scenario it could take longer.
      </p>
    ),
  },
  {
    q: 'What are the reasons for hard disk failure?',
    answer: (
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">
        <p>
          There are various reasons for hard disk failure, but we broadly can categorize it into two:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-slate-800">Logical Issues :</span> Usually in this
            kind of hard disk, platter will be fine but the data might be lost due to Formatting /
            Partition Table Corruption / Data in Shortcut Format / Accidental Deletion / Virus
            Infection / OS installation without taking backup.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Physical Issues :</span> In these kinds
            of issues, the hard disk will not be detectable or there will be clicking noise or some
            of the components might be bad. In some cases the hard disk will be detectable, but data
            cannot be accessed due to bad sector.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: 'What is the analysis process?',
    answer: (
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">
        <p>
          All devices received go through an extensive analysis to determine the condition of the
          drive.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Step 1 – We will determine whether the problem is physical (hardware), logical (software
            structures) or both.
          </li>
          <li>
            Step 2 – If it is found to be physical, we will determine whether the needed parts for
            repair are in our inventory or if we have to resource them.
          </li>
          <li>
            Step 3 – Once we establish access to the drive, we will make an absolute and complete
            backup of your hard disk to our server where the process will continue.
          </li>
          <li>
            Step 4 – The next step is to evaluate the condition of the data structure &amp; determine
            how much of the data is recoverable.
          </li>
          <li>
            Step 5 – When the evaluation process is completed, we will contact you with the results
            of the evaluation &amp; tell you the exact time frame required as also about the cost for
            recovery. We will need your approval to proceed further from this point.
          </li>
        </ul>
      </div>
    ),
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150 ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-slate-50'
        }`}
      >
        <span
          className={`text-sm font-semibold leading-snug ${
            isOpen ? 'text-[#3da3ff]' : 'text-slate-700'
          }`}
        >
          {faq.q}
        </span>
        {isOpen ? (
          <ChevronUp className="shrink-0 ml-4 h-4 w-4 text-[#3da3ff]" />
        ) : (
          <ChevronDown className="shrink-0 ml-4 h-4 w-4 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-3 bg-white border-t border-slate-100">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns: [0,2] left, [1,3] right
  const leftFaqs = [0, 2];
  const rightFaqs = [1, 3];

  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="FAQs"
        backgroundImage="/images/headers_img/faqs.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'FAQS' },
        ]}
      />

      {/* ── FAQ Section ───────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-[#3da3ff] text-xs font-bold tracking-widest uppercase mb-3">
              // FAQ
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Read Most <br />Frequent Questions
            </h1>
          </div>

          {/* 2-column accordion grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left column */}
            <div className="space-y-4">
              {leftFaqs.map((idx) => (
                <FAQItem
                  key={idx}
                  faq={faqs[idx]}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
            {/* Right column */}
            <div className="space-y-4">
              {rightFaqs.map((idx) => (
                <FAQItem
                  key={idx}
                  faq={faqs[idx]}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#5ba8d4] via-[#4a7fd4] to-[#6a5fc1] py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-sm font-semibold mb-2">
              // We Carry More Than Just Good Data Recovery Skills
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
              Let&apos;s Recover Your Data!
            </h2>
          </div>
          <Link
            href="/contacts"
            className="shrink-0 inline-block border-2 border-white text-white font-bold text-sm px-8 py-3 rounded hover:bg-white hover:text-[#0072ff] transition-colors duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </section>

    </main>
  );
}
