import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
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
  Phone,
  Mail,
  Heart,
  Share2,
  Camera,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock property data - in real app, fetch by ID
  const properties = [
    {
      id: 1,
      title: "Luxury Downtown Penthouse with Panoramic Views",
      price: "$2,500,000",
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,500 sq ft",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Sale",
      category: "Penthouse",
      featured: true,
      description:
        "Experience luxury living at its finest in this stunning penthouse featuring floor-to-ceiling windows, premium finishes, and breathtaking city views. This exceptional property offers an open-concept design with high-end appliances, marble countertops, and custom millwork throughout.",
      yearBuilt: 2020,
      parking: 2,
      lotSize: "N/A",
      propertyTax: "$25,000/year",
      hoaFees: "$1,200/month",
    },
    {
      id: 2,
      title: "Modern Family Home with Garden",
      price: "$850,000",
      location: "Brooklyn, NY",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Sale",
      category: "Family Home",
      description:
        "Beautiful modern family home featuring an open floor plan, gourmet kitchen, and private backyard garden. Perfect for families seeking comfort and style in a quiet neighborhood setting.",
      yearBuilt: 2018,
      parking: 2,
      lotSize: "0.25 acres",
      propertyTax: "$12,000/year",
      hoaFees: "N/A",
    },
  ];

  const property =
    properties.find((p) => p.id === parseInt(id || "1")) || properties[0];

  const propertyImages = [
    property.image,
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const amenities = [
    { icon: Car, label: "Private Parking", description: "2 Covered Spaces" },
    {
      icon: Wifi,
      label: "High-Speed Internet",
      description: "Fiber Optic Ready",
    },
    { icon: Dumbbell, label: "Fitness Center", description: "24/7 Access" },
    { icon: Waves, label: "Swimming Pool", description: "Rooftop Pool & Spa" },
    { icon: Shield, label: "24/7 Security", description: "Concierge Service" },
    { icon: Calendar, label: "Event Space", description: "Private Lounge" },
  ];

  const features = [
    "Premium marble flooring throughout",
    "Central air conditioning & heating",
    "Built-in wardrobes in all bedrooms",
    "Gourmet kitchen with premium appliances",
    "Private balcony with panoramic views",
    "Smart home automation system",
    "Luxury bathroom fixtures & finishes",
    "Walk-in closets with custom organization",
    "In-unit washer and dryer",
    "Floor-to-ceiling windows",
    "Hardwood floors in living areas",
    "Custom lighting throughout",
  ];

  const nearbyPlaces = [
    { name: "Central Park", distance: "0.3 miles", type: "Park" },
    { name: "Metropolitan Museum", distance: "0.5 miles", type: "Museum" },
    { name: "Whole Foods Market", distance: "0.2 miles", type: "Grocery" },
    { name: "Lenox Hill Hospital", distance: "0.4 miles", type: "Hospital" },
    { name: "77th Street Station", distance: "0.1 miles", type: "Subway" },
    {
      name: "Madison Avenue Shopping",
      distance: "0.3 miles",
      type: "Shopping",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-cream to-white pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate("/properties")}
          className="flex items-center space-x-3 text-gray-600 hover:text-luxury-gold transition-colors duration-300 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Properties</span>
        </button>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Main Image Slider */}
          <div className="relative h-96 md:h-[500px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Thumbs]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              thumbs={{ swiper: thumbsSwiper }}
              className="h-full"
            >
              {propertyImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex space-x-3 z-10">
              <button className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
                <Heart className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-3 text-white hover:bg-black/80 transition-all duration-300">
                <Camera className="w-5 h-5" />
                <span className="font-medium">{propertyImages.length}</span>
              </button>
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="bg-luxury-gold text-black px-8 py-4 rounded-2xl shadow-xl">
                <span className="text-3xl font-bold">{property.price}</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Slider */}
          <div className="p-6">
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
              {propertyImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Basic Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="mb-6">
                {property.featured && (
                  <span className="inline-block bg-gradient-to-r from-luxury-gold to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                    ⭐ Featured Property
                  </span>
                )}
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-r from-luxury-gold/10 to-yellow-500/10 rounded-2xl mb-8">
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
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Property Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Property Type
                    </span>
                    <span className="text-gray-900">{property.category}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Year Built
                    </span>
                    <span className="text-gray-900">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Lot Size
                    </span>
                    <span className="text-gray-900">{property.lotSize}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Property Tax
                    </span>
                    <span className="text-gray-900">
                      {property.propertyTax}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      HOA Fees
                    </span>
                    <span className="text-gray-900">{property.hoaFees}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Listing Type
                    </span>
                    <span className="text-gray-900">For {property.type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Amenities
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-br from-luxury-gold/10 to-yellow-500/5 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-luxury-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {amenity.label}
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
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Nearby Places
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {place.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{place.type}</p>
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
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Interested in this property?
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 resize-none"
                  defaultValue={`I'm interested in ${property.title}`}
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-500 hover:to-luxury-gold text-black font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Call</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </button>
              </div>
            </div>

            {/* Agent Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
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
                  <h5 className="font-bold text-gray-900">Ahmed Al-Mansouri</h5>
                  <p className="text-gray-600">Senior Property Advisor</p>
                  <div className="flex items-center mt-1">
                    <span className="text-luxury-gold text-sm">★★★★★</span>
                    <span className="text-gray-500 text-sm ml-2">(4.9/5)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  <span className="text-gray-700">+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                  <span className="text-gray-700">ahmed@abuhills.com</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-all duration-300 font-semibold">
                View Agent Profile
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

export default PropertyDetail;
