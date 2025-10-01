import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { SplineSceneBasic } from '../../../components/ui/spline-scene-basic';
import { DynamicTextSlider } from '@/components/ui/dynamic-text-slider';

const HeroSection = () => {
  const [currentValueProp, setCurrentValueProp] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(110);
  const whatsappNumber = '573006719235'; // +57 (CO) + número provisto 3006719235
  const whatsappText = encodeURIComponent('Hola, me interesa una cotización estratégica para mi sitio web. Mi nombre es [Tu nombre]. ¿Podemos coordinar una llamada esta semana?');

  const valuePropositions = [
    {
      title: "Aumenta conversiones hasta 300%",
      subtitle: "Sitios web que convierten visitantes en clientes",
      metric: "+300%",
      description: "Conversiones"
    },
    {
      title: "Reduce tiempo de carga 85%",
      subtitle: "Rendimiento optimizado para máxima velocidad",
      metric: "85%",
      description: "Más rápido"
    },
    {
      title: "ROI promedio de 450%",
      subtitle: "Inversión que genera resultados medibles",
      metric: "450%",
      description: "ROI promedio"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueProp((prev) => (prev + 1) % valuePropositions?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setSliderHeight(mq.matches ? 78 : 110);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
    } else {
      // Safari fallback
      mq.addListener(update);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', update);
      } else {
        mq.removeListener(update);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-start justify-start md:items-center md:justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden overflow-x-hidden pt-20 md:pt-0 pb-20 md:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
            

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-gilroy font-bold text-secondary leading-tight">
                Sitios web que
                <DynamicTextSlider
                  text="transforman negocios"
                  className="block text-gray-400 font-gilroy font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                  height={sliderHeight}
                />
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-full md:max-w-xl">
                Creamos experiencias digitales que convierten visitantes en clientes y aceleran el crecimiento de tu empresa con resultados medibles.
              </p>
            </motion.div>

            {/* Animated Value Propositions */}
            <motion.div
              key={currentValueProp}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-6 card-elevated"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-gilroy font-bold text-yellow-500">
                      {valuePropositions?.[currentValueProp]?.metric}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-gilroy font-semibold text-secondary">
                    {valuePropositions?.[currentValueProp]?.title}
                  </h3>
                  <p className="text-text-secondary">
                    {valuePropositions?.[currentValueProp]?.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Button
                asChild
                variant="default"
                size="xl"
                iconName="ArrowRight"
                iconPosition="right"
                className="rounded-full px-6 sm:px-8 py-4 text-base w-full sm:w-auto bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-primary/40 border border-primary/20"
              >
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer">
                  Solicitar Cotización
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="xl"
                iconName="Play"
                iconPosition="left"
                className="group border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 sm:px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <Link to="/services">Ver Servicios</Link>
                </span>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 mb-12"
            >
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="text-success" />
                <span>Entrega 21 días</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-text-secondary">
                <Icon name="Award" size={16} className="text-success" />
                <span>Soporte dedicado</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <SplineSceneBasic />
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-text-secondary underline">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={20} className="text-text-secondary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;