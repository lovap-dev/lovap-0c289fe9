import { useState } from 'react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: '',
    currentCosts: '',
    timeToImplement: '6'
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(inputs.currentRevenue) || 0;
    const costs = parseFloat(inputs.currentCosts) || 0;
    const timeMonths = parseInt(inputs.timeToImplement) || 6;

    // Conservative improvement estimates
    const revenueIncrease = revenue * 0.25; // 25% revenue increase
    const costReduction = costs * 0.20; // 20% cost reduction
    const totalBenefit = revenueIncrease + costReduction;
    const investmentCost = revenue * 0.05; // 5% of revenue as investment
    
    const roi = ((totalBenefit - investmentCost) / investmentCost) * 100;
    const paybackMonths = (investmentCost / (totalBenefit / 12)).toFixed(1);

    setResults({
      totalBenefit: totalBenefit.toLocaleString(),
      roi: roi.toFixed(0),
      paybackMonths,
      yearlyBenefit: totalBenefit.toLocaleString()
    });
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-gilroy-bold text-text-primary mb-6">
            Calculate Your Potential ROI
          </h2>
          <p className="text-lg text-text-secondary font-inter-regular max-w-3xl mx-auto">
            See how our services can impact your bottom line with our interactive ROI calculator.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-gilroy-semibold text-text-primary mb-6">
                Your Current Metrics
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-inter-medium text-text-primary mb-2">
                    Annual Revenue ($)
                  </label>
                  <input 
                    type="number"
                    placeholder="1000000"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-inter-medium text-text-primary mb-2">
                    Annual Operating Costs ($)
                  </label>
                  <input 
                    type="number"
                    placeholder="500000"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={inputs.currentCosts}
                    onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-inter-medium text-text-primary mb-2">
                    Implementation Timeline (months)
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={inputs.timeToImplement}
                    onChange={(e) => handleInputChange('timeToImplement', e.target.value)}
                  >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="18">18 months</option>
                  </select>
                </div>
                
                <button 
                  onClick={calculateROI}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors"
                >
                  Calculate ROI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-gilroy-semibold text-text-primary mb-6">
                Projected Results
              </h3>
              
              {results ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-gilroy-bold text-primary mb-2">
                      {results.roi}%
                    </div>
                    <div className="text-sm text-text-secondary font-inter-regular">
                      Return on Investment
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <div className="text-lg font-gilroy-semibold text-text-primary mb-1">
                        ${results.totalBenefit}
                      </div>
                      <div className="text-xs text-text-secondary font-inter-regular">
                        Annual Benefit
                      </div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <div className="text-lg font-gilroy-semibold text-text-primary mb-1">
                        {results.paybackMonths}
                      </div>
                      <div className="text-xs text-text-secondary font-inter-regular">
                        Payback (months)
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-inter-medium hover:bg-secondary/90 transition-colors">
                      Get Detailed Analysis
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-text-secondary font-inter-regular">
                    Enter your metrics to see projected results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;