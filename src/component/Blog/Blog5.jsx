"use client";
import React from "react";
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Target,
  FileText,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function ResumetoInterviewBlog() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Career Advice
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How to Write a Resume That
            <span className="text-red-600 block">Lands Interviews</span>
            <span className="text-2xl font-normal text-gray-600 block mt-4">
              in 2025
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>June 3, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>Sarah Johnson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            In today's competitive job market, your resume isn't just a
            document—it's your personal marketing tool. With AI-powered
            applicant tracking systems (ATS) and evolving hiring practices, the
            resume game has changed significantly in 2025. Here's your
            comprehensive guide to crafting a resume that gets noticed.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-semibold text-red-900 mb-3">
            Quick Stats You Need to Know
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">7.4 seconds</div>
              <div className="text-gray-700">
                Average time recruiters spend on initial resume review
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">75%</div>
              <div className="text-gray-700">
                Of resumes are filtered out by ATS systems
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">40%</div>
              <div className="text-gray-700">
                Increase in interview callbacks with optimized resumes
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: The 2025 Resume Foundation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-red-600" />
            The 2025 Resume Foundation
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Essential Elements That Matter Now
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ATS-Optimized Format
                  </h4>
                  <p className="text-gray-700">
                    Use clean, simple formatting with standard fonts like Arial
                    or Calibri. Avoid graphics, tables, and complex layouts that
                    confuse parsing systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Strategic Keywords
                  </h4>
                  <p className="text-gray-700">
                    Mirror the exact language from job descriptions. Include
                    both hard skills (Python, Project Management) and soft
                    skills (Leadership, Communication).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quantified Achievements
                  </h4>
                  <p className="text-gray-700">
                    Replace generic duties with specific, measurable
                    accomplishments. "Increased sales by 35%" beats "Responsible
                    for sales growth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Structure That Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-red-600" />
            The Winning Structure
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Header Section
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full name (larger font)</li>
                <li>• Professional title/target role</li>
                <li>• Phone, email, LinkedIn</li>
                <li>• Location (city, state)</li>
                <li>• Portfolio/website (if relevant)</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Core Sections (in order)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional Summary (3-4 lines)</li>
                <li>• Core Skills/Competencies</li>
                <li>• Professional Experience</li>
                <li>• Education</li>
                <li>• Additional sections as needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Writing Powerful Content */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-red-600" />
            Writing Content That Converts
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              The STAR Method for Experience Bullets
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-3">
                  ❌ Weak Example
                </h4>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-gray-700 italic">
                    "Responsible for managing social media accounts and
                    increasing engagement."
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-600 mb-3">
                  ✅ Strong Example
                </h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-gray-700 italic">
                    "Developed and executed social media strategy across 5
                    platforms, resulting in 150% increase in engagement and 40%
                    growth in qualified leads within 6 months."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                STAR Formula Breakdown:
              </h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-red-600">S</span>ituation:
                  What was the context?
                </div>
                <div>
                  <span className="font-semibold text-red-600">T</span>ask: What
                  needed to be done?
                </div>
                <div>
                  <span className="font-semibold text-red-600">A</span>ction:
                  What did you do?
                </div>
                <div>
                  <span className="font-semibold text-red-600">R</span>esult:
                  What was the outcome?
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 2025 Trends */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What's Different in 2025
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                AI Skills Are Non-Negotiable
              </h3>
              <p>
                List specific AI tools you've used: ChatGPT for content
                creation, Midjourney for design, automation tools, etc. Even
                basic AI literacy sets you apart.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Remote Work Competencies
              </h3>
              <p className="text-gray-700">
                Highlight experience with virtual collaboration tools,
                self-management skills, and cross-timezone communication
                abilities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Skills-Based Hiring Focus
              </h3>
              <p>
                Create a prominent "Core Competencies" section. Many employers
                now prioritize skills over traditional experience requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-red-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              Pre-Submission Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Content Review</h3>
                <ul className="space-y-2">
                  <li>□ Tailored to specific job posting</li>
                  <li>□ Keywords from job description included</li>
                  <li>□ Quantified achievements throughout</li>
                  <li>□ No typos or grammatical errors</li>
                  <li>□ Consistent formatting and dates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Check</h3>
                <ul className="space-y-2">
                  <li>□ Saved as PDF (unless otherwise specified)</li>
                  <li>□ File name: FirstName_LastName_Resume</li>
                  <li>□ ATS-friendly format tested</li>
                  <li>□ Contact information current</li>
                  <li>□ LinkedIn profile updated to match</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Next Steps
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Remember, your resume is a living document. Update it regularly,
              even when you're not job searching. The best time to refresh your
              resume is when you complete a major project or achieve a
              significant milestone.
            </p>
            <p className="text-gray-700">
              Start implementing these strategies today, and you'll see the
              difference in your interview callback rate. The job market in 2025
              rewards those who adapt to new trends while maintaining the
              fundamentals of effective communication.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Download our free resume template and get started today
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Free Template
          </button>
        </div>
      </article>

      
    </div>
  );
}