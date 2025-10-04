import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import QuoteRequestForm from './components/QuoteRequestForm';
import TrustSignals from './components/TrustSignals';
import FloatingCTA from './components/FloatingCTA';
import Footer from '../../components/ui/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Methods */}
        <ContactMethods />
        
        {/* Trust Signals 
          <TrustSignals />*/}
        
        {/* Quote Request Form */}
        <div id="quote-form">
          <QuoteRequestForm />
        </div>
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;