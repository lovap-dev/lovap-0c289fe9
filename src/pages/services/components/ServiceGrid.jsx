import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceGrid = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'landing-pages',
      title: 'Landing Pages de Alto Rendimiento',
      description: 'Páginas de aterrizaje optimizadas para conversión que transforman visitantes en clientes con tasas de conversión superiores al 15%.',
      icon: 'Target',
      features: [
        'Optimización A/B testing integrada',
        'Carga en menos de 2 segundos',
        'Formularios inteligentes con validación',
        'Integración con CRM y analytics'
      ],
      metrics: {
        conversion: '15-25%',
        loadTime: '<2s',
        roi: '300-500%'
      },
      price: 'Desde €2,500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
    },
    {
      id: 'corporate-sites',
      title: 'Sitios Web Corporativos',
      description: 'Presencia digital profesional que construye autoridad de marca y genera confianza en decisores empresariales.',
      icon: 'Building2',
      features: [
        'Diseño responsive premium',
        'CMS personalizado y fácil de usar',
        'SEO técnico avanzado',
        'Integración con sistemas empresariales'
      ],
      metrics: {
        conversion: '8-12%',
        loadTime: '<3s',
        roi: '200-400%'
      },
      price: 'Desde €5,000',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    {
      id: 'custom-development',
      title: 'Desarrollo a Medida',
      description: 'Aplicaciones web personalizadas que resuelven desafíos específicos de negocio con arquitectura escalable.',
      icon: 'Code2',
      features: [
        'Arquitectura escalable y modular',
        'APIs RESTful y GraphQL',
        'Integración con terceros',
        'Documentación técnica completa'
      ],
      metrics: {
        conversion: '20-35%',
        loadTime: '<2.5s',
        roi: '400-800%'
      },
      price: 'Desde €8,000',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
    },
    {
      id: 'branding',
      title: 'Identidad Digital y Branding',
      description: 'Sistemas de identidad visual cohesivos que comunican valor de marca y diferenciación competitiva.',
      icon: 'Palette',
      features: [
        'Sistema de diseño completo',
        'Guías de marca digitales',
        'Assets optimizados para web',
        'Consistencia multi-plataforma'
      ],
      metrics: {
        conversion: '10-18%',
        loadTime: '<1.5s',
        roi: '250-450%'
      },
      price: 'Desde €3,500',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80'
    },
    {
      id: 'integrations',
      title: 'Integraciones y Automatización',
      description: 'Conexiones inteligentes entre sistemas que optimizan flujos de trabajo y eliminan tareas manuales.',
      icon: 'Workflow',
      features: [
        'APIs y webhooks personalizados',
        'Automatización de procesos',
        'Sincronización de datos en tiempo real',
        'Monitoreo y alertas inteligentes'
      ],
      metrics: {
        conversion: '25-40%',
        loadTime: '<1s',
        roi: '500-1000%'
      },
      price: 'Desde €4,000',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Servicios Especializados para 
            <span className="text-primary"> Cada Objetivo</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cada servicio está diseñado para resolver desafíos específicos de negocio con métricas medibles y ROI comprobado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`group relative bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                activeService === index
                  ? 'border-primary shadow-card-elevated-strong scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-card-elevated'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl transition-colors ${
                    activeService === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-secondary'
                  }`}>
                    <Icon name={service?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-gilroy font-bold text-secondary group-hover:text-secondary transition-colors">
                      {service?.title}
                    </h3>
                    <div className="text-secondary font-semibold">{service?.price}</div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service?.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-primary">{service?.metrics?.conversion}</div>
                    <div className="text-xs text-text-secondary">Conversión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-primary">{service?.metrics?.loadTime}</div>
                    <div className="text-xs text-text-secondary">Carga</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-primary">{service?.metrics?.roi}</div>
                    <div className="text-xs text-text-secondary">ROI</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="Calculator"
                    iconPosition="left"
                    className="bg-primary text-primary-foreground hover:bg-accent"
                  >
                    Calcular ROI
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Ver Casos de Estudio
                  </Button>
                </div>
              </div>

              {activeService === index && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full">
                  <Icon name="Star" size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Garantía de satisfacción 100% o reembolso completo</span>
          </div>
          <div className="space-y-4">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Consulta Estratégica Gratuita
            </Button>
            <p className="text-sm text-text-secondary">
              Sin compromiso • Análisis personalizado • Respuesta en 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;