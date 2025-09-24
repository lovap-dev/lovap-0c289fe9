import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ComparisonMatrix = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const comparisonData = {
    categories: [
      {
        name: 'Diseño y UX',
        features: [
          { name: 'Diseño Responsive Premium', basic: false, professional: true, enterprise: true },
          { name: 'Prototipado Interactivo', basic: false, professional: true, enterprise: true },
          { name: 'Testing de Usabilidad', basic: false, professional: true, enterprise: true },
          { name: 'Sistema de Diseño Personalizado', basic: false, professional: false, enterprise: true },
          { name: 'Animaciones y Micro-interacciones', basic: false, professional: true, enterprise: true }
        ]
      },
      {
        name: 'Desarrollo Técnico',
        features: [
          { name: 'Código Limpio y Documentado', basic: true, professional: true, enterprise: true },
          { name: 'Optimización de Rendimiento', basic: 'Básica', professional: 'Avanzada', enterprise: 'Premium' },
          { name: 'SEO Técnico Avanzado', basic: false, professional: true, enterprise: true },
          { name: 'Integración con APIs', basic: '1-2', professional: '3-5', enterprise: 'Ilimitadas' },
          { name: 'Desarrollo a Medida', basic: false, professional: 'Limitado', enterprise: 'Completo' }
        ]
      },
      {
        name: 'Conversión y Analytics',
        features: [
          { name: 'Optimización para Conversión', basic: 'Básica', professional: 'Avanzada', enterprise: 'Premium' },
          { name: 'A/B Testing Setup', basic: false, professional: true, enterprise: true },
          { name: 'Analytics Avanzado', basic: false, professional: true, enterprise: true },
          { name: 'Heatmaps y Session Recording', basic: false, professional: false, enterprise: true },
          { name: 'Reportes Personalizados', basic: false, professional: 'Mensuales', enterprise: 'Semanales' }
        ]
      },
      {
        name: 'Soporte y Mantenimiento',
        features: [
          { name: 'Soporte Técnico', basic: '1 mes', professional: '6 meses', enterprise: '12 meses' },
          { name: 'Actualizaciones de Seguridad', basic: true, professional: true, enterprise: true },
          { name: 'Backup Automatizado', basic: 'Semanal', professional: 'Diario', enterprise: 'Tiempo Real' },
          { name: 'Monitoreo 24/7', basic: false, professional: true, enterprise: true },
          { name: 'SLA Garantizado', basic: false, professional: '99.5%', enterprise: '99.9%' }
        ]
      }
    ],
    plans: {
      basic: {
        name: 'Básico',
        price: '€2,500',
        description: 'Perfecto para startups y pequeños negocios',
        color: 'border-border',
        bgColor: 'bg-white',
        popular: false
      },
      professional: {
        name: 'Profesional',
        price: '€5,000',
        description: 'Ideal para empresas en crecimiento',
        color: 'border-primary',
        bgColor: 'bg-primary/5',
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: '€10,000+',
        description: 'Soluciones completas para grandes empresas',
        color: 'border-secondary',
        bgColor: 'bg-secondary/5',
        popular: false
      }
    }
  };

  const renderFeatureValue = (feature, plan) => {
    const value = feature?.[plan];
    
    if (value === true) {
      return <Icon name="Check" size={20} className="text-success" />;
    } else if (value === false) {
      return <Icon name="X" size={20} className="text-error" />;
    } else {
      return <span className="text-sm font-medium text-secondary">{value}</span>;
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Comparación de 
            <span className="text-secondary"> Servicios</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Encuentra el nivel de servicio perfecto para tus objetivos de negocio y presupuesto disponible.
          </p>
        </div>

        {/* Mobile Plan Selector */}
        <div className="lg:hidden mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-card-elevated">
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(comparisonData?.plans)?.map(([key, plan]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlan(key)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedPlan === key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-text-secondary hover:bg-primary/10'
                  }`}
                >
                  <div className="font-gilroy font-bold text-sm">{plan?.name}</div>
                  <div className="text-xs mt-1">{plan?.price}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-card-elevated overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-6">
              <h3 className="text-lg font-gilroy font-bold text-secondary">Características</h3>
            </div>
            {Object.entries(comparisonData?.plans)?.map(([key, plan]) => (
              <div
                key={key}
                className={`p-6 text-center relative ${plan?.bgColor} ${plan?.color} border-l border-border`}
              >
                {plan?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium shadow-lg whitespace-nowrap">
                      Más Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-gilroy font-bold text-secondary mb-2">{plan?.name}</h3>
                <div className="text-2xl font-gilroy font-bold text-primary mb-2">{plan?.price}</div>
                <p className="text-sm text-text-secondary">{plan?.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Categories */}
          {comparisonData?.categories?.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="grid grid-cols-4 bg-muted border-b border-border">
                <div className="p-4 col-span-4">
                  <h4 className="font-gilroy font-bold text-secondary flex items-center">
                    <Icon name="Folder" size={18} className="text-primary mr-2" />
                    {category?.name}
                  </h4>
                </div>
              </div>
              
              {category?.features?.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="grid grid-cols-4 border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="p-4">
                    <span className="text-sm text-text-secondary">{feature?.name}</span>
                  </div>
                  <div className="p-4 text-center border-l border-border">
                    {renderFeatureValue(feature, 'basic')}
                  </div>
                  <div className="p-4 text-center border-l border-border bg-primary/5">
                    {renderFeatureValue(feature, 'professional')}
                  </div>
                  <div className="p-4 text-center border-l border-border">
                    {renderFeatureValue(feature, 'enterprise')}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-4 p-6 bg-muted">
            <div className="flex items-center">
              <span className="text-sm font-medium text-secondary">Comenzar ahora:</span>
            </div>
            {Object.entries(comparisonData?.plans)?.map(([key, plan]) => (
              <div key={key} className="px-4">
                <Button
                  variant={plan?.popular ? "default" : "outline"}
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={plan?.popular ? "bg-primary text-primary-foreground hover:bg-accent" : ""}
                >
                  Seleccionar {plan?.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Feature List */}
        <div className="lg:hidden space-y-6">
          {comparisonData?.categories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-card-elevated overflow-hidden">
              <div className="p-6 bg-muted border-b border-border">
                <h4 className="font-gilroy font-bold text-secondary flex items-center">
                  <Icon name="Folder" size={18} className="text-primary mr-2" />
                  {category?.name}
                </h4>
              </div>
              
              <div className="p-6 space-y-4">
                {category?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">{feature?.name}</span>
                    <div className="ml-4">
                      {renderFeatureValue(feature, selectedPlan)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Seleccionar {comparisonData?.plans?.[selectedPlan]?.name}
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card-elevated text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-gilroy font-bold text-secondary mb-3">
              Consulta Personalizada
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              ¿No estás seguro qué plan elegir? Agenda una consulta gratuita de 30 minutos.
            </p>
            <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
              Agendar Consulta
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card-elevated text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-success" />
            </div>
            <h3 className="text-lg font-gilroy font-bold text-secondary mb-3">
              Garantía Total
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Satisfacción 100% garantizada o reembolso completo en los primeros 30 días.
            </p>
            <Button variant="outline" size="sm" iconName="FileText" iconPosition="left">
              Ver Términos
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card-elevated text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-warning" />
            </div>
            <h3 className="text-lg font-gilroy font-bold text-secondary mb-3">
              Inicio Rápido
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Comenzamos tu proyecto en menos de 48 horas después de la confirmación.
            </p>
            <Button variant="outline" size="sm" iconName="Clock" iconPosition="left">
              Ver Timeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;