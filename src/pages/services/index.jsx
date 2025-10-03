import React from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceGrid from './components/ServiceGrid';
import CaseStudyShowcase from '../homepage/components/CaseStudyShowcase';
import FloatingCTA from '../homepage/components/FloatingCTA';
import Footer from '../../components/ui/Footer';
import ContactHero from '../contact/components/ContactHero';
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        
        <ServiceHero />
        <ServiceGrid />
        <CaseStudyShowcase />
        <ContactHero/>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;