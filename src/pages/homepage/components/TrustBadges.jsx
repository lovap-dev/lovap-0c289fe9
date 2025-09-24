import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const TrustBadges = () => {
  const certifications = [
    {
      id: 1,
      name: "SSL Certificado",
      description: "Seguridad garantizada",
      icon: "Shield",
      color: "success"
    },
    {
      id: 2,
      name: "GDPR Compliant",
      description: "Protección de datos",
      icon: "Lock",
      color: "primary"
    },
    {
      id: 3,
      name: "ISO 27001",
      description: "Seguridad información",
      icon: "Award",
      color: "secondary"
    },
    {
      id: 4,
      name: "Google Partner",
      description: "Partner certificado",
      icon: "Star",
      color: "warning"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "InnovateHub",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "GreenEco",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "HealthPlus",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "FinanceFlow",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      name: "EduTech",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    }
  ];

  const guarantees = [
    {
      icon: "Clock",
      title: "Entrega Garantizada",
      description: "Cumplimos los plazos acordados o devolvemos tu dinero"
    },
    {
      icon: "RefreshCw",
      title: "Revisiones Ilimitadas",
      description: "Ajustes sin costo hasta que estés 100% satisfecho"
    },
    {
      icon: "Headphones",
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible todos los días del año"
    },
    {
      icon: "TrendingUp",
      title: "Resultados Medibles",
      description: "Garantizamos mejoras cuantificables en tus métricas"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            <Icon name="Shield" size={16} />
            <span>Confianza & Seguridad</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Trabajamos con
            <span className="text-secondary"> total transparencia</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Certificaciones, garantías y el respaldo de más de 150 empresas que confían en nosotros 
            para sus proyectos digitales más importantes.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications?.map((cert) => (
            <motion.div
              key={cert?.id}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 text-center card-elevated hover:card-elevated-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                cert?.color === 'success' ? 'bg-success/10' :
                cert?.color === 'primary' ? 'bg-primary/10' :
                cert?.color === 'secondary'? 'bg-secondary/10' : 'bg-warning/10'
              }`}>
                <Icon 
                  name={cert?.icon} 
                  size={24} 
                  className={
                    cert?.color === 'success' ? 'text-success' :
                    cert?.color === 'primary' ? 'text-primary' :
                    cert?.color === 'secondary'? 'text-secondary' : 'text-warning'
                  }
                />
              </div>
              <h3 className="font-gilroy font-semibold text-secondary mb-2">
                {cert?.name}
              </h3>
              <p className="text-sm text-text-secondary">
                {cert?.description}
              </p>
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-gilroy font-semibold text-secondary mb-4">
              Empresas que confían en nosotros
            </h3>
            <p className="text-text-secondary">
              Más de 150+ empresas han transformado su presencia digital con Lovap
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 card-elevated">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos?.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                >
                  <div className="w-20 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-text-secondary">
                      {client?.name}
                    </span>
                  </div>
                </div>
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
                  <h3 className="text-xl font-gilroy font-semibold text-secondary mb-2">
                    {guarantee?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {guarantee?.description}
                  </p>
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
              <h3 className="text-2xl font-gilroy font-semibold text-secondary">
                Seguridad Garantizada
              </h3>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Todos nuestros proyectos incluyen certificados SSL, cumplimiento GDPR, 
              copias de seguridad automáticas y monitoreo 24/7 para garantizar la máxima 
              seguridad y disponibilidad de tu sitio web.
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