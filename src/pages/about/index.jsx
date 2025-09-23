import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import ClientLogosSection from './components/ClientLogosSection';
import TimelineSection from './components/TimelineSection';
import CTASection from './components/CTASection';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Lovap Corporate | Socios Estratégicos en Desarrollo Web</title>
        <meta name="description" content="Conoce al equipo Lovap: expertos en desarrollo web que transforman visiones empresariales en experiencias digitales exitosas. 150+ proyectos, 98% satisfacción cliente." />
        <meta name="keywords" content="equipo desarrollo web, agencia digital España, socios tecnológicos, desarrollo web profesional, equipo experto React" />
        <meta property="og:title" content="Sobre Nosotros - Lovap Corporate | Socios Estratégicos en Desarrollo Web" />
        <meta property="og:description" content="Conoce al equipo Lovap: expertos en desarrollo web que transforman visiones empresariales en experiencias digitales exitosas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovap.es/about" />
        <link rel="canonical" href="https://lovap.es/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TeamSection />
          <ValuesSection />
          <ClientLogosSection />
          <TimelineSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default AboutPage;