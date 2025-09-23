const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-gilroy-bold text-text-primary mb-6 leading-tight">
              Transform Your Business with Professional Solutions
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary font-inter-regular mb-8 max-w-2xl">
              Unlock your company's potential with our comprehensive suite of business solutions designed to drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-inter-medium text-lg hover:bg-accent transition-all duration-300 shadow-card">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-border text-text-primary rounded-lg font-inter-medium text-lg hover:bg-muted transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Placeholder for hero image/graphic */}
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                <p className="text-text-secondary font-inter-regular">Hero Visual Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;