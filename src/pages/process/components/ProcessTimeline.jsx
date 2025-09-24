import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const timelineRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if timeline is in view
      if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
        if (!isScrollLocked && activePhase < phases.length - 1) {
          setIsScrollLocked(true);
          
          // Calculate scroll progress within the timeline section
          const scrollProgress = Math.abs(rect.top) / (rect.height - windowHeight);
          const newPhase = Math.min(Math.floor(scrollProgress * phases.length), phases.length - 1);
          
          if (newPhase !== activePhase) {
            setActivePhase(newPhase);
          }
          
          // Unlock scroll when reaching the last phase
          if (newPhase === phases.length - 1) {
            setTimeout(() => setIsScrollLocked(false), 500);
          }
        }
      } else {
        setIsScrollLocked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePhase, isScrollLocked, phases.length]);

  return (
    <section 
      ref={timelineRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-background min-h-screen"
    >
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

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Timeline Navigation - Vertical */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
                  
                  {/* Active Line */}
                  <div 
                    className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ 
                      height: `${((activePhase + 1) / phases.length) * 100}%`
                    }}
                  ></div>

                  <div className="space-y-4">
                    {phases?.map((phase, index) => (
                      <button
                        key={phase?.id}
                        onClick={() => setActivePhase(index)}
                        className={`flex items-center space-x-4 w-full p-4 rounded-xl text-left transition-all duration-500 ${
                          activePhase === index
                            ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                            : 'bg-card hover:bg-primary/10 text-text-primary hover:text-primary'
                        }`}
                      >
                        <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          activePhase === index
                            ? 'bg-primary-foreground text-primary'
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <Icon name={phase?.icon} size={20} />
                          {activePhase === index && (
                            <div className="absolute -inset-1 rounded-full bg-primary/20 animate-pulse"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-gilroy font-semibold text-sm">
                            Fase {phase?.id}
                          </h4>
                          <p className="text-xs opacity-70">
                            {phase?.title}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Phase Details */}
            <div className="lg:col-span-8">
              <div className="bg-card rounded-2xl shadow-card-elevated p-8 lg:p-12 min-h-[600px]">
                {/* Phase Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className={`w-16 h-16 ${phases?.[activePhase]?.color} rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                      <Icon name={phases?.[activePhase]?.icon} size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-4xl font-gilroy font-bold text-secondary mb-2">
                        {phases?.[activePhase]?.title}
                      </h3>
                      <p className="text-primary font-medium flex items-center">
                        <Icon name="Clock" size={16} className="mr-2" />
                        Duración: {phases?.[activePhase]?.duration}
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      Fase {activePhase + 1} de {phases?.length}
                    </span>
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
                    <div className="bg-success/5 rounded-xl p-6">
                      <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                        <Icon name="Package" size={20} className="mr-2 text-success" />
                        Entregables Clave
                      </h4>
                      <ul className="space-y-3">
                        {phases?.[activePhase]?.deliverables?.map((deliverable, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-text-primary/80 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Activities */}
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                        <Icon name="Activity" size={20} className="mr-2 text-primary" />
                        Actividades Principales
                      </h4>
                      <ul className="space-y-3">
                        {phases?.[activePhase]?.activities?.map((activity, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-text-primary/80 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Client Involvement */}
                    <div className="bg-accent/10 rounded-xl p-6">
                      <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                        <Icon name="Users" size={20} className="mr-2 text-accent" />
                        Participación del Cliente
                      </h4>
                      <p className="text-text-primary/80 bg-card p-4 rounded-lg border-l-4 border-accent">
                        {phases?.[activePhase]?.clientInvolvement}
                      </p>
                    </div>

                    {/* Quality Checkpoints */}
                    <div className="bg-warning/10 rounded-xl p-6">
                      <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                        <Icon name="Shield" size={20} className="mr-2 text-warning" />
                        Puntos de Control de Calidad
                      </h4>
                      <ul className="space-y-3">
                        {phases?.[activePhase]?.qualityCheckpoints?.map((checkpoint, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="CheckCircle" size={16} className="text-warning mt-1 flex-shrink-0" />
                            <span className="text-text-primary/80 text-sm">{checkpoint}</span>
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
                  
                  <div className="flex space-x-2">
                    {phases?.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activePhase ? 'bg-primary w-6' : 'bg-primary/20'
                        }`}
                      />
                    ))}
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
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;