import { useState } from 'react';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Lovap Corporate transformed our business operations completely. Their expertise and dedication exceeded all expectations.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc."
    },
    {
      quote: "The strategic guidance we received helped us navigate complex market challenges and achieve unprecedented growth.",
      author: "Michael Chen",
      position: "COO",
      company: "Global Dynamics"
    },
    {
      quote: "Professional, knowledgeable, and results-driven. Lovap Corporate is the partner every business needs.",
      author: "Emma Rodriguez",
      position: "Founder",
      company: "Innovation Labs"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-12 text-center shadow-card">
            <div className="text-4xl text-primary mb-6">"</div>
            <blockquote className="text-xl lg:text-2xl font-inter-regular text-text-primary mb-8 leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            <div className="border-t border-border pt-8">
              <div className="font-gilroy-semibold text-text-primary text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-text-secondary font-inter-regular">
                {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;