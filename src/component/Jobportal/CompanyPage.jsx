'use client'
import { useState, useEffect } from "react";
import { Search, ChevronRight, ChevronLeft, Star, StarHalf, MapPin, Briefcase, Filter, X } from "lucide-react";

// Mock company data
const companiesData = [
  {
    id: 1,
    name: "TechNova",
    logo: "T",
    rating: 4.5,
    location: "San Francisco, CA",
    industry: ["Technology", "AI", "Software"],
    featured: true,
    description: "Leading innovator in AI solutions and software development."
  },
  {
    id: 2,
    name: "Global Finance",
    logo: "GF",
    rating: 4.8,
    location: "New York, NY",
    industry: ["Finance", "Banking", "Investment"],
    featured: true,
    description: "Premier financial services company with global reach."
  },
  {
    id: 3,
    name: "EcoSolutions",
    logo: "ES",
    rating: 4.2,
    location: "Portland, OR",
    industry: ["Green Energy", "Sustainability"],
    featured: true,
    description: "Pioneering sustainable solutions for a greener future."
  },
  {
    id: 4,
    name: "HealthPlus",
    logo: "H+",
    rating: 4.7,
    location: "Boston, MA",
    industry: ["Healthcare", "Biotech"],
    featured: true,
    description: "Advancing healthcare through innovative biotech solutions."
  },
  {
    id: 5,
    name: "MediaMax",
    logo: "MM",
    rating: 4.0,
    location: "Los Angeles, CA",
    industry: ["Media", "Entertainment"],
    featured: false,
    description: "Creating cutting-edge entertainment for global audiences."
  },
  {
    id: 6,
    name: "RetailGiant",
    logo: "RG",
    rating: 3.9,
    location: "Seattle, WA",
    industry: ["Retail", "E-commerce"],
    featured: false,
    description: "Transforming the shopping experience through innovation."
  },
  {
    id: 7,
    name: "FoodCraft",
    logo: "FC",
    rating: 4.3,
    location: "Chicago, IL",
    industry: ["Food", "Agriculture"],
    featured: false,
    description: "Crafting sustainable food solutions for modern needs."
  },
  {
    id: 8,
    name: "ConstructPro",
    logo: "CP",
    rating: 4.1,
    location: "Dallas, TX",
    industry: ["Construction", "Infrastructure"],
    featured: false,
    description: "Building the infrastructure of tomorrow, today."
  },
  {
    id: 9,
    name: "EduLearn",
    logo: "EL",
    rating: 4.4,
    location: "Austin, TX",
    industry: ["Education", "EdTech"],
    featured: false,
    description: "Revolutionizing education through innovative technology."
  },
  {
    id: 10,
    name: "TransportNow",
    logo: "TN",
    rating: 3.8,
    location: "Detroit, MI",
    industry: ["Transportation", "Logistics"],
    featured: false,
    description: "Moving the world forward with efficient logistics solutions."
  },
  {
    id: 11,
    name: "FashionForward",
    logo: "FF",
    rating: 4.2,
    location: "New York, NY",
    industry: ["Fashion", "Retail"],
    featured: false,
    description: "Setting trends and redefining style in the fashion industry."
  },
  {
    id: 12,
    name: "CloudCompute",
    logo: "CC",
    rating: 4.6,
    location: "Seattle, WA",
    industry: ["Technology", "Cloud Services"],
    featured: false,
    description: "Delivering powerful cloud solutions for businesses worldwide."
  }
];

// Get all unique industries
const allIndustries = Array.from(
  new Set(companiesData.flatMap(company => company.industry))
);

// Get all unique locations
const allLocations = Array.from(
  new Set(companiesData.map(company => company.location))
);

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-red-600 fill-red-600" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 text-red-600 fill-red-600" />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={i + fullStars} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
};

