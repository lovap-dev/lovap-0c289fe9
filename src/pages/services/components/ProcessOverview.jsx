const ProcessOverview = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business, challenges, and objectives through comprehensive analysis.",
      duration: "1-2 weeks",
      deliverables: ["Situation Analysis", "Requirements Document", "Project Roadmap"]
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts develop customized strategies and solutions tailored to your specific needs.",
      duration: "2-3 weeks",
      deliverables: ["Strategic Plan", "Solution Architecture", "Implementation Timeline"]
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, maintaining constant communication and quality control.",
      duration: "4-12 weeks",
      deliverables: ["Solution Deployment", "Training Programs", "Documentation"]
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring and optimization to ensure maximum value and sustained success.",
      duration: "Ongoing",
      deliverables: ["Performance Reports", "Optimization Recommendations", "Ongoing Support"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            A systematic approach that ensures successful outcomes and maximum value for every project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-card-strong transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-gilroy-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-gilroy-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 bg-surface text-text-secondary rounded-full text-sm font-inter-medium">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary font-inter-regular mb-6">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="font-inter-medium text-text-primary mb-3 text-sm">
                        Key Deliverables:
                      </h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            <span className="text-text-secondary font-inter-regular">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary font-inter-regular mb-6">
              Let's discuss how our proven process can help you achieve your goals.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;