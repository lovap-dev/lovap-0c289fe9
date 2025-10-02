import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceGrid = () => {
  // Destacar siempre "Sitios Web Corporativos"

const services = [
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Páginas enfocadas en una sola acción, captar clientes de manera inmediata con foco en conversión.',
    icon: 'Target',
    features: [
      'Optimización con pruebas A/B',
      'Carga ultrarrápida en menos de 2 segundos',
      'Formularios inteligentes que reducen leads no calificados',
      'Integración con CRM y plataformas de marketing'
    ],
    metrics: {
      conversion: '15-25%',
      loadTime: '<2s',
      roi: '300-500%'
    },
    price: 'Desde $100',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
  },
  {
    id: 'corporate-sites',
    title: 'Sitios Web Corporativos',
    description: 'El centro digital de tu empresa: credibilidad, autoridad y confianza en un sitio web hecho 100% a la medida en código puro.',
    icon: 'Building2',
    features: [
      'Diseño premium alineado a tu identidad de marca',
      'Código limpio y seguro (sin CMS ni plugins inseguros)',
      'Optimización SEO para posicionar en Google',
      'Escalable e integrable con sistemas empresariales'
    ],
    metrics: {
      conversion: '10-18%',
      loadTime: '<2s',
      roi: '400-600%'
    },
    price: 'Desde $250',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  },
  {
    id: 'custom-development',
    title: 'Desarrollo a Medida',
    description: 'Aplicaciones web únicas y escalables que resuelven retos específicos de negocio y aceleran tu crecimiento.',
    icon: 'Code2',
    features: [
      'Arquitectura modular y escalable',
      'Integraciones mediante APIs RESTful o GraphQL',
      'Automatización de procesos',
      'Documentación técnica clara y soporte continuo'
    ],
    metrics: {
      conversion: '20-30%',
      loadTime: '<2.5s',
      roi: '400-800%'
    },
    price: 'Desde $1000',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
  },
    /*{
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
    }*/
  ];

  // Índice fijo del servicio destacado
  const highlightedIndex = (() => {
    const i = services.findIndex((s) => s.id === 'corporate-sites');
    return i !== -1 ? i : 0;
  })();

  const buildWhatsAppUrl = (service) => {
    const phone = '573006719235';
    const templateLines = [
      `Hola, me interesa el servicio: ${service?.title}`,
      '',
      '¿Podrían compartirme una cotización?',
      '',
      'Datos para la cotización:',
      '- Tu nombre:',
      '- Nombre de tu Empresa/Emprendimiento:',
      '- Sitio web actual (si aplica):',
      '- Presupuesto estimado:',
      '- Descripción breve del proyecto:',
    ].filter(Boolean);

    const text = encodeURIComponent(templateLines.join('\n'));
    return `https://wa.me/${phone}?text=${text}`;
  };

  const buildGeneralWhatsAppUrl = () => {
    const phone = '573006719235';
    const templateLines = [
      'Hola, me gustaría agendar una Consulta Estratégica Gratuita.',
      '',
      'Datos para la consulta:',
      '- Tu nombre:',
      '- Nombre de tu Empresa/Emprendimiento:',
      '- Sitio web actual (si aplica):',
      '- Presupuesto estimado:',
      '- Descripción breve del proyecto:',
    ];

    const text = encodeURIComponent(templateLines.join('\n'));
    return `https://wa.me/${phone}?text=${text}`;
  };

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
              className={`group relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                index === highlightedIndex
                  ? 'border-primary shadow-card-elevated-strong scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-card-elevated'
              }`}
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl transition-colors ${
                    index === highlightedIndex ? 'bg-primary text-primary-foreground' : 'bg-muted text-secondary'
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
                      <Icon name="CheckCircle" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-secondary">{service?.metrics?.conversion}</div>
                    <div className="text-xs text-text-secondary">Conversión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-secondary">{service?.metrics?.loadTime}</div>
                    <div className="text-xs text-text-secondary">Carga</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-gilroy font-bold text-secondary">{service?.metrics?.roi}</div>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      const url = buildWhatsAppUrl(service);
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    aria-label={`Solicitar cotización de ${service?.title} por WhatsApp`}
                  >
                    Solicitar Cotización gratis
                  </Button>
                </div>
              </div>

              {index === highlightedIndex && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full">
                  <Icon name="Star" size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;