const ProjectTypes = () => {
  const projectTypes = [
    {
      type: "Digital Transformation",
      description: "Complete modernization of business processes and technology infrastructure",
      duration: "6-18 months",
      complexity: "High"
    },
    {
      type: "Process Optimization",
      description: "Streamline existing operations for improved efficiency and cost reduction",
      duration: "3-6 months", 
      complexity: "Medium"
    },
    {
      type: "Strategic Consulting",
      description: "Strategic planning and market analysis to drive business growth",
      duration: "2-4 months",
      complexity: "Medium"
    },
    {
      type: "Quick Wins Implementation",
      description: "Rapid deployment of high-impact solutions for immediate results",
      duration: "4-8 weeks",
      complexity: "Low"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Project Types We Handle
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our flexible methodology adapts to different project scopes and complexities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectTypes.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-gilroy-semibold text-text-primary mb-3">
                {project.type}
              </h3>
              <p className="text-text-secondary font-inter-regular mb-4">
                {project.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Duration: {project.duration}</span>
                <span className="text-primary font-inter-medium">
                  {project.complexity} Complexity
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;