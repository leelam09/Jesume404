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
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-200 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-300 rounded-full blur-3xl opacity-40"></div> 

      <div className="absolute top-60 right-20 w-20 h-20 bg-red-600 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-float-slow"></div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 py-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <h1 className="relative text-3xl md:text-5xl font-bold text-gray-900 px-6 py-2">
              A feature-packed, yet streamlined cover letter builder
            </h1>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-transparent ">
          {/* First Feature: Easy to implement design */}
          <div className="flex flex-col md:flex-row items-center justify-between p-8 border-b border-gray-100">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 relative">
                Easy to implement design
                <div className="absolute h-3 w-36 bg-red-200 bottom-0 left-0 -z-10"></div>
              </h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Enhance's design team has worked hard on creating beautiful
                looking, attention-grabbing designs that will help your cover
                letter stand out. Easily switch between background and color
                variations depending on the level of formality.
              </p>
              <div className="flex items-center space-x-2 mb-6">
                {["Professional", "Creative", "Modern"].map((style) => (
                  <span
                    key={style}
                    className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-full border border-red-100"
                  >
                    {style}
                  </span>
                ))}
              </div>
              <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Browse Templates
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src="/cover/step1.webp"
                  alt="Cover letter templates"
                  className="h-80 w-80 mx-auto object-cover" // vertical rectangle
                />
              </div>
            </div>
          </div>

          {/* Second Feature: Real-time spell check */}
          <div
            className={`flex flex-col md:flex-row-reverse items-center justify-between p-8 border-b border-gray-100 transition-all duration-1000 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
                <span className="relative z-10">Real-time spell check</span>
                <span className="absolute -left-2 bottom-0 h-3 w-56 bg-red-200 -z-0"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Never send a cover letter with a typo ever again! Take advantage
                of our{" "}
                <span className="text-red-600 font-semibold">
                  real-time spell checker
                </span>{" "}
                and get a cover letter that makes your personality stand out.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Grammar corrections",
                  "Style improvements",
                  "Tone suggestions",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <CheckCircle size={16} className="text-red-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Try Spell Check
                <span
                  className={`transform transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                >
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>

            <div className="md:w-1/2 relative">
              {/* Spell check modal */}
              <div className="bg-white text-black rounded-xl shadow-2xl p-6 w-80 mx-auto relative z-10 border-l-4 border-red-600">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">
                    Content Improvements
                  </h3>
                  <button className="text-gray-500 hover:text-red-600 transition-colors p-1 bg-gray-100 rounded-full">
                    <X size={16} />
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium">
                      Tailored Suggestions
                    </span>
                    <div className="bg-red-600 w-12 h-6 rounded-full flex items-center justify-end p-1 cursor-pointer">
                      <div className="bg-white rounded-full w-4 h-4 shadow-md transition-transform duration-300 hover:scale-110"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="bg-red-600 text-white text-xs font-bold rounded-md px-2 py-1 mr-2">
                        S
                      </div>
                      <span className="text-sm font-medium">
                        SpellCheck & Grammar
                      </span>
                    </div>
                    <div className="bg-red-600 w-12 h-6 rounded-full flex items-center justify-end p-1 cursor-pointer">
                      <div className="bg-white rounded-full w-4 h-4 shadow-md transition-transform duration-300 hover:scale-110"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-3 mb-4 border border-red-100">
                  <div className="flex items-start gap-3">
                    <div className="text-red-600 mt-0.5">
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-red-600 font-bold uppercase tracking-wide mb-1">
                        Error Detected
                      </div>
                      <div className="text-sm font-medium">
                        Did you mean "can't"?
                      </div>

                      <div className="flex gap-2 mt-3">
                        <div className="bg-gray-200 rounded text-xs py-1 px-3 font-medium cursor-pointer hover:bg-gray-300 transition-colors">
                          cant
                        </div>
                        <div className="bg-red-600 text-white rounded text-xs py-1 px-3 font-medium cursor-pointer hover:bg-red-700 transition-colors flex items-center gap-1">
                          <CheckCircle size={12} />
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
          <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 relative">
                State-of-the-art cover letter generator
                <div className="absolute h-3 w-36 bg-red-200 bottom-0 left-0 -z-10"></div>
              </h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Beat the writer's block with our cover letter generator. Follow
                our directions, let us know a bit more about your experience,
                skills, and greatest accomplishments, and get your cover letter
                made for you thanks to our industry-leading creative technology.
              </p>
              <div className="p-4 bg-red-50 rounded-lg border border-red-100 mb-6">
                <div className="flex items-center mb-2">
                  <div className="mr-3 text-red-600">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-red-800 font-medium">
                    80% faster than writing from scratch
                  </p>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full w-4/5"></div>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Generate Cover Letter
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <img
                src="/cover/step3.webp"
                alt="Cover letter generator interface"
                className="h-80 w-52 mx-auto object-cover border-none" // vertical rectangle, no border
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
    // </div>
  );
}
