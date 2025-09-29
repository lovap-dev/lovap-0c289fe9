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
    <section className="py-16 lg:py-24 bg-background">
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Certificaciones
            </div>
            <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary">
              Estándares de Calidad Verificados
            </h3>
            <p className="text-text-primary/70 mt-3 max-w-2xl mx-auto">
              Cumplimos con los estándares más exigentes de la industria para garantizar la excelencia en cada proyecto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert, index) => (
              <div key={index} className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Icon name={cert?.icon} size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-gilroy font-bold text-secondary mb-2 text-lg">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-primary/70 mb-4 leading-relaxed">
                  {cert?.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-success/10 to-success/5 border border-success/20 text-success rounded-full text-sm font-semibold">
                  <Icon name="Check" size={14} className="mr-2" />
                  {cert?.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise - New Design */}
        <div className="max-w-6xl mx-auto mt-8">
          <FeatureSteps
            features={[
              {
                step: "01",
                title: "Garantía Extendida",
                content: "Protección completa durante 30 días post-lanzamiento. Si surge cualquier problema, lo resolvemos sin costo adicional.",
                image: "/images/mantenimiento_1.jpg"
              },
              {
                step: "02",
                title: "Revisiones Sin Límite",
                content: "Ajustes y mejoras hasta tu completa satisfacción. No hay límite en la cantidad de revisiones que podemos hacer.",
                image: "/images/desarrollo_1.jpg"
              },
              {
                step: "03",
                title: "Soporte Premium 24/7",
                content: "Asistencia técnica especializada las 24 horas, los 7 días de la semana. Siempre estamos disponibles para ti.",
                image: "/images/planeacion_1.jpg"
              }
            ]}
            title="Compromiso de Excelencia 100% Garantizado"
            autoPlayInterval={4000}
            className="py-0"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;