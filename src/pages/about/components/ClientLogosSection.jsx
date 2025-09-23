import React from 'react';
import Icon from '../../../components/AppIcon';

const ClientLogosSection = () => {
  const clientLogos = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      industry: "Tecnología",
      project: "Plataforma E-commerce",
      result: "+250% conversiones"
    },
    {
      id: 2,
      name: "Global Finance Group",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      industry: "Finanzas",
      project: "Portal Corporativo",
      result: "+180% engagement"
    },
    {
      id: 3,
      name: "HealthCare Plus",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      industry: "Salud",
      project: "Sistema de Gestión",
      result: "+300% eficiencia"
    },
    {
      id: 4,
      name: "EduTech Academy",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=100&fit=crop",
      industry: "Educación",
      project: "Plataforma LMS",
      result: "+400% usuarios"
    },
    {
      id: 5,
      name: "RetailMax Chain",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
      industry: "Retail",
      project: "App Móvil",
      result: "+220% ventas"
    },
    {
      id: 6,
      name: "GreenEnergy Co",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop",
      industry: "Energía",
      project: "Dashboard Analytics",
      result: "+150% insights"
    },
    {
      id: 7,
      name: "FoodDelivery Pro",
      logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=100&fit=crop",
      industry: "Alimentación",
      project: "Marketplace",
      result: "+350% pedidos"
    },
    {
      id: 8,
      name: "AutoParts Direct",
      logo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=100&fit=crop",
      industry: "Automoción",
      project: "Catálogo Digital",
      result: "+280% búsquedas"
    }
  ];

  const testimonials = [
    {
      id: 1,
      client: "María Rodríguez",
      position: "CEO, TechCorp Solutions",
      company: "TechCorp Solutions",
      content: `Lovap no solo entregó una plataforma excepcional, sino que se convirtió en un socio estratégico fundamental para nuestro crecimiento. Su enfoque en resultados medibles transformó completamente nuestro negocio digital.`,
      rating: 5,
      project: "Plataforma E-commerce",
      result: "+250% en conversiones"
    },
    {
      id: 2,
      client: "Carlos Mendez",
      position: "CTO, Global Finance Group",
      company: "Global Finance Group",
      content: `La transparencia y profesionalismo del equipo Lovap es incomparable. Cada etapa del proyecto fue comunicada claramente, y los resultados superaron nuestras expectativas más optimistas.`,
      rating: 5,
      project: "Portal Corporativo",
      result: "+180% en engagement"
    },
    {
      id: 3,
      client: "Ana García",
      position: "Directora Digital, HealthCare Plus",
      company: "HealthCare Plus",
      content: `Trabajar con Lovap fue una experiencia transformadora. Su capacidad para entender nuestras necesidades complejas y traducirlas en soluciones técnicas elegantes es verdaderamente excepcional.`,
      rating: 5,
      project: "Sistema de Gestión",
      result: "+300% en eficiencia"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Award" size={16} />
            <span>Clientes que Confían en Nosotros</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Empresas Líderes Eligen
            <span className="text-primary"> Lovap</span>
          </h2>
          
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Desde startups disruptivas hasta corporaciones establecidas, nuestros clientes 
            confían en Lovap para transformar sus visiones digitales en éxitos medibles.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos?.map((client) => (
              <div key={client?.id} className="group">
                <div className="bg-card rounded-2xl p-6 card-elevated hover:card-elevated-strong transition-smooth">
                  <div className="aspect-video bg-muted/30 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="text-lg font-gilroy font-bold text-primary">
                        {client?.name?.split(' ')?.map(word => word?.[0])?.join('')}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-inter font-semibold text-secondary text-sm mb-2 group-hover:text-primary transition-smooth">
                    {client?.name}
                  </h3>
                  
                  <div className="space-y-1 text-xs text-text-primary/70">
                    <div className="flex items-center space-x-1">
                      <Icon name="Building" size={12} />
                      <span>{client?.industry}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Briefcase" size={12} />
                      <span>{client?.project}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-primary">
                      <Icon name="TrendingUp" size={12} />
                      <span className="font-medium">{client?.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary text-center mb-12">
            Lo que Dicen Nuestros
            <span className="text-primary"> Socios</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-card rounded-2xl p-8 card-elevated hover:card-elevated-strong transition-smooth">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-primary fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-text-primary/80 mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-inter font-semibold text-secondary">
                        {testimonial?.client}
                      </div>
                      <div className="text-sm text-text-primary/70">
                        {testimonial?.position}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-gilroy font-bold text-sm">
                        {testimonial?.client?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Result */}
                  <div className="bg-primary/5 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-primary/70">{testimonial?.project}</span>
                      <span className="text-primary font-medium">{testimonial?.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-gilroy font-bold text-secondary mb-4">
              Reconocimientos y Certificaciones
            </h3>
            <p className="text-text-primary/80">
              Nuestro compromiso con la excelencia está respaldado por certificaciones 
              y reconocimientos de la industria.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <div className="text-sm font-inter font-medium text-secondary">
                Google Partner
              </div>
              <div className="text-xs text-text-primary/70">Certificado</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <div className="text-sm font-inter font-medium text-secondary">
                AWS Partner
              </div>
              <div className="text-xs text-text-primary/70">Avanzado</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Star" size={24} className="text-primary" />
              </div>
              <div className="text-sm font-inter font-medium text-secondary">
                Top Developer
              </div>
              <div className="text-xs text-text-primary/70">2024</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={24} className="text-primary" />
              </div>
              <div className="text-sm font-inter font-medium text-secondary">
                ISO 27001
              </div>
              <div className="text-xs text-text-primary/70">Seguridad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;