import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { FeatureSteps } from '../../../components/ui/feature-section';

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
        {/*{ label: 'Backup Automático', target: 'Diario', description: 'Respaldo automático de datos' }*/}
      ],
      processes: [
        'Escaneo de vulnerabilidades OWASP',
        'Implementación de headers de seguridad',
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
        { label: 'Screen Readers', target: 'Compatible', description: 'Lectores de pantalla' }
      ],
      processes: [
        'Auditoría de accesibilidad automatizada',
        'Testing con lectores de pantalla',
        'Optimización de etiquetas semánticas'
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

  return (
    <section className="py-20 bg-gray-50">
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
          <div
            className="flex flex-wrap justify-center gap-6 mb-8 border-b border-border/60"
            role="tablist"
            aria-label="Pestañas de Garantía de Calidad"
          >
            {qualityTabs?.map((tab, index) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`qa-panel-${tab?.id}`}
                id={`qa-tab-${tab?.id}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={`relative flex items-center space-x-2 px-5 py-3 -mb-px rounded-t-md transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                  activeTab === index
                    ? 'text-accent font-semibold bg-card border border-accent border-b-0 shadow-sm'
                    : 'text-text-primary/60 font-medium border-b border-transparent hover:text-accent/90 hover:border-border/80'
                }`}
              >
                <Icon name={tab?.icon} size={20} className={activeTab === index ? 'text-accent' : 'text-text-primary/60'} />
                <span>{tab?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div
            className="bg-card rounded-2xl shadow-card-elevated p-8 lg:p-12 mt-[-1px]"
            role="tabpanel"
            id={`qa-panel-${qualityTabs?.[activeTab]?.id}`}
            aria-labelledby={`qa-tab-${qualityTabs?.[activeTab]?.id}`}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Icon name={qualityTabs?.[activeTab]?.icon} size={24} className="text-accent-foreground" />
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
                      <div className="text-secondary font-bold text-lg">
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

        {/* Quality Promise - New Design */}
        <div className="max-w-6xl mx-auto mt-8">
          <FeatureSteps
            features={[
              {
                step: "01",
                title: "Garantía Extendida",
                content: "Respaldo total durante 30 días post-lanzamiento. Nos hacemos cargo de cualquier inconveniente sin costo adicional, asegurando tu tranquilidad.",
                image: "/images/garantia.png"
              },
              {
                step: "02",
                title: "Revisiones Incluidas",
                content: "Realizamos todos los ajustes y mejoras necesarios hasta que el resultado refleje exactamente lo que buscas, con la máxima calidad.",
                image: "/images/revision.png"
              },
              {
                step: "03",
                title: "Soporte Continuo",
                content: "Nuestro equipo está disponible en todo momento para ofrecerte asistencia técnica inmediata y confiable, cuando más la necesites.",
                image: "/images/soporte.png"
              }
            ]}
            title="Compromiso con la Excelencia"
            autoPlayInterval={6000}
            className="py-0"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;