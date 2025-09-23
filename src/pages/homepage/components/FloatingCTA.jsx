import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling down 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-primary text-primary-foreground rounded-2xl p-4 shadow-card-strong max-w-sm">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <h4 className="font-gilroy-semibold text-sm mb-1">
              Ready to get started?
            </h4>
            <p className="text-xs opacity-90">
              Get a free consultation today
            </p>
          </div>
          <button className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-inter-medium hover:bg-white/30 transition-colors flex-shrink-0">
            Contact Us
          </button>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white text-text-primary rounded-full flex items-center justify-center text-xs hover:bg-surface transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;