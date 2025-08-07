import React, { useState } from "react";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building,
  DollarSign,
  Home,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  category: string;
  featured: boolean;
  description: string;
  yearBuilt: number;
  parking: number;
  lotSize: string;
  propertyTax: string;
  hoaFees: string;
  images: string[];
  features: string[];
  amenities: Array<{ name: string; description: string }>;
  nearbyPlaces: Array<{ name: string; distance: string; type: string }>;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const inquiryData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      propertyId: property?.id,
      propertyTitle: property?.title,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Inquiry submitted:", inquiryData);
      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden animate-scale-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto max-h-[95vh]">
            {/* Image Gallery */}
            <div className="relative h-96 md:h-[500px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Thumbs]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass:
                    "swiper-pagination-bullet !bg-luxury-gold !opacity-60",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active !opacity-100",
                }}
                autoplay={{ delay: 5000 }}
                thumbs={{ swiper: thumbsSwiper }}
                loop
                className="h-full"
              >
                {property.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all duration-300">
                <ChevronLeft className="w-6 h-6 text-white" />
              </div>
              <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all duration-300">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>

              {/* Price Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-luxury-gold text-black px-8 py-4 rounded-2xl shadow-xl">
                  <span className="text-3xl font-bold">{property.price}</span>
                </div>
              </div>

              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-luxury-gold to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Featured Property
                </div>
              )}
            </div>

            {/* Thumbnail Slider */}
            <div className="p-6 bg-gray-50">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                  640: { slidesPerView: 6 },
                  768: { slidesPerView: 8 },
                  1024: { slidesPerView: 10 },
                }}
                className="thumbnail-slider"
              >
                {property.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity duration-300 border-2 border-transparent hover:border-luxury-gold"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Basic Info */}
                  <div>
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="w-6 h-6 mr-3 text-luxury-gold" />
                      <span className="text-xl font-medium">
                        {property.location}
                      </span>
                    </div>
                  </div>

                  {/* Property Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-r from-luxury-gold/10 to-yellow-500/10 rounded-2xl">
                    <div className="text-center">
                      <Bed className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.bedrooms}
                      </div>
                      <div className="text-gray-600 font-medium">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <Bath className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.bathrooms}
                      </div>
                      <div className="text-gray-600 font-medium">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <Square className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.area}
                      </div>
                      <div className="text-gray-600 font-medium">Area</div>
                    </div>
                    <div className="text-center">
                      <Car className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {property.parking}
                      </div>
                      <div className="text-gray-600 font-medium">Parking</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {property.description}
                    </p>
                  </div>

                  {/* Property Details */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Property Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Home className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              Property Type
                            </span>
                          </div>
                          <span className="text-gray-900">
                            {property.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              Year Built
                            </span>
                          </div>
                          <span className="text-gray-900">
                            {property.yearBuilt}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Square className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              Lot Size
                            </span>
                          </div>
                          <span className="text-gray-900">
                            {property.lotSize}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <DollarSign className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              Property Tax
                            </span>
                          </div>
                          <span className="text-gray-900">
                            {property.propertyTax}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Building className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              HOA Fees
                            </span>
                          </div>
                          <span className="text-gray-900">
                            {property.hoaFees}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <div className="flex items-center">
                            <Home className="w-5 h-5 text-luxury-gold mr-3" />
                            <span className="font-semibold text-gray-700">
                              Listing Type
                            </span>
                          </div>
                          <span className="text-gray-900">
                            For {property.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {property.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-luxury-gold/10 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Amenities
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {property.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gradient-to-br from-luxury-gold/10 to-yellow-500/5 rounded-2xl hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-luxury-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <div className="w-6 h-6 bg-luxury-gold rounded-full" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {amenity.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {amenity.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Places */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Nearby Places
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {property.nearbyPlaces.map((place, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-luxury-gold/10 transition-colors duration-300"
                        >
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {place.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {place.type}
                            </p>
                          </div>
                          <span className="text-luxury-gold font-semibold">
                            {place.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Contact Form */}
                  <div className="bg-gradient-to-br from-luxury-gold/10 to-yellow-500/5 rounded-2xl p-4 shadow-lg border border-luxury-gold/20 sticky top-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Interested in this property?
                    </h3>

                    {submitStatus === "success" && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 animate-slide-up">
                        <p className="text-green-800">
                          Thank you! Your inquiry has been sent successfully.
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 animate-slide-up">
                        <p className="text-red-800">
                          Sorry, there was an error sending your inquiry. Please
                          try again.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 resize-none bg-white text-gray-900 placeholder-gray-500"
                        defaultValue={`I'm interested in ${property.title}`}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-500 hover:to-luxury-gold disabled:from-gray-400 disabled:to-gray-500 text-black font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-3">
                            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          "Send Inquiry"
                        )}
                      </button>
                    </form>
                    {/* Agent Info */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-6">
                      <h4 className="text-xl font-serif font-bold text-gray-900 mb-6">
                        Your Agent
                      </h4>
                      <div className="flex items-center space-x-4 mb-6">
                        <img
                          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100"
                          alt="Agent"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-bold text-gray-900">
                            Ahmed Al-Mansouri
                          </h5>
                          <p className="text-gray-600">
                            Senior Property Advisor
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="text-luxury-gold text-sm">
                              ★★★★★
                            </span>
                            <span className="text-gray-500 text-sm ml-2">
                              (4.9/5)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                            <span className="text-luxury-gold">📞</span>
                          </div>
                          <span className="text-gray-700">
                            +971 50 123 4567
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                            <span className="text-luxury-gold">✉️</span>
                          </div>
                          <span className="text-gray-700">
                            ahmed@abuhills.com
                          </span>
                        </div>
                      </div>
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

export default PropertyModal;
