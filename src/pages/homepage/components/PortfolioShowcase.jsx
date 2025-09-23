const PortfolioShowcase = () => {
  const projects = [
    {
      title: "Enterprise Digital Transformation",
      category: "Technology",
      description: "Complete digital overhaul for Fortune 500 company",
      result: "40% efficiency increase"
    },
    {
      title: "Global Process Optimization",
      category: "Operations",
      description: "Streamlined operations across 15 countries",
      result: "25% cost reduction"
    },
    {
      title: "Strategic Business Consulting",
      category: "Strategy",
      description: "Market expansion strategy for tech startup",
      result: "300% revenue growth"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through our proven methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-card-strong transition-all duration-300"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
                {project.title}
              </h3>
              <p className="text-text-secondary font-inter-regular mb-6">
                {project.description}
              </p>
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-inter-regular">Result:</span>
                  <span className="text-primary font-inter-semibold">
                    {project.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-inter-medium hover:bg-muted transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;