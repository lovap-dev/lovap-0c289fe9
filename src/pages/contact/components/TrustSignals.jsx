const TrustSignals = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-2xl font-gilroy-bold text-primary mb-2">24h</div>
            <div className="text-sm text-text-secondary">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-gilroy-bold text-primary mb-2">500+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-gilroy-bold text-primary mb-2">15+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-gilroy-bold text-primary mb-2">98%</div>
            <div className="text-sm text-text-secondary">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;