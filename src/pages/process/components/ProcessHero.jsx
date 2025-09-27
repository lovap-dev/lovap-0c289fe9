import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

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
    <section className="relative bg-gradient-to-br from-background via-muted/10 to-primary/5 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/6 w-12 h-12 border border-secondary/10 rounded-full"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-subtle hover:shadow-card transition-all duration-300">
            <Icon name="GitBranch" size={16} className="text-primary" />
            <span className="font-semibold">Metodología Transparente</span>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-gilroy font-bold text-secondary mb-8 leading-tight">
            Nuestro Proceso de
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block lg:inline lg:ml-4">
              Desarrollo Web
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-lg lg:text-xl text-text-primary/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra metodología probada que combina excelencia técnica con resultados de negocio medibles. 
            Cada fase está diseñada para maximizar el ROI y minimizar los riesgos del proyecto.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:shadow-card transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">6</div>
              <div className="text-sm text-text-primary/70 font-medium">Fases Estructuradas</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-success/5 to-transparent border border-success/10 hover:shadow-card transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-success mb-1">98%</div>
              <div className="text-sm text-text-primary/70 font-medium">Satisfacción Cliente</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:shadow-card transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-text-primary/70 font-medium">Soporte Técnico</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/5 to-transparent border border-accent/10 hover:shadow-card transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-accent-foreground mb-1">45</div>
              <div className="text-sm text-text-primary/70 font-medium">Días Promedio</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleWhatsAppContact}
              className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>Agendar Consultoría gratuita</span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleGoToServices}
              className="group border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <span>Ver Nuestros Servicios</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;