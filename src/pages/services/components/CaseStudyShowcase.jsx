import { useState } from 'react';

const CaseStudyShowcase = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies = [
    {
      title: "Manufacturing Giant Transformation",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Outdated processes causing 30% efficiency loss and rising operational costs.",
      solution: "Implemented comprehensive digital transformation with AI-powered automation and real-time analytics.",
      results: [
        { metric: "Efficiency Increase", value: "45%" },
        { metric: "Cost Reduction", value: "$2.3M" },
        { metric: "Implementation Time", value: "8 months" }
      ],
      testimonial: "The transformation exceeded our expectations. The team's expertise and dedication were instrumental in our success."
    },
    {
      title: "Financial Services Innovation",
      client: "Premier Bank Solutions",
      industry: "Financial Services",
      challenge: "Legacy systems hindering customer experience and regulatory compliance.",
      solution: "Modernized core banking infrastructure with cloud-native solutions and enhanced security protocols.",
      results: [
        { metric: "Customer Satisfaction", value: "92%" },
        { metric: "Processing Speed", value: "3x faster" },
        { metric: "Compliance Score", value: "100%" }
      ],
      testimonial: "Our partnership with Lovap Corporate revolutionized how we serve our customers and manage risk."
    },
    {
      title: "Retail Chain Optimization",
      client: "National Retail Network",
      industry: "Retail",
      challenge: "Inventory management issues leading to stockouts and excess inventory.",
      solution: "Developed predictive analytics platform for demand forecasting and automated inventory management.",
      results: [
        { metric: "Inventory Turnover", value: "40% increase" },
        { metric: "Stockout Reduction", value: "85%" },
        { metric: "Revenue Growth", value: "$15M" }
      ],
      testimonial: "The inventory optimization solution transformed our operations and significantly improved our bottom line."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            Real results from real clients. Discover how we've helped organizations achieve their goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveStudy(index)}
                className={`px-4 py-2 rounded-lg font-inter-medium text-sm transition-colors mb-2 ${
                  activeStudy === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface text-text-secondary hover:text-text-primary'
                }`}
              >
                {study.industry}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter-medium mb-4">
                    {caseStudies[activeStudy].industry}
                  </span>
                  <h3 className="text-2xl font-gilroy-bold text-text-primary mb-2">
                    {caseStudies[activeStudy].title}
                  </h3>
                  <p className="text-text-secondary font-inter-regular">
                    {caseStudies[activeStudy].client}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-gilroy-semibold text-text-primary mb-2">Challenge</h4>
                    <p className="text-text-secondary font-inter-regular">
                      {caseStudies[activeStudy].challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-gilroy-semibold text-text-primary mb-2">Solution</h4>
                    <p className="text-text-secondary font-inter-regular">
                      {caseStudies[activeStudy].solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-gilroy-semibold text-text-primary mb-6">Key Results</h4>
                <div className="grid gap-4 mb-8">
                  {caseStudies[activeStudy].results.map((result, index) => (
                    <div key={index} className="bg-surface border border-border rounded-lg p-4">
                      <div className="text-2xl font-gilroy-bold text-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-text-secondary font-inter-regular">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <div className="text-2xl text-primary mb-4">"</div>
                  <p className="text-text-primary font-inter-regular italic">
                    {caseStudies[activeStudy].testimonial}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;