import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectTypes = () => {
  const [selectedType, setSelectedType] = useState(0);

  const projectTypes = [
    {
      id: 1,
      title: "Landing Page Corporativa",
      icon: "FileText",
      duration: "15-20 días",
      investment: "€2,500 - €4,500",
      description: "Página de destino optimizada para conversión con diseño profesional y CMS integrado.",
      phases: [
        { name: "Descubrimiento", days: "2-3 días", activities: ["Briefing inicial", "Análisis competencia", "Definición objetivos"] },
        { name: "Diseño", days: "4-5 días", activities: ["Wireframes", "Diseño visual", "Prototipo"] },
        { name: "Desarrollo", days: "6-8 días", activities: ["Maquetación", "CMS", "Optimización"] },
        { name: "Testing", days: "2-3 días", activities: ["Pruebas funcionales", "Optimización SEO"] },
        { name: "Lanzamiento", days: "1-2 días", activities: ["Deploy", "Configuración", "Entrenamiento"] }
      ],
      features: [
        "Diseño responsive premium",
        "CMS para gestión de contenido",
        "Optimización SEO técnico",
        "Integración Google Analytics",
        "Formularios de contacto",
        "Certificado SSL incluido"
      ],
      idealFor: "Empresas que necesitan presencia digital profesional con enfoque en generación de leads."
    },
    {
      id: 2,
      title: "Sitio Web Corporativo",
      icon: "Globe",
      duration: "25-35 días",
      investment: "€5,500 - €9,500",
      description: "Sitio web completo con múltiples secciones, blog integrado y panel de administración.",
      phases: [
        { name: "Descubrimiento", days: "4-5 días", activities: ["Análisis profundo", "Arquitectura información", "Estrategia contenido"] },
        { name: "Diseño", days: "8-10 días", activities: ["Sistema diseño", "Múltiples páginas", "Prototipos interactivos"] },
        { name: "Desarrollo", days: "12-15 días", activities: ["Frontend completo", "CMS avanzado", "Blog integrado"] },
        { name: "Testing", days: "3-4 días", activities: ["Testing exhaustivo", "Optimización rendimiento"] },
        { name: "Lanzamiento", days: "2-3 días", activities: ["Deploy producción", "Configuración avanzada"] }
      ],
      features: [
        "Múltiples páginas optimizadas",
        "Blog con CMS avanzado",
        "Panel administración completo",
        "Integración redes sociales",
        "Sistema de newsletters",
        "Analíticas avanzadas",
        "Soporte técnico 6 meses"
      ],
      idealFor: "Empresas establecidas que requieren presencia digital completa y gestión de contenido avanzada."
    },
    {
      id: 3,
      title: "Aplicación Web Personalizada",
      icon: "Layers",
      duration: "45-65 días",
      investment: "€12,000 - €25,000",
      description: "Desarrollo de aplicación web a medida con funcionalidades específicas y base de datos.",
      phases: [
        { name: "Descubrimiento", days: "7-10 días", activities: ["Análisis requisitos", "Arquitectura técnica", "Planificación detallada"] },
        { name: "Diseño", days: "10-12 días", activities: ["UX/UI completo", "Sistema diseño", "Prototipos funcionales"] },
        { name: "Desarrollo Frontend", days: "15-20 días", activities: ["Interfaces usuario", "Componentes reutilizables", "Integración APIs"] },
        { name: "Desarrollo Backend", days: "12-18 días", activities: ["APIs RESTful", "Base datos", "Autenticación"] },
        { name: "Testing & QA", days: "5-8 días", activities: ["Testing automatizado", "Pruebas carga", "Seguridad"] },
        { name: "Lanzamiento", days: "3-5 días", activities: ["Deploy producción", "Monitoreo", "Documentación"] }
      ],
      features: [
        "Desarrollo completamente personalizado",
        "Base de datos optimizada",
        "Panel administración avanzado",
        "APIs RESTful documentadas",
        "Sistema autenticación robusto",
        "Integración servicios externos",
        "Soporte técnico 12 meses",
        "Documentación técnica completa"
      ],
      idealFor: "Empresas con necesidades específicas que requieren soluciones tecnológicas a medida."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Cronogramas por Tipo de Proyecto
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Cada tipo de proyecto tiene su propio cronograma optimizado. Descubre los tiempos 
            estimados y fases específicas según tus necesidades.
          </p>
        </div>

        {/* Project Type Selector */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-12">
          {projectTypes?.map((type, index) => (
            <button
              key={type?.id}
              onClick={() => setSelectedType(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                selectedType === index
                  ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                  : 'bg-card text-text-primary hover:bg-primary/10 shadow-card'
              }`}
            >
              <Icon name={type?.icon} size={24} />
              <div>
                <div className="font-gilroy font-semibold">{type?.title}</div>
                <div className="text-sm opacity-80">{type?.duration}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Project Details */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card-elevated overflow-hidden">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name={projectTypes?.[selectedType]?.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary">
                      {projectTypes?.[selectedType]?.title}
                    </h3>
                    <p className="text-text-primary/80">
                      {projectTypes?.[selectedType]?.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-gilroy font-bold text-primary mb-1">
                    {projectTypes?.[selectedType]?.duration}
                  </div>
                  <div className="text-lg font-medium text-secondary">
                    {projectTypes?.[selectedType]?.investment}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              {/* Timeline Phases */}
              <div className="mb-12">
                <h4 className="text-xl font-gilroy font-semibold text-secondary mb-6">
                  Cronograma Detallado
                </h4>
                <div className="space-y-4">
                  {projectTypes?.[selectedType]?.phases?.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h5 className="font-gilroy font-semibold text-secondary">{phase?.name}</h5>
                          <span className="text-primary font-medium">{phase?.days}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase?.activities?.map((activity, actIndex) => (
                            <span
                              key={actIndex}
                              className="inline-flex items-center px-3 py-1 bg-background rounded-full text-sm text-text-primary/80"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & Ideal For */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-gilroy font-semibold text-secondary mb-6 flex items-center">
                    <Icon name="Star" size={20} className="mr-2 text-primary" />
                    Características Incluidas
                  </h4>
                  <ul className="space-y-3">
                    {projectTypes?.[selectedType]?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-primary/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div>
                  <h4 className="text-xl font-gilroy font-semibold text-secondary mb-6 flex items-center">
                    <Icon name="Target" size={20} className="mr-2 text-primary" />
                    Ideal Para
                  </h4>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <p className="text-text-primary/80 leading-relaxed">
                      {projectTypes?.[selectedType]?.idealFor}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      variant="default"
                      size="lg"
                      fullWidth
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Solicitar Cotización para {projectTypes?.[selectedType]?.title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;