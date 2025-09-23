const ComparisonMatrix = () => {
  const comparisonData = {
    categories: [
      "Strategy Development",
      "Implementation Speed",
      "Technical Expertise",
      "Industry Knowledge",
      "Support Quality",
      "Cost Effectiveness",
      "Innovation Focus",
      "Client Satisfaction"
    ],
    competitors: [
      {
        name: "Lovap Corporate",
        isUs: true,
        scores: [95, 90, 98, 92, 96, 88, 94, 98]
      },
      {
        name: "Large Consulting Firm",
        isUs: false,
        scores: [85, 70, 80, 88, 75, 60, 70, 82]
      },
      {
        name: "Boutique Agency",
        isUs: false,
        scores: [78, 85, 75, 70, 85, 90, 80, 85]
      },
      {
        name: "In-House Team",
        isUs: false,
        scores: [60, 95, 70, 85, 90, 95, 65, 75]
      }
    ]
  };

  const getScoreColor = (score, isUs) => {
    if (isUs) return "bg-primary";
    if (score >= 85) return "bg-success";
    if (score >= 70) return "bg-warning";
    return "bg-destructive";
  };

  const getScoreColorText = (score, isUs) => {
    if (isUs) return "text-primary";
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            How We Compare
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            See how Lovap Corporate stacks up against other consulting options across key performance indicators.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block bg-card border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left p-6 font-gilroy-semibold text-text-primary">
                      Evaluation Criteria
                    </th>
                    {comparisonData.competitors.map((competitor, index) => (
                      <th 
                        key={index}
                        className={`text-center p-6 font-gilroy-semibold ${
                          competitor.isUs ? 'text-primary' : 'text-text-primary'
                        }`}
                      >
                        {competitor.name}
                        {competitor.isUs && (
                          <div className="mt-1">
                            <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                              That's Us!
                            </span>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.categories.map((category, categoryIndex) => (
                    <tr key={categoryIndex} className="border-b border-border">
                      <td className="p-6 font-inter-medium text-text-primary">
                        {category}
                      </td>
                      {comparisonData.competitors.map((competitor, competitorIndex) => (
                        <td key={competitorIndex} className="p-6 text-center">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${getScoreColor(competitor.scores[categoryIndex], competitor.isUs)} transition-all duration-500`}
                                  style={{ width: `${competitor.scores[categoryIndex]}%` }}
                                ></div>
                              </div>
                              <span className={`font-inter-semibold text-sm ${getScoreColorText(competitor.scores[categoryIndex], competitor.isUs)}`}>
                                {competitor.scores[categoryIndex]}%
                              </span>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {comparisonData.competitors.map((competitor, competitorIndex) => (
              <div 
                key={competitorIndex}
                className={`bg-card border-2 rounded-2xl p-6 ${
                  competitor.isUs ? 'border-primary' : 'border-border'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-lg font-gilroy-semibold ${
                    competitor.isUs ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {competitor.name}
                  </h3>
                  {competitor.isUs && (
                    <span className="inline-block mt-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                      That's Us!
                    </span>
                  )}
                </div>
                
                <div className="space-y-4">
                  {comparisonData.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="flex justify-between items-center">
                      <span className="text-sm font-inter-medium text-text-primary flex-1">
                        {category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-border rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getScoreColor(competitor.scores[categoryIndex], competitor.isUs)}`}
                            style={{ width: `${competitor.scores[categoryIndex]}%` }}
                          ></div>
                        </div>
                        <span className={`font-inter-semibold text-sm ${getScoreColorText(competitor.scores[categoryIndex], competitor.isUs)}`}>
                          {competitor.scores[categoryIndex]}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary font-inter-regular mb-6">
              * Scores based on client feedback, industry benchmarks, and third-party evaluations
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors">
              See Detailed Comparison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;