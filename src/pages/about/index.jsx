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
        <title>About Us - Lovap Corporate</title>
        <meta name="description" content="Learn about Lovap Corporate's mission, values, and the expert team behind our success." />
        <meta name="keywords" content="about lovap, company history, team, values, mission" />
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