"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Calendar,
  ChevronRight,
  Target,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Share2,
  BookOpen,
  ArrowUp,
  Heart,
  MessageCircle,
  Eye,
  ChevronDown,
  Star,
  Award,
  Zap,
  Brain,
} from "lucide-react";
import Navbar from "../Navbar";

export default function AIResumeBlogRedesign() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
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
            className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-black/10 pointer-events-none"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>

          {/* Floating Animated Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-12 w-36 h-36 bg-red-500/10 rounded-full animate-pulse" />
            <div
              className="absolute bottom-20 left-1/3 w-20 h-20 bg-red-500/20 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-full animate-fadeInUp">
                <Zap className="w-4 h-4" />
                Career Enhancement
              </div>

              {/* Title */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                How AI Can{" "}
                <span className="relative inline-block text-red-600">
                  Transform
                  <span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 rounded animate-slideInRight"
                    style={{ animationDelay: "0.6s" }}
                  />
                </span>{" "}
                Your Resume
              </h1>

              {/* Description */}
              <p
                className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                Leverage cutting-edge AI to create resumes that stand out, pass
                ATS filters, and boost your chances in a competitive job market.
              </p>

              {/* Stats */}
              <div
                className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">
                    Live AI Analysis
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-700 font-medium">
                    4.9/5 Success Rate
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mt-12 max-w-5xl mx-auto">
                <img
                  src="/Blog/blog1.png"
                  alt="AI Resume Concept"
                  className="w-full h-80 object-cover "
                />
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
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                </button>
                <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-300 hover:scale-110">
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
                  className="fixed bottom-6 right-6 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 z-50"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              )}

              {/* Article Meta with Enhanced Design */}
              <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">
                          May 27, 2025
                        </span>
                        <p className="text-sm text-gray-500">Published</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">7 min read</span>
                        <p className="text-sm text-gray-500">Reading time</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
                      alt="Sarah Johnson"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-bold text-black">
                        Sarah Johnson
                      </span>
                      <p className="text-sm text-gray-500">Career Expert</p>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">12.5K views</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">892 likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">156 comments</span>
                  </div>
                </div>
              </div>

              {/* Introduction with Animation */}
              <div className="mb-16">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto animate-fadeInUp">
                  In today's hyper-competitive job market, your resume needs to
                  cut through the noise of hundreds of applications. Artificial
                  Intelligence has revolutionized resume writing, offering
                  powerful tools that don't just improve formatting—they
                  transform how you present your professional story.
                </p>

                {/* Animated Stats Card */}
                <div className="relative bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-3xl p-8 text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                  <div className="relative">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <div className="p-3 bg-red-500 rounded-full">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-red-600 animate-pulse">
                        40%
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium text-xl mb-2">
                      Higher callback rate for AI-optimized resumes
                    </p>
                    <p className="text-gray-600">
                      Based on recent industry research
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Benefits Section */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-black/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    Key Benefits
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Why AI-Powered Enhancement Works
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        Smart Keyword Targeting
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        AI analyzes job descriptions in real-time, identifying
                        the exact keywords and phrases that will help your
                        resume sail through ATS filters and catch recruiter
                        attention.
                      </p>
                      <div className="mt-6 flex items-center text-red-500 font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-black hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        Data-Driven Insights
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Get comprehensive analytics on your resume's
                        performance, including readability scores, keyword
                        density, and benchmarking against successful resumes in
                        your field.
                      </p>
                      <div className="mt-6 flex items-center text-black font-medium">
                        <span>Explore features</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Process Section */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Zap className="w-4 h-4" />
                    Step by Step
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    The AI Transformation Process
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-black mx-auto rounded"></div>
                </div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div className="absolute -inset-2 bg-red-500/20 rounded-3xl animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-black">
                        Content Intelligence
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        AI algorithms scan your existing content and compare it
                        against thousands of successful resumes in your
                        industry. They identify gaps in impact and suggest more
                        compelling ways to present your achievements.
                      </p>
                      <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                        <div className="relative">
                          <div className="mb-6 p-4 bg-white/10 rounded-2xl">
                            <span className="text-red-400 font-semibold text-lg">
                              Before:
                            </span>
                            <p className="text-gray-300 mt-2">
                              "Responsible for managing team projects"
                            </p>
                          </div>
                          <div className="p-4 bg-red-500/20 rounded-2xl">
                            <span className="text-red-400 font-semibold text-lg">
                              AI-Enhanced:
                            </span>
                            <p className="text-white mt-2 font-medium">
                              "Led cross-functional team of 8 members,
                              delivering 12 projects on time with 95% client
                              satisfaction rate"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div
                        className="absolute -inset-2 bg-black/20 rounded-3xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-black">
                        ATS Optimization
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Modern AI ensures perfect compatibility with Applicant
                        Tracking Systems used by 98% of Fortune 500 companies.
                        This includes strategic formatting, keyword placement,
                        and structural optimization.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            icon: CheckCircle,
                            label: "Clean Structure",
                            color: "green",
                          },
                          {
                            icon: CheckCircle,
                            label: "Smart Keywords",
                            color: "green",
                          },
                          {
                            icon: CheckCircle,
                            label: "Perfect Format",
                            color: "green",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 bg-green-50 p-4 rounded-2xl hover:bg-green-100 transition-colors duration-300 transform hover:scale-105"
                          >
                            <item.icon className="w-6 h-6 text-green-500" />
                            <span className="text-green-800 font-medium">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-black rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                      <div
                        className="absolute -inset-2 bg-gradient-to-br from-red-500/20 to-black/20 rounded-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-black">
                        Industry Personalization
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        AI algorithms analyze current job market trends and
                        industry-specific requirements to tailor your resume for
                        maximum impact. Whether you're in tech, healthcare,
                        finance, or creative industries, AI ensures your resume
                        speaks the language that matters.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Best Practices */}
              <section className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-black/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Pro Tips
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Best Practices for Success
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-black mx-auto rounded"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/5 rounded-full transform -translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/5 rounded-full transform translate-x-20 translate-y-20"></div>

                  <div className="relative grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-2xl text-green-700">
                          Do This
                        </h4>
                      </div>
                      {[
                        "Use AI suggestions as a foundation, then add your personal touch",
                        "Continuously update with fresh achievements and skills",
                        "Test against multiple job descriptions in your field",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300"
                        >
                          <ChevronRight className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xl">
                            ✕
                          </span>
                        </div>
                        <h4 className="font-bold text-2xl text-red-700">
                          Avoid This
                        </h4>
                      </div>
                      {[
                        "Depending entirely on AI without human oversight",
                        "Keyword stuffing that sounds unnatural",
                        "Losing your authentic professional voice",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors duration-300"
                        >
                          <ChevronRight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Conclusion */}
              <section className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Your AI-Enhanced Future Starts Now
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-black mx-auto rounded"></div>
                </div>
                <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    AI-powered resume optimization isn't just a trend—it's the
                    new standard. By leveraging these intelligent tools, you
                    create resumes that don't just pass ATS filters, but truly
                    resonate with human decision-makers.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Remember: AI amplifies your story, but your unique
                    experiences and professional journey remain the heart of
                    your resume. Use AI to enhance and optimize, while ensuring
                    your authentic voice shines through.
                  </p>
                </div>
              </section>

              {/* Related Articles Section */}
              <section className="mt-20 mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    Continue Reading
                  </h3>
                  <div className="w-16 h-1 bg-red-500 mx-auto rounded"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title:
                        "5 ATS-Friendly Resume Templates That Actually Work",
                      category: "Templates",
                      readTime: "4 min",
                      image:
                        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&auto=format",
                    },
                    {
                      title: "The Psychology Behind Recruiter Decision Making",
                      category: "Psychology",
                      readTime: "6 min",
                      image:
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&auto=format",
                    },
                    {
                      title: "LinkedIn vs Resume: Which Matters More in 2025?",
                      category: "Strategy",
                      readTime: "5 min",
                      image:
                        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
                    },
                  ].map((article, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-lg text-black mb-3 group-hover:text-red-500 transition-colors">
                            {article.title}
                          </h4>
                          <div className="flex items-center justify-between text-gray-500 text-sm">
                            <span>{article.readTime} read</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Newsletter Signup */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border border-gray-200 text-center">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Stay Ahead of the Curve
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Get weekly insights on AI-powered career advancement,
                      resume optimization tips, and job market trends.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </section>
            </article>

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
          </div>
        </div>
      </div>
  );
}
