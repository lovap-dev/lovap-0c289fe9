import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceGrid from './components/ServiceGrid';
import ROICalculator from './components/ROICalculator';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import ProcessOverview from './components/ProcessOverview';
import TechnicalSpecs from './components/TechnicalSpecs';
import ComparisonMatrix from './components/ComparisonMatrix';
import CTASection from './components/CTASection';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Lovap Corporate</title>
        <meta name="description" content="Explore Lovap Corporate's comprehensive service offerings. From consulting to implementation, we deliver results." />
        <meta name="keywords" content="business services, consulting, implementation, professional services" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ServiceHero />
          <ServiceGrid />
          <ROICalculator />
          <CaseStudyShowcase />
          <ProcessOverview />
          <TechnicalSpecs />
          <ComparisonMatrix />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default ServicesPage;