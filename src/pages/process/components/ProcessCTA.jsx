import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessCTA = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Cronograma Garantizado",
      description: "Cumplimos los plazos prometidos o trabajamos sin costo adicional"
    },
    {
      icon: "Shield",
      title: "Calidad Asegurada",
      description: "30 días de garantía con revisiones ilimitadas incluidas"
    },
    {
      icon: "Users",
      title: "Equipo Dedicado",
      description: "Profesionales senior asignados exclusivamente a tu proyecto"
    },
    {
      icon: "Headphones",
      title: "Soporte 24/7",
      description: "Comunicación directa con el equipo durante todo el proceso"
    }
  ];

  const processHighlights = [
    "Metodología probada en +150 proyectos exitosos",
    "Transparencia total con acceso a herramientas de seguimiento",
    "Puntos de control de calidad en cada fase",
    "Documentación técnica completa incluida",
    "Entrenamiento del equipo cliente sin costo adicional"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent/20 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold mb-6">
            ¿Listo para Transformar tu
            <span className="text-primary block lg:inline lg:ml-4">
              Presencia Digital?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Únete a más de 150 empresas que han confiado en nuestra metodología transparente 
            para crear experiencias web que generan resultados reales de negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Agendar Consultoría Estratégica
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Descargar Guía de Metodología
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-primary" />
              <span>Consultoría inicial gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Respuesta en menos de 24 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span>Sin compromiso inicial</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-gilroy font-semibold text-white mb-2">
                {benefit?.title}
              </h3>
              <p className="text-sm text-white/70">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Highlights */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-gilroy font-bold text-center mb-8">
              ¿Por Qué Elegir Nuestra Metodología?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {processHighlights?.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-xl font-gilroy font-semibold mb-6">
            ¿Tienes Preguntas Sobre Nuestro Proceso?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:lovap.dev@gmail.com"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Icon name="Mail" size={20} />
              <span>lovap.dev@gmail.com</span>
            </a>
            <a
              href="tel:+34900123456"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Icon name="Phone" size={20} />
              <span>+34 900 123 456</span>
            </a>
            <a
              href="https://wa.me/34900123456"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Final Trust Signal */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Más de 150 proyectos exitosos • 98% de satisfacción del cliente • Soporte técnico 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessCTA;