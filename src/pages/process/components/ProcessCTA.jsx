import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessCTA = () => {
  // Benefits grid fue extraído a `ProcessBenefits.jsx`
  const openWhatsApp = () => {
    const phone = '573006719235';
    const text = encodeURIComponent(
      'Hola, me gustaría agendar una consultoría estratégica para mi proyecto web. ¿Podemos coordinar?'
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const processHighlights = [
    "Metodología probada en +150 proyectos exitosos",
    "Transparencia total con acceso a herramientas de seguimiento",
    "Puntos de control de calidad en cada fase",
    "Documentación técnica completa incluida",
    "Entrenamiento del equipo cliente sin costo adicional"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            ¿Listo para Transformar tu Presencia Digital?
          </h2>
          <p className="text-lg lg:text-xl text-text-primary/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nuestra metodología transparente está diseñada para potenciar tu negocio. <br></br>
            Más que un proveedor, somos tu aliado tecnológico. <br></br> <br></br>
            Te acompañamos en cada fase del proceso para crear soluciones digitales que impulsan resultados
            medibles y un crecimiento sostenible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={openWhatsApp}
            >
              Agendar Consultoría Estratégica
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="left"
              className="border-border text-secondary hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <a href="/services">Ver Servicios</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-text-primary/70">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-primary" />
              <span>Consultoría inicial gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Respuesta el mismo día</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span>Sin compromiso inicial</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid movido a `ProcessBenefits.jsx` y renderizado antes de la línea de tiempo */}
      </div>
    </section>
  );
};

export default ProcessCTA;