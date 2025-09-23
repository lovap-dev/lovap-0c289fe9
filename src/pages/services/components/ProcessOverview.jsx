import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Análisis Estratégico',
      duration: '1-2 semanas',
      description: 'Auditoría completa de tu situación actual, análisis de competencia y definición de objetivos medibles.',
      activities: [
        'Auditoría técnica y de conversión',
        'Análisis de competencia directa',
        'Definición de KPIs y métricas',
        'Mapeo de customer journey'
      ],
      icon: 'Search',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Estrategia y Planificación',
      duration: '1 semana',
      description: 'Desarrollo de estrategia personalizada con roadmap detallado y especificaciones técnicas.',
      activities: [
        'Estrategia de conversión personalizada',
        'Wireframes y arquitectura de información',
        'Especificaciones técnicas detalladas',
        'Plan de implementación por fases'
      ],
      icon: 'Target',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Diseño y Prototipado',
      duration: '2-3 semanas',
      description: 'Creación de diseños optimizados para conversión con prototipos interactivos y testing de usabilidad.',
      activities: [
        'Diseño UI/UX optimizado para conversión',
        'Prototipos interactivos de alta fidelidad',
        'Testing de usabilidad con usuarios reales',
        'Optimización mobile-first'
      ],
      icon: 'Palette',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Desarrollo Técnico',
      duration: '3-6 semanas',
      description: 'Implementación con las mejores prácticas de desarrollo, optimización de rendimiento y SEO técnico.',
      activities: [
        'Desarrollo con tecnologías modernas',
        'Optimización de velocidad de carga',
        'Implementación de SEO técnico',
        'Integración con herramientas de analytics'
      ],
      icon: 'Code2',
      color: 'success'
    },
    {
      id: 5,
      title: 'Testing y QA',
      duration: '1 semana',
      description: 'Pruebas exhaustivas en múltiples dispositivos y navegadores, optimización final de rendimiento.',
      activities: [
        'Testing cross-browser y responsive',
        'Pruebas de rendimiento y velocidad',
        'Testing de formularios y conversiones',
        'Auditoría de accesibilidad'
      ],
      icon: 'CheckCircle',
      color: 'warning'
    },
    {
      id: 6,
      title: 'Lanzamiento y Optimización',
      duration: 'Ongoing',
      description: 'Lanzamiento controlado con monitoreo en tiempo real y optimización continua basada en datos.',
      activities: [
        'Lanzamiento gradual y monitoreo',
        'Configuración de analytics avanzado',
        'A/B testing de elementos clave',
        'Optimización continua basada en datos'
      ],
      icon: 'Rocket',
      color: 'error'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-primary-foreground',
      success: 'bg-success text-success-foreground',
      warning: 'bg-warning text-warning-foreground',
      error: 'bg-error text-error-foreground'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Metodología 
            <span className="text-primary"> Probada</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Proceso estructurado de 6 fases que garantiza resultados medibles y minimiza riesgos en cada proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

          <div className="space-y-12">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-card-elevated hover:shadow-card-elevated-strong transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-xl ${getColorClasses(step?.color)}`}>
                        <Icon name={step?.icon} size={24} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-xl font-gilroy font-bold text-secondary">
                            {step?.title}
                          </h3>
                          <span className="text-sm bg-muted text-text-secondary px-3 py-1 rounded-full">
                            Fase {step?.id}
                          </span>
                        </div>
                        <div className="text-primary font-semibold">{step?.duration}</div>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {step?.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-gilroy font-semibold text-secondary">Actividades Clave:</h4>
                      <div className="space-y-2">
                        {step?.activities?.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="lg:hidden flex items-center space-x-4 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses(step?.color)}`}>
                    <Icon name={step?.icon} size={20} />
                  </div>
                  <div className="text-sm text-text-secondary">Fase {step?.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card-elevated">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-gilroy font-bold text-secondary mb-4">
                ¿Quieres conocer nuestro proceso en detalle?
              </h3>
              <p className="text-text-secondary mb-6">
                Descarga nuestra guía completa de metodología con templates, checklists y ejemplos reales de implementación.
              </p>
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span>Guía PDF de 24 páginas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={16} className="text-primary" />
                  <span>Templates incluidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>Lectura de 15 min</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="Download"
                iconPosition="left"
                className="bg-primary text-primary-foreground hover:bg-accent"
              >
                Descargar Guía Gratuita
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
              >
                Agendar Demo del Proceso
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Garantía de satisfacción en cada fase del proceso</span>
          </div>
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Iniciar Proyecto Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;