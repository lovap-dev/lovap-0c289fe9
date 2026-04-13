import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { DynamicTextSlider } from '@/components/ui/dynamic-text-slider';

const SplineSceneBasic = lazy(() =>
  import('../../../components/ui/spline-scene-basic').then((m) => ({ default: m.SplineSceneBasic }))
);

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
    const mqXl = window.matchMedia('(min-width: 1280px)');
    const update = () => {
      if (mqXl.matches) setSliderHeight(84);
      else if (mq.matches) setSliderHeight(70);
      else setSliderHeight(100);
    };
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      mqXl.addEventListener('change', update);
    } else {
      mq.addListener(update);
      mqXl.addListener(update);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', update);
        mqXl.removeEventListener('change', update);
      } else {
        mq.removeListener(update);
        mqXl.removeListener(update);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-gradient-to-b from-background via-background to-muted/80 pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5 hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col justify-center min-h-0 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 pb-24 md:pb-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-x-12 xl:gap-x-16 items-center">
          {/* Content — z-index por encima del Spline para que el titular no quede tapado */}
          <div className="relative z-20 min-w-0 space-y-5 md:space-y-6 xl:space-y-7 pr-0 lg:pr-2 xl:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 md:space-y-4 xl:space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy font-bold text-secondary leading-[1.1] tracking-tight lg:max-w-[min(100%,40ch)]">
                Sitios web que
                <DynamicTextSlider
                  text="transforman negocios"
                  className="block text-secondary/85 font-gilroy font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight"
                  height={sliderHeight}
                />
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-full md:max-w-lg lg:max-w-xl">
                Creamos experiencias digitales que convierten visitantes en clientes y aceleran el crecimiento de tu empresa con resultados medibles.
              </p>
            </motion.div>

            {/* Animated Value Propositions */}
            <motion.div
              key={currentValueProp}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 xl:p-8 card-elevated"
            >
              <div className="flex items-center space-x-4 xl:space-x-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center">
                    <span className="text-xl md:text-2xl xl:text-3xl font-gilroy font-bold text-yellow-500">
                      {valuePropositions?.[currentValueProp]?.metric}
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h2 className="text-base md:text-lg xl:text-xl font-gilroy font-semibold text-secondary">
                    {valuePropositions?.[currentValueProp]?.title}
                  </h2>
                  <p className="text-sm md:text-base xl:text-lg text-text-secondary">
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
                asChild
                variant="default"
                size="xl"
                iconName="ArrowRight"
                iconPosition="right"
                className="rounded-full px-8 py-4 text-base w-full sm:w-auto bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-primary/40 border border-primary/20"
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
                className="group border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 md:pt-4"
            >
              <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-text-secondary">
                <Icon name="Shield" size={18} className="text-success shrink-0" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-text-secondary">
                <Icon name="Clock" size={18} className="text-success shrink-0" />
                <span>Entrega 21 días</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-text-secondary">
                <Icon name="Award" size={18} className="text-success shrink-0" />
                <span>Soporte dedicado</span>
              </div>
            </motion.div>
          </div>

          {/* Visual — z-0 y recorte para que el canvas no invada la columna del texto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-0 hidden md:block w-full min-w-0 min-h-0 overflow-hidden rounded-2xl [&_.rounded-2xl]:h-[min(440px,46vh)] [&_.rounded-2xl]:lg:h-[min(480px,48vh)] [&_.rounded-2xl]:xl:h-[min(500px,50vh)]"
          >
            <Suspense
              fallback={
                <div
                  className="w-full min-h-[min(440px,46vh)] rounded-2xl border border-border/60 bg-muted/80 animate-pulse"
                  aria-hidden
                />
              }
            >
              <SplineSceneBasic />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;