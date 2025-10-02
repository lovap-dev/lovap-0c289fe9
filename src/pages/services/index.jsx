import React from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceGrid from './components/ServiceGrid';
import PortfolioShowcase from './components/PortfolioShowcase';
import CaseStudyShowcase from '../homepage/components/CaseStudyShowcase';
import ProcessOverview from './components/ProcessOverview';
import QualityAssurance from '../process/components/QualityAssurance';
import ComparisonMatrix from './components/ComparisonMatrix';
import ProcessCTA from '../process/components/ProcessCTA';
import FloatingCTA from '../homepage/components/FloatingCTA';
import Footer from '../../components/ui/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        
        <ServiceHero />
        <ServiceGrid />
        <CaseStudyShowcase />
        <ProcessOverview />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;