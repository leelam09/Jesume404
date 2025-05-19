"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Users,
  FileText,
  Download,
  Clock,
  Shield,
  Star,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Check,
  Briefcase,
  Award,
  TrendingUp,
  Zap,
  BookOpen,
} from "lucide-react";

export default function ResumeHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef(null);

  const features = [
    { word: "Professional", color: "text-red-500" },
    { word: "Standout", color: "text-red-400" },
    { word: "Impressive", color: "text-red-600" },
    { word: "Hired", color: "text-red-500" },
  ];

  const templateOptions = [
    {
      name: "Executive",
      price: "29",
      icon: Briefcase,
      color: "bg-gradient-to-r from-red-600 to-red-800",
      benefits: ["ATS Optimized", "Executive Layout", "Premium Support"],
    },
    {
      name: "Professional",
      price: "19",
      icon: Users,
      color: "bg-gradient-to-r from-red-500 to-red-700",
      benefits: ["ATS Friendly", "Modern Design", "Standard Support"],
    },
    {
      name: "Basic",
      price: "Free",
      icon: Calendar,
      color: "bg-gradient-to-r from-gray-600 to-gray-800",
      benefits: ["Simple Layout", "Essential Sections", "Community Support"],
    },
  ];

  const statsData = [
    {
      label: "Resumes Created",
      value: "500K+",
      icon: FileText,
      color: "from-red-500 to-red-600",
      description: "Trusted by half a million job seekers worldwide",
    },
    {
      label: "Interview Rate",
      value: "87%",
      icon: Users,
      color: "from-red-600 to-red-700",
      description: "Our users get more interviews consistently",
    },
    {
      label: "ATS Pass Rate",
      value: "98%",
      icon: Shield,
      color: "from-red-700 to-red-800",
      description: "Built to pass Applicant Tracking Systems",
    },
    {
      label: "Satisfaction",
      value: "99%",
      icon: Star,
      color: "from-red-500 to-red-600",
      description: "Our users love their career success stories",
    },
  ];

  const testimonials = [
    {
      initial: "M",
      name: "Michael T.",
      role: "Software Engineer",
      color: "bg-red-500",
    },
    {
      initial: "J",
      name: "Jessica P.",
      role: "Marketing Director",
      color: "bg-red-500",
    },
    {
      initial: "R",
      name: "Robert K.",
      role: "Financial Analyst",
      color: "bg-red-500",
    },
    {
      initial: "A",
      name: "Amanda L.",
      role: "Product Manager",
      color: "bg-red-500",
    },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);

    // Word rotation effect
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(featureInterval);
  }, []);

  // Parallax effect calculations
  const calculateParallax = (factor) => {
    return scrollPosition * factor;
  };

  return (
    <div className="relative bg-white text-red-700 overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract pattern with parallax */}
        <div className="absolute inset-0">
          {/* Grid SVG with parallax and low opacity */}
          <div
            className="absolute inset-0 opacity-5"
            style={{ transform: `translateY(${calculateParallax(0.02)}px)` }}
          >
            <svg
              className="w-full h-full"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0 0h40v40H0z" fill="none" />
                  <path
                    d="M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z"
                    fill="currentColor"
                    className="text-red-300"
                  />
                </pattern>
                {/* Gradient mask */}
                <mask
                  id="fadeMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                >
                  <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                </mask>
                <linearGradient
                  id="fadeGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="black" />
                </linearGradient>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#grid)"
                mask="url(#fadeMask)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column - Copy */}
          <div
            className={`lg:col-span-6 transition-all 2xl:-ml-24 duration-1000 transform ${
              isIntersecting
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30 mb-6 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
              <span className="text-red-600 font-medium text-sm">
                Professional Resume Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Make Your Resume
              <div className="relative inline-block ml-3">
                <span
                  className={`absolute transition-all duration-500 ${
                    currentFeature === 0
                      ? "opacity-100 transform-none"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  {features[0].word}
                </span>
                <span
                  className={`absolute transition-all duration-500 ${
                    currentFeature === 1
                      ? "opacity-100 transform-none"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <span className={features[1].color}>{features[1].word}</span>
                </span>
                <span
                  className={`absolute transition-all duration-500 ${
                    currentFeature === 2
                      ? "opacity-100 transform-none"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <span className={features[2].color}>{features[2].word}</span>
                </span>
                <span
                  className={`absolute transition-all duration-500 ${
                    currentFeature === 3
                      ? "opacity-100 transform-none"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <span className={features[3].color}>{features[3].word}</span>
                </span>
                <span className="opacity-0">
                  {features[currentFeature].word}
                </span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              ATS-optimized resume templates designed to make your application
              stand out and land your dream job.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {/* Button 1: Create Your Resume */}
              <Link href="/builder">
                <button className="relative overflow-hidden group bg-red-600 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-red-700">
                  <span className="relative z-10">Create Your Resume</span>
                  <ChevronRight
                    className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </Link>

              {/* Button 2: Explore Templates */}
              <Link href="/builder">
                <button className="relative overflow-hidden group bg-transparent text-red-600 border border-red-200 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:border-red-400">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Explore Templates
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex -space-x-3">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className={`relative w-10 h-10 rounded-full ${testimonial.color} border-2 border-white flex items-center justify-center text-xs font-medium text-white shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:z-10`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {testimonial.initial}
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 -left-1/2 w-32 bg-white shadow-lg rounded-lg p-2 text-left pointer-events-none">
                      <p className="text-xs font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Trusted by 100,000+ job seekers
                </div>
                <div className="text-sm text-gray-500">
                  Join our growing community
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div
            className={`lg:col-span-6 transition-all 2xl:-ml-12 2xl:mr-12 duration-1000 delay-300 transform ${
              isIntersecting
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Resume Preview */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-500 hover:shadow-red-500/20 hover:border-red-500/50 group">
                <img
                  src="/main.jpg"
                  alt="Professional resume template"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white text-xl font-semibold mb-2">
                      Executive Template
                    </div>
                    <div className="flex flex-wrap items-center text-white/90 text-sm mb-4">
                      <FileText size={14} className="mr-1" />
                      <span>ATS Optimized</span>
                      <span className="mx-2">•</span>
                      <span>Modern Design</span>
                    </div>
                    <button className="bg-white/90 hover:bg-white text-red-600 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform group-hover:scale-105 flex items-center">
                      Preview Template
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Cards with animations */}
              <div
                className="absolute -left-6 -bottom-24 z-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200 w-48 transition-all duration-500 hover:border-red-500/50 hover:shadow-red-500/20 hover:-translate-y-1 hover:scale-105"
                style={{ animation: "float 6s infinite ease-in-out" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-r from-red-500/30 to-red-600/30">
                    <FileText className="text-red-600" size={16} />
                  </div>
                  <span className="text-xs font-medium text-red-600 bg-red-500/10 px-2 py-0.5 rounded-full">
                    Premium
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  AI Content Writer
                </div>
                <div className="text-xs text-gray-600">
                  Perfect job descriptions
                </div>
              </div>

              <div
                className="absolute -right-24 top-6 z-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200 w-48 transition-all duration-500 hover:border-red-500/50 hover:shadow-red-500/20 hover:-translate-y-1 hover:scale-105"
                style={{ animation: "float 7s infinite ease-in-out 1s" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-r from-red-500/30 to-red-600/30">
                    <Download className="text-red-600" size={16} />
                  </div>
                  <span className="text-xs font-medium text-red-600 bg-red-500/10 px-2 py-0.5 rounded-full">
                    Included
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Multiple Formats
                </div>
                <div className="text-xs text-gray-600">
                  PDF, DOCX, and Plain Text
                </div>
              </div>

              {/* Template Options Panel - Enhanced version */}
              <div
                className="absolute -right-56 -bottom-36 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-200 w-64 md:w-72 transition-all duration-500 hover:shadow-red-500/20"
                style={{ animation: "float 8s infinite ease-in-out 0.5s" }}
              >
                <div className="text-sm font-medium text-gray-900 mb-3 flex items-center justify-between">
                  <span>Template Options</span>
                  <span className="text-xs text-red-600">Customize</span>
                </div>
                <div className="space-y-2">
                  {templateOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        hoveredTemplate === index
                          ? "border-red-500/50 bg-red-500/5 shadow-lg shadow-red-500/10"
                          : "border-gray-200 hover:border-red-500/30 hover:bg-red-500/5"
                      }`}
                      onMouseEnter={() => setHoveredTemplate(index)}
                      onMouseLeave={() => setHoveredTemplate(null)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-1.5 rounded-md ${option.color} mr-3`}
                        >
                          <option.icon size={14} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-900">
                              {option.name}
                            </span>
                            <span className="text-sm font-bold text-red-600">
                              ${option.price !== "Free" ? option.price : "0"}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {option.price === "Free"
                              ? "Forever Free"
                              : "one-time"}
                          </div>

                          {/* Show benefits when hovered */}
                          <div
                            className={`mt-2 space-y-1 ${
                              hoveredTemplate === index ? "block" : "hidden"
                            }`}
                          >
                            {option.benefits.map((benefit, i) => (
                              <div
                                key={i}
                                className="flex items-center text-xs text-gray-700"
                              >
                                <Check
                                  size={12}
                                  className="text-red-600 mr-1"
                                />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/">
                  <button className="w-full mt-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:translate-y-1 flex items-center justify-center">
                    View All Templates
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* REDESIGNED Bottom Stats Bar */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Job Seekers Choose Our Platform
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 group ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  hoveredStat === index
                    ? "border-red-500 shadow-lg shadow-red-500/10 scale-105 -translate-y-1"
                    : "hover:border-red-300 hover:shadow-md hover:-translate-y-1"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon container with gradient background */}
                <div className="relative flex justify-center mb-3">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${stat.color} transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <stat.icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Value with animated counter effect */}
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {stat.label}
                  </div>

                  {/* Description that appears on hover */}
                  <div
                    className={`text-xs text-gray-500 transition-all duration-300 ${
                      hoveredStat === index
                        ? "opacity-100 max-h-16 mt-2"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {stat.description}
                  </div>
                </div>

                {/* Bottom border that animates on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    stat.color
                  } transition-all duration-500 ${
                    hoveredStat === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}
