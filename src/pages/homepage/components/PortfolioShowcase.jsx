import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PortfolioShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "Sitio Corporativo",
      description: "Rediseño completo de sitio corporativo que aumentó las conversiones en 340% y mejoró la percepción de marca.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: {
        conversion: "+340%",
        traffic: "+180%",
        leads: "+250%",
        time: "28 días"
      },
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      testimonial: {
        text: "Lovap transformó completamente nuestra presencia digital. Los resultados superaron todas nuestras expectativas.",
        author: "María González",
        position: "CEO, TechCorp"
      }
    },
    {
      id: 2,
      title: "EcoStore Marketplace",
      category: "E-commerce",
      description: "Plataforma de comercio electrónico con funcionalidades avanzadas que generó €2.3M en ventas el primer año.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      results: {
        conversion: "+420%",
        traffic: "+300%",
        leads: "€2.3M",
        time: "45 días"
      },
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      testimonial: {
        text: "La plataforma que desarrollaron nos permitió escalar nuestro negocio de manera exponencial.",
        author: "Carlos Ruiz",
        position: "Fundador, EcoStore"
      }
    },
    {
      id: 3,
      title: "FinanceApp Dashboard",
      category: "Aplicación Web",
      description: "Dashboard financiero con análisis en tiempo real que mejoró la toma de decisiones empresariales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: {
        conversion: "+280%",
        traffic: "+150%",
        leads: "+190%",
        time: "35 días"
      },
      technologies: ["Vue.js", "Python", "Redis", "Chart.js"],
      testimonial: {
        text: "El dashboard nos dio la visibilidad que necesitábamos para optimizar nuestras operaciones financieras.",
        author: "Ana Martín",
        position: "CFO, FinanceApp"
      }
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} />
            <span>Portfolio</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Proyectos que
            <span className="text-primary"> generan impacto</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a empresas 
            como la tuya a alcanzar sus objetivos digitales.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-card border border-border rounded-3xl overflow-hidden card-elevated-strong"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <Image
                    src={projects?.[activeProject]?.image}
                    alt={projects?.[activeProject]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {projects?.[activeProject]?.category}
                    </span>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute bottom-6 right-6 flex space-x-2">
                    <button
                      onClick={prevProject}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-gilroy font-bold text-secondary mb-4">
                        {projects?.[activeProject]?.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed">
                        {projects?.[activeProject]?.description}
                      </p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(projects?.[activeProject]?.results)?.map(([key, value], idx) => (
                        <div key={idx} className="bg-muted rounded-xl p-4 text-center">
                          <div className="text-2xl font-gilroy font-bold text-primary mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-text-secondary capitalize">
                            {key === 'conversion' ? 'Conversión' :
                             key === 'traffic' ? 'Tráfico' :
                             key === 'leads'? 'Leads/Ventas' : 'Tiempo'}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-text-secondary mb-3">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects?.[activeProject]?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                      <p className="text-text-secondary italic mb-4">
                        "{projects?.[activeProject]?.testimonial?.text}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-secondary">
                            {projects?.[activeProject]?.testimonial?.author}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {projects?.[activeProject]?.testimonial?.position}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="default"
                        iconName="ExternalLink"
                        iconPosition="right"
                      >
                        Ver caso completo
                      </Button>
                      <Button
                        variant="outline"
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Proyecto similar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects?.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeProject ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 card-elevated">
            <h3 className="text-2xl font-gilroy font-semibold text-secondary mb-4">
              ¿Listo para el siguiente proyecto exitoso?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Únete a más de 150+ empresas que han transformado su presencia digital con nosotros.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              className="text-lg px-8 py-4"
            >
              Iniciar mi proyecto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;