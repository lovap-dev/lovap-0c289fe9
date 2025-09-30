import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcessHero from './components/ProcessHero';
import ProcessTimelineNew from './components/ProcessTimelineNew';
import ProjectTypes from './components/ProjectTypes';
// import QualityAssurance from './components/QualityAssurance';
import TestimonialsSection from '../../components/ui/testimonials-columns-1';
import ProcessCTA from './components/ProcessCTA';
import FloatingCTA from '../homepage/components/FloatingCTA';
import Footer from '../../components/ui/Footer';

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Proceso de Desarrollo Web | Metodología Transparente | Lovap Corporate</title>
        <meta 
          name="description" 
          content="Descubre nuestra metodología probada de 6 fases para desarrollo web. Proceso transparente con garantía de calidad, cronogramas detallados y soporte 24/7. Más de 150 proyectos exitosos." 
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
          {/* <ProjectTypes />  */}
          {/* <QualityAssurance /> */}
          <TestimonialsSection />
          <ProcessCTA />
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </>
  );
};

export default ProcessPage;