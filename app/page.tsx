import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import AboutSection from '@/components/AboutSection';
import DataRecoveryProcess from '@/components/DataRecoveryProcess';

// Below-fold sections: code-split to reduce initial JS bundle
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const StatsSection = dynamic(() => import('@/components/StatsSection'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));
const CompanyOverview = dynamic(() => import('@/components/CompanyOverview'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const SEOServices = dynamic(() => import('@/components/SEOServices'));

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
