import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePreview from './components/ServicePreview';
import PortfolioShowcase from './components/PortfolioShowcase';
import TestimonialCarousel from './components/TestimonialCarousel';
import TrustBadges from './components/TrustBadges';
import FloatingCTA from './components/FloatingCTA';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Lovap Corporate - Professional Business Solutions</title>
        <meta name="description" content="Transform your business with Lovap Corporate's comprehensive solutions. Expert services, proven results." />
        <meta name="keywords" content="business solutions, corporate services, professional consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicePreview />
          <PortfolioShowcase />
          <TestimonialCarousel />
          <TrustBadges />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
};

export default Homepage;