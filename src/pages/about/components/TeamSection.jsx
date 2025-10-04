import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Juan Pablo Pabón Pabón",
      role: "CEO & Fundador",
      specialization: "Desarrollador Fullstack",
      experience: "3+ años",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: `Desarrollador y estudiante de Ingeniería Informática con más de 3 años de experiencia creando soluciones tecnológicas eficientes y orientadas a resultados.`,
      skills: ["Liderazgo Estratégico", "Arquitectura de Sistemas", "Transformación Digital"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional", "Scrum Master", "OWASP Top 10", "Laravel"],
      projects: 25,
      category: "leadership",
    },
    {
      id: 2,
      name: "Alejandro Tobón Rivera",
      role: "CTO & Fundador",
      specialization: "Ingeniero Informatico",
      experience: "1+ años",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: `Ingeniero Informático con más de un año de experiencia en desarrollo de software y optimización de soluciones tecnológicas.`,
      skills: ["User Research", "Prototyping", "Design Systems", "Conversion Optimization"],
      certifications: ["Google UX Design", "Adobe Certified Expert", "Figma Professional"],
      projects: 10,
      category: "design",
    },
    {
      id: 3,
      name: "Stefanny Quintero Gómez",
      role: "Lead UX/UI Designer",
      specialization: "Diseñadora Gráfica",
      experience: "4+ años",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: `Diseñadora con más de 4 años de experiencias digitales atractivas, funcionales y centradas en el usuario.`,
      skills: ["SEO/SEM", "Analytics", "Conversion Rate Optimization", "Content Strategy"],
      certifications: ["UX/UI", "Tecnica laboral en diseño"],
      projects: 30,
      category: "Designer",
      behance: "#"
    },
  ];

  /* const filters = [
    { key: 'all', label: 'Todo el Equipo', icon: 'Users' },
    { key: 'leadership', label: 'Liderazgo', icon: 'Crown' },
    { key: 'development', label: 'Desarrollo', icon: 'Code' },
    { key: 'design', label: 'Diseño', icon: 'Palette' },
    { key: 'marketing', label: 'Marketing', icon: 'TrendingUp' },
    { key: 'management', label: 'Gestión', icon: 'Settings' }
  ];  */

  const filteredMembers = selectedFilter === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.category === selectedFilter);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Nuestro Equipo de
            <span className="text-primary"> Expertos</span>
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Profesionales apasionados que combinan experiencia técnica con visión estratégica 
            para entregar soluciones web que superan expectativas y generan resultados medibles.
          </p>
        </div>

        {/* Filter Tabs
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.key}
              onClick={() => setSelectedFilter(filter?.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-inter font-medium transition-smooth ${
                selectedFilter === filter?.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-text-primary hover:bg-primary/10 hover:text-secondary'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div> */}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers?.map((member) => (
            <div key={member?.id} className="bg-card rounded-2xl p-6 card-elevated hover:card-elevated-strong transition-smooth">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-bg rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-secondary mb-1">
                  {member?.name}
                </h3>
                <p className="text-primary font-inter font-medium mb-2">
                  {member?.role}
                </p>
                <p className="text-sm text-text-primary/70">
                  {member?.specialization} • {member?.experience}
                </p>
              </div>

              <p className="text-sm text-text-primary/80 mb-6 leading-relaxed">
                {member?.bio}
              </p>

              {/* Skills
               <div className="mb-6">
                <h4 className="text-sm font-inter font-semibold text-secondary mb-3">
                  Especialidades Clave
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member?.skills?.slice(0, 3)?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-secondary text-xs font-inter font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>*/}
             

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-gilroy font-bold text-primary">
                    {member?.projects}+
                  </div>
                  <div className="text-xs text-text-primary/70">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-gilroy font-bold text-primary">
                    {member?.certifications?.length}
                  </div>
                  <div className="text-xs text-text-primary/70">Certificaciones</div>
                </div>
              </div>
  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;