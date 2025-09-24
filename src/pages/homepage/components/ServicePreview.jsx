import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ServicePreview = () => {
  const services = [
    {
      id: 1,
      title: "Landing Pages",
      description:
        "Diseños optimizados para captar leads y aumentar conversiones con pruebas A/B.",
      icon: "Target",
      metrics: {
        conversion: "+285% en leads",
        time: "Entrega 7-14 días",
        roi: "ROI estimado 450%",
      },
      features: [
        "Optimización de conversión",
        "Responsive",
        "Analytics integrado",
        "Pruebas A/B",
      ],
      color: "primary",
      cta: "Impulsa tus conversiones",
    },
    {
      id: 2,
      title: "Sitios Corporativos",
      description:
        "Presencia digital profesional que refuerza credibilidad y confianza en tu marca.",
      icon: "Building",
      metrics: {
        conversion: "+180% en visibilidad",
        time: "Entrega 21-30 días",
        roi: "ROI estimado 320%",
      },
      features: ["Diseño profesional", "CMS personalizado", "SEO optimizado", "Soporte técnico"],
      color: "secondary",
      cta: "Haz crecer tu marca",
    },
    {
      id: 3,
      title: "Desarrollo Personalizado",
      description:
        "Soluciones web a medida con funcionalidades únicas para tu negocio.",
      icon: "Code",
      metrics: {
        conversion: "+350% en eficiencia",
        time: "Entrega 30-60 días",
        roi: "ROI estimado 580%",
      },
      features: ["Funcionalidades a medida", "Integración APIs", "Escalabilidad", "Mantenimiento"],
      color: "success",
      cta: "Diseña tu solución",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  });

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
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} />
            <span>Nuestros Servicios</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Soluciones que
            <span className="text-primary"> impulsan resultados</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Cada servicio está diseñado para generar impacto medible en tu negocio,
            desde conversiones hasta crecimiento sostenible.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {services?.map((service, index) => (
            <motion.article
              key={service?.id}
              variants={cardVariants(index)}
              className="group relative bg-card border border-border rounded-2xl p-8 card-elevated hover:card-elevated-strong hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service?.color === "primary"
                    ? "bg-primary/10"
                    : service?.color === "secondary"
                    ? "bg-secondary/10"
                    : "bg-success/10"
                }`}
              >
                <Icon
                  name={service?.icon}
                  size={24}
                  className={
                    service?.color === "primary"
                      ? "text-primary"
                      : service?.color === "secondary"
                      ? "text-secondary"
                      : "text-success"
                  }
                />
              </div>

              {/* Content */}
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-gilroy font-semibold text-secondary group-hover:text-primary transition-colors">
                  {service?.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service?.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-xl">
                {Object.entries(service?.metrics)?.map(([key, value]) => (
                  <div key={key} className="text-center">
                    <span
                      className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                        service?.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : service?.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service?.features?.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-text-secondary bg-muted/50 px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <Icon name="Check" size={14} className="text-success" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="w-full flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-2 text-sm font-medium text-secondary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                aria-label={`Más información sobre ${service?.title}`}
              >
                {service?.cta}
                <Icon name="ArrowRight" size={16} />
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 card-elevated">
            <h3 className="text-2xl font-gilroy font-semibold text-secondary mb-4">
              ¿No encuentras lo que necesitas?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Creamos soluciones personalizadas para cada negocio.
              Cuéntanos tu proyecto y diseñaremos la estrategia perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition">
                  <Icon name="Eye" size={16} />
                  Ver todos los servicios
                </button>
              </Link>
              <Link to="/contact">
                <button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-secondary font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                  <Icon name="MessageCircle" size={16} />
                  Consulta personalizada
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePreview;
