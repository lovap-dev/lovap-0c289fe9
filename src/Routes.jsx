import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import Homepage from './pages/homepage';
import ServicesPage from './pages/services';
import ProcessPage from './pages/process';
import ContactPage from './pages/contact';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;