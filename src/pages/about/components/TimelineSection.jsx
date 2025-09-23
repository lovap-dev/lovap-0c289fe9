import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      id: 1,
      year: "2019",
      title: "Fundación de Lovap",
      description: "Carlos Mendoza funda Lovap con la visión de transformar ideas empresariales en experiencias digitales excepcionales.",
      achievement: "Primer cliente: TechStart Solutions",
      icon: "Rocket",
      stats: { projects: 5, team: 2, clients: 3 }
    },
    {
      id: 2,
      year: "2020",
      title: "Expansión del Equipo",
      description: "Incorporación de especialistas en UX/UI y desarrollo full-stack. Primeros proyectos de e-commerce con resultados excepcionales.",
      achievement: "Primer proyecto con +200% ROI",
      icon: "Users",
      stats: { projects: 25, team: 6, clients: 15 }
    },
    {
      id: 3,
      year: "2021",
      title: "Certificaciones Técnicas",
      description: "El equipo obtiene certificaciones AWS, Google Cloud y React Professional. Implementación de metodologías ágiles.",
      achievement: "Google Partner Certification",
      icon: "Award",
      stats: { projects: 50, team: 10, clients: 35 }
    },
    {
      id: 4,
      year: "2022",
      title: "Reconocimiento Industrial",
      description: "Lovap es reconocida como \'Top Development Agency\' por TechReview. Lanzamiento de servicios de consultoría estratégica.",
      achievement: "Top Developer Award 2022",
      icon: "Trophy",
      stats: { projects: 85, team: 15, clients: 60 }
    },
    {
      id: 5,
      year: "2023",
      title: "Innovación y Crecimiento",
      description: "Implementación de IA en procesos de desarrollo. Expansión a mercados internacionales con clientes en 5 países.",
      achievement: "Expansión Internacional",
      icon: "Globe",
      stats: { projects: 120, team: 20, clients: 95 }
    },
    {
      id: 6,
      year: "2024",
      title: "Liderazgo en Excelencia",
      description: "Consolidación como líder en desarrollo web estratégico. Implementación de nuevas tecnologías y procesos de vanguardia.",
      achievement: "150+ Proyectos Exitosos",
      icon: "Crown",
      stats: { projects: 150, team: 25, clients: 120 }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Nuestra Historia de Crecimiento</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            5 Años de
            <span className="text-primary"> Innovación Continua</span>
          </h2>
          
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Desde nuestros humildes comienzos hasta convertirnos en líderes del desarrollo web estratégico, 
            cada hito marca nuestro compromiso inquebrantable con la excelencia y el crecimiento.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <Icon name={milestone?.icon} size={16} className="text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'
                }`}>
                  <div className="bg-card rounded-2xl p-8 card-elevated hover:card-elevated-strong transition-smooth">
                    {/* Year Badge */}
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-bold mb-4">
                      <Icon name="Calendar" size={14} />
                      <span>{milestone?.year}</span>
                    </div>

                    <h3 className="text-xl font-gilroy font-bold text-secondary mb-3">
                      {milestone?.title}
                    </h3>

                    <p className="text-text-primary/80 mb-4 leading-relaxed">
                      {milestone?.description}
                    </p>

                    {/* Achievement Highlight */}
                    <div className="bg-primary/5 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Icon name="Star" size={16} className="text-primary" />
                        <span className="text-primary font-inter font-semibold text-sm">
                          Logro Destacado
                        </span>
                      </div>
                      <p className="text-secondary font-medium mt-1">
                        {milestone?.achievement}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-gilroy font-bold text-primary">
                          {milestone?.stats?.projects}
                        </div>
                        <div className="text-xs text-text-primary/70">Proyectos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-gilroy font-bold text-primary">
                          {milestone?.stats?.team}
                        </div>
                        <div className="text-xs text-text-primary/70">Equipo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-gilroy font-bold text-primary">
                          {milestone?.stats?.clients}
                        </div>
                        <div className="text-xs text-text-primary/70">Clientes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Telescope" size={32} className="text-primary" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-gilroy font-bold text-secondary mb-4">
              Visión 2025 y Más Allá
            </h3>
            
            <p className="text-lg text-text-primary/80 max-w-3xl mx-auto mb-8">
              Nuestro futuro se construye sobre la innovación continua, la excelencia técnica 
              y el compromiso inquebrantable con el éxito de nuestros socios estratégicos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h4 className="font-gilroy font-bold text-secondary mb-2">
                  IA Integrada
                </h4>
                <p className="text-sm text-text-primary/70">
                  Desarrollo asistido por IA para mayor eficiencia y calidad
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <h4 className="font-gilroy font-bold text-secondary mb-2">
                  Expansión Global
                </h4>
                <p className="text-sm text-text-primary/70">
                  Presencia en 10+ países con equipos localizados
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Rocket" size={24} className="text-primary" />
                </div>
                <h4 className="font-gilroy font-bold text-secondary mb-2">
                  Innovación Web3
                </h4>
                <p className="text-sm text-text-primary/70">
                  Liderando la próxima generación de experiencias web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;