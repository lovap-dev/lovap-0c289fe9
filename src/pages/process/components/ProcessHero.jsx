const ProcessHero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-gilroy-bold text-text-primary mb-6 leading-tight">
            Our Proven Methodology
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary font-inter-regular mb-8 max-w-3xl mx-auto">
            Discover the systematic approach that has helped hundreds of organizations achieve remarkable results through disciplined execution and continuous optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-inter-medium text-lg hover:bg-accent transition-colors shadow-card">
              Explore Our Process
            </button>
            <button className="px-8 py-4 border border-border text-text-primary rounded-lg font-inter-medium text-lg hover:bg-muted transition-colors">
              Download Methodology Guide
            </button>
          </div>
          
          {/* Process highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">4</div>
              <div className="text-sm text-text-secondary font-inter-regular">Core Phases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">95%</div>
              <div className="text-sm text-text-secondary font-inter-regular">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-text-secondary font-inter-regular">Project Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-gilroy-bold text-primary mb-2">ISO</div>
              <div className="text-sm text-text-secondary font-inter-regular">Certified Process</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;