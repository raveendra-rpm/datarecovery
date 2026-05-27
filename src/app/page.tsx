import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/ui/LogoMarquee';
import AboutSection from '@/components/sections/AboutSection';
import DataRecoveryProcess from '@/components/sections/DataRecoveryProcess';

// Generic skeleton for loading sections to prevent layout shift (CLS)
const SectionSkeleton = ({ heightClass = "h-[600px]" }) => (
  <div className={`w-full ${heightClass} bg-slate-50 animate-pulse`} />
);

// Below-fold sections: code-split to reduce initial JS bundle
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { loading: () => <SectionSkeleton heightClass="h-[500px]" /> });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), { loading: () => <SectionSkeleton heightClass="h-[300px]" /> });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), { loading: () => <SectionSkeleton heightClass="h-[700px]" /> });
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'), { loading: () => <SectionSkeleton heightClass="h-[800px]" /> });
const CompanyOverview = dynamic(() => import('@/components/sections/CompanyOverview'), { loading: () => <SectionSkeleton heightClass="h-[600px]" /> });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { loading: () => <SectionSkeleton heightClass="h-[700px]" /> });
const SEOServices = dynamic(() => import('@/components/sections/SEOServices'), { loading: () => <SectionSkeleton heightClass="h-[400px]" /> });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LogoMarquee />
      <AboutSection />
      <DataRecoveryProcess />
      <FAQSection />
      <StatsSection />
      <WhyChooseUs />
      <PricingSection />
      <CompanyOverview />
      <TestimonialsSection />
      <SEOServices />
    </main>
  );
}
