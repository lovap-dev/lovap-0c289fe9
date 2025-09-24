import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { SplineSceneBasic } from '../../../components/ui/spline-scene-basic';

const HeroSection = () => {
  const [currentValueProp, setCurrentValueProp] = useState(0);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Desarrollo Web Estratégico</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-gilroy font-bold text-secondary leading-tight">
                Sitios web que
                <span className="block text-primary">impulsan negocios</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
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
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-gilroy font-bold text-primary">
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="text-lg px-8 py-4"
              >
                Solicitar Cotización
              </Button>
              
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="text-lg px-8 py-4 w-full sm:w-auto"
                >
                  Ver Servicios
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="text-success" />
                <span>Entrega 30 días</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Award" size={16} className="text-success" />
                <span>Garantía 1 año</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
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
          <span className="text-sm text-text-secondary">Descubre más</span>
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