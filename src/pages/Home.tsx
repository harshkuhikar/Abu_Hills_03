import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Award, Phone, ArrowRight, Building, Star, Shield, Clock } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import Footer from '../components/Footer';
import propertiesData from '../data/properties.json';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProperties = propertiesData.filter(p => p.featured).slice(0, 3);

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const stats = [
    { 
      icon: Building, 
      number: '500+', 
      label: 'Properties Sold', 
      description: 'Successfully completed luxury transactions',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      icon: Users, 
      number: '1,200+', 
      label: 'Happy Clients', 
      description: 'Satisfied customers worldwide',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      icon: Award, 
      number: '15+', 
      label: 'Years Experience', 
      description: 'In luxury real estate market',
      color: 'from-purple-500 to-violet-600'
    },
    { 
      icon: Star, 
      number: '4.9/5', 
      label: 'Client Rating', 
      description: 'Average customer satisfaction',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Luxury Sales',
      description: 'Premium properties in the most exclusive locations',
      features: ['Penthouse Suites', 'Waterfront Villas', 'Historic Mansions']
    },
    {
      icon: Shield,
      title: 'Investment Advisory',
      description: 'Expert guidance for property investment strategies',
      features: ['Market Analysis', 'ROI Projections', 'Portfolio Management']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs',
      features: ['Instant Response', 'Emergency Support', 'Concierge Service']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <section id="stats-section" className="py-24 bg-gradient-to-br from-luxury-dark via-gray-900 to-luxury-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Our Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. We've built lasting relationships through exceptional service and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-luxury-gold mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-luxury-cream via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From luxury sales to investment advisory, we provide end-to-end real estate services tailored to your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Featured Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Exceptional Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked selection of the world's most prestigious properties, each offering unparalleled luxury and sophistication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onViewDetails={() => handleViewDetails(property)}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/properties')}
              className="group bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-600 hover:to-luxury-gold text-black px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-luxury-dark via-gray-900 to-luxury-charcoal relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">About Abu Hills</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                15 Years of Excellence in Luxury Real Estate
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Since 2008, Abu Hills has been the premier destination for luxury real estate. We've helped over 1,200 families find their dream homes and assisted countless investors in building exceptional property portfolios.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Award-Winning Service</h4>
                    <p className="text-gray-400">Recognized as the Best Luxury Real Estate Agency for three consecutive years.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                    <p className="text-gray-400">Our certified professionals bring decades of combined experience in luxury markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Global Network</h4>
                    <p className="text-gray-400">Exclusive access to premium properties in the world's most desirable locations.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/about')}
                  className="group bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-600 hover:to-luxury-gold text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abu Hills Office"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent rounded-3xl" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-1">15+</div>
                  <div className="text-gray-600 text-sm font-semibold">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-luxury-gold rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-1">500+</div>
                  <div className="text-black text-sm font-semibold">Properties Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-luxury-cream via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our team of luxury real estate experts guide you through every step of your property journey. From initial consultation to closing, we're here to make your dreams a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate('/properties')}
                className="group bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-600 hover:to-luxury-gold text-black px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Building className="w-6 h-6" />
                <span>Browse Properties</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="group bg-white border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
};

export default Home;