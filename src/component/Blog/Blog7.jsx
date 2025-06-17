"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Eye,
  FileText,
  CheckCircle,
  XCircle,
  BarChart2,
  Filter,
  Layout,
  Hash,
  Bold,
  List,
  Clock,
  User,
  Calendar,
  ChevronRight,
  Target,
  BarChart3,
  TrendingUp,
  Sparkles,
  Share2,
  BookOpen,
  ArrowUp,
  Heart,
  MessageCircle,
  ChevronDown,
  Star,
  Award,
  Zap,
  Brain,
  MessageSquare,
  Lightbulb,
  Users,
  Cpu,
  Binary,
  ScanSearch,
  KeyRound,
  TextCursorInput,
} from "lucide-react";

export default function RecruiterAIResumeInsights() {
  const [scrollY, setScrollY] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-white">
        {/* Parallax Gradient Layer */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>

        {/* Floating Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-12 w-36 h-36 bg-blue-500/10 rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 left-1/3 w-20 h-20 bg-purple-500/20 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto mt-2 px-6 pt-32 pb-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full animate-fadeInUp">
              <Search className="w-4 h-4" />
              Recruiter Insights
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="relative inline-block text-blue-600">
                Behind the Scenes
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded animate-slideInRight"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>{" "}
              of AI Resume Scanning
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Discover what recruiters and AI systems actually look for when
              scanning your resume, and how to optimize for both.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 font-medium">
                  Recruiter-Approved
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Eye className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-700 font-medium">
                  AI Scanning Insights
                </span>
              </div>
            </div>

            
          </div>

          {/* Article Container */}
          <article className="max-w-4xl mx-auto px-4 py-16 relative">
            {/* Floating Action Buttons */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  liked
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:text-blue-500"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
              </button>
              <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-500 transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-500 transition-all duration-300 hover:scale-110">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 z-50"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            )}

            {/* Article Meta with Enhanced Design */}
            <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">
                        Published: July 15, 2025
                      </span>
                      <p className="text-sm text-gray-500">
                        Updated: July 20, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">7 min read</span>
                      <p className="text-sm text-gray-500">Estimated time</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=40&h=40&fit=crop&crop=face&auto=format"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-bold text-black">Talent Scout</span>
                    <p className="text-sm text-gray-500">Tech Recruiter</p>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">15.2K views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">1.2K likes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">218 comments</span>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-12 text-center">
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                "The best resumes are those that pass both the AI gatekeeper and
                catch the recruiter's eye in 7 seconds." — Senior Tech Recruiter
                at FAANG
              </blockquote>
            </div>

            {/* Introduction with Animation */}
            <div className="mb-16">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto animate-fadeInUp">
                As a recruiter who's reviewed thousands of resumes, I'll show
                you exactly what happens when your resume enters our system,
                what AI looks for, and what makes us pause and take notice.
              </p>

              {/* Animated Stats Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-100 border-2 border-blue-200 rounded-3xl p-8 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <Filter className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-blue-600 animate-pulse">
                      7s
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium text-xl mb-2">
                    Average time recruiters spend on initial resume screening
                  </p>
                  <p className="text-gray-600">Make every second count</p>
                </div>
              </div>
            </div>

            {/* Section 5: The Human Review */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  Human Review Process
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  What Happens After AI Screening
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    The Recruiter's Perspective
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    When your resume passes the AI filter, human recruiters
                    evaluate:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">1</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Career progression</strong> - Is there logical
                        advancement?
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">2</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Company reputation</strong> - Recognizable
                        employers stand out
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">3</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Cultural fit indicators</strong> - Volunteering,
                        languages, interests
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      What Makes Us Stop and Read
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Clear, measurable achievements",
                      "Relevant certifications/training",
                      "Career stability with progression",
                      "Well-formatted, easy to scan",
                      "Tailored to the specific position",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Industry-Specific Tips */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Industry Variations
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Field-Specific Resume Priorities
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    industry: "Tech",
                    focus: "Technical skills, projects, GitHub",
                    icon: <Cpu className="w-6 h-6 text-teal-500" />,
                    tip: "List specific languages/frameworks first",
                  },
                  {
                    industry: "Finance",
                    focus: "Quant results, certifications, metrics",
                    icon: <BarChart2 className="w-6 h-6 text-teal-500" />,
                    tip: "Highlight $ amounts and % improvements",
                  },
                  {
                    industry: "Creative",
                    focus: "Portfolio link, design skills, creativity",
                    icon: <Sparkles className="w-6 h-6 text-teal-500" />,
                    tip: "Balance creativity with readability",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.industry}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      <strong>Focus on:</strong> {item.focus}
                    </p>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-sm text-teal-700 font-medium">
                        Tip: {item.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: The Future of Resume Screening */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Emerging Trends
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  The Future of Resume Screening
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Upcoming Changes
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "AI that analyzes writing style for cultural fit",
                        "Automated video resume analysis",
                        "Integration with LinkedIn and portfolio sites",
                        "Predictive analytics for candidate success",
                        "Blockchain-verified credentials",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-pink-600 text-xs font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      How to Prepare
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Maintain an updated LinkedIn profile",
                        "Build a personal website/portfolio",
                        "Develop video interview skills",
                        "Collect measurable achievements",
                        "Keep learning new relevant skills",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Checklist */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">
                  AI-Resume Optimization Checklist
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      Must-Have Elements
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Keywords from job description",
                        "Quantifiable achievements",
                        "Standard section headers",
                        "Clear contact information",
                        "Reverse chronological order",
                        "Proper file format (.docx)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-red-500" />
                      What to Avoid
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Graphics/charts/images",
                        "Creative job titles",
                        "Personal pronouns (I, me)",
                        "Uncommon fonts/formatting",
                        "Irrelevant personal info",
                        "Typos and grammatical errors",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="mb-16 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Optimize Your Resume?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Use these insights to revamp your resume and increase your
                  chances of getting noticed by both AI and recruiters.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Download Resume Template
                </button>
              </div>
            </section>

            {/* Custom CSS for animations */}
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes slideInRight {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }

              .animate-fadeInUp {
                animation: fadeInUp 0.8s ease-out forwards;
              }

              .animate-slideInRight {
                animation: slideInRight 1s ease-out forwards;
              }
            `}</style>
          </article>
        </div>
      </div>
    </div>
  );
}