import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const QualityAssurance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const qualityTabs = [
    {
      id: 'performance',
      title: 'Rendimiento',
      icon: 'Zap',
      description: 'Optimización técnica para velocidad y experiencia de usuario superior.',
      metrics: [
        { label: 'Lighthouse Score', target: '>90', description: 'Puntuación Google Lighthouse' },
        { label: 'Tiempo de Carga', target: '<3s', description: 'First Contentful Paint' },
        { label: 'Core Web Vitals', target: 'Verde', description: 'Métricas esenciales Google' },
        { label: 'Optimización Imágenes', target: '100%', description: 'WebP y lazy loading' }
      ],
      processes: [
        'Auditoría de rendimiento automatizada',
        'Optimización de código y assets',
        'Implementación de CDN global',
        'Compresión y minificación avanzada',
        'Testing de velocidad en múltiples dispositivos'
      ]
    },
    {
      id: 'security',
      title: 'Seguridad',
      icon: 'Shield',
      description: 'Protección integral contra amenazas y vulnerabilidades web.',
      metrics: [
        { label: 'SSL/TLS', target: 'A+', description: 'Certificado de seguridad premium' },
        { label: 'Vulnerabilidades', target: '0', description: 'Escaneo de seguridad completo' },
        { label: 'Headers Seguridad', target: '100%', description: 'Configuración headers HTTP' },
        { label: 'Backup Automático', target: 'Diario', description: 'Respaldo automático de datos' }
      ],
      processes: [
        'Escaneo de vulnerabilidades OWASP',
        'Implementación de headers de seguridad',
        'Configuración de firewall web',
        'Auditoría de dependencias y librerías',
        'Testing de penetración básico'
      ]
    },
    {
      id: 'accessibility',
      title: 'Accesibilidad',
      icon: 'Eye',
      description: 'Cumplimiento de estándares WCAG para inclusión digital total.',
      metrics: [
        { label: 'WCAG Compliance', target: 'AA', description: 'Estándar internacional accesibilidad' },
        { label: 'Contraste Color', target: '4.5:1', description: 'Ratio de contraste mínimo' },
        { label: 'Navegación Teclado', target: '100%', description: 'Acceso completo por teclado' },
        { label: 'Screen Readers', target: 'Compatible', description: 'Lectores de pantalla' }
      ],
      processes: [
        'Auditoría de accesibilidad automatizada',
        'Testing con lectores de pantalla',
        'Validación de navegación por teclado',
        'Optimización de etiquetas semánticas',
        'Testing con usuarios con discapacidades'
      ]
    },
    {
      id: 'seo',
      title: 'SEO Técnico',
      icon: 'Search',
      description: 'Optimización completa para máxima visibilidad en buscadores.',
      metrics: [
        { label: 'Core Web Vitals', target: 'Verde', description: 'Métricas de experiencia usuario' },
        { label: 'Indexabilidad', target: '100%', description: 'Páginas indexables por Google' },
        { label: 'Schema Markup', target: 'Completo', description: 'Datos estructurados JSON-LD' },
        { label: 'Mobile-First', target: 'Optimizado', description: 'Diseño mobile-first' }
      ],
      processes: [
        'Auditoría SEO técnico completa',
        'Implementación de datos estructurados',
        'Optimización de meta tags y URLs',
        'Configuración de sitemaps XML',
        'Testing de rastreabilidad e indexación'
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Lighthouse",
      description: "Auditoría automatizada de rendimiento",
      icon: "Award",
      status: "Certificado"
    },
    {
      name: "WCAG 2.1 AA",
      description: "Estándar de accesibilidad web",
      icon: "CheckCircle",
      status: "Cumplimiento"
    },
    {
      name: "OWASP Top 10",
      description: "Protección contra vulnerabilidades",
      icon: "Shield",
      status: "Verificado"
    },
    {
      name: "Core Web Vitals",
      description: "Métricas esenciales de Google",
      icon: "Zap",
      status: "Optimizado"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Garantía de Calidad Total
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Nuestro proceso de QA asegura que cada proyecto cumpla con los más altos estándares 
            de rendimiento, seguridad, accesibilidad y optimización SEO.
          </p>
        </div>

        {/* Quality Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {qualityTabs?.map((tab, index) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-text-primary hover:bg-primary/10 shadow-card'
                }`}
              >
                <Icon name={tab?.icon} size={20} />
                <span>{tab?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-card rounded-2xl shadow-card-elevated p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name={qualityTabs?.[activeTab]?.icon} size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-gilroy font-bold text-secondary">
                  {qualityTabs?.[activeTab]?.title}
                </h3>
                <p className="text-text-primary/80">
                  {qualityTabs?.[activeTab]?.description}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Metrics */}
              <div>
                <h4 className="text-lg font-gilroy font-semibold text-secondary mb-6">
                  Métricas de Calidad
                </h4>
                <div className="space-y-4">
                  {qualityTabs?.[activeTab]?.metrics?.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium text-secondary">{metric?.label}</div>
                        <div className="text-sm text-text-primary/70">{metric?.description}</div>
                      </div>
                      <div className="text-primary font-bold text-lg">
                        {metric?.target}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processes */}
              <div>
                <h4 className="text-lg font-gilroy font-semibold text-secondary mb-6">
                  Procesos de Verificación
                </h4>
                <ul className="space-y-3">
                  {qualityTabs?.[activeTab]?.processes?.map((process, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-text-primary/80">{process}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary text-center mb-8">
            Certificaciones y Estándares
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-elevated transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-gilroy font-semibold text-secondary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-primary/70 mb-3">
                  {cert?.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                  <Icon name="Check" size={12} className="mr-1" />
                  {cert?.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
            <Icon name="Award" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-4">
              Garantía de Calidad 100%
            </h3>
            <p className="text-lg text-text-primary/80 mb-6 max-w-2xl mx-auto">
              Si tu proyecto no cumple con nuestros estándares de calidad, trabajamos sin costo adicional 
              hasta alcanzar la excelencia prometida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Shield" size={20} />
                <span className="font-medium">30 días de garantía</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="RefreshCw" size={20} />
                <span className="font-medium">Revisiones ilimitadas</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Headphones" size={20} />
                <span className="font-medium">Soporte técnico 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;