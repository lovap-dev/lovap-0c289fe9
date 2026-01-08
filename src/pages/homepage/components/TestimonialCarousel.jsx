import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Elena Rodríguez",
      position: "CEO",
      company: "InnovaTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: `Trabajar con Lovap fue una experiencia transformadora. No solo crearon un sitio web excepcional, sino que nos ayudaron a entender cómo convertir visitantes en clientes. Nuestras conversiones aumentaron un 340% en los primeros tres meses.`,
      results: {
        metric: "+340%",
        description: "Aumento en conversiones",
        timeframe: "3 meses"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      industry: "Tecnología"
    },
    {
      id: 2,
      name: "Miguel Santos",
      position: "Director de Marketing",
      company: "GreenEco Marketplace",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: `La atención al detalle y el enfoque estratégico de Lovap superaron nuestras expectativas. Crearon una plataforma que no solo se ve increíble, sino que funciona perfectamente. Nuestro ROI se multiplicó por 4 en el primer año.`,
      results: {
        metric: "400%",
        description: "ROI primer año",
        timeframe: "12 meses"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      industry: "E-commerce"
    },
    {
      id: 3,
      name: "Carmen López",
      position: "Fundadora",
      company: "HealthCare Plus",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: `Lovap entendió perfectamente nuestra visión y la convirtió en realidad digital. Su proceso es transparente, profesional y orientado a resultados. La nueva plataforma nos ha permitido llegar a miles de pacientes más.`,
      results: {
        metric: "+280%",
        description: "Nuevos pacientes",
        timeframe: "6 meses"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
      industry: "Salud"
    },
    {
      id: 4,
      name: "David Martínez",
      position: "CTO",
      company: "FinanceFlow",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: `Como CTO, valoro la excelencia técnica y Lovap la entrega en cada proyecto. Su código es limpio, escalable y mantenible. Además, su enfoque en la experiencia del usuario es excepcional. Definitivamente volveremos a trabajar con ellos.`,
      results: {
        metric: "+195%",
        description: "Eficiencia operativa",
        timeframe: "4 meses"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      industry: "Finanzas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-200 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>Testimonios</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Lo que dicen
            <span className="text-primary"> nuestros clientes</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Más de 150+ empresas confían en nosotros para transformar su presencia digital. 
            Escucha sus historias de éxito.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-card border border-border rounded-3xl overflow-hidden card-elevated-strong"
            >
              <div className="grid lg:grid-cols-1 gap-0">
                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, idx) => (
                        <Icon key={idx} name="Star" size={20} className="text-warning fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                      "{testimonials?.[currentTestimonial]?.text}"
                    </blockquote>

                    {/* Results */}
                    <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-3xl font-gilroy font-bold text-primary">
                            {testimonials?.[currentTestimonial]?.results?.metric}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {testimonials?.[currentTestimonial]?.results?.description}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-text-secondary">
                            Resultado obtenido en {testimonials?.[currentTestimonial]?.results?.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-gilroy font-semibold text-secondary text-lg">
                          {testimonials?.[currentTestimonial]?.name}
                        </div>
                        <div className="text-text-secondary">
                          {testimonials?.[currentTestimonial]?.position} · {testimonials?.[currentTestimonial]?.company}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {testimonials?.[currentTestimonial]?.industry}
                        </span>
                        <button
                          onClick={prevTestimonial}
                          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:bg-primary/10 transition-colors"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-secondary hover:bg-primary/10 transition-colors"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonial ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "150+", label: "Clientes satisfechos" },
            { number: "98%", label: "Tasa de satisfacción" },
            { number: "340%", label: "Conversión promedio" },
            { number: "24/7", label: "Soporte técnico" }
          ]?.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="text-text-secondary">
                {stat?.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;