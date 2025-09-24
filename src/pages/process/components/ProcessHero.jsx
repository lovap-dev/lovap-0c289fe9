import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="GitBranch" size={16} />
            <span>Metodología Transparente</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-gilroy font-bold text-secondary mb-6 leading-tight">
            Nuestro Proceso de
            <span className="text-primary block lg:inline lg:ml-4">
              Desarrollo Web
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-text-primary/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra metodología probada que combina excelencia técnica con resultados de negocio medibles. 
            Cada fase está diseñada para maximizar el ROI y minimizar los riesgos del proyecto.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-1">5</div>
              <div className="text-sm text-text-primary/70">Fases Estructuradas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-1">98%</div>
              <div className="text-sm text-text-primary/70">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-text-primary/70">Soporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-1">45</div>
              <div className="text-sm text-text-primary/70">Días Promedio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
            >
              Agendar Consultoría
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
            >
              Descargar Metodología
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;