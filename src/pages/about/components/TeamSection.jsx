import React, { useState } from "react";
import Image from "../../../components/AppImage";

const TeamSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const teamMembers = [
    {
      id: 1,
      name: "Juan Pablo Pabón Pabón",
      role: "CEO & Fundador",
      specialization: "Desarrollador Fullstack",
      experience: "4+ años",
      photo: "/images/team/juan-pablo-pabon.png",
      bio: `Desarrollador y estudiante de Ingeniería Informática con más de 4 años de experiencia creando soluciones tecnológicas eficientes y orientadas a resultados.`,
      skills: ["Liderazgo Estratégico", "Arquitectura de Sistemas", "Transformación Digital"],
      certifications: [
        "AWS Solutions Architect",
        "Google Cloud Professional",
        "Scrum Master",
        "OWASP Top 10",
        "Laravel",
      ],
      projects: 25,
      category: "leadership",
    },
    {
      id: 2,
      name: "Alejandro Tobón Rivera",
      role: "CTO & Fundador",
      specialization: "Ingeniero Informatico",
      experience: "1+ años",
      photo: "/images/team/alejandro-tobon.png",
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
      photo: "/images/team/stefanny-quintero.png",
      bio: `Diseñadora con más de 4 años de experiencias digitales atractivas, funcionales y centradas en el usuario.`,
      skills: ["SEO/SEM", "Analytics", "Conversion Rate Optimization", "Content Strategy"],
      certifications: ["UX/UI", "Tecnica laboral en diseño"],
      projects: 30,
      category: "Designer",
      behance: "#",
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

  const filteredMembers =
    selectedFilter === "all" ? teamMembers : teamMembers?.filter((member) => member?.category === selectedFilter);

  return (
    <section className="border-t border-border/30 bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy font-bold text-secondary mb-6">
            Nuestro Equipo de
            <span className="text-primary"> Expertos</span>
          </h2>
          <p className="text-lg text-text-primary/80 max-w-3xl mx-auto">
            Profesionales apasionados que combinan experiencia técnica con visión estratégica para entregar soluciones
            web que superan expectativas y generan resultados medibles.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredMembers?.map((member) => (
            <article
              key={member?.id}
              className="bg-card rounded-2xl overflow-hidden card-elevated hover:card-elevated-strong transition-smooth flex flex-col h-full"
            >
              <div className="relative flex w-full shrink-0 flex-col items-center overflow-hidden bg-muted/90 px-4 pt-4 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
                <div className="flex aspect-square w-full max-w-[min(100%,17.5rem)] items-center justify-center sm:max-w-[min(100%,19rem)] lg:max-w-[min(100%,20.5rem)]">
                  <Image
                    src={member?.photo || "/assets/images/no_image.png"}
                    alt={`Retrato de ${member?.name}`}
                    className="max-h-full max-w-full object-contain object-center"
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-4 min-h-0">
                <div className="text-center shrink-0 mb-4">
                  <h3 className="text-xl font-gilroy font-bold text-secondary mb-1">{member?.name}</h3>
                  <p className="text-primary font-inter font-medium mb-2">{member?.role}</p>
                  <p className="text-sm text-text-primary/70">
                    {member?.specialization} • {member?.experience}
                  </p>
                </div>

                <p className="text-sm text-text-primary/80 leading-relaxed flex-1 min-h-[4.5rem] mb-8">
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

                <div className="mt-auto shrink-0 pt-8 border-t border-border/40">
                  <div className="grid grid-cols-2 gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="text-center min-w-0">
                      <div className="text-lg font-gilroy font-bold text-primary tabular-nums">{member?.projects}+</div>
                      <div className="text-xs text-text-primary/70">Proyectos</div>
                    </div>
                    <div className="text-center min-w-0">
                      <div className="text-lg font-gilroy font-bold text-primary tabular-nums">
                        {member?.certifications?.length}
                      </div>
                      <div className="text-xs text-text-primary/70">Certificaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
