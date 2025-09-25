import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import QuoteRequestForm from './components/QuoteRequestForm';
import TrustSignals from './components/TrustSignals';
import FloatingCTA from './components/FloatingCTA';

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
        
        {/* Trust Signals */}
        <TrustSignals />
        
        {/* Contact Form */}
        <div id="contact-form">
          <ContactForm />
        </div>
        
        {/* Quote Request Form */}
        <div id="quote-form">
          <QuoteRequestForm />
        </div>
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-primary-foreground"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-gilroy font-bold">
                  Lovap Corporate
                </span>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Transformamos visiones digitales en realidades de negocio. Socios estratégicos para el crecimiento online de empresas líderes en España.
              </p>
              <div className="text-sm text-white/60">
                © {new Date()?.getFullYear()} Lovap Corporate. Todos los derechos reservados.
              </div>
            </div>
            
            {/* Quick Contact */}
            <div>
              <h3 className="font-gilroy font-semibold mb-4">Contacto Rápido</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>+34 900 123 456</div>
                <div>lovap.dev@gmail.com</div>
                <div>Madrid, Barcelona, Valencia</div>
              </div>
            </div>
            
            {/* Emergency */}
            <div>
              <h3 className="font-gilroy font-semibold mb-4">Emergencias</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div className="text-red-400">+34 600 911 911</div>
                <div>24/7 Soporte Crítico</div>
                <div>emergencia@lovapcorporate.com</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;