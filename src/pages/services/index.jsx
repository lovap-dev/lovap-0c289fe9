import React from 'react';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
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
  );
};

export default ServicesPage;