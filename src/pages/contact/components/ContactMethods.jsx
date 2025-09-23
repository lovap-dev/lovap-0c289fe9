const ContactMethods = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card border border-border rounded-2xl">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Phone</h3>
            <p className="text-text-secondary">+1 (555) 123-4567</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-2xl">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Email</h3>
            <p className="text-text-secondary">hello@lovapcorp.com</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-2xl">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-gilroy-semibold text-text-primary mb-2">Office</h3>
            <p className="text-text-secondary">123 Business Ave, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;