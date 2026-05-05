import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import AboutSection from '@/components/AboutSection';
import DataRecoveryProcess from '@/components/DataRecoveryProcess';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PricingSection from '@/components/PricingSection';
import CompanyOverview from '@/components/CompanyOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import SEOServices from '@/components/SEOServices';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </main>
  );
}
