const ServiceGrid = () => {
  const services = [
    {
      category: "Strategy & Consulting",
      services: [
        {
          title: "Business Strategy",
          description: "Comprehensive strategic planning and market analysis",
          features: ["Market Research", "Competitive Analysis", "Growth Planning"],
          icon: "📊"
        },
        {
          title: "Digital Transformation",
          description: "End-to-end digital modernization solutions",
          features: ["Process Automation", "Technology Integration", "Change Management"],
          icon: "🚀"
        }
      ]
    },
    {
      category: "Operations & Process",
      services: [
        {
          title: "Process Optimization",
          description: "Streamline operations for maximum efficiency",
          features: ["Workflow Analysis", "Process Redesign", "Performance Metrics"],
          icon: "⚡"
        },
        {
          title: "Supply Chain Management",
          description: "Optimize your supply chain for better performance",
          features: ["Vendor Management", "Logistics Optimization", "Cost Reduction"],
          icon: "🔗"
        }
      ]
    },
    {
      category: "Technology Solutions",
      services: [
        {
          title: "IT Infrastructure",
          description: "Modern, scalable technology infrastructure",
          features: ["Cloud Migration", "Security Implementation", "System Integration"],
          icon: "💻"
        },
        {
          title: "Data Analytics",
          description: "Turn your data into actionable business insights",
          features: ["Business Intelligence", "Predictive Analytics", "Reporting Dashboards"],
          icon: "📈"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Our Service Portfolio
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Comprehensive solutions across all areas of business operations, designed to drive growth and efficiency.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-gilroy-semibold text-text-primary mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-card-strong transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-gilroy-semibold text-text-primary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-text-secondary font-inter-regular">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <h5 className="font-inter-medium text-text-primary mb-3 text-sm">
                        Key Features:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="text-primary font-inter-medium hover:text-accent transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;