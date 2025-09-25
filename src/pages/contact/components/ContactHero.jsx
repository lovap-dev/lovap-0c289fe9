import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent rounded-lg rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gray-700 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="MessageCircle" size={16} />
                <span>Centro de Conversión</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-gilroy font-bold leading-tight">
                Transformemos Tu
                <span className="text-primary block">Visión Digital</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Conecta con nuestro equipo de expertos y descubre cómo podemos acelerar el crecimiento de tu negocio con soluciones web estratégicas.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-gilroy font-bold text-primary">2h</div>
                <div className="text-sm text-white/70">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-gilroy font-bold text-primary">150+</div>
                <div className="text-sm text-white/70">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-gilroy font-bold text-primary">98%</div>
                <div className="text-sm text-white/70">Satisfacción Cliente</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary text-primary-foreground hover:bg-accent"
              >
                Agendar Consultoría
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                Llamar Ahora
              </Button>
            </div>
          </div>

          {/* Contact Cards Preview */}
          <div className="relative">
            <div className="grid gap-4">
              {/* Quick Contact Card */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-gilroy font-semibold">Contacto Rápido</h3>
                    <p className="text-sm text-white/70">Respuesta inmediata</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} />
                    <span>lovap.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} />
                    <span>+34 900 123 456</span>
                  </div>
                </div>
              </div>

              {/* Project Quote Card */}
              <div className="bg-black/20 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Icon name="Calculator" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-gilroy font-semibold">Cotización Proyecto</h3>
                    <p className="text-sm text-white/70">Estimación personalizada</p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Obtén una propuesta detallada con cronograma y presupuesto específico para tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;