// Company Card
const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            {company.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base sm:text-lg truncate">{company.name}</h3>
            <StarRating rating={company.rating} />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{company.location}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {company.industry.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Company Card for Carousel
const FeaturedCompanyCard = ({ company }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg overflow-hidden text-white w-full h-48 sm:h-56 md:h-64 flex flex-col justify-between">
      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0">
            {company.logo}
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl truncate max-w-xs">{company.name}</h3>
            <div className="flex items-center mt-1">
              {[...Array(Math.floor(company.rating))].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 fill-yellow-300" />
              ))}
              {company.rating % 1 !== 0 && <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 fill-yellow-300" />}
            </div>
          </div>
        </div>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{company.description}</p>
      </div>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex justify-between items-center">
        <div className="flex items-center">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="text-xs sm:text-sm">{company.location}</span>
        </div>
        <button className="bg-white text-red-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

// Carousel Component
const Carousel = ({ featuredCompanies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = featuredCompanies.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg mb-6 sm:mb-8">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featuredCompanies.map((company, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <FeaturedCompanyCard company={company} />
            </div>
          ))}
        </div>
        <button
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-red-600 rounded-full p-1 sm:p-2 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-red-600 rounded-full p-1 sm:p-2 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {featuredCompanies.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Mobile Filter Drawer Component
const MobileFilterDrawer = ({ 
  isOpen, 
  onClose, 
  searchTerm, 
  setSearchTerm,
  selectedIndustries,
  toggleIndustry,
  selectedLocation,
  setSelectedLocation,
  minRating,
  setMinRating,
  resetFilters
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl text-red-600">Filters</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        {/* Search Box */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
        
        {/* Industry Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {allIndustries.map((industry, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`mobile-industry-${index}`}
                  className="form-checkbox h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  checked={selectedIndustries.includes(industry)}
                  onChange={() => toggleIndustry(industry)}
                />
                <label htmlFor={`mobile-industry-${index}`} className="ml-2 text-sm text-gray-700">
                  {industry}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Location Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {allLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        {/* Rating Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating: {minRating}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>5</span>
          </div>
        </div>
        
        {/* Apply Button */}
        <div className="flex space-x-3">
          <button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            onClick={onClose}
          >
            Apply Filters
          </button>
          <button
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
            onClick={() => {
              resetFilters();
              onClose();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function TopCompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeSort, setActiveSort] = useState("popular");

  // Filter companies based on search term and filters
  const filteredCompanies = companiesData.filter(company => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.some(ind => ind.toLowerCase().includes(searchTerm.toLowerCase())) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Industry filter
    const matchesIndustry = selectedIndustries.length === 0 || 
      company.industry.some(ind => selectedIndustries.includes(ind));
    
    // Location filter
    const matchesLocation = selectedLocation === "" || 
      company.location === selectedLocation;
    
    // Rating filter
    const matchesRating = company.rating >= minRating;
    
    return matchesSearch && matchesIndustry && matchesLocation && matchesRating;
  });

  // Get featured companies for carousel
  const featuredCompanies = companiesData.filter(company => company.featured);

  // Toggle industry selection
  const toggleIndustry = (industry) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(ind => ind !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedIndustries([]);
    setSelectedLocation("");
    setMinRating(0);
  };

  // Handle sort change
  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
    // Implement actual sorting logic here
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm !== "" || 
    selectedIndustries.length > 0 || 
    selectedLocation !== "" || 
    minRating > 0;

  return (
    <div className="bg-gray-50 h-auto">
      {/* Header */}
      <header className="bg-white text-black py-8 sm:py-12 px-4 sm:px-6 text-center">
        <div className="container mx-auto max-w-6xl">
          <p className="text-red-600 font-medium text-xs sm:text-sm tracking-wider uppercase mb-2">Discover Elite Workplaces</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Find Your Perfect Company Match</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore top-rated companies across industries and locations.
            Connect with organizations that align with your career goals and values.
          </p>
        </div>
      </header>

      <div className="container mx-auto w-full px-4 py-4 sm:py-8">
        {/* Mobile Filter Bar */}
        <div className="sticky top-0 z-10 mb-4 sm:mb-6 md:hidden bg-white rounded-lg shadow-sm p-3 flex justify-between items-center">
          <button 
            className="flex items-center space-x-2 text-gray-700 font-medium"
            onClick={() => setShowMobileFilters(true)}
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {selectedIndustries.length + (selectedLocation ? 1 : 0) + (minRating > 0 ? 1 : 0) + (searchTerm ? 1 : 0)}
              </span>
            )}
          </button>
          
          <div className="flex space-x-1">
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeSort === "popular" 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => handleSortChange("popular")}
            >
              Popular
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeSort === "newest" 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => handleSortChange("newest")}
            >
              Newest
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block md:w-1/4 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden self-start sticky top-4">
            <div className="p-4">
              <h2 className="font-bold text-xl mb-4 text-red-600">Filters</h2>
              
              {/* Search Box */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
              
              {/* Industry Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {allIndustries.map((industry, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`industry-${index}`}
                        className="form-checkbox h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        checked={selectedIndustries.includes(industry)}
                        onChange={() => toggleIndustry(industry)}
                      />
                      <label htmlFor={`industry-${index}`} className="ml-2 text-sm text-gray-700">
                        {industry}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {allLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating: {minRating}
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>5</span>
                </div>
              </div>
              
              {/* Reset Filters Button */}
              <button
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Carousel */}
            <Carousel featuredCompanies={featuredCompanies} />
            
            {/* Companies Grid */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  {filteredCompanies.length} Companies Found
                </h2>
                <div className="hidden md:flex space-x-2">
                  <button 
                    className={`transition-colors px-4 py-2 rounded-md font-medium ${
                      activeSort === "popular" 
                        ? "bg-red-600 text-white" 
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleSortChange("popular")}
                  >
                    Most Popular
                  </button>
                  <button 
                    className={`transition-colors px-4 py-2 rounded-md font-medium ${
                      activeSort === "newest" 
                        ? "bg-red-600 text-white" 
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleSortChange("newest")}
                  >
                    Newest
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
              
              {filteredCompanies.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 text-center">
                  <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-700">No companies found</h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your filters or search terms
                  </p>
                  <button
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer 
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedIndustries={selectedIndustries}
        toggleIndustry={toggleIndustry}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        minRating={minRating}
        setMinRating={setMinRating}
        resetFilters={resetFilters}
      />
    </div>
  );
}