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
      contact: 'hola@lovapcorporate.com',
      action: 'Enviar Email',
      responseTime: 'Respuesta en 2-4 horas',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Llamada Directa',
      description: 'Para consultas urgentes y discusión inmediata',
      contact: '+34 900 123 456',
      action: 'Llamar Ahora',
      responseTime: 'Lun-Vie 9:00-18:00 CET',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      title: 'WhatsApp Business',
      description: 'Para comunicación rápida y seguimiento de proyectos',
      contact: '+34 600 789 123',
      action: 'Abrir WhatsApp',
      responseTime: 'Respuesta inmediata',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'calendar',
      icon: 'Calendar',
      title: 'Reunión Estratégica',
      description: 'Para discusión profunda de objetivos y estrategia',
      contact: 'Sesión de 45 minutos',
      action: 'Agendar Reunión',
      responseTime: 'Disponible esta semana',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn Profesional',
      description: 'Para networking y conexiones empresariales',
      contact: '/company/lovap-corporate',
      action: 'Conectar LinkedIn',
      responseTime: 'Red profesional activa',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    },
    {
      id: 'support',
      icon: 'Headphones',
      title: 'Soporte Técnico',
      description: 'Para clientes existentes y soporte post-lanzamiento',
      contact: 'soporte@lovapcorporate.com',
      action: 'Contactar Soporte',
      responseTime: '24/7 para emergencias',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

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
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Múltiples Canales</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary mb-6">
            Elige Tu Método de
            <span className="text-primary block">Contacto Preferido</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ofrecemos múltiples formas de conectar contigo. Selecciona el canal que mejor se adapte a tu estilo de comunicación y urgencia del proyecto.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`${method?.bgColor} ${method?.borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${method?.bgColor} border ${method?.borderColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={method?.icon} size={24} className={method?.iconColor} />
                </div>
                <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                  {method?.responseTime}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 mb-6">
                <h3 className="text-lg font-gilroy font-semibold text-secondary">
                  {method?.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {method?.description}
                </p>
                <div className="text-sm font-medium text-gray-700">
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
                onClick={() => handleContactMethod(method)}
                className="group-hover:bg-secondary group-hover:text-white transition-colors duration-300"
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 border border-red-200 rounded-full flex items-center justify-center">
              <Icon name="AlertTriangle" size={28} className="text-red-600" />
            </div>
          </div>
          <h3 className="text-xl font-gilroy font-bold text-secondary mb-2">
            ¿Emergencia en tu Sitio Web?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Para problemas críticos que afecten tu negocio (sitio caído, problemas de seguridad, pérdida de datos), contáctanos inmediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="destructive"
              size="lg"
              iconName="Phone"
              iconPosition="left"
            >
              Emergencia: +34 600 911 911
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
            >
              emergencia@lovapcorporate.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;