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
  Edit3,
  Cpu,
  Globe,
  Settings,
  BarChart,
  Activity,
} from "lucide-react";

export default function AIImproveBlog() {
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

  const aiImprovements = [
    {
      title: "Smart Keyword Optimization",
      description: "AI analyzes job descriptions and automatically optimizes your resume with relevant keywords to pass through Applicant Tracking Systems (ATS).",
      features: [
        "Industry-specific keyword suggestions",
        "ATS compatibility scoring",
        "Skill matching algorithms",
        "Real-time optimization feedback"
      ],
      icon: Search,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      title: "Professional Content Enhancement",
      description: "Transform basic job descriptions into compelling achievement statements that showcase your impact and value to potential employers.",
      features: [
        "Achievement-focused rewrites",
        "Action verb suggestions",
        "Quantified impact statements",
        "Industry best practices"
      ],
      icon: Edit3,
      gradient: "from-black to-gray-800",
      bgGradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-300",
    },
    {
      title: "Personalized Formatting",
      description: "AI-powered design algorithms create visually appealing layouts that are both professional and ATS-friendly for maximum impact.",
      features: [
        "Industry-appropriate templates",
        "Visual hierarchy optimization",
        "Clean, modern designs",
        "Mobile-responsive formats"
      ],
      icon: Layers,
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      title: "Skills Gap Analysis",
      description: "Identify missing skills and qualifications by comparing your resume against job requirements and industry standards.",
      features: [
        "Skill gap identification",
        "Learning recommendations",
        "Certification suggestions",
        "Career pathway mapping"
      ],
      icon: BarChart,
      gradient: "from-black to-gray-700",
      bgGradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-300",
    },
    {
      title: "Real-time Feedback",
      description: "Get instant feedback on resume strength, readability, and effectiveness with actionable suggestions for improvement.",
      features: [
        "Instant scoring system",
        "Readability analysis",
        "Completeness checking",
        "Performance benchmarking"
      ],
      icon: Activity,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
  ];

  const beforeAfterExamples = [
    {
      category: "Work Experience",
      before: "Managed social media accounts for the company",
      after: "Increased social media engagement by 150% across 5 platforms, driving 40% more website traffic and generating $50K in additional revenue through strategic content campaigns",
      improvement: "Quantified impact with specific metrics"
    },
    {
      category: "Skills Section",
      before: "Good communication skills, teamwork, Microsoft Office",
      after: "Advanced Public Speaking (Toastmasters International) • Cross-functional Team Leadership • Microsoft Office Suite (Expert Level) • Data Analysis & Visualization",
      improvement: "Specific, credentialed, and categorized skills"
    },
    {
      category: "Achievement Statement",
      before: "Helped improve customer satisfaction",
      after: "Implemented customer feedback system that improved satisfaction scores from 3.2 to 4.8/5.0, reducing complaint resolution time by 60% and increasing customer retention by 25%",
      improvement: "Concrete metrics and business impact"
    }
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
              <Cpu className="w-4 h-4 text-red-600" />
              AI Resume Enhancement
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              How{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  AI Can
                </span>
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 rounded animate-slideInRight"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>{" "}
              Improve Your Resume
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Discover how artificial intelligence is revolutionizing resume writing, helping job seekers create more compelling, ATS-friendly, and results-driven applications.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-800 font-medium">
                  7 min read
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
                <Rocket className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-800 font-medium">
                  Published: Apr 23, 2025
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
                      <FileText className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">
                      AI-Enhanced Resumes
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Transform your career documents with intelligent optimization and professional enhancement
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
                        Published: April 23, 2025
                      </span>
                      <p className="text-sm text-gray-600">
                        Updated: May 8, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">7 min read</span>
                      <p className="text-sm text-gray-600">Estimated time</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <span className="font-bold text-black">
                      Career Tech Writer
                    </span>
                    <p className="text-sm text-gray-600">
                      Resume & AI Specialist
                    </p>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-300">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">8.7K views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">642 likes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">89 comments</span>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-16 text-center">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
                "The best resumes don't just list what you did—they demonstrate the value you created." – Career Expert
              </blockquote>
            </div>

            {/* Introduction */}
            <div className="mb-20">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto animate-fadeInUp">
                Your resume is often the first impression you make on potential employers. In today's competitive job market, a mediocre resume simply won't cut it. Fortunately, artificial intelligence is transforming how we create, optimize, and enhance resumes to stand out from the crowd.
              </p>

              {/* Intro Stats Card */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-3xl p-8 text-center overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/50 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200/50 rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-200 rounded-full border border-red-300">
                      <TrendingUp className="w-8 h-8 text-red-700" />
                    </div>
                    <span className="text-5xl font-bold text-red-700 animate-pulse">
                      3x
                    </span>
                  </div>
                  <p className="text-black font-medium text-xl mb-2">
                    More likely to get interview callbacks with AI-optimized resumes
                  </p>
                  <p className="text-gray-600">
                    According to recent recruitment studies
                  </p>
                </div>
              </div>
            </div>

            {/* AI Improvements Section */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-300">
                  <Cpu className="w-4 h-4 text-red-600" />
                  AI Enhancements
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  5 Ways AI Transforms Your Resume
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>

              <div className="grid gap-8 md:gap-12">
                {aiImprovements.map((improvement, index) => {
                  const IconComponent = improvement.icon;
                  return (
                    <div
                      key={index}
                      className="group relative"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-500 transform hover:-translate-y-2 shadow-lg">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          {/* Icon & Header */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${improvement.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                            >
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
                                {improvement.title}
                              </h3>
                            </div>
                          </div>

                          {/* Description & Features */}
                          <div className="flex-1 space-y-6">
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {improvement.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                              {improvement.features.map((feature, featureIndex) => (
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

            {/* Before/After Examples */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-300">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  Real Examples
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Before vs. After: AI-Enhanced Content
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>

              <div className="space-y-8">
                {beforeAfterExamples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-black mb-2">{example.category}</h3>
                      <p className="text-red-600 font-medium">{example.improvement}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
                            <span className="text-red-700 font-bold text-sm">❌</span>
                          </div>
                          <h4 className="font-bold text-red-700">Before (Generic)</h4>
                        </div>
                        <p className="text-gray-700 italic leading-relaxed">
                          "{example.before}"
                        </p>
                      </div>

                      {/* After */}
                      <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-bold text-sm">✅</span>
                          </div>
                          <h4 className="font-bold text-green-700">After (AI-Enhanced)</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-medium">
                          "{example.after}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    The Impact of AI-Enhanced Resumes
                  </h3>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    Data-driven results that demonstrate the power of AI optimization
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      stat: "85%",
                      label: "Pass ATS Systems",
                      icon: Shield,
                      description: "AI-optimized resumes successfully navigate automated screening"
                    },
                    {
                      stat: "3x",
                      label: "More Interviews",
                      icon: Users,
                      description: "Higher callback rates with enhanced content"
                    },
                    {
                      stat: "60%",
                      label: "Less Time Spent",
                      icon: Clock,
                      description: "Faster resume creation and optimization process"
                    },
                    {
                      stat: "92%",
                      label: "User Satisfaction",
                      icon: Star,
                      description: "Job seekers report improved confidence and results"
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="text-3xl font-bold text-black mb-2">
                        {item.stat}
                      </div>
                      <div className="text-gray-700 font-medium mb-2">{item.label}</div>
                      <div className="text-gray-600 text-xs leading-relaxed">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Getting Started Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-300">
                  <Rocket className="w-4 h-4 text-red-600" />
                  Action Steps
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  How to Get Started with AI Resume Enhancement
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-40 h-40 bg-red-100/50 rounded-full transform -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-100/50 rounded-full transform translate-x-20 translate-y-20"></div>

                <div className="relative space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        step: "1",
                        title: "Choose Your AI Tool",
                        description: "Select from popular options like ChatGPT, Rezi, or Jobscan based on your specific needs",
                        icon: Settings,
                        color: "from-red-500 to-red-600",
                      },
                      {
                        step: "2",
                        title: "Upload & Analyze",
                        description: "Input your current resume and target job descriptions for AI analysis and optimization",
                        icon: FileText,
                        color: "from-black to-gray-700",
                      },
                      {
                        step: "3",
                        title: "Implement & Test",
                        description: "Apply AI suggestions, test ATS compatibility, and track your improved response rates",
                        icon: CheckCircle,
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

            {/* Conclusion */}
<section className="mb-16">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-black mb-4">
      The Future of Resume Writing is Here
    </h2>
    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded"></div>
  </div>
  <div className="max-w-4xl mx-auto text-center bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-lg">
    <p className="text-xl text-gray-700 leading-relaxed">
      In a world where first impressions are often made digitally, leveraging AI for resume creation offers a competitive edge. It ensures precision, personalization, and professionalism that align with modern recruitment standards. As technology evolves, so does the way we present ourselves—embrace the future of resume writing today.
    </p>
  </div>
</section>
</article>
</div>
</div>
</div>
);
}