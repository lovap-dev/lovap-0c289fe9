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
        window.location.href = 'tel:+34900123456';
        break;
      case 'whatsapp':
        window.open('https://wa.me/34600789123', '_blank');
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
              <button
                onClick={() => {
                  const quoteElement = document.querySelector('#quote-form');
                  if (quoteElement) {
                    quoteElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsExpanded(false);
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-text-primary hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="Calculator" size={16} className="text-orange-600" />
                <span>Solicitar Cotización</span>
              </button>
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
      {/* Quick Phone Button (Always Visible) */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => handleQuickContact('phone')}
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Llamar Ahora"
        >
          <Icon name="Phone" size={20} className="group-hover:scale-110 transition-transform" />
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