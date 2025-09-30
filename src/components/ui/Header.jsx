import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Inicio', path: '/homepage', icon: 'Home' },
    { name: 'Servicios', path: '/services', icon: 'Briefcase' },
    { name: 'Proceso', path: '/process', icon: 'GitBranch' },
    { name: 'Nosotros', path: '/about', icon: 'Users' },
    { name: 'Contacto', path: '/contact', icon: 'MessageCircle' }
  ];

  const isActivePath = (path) => {
    // Handle both / and /homepage as the home page
    if (path === '/homepage') {
      return location?.pathname === '/' || location?.pathname === '/homepage';
    }
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-card`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-2 transition-smooth hover:opacity-80"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-primary-foreground"
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-gilroy font-bold text-secondary">
              Lovap Corporate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-inter font-medium transition-smooth ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : `text-foreground hover:bg-primary/10 relative after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200`
              }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/573006719235"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 bg-accent py-2 rounded-xl font-semibold text-white bg-accent/10 border border-accent/40 shadow-sm hover:bg-accent/15 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 transition-smooth"
            >
              <span>Cotización Estratégica</span>
              <Icon name="ArrowRight" size={18} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-smooth"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={20} 
                className="text-text-primary"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-6 py-4 bg-background border-t border-border">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-inter font-medium transition-smooth ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-primary/10 relative after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/30 hover:bg-primary/90"
                  onClick={closeMenu}
                >
                  <a href="https://wa.me/573006719235" target="_blank" rel="noopener noreferrer">Cotización Estratégica</a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;