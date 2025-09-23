const LocationInfo = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-gilroy-bold text-text-primary mb-4">Our Locations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-gilroy-semibold text-text-primary mb-4">New York Office</h3>
            <p className="text-text-secondary">123 Business Avenue<br/>New York, NY 10001</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-gilroy-semibold text-text-primary mb-4">London Office</h3>
            <p className="text-text-secondary">456 Corporate Street<br/>London, UK EC1A 1BB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;