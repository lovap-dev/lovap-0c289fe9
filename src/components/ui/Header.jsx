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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card' 
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-2 transition-smooth hover:opacity-80"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-primary-bg rounded-lg">
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
                  ? 'bg-primary-bg text-primary-foreground'
                  : `${isScrolled ? 'text-text-primary' : 'text-foreground'} hover:bg-primary-bg/10 hover:text-primary backdrop-blur-sm`
              }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Cotización Estratégica
            </Button>

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
                      ? 'bg-primary-bg text-primary-foreground'
                      : 'text-foreground hover:bg-primary-bg/10 hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={closeMenu}
                >
                  Cotización Estratégica
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