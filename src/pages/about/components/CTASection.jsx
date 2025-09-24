import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "MessageCircle",
      title: "Consulta Estratégica",
      description: "Agenda una llamada de 30 minutos para discutir tu proyecto y objetivos de negocio.",
      action: "Agendar Consulta",
      highlight: "Gratuita"
    },
    {
      id: 2,
      icon: "FileText",
      title: "Propuesta Personalizada",
      description: "Recibe una propuesta detallada con cronograma, presupuesto y estrategia específica.",
      action: "Solicitar Propuesta",
      highlight: "48h respuesta"
    },
    {
      id: 3,
      icon: "Users",
      title: "Conoce al Equipo",
      description: "Programa una reunión para conocer a los especialistas que trabajarán en tu proyecto.",
      action: "Reunión de Equipo",
      highlight: "Presencial/Virtual"
    }
  ];

  const whyChooseUs = [
    {
      icon: "Target",
      text: "Enfoque 100% orientado a resultados medibles"
    },
    {
      icon: "Clock",
      text: "Entregas 50% más rápidas que el promedio del mercado"
    },
    {
      icon: "Shield",
      text: "Garantía de satisfacción y soporte post-lanzamiento"
    },
    {
      icon: "TrendingUp",
      text: "ROI promedio de +340% en proyectos completados"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23B8FF65%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/20 text-secondary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Comienza tu Transformación Digital</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold mb-6">
            ¿Listo para Impulsar tu
            <span className="text-secondary bg-primary px-2 py-1 rounded-lg"> Crecimiento Digital?</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Únete a más de 120 empresas que han transformado sus negocios con Lovap. 
            Tu próximo proyecto exitoso está a solo una conversación de distancia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Solicitar Cotización Estratégica
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white/20 text-white hover:bg-white/10"
            >
              +34 900 123 456
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span>Consulta inicial gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-success" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <div key={method.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-bg/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon} size={24} className="text-secondary" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold mb-3">
                  {method.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-flex items-center space-x-1 bg-primary/20 text-secondary px-3 py-1 rounded-full text-sm font-inter font-medium">
                    <Icon name="Star" size={12} />
                    <span>{method.highlight}</span>
                  </span>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {method.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-gilroy font-bold mb-4">
              ¿Por Qué Elegir
              <span className="text-secondary bg-primary px-2 py-1 rounded-lg"> Lovap?</span>
            </h3>
            <p className="text-white/80">
              Más que una agencia, somos tu socio estratégico en el crecimiento digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-bg/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={reason.icon} size={20} className="text-secondary" />
                </div>
                <span className="text-white/90 font-inter">{reason.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg mb-2">
                150+
              </div>
              <div className="text-white/70 text-sm">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg mb-2">
                98%
              </div>
              <div className="text-white/70 text-sm">Satisfacción Cliente</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-primary mb-2">
                340%
              </div>
              <div className="text-white/70 text-sm">ROI Promedio</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-white/70 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;