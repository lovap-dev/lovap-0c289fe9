const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg lg:text-xl font-inter-regular mb-8 opacity-90 max-w-3xl mx-auto">
            Join the hundreds of companies that have already transformed their operations with our expert guidance. Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-inter-medium text-lg hover:bg-surface transition-colors shadow-card">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-inter-medium text-lg hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">24/7</div>
              <div className="font-inter-regular opacity-90">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">Free</div>
              <div className="font-inter-regular opacity-90">Initial Consultation</div>
            </div>
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">30 Days</div>
              <div className="font-inter-regular opacity-90">Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;