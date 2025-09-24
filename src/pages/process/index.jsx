import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcessHero from './components/ProcessHero';
import ProcessTimelineNew from './components/ProcessTimelineNew';
import ProjectTypes from './components/ProjectTypes';
import QualityAssurance from './components/QualityAssurance';
import ClientTestimonials from './components/ClientTestimonials';
import ProcessCTA from './components/ProcessCTA';

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Proceso de Desarrollo Web | Metodología Transparente | Lovap Corporate</title>
        <meta 
          name="description" 
          content="Descubre nuestra metodología probada de 5 fases para desarrollo web. Proceso transparente con garantía de calidad, cronogramas detallados y soporte 24/7. Más de 150 proyectos exitosos." 
        />
        <meta name="keywords" content="proceso desarrollo web, metodología web, fases desarrollo, calidad web, cronograma proyecto, desarrollo transparente" />
        <meta property="og:title" content="Proceso de Desarrollo Web Transparente | Lovap Corporate" />
        <meta property="og:description" content="Metodología probada de 6 fases con transparencia total. Descubrimiento, diseño, desarrollo, testing, lanzamiento y soporte. 98% satisfacción cliente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovapcorporate.com/process" />
        <link rel="canonical" href="https://lovapcorporate.com/process" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ProcessHero />
          <ProcessTimelineNew />
          <ProjectTypes />
          <QualityAssurance />
          <ClientTestimonials />
          <ProcessCTA />
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
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
                <span className="text-xl font-gilroy font-bold">Lovap Corporate</span>
              </div>
              <p className="text-white/70 mb-4">
                Transformando ideas en experiencias digitales excepcionales
              </p>
              <p className="text-white/50 text-sm">
                © {new Date()?.getFullYear()} Lovap Corporate. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProcessPage;