const QualityAssurance = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Quality Assurance
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Our rigorous quality standards ensure every deliverable meets the highest expectations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Quality Gates</h3>
            <p className="text-text-secondary text-sm">Multiple checkpoints ensure standards are met</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Peer Review</h3>
            <p className="text-text-secondary text-sm">All work is reviewed by senior experts</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Testing</h3>
            <p className="text-text-secondary text-sm">Comprehensive testing at every stage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;