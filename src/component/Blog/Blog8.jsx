"use client";
import { useState } from "react";

export default function CoverLetterVsResume() {
  const [activeTab, setActiveTab] = useState("differences");

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Gradient */}
      <header className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Cover Letter <span className="text-green-300">vs</span> Resume
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Master the art of job applications by understanding why both
            documents are essential for your career success
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-red-700 font-semibold">
                📈 Increase your interview chances by 65%
              </span>
            </div>
          </div>
        </div>
        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-1">
            {[
              { id: "differences", label: "Key Differences", icon: "⚖️" },
              { id: "importance", label: "Why Both Matter", icon: "🎯" },
              { id: "tips", label: "Expert Tips", icon: "💡" },
              { id: "examples", label: "Examples", icon: "📝" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-red-600 border-b-2 border-red-500 shadow-sm"
                    : "text-gray-600 hover:text-red-500 hover:bg-white hover:bg-opacity-50"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction with Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-500 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  The Complete Job Application Strategy
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Research shows that job seekers who submit both a tailored
                  cover letter and optimized resume are
                  <span className="font-bold text-green-600">
                    {" "}
                    65% more likely
                  </span>{" "}
                  to secure interviews compared to those who submit only a
                  resume.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-red-500">73%</div>
                    <div className="text-sm text-gray-600">
                      of recruiters read cover letters
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-500">45%</div>
                    <div className="text-sm text-gray-600">
                      prefer personalized applications
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-500">2x</div>
                    <div className="text-sm text-gray-600">
                      higher callback rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {activeTab === "differences" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Understanding the Key Differences
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cover Letter Card */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-t-4 border-green-500 shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Cover Letter
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Personal Introduction
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Creates a personal connection with the hiring manager
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Targeted Messaging
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Explains specific interest in the company and role
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Storytelling Approach
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Highlights achievements through compelling narratives
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Personality Showcase
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Demonstrates communication skills and cultural fit
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Typical Length
                      </div>
                      <div className="font-semibold text-gray-800">
                        3-4 paragraphs (1 page maximum)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Card */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-red-50 to-rose-100 p-8 rounded-2xl border-t-4 border-red-500 shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Resume</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Professional Overview
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Comprehensive timeline of your career journey
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Structured Format
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Organized sections for easy scanning and parsing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Quantified Results
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Focus on measurable achievements and impact
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          ATS Optimization
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Keyword-rich format for applicant tracking systems
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Typical Length
                      </div>
                      <div className="font-semibold text-gray-800">
                        1-2 pages (3 for senior roles)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "importance" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Why Both Documents Are Essential
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                  Complementary Purposes
                </h3>
                <p className="text-gray-600 text-center">
                  Your resume shows{" "}
                  <span className="font-semibold text-blue-600">what</span>{" "}
                  you've accomplished, while your cover letter explains{" "}
                  <span className="font-semibold text-blue-600">why</span>{" "}
                  you're the ideal candidate for this specific role.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                  Employer Expectations
                </h3>
                <p className="text-gray-600 text-center">
                  73% of hiring managers expect cover letters. Applications
                  without them may signal lack of genuine interest or attention
                  to detail.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                  Competitive Advantage
                </h3>
                <p className="text-gray-600 text-center">
                  Stand out in a sea of applications by creating personal
                  connections that resumes alone cannot establish.
                </p>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Success Stories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Marketing Professional</h4>
                  <p className="text-green-600 text-sm mb-3">
                    "After tailoring both my resume and cover letter for each
                    application, my interview rate increased from 5% to 35%."
                  </p>
                  <div className="text-xs text-green-600">
                    — Sarah M., Digital Marketing Manager
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Software Developer</h4>
                  <p className="text-green-600 text-sm mb-3">
                    "My cover letter helped me explain career transitions that
                    weren't clear from my resume alone. Landed my dream job!"
                  </p>
                  <div className="text-xs text-green-700">
                    — Alex K., Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "tips" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Expert Tips for Maximum Impact
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cover Letter Tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Cover Letter Mastery
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Research and Personalize
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Address specific hiring managers, mention recent company
                        news, and reference the exact job title.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Compelling Opening Hook
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Start with a relevant achievement, shared connection, or
                        genuine enthusiasm for the company's mission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Quantify Your Impact
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Include specific metrics and results that demonstrate
                        your value proposition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Strategic Keywords
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Mirror language from the job description while
                        maintaining natural flow and authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Tips */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Resume Excellence
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Achievement-Focused Format
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Lead with accomplishments, not duties. Use the STAR
                        method for impactful bullet points.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        ATS Optimization
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Use standard section headers, simple formatting, and
                        relevant keywords throughout.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Tailored Content
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Customize for each application by emphasizing relevant
                        experience and skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Visual Hierarchy
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Use consistent formatting, appropriate white space, and
                        clear section divisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Common Mistakes to Avoid
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="mr-2">❌</span> Cover Letter Pitfalls
                  </h4>
                  <ul className="space-y-2 text-red-100">
                    <li>• Generic "To Whom It May Concern" greetings</li>
                    <li>• Repeating resume content verbatim</li>
                    <li>• Focusing on what you want vs. what you offer</li>
                    <li>• Exceeding one page in length</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="mr-2">❌</span> Resume Red Flags
                  </h4>
                  <ul className="space-y-2 text-red-100">
                    <li>• Unexplained employment gaps</li>
                    <li>• Inconsistent formatting and fonts</li>
                    <li>• Personal information (age, photo, marital status)</li>
                    <li>• Outdated or irrelevant skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "examples" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Before & After Examples
            </h2>

            <div className="space-y-12">
              {/* Cover Letter Example */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">📝</span> Cover Letter Transformation
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-600 mb-3">
                      ❌ Before (Generic)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>"Dear Hiring Manager,</p>
                      <p>
                        I am writing to apply for the marketing position. I have
                        experience in marketing and think I would be a good fit.
                      </p>
                      <p>
                        I have worked in marketing for 3 years and have good
                        skills. Please see my resume for more details.
                      </p>
                      <p>Thank you for your consideration."</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-600 mb-3">
                      ✅ After (Targeted)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>"Dear Ms. Johnson,</p>
                      <p>
                        Your recent expansion into Southeast Asian markets
                        caught my attention, especially given my 3 years driving
                        40% revenue growth in similar emerging markets at
                        TechCorp.
                      </p>
                      <p>
                        In my current role, I've increased lead generation by
                        150% while reducing acquisition costs by 25% through
                        data-driven campaign optimization...
                      </p>
                      <p>
                        I'd welcome the opportunity to discuss how my proven
                        track record can accelerate your ambitious growth
                        plans."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Example */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">📊</span> Resume Enhancement
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-600 mb-3">
                      ❌ Before (Task-Focused)
                    </h4>
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-2">Marketing Coordinator</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Managed social media accounts</li>
                        <li>Created marketing materials</li>
                        <li>Assisted with campaigns</li>
                        <li>Attended meetings</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-600 mb-3">
                      ✅ After (Achievement-Focused)
                    </h4>
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-2">Marketing Coordinator</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>
                          Increased social media engagement by 200% across 4
                          platforms, growing follower base from 10K to 45K
                        </li>
                        <li>
                          Designed and executed 12 integrated campaigns
                          generating $2.3M in pipeline revenue
                        </li>
                        <li>
                          Optimized lead nurturing workflows, improving
                          conversion rates by 35%
                        </li>
                        <li>
                          Led cross-functional team of 8 stakeholders on $500K
                          product launch
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry-Specific Examples */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">🏢</span> Industry-Specific Approaches
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-600 mb-3">
                      Tech Industry
                    </h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Cover Letter:</strong> Mention specific
                        technologies, GitHub contributions, side projects
                      </p>
                      <p>
                        <strong>Resume:</strong> Highlight technical skills,
                        quantify performance improvements, include relevant
                        certifications
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-600 mb-3">
                      Healthcare
                    </h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Cover Letter:</strong> Emphasize patient care
                        philosophy, continuing education commitment
                      </p>
                      <p>
                        <strong>Resume:</strong> List licenses/certifications
                        prominently, include patient outcome metrics
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-600 mb-3">
                      Finance
                    </h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Cover Letter:</strong> Discuss market analysis
                        skills, risk management experience
                      </p>
                      <p>
                        <strong>Resume:</strong> Quantify portfolio performance,
                        cost savings, regulatory compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Action Steps */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Your Action Plan
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Research</h3>
                <p className="text-gray-300 text-sm">
                  Study the company, role, and hiring manager
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Tailor</h3>
                <p className="text-gray-300 text-sm">
                  Customize both documents for each application
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Optimize</h3>
                <p className="text-gray-300 text-sm">
                  Use keywords and quantify achievements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-gray-300 text-sm">
                  Proofread thoroughly and get feedback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Helpful Tools & Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Research Tools
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• LinkedIn company pages</li>
                <li>• Glassdoor reviews</li>
                <li>• Company annual reports</li>
                <li>• Industry news sources</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">✍️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Writing Assistance
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Grammarly for proofreading</li>
                <li>• Hemingway for clarity</li>
                <li>• Action verb lists</li>
                <li>• Industry terminology guides</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">ATS Testing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resume parsing tools</li>
                <li>• Keyword density checkers</li>
                <li>• ATS-friendly templates</li>
                <li>• Format compatibility tests</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-rose-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Performance Tracking
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Application spreadsheets</li>
                <li>• Response rate analytics</li>
                <li>• A/B testing different versions</li>
                <li>• Interview conversion metrics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Skill Development
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Online course platforms</li>
                <li>• Professional certifications</li>
                <li>• Industry webinars</li>
                <li>• Networking events</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Feedback Sources
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Career counselors</li>
                <li>• Industry mentors</li>
                <li>• Professional associations</li>
                <li>• Peer review groups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question:
                  "Should I always include a cover letter, even when it's not required?",
                answer:
                  "Yes, when possible. A well-crafted cover letter can set you apart from other candidates and shows genuine interest in the position. However, ensure it adds value and doesn't simply repeat your resume.",
              },
              {
                question: "How long should my cover letter be?",
                answer:
                  "Keep it to one page maximum, typically 3-4 paragraphs. Hiring managers spend an average of 6 seconds scanning cover letters, so make every word count.",
              },
              {
                question:
                  "Can I use the same resume for multiple applications?",
                answer:
                  "While you can use a base template, always tailor your resume for each application. Adjust keywords, emphasize relevant experience, and reorder sections based on job requirements.",
              },
              {
                question:
                  "What's the biggest mistake people make with cover letters?",
                answer:
                  "Making them too generic. Avoid template language like 'I am writing to express my interest.' Instead, start with a specific achievement or connection to the company.",
              },
              {
                question: "How do I handle employment gaps in my resume?",
                answer:
                  "Be honest but strategic. Use functional formatting to emphasize skills over chronology, and briefly explain gaps in your cover letter if they're recent or significant.",
              },
              {
                question: "Should I include a photo on my resume?",
                answer:
                  "In most countries and industries, no. Photos can introduce unconscious bias and are not standard practice in the US, Canada, UK, and Australia unless specifically requested.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-start">
                  <span className="text-green-500 mr-2 mt-1">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-12 rounded-2xl text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Armed with both a compelling cover letter and optimized resume,
              you're ready to make a lasting impression on potential employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Download Free Templates
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                Schedule Career Consultation
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-green-200 text-sm">
                Join 50,000+ professionals who've boosted their career success
              </p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
