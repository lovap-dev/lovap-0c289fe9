import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TechnicalSpecs = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const technicalCategories = {
    performance: {
      title: 'Rendimiento y Velocidad',
      icon: 'Zap',
      specs: [
        {
          metric: 'Tiempo de Carga',
          standard: '< 2 segundos',
          description: 'Primera carga completa en dispositivos móviles con conexión 3G',
          tools: ['Google PageSpeed', 'GTmetrix', 'WebPageTest']
        },
        {
          metric: 'Core Web Vitals',
          standard: '90+ puntos',
          description: 'Puntuación superior en LCP, FID y CLS según métricas de Google',
          tools: ['Lighthouse', 'Search Console', 'Chrome DevTools']
        },
        {
          metric: 'Optimización de Imágenes',
          standard: 'WebP + Lazy Loading',
          description: 'Formatos modernos con carga diferida y compresión inteligente',
          tools: ['ImageOptim', 'TinyPNG', 'Cloudinary']
        },
        {
          metric: 'CDN Global',
          standard: 'Multi-región',
          description: 'Distribución de contenido desde servidores cercanos al usuario',
          tools: ['Cloudflare', 'AWS CloudFront', 'KeyCDN']
        }
      ]
    },
    security: {
      title: 'Seguridad y Protección',
      icon: 'Shield',
      specs: [
        {
          metric: 'Certificado SSL',
          standard: 'TLS 1.3',
          description: 'Encriptación de última generación para todas las comunicaciones',
          tools: ['Let\'s Encrypt', 'Cloudflare SSL', 'DigiCert']
        },
        {
          metric: 'Protección CSRF/XSS',
          standard: 'Headers de Seguridad',
          description: 'Implementación completa de headers de seguridad y validación',
          tools: ['OWASP Guidelines', 'Security Headers', 'CSP']
        },
        {
          metric: 'Backup Automatizado',
          standard: 'Diario + Versionado',
          description: 'Copias de seguridad automáticas con retención de 30 días',
          tools: ['AWS S3', 'Google Cloud', 'UpdraftPlus']
        },
        {
          metric: 'Monitoreo 24/7',
          standard: 'Uptime 99%',
          description: 'Supervisión continua con alertas automáticas ante incidencias',
          tools: ['Pingdom', 'UptimeRobot', 'New Relic']
        }
      ]
    },
    seo: {
      title: 'SEO Técnico',
      icon: 'Search',
      specs: [
        {
          metric: 'Estructura de URLs',
          standard: 'SEO-Friendly',
          description: 'URLs limpias, descriptivas y optimizadas para buscadores',
          tools: ['Yoast SEO', 'Screaming Frog', 'Ahrefs']
        },
        {
          metric: 'Schema Markup',
          standard: 'JSON-LD',
          description: 'Marcado estructurado para rich snippets y mejor indexación',
          tools: ['Schema.org', 'Google Testing Tool', 'Merkle']
        },
        {
          metric: 'Sitemap XML',
          standard: 'Automático',
          description: 'Generación automática y envío a motores de búsqueda',
          tools: ['Google Search Console', 'Bing Webmaster', 'Sitemap Generator']
        },
        {
          metric: 'Meta Tags Dinámicos',
          standard: 'Personalizados',
          description: 'Títulos y descripciones únicos optimizados por página',
          tools: ['SEMrush', 'Moz', 'Google Analytics']
        }
      ]
    },
    accessibility: {
      title: 'Accesibilidad Web',
      icon: 'Users',
      specs: [
        {
          metric: 'Estándar WCAG',
          standard: 'AA Compliant',
          description: 'Cumplimiento total de pautas de accesibilidad web nivel AA',
          tools: ['WAVE', 'axe DevTools', 'Lighthouse']
        },
        {
          metric: 'Navegación por Teclado',
          standard: 'Completa',
          description: 'Acceso total a todas las funciones usando solo el teclado',
          tools: ['Tab Order Testing', 'Focus Management', 'NVDA']
        },
        {
          metric: 'Contraste de Color',
          standard: 'Ratio 4.5:1',
          description: 'Contraste suficiente para usuarios con discapacidad visual',
          tools: ['Colour Contrast Analyser', 'WebAIM', 'Stark']
        },
        {
          metric: 'Screen Reader',
          standard: 'Compatible',
          description: 'Optimización para lectores de pantalla y tecnologías asistivas',
          tools: ['JAWS', 'NVDA', 'VoiceOver']
        }
      ]
    }
  };

  const tabs = Object.keys(technicalCategories);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Especificaciones 
            <span className="text-primary"> Técnicas</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Estándares técnicos de clase enterprise que garantizan rendimiento, seguridad y escalabilidad a largo plazo.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-card-elevated">
            <div className="flex flex-wrap gap-2">
              {tabs?.map((tab) => {
                const category = technicalCategories?.[tab];
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-text-secondary hover:bg-muted hover:text-secondary'
                    }`}
                  >
                    <Icon name={category?.icon} size={18} />
                    <span className="hidden sm:inline">{category?.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-card-elevated overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary rounded-xl">
                <Icon name={technicalCategories?.[activeTab]?.icon} size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-gilroy font-bold text-secondary">
                  {technicalCategories?.[activeTab]?.title}
                </h3>
                <p className="text-text-secondary">Estándares y herramientas profesionales</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {technicalCategories?.[activeTab]?.specs?.map((spec, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-gilroy font-bold text-secondary">
                      {spec?.metric}
                    </h4>
                    <span className="bg-gray-200 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {spec?.standard}
                    </span>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {spec?.description}
                  </p>

                  <div>
                    <div className="text-sm font-medium text-secondary mb-2">Herramientas:</div>
                    <div className="flex flex-wrap gap-2">
                      {spec?.tools?.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-muted text-text-secondary px-3 py-1 rounded-lg text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Guarantees */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-success/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-success-foreground" />
            </div>
            <h3 className="text-xl font-gilroy font-bold text-secondary mb-3">
              Certificación de Calidad
            </h3>
            <p className="text-text-secondary mb-4">
              Todos nuestros proyectos pasan por auditorías técnicas exhaustivas antes del lanzamiento.
            </p>
            <div className="text-success font-semibold">100% Garantizado</div>
          </div>

          <div className="bg-gray-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-gilroy font-bold text-secondary mb-3">
              Soporte Técnico
            </h3>
            <p className="text-text-secondary mb-4">
              Soporte técnico especializado durante 6 meses post-lanzamiento incluido en todos los proyectos.
            </p>
            <div className="text-primary font-semibold">6 Meses Incluidos</div>
          </div>

          <div className="bg-gray-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-gilroy font-bold text-secondary mb-3">
              Optimización Continua
            </h3>
            <p className="text-text-secondary mb-4">
              Monitoreo y optimización continua basada en datos reales de rendimiento y conversión.
            </p>
            <div className="text-warning font-semibold">Siempre Actualizado</div>
          </div>
        </div>

        {/*<div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Icon name="FileText" size={16} />
            <span>Documentación técnica completa incluida en cada proyecto</span>
          </div>
          <div className="space-y-4">
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="bg-primary text-primary-foreground hover:bg-accent mr-4"
            >
              Descargar Especificaciones Completas
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Consulta Técnica Personalizada
            </Button>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default TechnicalSpecs;