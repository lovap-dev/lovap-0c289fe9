import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      icon: "Target",
      title: "Orientados a Resultados",
      description: `Cada línea de código, cada pixel de diseño, cada estrategia implementada tiene un propósito claro: generar resultados medibles que impulsen el crecimiento de tu negocio.`,
      metrics: "ROI promedio +340%"
    },
    {
      id: 2,
      icon: "Users",
      title: "Asociación Estratégica",
      description: `No somos proveedores, somos socios. Trabajamos codo a codo contigo, entendiendo tu visión y transformándola en realidad digital con transparencia total en cada paso.`,
      metrics: "98% retención clientes"
    },
    {
      id: 3,
      icon: "Zap",
      title: "Innovación Continua",
      description: `Mantenemos el pulso de las últimas tecnologías y tendencias digitales para asegurar que tu solución web esté siempre a la vanguardia del mercado.`,
      metrics: "Tecnologías más recientes"
    },
    {
      id: 4,
      icon: "Shield",
      title: "Calidad Inquebrantable",
      description: `Cada proyecto pasa por rigurosos procesos de calidad. No entregamos hasta que cada detalle cumple con nuestros estándares de excelencia y los tuyos.`,
      metrics: "99.9% uptime garantizado"
    },
    {
      id: 5,
      icon: "Clock",
      title: "Velocidad con Propósito",
      description: `Entendemos que el tiempo es dinero. Nuestros procesos optimizados garantizan entregas rápidas sin comprometer la calidad ni la funcionalidad.`,
      metrics: "50% más rápido promedio"
    },
    {
      id: 6,
      icon: "Heart",
      title: "Pasión por la Excelencia",
      description: `Cada miembro del equipo Lovap vive y respira desarrollo web. Esta pasión se refleja en cada proyecto, convirtiendo desafíos en oportunidades de crecimiento.`,
      metrics: "Satisfacción 100% equipo"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Heart" size={16} />
            <span>Nuestros Valores Fundamentales</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Los Principios que
            <span className="text-primary"> Nos Definen</span>
          </h2>
          
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Más que una metodología de trabajo, estos valores son el ADN de Lovap. 
            Guían cada decisión, cada interacción y cada línea de código que escribimos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value) => (
            <div key={value?.id} className="bg-card rounded-2xl p-8 card-elevated hover:card-elevated-strong transition-smooth group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon name={value?.icon} size={24} />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-secondary mb-3">
                  {value?.title}
                </h3>
                
                <p className="text-text-primary/80 leading-relaxed mb-4">
                  {value?.description}
                </p>
                
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-inter font-medium">
                  <Icon name="TrendingUp" size={14} />
                  <span>{value?.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Highlight */}
        <div className="mt-16 bg-card rounded-3xl p-8 lg:p-12 card-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-6">
                Cultura de
                <span className="text-primary"> Crecimiento Continuo</span>
              </h3>
              
              <p className="text-text-primary/80 mb-6 leading-relaxed">
                En Lovap, creemos que el aprendizaje nunca termina. Invertimos en el desarrollo 
                profesional de nuestro equipo porque sabemos que profesionales actualizados 
                entregan soluciones de vanguardia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="BookOpen" size={16} className="text-primary" />
                  </div>
                  <span className="text-text-primary">Formación continua en nuevas tecnologías</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={16} className="text-primary" />
                  </div>
                  <span className="text-text-primary">Colaboración y mentoring interno</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={16} className="text-primary" />
                  </div>
                  <span className="text-text-primary">Certificaciones profesionales patrocinadas</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <div className="text-3xl font-gilroy font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-text-primary/70">Horas Formación/Mes</div>
              </div>
              
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <div className="text-3xl font-gilroy font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-text-primary/70">Certificaciones Activas</div>
              </div>
              
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <div className="text-3xl font-gilroy font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-text-primary/70">Participación Equipo</div>
              </div>
              
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <div className="text-3xl font-gilroy font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-text-primary/70">Satisfacción Interna</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;