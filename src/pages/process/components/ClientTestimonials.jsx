import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Directora de Marketing",
      company: "TechSolutions España",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      phase: "Proceso Completo",
      project: "Rediseño Web Corporativo",
      testimonial: `El proceso de Lovap fue excepcional desde el primer día. La transparencia en cada fase nos dio total confianza. El equipo no solo cumplió con los plazos, sino que superó nuestras expectativas en términos de calidad y atención al detalle.\n\nLa metodología de 6 fases nos permitió estar involucrados en cada decisión importante, y los puntos de control de calidad aseguraron que el resultado final fuera perfecto.`,
      results: [
        "Aumento del 340% en conversiones",
        "Reducción del 65% en tiempo de carga",
        "Mejora del 280% en engagement"
      ],
      beforeAfter: {
        before: "Sitio web desactualizado con alta tasa de rebote",
        after: "Plataforma moderna que genera leads cualificados diariamente"
      }
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "CEO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      phase: "Desarrollo & Testing",
      project: "Aplicación Web Personalizada",
      testimonial: `Lo que más me impresionó fue la fase de testing y QA. Lovap no dejó nada al azar. Cada funcionalidad fue probada exhaustivamente, y recibimos reportes detallados de cada prueba realizada.\n\nEl equipo técnico demostró un nivel de expertise excepcional, especialmente en la optimización de rendimiento y seguridad. La aplicación funciona perfectamente desde el día uno.`,
      results: [
        "0 errores críticos en producción",
        "Lighthouse score de 96/100",
        "100% de uptime desde el lanzamiento"
      ],
      beforeAfter: {
        before: "Procesos manuales que consumían 40 horas semanales",
        after: "Automatización completa con ahorro de 35 horas por semana"
      }
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      position: "Directora Comercial",
      company: "GrowthPartners",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      phase: "Lanzamiento & Soporte",
      project: "E-commerce B2B",
      testimonial: `La fase de lanzamiento fue impecable. El equipo de Lovap se encargó de cada detalle técnico, desde la configuración del hosting hasta la integración con nuestros sistemas existentes.\n\nPero lo que realmente nos conquistó fue el soporte post-lanzamiento. Cualquier duda o ajuste menor se resuelve en cuestión de horas. Es como tener un equipo técnico interno.`,
      results: [
        "Lanzamiento sin interrupciones",
        "Integración perfecta con CRM existente",
        "Tiempo de respuesta de soporte <2 horas"
      ],
      beforeAfter: {
        before: "Dependencia de desarrolladores externos para cambios menores",
        after: "Autonomía total con soporte técnico cuando lo necesitamos"
      }
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "CTO",
      company: "DataFlow Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      phase: "Descubrimiento & Diseño",
      project: "Dashboard Analítico",
      testimonial: `La fase de descubrimiento fue extraordinaria. El equipo de Lovap no solo entendió nuestros requisitos técnicos, sino que propuso mejoras que ni siquiera habíamos considerado.\n\nLa documentación técnica y los prototipos interactivos nos permitieron visualizar exactamente lo que íbamos a obtener. Cero sorpresas, solo resultados excepcionales.`,
      results: [
        "Arquitectura técnica optimizada",
        "Reducción del 50% en complejidad",
        "Escalabilidad para 10x más usuarios"
      ],
      beforeAfter: {
        before: "Idea conceptual sin claridad técnica",
        after: "Roadmap técnico detallado con arquitectura escalable"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Experiencias de Nuestros Clientes
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Descubre cómo nuestro proceso transparente y metodología probada ha transformado 
            los negocios de nuestros clientes en cada fase del desarrollo.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-card rounded-2xl shadow-card-elevated overflow-hidden">
            {/* Testimonial Header */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                  <div className="relative">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={16} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-gilroy font-bold text-secondary">
                      {currentTestimonial?.name}
                    </h3>
                    <p className="text-text-primary/80">
                      {currentTestimonial?.position}
                    </p>
                    <p className="text-primary font-medium">
                      {currentTestimonial?.company}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1 mb-2">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-text-primary/70">
                    Enfoque: {currentTestimonial?.phase}
                  </div>
                  <div className="text-sm font-medium text-secondary">
                    {currentTestimonial?.project}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              {/* Testimonial Content */}
              <blockquote className="text-lg text-text-primary/80 leading-relaxed mb-8">
                "{currentTestimonial?.testimonial}"
              </blockquote>

              {/* Results & Before/After */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Results */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                    Resultados Obtenidos
                  </h4>
                  <ul className="space-y-3">
                    {currentTestimonial?.results?.map((result, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-primary/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Before/After */}
                <div>
                  <h4 className="text-lg font-gilroy font-semibold text-secondary mb-4 flex items-center">
                    <Icon name="ArrowRight" size={20} className="mr-2 text-primary" />
                    Transformación
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="X" size={16} className="text-red-500" />
                        <span className="font-medium text-red-700">Antes</span>
                      </div>
                      <p className="text-red-600 text-sm">
                        {currentTestimonial?.beforeAfter?.before}
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="font-medium text-green-700">Después</span>
                      </div>
                      <p className="text-green-600 text-sm">
                        {currentTestimonial?.beforeAfter?.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            type="button"
            onClick={prevTestimonial}
            className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-card shadow-card transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-card-elevated"
            aria-label="Testimonio anterior"
          >
            <Icon name="ChevronLeft" size={20} aria-hidden />
          </button>
          
          <div className="flex items-center space-x-1">
            {testimonials?.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 transition-opacity hover:opacity-90"
                aria-label={`Ir al testimonio ${index + 1} de ${testimonials.length}`}
                aria-current={activeTestimonial === index ? "true" : undefined}
              >
                <span
                  className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
          
          <button
            type="button"
            onClick={nextTestimonial}
            className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-card shadow-card transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-card-elevated"
            aria-label="Testimonio siguiente"
          >
            <Icon name="ChevronRight" size={20} aria-hidden />
          </button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials?.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              aria-pressed={activeTestimonial === index}
              aria-label={`Seleccionar testimonio de ${testimonial?.name}, ${testimonial?.company}`}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                  : 'bg-card text-text-primary hover:bg-primary/10 shadow-card'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-gilroy font-semibold text-sm">
                    {testimonial?.name}
                  </div>
                  <div className="text-xs opacity-80">
                    {testimonial?.company}
                  </div>
                </div>
              </div>
              <div className="text-sm opacity-90 mb-2">
                {testimonial?.phase}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;