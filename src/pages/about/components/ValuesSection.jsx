const ValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: "🛡️"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "We are committed to continuous learning and helping our clients achieve sustainable growth.",
      icon: "📈"
    },
    {
      title: "Impact",
      description: "We focus on creating meaningful change that makes a real difference in our clients' success.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape our commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-card-strong transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-gilroy-semibold text-text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary font-inter-regular">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;