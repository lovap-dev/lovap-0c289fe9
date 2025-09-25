import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Directo',
      description: 'Para consultas detalladas y documentación de proyectos',
      contact: 'lovap.dev@gmail.com',
      action: 'Enviar Email',
      responseTime: 'Respuesta en 2-4 horas',
      variant: 'primary'
    },
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Llamada Directa',
      description: 'Para consultas urgentes y discusión inmediata',
      contact: '+34 900 123 456',
      action: 'Llamar Ahora',
      responseTime: 'Lun-Vie 9:00-18:00 CET',
      variant: 'secondary'
    },
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      title: 'WhatsApp Business',
      description: 'Para comunicación rápida y seguimiento de proyectos',
      contact: '+34 600 789 123',
      action: 'Abrir WhatsApp',
      responseTime: 'Respuesta inmediata',
      variant: 'accent'
    },
    {
      id: 'calendar',
      icon: 'Calendar',
      title: 'Reunión Estratégica',
      description: 'Para discusión profunda de objetivos y estrategia',
      contact: 'Sesión de 45 minutos',
      action: 'Agendar Reunión',
      responseTime: 'Disponible esta semana',
      variant: 'muted'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn Profesional',
      description: 'Para networking y conexiones empresariales',
      contact: '/company/lovap-corporate',
      action: 'Conectar LinkedIn',
      responseTime: 'Red profesional activa',
      variant: 'primary'
    },
    {
      id: 'support',
      icon: 'Headphones',
      title: 'Soporte Técnico',
      description: 'Para clientes existentes y soporte post-lanzamiento',
      contact: 'soporte@lovapcorporate.com',
      action: 'Contactar Soporte',
      responseTime: '24/7 para emergencias',
      variant: 'warning'
    }
  ];

  const getVariantStyles = (variant) => {
    const styles = {
      primary: {
        bg: 'bg-primary-bg/5 hover:bg-primary-bg/10',
        border: 'border-primary/20',
        icon: 'text-primary',
        iconBg: 'bg-primary-bg/10'
      },
      secondary: {
        bg: 'bg-secondary/5 hover:bg-secondary/10',
        border: 'border-secondary/20',
        icon: 'text-secondary',
        iconBg: 'bg-secondary/10'
      },
      accent: {
        bg: 'bg-accent/5 hover:bg-accent/10',
        border: 'border-accent/20',
        icon: 'text-accent',
        iconBg: 'bg-accent/10'
      },
      muted: {
        bg: 'bg-muted hover:bg-muted/80',
        border: 'border-border',
        icon: 'text-muted-foreground',
        iconBg: 'bg-muted'
      },
      warning: {
        bg: 'bg-warning/5 hover:bg-warning/10',
        border: 'border-warning/20',
        icon: 'text-warning',
        iconBg: 'bg-warning/10'
      }
    };
    return styles[variant] || styles.primary;
  };

  const handleContactMethod = (method) => {
    switch (method?.id) {
      case 'email':
        window.location.href = `mailto:${method?.contact}`;
        break;
      case 'phone':
        window.location.href = `tel:${method?.contact}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/34600789123`, '_blank');
        break;
      case 'calendar':
        // In real app, this would open calendar booking
        alert('Funcionalidad de calendario se abriría aquí');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/company/lovap-corporate', '_blank');
        break;
      case 'support':
        window.location.href = `mailto:${method?.contact}`;
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-200 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Múltiples Canales</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-6">
            Elige Tu Método de
            <span className="text-secondary bg-primary px-2 py-1 rounded-lg block">Contacto Preferido</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ofrecemos múltiples formas de conectar contigo. Selecciona el canal que mejor se adapte a tu estilo de comunicación y urgencia del proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods?.map((method) => {
            const styles = getVariantStyles(method?.variant);
            return (
              <div
                key={method?.id}
                className={`${styles.bg} ${styles.border} border rounded-2xl p-6 transition-all duration-300 group cursor-pointer card-elevated hover:card-elevated-strong`}
                onClick={() => handleContactMethod(method)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${styles.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={method?.icon} size={24} className={styles.icon} />
                  </div>
                  <div className="text-xs text-muted-foreground bg-card px-3 py-1.5 rounded-lg shadow-sm">
                    {method?.responseTime}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-gilroy font-bold text-secondary group-hover:text-secondary transition-colors">
                    {method?.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {method?.description}
                  </p>
                  <div className="text-sm font-medium text-text-primary bg-card px-3 py-2 rounded-lg">
                    {method?.contact}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  {method?.action}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;