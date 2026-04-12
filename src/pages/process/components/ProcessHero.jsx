import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Hero } from '@/components/ui/hero-1';

const AnimatedText = () => {
  const texts = [
    'Ideas en Soluciones',
    'Diseños en Experiencias',
    'Prototipos en Productos',
    'Código en Valor',
    'Visiones en Realidad'
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

  const title = (
    <>
      Transformamos
      <span className="block mt-2">
        <AnimatedText />
      </span>
    </>
  );

  return (
    <AuroraBackground appearance="dark" showRadialGradient className="min-h-screen">
      <Hero
        eyebrow="Sin Letras Pequeñas"
        title={title}
        subtitle="Nuestra metodología probada garantiza un equilibrio entre tecnología de primer nivel y objetivos de negocio. Diseñamos cada etapa para ofrecer resultados medibles, mayor retorno y menor riesgo."
        ctaLabel="Agendar Consultoría Gratuita"
        onCtaClick={handleWhatsAppContact}
        secondaryCtaLabel="Ver Nuestros Servicios"
        onSecondaryCtaClick={handleGoToServices}
        surface="transparent"
        className="py-16 lg:py-24 flex-1 justify-center"
      />
    </AuroraBackground>
  );
};

export default ProcessHero;