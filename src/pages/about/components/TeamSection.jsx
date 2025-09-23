import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      specialization: "Estrategia Digital",
      experience: "12+ años",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: `Visionario tecnológico con más de una década transformando ideas empresariales en soluciones digitales exitosas. Especialista en arquitectura de sistemas escalables y estrategias de crecimiento digital.`,
      skills: ["Liderazgo Estratégico", "Arquitectura de Sistemas", "Transformación Digital"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional", "Scrum Master"],
      projects: 150,
      category: "leadership",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "María González",
      role: "Directora de Desarrollo",
      specialization: "Full-Stack Development",
      experience: "8+ años",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: `Experta en desarrollo full-stack con pasión por crear experiencias web excepcionales. Lidera equipos técnicos hacia la excelencia en cada línea de código.`,
      skills: ["React/Next.js", "Node.js", "Database Design", "DevOps"],
      certifications: ["Meta React Professional", "MongoDB Certified", "Docker Certified"],
      projects: 120,
      category: "development",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Diego Ramírez",
      role: "Lead UX/UI Designer",
      specialization: "Diseño de Experiencias",
      experience: "7+ años",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: `Diseñador centrado en el usuario que combina psicología del comportamiento con estética moderna para crear interfaces que convierten visitantes en clientes.`,
      skills: ["User Research", "Prototyping", "Design Systems", "Conversion Optimization"],
      certifications: ["Google UX Design", "Adobe Certified Expert", "Figma Professional"],
      projects: 95,
      category: "design",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Ana Herrera",
      role: "Especialista en Marketing Digital",
      specialization: "Growth Marketing",
      experience: "6+ años",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: `Estratega de marketing digital que transforma datos en decisiones. Especialista en optimización de conversiones y campañas de crecimiento escalable.`,
      skills: ["SEO/SEM", "Analytics", "Conversion Rate Optimization", "Content Strategy"],
      certifications: ["Google Analytics 4", "HubSpot Marketing", "Facebook Blueprint"],
      projects: 80,
      category: "marketing",
      linkedin: "#",
      github: "#"
    },
    {
      id: 5,
      name: "Roberto Silva",
      role: "DevOps Engineer",
      specialization: "Infraestructura Cloud",
      experience: "9+ años",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: `Arquitecto de infraestructura cloud que garantiza que nuestras soluciones sean escalables, seguras y de alto rendimiento. Experto en automatización y CI/CD.`,
      skills: ["AWS/Azure", "Kubernetes", "CI/CD", "Security", "Monitoring"],
      certifications: ["AWS DevOps Professional", "Kubernetes Administrator", "Security+"],
      projects: 110,
      category: "development",
      linkedin: "#",
      github: "#"
    },
    {
      id: 6,
      name: "Laura Morales",
      role: "Project Manager",
      specialization: "Gestión Ágil",
      experience: "5+ años",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: `Gestora de proyectos que orquesta equipos multidisciplinarios hacia el éxito. Especialista en metodologías ágiles y entrega de valor continuo.`,
      skills: ["Agile/Scrum", "Risk Management", "Stakeholder Communication", "Quality Assurance"],
      certifications: ["PMP Certified", "Scrum Master", "Agile Coach"],
      projects: 75,
      category: "management",
      linkedin: "#",
      github: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'Todo el Equipo', icon: 'Users' },
    { key: 'leadership', label: 'Liderazgo', icon: 'Crown' },
    { key: 'development', label: 'Desarrollo', icon: 'Code' },
    { key: 'design', label: 'Diseño', icon: 'Palette' },
    { key: 'marketing', label: 'Marketing', icon: 'TrendingUp' },
    { key: 'management', label: 'Gestión', icon: 'Settings' }
  ];

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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.key}
              onClick={() => setSelectedFilter(filter?.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-inter font-medium transition-smooth ${
                selectedFilter === filter?.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-text-primary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>

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
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
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

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-inter font-semibold text-secondary mb-3">
                  Especialidades Clave
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member?.skills?.slice(0, 3)?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-inter font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

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

              {/* Social Links */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    href={member?.linkedin}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Icon name="Linkedin" size={16} />
                  </a>
                  <a
                    href={member?.github}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Icon name="Github" size={16} />
                  </a>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="right"
                >
                  Contactar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;