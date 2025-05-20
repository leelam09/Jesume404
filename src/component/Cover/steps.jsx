"use client";
import { useState, useEffect } from "react";
import { CheckCircle, Check, X, AlertCircle, ArrowRight } from "lucide-react";

export default function CoverLetterBuilder() {
  const [isHovered, setIsHovered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Set animation after component mounts
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-red-100 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-56 md:w-80 h-56 md:h-80 bg-red-200 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-40 md:w-64 h-40 md:h-64 bg-red-300 rounded-full blur-3xl opacity-40"></div> 

      <div className="absolute top-40 md:top-60 right-10 md:right-20 w-12 md:w-20 h-12 md:h-20 bg-red-600 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 md:bottom-40 right-1/5 md:right-1/4 w-10 md:w-16 h-10 md:h-16 bg-red-400 rounded-full opacity-20 animate-float-slow"></div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 py-6 md:py-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative mb-4 md:mb-6">
            <h1 className="relative text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 px-3 md:px-6 py-1 md:py-2">
              A feature-packed, yet streamlined cover letter builder
            </h1>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-transparent">
          {/* First Feature: Easy to implement design */}
          <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b border-gray-100">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4 relative">
                Easy to implement design
                <div className="absolute h-2 md:h-3 w-28 md:w-36 bg-red-200 bottom-0 left-0 -z-10"></div>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-5 leading-relaxed">
                Enhance's design team has worked hard on creating beautiful
                looking, attention-grabbing designs that will help your cover
                letter stand out. Easily switch between background and color
                variations depending on the level of formality.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                {["Professional", "Creative", "Modern"].map((style) => (
                  <span
                    key={style}
                    className="px-2 md:px-3 py-1 bg-red-50 text-red-700 text-xs sm:text-sm font-medium rounded-full border border-red-100"
                  >
                    {style}
                  </span>
                ))}
              </div>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-md font-semibold flex items-center justify-center sm:justify-start gap-1.5">
                Browse Templates
                <ArrowRight size={8} className="size-5 md:size-8" />
              </button>
            </div>

            <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
              <div className="relative z-10 flex justify-center">
                <img
                  src="/cover/step1.webp"
                  alt="Cover letter templates"
                  className="h-56 sm:h-64 md:h-80 w-56 sm:w-64 md:w-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Feature: Real-time spell check */}
          <div
            className={`flex flex-col md:flex-row-reverse items-center justify-between p-4 md:p-8 border-b border-gray-100 transition-all duration-1000 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 relative">
                <span className="relative z-10">Real-time spell check</span>
                <span className="absolute -left-2 bottom-0 h-2 md:h-3 w-36 md:w-56 bg-red-200 -z-0"></span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Never send a cover letter with a typo ever again! Take advantage
                of our{" "}
                <span className="text-red-600 font-semibold">
                  real-time spell checker
                </span>{" "}
                and get a cover letter that makes your personality stand out.
              </p>
              <ul className="mb-5 md:mb-8 space-y-2 md:space-y-3">
                {[
                  "Grammar corrections",
                  "Style improvements",
                  "Tone suggestions",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-sm sm:text-base text-gray-700">
                    <div className="bg-red-100 p-0.5 md:p-1 rounded-full mr-2 md:mr-3">
                      <CheckCircle size={8} className="size-10 md:size5 text-red-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
                              <button
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-md font-semibold flex items-center justify-center sm:justify-start gap-1.5 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Try Spell Check
                <span
                  className={`transform transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                >
                  <ArrowRight size={8} className="size-5 md:size-8" />
                </span>
              </button>
            </div>

            <div className="w-full md:w-1/2 relative mt-6 md:mt-0 flex justify-center">
              {/* Spell check modal */}
              <div className="bg-white text-black rounded-xl shadow-lg p-3 md:p-4 w-60 sm:w-64 md:w-72 relative z-10 border-l-3 border-red-600">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800">
                    Content Improvements
                  </h3>
                  <button className="text-gray-500 hover:text-red-600 transition-colors p-1 bg-gray-100 rounded-full">
                    <X size={6} className="size-5 md:size-7" />
                  </button>
                </div>

                <div className="mb-3 md:mb-4">
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <span className="text-xs font-medium">
                      Tailored Suggestions
                    </span>
                    <div className="bg-red-600 w-8 md:w-10 h-4 md:h-5 rounded-full flex items-center justify-end p-0.5 md:p-1 cursor-pointer">
                      <div className="bg-white rounded-full w-2.5 md:w-3 h-2.5 md:h-3 shadow-sm transition-transform duration-300 hover:scale-110"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="bg-red-600 text-white text-xs font-bold rounded-sm px-1 md:px-1.5 py-0.5 mr-1.5">
                        S
                      </div>
                      <span className="text-xs font-medium">
                        SpellCheck & Grammar
                      </span>
                    </div>
                    <div className="bg-red-600 w-8 md:w-10 h-4 md:h-5 rounded-full flex items-center justify-end p-0.5 md:p-1 cursor-pointer">
                      <div className="bg-white rounded-full w-2.5 md:w-3 h-2.5 md:h-3 shadow-sm transition-transform duration-300 hover:scale-110"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-2 md:p-3 mb-3 md:mb-4 border border-red-100">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="text-red-600 mt-0.5">
                      <AlertCircle size={7} className="size-5 md:size-8" />
                    </div>
                    <div>
                      <div className="text-xs text-red-600 font-bold uppercase tracking-wide mb-0.5 md:mb-1">
                        Error Detected
                      </div>
                      <div className="text-xs md:text-sm font-medium">
                        Did you mean "can't"?
                      </div>

                      <div className="flex gap-2 mt-2 md:mt-3">
                        <div className="bg-gray-200 rounded text-xs py-0.5 px-1.5 md:px-2 font-medium cursor-pointer hover:bg-gray-300 transition-colors">
                          cant
                        </div>
                        <div className="bg-red-600 text-white rounded text-xs py-0.5 px-1.5 md:px-2 font-medium cursor-pointer hover:bg-red-700 transition-colors flex items-center gap-1">
                          <CheckCircle size={4} className="size-5 md:size-4" />
                          "can't"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#"
                    className="text-xs text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    View all suggestions →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Third Feature: State-of-the-art cover letter generator */}
          <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4 relative">
                State-of-the-art cover letter generator
                <div className="absolute h-2 md:h-3 w-28 md:w-36 bg-red-200 bottom-0 left-0 -z-10"></div>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-5 leading-relaxed">
                Beat the writer's block with our cover letter generator. Follow
                our directions, let us know a bit more about your experience,
                skills, and greatest accomplishments, and get your cover letter
                made for you thanks to our industry-leading creative technology.
              </p>
              <div className="p-2.5 md:p-3 bg-red-50 rounded-lg border border-red-100 mb-3 md:mb-5">
                <div className="flex items-center mb-1.5">
                  <div className="mr-1.5 md:mr-2 text-red-600">
                    <CheckCircle size={7} className="size-5 md:size-8" />
                  </div>
                  <p className="text-xs md:text-sm text-red-800 font-medium">
                    80% faster than writing from scratch
                  </p>
                </div>
                <div className="w-full bg-red-200 rounded-full h-1.5 md:h-2">
                  <div className="bg-red-600 h-1.5 md:h-2 rounded-full w-4/5"></div>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-md font-semibold flex items-center justify-center sm:justify-start gap-1.5">
                Generate Cover Letter
                <ArrowRight size={7} className="size-5 md:size-8" />
              </button>
            </div>

            <div className="w-full md:w-1/2 relative mt-6 md:mt-0 flex justify-center">
              <img
                src="/cover/step3.webp"
                alt="Cover letter generator interface"
                className="h-56 sm:h-64 md:h-80 w-36 sm:w-44 md:w-52 object-cover border-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Classes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}