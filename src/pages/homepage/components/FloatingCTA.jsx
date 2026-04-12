import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WHATSAPP_URL = 'https://wa.me/573006719235';
const MAILTO = 'mailto:lovap.dev@gmail.com?subject=Cotización%20desde%20lovap';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      text: "Consulta gratuita disponible",
      icon: "MessageCircle",
      color: "primary"
    },
    {
      text: "Cotización el mismo día",
      icon: "Clock",
      color: "success"
    },
    {
      text: "Descuento 15% este mes",
      icon: "Percent",
      color: "warning"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport
      setIsVisible(scrolled > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded Panel */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-2xl p-6 card-elevated-strong"
                >
                  {/* Close Button */}
                  <button
                    onClick={toggleExpanded}
                    className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors"
                  >
                    <Icon name="X" size={16} className="text-text-secondary" />
                  </button>

                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-lg font-gilroy font-semibold text-secondary mb-2">
                        ¿Listo para empezar?
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Obtén una cotización personalizada para tu proyecto
                      </p>
                    </div>

                    {/* Current Offer */}
                    <motion.div
                      key={currentOffer}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-center space-x-3 p-3 rounded-xl ${
                        offers?.[currentOffer]?.color === 'primary' ? 'bg-primary/10' :
                        offers?.[currentOffer]?.color === 'success'? 'bg-success/10' : 'bg-warning/10'
                      }`}
                    >
                      <Icon 
                        name={offers?.[currentOffer]?.icon} 
                        size={16} 
                        className={
                          offers?.[currentOffer]?.color === 'primary' ? 'text-secondary' :
                          offers?.[currentOffer]?.color === 'success'? 'text-success' : 'text-warning'
                        }
                      />
                      <span className="text-sm font-medium text-secondary">
                        {offers?.[currentOffer]?.text}
                      </span>
                    </motion.div>

                    {/* Action Buttons — <a>+nested <button> breaks clicks; use asChild */}
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        fullWidth
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="rounded-xl shadow-sm font-gilroy font-semibold"
                      >
                        <Link to="/contact#quote-form">Solicitar cotización</Link>
                      </Button>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          iconName="MessageCircle"
                          iconPosition="left"
                          className="w-full rounded-xl border-2 border-border bg-background font-gilroy font-medium shadow-sm hover:bg-muted/80"
                          onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
                        >
                          WhatsApp
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          iconName="Mail"
                          iconPosition="left"
                          className="w-full rounded-xl border-2 border-border bg-background font-gilroy font-medium shadow-sm hover:bg-muted/80"
                          onClick={() => {
                            window.location.href = MAILTO;
                          }}
                        >
                          Email
                        </Button>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                      <div className="text-center">
                        <div className="text-lg font-gilroy font-bold text-secondary">2h</div>
                        <div className="text-xs text-text-secondary">Respuesta</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-gilroy font-bold text-success">5+</div>
                        <div className="text-xs text-text-secondary">Clientes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-gilroy font-bold text-warning">100%</div>
                        <div className="text-xs text-text-secondary">Satisfacción</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              onClick={toggleExpanded}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
              
              {/* Icon */}
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name="X" size={24} className="text-primary-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name="MessageCircle" size={24} className="text-primary-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-error rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">1</span>
              </div>
            </motion.button>

            {/* Tooltip */}
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-secondary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
              >
                ¡Cotización gratuita!
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;