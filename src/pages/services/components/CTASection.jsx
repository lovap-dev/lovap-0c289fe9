const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg lg:text-xl font-inter-regular mb-8 opacity-90 max-w-3xl mx-auto">
            Don't let challenges hold your business back. Our expert team is ready to help you unlock your organization's full potential with proven solutions and strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-inter-medium text-lg hover:bg-surface transition-colors shadow-card">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-inter-medium text-lg hover:bg-white/10 transition-colors">
              View Service Packages
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">Free</div>
              <div className="font-inter-regular opacity-90">Initial Consultation</div>
            </div>
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">Custom</div>
              <div className="font-inter-regular opacity-90">Tailored Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-gilroy-bold mb-2">Proven</div>
              <div className="font-inter-regular opacity-90">Track Record</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-gilroy-semibold mb-4">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                <div>We analyze your needs</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                <div>We create a custom plan</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                <div>We deliver results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;