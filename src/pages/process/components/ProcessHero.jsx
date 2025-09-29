import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AnimatedText = () => {
  const texts = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'E-Commerce',
    'Plataformas SaaS',
    'Sistemas Personalizados'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);
  
  return (
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const ProcessHero = () => {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`¡Hola! 👋 

Me interesa agendar una consultoría estratégica gratuita.

Estoy disponible para la consulta:
📅 Días preferidos: [Agregar días de preferencia]
🕐 Horarios disponibles: [Agregar horarios disponibles]

Espero coordinar una reunión pronto`);
    
    try {
      window.open(`https://wa.me/573006719235?text=${message}`, '_blank');
    } catch (error) {
      window.open('https://wa.me/573006719235', '_blank');
    }
  };

  const handleGoToServices = () => {
    navigate('/services');
  };

  return (
    <section className="relative bg-secondary py-24 lg:py-40 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground px-6 py-3 rounded-full text-sm font-medium mb-10 shadow-lg"
          >
            <Icon name="GitBranch" size={16} className="text-white" />
            <span className="font-semibold text-white">Metodología Transparente</span>
          </motion.div>

          {/* Enhanced Main Heading with Animated Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-gilroy font-bold text-white mb-10 leading-tight"
          >
            Nuestro Proceso de
            <span className="block mt-2">
              <AnimatedText />
            </span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Descubre nuestra metodología probada que combina excelencia técnica con resultados de negocio medibles. 
            Cada fase está diseñada para maximizar el ROI y minimizar los riesgos del proyecto.
          </motion.p>

          {/* Enhanced Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary/50 hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-gilroy font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">6</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Fases Estructuradas</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-success/50 hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-success mb-2">98%</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Satisfacción Cliente</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary/50 hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Soporte Técnico</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-accent mb-2">21</div>
              <div className="text-sm text-primary-foreground/70 font-medium">Días Promedio</div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleWhatsAppContact}
              className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>Agendar Consultoría Gratuita</span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleGoToServices}
              className="group border-2 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>Ver Nuestros Servicios</span>
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;