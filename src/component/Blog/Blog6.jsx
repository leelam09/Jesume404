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
  Cpu,
  Binary,
  ScanSearch,
  LayoutTemplate,
  KeyRound,
  TextCursorInput,
} from "lucide-react";

export default function AIFriendlyResumeBlog() {
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
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>

        {/* Floating Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-12 w-36 h-36 bg-purple-500/10 rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 left-1/3 w-20 h-20 bg-blue-500/20 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto mt-2 px-6 pt-32 pb-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full animate-fadeInUp">
              <Cpu className="w-4 h-4" />
              AI & Career Optimization
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="relative inline-block text-purple-600">
                6 Strategies
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded animate-slideInRight"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>{" "}
              to Make Your Resume AI-Friendly
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Learn how to optimize your resume for AI screening systems and
              increase your chances of landing interviews in today's digital job
              market.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 font-medium">
                  ATS-Compatible
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Binary className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700 font-medium">
                  AI-Optimized
                </span>
              </div>
            </div>

            {/* Hero Image */}
           
          </div>

          {/* Article Container */}
          <article className="max-w-4xl mx-auto px-4 py-16 relative">
            {/* Floating Action Buttons */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  liked
                    ? "bg-purple-500 text-white"
                    : "bg-white text-gray-600 hover:text-purple-500"
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
                className="fixed bottom-6 right-6 w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110 z-50"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            )}

            {/* Article Meta with Enhanced Design */}
            <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">
                        Published: June 10, 2025
                      </span>
                      <p className="text-sm text-gray-500">
                        Updated: June 15, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-black">9 min read</span>
                      <p className="text-sm text-gray-500">Estimated time</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=40&h=40&fit=crop&crop=face&auto=format"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-bold text-black">
                      AI Career Coach
                    </span>
                    <p className="text-sm text-gray-500">
                      HR Technology Expert
                    </p>
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
                  <span className="text-sm">872 likes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">134 comments</span>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-12 text-center">
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
                "In the age of AI, your resume needs to speak both human and
                machine language." – Career Tech Magazine
              </blockquote>
            </div>

            {/* Introduction with Animation */}
            <div className="mb-16">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto animate-fadeInUp">
                With over 75% of resumes being screened by AI before reaching
                human eyes, optimizing for Applicant Tracking Systems (ATS) and
                AI tools is no longer optional. These strategies will help your
                resume pass the digital gatekeepers and reach hiring managers.
              </p>

              {/* Animated Stats Card */}
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-100 border-2 border-purple-200 rounded-3xl p-8 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500 rounded-full">
                      <ScanSearch className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-purple-600 animate-pulse">
                      75%
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium text-xl mb-2">
                    of resumes are rejected by AI before human review
                  </p>
                  <p className="text-gray-600">
                    Don't let yours be one of them
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 1 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <KeyRound className="w-4 h-4" />
                  Strategy 1
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Keyword Optimization
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Mirror the Job Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI systems scan for keywords that match the job posting.
                    Identify the most important terms and naturally incorporate
                    them throughout your resume.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-700 mb-3">
                      Pro Tip: Use the "Rule of Three"
                    </h4>
                    <p className="text-gray-700">
                      Include each critical keyword at least three times—in your
                      summary, skills section, and work experience.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <TextCursorInput className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Example Keywords
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Machine Learning",
                      "Python",
                      "Data Analysis",
                      "Project Management",
                      "Agile Methodology",
                      "Cloud Computing",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 2 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <LayoutTemplate className="w-4 h-4" />
                  Strategy 2
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Clean, Simple Formatting
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Use standard headings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">
                        Avoid tables and columns
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Stick to 1-2 fonts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">
                        Use bullet points (• not ✓ or →)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">
                        Save as .docx or plain text
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    AI Can't Read Fancy Designs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    While creative templates look impressive to humans, they
                    often confuse AI parsers. Stick to simple, chronological
                    formats with clear section headers.
                  </p>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h4 className="font-bold text-purple-700 mb-3">
                      Formatting Test
                    </h4>
                    <p className="text-gray-700">
                      Try copying your resume text into Notepad. If it loses all
                      structure, so will the ATS.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 3 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <BarChart3 className="w-4 h-4" />
                  Strategy 3
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Quantifiable Achievements
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Numbers Speak Louder
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI systems are trained to recognize and prioritize
                    quantifiable results. Use metrics to demonstrate your impact
                    wherever possible.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-700 mb-3">
                      The CAR Method
                    </h4>
                    <p className="text-gray-700">
                      Context: What was the situation?
                      <br />
                      Action: What did you do?
                      <br />
                      Result: Quantifiable outcome
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-700">
                        "Increased sales by 27% through new digital marketing
                        strategy"
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-700">
                        "Reduced processing time by 40% by automating reports"
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-700">
                        "Managed $1.2M budget with 98% utilization rate"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 4 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Binary className="w-4 h-4" />
                  Strategy 4
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Standard Job Titles
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-700">
                        "Digital Marketing Ninja" → "Digital Marketing
                        Specialist"
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-700">
                        "Code Wizard" → "Senior Software Engineer"
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-700">
                        "People Person" → "HR Manager"
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Avoid Creative Job Titles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    While "Marketing Guru" might sound fun, AI systems look for
                    standard titles that match their database. Use conventional
                    job titles that align with industry standards.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-3">
                      Research Tools
                    </h4>
                    <p className="text-gray-700">
                      Use LinkedIn or O*NET to find standard titles for your
                      role.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 5 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <ScanSearch className="w-4 h-4" />
                  Strategy 5
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Skills Section Optimization
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Categorize Your Skills
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI systems analyze skill clusters. Group related skills
                    together and prioritize technical skills that are easily
                    recognizable by machines.
                  </p>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-700 mb-3">
                      Skill Hierarchy
                    </h4>
                    <p className="text-gray-700">
                      List most relevant skills first, followed by secondary
                      skills.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Technical Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "SQL", "TensorFlow", "AWS"].map(
                          (skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Soft Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Leadership", "Teamwork", "Communication"].map(
                          (skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 6 */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Brain className="w-4 h-4" />
                  Strategy 6
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Contextual Relevance
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <p className="font-medium text-indigo-700">
                        "Implemented machine learning model (Python) that
                        improved prediction accuracy by 32%"
                      </p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <p className="font-medium text-indigo-700">
                        "Led cross-functional team (Engineering, Marketing) to
                        launch new product feature"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Show How You Used Skills
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Modern AI systems analyze not just what skills you have, but
                    how you've applied them. Include context about where and how
                    you used each major skill.
                  </p>
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-700 mb-3">
                      AI Comprehension
                    </h4>
                    <p className="text-gray-700">
                      Advanced systems can understand skill application through
                      contextual clues in your experience descriptions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  Recommended Tools
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  AI Resume Checkers
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Jobscan",
                    feature: "ATS compatibility score",
                    icon: <ScanSearch className="w-6 h-6 text-blue-500" />,
                  },
                  {
                    name: "ResumeWorded",
                    feature: "AI-powered feedback",
                    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
                  },
                  {
                    name: "Skillroads",
                    feature: "AI resume builder",
                    icon: <Cpu className="w-6 h-6 text-green-500" />,
                  },
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-600">{tool.feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Master the AI Resume Game
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded"></div>
              </div>
              <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In today's job market, your resume needs to impress both
                  machines and humans. By implementing these AI-friendly
                  strategies, you'll ensure your application makes it past the
                  digital gatekeepers and into the hands of hiring managers.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Remember: AI screening is just the first hurdle. Once you pass
                  it, your resume still needs to tell a compelling story to
                  human readers. Balance technical optimization with authentic
                  personal branding for the best results.
                </p>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-3xl border border-purple-200 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Get More AI Career Insights
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Subscribe for weekly tips on optimizing your job search for
                    the AI era.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
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
