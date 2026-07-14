import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { ChevronRight } from 'lucide-react';

export default function HTMLSitemap() {
  const sitemapSections = [
    {
      title: 'Our Company',
      links: [
        { label: 'About Us', href: '/who-we-are/about-us' },
        { label: 'Why Choose DSS', href: '/who-we-are/why-choose-us' },
        { label: 'Vision & Mission', href: '/who-we-are/vision-mission' },
        { label: 'Confidentiality', href: '/who-we-are/confidentiality' },
        { label: 'Quality Policy', href: '/who-we-are/quality-policy' },
        { label: 'Our Clients', href: '/dss/clients' },
        { label: 'Our Testimonials', href: '/dss/testimonials' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { label: 'CCTV Data Recovery', href: '/services/cctv-data-recovery' },
        { label: 'Desktop/Laptop Recovery', href: '/services/desktop-laptop-recovery' },
        { label: 'Encrypted Data Recovery', href: '/services/encrypted-data-recovery' },
        { label: 'External Hard Drive', href: '/services/external-hard-drive' },
        { label: 'Files Data Recovery', href: '/services/files-data-recovery' },
        { label: 'Flash Card Recovery', href: '/services/flash-card-recovery' },
        { label: 'RAID Server Recovery', href: '/services/raid-server-recovery' },
        { label: 'SSD Data Recovery', href: '/services/ssd-data-recovery' },
        { label: 'Tapes Data Recovery', href: '/services/tapes-data-recovery' },
      ],
    },
    {
      title: 'Data Recovery',
      links: [
        { label: 'Class 100 Clean Room', href: '/data-recovery/class-100-clean-room' },
        { label: 'Recovery Methods', href: '/data-recovery/recovery-methods' },
        { label: 'Recovery Procedure', href: '/data-recovery/recovery-procedure' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Pickup & Delivery', href: '/dss/pickup-and-delivery' },
        { label: 'Price & Cost', href: '/price-and-cost' },
        { label: 'FAQs', href: '/dss/faqs' },
        { label: 'Blog & News', href: '/blogs' },
        { label: 'Claims', href: '/claims' },
        { label: 'Contacts', href: '/contacts' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Sitemap"
        backgroundImage="/images/contact_banner.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'SITEMAP' },
        ]}
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Website Sitemap</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find everything you need on our website easily through our categorized sitemap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#004b9b] mb-6 border-b border-slate-100 pb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center text-slate-600 hover:text-[#38bdf8] transition-colors group text-sm md:text-base font-medium"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-slate-300 group-hover:text-[#38bdf8] transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
