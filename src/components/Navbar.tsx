import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Users, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/properties', label: 'Properties', icon: Building2 },
    { path: '/about', label: 'About', icon: Users },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/95 shadow-xl border-b border-gray-200/20 py-4'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-3xl font-serif font-bold hover:scale-105 transition-all duration-300 ${
              isScrolled ? 'text-luxury-gold' : 'text-white'
            }`}
          >
            ABU HILLS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold text-lg ${
                  location.pathname === path
                    ? isScrolled 
                      ? 'text-luxury-gold bg-luxury-gold/15 shadow-lg' 
                      : 'text-luxury-gold bg-white/25 shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:text-luxury-gold hover:bg-luxury-gold/10'
                      : 'text-white hover:text-luxury-gold hover:bg-white/20'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-luxury-gold hover:bg-luxury-gold/10' : 'text-white hover:text-luxury-gold hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 shadow-xl border-b border-gray-200/20 transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="p-6 space-y-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 font-semibold text-lg ${
                  location.pathname === path
                    ? 'text-luxury-gold bg-luxury-gold/15 shadow-lg'
                    : 'text-gray-700 hover:text-luxury-gold hover:bg-luxury-gold/10'
                }`}
              >
                <Icon size={24} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;