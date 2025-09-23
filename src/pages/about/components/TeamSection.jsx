const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alexandra Smith",
      position: "CEO & Founder",
      description: "Visionary leader with 20+ years in business transformation",
      expertise: ["Strategy", "Leadership", "Innovation"]
    },
    {
      name: "David Johnson",
      position: "Chief Technology Officer",
      description: "Technology expert passionate about digital transformation",
      expertise: ["Technology", "Digital", "Innovation"]
    },
    {
      name: "Maria Garcia",
      position: "Head of Operations",
      description: "Operations specialist focused on process optimization",
      expertise: ["Operations", "Process", "Efficiency"]
    },
    {
      name: "James Wilson",
      position: "Senior Consultant",
      description: "Strategic consultant with expertise in market analysis",
      expertise: ["Strategy", "Analysis", "Growth"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our diverse team of professionals brings together decades of experience across various industries and disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-card-strong transition-all duration-300"
            >
              {/* Profile placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-gilroy-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-lg font-gilroy-semibold text-text-primary mb-2">
                {member.name}
              </h3>
              <div className="text-primary font-inter-medium text-sm mb-4">
                {member.position}
              </div>
              <p className="text-text-secondary font-inter-regular text-sm mb-6">
                {member.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-surface text-text-primary rounded-full text-xs font-inter-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;