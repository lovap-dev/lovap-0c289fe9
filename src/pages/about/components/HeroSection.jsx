const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-gilroy-bold text-text-primary mb-6 leading-tight">
            About Lovap Corporate
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary font-inter-regular mb-8 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to transforming businesses through innovative solutions and strategic guidance. Our mission is to help organizations unlock their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
              Our Story
            </button>
            <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-inter-medium hover:bg-muted transition-colors">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;