import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const clientLogos = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Tecnología'
    },
    {
      name: 'Global Retail Group',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
      industry: 'Retail'
    },
    {
      name: 'FinanceFirst Bank',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Finanzas'
    },
    {
      name: 'HealthCare Plus',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
      industry: 'Salud'
    },
    {
      name: 'EduTech Institute',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Educación'
    },
    {
      name: 'Manufacturing Pro',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
      industry: 'Manufactura'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO',
      company: 'TechCorp Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      content: `Lovap Corporate transformó completamente nuestra presencia digital. El nuevo sitio web no solo es visualmente impresionante, sino que ha aumentado nuestras conversiones en un 340%. Su enfoque estratégico y atención al detalle son excepcionales.`,
      rating: 5,
      project: 'Sitio Web Corporativo + E-commerce',
      results: '+340% conversiones'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Director de Marketing',
      company: 'Global Retail Group',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      content: `El equipo de Lovap entendió perfectamente nuestros objetivos de negocio. La plataforma e-commerce que desarrollaron maneja miles de transacciones diarias sin problemas. ROI excepcional en tiempo récord.`,
      rating: 5,
      project: 'Plataforma E-commerce Avanzada',
      results: '+280% ventas online'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Fundadora',
      company: 'HealthCare Plus',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      content: `Profesionalismo y expertise técnico de primer nivel. Lovap no solo desarrolló nuestro sitio web, sino que se convirtió en nuestro socio estratégico digital. Los resultados hablan por sí solos.`,
      rating: 5,
      project: 'Portal de Salud Digital',
      results: '+450% usuarios activos'
    }
  ];

  const certifications = [
    {
      name: 'Google Partner',
      icon: 'Award',
      description: 'Certificación oficial Google',
      color: 'text-blue-600'
    },
    {
      name: 'ISO 27001',
      icon: 'Shield',
      description: 'Seguridad de la información',
      color: 'text-green-600'
    },
    {
      name: 'AWS Partner',
      icon: 'Cloud',
      description: 'Amazon Web Services',
      color: 'text-orange-600'
    },
    {
      name: 'GDPR Compliant',
      icon: 'Lock',
      description: 'Protección de datos',
      color: 'text-purple-600'
    }
  ];

  const stats = [
    {
      number: '150+',
      label: 'Proyectos Completados',
      icon: 'CheckCircle',
      color: 'text-green-600'
    },
    {
      number: '98%',
      label: 'Satisfacción Cliente',
      icon: 'Heart',
      color: 'text-red-600'
    },
    {
      number: '2h',
      label: 'Tiempo Respuesta',
      icon: 'Clock',
      color: 'text-blue-600'
    },
    {
      number: '5★',
      label: 'Calificación Promedio',
      icon: 'Star',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-700 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Confianza y Credibilidad</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-6">
            La Confianza de Empresas
            <span className="text-gray-400 block">Líderes en Colombia</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Más de 150 empresas han confiado en nosotros para transformar su presencia digital y acelerar su crecimiento online.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${stat?.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={stat?.icon} size={28} className={stat?.color} />
              </div>
              <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-text-secondary font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-xl font-gilroy font-semibold text-center text-secondary mb-8">
            Empresas que Confían en Nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos?.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                  <Image
                    src={client?.logo}
                    alt={client?.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-xs text-text-secondary text-center">
                  <div className="font-medium">{client?.name}</div>
                  <div className="text-xs opacity-70">{client?.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-gilroy font-bold text-center text-secondary mb-12">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </blockquote>

                {/* Results */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium text-primary mb-1">
                    Proyecto: {testimonial?.project}
                  </div>
                  <div className="text-lg font-gilroy font-bold text-secondary">
                    {testimonial?.results}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-secondary">{testimonial?.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial?.position}, {testimonial?.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-muted to-white rounded-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-gilroy font-bold text-secondary mb-4">
              Certificaciones y Garantías
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cumplimos con los más altos estándares de calidad, seguridad y mejores prácticas de la industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 ${cert?.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={cert?.icon} size={28} className={cert?.color} />
                </div>
                <h4 className="font-gilroy font-semibold text-secondary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="CheckCircle" size={16} />
              <span>Garantía de Satisfacción 100%</span>
            </div>
            <p className="text-sm text-text-secondary mt-2">
              Si no estás completamente satisfecho con nuestro trabajo, te devolvemos tu dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;