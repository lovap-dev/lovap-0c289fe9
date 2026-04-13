import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

function ClientLogoCard({ client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background/90 p-4 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-md sm:p-5">
      <div className="relative flex min-h-[76px] flex-1 items-center justify-center sm:min-h-[88px]">
        {!failed ? (
          <img
            src={client.logo}
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            width={180}
            height={56}
            onError={() => setFailed(true)}
            className="max-h-12 w-full max-w-[180px] object-contain object-center transition duration-300 group-hover:scale-[1.02] sm:max-h-14"
          />
        ) : (
          <div className="flex h-12 w-full max-w-[180px] items-center justify-center rounded-lg bg-muted px-2">
            <Icon name="Building2" size={28} className="text-text-secondary/80" aria-hidden />
          </div>
        )}
      </div>
      <p
        className="mt-3 line-clamp-2 min-h-[2.5rem] text-center text-xs font-medium leading-snug text-secondary sm:text-sm"
        title={client.name}
      >
        {client.name}
      </p>
    </div>
  );
}

const TrustBadges = () => {
  const certifications = [
    {
      id: 1,
      name: "SSL Certificado",
      description: "Seguridad garantizada",
      icon: "Shield",
      color: "primary",
    },
    {
      id: 2,
      name: "GDPR Compliant",
      description: "Protección de datos",
      icon: "Lock",
      color: "primary",
    },
    {
      id: 3,
      name: "ISO 27001",
      description: "Seguridad información",
      icon: "Award",
      color: "primary",
    },
  ];

  const clientLogos = [
    {
      name: "Café Uribe",
      logo: "https://cafeuribe.com/logo_claro.webp",
    },
    {
      name: "Unidad Jurídica Lawyer & Law",
      logo: "https://unidadjuridica.vercel.app/logo-unidad-juridica.png",
    },
    {
      name: "ProSalud",
      logo: "https://prosalud.org.co/images/logo_prosalud_fondo.png",
    },
    {
      name: "U2RED SAS",
      logo: "https://www.u2red.co/images/logo.png",
    },
  ];

  const guarantees = [
    {
      icon: "Clock",
      title: "Entrega Garantizada",
      description: "Cumplimos los plazos acordados o devolvemos tu dinero",
    },
    {
      icon: "RefreshCw",
      title: "Revisiones Ilimitadas",
      description: "Ajustes sin costo hasta que estés 100% satisfecho",
    },
    {
      icon: "Headphones",
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible todos los días del año",
    },
    {
      icon: "TrendingUp",
      title: "Resultados Medibles",
      description: "Garantizamos mejoras cuantificables en tus métricas",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden border-t border-border/30 bg-gradient-to-b from-muted via-muted/95 to-background py-20">
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-80 w-80 rounded-full bg-secondary/[0.06] blur-3xl" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-medium text-secondary shadow-sm backdrop-blur-sm">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Confianza & Seguridad</span>
          </div>

          <h2 className="mb-6 font-gilroy text-4xl font-bold tracking-tight text-secondary lg:text-5xl">
            Trabajamos con total transparencia
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Certificaciones, garantías y el respaldo de empresas que confían en nosotros para sus proyectos digitales más
            importantes.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {certifications?.map((cert) => (
            <motion.div
              key={cert?.id}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 text-center card-elevated hover:card-elevated-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  cert?.color === "success"
                    ? "bg-success/10"
                    : cert?.color === "primary"
                      ? "bg-primary/10"
                      : cert?.color === "secondary"
                        ? "bg-secondary/10"
                        : "bg-warning/10"
                }`}
              >
                <Icon
                  name={cert?.icon}
                  size={24}
                  className={
                    cert?.color === "success"
                      ? "text-success"
                      : cert?.color === "primary"
                        ? "text-primary"
                        : cert?.color === "secondary"
                          ? "text-secondary"
                          : "text-warning"
                  }
                />
              </div>
              <h3 className="font-gilroy font-semibold text-secondary mb-2">{cert?.name}</h3>
              <p className="text-sm text-text-secondary">{cert?.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Clientes</p>
            <h3 className="font-gilroy text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
              Empresas que confían en nosotros
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Marcas y organizaciones que ya transformaron su presencia digital con Lovap.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-card backdrop-blur-sm sm:p-8 md:p-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {clientLogos?.map((client) => (
                <ClientLogoCard key={client.name} client={client} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {guarantees?.map((guarantee, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-8 card-elevated hover:card-elevated-strong transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={guarantee?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-gilroy font-semibold text-secondary mb-2">{guarantee?.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{guarantee?.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 card-elevated">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" size={24} className="text-success" />
              <h3 className="text-2xl font-gilroy font-semibold text-secondary">Seguridad Garantizada</h3>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Todos nuestros proyectos incluyen certificados SSL, cumplimiento GDPR, copias de seguridad automáticas y
              monitoreo 24/7 para garantizar la máxima seguridad y disponibilidad de tu sitio web.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>SSL Incluido</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Backups Diarios</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Monitoreo 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
