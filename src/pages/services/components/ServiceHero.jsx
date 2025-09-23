const ServiceHero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-gilroy-bold text-text-primary mb-6 leading-tight">
            Professional Services That Drive Results
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary font-inter-regular mb-8 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to your unique challenges. From strategy to implementation, we deliver measurable outcomes that transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-inter-medium text-lg hover:bg-accent transition-colors shadow-card">
              Explore Services
            </button>
            <button className="px-8 py-4 border border-border text-text-primary rounded-lg font-inter-medium text-lg hover:bg-muted transition-colors">
              Calculate ROI
            </button>
          </div>
          
          {/* Key service highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">500+</div>
              <div className="text-sm text-text-secondary font-inter-regular">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">15+</div>
              <div className="text-sm text-text-secondary font-inter-regular">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary font-inter-regular">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;