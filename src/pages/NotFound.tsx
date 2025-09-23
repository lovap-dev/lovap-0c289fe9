import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-gilroy-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-gilroy-semibold text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-text-secondary font-inter-regular mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/homepage" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter-medium hover:bg-accent transition-colors"
          >
            Go to Homepage
          </Link>
          <div className="text-sm text-text-secondary">
            <Link 
              to="/about" 
              className="hover:text-primary transition-colors mr-4"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="hover:text-primary transition-colors mr-4"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
