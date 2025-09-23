import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcessHero from './components/ProcessHero';
import ProcessTimeline from './components/ProcessTimeline';
import ProjectTypes from './components/ProjectTypes';
import QualityAssurance from './components/QualityAssurance';
import ClientTestimonials from './components/ClientTestimonials';
import ProcessCTA from './components/ProcessCTA';

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Process - Lovap Corporate</title>
        <meta name="description" content="Discover Lovap Corporate's proven methodology and quality assurance process for delivering exceptional results." />
        <meta name="keywords" content="business process, methodology, quality assurance, project management" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ProcessHero />
          <ProcessTimeline />
          <ProjectTypes />
          <QualityAssurance />
          <ClientTestimonials />
          <ProcessCTA />
        </main>
      </div>
    </>
  );
};

export default ProcessPage;