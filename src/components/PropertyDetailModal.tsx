import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Wifi,
  Dumbbell,
  Waves,
  Shield,
  Calendar,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface PropertyDetailModalProps {
  property: {
    id: number;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: string;
    featured?: boolean;
    category?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !property) return null;

  const propertyImages = [
    property.image,
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const amenities = [
    { icon: Car, label: "Private Parking" },
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Calendar, label: "Concierge Service" },
  ];

  const features = [
    "Premium marble flooring",
    "Central air conditioning",
    "Built-in wardrobes",
    "Modern kitchen appliances",
    "Balcony with city view",
    "Smart home automation",
    "Premium bathroom fixtures",
    "Walk-in closets",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Image Gallery */}
            <div className="relative h-96 animate-fade-in rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="h-full"
              >
                {propertyImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      loading="lazy"
                      onError={(e) =>
                        (e.currentTarget.src =
                          "https://via.placeholder.com/800x400?text=Image+Not+Available")
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Price Badge */}
              <div className="absolute bottom-6 left-6 bg-luxury-gold text-black px-8 py-4 rounded-full shadow-lg border-2 border-white/70 animate-fade-in">
                <span className="text-3xl font-extrabold tracking-wide drop-shadow">
                  {property.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>

                  {/* Property Stats */}
                  <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <Bed className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.bedrooms}
                      </div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <Bath className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.bathrooms}
                      </div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <Square className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.area}
                      </div>
                      <div className="text-gray-600">Area</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      This exceptional {property.category || "property"} offers
                      luxurious living in one of the most prestigious locations.
                      Featuring premium finishes, spacious layouts, and stunning
                      views, this property represents the pinnacle of modern
                      luxury living. Perfect for families seeking comfort and
                      elegance, or investors looking for premium real estate
                      opportunities.
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Amenities
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <amenity.icon className="w-5 h-5 text-luxury-gold" />
                          <span className="text-gray-700 text-sm">
                            {amenity.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Contact Form */}
                  <div className="bg-luxury-cream p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Interested in this property?
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  </div>

                  {/* Agent Info */}
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="Agent"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Ahmed Al-Mansouri
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Senior Property Advisor
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>📞 +971 50 123 4567</div>
                      <div>✉️ ahmed@abuhills.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
