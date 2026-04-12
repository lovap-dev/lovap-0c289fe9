import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WHATSAPP_PHONE = '573006719235';
const MEETING_REQUEST_MESSAGE =
  'Hola, me gustaría coordinar una reunión para alinear el proyecto y resolver dudas antes de la cotización. ¿Qué horarios tienen disponibles?';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email',
      description: 'Cotizaciones y consultas con detalle; adjunta referencias o brief.',
      contact: 'lovap.dev@gmail.com',
      action: 'Enviar email',
      responseTime: 'Respuesta en 24 h',
      variant: 'primary',
    },
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Mensajes rápidos y seguimiento del proyecto en el mismo hilo.',
      contact: '+57 300 671 9235',
      action: 'Abrir WhatsApp',
      responseTime: 'Respuesta el mismo día',
      variant: 'accent',
    },
    {
      id: 'calendar',
      icon: 'Calendar',
      title: 'Reunión',
      description: 'Abre WhatsApp con un mensaje listo para pedir una videollamada y acordar horario.',
      contact: '+57 300 671 9235',
      action: 'Solicitar reunión',
      responseTime: 'Según disponibilidad',
      variant: 'secondary',
    },
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
    };
    return styles[variant] || styles.primary;
  };

  const handleContactMethod = (method) => {
    switch (method?.id) {
      case 'email':
        window.location.href = `mailto:${method?.contact}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${WHATSAPP_PHONE}`, '_blank');
        break;
      case 'calendar': {
        const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(MEETING_REQUEST_MESSAGE)}`;
        window.open(url, '_blank');
        break;
      }
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
            <span>Contacto</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-6">
            Cómo
            <span className="text-secondary bg-primary px-2 py-1 rounded-lg block sm:inline sm:ml-2">contactarnos</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Escríbenos por email o WhatsApp. Para una reunión, usa la tarjeta y se abrirá WhatsApp con un mensaje listo.
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