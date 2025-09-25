import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickContact = (method) => {
    switch (method) {
      case 'phone':
        window.location.href = 'tel:+573006719235';
        break;
      case 'whatsapp':
        try {
          const text = encodeURIComponent('Hola, me interesa una cotización estratégica para mi sitio web. Mi nombre es [Tu nombre]. ¿Podemos coordinar una llamada esta semana?');
          window.open(`https://wa.me/573006719235?text=${text}`, '_blank');
        } catch (_) {
          window.open('https://wa.me/573006719235', '_blank');
        }
        break;
      case 'email':
        window.location.href = 'mailto:lovap.dev@gmail.com';
        break;
      case 'calendar':
        // In real app, this would open calendar booking
        alert('Funcionalidad de calendario se abriría aquí');
        break;
      default:
        break;
    }
    setIsExpanded(false);
  };

  const scrollToForm = () => {
    const formElement = document.querySelector('#contact-form');
    if (formElement) {
      formElement?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-2 animate-in slide-in-from-bottom-2 duration-300">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg border border-border p-3 min-w-[200px]">
            <div className="text-xs font-medium text-text-secondary mb-2 px-2">
              Contacto Rápido
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleQuickContact('phone')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="Phone" size={16} className="text-green-600" />
                <span>Llamar Ahora</span>
              </button>
              <button
                onClick={() => handleQuickContact('whatsapp')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={16} className="text-emerald-600" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => handleQuickContact('email')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="Mail" size={16} className="text-blue-600" />
                <span>Enviar Email</span>
              </button>
              <button
                onClick={() => handleQuickContact('calendar')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="Calendar" size={16} className="text-purple-600" />
                <span>Agendar Reunión</span>
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-white rounded-lg shadow-lg border border-border p-3">
            <div className="text-xs font-medium text-text-secondary mb-2 px-2">
              Formularios
            </div>
            <div className="space-y-1">
              <button
                onClick={scrollToForm}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="MessageSquare" size={16} className="text-secondary" />
                <span>Formulario Contacto</span>
              </button>
              <Button
                onClick={() => {
                  const quoteElement = document.querySelector('#quote-form');
                  if (quoteElement) {
                    quoteElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsExpanded(false);
                }}
                variant="default"
                size="default"
                className="w-full rounded-full h-auto px-6 py-3 text-sm bg-primary text-primary-foreground shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon name="Calculator" size={16} className="text-primary-foreground" />
                  <span>Solicitar Cotización</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Main Floating Button */}
      <div className="relative">
        {/* Primary CTA Button */}
        <Button
          variant="ghost"
          size="lg"
          iconName={isExpanded ? "X" : "MessageCircle"}
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isExpanded ? 'Cerrar' : 'Contactar'}
        </Button>

        {/* Notification Badge */}
        {!isExpanded && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            <Icon name="Zap" size={12} />
          </div>
        )}
      </div>
      {/* Quick WhatsApp Button (Always Visible) */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => handleQuickContact('whatsapp')}
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1DA955] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="WhatsApp"
          aria-label="Abrir WhatsApp"
        >
          {/* WhatsApp official logo (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            className="group-hover:scale-110 transition-transform"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M19.11 17.27c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.45-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.55.72.31 1.29.49 1.73.63.73.23 1.4.2 1.92.12.59-.09 1.77-.73 2.02-1.43.24-.7.24-1.31.17-1.44-.07-.13-.27-.2-.57-.36z"/>
            <path fill="currentColor" d="M26.7 5.3C23.9 2.5 20.2 1 16.2 1 8.4 1 2 7.4 2 15.2c0 2.5.7 4.8 2 6.8L2 31l9.2-2.4c1.9 1 4.1 1.6 6.9 1.6C26 30.2 32 24.2 32 16.9c0-4-1.6-7.6-4.3-10.4zM16.1 28.4c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5.4 1.4 1.4-5.2-.3-.5c-1.2-1.9-1.8-4.1-1.8-6.4 0-6.7 5.5-12.2 12.3-12.2 3.3 0 6.4 1.3 8.7 3.6 2.3 2.3 3.6 5.4 3.6 8.7-.1 6.7-5.6 12.6-12.6 12.6z"/>
          </svg>
        </button>
      </div>
      {/* Response Time Indicator */}
      {!isExpanded && (
        <div className="absolute -top-12 right-0 bg-secondary text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Respuesta rápida</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;