import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import CaseStudyShowcase from "./components/CaseStudyShowcase";
import TrustBadges from "./components/TrustBadges";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "../../components/ui/Footer";

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Lovap Corporate - Desarrollo Web Estratégico que Impulsa Negocios</title>
        <meta
          name="description"
          content="Creamos sitios web que convierten visitantes en clientes. Aumenta tus conversiones hasta 300% con nuestras soluciones digitales estratégicas. Consulta gratuita disponible."
        />
        <meta
          name="keywords"
          content="desarrollo web, diseño web, conversiones, marketing digital, sitios corporativos, landing pages, Colombia"
        />
        <meta property="og:title" content="Lovap Corporate - Desarrollo Web que Impulsa Negocios" />
        <meta
          property="og:description"
          content="Sitios web que convierten visitantes en clientes. ROI promedio 450%. Más de 150 empresas confían en nosotros."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovapcorporate.com" />
        <link rel="canonical" href="https://lovapcorporate.com" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Portfolio Showcase */}
          <CaseStudyShowcase />

          {/* Testimonial Carousel */}
          {/* <TestimonialCarousel /> */}

          {/* Trust Badges */}
          {/* <TrustBadges />  */}
        </main>

        {/* Floating CTA */}
        <FloatingCTA />

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
