import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight, Star, Eye } from 'lucide-react';

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  images: string[];
  featured?: boolean;
  category?: string;
  onViewDetails: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  images,
  featured = false,
  category = 'Luxury Property',
  onViewDetails
}) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-luxury-gold to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1 animate-pulse">
            <Star className="w-4 h-4 fill-current" />
            <span>Featured</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium">
          {category}
        </div>
        
        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-luxury-gold/95 backdrop-blur-sm text-black px-6 py-3 rounded-2xl shadow-lg">
            <span className="text-2xl font-bold">{price}</span>
          </div>
        </div>

        {/* Image Count */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
          <Eye className="w-4 h-4" />
          <span>{images.length}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Container */}
      <div className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-luxury-gold transition-colors duration-300 mb-4 line-clamp-2 min-h-[4rem]">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-6">
          <MapPin className="w-5 h-5 mr-3 text-luxury-gold flex-shrink-0" />
          <span className="font-medium truncate text-lg">{location}</span>
        </div>
        
        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 mb-8 bg-gradient-to-r from-gray-50 to-luxury-gold/5 rounded-2xl p-6">
          <div className="flex items-center space-x-2">
            <Bed className="w-5 h-5 text-luxury-gold" />
            <span className="font-semibold">{bedrooms}</span>
            <span className="text-sm">Beds</span>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex items-center space-x-2">
            <Bath className="w-5 h-5 text-luxury-gold" />
            <span className="font-semibold">{bathrooms}</span>
            <span className="text-sm">Baths</span>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex items-center space-x-2">
            <Square className="w-5 h-5 text-luxury-gold" />
            <span className="font-semibold text-sm">{area}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-600 hover:to-luxury-gold text-black py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-3 group"
        >
          <span>View Details</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;