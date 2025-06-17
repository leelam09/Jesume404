"use client";
import { useState } from "react";

export default function RecruiterResumeInsights() {
  const [activeTab, setActiveTab] = useState("essentials");

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Gradient */}
      <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Recruiters <span className="text-yellow-300">Really</span> Look
            For
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Insider knowledge from 100+ hiring professionals on crafting resumes
            that get interviews
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-blue-100 font-semibold">
                📌 Recruiters spend just 6-8 seconds on initial resume scans
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
          <nav className="flex space-x-1 overflow-x-auto py-2">
            {[
              { id: "essentials", label: "Key Essentials", icon: "🔑" },
              { id: "ats", label: "ATS Secrets", icon: "🤖" },
              { id: "redflags", label: "Red Flags", icon: "🚩" },
              { id: "sectors", label: "By Sector", icon: "🏛️" },
              { id: "examples", label: "Before/After", icon: "🔄" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm border-b-2 border-blue-500"
                    : "text-gray-600 hover:text-blue-500 hover:bg-white hover:bg-opacity-50"
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-500 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">!</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  The Harsh Reality of Resume Screening
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Our survey of 107 corporate recruiters and hiring managers
                  reveals that{" "}
                  <span className="font-bold text-blue-600">
                    78% of resumes get rejected
                  </span>{" "}
                  before reaching human eyes due to ATS incompatibility, while
                  human screeners typically spend less than 10 seconds on
                  initial reviews.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-500">6-8s</div>
                    <div className="text-sm text-gray-600">
                      Average initial scan time
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-red-500">78%</div>
                    <div className="text-sm text-gray-600">
                      Filtered out by ATS
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-500">3x</div>
                    <div className="text-sm text-gray-600">
                      More interviews with optimized resumes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {activeTab === "essentials" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              The 5 Non-Negotiables Recruiters Look For
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Relevant Experience",
                  icon: "📌",
                  desc: "Immediately visible career progression with measurable impact",
                  stats: "92% prioritize this over education",
                  color: "blue",
                },
                {
                  title: "Achievement Metrics",
                  icon: "📊",
                  desc: "Quantified results that demonstrate business value",
                  stats: "Resumes with metrics get 40% more interviews",
                  color: "green",
                },
                {
                  title: "Clear Structure",
                  icon: "🧱",
                  desc: "Logical flow with prominent contact info and section headers",
                  stats: "75% reject poorly organized resumes immediately",
                  color: "purple",
                },
                {
                  title: "Keyword Optimization",
                  icon: "🔍",
                  desc: "Mirroring language from the job description",
                  stats: "60% higher ATS pass rate",
                  color: "orange",
                },
                {
                  title: "Technical Competencies",
                  icon: "💻",
                  desc: "Hard skills listed prominently for technical roles",
                  stats: "87% look for specific technologies first",
                  color: "red",
                },
                {
                  title: "Error-Free Writing",
                  icon: "✍️",
                  desc: "Perfect spelling, grammar, and consistent formatting",
                  stats: "1 typo = 61% rejection rate",
                  color: "indigo",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.desc}</p>
                  <div className={`text-sm text-${item.color}-600 font-medium`}>
                    {item.stats}
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter Quotes */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Direct From Hiring Professionals
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "I look for career progression first - have they taken on increasing responsibility? The dates should tell a story of growth.",
                  "Numbers jump out at me. If I see 'increased sales by 150%' that immediately goes in the 'yes' pile for further review.",
                  "The worst mistake is burying key skills. If you're a Java developer, that should be visible in the first third of page one.",
                  "Generic resumes go straight to trash. Show me you understand our specific needs by mirroring our job posting language.",
                ].map((quote, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm"
                  >
                    <p className="mb-3">"{quote}"</p>
                    <div className="text-xs text-blue-200">
                      —{" "}
                      {
                        [
                          "Tech Recruiter, FAANG",
                          "HR Director, Fortune 500",
                          "Hiring Manager, Startup",
                          "Talent Acquisition Specialist",
                        ][index]
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "ats" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Beating Applicant Tracking Systems
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* ATS Basics */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">🤖</span> How ATS Works
                </h3>
                <div className="space-y-4">
                  {[
                    "Parses your resume into structured data fields",
                    "Scores based on keyword match to job description",
                    "Ranks candidates before human review",
                    "Filters out resumes below threshold (typically 70% match)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Pro Tip</h4>
                  <p className="text-sm text-gray-700">
                    Use exact phrases from the job description, especially in
                    skills and experience sections. Many ATS systems look for
                    verbatim matches.
                  </p>
                </div>
              </div>

              {/* Optimization Checklist */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">✅</span> Optimization Checklist
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      text: "Standard section headers (Experience, Education)",
                      crucial: true,
                    },
                    { text: "No tables, columns, or graphics", crucial: true },
                    {
                      text: ".docx format preferred over PDF for some systems",
                      crucial: false,
                    },
                    {
                      text: "Keyword density 3-5% (use job description terms)",
                      crucial: true,
                    },
                    {
                      text: "Full spelled-out acronyms + abbreviations",
                      crucial: false,
                    },
                    {
                      text: "No headers/footers (often not parsed)",
                      crucial: true,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
                      />
                      <span
                        className={`${
                          item.crucial
                            ? "font-semibold text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {item.text}{" "}
                        {item.crucial && (
                          <span className="text-red-500 text-xs ml-1">
                            (crucial)
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    ATS-Friendly Template
                  </h4>
                  <p className="text-sm text-gray-600">
                    Download our recruiter-approved resume template that passes
                    98% of ATS systems.
                  </p>
                  <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                    Download Template
                  </button>
                </div>
              </div>
            </div>

            {/* Keyword Optimization */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Keyword Optimization Strategy
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="mr-2">1.</span> Identify Keywords
                  </h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Job title variations</li>
                    <li>• Required skills (hard + soft)</li>
                    <li>• Certifications/licenses</li>
                    <li>• Industry terminology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="mr-2">2.</span> Placement Strategy
                  </h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• First 1/3 of first page</li>
                    <li>• Skills section</li>
                    <li>• Job title headers</li>
                    <li>• Achievement bullets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="mr-2">3.</span> Natural Integration
                  </h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Avoid keyword stuffing</li>
                    <li>• Use contextually</li>
                    <li>• Mix exact + related terms</li>
                    <li>• Prioritize by importance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "redflags" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Immediate Rejection Red Flags
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Content Issues */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">❌</span> Content Problems
                </h3>
                <div className="space-y-4">
                  {[
                    "Employment gaps without explanation",
                    "Job hopping without context (multiple <1 year roles)",
                    "Irrelevant personal information (age, marital status)",
                    "Generic objective statements",
                    "Duties-focused bullets instead of achievements",
                    "Outdated technical skills",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✕</span>
                      </span>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formatting Issues */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">💀</span> Formatting Killers
                </h3>
                <div className="space-y-4">
                  {[
                    "Creative fonts or colors (stick to black/white)",
                    "Dense text blocks (no white space)",
                    "More than 2 pages for non-executives",
                    "Graphics/icons that break ATS parsing",
                    "Unprofessional email addresses",
                    "Inconsistent date formats",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✕</span>
                      </span>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recovery Strategies */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                How to Recover From Red Flags
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    issue: "Employment Gap",
                    solution:
                      "Use functional format, list relevant activities during gap (freelance, courses)",
                  },
                  {
                    issue: "Job Hopping",
                    solution:
                      "Group contract roles, emphasize skills gained, explain context briefly",
                  },
                  {
                    issue: "Career Change",
                    solution:
                      "Lead with transferable skills, highlight relevant education/certifications",
                  },
                  {
                    issue: "Overqualified",
                    solution:
                      "Tailor resume to position, emphasize alignment over seniority",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm"
                  >
                    <h4 className="font-semibold mb-2">{item.issue}</h4>
                    <p className="text-blue-100 text-sm">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "sectors" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Industry-Specific Expectations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  sector: "Technology",
                  focus: "Technical skills, projects, GitHub",
                  format: "1-2 pages, skills matrix",
                  tip: "List specific languages/frameworks first",
                },
                {
                  sector: "Finance",
                  focus: "Quantifiable results, certifications",
                  format: "Conservative, 1 page preferred",
                  tip: "Highlight risk management and compliance",
                },
                {
                  sector: "Healthcare",
                  focus: "Licenses, patient outcomes",
                  format: "Detailed, 2-3 pages acceptable",
                  tip: "Include continuing education",
                },
                {
                  sector: "Creative",
                  focus: "Portfolio link, design skills",
                  format: "Can include visuals (but provide text version)",
                  tip: "Show range of styles/mediums",
                },
                {
                  sector: "Academia",
                  focus: "Publications, research, teaching",
                  format: "CV format, no page limit",
                  tip: "Emphasize grants/funding secured",
                },
                {
                  sector: "Sales",
                  focus: "Revenue numbers, quotas exceeded",
                  format: "Results-first, 1 page ideal",
                  tip: "Include % to goal metrics",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.sector}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Focus Areas
                      </h4>
                      <p className="text-gray-700">{item.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Format
                      </h4>
                      <p className="text-gray-700">{item.format}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-600">
                        Pro Tip
                      </h4>
                      <p className="text-sm text-gray-700">{item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter Preferences */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Recruiter Preferences by Level
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-3">Career Level</th>
                      <th className="pb-3">Priority #1</th>
                      <th className="pb-3">Priority #2</th>
                      <th className="pb-3">Page Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        level: "Entry-Level",
                        p1: "Education/Certs",
                        p2: "Internships",
                        pages: "1",
                      },
                      {
                        level: "Mid-Career",
                        p1: "Specialized Skills",
                        p2: "Project Impact",
                        pages: "1-2",
                      },
                      {
                        level: "Senior",
                        p1: "Leadership",
                        p2: "Business Results",
                        pages: "2",
                      },
                      {
                        level: "Executive",
                        p1: "Strategic Vision",
                        p2: "Revenue/Growth",
                        pages: "2-3",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 last:border-0"
                      >
                        <td className="py-3 font-medium">{row.level}</td>
                        <td className="py-3">{row.p1}</td>
                        <td className="py-3">{row.p2}</td>
                        <td className="py-3">{row.pages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {activeTab === "examples" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Resume Transformations
            </h2>

            <div className="space-y-12">
              {/* Before/After Example 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">📊</span> From Duties to Achievements
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-600 mb-3">
                      ❌ Before (Weak)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p className="font-medium">Marketing Manager</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Managed social media accounts</li>
                        <li>Created content calendar</li>
                        <li>Ran advertising campaigns</li>
                        <li>Worked with design team</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-600 mb-3">
                      ✅ After (Strong)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p className="font-medium">Marketing Manager</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          Grew Instagram following from 10K to 85K in 12 months
                          through strategic content planning (+750%)
                        </li>
                        <li>
                          Optimized Facebook ad campaigns, reducing CPA by 40%
                          while increasing conversions 25%
                        </li>
                        <li>
                          Led cross-functional team to launch 3 product
                          campaigns generating $1.2M in first-quarter revenue
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Example 2 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">🔍</span> From Generic to Targeted
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-600 mb-3">
                      ❌ Before (Generic)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p className="font-medium">Skills Section</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem-solving</li>
                        <li>Microsoft Office</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-600 mb-3">
                      ✅ After (Targeted)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p className="font-medium">Technical Competencies</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>JavaScript (React, Node.js)</li>
                        <li>AWS Cloud Architecture</li>
                        <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
                        <li>Database Design (MongoDB, PostgreSQL)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Resume Example */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="mr-3">🏆</span> Recruiter-Approved Sample
                </h3>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-2xl font-bold">JANE DOE</h2>
                    <p className="text-blue-600">
                      Senior Product Manager | SaaS Platforms
                    </p>
                    <p className="text-sm">
                      jane.doe@email.com | (555) 123-4567 |
                      linkedin.com/in/janedoe
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-bold text-lg border-b border-gray-200 pb-1 mb-2">
                      PROFESSIONAL SUMMARY
                    </h3>
                    <p className="text-sm">
                      Results-driven Product Manager with 7+ years experience
                      scaling SaaS platforms. Specialized in user acquisition
                      and retention strategies that drive 30%+ annual revenue
                      growth. PMP certified with MBA from Stanford.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-bold text-lg border-b border-gray-200 pb-1 mb-2">
                      KEY ACHIEVEMENTS
                    </h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        Led product team that grew ARR from $5M to $18M in 3
                        years
                      </li>
                      <li>
                        Reduced churn by 35% through predictive analytics
                        implementation
                      </li>
                      <li>
                        Launched 4 major features with 90%+ customer
                        satisfaction
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg border-b border-gray-200 pb-1 mb-2">
                      EXPERIENCE
                    </h3>
                    <div className="mb-3">
                      <div className="flex justify-between">
                        <p className="font-semibold">
                          Senior Product Manager, TechCorp
                        </p>
                        <p className="text-gray-600">2019-Present</p>
                      </div>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                        <li>
                          Spearheaded platform redesign that increased DAU by
                          40%
                        </li>
                        <li>Managed $2M product budget with 120% ROI</li>
                        <li>
                          Built and led cross-functional team of 12
                          engineers/designers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 rounded-2xl text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Craft a Recruiter-Approved Resume?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Implement these expert strategies to create a resume that passes
              ATS and impresses hiring managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get Professional Review
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                Download Templates
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
