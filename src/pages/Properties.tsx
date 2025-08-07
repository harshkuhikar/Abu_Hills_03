import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/PropertyModal";
import Footer from "../components/Footer";
import propertiesData from "../data/properties.json";

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

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const propertiesPerPage = 6;
  const properties: Property[] = propertiesData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === "All" || property.type === selectedType;

      const matchesBedrooms =
        bedrooms === "All" ||
        (bedrooms === "1" && property.bedrooms === 1) ||
        (bedrooms === "2" && property.bedrooms === 2) ||
        (bedrooms === "3" && property.bedrooms === 3) ||
        (bedrooms === "4+" && property.bedrooms >= 4);

      let matchesPrice = true;
      if (priceRange !== "All") {
        const priceValue = parseInt(property.price.replace(/[$,\/month]/g, ""));
        switch (priceRange) {
          case "Under $500k":
            matchesPrice = priceValue < 500000;
            break;
          case "$500k - $1M":
            matchesPrice = priceValue >= 500000 && priceValue <= 1000000;
            break;
          case "$1M - $2M":
            matchesPrice = priceValue >= 1000000 && priceValue <= 2000000;
            break;
          case "$2M - $5M":
            matchesPrice = priceValue >= 2000000 && priceValue <= 5000000;
            break;
          case "Over $5M":
            matchesPrice = priceValue > 5000000;
            break;
          case "Under $3k/month":
            matchesPrice = property.type === "Rent" && priceValue < 3000;
            break;
          case "$3k - $5k/month":
            matchesPrice =
              property.type === "Rent" &&
              priceValue >= 3000 &&
              priceValue <= 5000;
            break;
          case "Over $5k/month":
            matchesPrice = property.type === "Rent" && priceValue > 5000;
            break;
        }
      }

      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, selectedType, priceRange, bedrooms, properties]);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType, priceRange, bedrooms]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setPriceRange("All");
    setBedrooms("All");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-cream via-white to-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-luxury-dark via-luxury-charcoal to-luxury-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider bg-luxury-gold/10 px-6 py-3 rounded-full border border-luxury-gold/20">
              Premium Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Luxury Properties
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover exceptional properties in the world's most prestigious
            locations
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Filters Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  Find Your Perfect Property
                </h2>
                <p className="text-gray-600">
                  Use our advanced filters to discover properties that match
                  your needs
                </p>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 bg-luxury-gold text-black px-6 py-3 rounded-xl font-semibold hover:bg-luxury-gold/90 transition-all duration-300"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search by title, location, or property type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            <div
              className={`${showFilters ? "block" : "hidden lg:block"} transition-all duration-300`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white hover:border-gray-300 text-black"
                  >
                    <option value="All">All Types</option>
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white hover:border-gray-300 text-black"
                  >
                    <option value="All">All Prices</option>
                    {selectedType === "Sale" || selectedType === "All" ? (
                      <>
                        <option value="Under $500k">Under $500k</option>
                        <option value="$500k - $1M">$500k - $1M</option>
                        <option value="$1M - $2M">$1M - $2M</option>
                        <option value="$2M - $5M">$2M - $5M</option>
                        <option value="Over $5M">Over $5M</option>
                      </>
                    ) : null}
                    {selectedType === "Rent" || selectedType === "All" ? (
                      <>
                        <option value="Under $3k/month">Under $3k/month</option>
                        <option value="$3k - $5k/month">$3k - $5k/month</option>
                        <option value="Over $5k/month">Over $5k/month</option>
                      </>
                    ) : null}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 bg-white hover:border-gray-300 text-black"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 font-semibold hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear All</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-600 text-lg">
                      Showing{" "}
                      <span className="font-bold text-luxury-gold">
                        {startIndex + 1}-
                        {Math.min(endIndex, filteredProperties.length)}
                      </span>{" "}
                      of{" "}
                      <span className="font-bold text-luxury-gold">
                        {filteredProperties.length}
                      </span>{" "}
                      properties
                    </p>
                    {totalPages > 1 && (
                      <div className="hidden sm:block w-px h-6 bg-gray-300" />
                    )}
                    {totalPages > 1 && (
                      <p className="text-gray-600">
                        Page{" "}
                        <span className="font-bold text-luxury-gold">
                          {currentPage}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-luxury-gold">
                          {totalPages}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {searchTerm && (
                      <span className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                        Search: "{searchTerm}"
                      </span>
                    )}
                    {selectedType !== "All" && (
                      <span className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                        {selectedType}
                      </span>
                    )}
                    {priceRange !== "All" && (
                      <span className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                        {priceRange}
                      </span>
                    )}
                    {bedrooms !== "All" && (
                      <span className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                        {bedrooms} {bedrooms === "1" ? "Bedroom" : "Bedrooms"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {currentProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {currentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onViewDetails={() => handlePropertyClick(property)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-6">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              No properties found
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              Try adjusting your search criteria or clearing the filters to see
              more properties
            </p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-luxury-gold to-yellow-500 text-black px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-luxury-gold transition-all duration-300 font-bold text-lg hover:scale-[1.02] shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-luxury-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-gray-700 hover:text-luxury-gold disabled:hover:text-gray-700 disabled:hover:border-gray-200"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </button>

              <div className="flex items-center space-x-2">
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[48px] ${
                      currentPage === pageNum
                        ? "bg-gradient-to-r from-luxury-gold to-yellow-500 text-black shadow-lg scale-110"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50 hover:border-luxury-gold hover:text-luxury-gold hover:scale-105"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-luxury-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-gray-700 hover:text-luxury-gold disabled:hover:text-gray-700 disabled:hover:border-gray-200"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Showing page{" "}
                <span className="font-bold text-luxury-gold">
                  {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-bold text-luxury-gold">{totalPages}</span>{" "}
                ({filteredProperties.length} total properties)
              </p>
            </div>
          </div>
        )}
      </div>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
};

export default Properties;
