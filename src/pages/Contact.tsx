import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Award, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  propertyType: string;
  budget: string;
}

const Contact: React.FC = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  // Handle form submission with Resend integration
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form submitted:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 4 123 4567', '+971 50 123 4567'],
      description: 'Available 24/7 for urgent inquiries',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@abuhills.com', 'sales@abuhills.com'],
      description: 'We respond within 2 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Abu Hills Business Center', 'Sheikh Zayed Road, Dubai'],
      description: 'Visit our exclusive showroom',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Sat-Sun: 10:00 AM - 6:00 PM'],
      description: 'Extended hours by appointment',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const propertyTypes = [
    'Villa',
    'Penthouse',
    'Townhouse',
    'Condo',
    'Apartment',
    'Investment Property'
  ];

  const budgetRanges = [
    'Under $1M',
    '$1M - $2M',
    '$2M - $5M',
    '$5M - $10M',
    'Over $10M'
  ];

  const services = [
    { icon: MessageCircle, title: 'Free Consultation', description: 'Expert advice on your property needs' },
    { icon: Calendar, title: 'Property Viewing', description: 'Schedule personalized property tours' },
    { icon: Award, title: 'Market Analysis', description: 'Comprehensive market reports and insights' }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-luxury-cream via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-luxury-dark via-luxury-charcoal to-luxury-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block mb-8">
            <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ready to find your dream property? Let's start the conversation and make your real estate goals a reality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team of luxury real estate experts is here to help you find the perfect property. 
                Contact us today to schedule a consultation.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 mb-1">{detail}</p>
                      ))}
                      <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-semibold">Interactive Map</p>
                <p className="text-gray-500">Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Send us a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8 animate-slide-up">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                        <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 animate-slide-up">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                      <div>
                        <h4 className="font-semibold text-red-800">Error Sending Message</h4>
                        <p className="text-red-700">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-2 text-sm flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 mt-2 text-sm flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                        placeholder="+971 50 123 4567"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        {...register('subject', { required: 'Subject is required' })}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 mt-2 text-sm flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.subject.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Property Type and Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 resize-none hover:border-gray-300"
                      placeholder="Tell us about your requirements, preferences, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="text-red-500 mt-2 text-sm flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-500 hover:to-luxury-gold disabled:from-gray-400 disabled:to-gray-500 text-black font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-4 py-2 rounded-full">FAQ</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our luxury real estate services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How do you determine property values?',
                answer: 'We use comprehensive market analysis, recent comparable sales, property conditions, and current market trends to provide accurate valuations.'
              },
              {
                question: 'What makes your service different?',
                answer: 'Our personalized approach, extensive network, and decades of luxury real estate experience ensure exceptional service and results for every client.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes, we have extensive experience working with international buyers and sellers, providing comprehensive support throughout the process.'
              },
              {
                question: 'What areas do you cover?',
                answer: 'We specialize in luxury properties across Dubai, Abu Dhabi, and other premium locations in the UAE and internationally.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;