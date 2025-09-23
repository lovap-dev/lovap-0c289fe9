const ClientLogosSection = () => {
  const clients = [
    { name: "TechCorp", industry: "Technology" },
    { name: "GlobalFinance", industry: "Finance" },
    { name: "InnovateLabs", industry: "Research" },
    { name: "MegaRetail", industry: "Retail" },
    { name: "HealthPlus", industry: "Healthcare" },
    { name: "EduSolutions", industry: "Education" },
    { name: "GreenEnergy", industry: "Energy" },
    { name: "LogiFlow", industry: "Logistics" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            We're proud to work with industry leaders across various sectors, helping them achieve their strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-card transition-all duration-300 group"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-gilroy-bold text-primary">
                  {client.name.slice(0, 2)}
                </span>
              </div>
              <h4 className="font-gilroy-semibold text-text-primary text-sm mb-1">
                {client.name}
              </h4>
              <span className="text-xs text-text-secondary font-inter-regular">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary font-inter-regular mb-6">
            Join hundreds of satisfied clients who trust us with their success
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;