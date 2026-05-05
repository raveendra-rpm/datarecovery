"use client";

import React from 'react';
import Link from 'next/link';

const services = [
  "Laptop Hard Disk Data Recovery",
  "Desktop Hard Disk Data Recovery",
  "External Hard Disk Data Recovery",
  "Remote Data Recovery Services",
  "Online Data Recovery Services",
  "Instant Data Recovery Services",
  "USB Hard Disk Data Recovery",
  "Server Hard Disk Data Recovery",
  "Disk Data Recovery",
  "Memory Card Data Recovery",
  "Water damaged hard disk data recovery",
  "Mini SD card data recovery",
  "Flash drive data recovery",
  "Fatal error showing hard disk data recovery",
  "Dead hard disk data recovery",
  "Video Data Recovery",
  "Logical hard disk data recovery",
  "Corrupted hard disk data recovery",
  "Firmware Damage hard disk data recovery",
  "Data Recovery Software",
  "Damaged hard disk data recovery",
  "SSD Hard Disk Data Recovery",
  "Mac Hard Disk Data Recovery",
  "CCTV Camera Hard Disk Data Recovery",
  "Raid Hard Disk Data Recovery",
  "Sata Hard Disk Data Recovery",
  "Professional Hard Disk Data Recovery",
  "Digital Media Hard Disk Data Recovery",
  "Free Data Recovery Support & Diagnosis",
  "Not Working Hard Disk Data Recovery",
  "Data Recovery from all Corrupted Hard Disk"
];

export default function SEOServices() {
  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1d1d1f] mb-4 tracking-tight">
            We Provide Following <span className="text-[#004B9B]">DATA Recovery Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF1A1A] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {services.map((service, index) => (
            <Link 
              href="#" 
              key={index}
              className="group relative px-5 py-2.5 bg-[#fbfbfd] border border-gray-200 rounded-full text-[14px] font-medium text-gray-600 hover:text-[#004B9B] hover:border-[#004B9B] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="relative z-10 capitalize">{service.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
