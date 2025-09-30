import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-gilroy font-bold leading-tight">
                Soluciones Web que 
                <span className="text-primary"> Impulsan Resultados</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transformamos tu presencia digital en una máquina de conversión con servicios especializados que combinan diseño estratégico, desarrollo técnico y optimización de rendimiento.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-gilroy font-bold text-primary">2h</div>
                <div className="text-sm text-gray-300">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-gilroy font-bold text-primary">99%</div>
                <div className="text-sm text-gray-300">Uptime Garantizado</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-gilroy font-semibold">Consulta Estratégica Gratuita</h3>
                  <Icon name="Gift" size={24} className="text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-sm">Análisis de competencia incluido</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-sm">Estrategia de conversión personalizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-sm">Roadmap técnico detallado</span>
                  </div>
                </div>

             
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-primary text-primary-foreground hover:bg-accent"
                >
                  Agendar Consulta
                </Button>
            


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;