import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Descubrimiento Estratégico",
      duration: "5-7 días",
      icon: "Search",
      color: "bg-blue-500",
      description: "Análisis profundo de objetivos de negocio, audiencia objetivo y requisitos técnicos.",
      deliverables: [
        "Documento de Requisitos Técnicos",
        "Análisis de Competencia",
        "Arquitectura de Información",
        "Cronograma Detallado del Proyecto"
      ],
      activities: [
        "Entrevistas con stakeholders clave",
        "Auditoría técnica del ecosistema actual",
        "Definición de KPIs y métricas de éxito",
        "Planificación de recursos y timeline"
      ],
      clientInvolvement: "Alta - Reuniones diarias de alineación",
      qualityCheckpoints: [
        "Validación de objetivos de negocio",
        "Aprobación de arquitectura técnica",
        "Confirmación de cronograma y presupuesto"
      ]
    },
    {
      id: 2,
      title: "Diseño & Prototipado",
      duration: "8-12 días",
      icon: "Palette",
      color: "bg-purple-500",
      description: "Creación de wireframes, diseños visuales y prototipos interactivos centrados en conversión.",
      deliverables: [
        "Wireframes de Alta Fidelidad",
        "Sistema de Diseño Completo",
        "Prototipos Interactivos",
        "Guía de Estilo Visual"
      ],
      activities: [
        "Diseño de experiencia de usuario (UX)",
        "Creación de interfaz visual (UI)",
        "Prototipado interactivo",
        "Testing de usabilidad inicial"
      ],
      clientInvolvement: "Media - Revisiones semanales programadas",
      qualityCheckpoints: [
        "Validación de wireframes",
        "Aprobación de diseño visual",
        "Testing de prototipo funcional"
      ]
    },
    {
      id: 3,
      title: "Desarrollo Frontend",
      duration: "12-18 días",
      icon: "Code",
      color: "bg-green-500",
      description: "Implementación de interfaces responsivas con optimización de rendimiento y SEO técnico.",
      deliverables: [
        "Código Frontend Optimizado",
        "Componentes Reutilizables",
        "Integración de CMS",
        "Optimización SEO Técnico"
      ],
      activities: [
        "Desarrollo de componentes React",
        "Implementación responsive",
        "Optimización de rendimiento",
        "Integración de herramientas analytics"
      ],
      clientInvolvement: "Baja - Actualizaciones de progreso",
      qualityCheckpoints: [
        "Code review automatizado",
        "Testing de compatibilidad cross-browser",
        "Auditoría de rendimiento Lighthouse"
      ]
    },
    {
      id: 4,
      title: "Desarrollo Backend",
      duration: "10-15 días",
      icon: "Server",
      color: "bg-orange-500",
      description: "Construcción de APIs robustas, integración de bases de datos y sistemas de seguridad.",
      deliverables: [
        "APIs RESTful Documentadas",
        "Base de Datos Optimizada",
        "Sistema de Autenticación",
        "Panel de Administración"
      ],
      activities: [
        "Desarrollo de APIs y endpoints",
        "Configuración de base de datos",
        "Implementación de seguridad",
        "Integración de servicios externos"
      ],
      clientInvolvement: "Baja - Demos de funcionalidad",
      qualityCheckpoints: [
        "Testing de APIs automatizado",
        "Auditoría de seguridad",
        "Optimización de consultas DB"
      ]
    },
    {
      id: 5,
      title: "Testing & QA",
      duration: "5-8 días",
      icon: "CheckCircle",
      color: "bg-red-500",
      description: "Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y experiencia de usuario.",
      deliverables: [
        "Reporte de Testing Completo",
        "Documentación de Bugs Resueltos",
        "Certificado de Rendimiento",
        "Manual de Usuario"
      ],
      activities: [
        "Testing funcional automatizado",
        "Pruebas de carga y rendimiento",
        "Testing de seguridad",
        "Validación de experiencia usuario"
      ],
      clientInvolvement: "Alta - Testing de aceptación usuario",
      qualityCheckpoints: [
        "Cobertura de testing >95%",
        "Rendimiento Lighthouse >90",
        "Validación de accesibilidad WCAG"
      ]
    },
    {
      id: 6,
      title: "Lanzamiento & Soporte",
      duration: "3-5 días + Ongoing",
      icon: "Rocket",
      color: "bg-primary",
      description: "Despliegue en producción, monitoreo post-lanzamiento y soporte técnico continuo.",
      deliverables: [
        "Sitio Web en Producción",
        "Documentación Técnica Completa",
        "Plan de Mantenimiento",
        "Acceso a Panel de Control"
      ],
      activities: [
        "Configuración de hosting y dominio",
        "Despliegue y configuración SSL",
        "Configuración de monitoreo",
        "Entrenamiento del equipo cliente"
      ],
      clientInvolvement: "Media - Entrenamiento y handover",
      qualityCheckpoints: [
        "Verificación de funcionamiento en producción",
        "Configuración de backups automáticos",
        "Establecimiento de SLAs de soporte"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Metodología de 6 Fases
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Cada proyecto sigue nuestra metodología probada que garantiza resultados excepcionales 
            y transparencia total en cada etapa del desarrollo.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {phases?.map((phase, index) => (
            <button
              key={phase?.id}
              onClick={() => setActivePhase(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activePhase === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-text-primary hover:bg-primary/10'
              }`}
            >
              <Icon name={phase?.icon} size={16} />
              <span className="hidden sm:inline">Fase {phase?.id}</span>
              <span className="sm:hidden">{phase?.id}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card-elevated p-8 lg:p-12">
            {/* Phase Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className={`w-12 h-12 ${phases?.[activePhase]?.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={phases?.[activePhase]?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary">
                    {phases?.[activePhase]?.title}
                  </h3>
                  <p className="text-primary font-medium">
                    Duración: {phases?.[activePhase]?.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-primary/70">
                <Icon name="Clock" size={16} />
                <span>Fase {activePhase + 1} de {phases?.length}</span>
              </div>
            </div>

            {/* Phase Description */}
            <p className="text-lg text-text-primary/80 mb-8 leading-relaxed">
              {phases?.[activePhase]?.description}
            </p>

            {/* Phase Details Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="Package" size={20} className="mr-2 text-primary" />
                    Entregables Clave
                  </h4>
                  <ul className="space-y-2">
                    {phases?.[activePhase]?.deliverables?.map((deliverable, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-primary/80">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="Activity" size={20} className="mr-2 text-primary" />
                    Actividades Principales
                  </h4>
                  <ul className="space-y-2">
                    {phases?.[activePhase]?.activities?.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-text-primary/80">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Client Involvement */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="Users" size={20} className="mr-2 text-primary" />
                    Participación del Cliente
                  </h4>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-text-primary/80">{phases?.[activePhase]?.clientInvolvement}</p>
                  </div>
                </div>

                {/* Quality Checkpoints */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2 text-primary" />
                    Puntos de Control de Calidad
                  </h4>
                  <ul className="space-y-2">
                    {phases?.[activePhase]?.qualityCheckpoints?.map((checkpoint, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-primary/80">{checkpoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Fase Anterior
              </Button>
              
              <div className="text-sm text-text-primary/70">
                {activePhase + 1} / {phases?.length}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setActivePhase(Math.min(phases?.length - 1, activePhase + 1))}
                disabled={activePhase === phases?.length - 1}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Siguiente Fase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;