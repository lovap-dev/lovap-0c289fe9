import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'ROI Comprobado',
      description: 'Promedio de 400% ROI en los primeros 12 meses'
    },
    {
      icon: 'Clock',
      title: 'Entrega Rápida',
      description: 'Proyectos completados en 4-8 semanas'
    },
    {
      icon: 'Shield',
      title: 'Garantía Total',
      description: 'Satisfacción 100% o reembolso completo'
    },
    {
      icon: 'Users',
      title: 'Equipo Experto',
      description: 'Especialistas con +5 años de experiencia'
    }
  ];

  const urgencyFactors = [
    'Solo 3 proyectos disponibles este mes',
    'Consulta estratégica gratuita por tiempo limitado',
    'Descuento del 15% para proyectos iniciados antes del 31 de diciembre'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Oferta Limitada - Diciembre 2024</span>
          </div>
          
          <h2 className="text-3xl lg:text-6xl font-gilroy font-bold mb-6">
            ¿Listo para 
            <span className="text-primary"> Transformar</span> tu Negocio?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Únete a más de 150 empresas que han multiplicado sus conversiones y ingresos con nuestras soluciones estratégicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-4"
            >
              Consulta Estratégica Gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Calcular ROI Estimado
            </Button>
          </div>

          {/* Urgency Indicators */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Clock" size={20} className="text-primary" />
              <span className="font-gilroy font-bold text-lg">Disponibilidad Limitada</span>
            </div>
            <div className="space-y-2">
              {urgencyFactors?.map((factor, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                  <Icon name="CheckCircle" size={16} className="text-primary" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-gilroy font-bold mb-2">{benefit?.title}</h3>
              <p className="text-gray-300 text-sm">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary rounded-xl">
                <Icon name="Phone" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-gilroy font-bold">Llamada Directa</h3>
                <p className="text-gray-300">Habla directamente con un especialista</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">Respuesta inmediata</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">Análisis personalizado en vivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">Propuesta inmediata</span>
              </div>
            </div>
            <Button
              variant="outline"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              className="mt-6 border-white/30 text-white hover:bg-white/10"
            >
              +34 900 123 456
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary rounded-xl">
                <Icon name="Calendar" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-gilroy font-bold">Reunión Virtual</h3>
                <p className="text-gray-300">Agenda una videollamada estratégica</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">30 minutos de consultoría gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">Análisis de competencia incluido</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm">Roadmap personalizado</span>
              </div>
            </div>
            <Button
              variant="outline"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
              className="mt-6 border-white/30 text-white hover:bg-white/10"
            >
              Agendar Reunión
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-8 mb-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-gilroy font-bold text-primary">150+</div>
              <div className="text-xs text-gray-400">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy font-bold text-primary">98%</div>
              <div className="text-xs text-gray-400">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy font-bold text-primary">400%</div>
              <div className="text-xs text-gray-400">ROI Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy font-bold text-primary">2h</div>
              <div className="text-xs text-gray-400">Tiempo Respuesta</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Garantía de satisfacción 100% • Sin letra pequeña • Resultados comprobados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;