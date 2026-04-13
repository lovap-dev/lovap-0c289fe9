import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import QuoteRequestForm from './components/QuoteRequestForm';
import TrustSignals from './components/TrustSignals';
import FloatingCTA from '../homepage/components/FloatingCTA';
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

        {/* Destinos para enlaces del pie (fragmentos distintos = propósito claro) */}
        <section className="sr-only" aria-label="Información legal">
          <h2 className="sr-only">Información legal</h2>
          <p id="legal-privacidad">
            Para ejercer derechos de datos o consultas sobre privacidad, escríbenos desde el formulario de contacto.
          </p>
          <p id="legal-terminos">
            Para consultas sobre condiciones de servicio y contratación, utiliza el formulario de contacto.
          </p>
        </section>
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;