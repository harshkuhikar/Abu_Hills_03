import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Building2, Users, Award, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Property Sales',
    'Property Management',
    'Investment Advisory',
    'Market Analysis',
    'Legal Assistance',
    'Property Valuation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-luxury-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold text-luxury-gold mb-4">
                  ABU HILLS
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your trusted partner in premium real estate for over 12 years. We specialize in 
                  connecting families and investors with exceptional properties.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-luxury-gold mb-1">500+</div>
                  <div className="text-xs text-gray-400">Properties Sold</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-luxury-gold mb-1">1,200+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-1 h-1 bg-luxury-gold rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div className="font-medium">Abu Hills Business Center</div>
                    <div className="text-sm">Sheikh Zayed Road, Dubai, UAE</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>+971 4 123 4567</div>
                    <div className="text-sm">+971 50 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>info@abuhills.com</div>
                    <div className="text-sm">sales@abuhills.com</div>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="mt-8 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-luxury-gold" />
                  <span className="font-semibold">Award Winning</span>
                </div>
                <p className="text-sm text-gray-400">Best Real Estate Agency 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Abu Hills Real Estate. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;