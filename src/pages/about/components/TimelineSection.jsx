const TimelineSection = () => {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to transform business operations through innovative consulting."
    },
    {
      year: "2012",
      title: "First Major Partnership",
      description: "Secured our first Fortune 500 client, marking a significant milestone in growth."
    },
    {
      year: "2016",
      title: "Digital Transformation Focus",
      description: "Expanded services to include comprehensive digital transformation solutions."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Opened international offices to serve clients across multiple continents."
    },
    {
      year: "2021",
      title: "Innovation Lab Launch",
      description: "Established our innovation lab to develop cutting-edge business solutions."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading consulting firm with 500+ successful projects completed."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            From humble beginnings to industry leadership, discover the key milestones that shaped our company.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                    <div className="text-2xl font-gilroy-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-gilroy-semibold text-text-primary mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary font-inter-regular">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;