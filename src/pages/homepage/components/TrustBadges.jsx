const TrustBadges = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Rating from our clients"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In business consulting"
    },
    {
      number: "50+",
      label: "Expert Team",
      description: "Professionals ready to help"
    }
  ];

  const certifications = [
    "ISO 9001 Certified",
    "Microsoft Partner",
    "AWS Certified",
    "Industry Leader"
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied clients who trust us with their success.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-gilroy-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-gilroy-semibold text-text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-text-secondary font-inter-regular">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
              Certifications & Partnerships
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-surface border border-border rounded-lg"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-inter-medium text-text-primary">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;