import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import PortfolioShowcase from './components/PortfolioShowcase';
import TestimonialCarousel from './components/TestimonialCarousel';
import TrustBadges from './components/TrustBadges';
import FloatingCTA from './components/FloatingCTA';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
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
        <meta name="keywords" content="desarrollo web, diseño web, conversiones, marketing digital, sitios corporativos, landing pages, España" />
        <meta property="og:title" content="Lovap Corporate - Desarrollo Web que Impulsa Negocios" />
        <meta property="og:description" content="Sitios web que convierten visitantes en clientes. ROI promedio 450%. Más de 150 empresas confían en nosotros." />
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

          {/* Service Preview */}
          <ServicePreview />

          {/* Portfolio Showcase */}
          <PortfolioShowcase />

          {/* Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Trust Badges */}
          <TrustBadges />
        </main>

        {/* Floating CTA */}
        <FloatingCTA />

        {/* Footer */}
        <footer className="bg-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
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
                  <span className="text-2xl font-gilroy font-bold">
                    Lovap Corporate
                  </span>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                  Transformamos ideas en experiencias digitales que impulsan el crecimiento empresarial. 
                  Más de 150 empresas confían en nosotros para sus proyectos más importantes.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white/80">Disponible 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-white/80">Respuesta en 24h</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-gilroy font-semibold mb-6">Servicios</h3>
                <ul className="space-y-3">
                  {[
                    'Landing Pages',
                    'Sitios Corporativos',
                    'Desarrollo Personalizado',
                    'Branding Digital',
                    'Optimización SEO',
                    'Mantenimiento Web'
                  ]?.map((service, idx) => (
                    <li key={idx}>
                      <a 
                        href="#" 
                        className="text-white/80 hover:text-primary transition-colors text-sm"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-gilroy font-semibold mb-6">Contacto</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="text-white/60 mb-1">Email</div>
                    <a 
                      href="mailto:hola@lovapcorporate.com" 
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      hola@lovapcorporate.com
                    </a>
                  </div>
                  <div className="text-sm">
                    <div className="text-white/60 mb-1">Teléfono</div>
                    <a 
                      href="tel:+34900123456" 
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      +34 900 123 456
                    </a>
                  </div>
                  <div className="text-sm">
                    <div className="text-white/60 mb-1">Horario</div>
                    <div className="text-white/80">
                      Lun - Vie: 9:00 - 18:00<br />
                      Sáb: 10:00 - 14:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 lg:mb-0">
                © {new Date()?.getFullYear()} Lovap Corporate. Todos los derechos reservados.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;