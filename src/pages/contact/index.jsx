import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import QuoteRequestForm from './components/QuoteRequestForm';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import TrustSignals from './components/TrustSignals';
import FloatingCTA from './components/FloatingCTA';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Lovap Corporate</title>
        <meta name="description" content="Get in touch with Lovap Corporate. Request a quote, ask questions, or schedule a consultation with our experts." />
        <meta name="keywords" content="contact lovap, get quote, consultation, business inquiry" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ContactHero />
          <ContactMethods />
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 py-16">
            <QuoteRequestForm />
            <ContactForm />
          </div>
          <LocationInfo />
          <TrustSignals />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
};

export default ContactPage;