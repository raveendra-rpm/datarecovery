import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import AboutSection from '@/components/AboutSection';
import DataRecoveryProcess from '@/components/DataRecoveryProcess';

// Generic skeleton for loading sections to prevent layout shift (CLS)
const SectionSkeleton = ({ heightClass = "h-[600px]" }) => (
  <div className={`w-full ${heightClass} bg-slate-50 animate-pulse`} />
);

// Below-fold sections: code-split to reduce initial JS bundle
const FAQSection = dynamic(() => import('@/components/FAQSection'), { loading: () => <SectionSkeleton heightClass="h-[500px]" /> });
const StatsSection = dynamic(() => import('@/components/StatsSection'), { loading: () => <SectionSkeleton heightClass="h-[300px]" /> });
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), { loading: () => <SectionSkeleton heightClass="h-[700px]" /> });
const PricingSection = dynamic(() => import('@/components/PricingSection'), { loading: () => <SectionSkeleton heightClass="h-[800px]" /> });
const CompanyOverview = dynamic(() => import('@/components/CompanyOverview'), { loading: () => <SectionSkeleton heightClass="h-[600px]" /> });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { loading: () => <SectionSkeleton heightClass="h-[700px]" /> });
const SEOServices = dynamic(() => import('@/components/SEOServices'), { loading: () => <SectionSkeleton heightClass="h-[400px]" /> });

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
