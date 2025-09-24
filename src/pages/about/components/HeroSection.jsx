import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-primary/5 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23B8FF65%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-secondary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Conoce al Equipo Lovap</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-gilroy font-bold text-secondary mb-6">
            Socios Estratégicos en
            <span className="block text-secondary bg-primary px-2 py-1 rounded-lg">Tecnología Web</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-text-primary/80 mb-8 leading-relaxed">
            No somos solo una agencia de desarrollo. Somos arquitectos digitales que transforman 
            visiones empresariales en experiencias web que impulsan el crecimiento medible. 
            Cada proyecto es una asociación estratégica hacia el éxito.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="right"
            >
              Hablemos de tu Proyecto
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              Ver Nuestro Proceso
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg">150+</div>
            <div className="text-sm text-text-primary/70">Proyectos Exitosos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg">98%</div>
            <div className="text-sm text-text-primary/70">Satisfacción Cliente</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg">5+</div>
            <div className="text-sm text-text-primary/70">Años Experiencia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-gilroy font-bold text-secondary bg-primary px-2 py-1 rounded-lg">24/7</div>
            <div className="text-sm text-text-primary/70">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;