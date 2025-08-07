import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Award, TrendingUp, Heart, Shield, Clock, Star, Building, Target, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Ahmed Al-Mansouri",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years in luxury real estate with a passion for helping families find their perfect home.",
      specialties: ["Luxury Properties", "Investment Advisory", "Market Analysis"]
    },
    {
      name: "Sarah Johnson",
      role: "Senior Property Advisor",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specializes in high-end residential properties and commercial real estate investments.",
      specialties: ["Commercial Real Estate", "Property Management", "Client Relations"]
    },
    {
      name: "Michael Chen",
      role: "Investment Specialist",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in property investment strategies and portfolio development for high-net-worth clients.",
      specialties: ["Investment Strategy", "Portfolio Management", "Market Research"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Focused Excellence",
      description: "We put our clients' needs first and work tirelessly to exceed their expectations with personalized service.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Built on unwavering integrity and transparency, we maintain the highest ethical standards in every transaction.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Reliable Partnership",
      description: "Count on us to be there when you need us, providing consistent and dependable service throughout your journey.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { icon: Building, value: "500+", label: "Properties Sold", description: "Luxury properties successfully sold" },
    { icon: Users, value: "1,200+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { icon: Award, value: "15+", label: "Years Experience", description: "Decades of market expertise" },
    { icon: Star, value: "4.9/5", label: "Client Rating", description: "Average customer satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-cream via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-luxury-dark via-luxury-charcoal to-luxury-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block mb-8">
            <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 animate-fade-in">
            About Abu Hills
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We're passionate about real estate and committed to helping you achieve your property goals 
            with expertise, integrity, and personalized service that exceeds expectations.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-10 h-10 text-luxury-gold" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
                <div className="text-gray-500 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Office"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">15+</div>
                    <div className="text-xs text-black font-semibold">Years</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6">
                <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-4 py-2 rounded-full">Our Journey</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Building Dreams Since 2008</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Abu Hills has grown from a small local agency to one of the most trusted names 
                  in luxury real estate. We've helped over 1,200 families find their dream homes and assisted 
                  countless investors in building their property portfolios.
                </p>
                <p>
                  Our success is built on a foundation of market expertise, innovative technology, and most 
                  importantly, genuine care for our clients. We believe that buying or selling a property is 
                  more than just a transaction – it's a life-changing experience.
                </p>
                <p>
                  Today, we continue to set new standards in the industry, combining traditional values with 
                  modern innovation to deliver exceptional results for every client we serve.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-lg">
                  <Target className="w-6 h-6 text-luxury-gold" />
                  <span className="font-semibold text-gray-700">Mission-Driven</span>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-lg">
                  <Globe className="w-6 h-6 text-luxury-gold" />
                  <span className="font-semibold text-gray-700">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-4 py-2 rounded-full">Our Values</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">The Principles That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every interaction and decision, ensuring we deliver exceptional service with integrity and excellence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-4 py-2 rounded-full">Our Team</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced professionals are dedicated to your success, bringing years of expertise and passion to every client relationship.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-luxury-gold font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="bg-luxury-gold/10 text-luxury-gold px-3 py-1 rounded-full text-xs font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-dark via-luxury-charcoal to-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let's discuss how we can help you achieve your real estate goals with our expertise, 
              dedication, and personalized approach to luxury property services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-500 hover:to-luxury-gold text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Contact Our Experts
              </button>
              <button
                onClick={() => navigate('/properties')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                View Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;