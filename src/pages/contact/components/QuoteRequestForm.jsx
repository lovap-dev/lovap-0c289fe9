const QuoteRequestForm = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h3 className="text-xl font-gilroy-semibold text-text-primary mb-6">
        Request a Quote
      </h3>
      <form className="space-y-6">
        <input 
          type="text" 
          placeholder="Company Name"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Select Service Type</option>
          <option>Digital Transformation</option>
          <option>Process Optimization</option>
          <option>Strategic Consulting</option>
        </select>
        <textarea 
          placeholder="Project Description"
          rows="4"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-inter-medium hover:bg-secondary/90 transition-colors">
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteRequestForm;