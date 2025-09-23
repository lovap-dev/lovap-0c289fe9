import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: 'TechFlow Solutions',
      industry: 'Software B2B',
      service: 'Landing Page Optimizada',
      challenge: 'Baja conversión en campañas de Google Ads con tasa del 1.2% y alto costo por adquisición.',
      solution: 'Rediseño completo con enfoque en UX/UI, optimización de formularios y implementación de pruebas A/B.',
      results: {
        conversionBefore: '1.2%',
        conversionAfter: '8.7%',
        leadIncrease: '+625%',
        costReduction: '-73%',
        roi: '450%'
      },
      timeline: '6 semanas',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      testimonial: `"El impacto fue inmediato. En el primer mes recuperamos la inversión y ahora generamos 6x más leads cualificados con el mismo presupuesto publicitario."`,
      clientName: 'María González',
      clientRole: 'Directora de Marketing'
    },
    {
      id: 2,
      client: 'Innovate Consulting',
      industry: 'Consultoría Empresarial',
      service: 'Sitio Web Corporativo',
      challenge: 'Sitio web desactualizado que no transmitía profesionalidad ni generaba confianza en clientes enterprise.',
      solution: 'Desarrollo de sitio corporativo premium con CMS personalizado, integración CRM y optimización SEO.',
      results: {
        conversionBefore: '2.1%',
        conversionAfter: '12.4%',
        leadIncrease: '+490%',
        costReduction: '-45%',
        roi: '320%'
      },
      timeline: '10 semanas',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      testimonial: `"Nuestro nuevo sitio web se ha convertido en nuestra mejor herramienta de ventas. Los clientes nos perciben como líderes en el sector."`,
      clientName: 'Carlos Ruiz',
      clientRole: 'CEO'
    },
    {
      id: 3,
      client: 'EcoTech Industries',
      industry: 'Tecnología Sostenible',
      service: 'Desarrollo a Medida',
      challenge: 'Necesidad de plataforma personalizada para gestión de proyectos sostenibles con múltiples stakeholders.',
      solution: 'Aplicación web custom con dashboard interactivo, sistema de reportes automatizado y API para integraciones.',
      results: {
        conversionBefore: '3.5%',
        conversionAfter: '18.2%',
        leadIncrease: '+420%',
        costReduction: '-60%',
        roi: '680%'
      },
      timeline: '14 semanas',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      testimonial: `"La plataforma ha revolucionado nuestra operación. Hemos reducido tiempos administrativos en 60% y mejorado la satisfacción del cliente significativamente."`,
      clientName: 'Ana Martín',
      clientRole: 'Directora de Operaciones'
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Casos de Éxito 
            <span className="text-primary"> Comprobados</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resultados reales de clientes que han transformado su negocio con nuestras soluciones estratégicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Case Study Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {caseStudies?.map((caseStudy, index) => (
                <button
                  key={caseStudy?.id}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCase === index
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-gilroy font-bold text-secondary">{caseStudy?.client}</div>
                    <div className="text-sm text-text-secondary">{caseStudy?.industry}</div>
                    <div className="text-xs text-primary font-medium">{caseStudy?.service}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-card-elevated overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={currentCase?.image}
                  alt={`Caso de estudio ${currentCase?.client}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {currentCase?.service}
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {currentCase?.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-gilroy font-bold text-white mb-2">
                    {currentCase?.client}
                  </h3>
                  <p className="text-white/90">{currentCase?.industry}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="AlertCircle" size={20} className="text-error mr-2" />
                        Desafío
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {currentCase?.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="text-warning mr-2" />
                        Solución
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {currentCase?.solution}
                      </p>
                    </div>

                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-4 flex items-center">
                        <Icon name="MessageSquare" size={20} className="text-primary mr-2" />
                        Testimonio
                      </h4>
                      <blockquote className="text-text-secondary italic leading-relaxed mb-4">
                        {currentCase?.testimonial}
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-secondary">{currentCase?.clientName}</div>
                          <div className="text-sm text-text-secondary">{currentCase?.clientRole}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-gilroy font-bold text-secondary mb-4 flex items-center">
                        <Icon name="TrendingUp" size={20} className="text-success mr-2" />
                        Resultados Medibles
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-success/10 rounded-xl">
                          <div>
                            <div className="text-sm text-text-secondary">Tasa de Conversión</div>
                            <div className="text-xs text-text-secondary">
                              {currentCase?.results?.conversionBefore} → {currentCase?.results?.conversionAfter}
                            </div>
                          </div>
                          <div className="text-2xl font-gilroy font-bold text-success">
                            {currentCase?.results?.leadIncrease}
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                          <div>
                            <div className="text-sm text-text-secondary">Reducción de Costos</div>
                            <div className="text-xs text-text-secondary">Costo por adquisición</div>
                          </div>
                          <div className="text-2xl font-gilroy font-bold text-primary">
                            {currentCase?.results?.costReduction}
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-warning/10 rounded-xl">
                          <div>
                            <div className="text-sm text-text-secondary">ROI Anual</div>
                            <div className="text-xs text-text-secondary">Retorno de inversión</div>
                          </div>
                          <div className="text-2xl font-gilroy font-bold text-warning">
                            {currentCase?.results?.roi}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="default"
                        fullWidth
                        iconName="FileText"
                        iconPosition="left"
                        className="bg-primary text-primary-foreground hover:bg-accent"
                      >
                        Descargar Caso Completo
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Solicitar Caso Similar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Icon name="Award" size={16} />
            <span>Resultados promedio: +400% ROI en los primeros 12 meses</span>
          </div>
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Ver Todos los Casos de Estudio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;