const ProcessTimeline = () => {
  const phases = [
    {
      phase: "Discovery",
      duration: "Week 1-2",
      description: "Comprehensive analysis of your current state, challenges, and objectives.",
      activities: [
        "Stakeholder interviews",
        "Current state assessment", 
        "Requirements gathering",
        "Risk analysis"
      ],
      deliverables: [
        "Situation Analysis Report",
        "Requirements Document",
        "Project Charter"
      ]
    },
    {
      phase: "Strategy",
      duration: "Week 3-4",
      description: "Development of customized strategies and detailed implementation roadmap.",
      activities: [
        "Solution design",
        "Strategy development",
        "Resource planning",
        "Timeline creation"
      ],
      deliverables: [
        "Strategic Plan",
        "Solution Architecture",
        "Implementation Roadmap"
      ]
    },
    {
      phase: "Implementation",
      duration: "Week 5-16",
      description: "Systematic execution of the plan with continuous monitoring and adjustment.",
      activities: [
        "Solution deployment",
        "Team training",
        "Process integration",
        "Performance monitoring"
      ],
      deliverables: [
        "Deployed Solution",
        "Training Materials",
        "Integration Documentation"
      ]
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description: "Continuous improvement and support to maximize value and ensure success.",
      activities: [
        "Performance analysis",
        "Optimization recommendations",
        "Ongoing support",
        "Regular reviews"
      ],
      deliverables: [
        "Performance Reports",
        "Optimization Plans",
        "Support Documentation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Project Timeline & Phases
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our structured approach ensures predictable outcomes and efficient delivery through well-defined phases.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  <div className="bg-card border border-border rounded-2xl p-6 lg:mt-12 hover:shadow-card-strong transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-primary font-gilroy-bold text-lg mb-2">
                        Phase {index + 1}
                      </div>
                      <h3 className="text-xl font-gilroy-semibold text-text-primary mb-2">
                        {phase.phase}
                      </h3>
                      <span className="px-3 py-1 bg-surface text-text-secondary rounded-full text-sm font-inter-medium">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary font-inter-regular mb-6 text-center">
                      {phase.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-inter-medium text-text-primary mb-2 text-sm">
                          Key Activities:
                        </h4>
                        <div className="space-y-1">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              <span className="text-text-secondary font-inter-regular">
                                {activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-inter-medium text-text-primary mb-2 text-sm">
                          Deliverables:
                        </h4>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
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
          </div>

          {/* Process guarantee */}
          <div className="text-center bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
              Our Process Guarantee
            </h3>
            <p className="text-text-secondary font-inter-regular mb-6 max-w-2xl mx-auto">
              We stand behind our methodology. If you're not satisfied with our process execution, we'll make it right at no additional cost.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
              Learn About Our Guarantee
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;