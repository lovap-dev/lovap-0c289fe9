import React from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceGrid from './components/ServiceGrid';
// import ROICalculator from './components/ROICalculator';
import PortfolioShowcase from './components/PortfolioShowcase';
import ProcessOverview from './components/ProcessOverview';
import TechnicalSpecs from './components/TechnicalSpecs';
import ComparisonMatrix from './components/ComparisonMatrix';
import CTASection from './components/CTASection';
import Footer from '../../components/ui/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <ServiceHero />
        <ServiceGrid />
        {/* <ROICalculator /> */}
        <PortfolioShowcase />
        {/* <ProcessOverview />  */}
        <TechnicalSpecs />
        <ComparisonMatrix />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;