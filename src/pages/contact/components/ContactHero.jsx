const ContactHero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-gilroy-bold text-text-primary mb-6 leading-tight">
            Let's Start Your Transformation
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary font-inter-regular mb-8 max-w-3xl mx-auto">
            Ready to unlock your business potential? Our expert team is here to help you navigate challenges and achieve remarkable results.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <div className="font-gilroy-semibold text-text-primary">Call Us</div>
              <div className="text-sm text-text-secondary">+1 (555) 123-4567</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-gilroy-semibold text-text-primary">Email Us</div>
              <div className="text-sm text-text-secondary">hello@lovapcorp.com</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="font-gilroy-semibold text-text-primary">Visit Us</div>
              <div className="text-sm text-text-secondary">New York, NY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;