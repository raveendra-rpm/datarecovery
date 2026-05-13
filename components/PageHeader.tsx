'use client';
import React from 'react';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { publicPath } from '@/lib/site';

interface PageHeaderProps {
  title: string;
  breadcrumb?: { label: string; href?: string }[]; // optional breadcrumb items
  backgroundImage: string; // path relative to /public
}

export default function PageHeader({ title, breadcrumb = [], backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative bg-[#0b0c2a] text-white py-24 overflow-hidden border-b-4 border-blue-600">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${publicPath(backgroundImage)}')` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        {breadcrumb.length > 0 && (
          <div className="mt-4 md:mt-0 text-sm font-semibold tracking-wider flex items-center space-x-2 text-slate-300">
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.href ? (
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-blue-400">{item.label}</span>
                )}
                {idx < breadcrumb.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
