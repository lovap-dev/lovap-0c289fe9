const ServicePreview = () => {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize your operations and drive sustainable growth.",
      icon: "💼"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your processes with cutting-edge technology solutions.",
      icon: "🚀"
    },
    {
      title: "Process Optimization",
      description: "Streamline workflows and improve efficiency across your organization.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your unique business challenges and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-card-strong transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary font-inter-regular mb-6">
                {service.description}
              </p>
              <button className="text-primary font-inter-medium hover:text-accent transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;