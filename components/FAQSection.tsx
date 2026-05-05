"use client";

import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const faqs = [
  {
    question: "What is data recovery?",
    answer: "Data recovery is the process of getting lost or unavailable data back from storage devices like hard drives, SSDs, USB drives, and more."
  },
  {
    question: "Why would I need data recovery services?",
    answer: "You might need data recovery services if you've accidentally deleted important files, your storage device has suffered physical damage, or your system has been compromised by a virus or malware."
  },
  {
    question: "What types of storage devices can be recovered?",
    answer: "We can recover data from a wide variety of devices including hard disk drives (HDDs), solid-state drives (SSDs), USB flash drives, memory cards, RAID arrays, and NAS devices."
  },
  {
    question: "Is there any data loss scenario that cannot be recovered?",
    answer: "While we have a very high success rate, severe physical damage where the magnetic platters are shattered or severely scored, or cases of secure overwriting, can sometimes make recovery impossible."
  },
  {
    question: "How long does the data recovery process take?",
    answer: "Standard recovery usually takes 3-5 business days. However, we also offer expedited services for urgent cases which can be completed in as little as 24-48 hours depending on the complexity."
  },
  {
    question: "Is my data safe and secure during the recovery process?",
    answer: "Absolutely. We follow strict security protocols and use secure, air-gapped environments. Your data is kept strictly confidential and is securely erased from our systems after you have verified the recovery."
  },
  {
    question: "How much does data recovery cost?",
    answer: "The cost depends on the type of device, the extent of the damage, and the complexity of the recovery. We provide a free initial evaluation and a firm quote before any work begins."
  },
  {
    question: "Can I attempt data recovery on my own using software tools?",
    answer: "While software tools exist, attempting recovery on a physically failing drive can cause irreversible damage and permanent data loss. We strongly recommend professional evaluation first."
  },
  {
    question: "What is the success rate of data recovery services?",
    answer: "We boast a success rate of over 95% for standard data recovery cases. Our advanced cleanroom technology and experienced engineers give you the best chance of getting your data back."
  },
  {
    question: "What precautions should I take to prevent data loss in the future?",
    answer: "Regularly back up your data to an external drive or cloud storage, use reliable antivirus software, and ensure your devices are protected from physical shocks, extreme temperatures, and moisture."
  },
  {
    question: "Do data recovery services work for both Mac and Windows systems?",
    answer: "Yes, we specialize in recovering data from all major operating systems, including Windows, macOS, Linux, and various server environments."
  },
  {
    question: "How can I choose the right data recovery service provider?",
    answer: "Look for providers with verifiable experience, certified cleanroom facilities, clear pricing structures, positive customer reviews, and a 'no data, no fee' policy."
  },
  {
    question: "What information do I need to provide to the data recovery service?",
    answer: "Provide as much detail as possible about how the data was lost, the type of files you need recovered, and any unusual sounds or behaviors the device exhibited before failure."
  },
  {
    question: "Is there any way to prevent data loss in the event of a disaster like a fire or flood?",
    answer: "The best prevention is a robust off-site backup strategy, such as cloud storage. For physical devices, using fireproof and waterproof safes can provide an extra layer of protection."
  },
  {
    question: "Can data recovery services retrieve data from a formatted drive?",
    answer: "In many cases, yes. As long as the formatted data hasn't been significantly overwritten by new data, our specialized tools can often reconstruct the lost file structures."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="w-full bg-white pt-24 pb-40 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-3 text-[#004b9b] text-xs font-extrabold tracking-[0.25em] uppercase mb-4">
            <span className="h-px w-8 bg-[#004b9b]/30" />
            GET ANSWERS
            <span className="h-px w-8 bg-[#004b9b]/30" />
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex flex-col rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 px-5 text-left bg-white hover:bg-white transition-colors duration-200"
                >
                  <span className={`font-bold text-[14px] md:text-[15px] ${isOpen ? 'text-[#004b9b]' : 'text-[#0f172a]'}`}>
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <ArrowUp size={16} strokeWidth={3} className="text-[#004b9b]" />
                    ) : (
                      <ArrowDown size={16} strokeWidth={3} className="text-[#b0b8c1]" />
                    )}
                  </span>
                </button>
                
                {/* Answer Box */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-white text-[#64748b] text-[14px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Background Watermark Header (similar to the image background text) */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[3rem] md:text-[6rem] font-black uppercase tracking-tighter whitespace-nowrap leading-none">
          Frequently Asked Questions
        </h2>
      </div>
    </section>
  );
}
