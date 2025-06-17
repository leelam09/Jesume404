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
} from "lucide-react";

export default function GPTResumeBlog() {
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
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple/10 pointer-events-none"
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
              <MessageSquare className="w-4 h-4" />
              AI Tools & Career
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              How{" "}
              <span className="relative inline-block text-blue-600">
                ChatGPT
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded animate-slideInRight"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>{" "}
              Can Write Your Resume
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Discover how AI-powered tools like ChatGPT can revolutionize your
              resume writing process and help you land your dream job faster.
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 font-medium">
                  AI-Powered Writing
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-700 font-medium">
                  Minutes Not Hours
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-8 max-w-5xl mx-auto">
              <div className="w-auto h-96 rounded-2xl overflow-hidden">
                <img
                  src="/Blog/blog2.jpg" // replace with your actual image path
                  alt="ChatGPT Resume Assistant"
                  className="w-full h-full object-fill"
                />
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
                        Published: April 18, 2025
                      </span>
                      <p className="text-sm text-gray-500">
                        Updated: May 8, 2025
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-bold text-black">Tech Writer</span>
                    <p className="text-sm text-gray-500">AI Specialist</p>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">8.2K views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">564 likes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">89 comments</span>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-12 text-center">
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                "Technology is best when it brings people together." – Matt
                Mullenweg
              </blockquote>
            </div>

            {/* Introduction with Animation */}
            <div className="mb-16">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto animate-fadeInUp">
                In today's hyper-digital world, crafting the perfect resume can
                feel daunting—especially when job descriptions are packed with
                requirements, keywords, and formatting expectations.
                Fortunately, Artificial Intelligence (AI) has stepped in to
                simplify the process.
              </p>

              {/* Animated Stats Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-100 border-2 border-blue-200 rounded-3xl p-8 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-blue-600 animate-pulse">
                      Minutes
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium text-xl mb-2">
                    Create professional resumes in minutes, not hours
                  </p>
                  <p className="text-gray-600">With ChatGPT's AI assistance</p>
                </div>
              </div>
            </div>

            {/* Why Use ChatGPT Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Lightbulb className="w-4 h-4" />
                  Key Advantages
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Why Use ChatGPT for Resume Writing?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Fast & Efficient
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Writing a resume from scratch can take hours—or even days.
                      ChatGPT dramatically reduces this effort by generating
                      complete drafts within seconds.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-600 italic">
                        "Write a resume for a software developer with 2 years of
                        experience in React and JavaScript"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Personalized Results
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      ChatGPT isn't just a template generator—it tailors content
                      based on the information you provide. The more details you
                      share, the more personalized and powerful the result.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Industry-Specific Keywords
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      ChatGPT can include ATS-friendly keywords automatically,
                      enhancing your resume's chances of being shortlisted by
                      Applicant Tracking Systems.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Format & Style Guidance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Not sure about format? ChatGPT suggests ATS-friendly,
                      clean, and professional formats—ensuring your resume looks
                      as good as it reads.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Example Prompts Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MessageSquare className="w-4 h-4" />
                  Practical Examples
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Example Prompts That Get Results
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full transform -translate-x-16 translate-y-16"></div>

                <div className="relative space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      Effective ChatGPT Prompts
                    </h3>
                    <p className="text-gray-300">
                      Copy and paste these proven prompts
                    </p>
                  </div>

                  {[
                    "Write a professional resume for a front-end developer with 3 years of experience in HTML, CSS, React.js, and Figma.",
                    "Generate a resume summary for a data analyst with strong SQL and Python skills and a background in business intelligence.",
                    "Make a resume for a college fresher in computer science with project experience and internships in software development.",
                  ].map((prompt, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-white font-medium leading-relaxed">
                          "{prompt}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Best Practices Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  Expert Tips
                </div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Maximizing ChatGPT's Potential
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded"></div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/5 rounded-full transform -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full transform translate-x-20 translate-y-20"></div>

                <div className="relative grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-2xl text-green-700">
                        Best Practices
                      </h4>
                    </div>
                    {[
                      "Provide specific details about your experience and achievements",
                      "Include metrics and quantifiable results when possible",
                      "Specify the industry and role you're targeting",
                      "Ask for multiple format options to compare",
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
                        <span className="text-white font-bold text-xl">✕</span>
                      </div>
                      <h4 className="font-bold text-2xl text-red-700">
                        Common Mistakes
                      </h4>
                    </div>
                    {[
                      "Using generic prompts without specific details",
                      "Not reviewing and editing the AI-generated content",
                      "Forgetting to customize for each job application",
                      "Relying solely on AI without human input",
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

            {/* Conclusion */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Start Creating Your AI-Powered Resume Today
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
              </div>
              <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  ChatGPT has democratized professional resume writing, making
                  it accessible to everyone regardless of their writing skills
                  or experience. By leveraging AI assistance, you can create
                  compelling, ATS-friendly resumes that showcase your unique
                  value proposition.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Remember: AI is your writing partner, not a replacement for
                  your personal touch. Use ChatGPT to structure and enhance your
                  content, but always review, customize, and add your authentic
                  voice to make it truly yours.
                </p>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Get More AI Career Tips
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Subscribe to receive weekly insights on AI tools, resume
                    optimization, and career advancement strategies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
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
