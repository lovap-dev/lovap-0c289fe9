const ContactForm = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h3 className="text-xl font-gilroy-semibold text-text-primary mb-6">
        Send Us a Message
      </h3>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="First Name"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input 
            type="text" 
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <input 
          type="email" 
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea 
          placeholder="How can we help you?"
          rows="4"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;