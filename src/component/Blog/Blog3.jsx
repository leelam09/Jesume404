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
  MessageSquare,
  Lightbulb,
  Users,
  Search,
  FileText,
  Briefcase,
  PenTool,
  Compass,
  Shield,
  Layers,
  Rocket,
} from "lucide-react";

export default function AIToolsBlog() {
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

  const aiTools = [
    {
      name: "ChatGPT",
      category: "Resume & Cover Letters",
      description:
        "AI-powered writing assistant for creating compelling resumes, cover letters, and job application content.",
      features: [
        "Resume drafting",
        "Cover letter creation",
        "Interview preparation",
        "Job description analysis",
      ],
      icon: MessageSquare,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      name: "Rezi",
      category: "ATS Optimization",
      description:
        "Specialized resume builder that optimizes your resume for Applicant Tracking Systems with real-time scoring.",
      features: [
        "ATS optimization",
        "Resume scoring",
        "Template library",
        "Keyword suggestions",
      ],
      icon: Target,
      gradient: "from-black to-gray-800",
      bgGradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-300",
    },
    {
      name: "Jobscan",
      category: "Resume Matching",
      description:
        "Advanced tool that matches your resume against job descriptions to identify gaps and optimization opportunities.",
      features: [
        "Resume-job matching",
        "Keyword analysis",
        "ATS compatibility",
        "Skills gap identification",
      ],
      icon: Search,
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      name: "Teal",
      category: "Job Tracking & Building",
      description:
        "Comprehensive career platform combining job tracking, resume building, and career development tools.",
      features: [
        "Job application tracking",
        "Resume builder",
        "Career timeline",
        "Interview prep",
      ],
      icon: Briefcase,
      gradient: "from-black to-gray-700",
      bgGradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-300",
    },
    {
      name: "Kickresume",
      category: "Creative Design",
      description:
        "Professional resume and website builder with creative templates and AI-powered content suggestions.",
      features: [
        "Creative templates",
        "Personal websites",
        "AI content writing",
        "LinkedIn optimization",
      ],
      icon: PenTool,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Light gradient overlay */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-16 w-32 h-32 bg-red-100/50 rounded-full animate-pulse" />
          <div
            className="absolute bottom-32 left-1/4 w-24 h-24 bg-gray-200/50 rounded-full animate-ping"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/3 left-12 w-16 h-16 bg-red-100/50 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded-full animate-fadeInUp border border-gray-300">
              <Brain className="w-4 h-4 text-red-600" />
              AI Career Tools
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Top{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  AI Tools
                </span>
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 rounded animate-slideInRight"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>{" "}
              for Job Seekers
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Navigate today's competitive job market with cutting-edge AI tools
              that streamline your job search and maximize your success rate.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-800 font-medium">
                  5 Essential Tools
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
                <Rocket className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-800 font-medium">
                  Boost Success Rate
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-gray-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto border border-red-200">
                      <Brain className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">
                      AI-Powered Job Search
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Revolutionary tools transforming how professionals find
                      and secure their dream jobs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border ${
                liked
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-600 hover:text-red-500 border-gray-300"
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-all duration-300 hover:scale-110 border border-gray-300">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-110 border border-gray-300">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 z-50"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Article Container */}
          <article className="max-w-6xl mx-auto px-4 py-16 relative">
            {/* Article Meta */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-200 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">
                        Published: March 24, 2025
                      </span>
                      <p className="text-sm text-gray-600">
                        Updated: May 13, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">8 min read</span>
                      <p className="text-sm text-gray-600">Estimated time</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <span className="font-bold text-black">
                      AI Career Expert
                    </span>
                    <p className="text-sm text-gray-600">
                      Job Search Specialist
                    </p>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-300">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">12.4K views</span>
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

            {/* Quote Section */}
            <div className="mb-16 text-center">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
                "In the midst of chaos, there is also opportunity." – Sun Tzu
              </blockquote>
            </div>

            {/* Introduction */}
            <div className="mb-20">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto animate-fadeInUp">
                The job market has transformed dramatically, and traditional job
                search methods are no longer enough. Today's successful job
                seekers leverage artificial intelligence to stand out, optimize
                their applications, and navigate the complex hiring landscape
                with precision and efficiency.
              </p>

              {/* Intro Stats Card */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-3xl p-8 text-center overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/50 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200/50 rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-200 rounded-full border border-red-300">
                      <Compass className="w-8 h-8 text-red-700" />
                    </div>
                    <span className="text-5xl font-bold text-red-700 animate-pulse">
                      5x
                    </span>
                  </div>
                  <p className="text-black font-medium text-xl mb-2">
                    Faster job search process with AI assistance
                  </p>
                  <p className="text-gray-600">
                    Compared to traditional methods
                  </p>
                </div>
              </div>
            </div>

            {/* AI Tools Section */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-300">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  Essential Tools
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  AI Tools That Transform Job Searches
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>

              <div className="grid gap-8 md:gap-12">
                {aiTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="group relative"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-500 transform hover:-translate-y-2 shadow-lg">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          {/* Tool Icon & Header */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                            >
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
                                {tool.name}
                              </h3>
                              <span className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                                {tool.category}
                              </span>
                            </div>
                          </div>

                          {/* Tool Description & Features */}
                          <div className="flex-1 space-y-6">
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {tool.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                              {tool.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm"
                                >
                                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm font-medium">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Pro Tips Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-300">
                  <Lightbulb className="w-4 h-4 text-red-600" />
                  Expert Strategy
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Pro Tip: Combine Tools for Maximum Impact
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-40 h-40 bg-red-100/50 rounded-full transform -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-100/50 rounded-full transform translate-x-20 translate-y-20"></div>

                <div className="relative space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      The Ultimate AI Job Search Workflow
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      Don't rely on just one tool. Here's how to create a
                      powerful AI-driven job search strategy:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        step: "1",
                        title: "Draft with ChatGPT",
                        description:
                          "Create your initial resume and cover letter content using AI assistance",
                        icon: MessageSquare,
                        color: "from-red-500 to-red-600",
                      },
                      {
                        step: "2",
                        title: "Optimize with Jobscan",
                        description:
                          "Match your resume to specific job descriptions and optimize for ATS systems",
                        icon: Target,
                        color: "from-black to-gray-700",
                      },
                      {
                        step: "3",
                        title: "Track with Teal",
                        description:
                          "Organize your applications and follow up systematically for better results",
                        icon: Briefcase,
                        color: "from-red-600 to-red-700",
                      },
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:bg-red-50 transition-all duration-300 shadow-sm">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                          >
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                            {item.step}
                          </div>
                          <h4 className="font-bold text-black mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        {index < 2 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    Why AI Tools Matter
                  </h3>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    The numbers speak for themselves - AI-assisted job searches
                    deliver measurable results
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      stat: "70%",
                      label: "Faster Application Process",
                      icon: Zap,
                    },
                    {
                      stat: "85%",
                      label: "Better ATS Compatibility",
                      icon: Shield,
                    },
                    {
                      stat: "60%",
                      label: "Higher Response Rate",
                      icon: TrendingUp,
                    },
                    {
                      stat: "3x",
                      label: "More Interview Invites",
                      icon: Award,
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="text-3xl font-bold text-black mb-2">
                        {item.stat}
                      </div>
                      <div className="text-gray-700 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Start Your AI-Enhanced Job Search Today
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>
              <div className="max-w-4xl mx-auto text-center bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The future of job searching is here, and it's powered by
                  artificial intelligence. These tools don't just make the
                  process faster—they make it smarter, more strategic, and
                  significantly more effective.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Remember: Success comes from combining these powerful AI tools
                  with your unique skills, experience, and personal brand. Use
                  technology as your competitive advantage, but never forget
                  that authenticity and genuine value are what ultimately land
                  the job.
                </p>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-3xl border border-red-200 text-center shadow-lg">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Stay Ahead of the Curve
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Get weekly insights on the latest AI tools, job search
                    strategies, and career advancement tips.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <button className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
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