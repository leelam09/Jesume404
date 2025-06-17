"use client";
import { useState } from "react";
import {
  ArrowRight,
  Users,
  Globe,
  Trophy,
  Award,
  DollarSign,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  Target,
  Shield,
  Heart,
  Star,
  Play,
  Calendar,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Code,
  BarChart3,
  Laptop,
  Coffee,
  Wifi,
  Camera,
  Headphones,
  Monitor,
} from "lucide-react";
import JobNavBar from "./Jobportal/JobNavbar";

export default function EnhancedCareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "IT Trainer – Data Science & AI",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$60,000 - $80,000",
      icon: Code,
      gradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      iconBg: "bg-red-500",
      summary:
        "Deliver high-quality training in emerging technologies such as Data Science, Artificial Intelligence, and Machine Learning.",
      responsibilities: [
        "Design and deliver comprehensive IT training programs",
        "Stay updated with the latest trends in data science and AI",
        "Provide hands-on support and mentorship to students",
        "Develop course material, assessments, and projects",
        "Collaborate with the corporate training team to meet client requirements",
      ],
      qualifications: [
        "Bachelor's or Master's degree in Computer Science, Engineering, or related field",
        "Minimum 3 years of experience in Data Science, AI, or ML",
        "Prior experience in training or teaching is preferred",
        "Excellent communication and presentation skills",
      ],
    },
    {
      id: 2,
      title: "BPO/KPO Project Manager",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$70,000 - $90,000",
      icon: Briefcase,
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      summary:
        "Oversee the execution and delivery of BPO/KPO services to global clients, managing client relationships and coordinating projects.",
      responsibilities: [
        "Manage multiple BPO/KPO projects, ensuring quality and efficiency",
        "Maintain strong relationships with clients and stakeholders",
        "Develop project plans and timelines, ensuring all milestones are met",
        "Oversee day-to-day operations of BPO/KPO services",
        "Coordinate with internal teams to ensure smooth execution",
      ],
      qualifications: [
        "Bachelor's degree in Business Administration, Management, or related field",
        "5+ years of experience in BPO/KPO project management",
        "Strong leadership and organizational skills",
        "Excellent communication and client management skills",
      ],
    },
    {
      id: 3,
      title: "Marketing Manager – Digital Marketing",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$55,000 - $75,000",
      icon: BarChart3,
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
      summary:
        "Lead digital marketing initiatives and create, execute, and optimize digital marketing strategies that drive awareness and engagement.",
      responsibilities: [
        "Develop and execute digital marketing campaigns (SEO, SEM, email marketing)",
        "Analyze data to measure campaign success and identify improvements",
        "Manage social media platforms and online presence",
        "Collaborate with sales and training teams to align marketing strategies",
        "Stay updated with industry trends and competitor activities",
      ],
      qualifications: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "3-5 years of experience in digital marketing",
        "Proven track record of driving results through digital channels",
        "Strong analytical skills and proficiency in digital marketing tools",
      ],
    },
    {
      id: 4,
      title: "Global Education Consultant",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$50,000 - $65,000",
      icon: GraduationCap,
      gradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
      summary:
        "Assist students and professionals with study abroad opportunities, visa processing, and career counseling.",
      responsibilities: [
        "Advise students on study abroad programs and visa requirements",
        "Assist in career counseling and job placement services",
        "Build relationships with international educational institutions",
        "Stay updated with international education trends and opportunities",
      ],
      qualifications: [
        "Bachelor's degree in Education, Counseling, or related field",
        "2+ years of experience in education consulting",
        "Strong communication and interpersonal skills",
        "Knowledge of international education systems and visa processes",
      ],
    },
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Innovation Culture",
      description:
        "Work with cutting-edge technology and innovative solutions that shape the future.",
      gradient: "from-red-50 to-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description:
        "Accelerate your career with mentorship, training, and challenging projects.",
      gradient: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Make a difference worldwide by working with international clients and partners.",
      gradient: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: "Job Security",
      description:
        "Join a stable, growing company with excellent employee retention rates.",
      gradient: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Enjoy flexible schedules and a supportive environment that values well-being.",
      gradient: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: DollarSign,
      title: "Competitive Package",
      description:
        "Receive competitive salaries, bonuses, and comprehensive benefits.",
      gradient: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const applicationSteps = [
    {
      icon: Mail,
      title: "Submit Application",
      description:
        "Send your resume and cover letter through our application portal.",
      color: "bg-red-500",
      bgGradient: "from-red-50 to-red-100",
    },
    {
      icon: Users,
      title: "Interview Process",
      description:
        "Participate in our comprehensive interview process with team members.",
      color: "bg-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: CheckCircle,
      title: "Welcome to our Team",
      description:
        "Become a part of our dynamic team, where innovation meets opportunity.",
      color: "bg-green-500",
      bgGradient: "from-green-50 to-green-100",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target, color: "text-red-600" },
    { number: "50+", label: "Team Members", icon: Users, color: "text-blue-600" },
    { number: "25+", label: "Global Clients", icon: Globe, color: "text-green-600" },
    { number: "5+", label: "Years Experience", icon: Award, color: "text-purple-600" },
  ];

  const officeFeatures = [
    { icon: Laptop, label: "Modern Workspace", color: "text-blue-600", bg: "from-blue-50 to-blue-100" },
    { icon: Coffee, label: "Break Areas", color: "text-amber-600", bg: "from-amber-50 to-amber-100" },
    { icon: Wifi, label: "High-Speed Internet", color: "text-green-600", bg: "from-green-50 to-green-100" },
    { icon: Camera, label: "Video Conferencing", color: "text-purple-600", bg: "from-purple-50 to-purple-100" },
    { icon: Headphones, label: "Quiet Zones", color: "text-pink-600", bg: "from-pink-50 to-pink-100" },
    { icon: Monitor, label: "Dual Monitor Setup", color: "text-indigo-600", bg: "from-indigo-50 to-indigo-100" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50 animate-gradient-shift"></div>
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="floating-shape shape-1 absolute w-96 h-96 bg-gradient-to-br from-red-100/30 to-red-200/20 rounded-full blur-3xl"></div>
          <div className="floating-shape shape-2 absolute w-80 h-80 bg-gradient-to-br from-blue-100/30 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="floating-shape shape-3 absolute w-72 h-72 bg-gradient-to-br from-purple-100/30 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="floating-shape shape-4 absolute w-64 h-64 bg-gradient-to-br from-green-100/30 to-green-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern h-full w-full"></div>
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
          >
            <defs>
              <linearGradient
                id="lineGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(239, 68, 68)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(59, 130, 246)"
                  stopOpacity="0.1"
                />
              </linearGradient>
              <linearGradient
                id="lineGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(168, 85, 247)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(34, 197, 94)"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              fill="none"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              className="flowing-line line-1"
            />
            <path
              d="M0,300 Q300,500 600,300 T1200,300"
              fill="none"
              stroke="url(#lineGradient2)"
              strokeWidth="2"
              className="flowing-line line-2"
            />
          </svg>
        </div>

        {/* Particle effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-gradient-to-r from-red-400 to-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
        <JobNavBar className="relative z-50" />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-50/10 to-blue-50/10 animate-pulse-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 z-10">
        <div className="container mx-auto text-center">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-red-200 rounded-full border border-red-300 mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-sm font-semibold text-red-700">
                Join Our Elite Team
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-red-600 bg-clip-text text-transparent leading-tight">
              Shape the Future of
              <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Technology & Education
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join Careertronic Global Services and be part of a revolutionary
              journey where innovation meets education. We're building the
              future, one breakthrough at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 backdrop-blur-sm">
                Explore Opportunities
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-red-500 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                      <IconComponent
                        className={`w-8 h-8 ${stat.color} mb-4 mx-auto`}
                      />
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Features Grid */}
      <section className="py-20 px-6 bg-gray-50/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              Our Modern Workspace
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience a world-class work environment designed for
              productivity and collaboration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {officeFeatures.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the powerful benefits of joining our innovative team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group relative">
                  <div
                    className={`bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl shadow-lg`}
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent
                        className={`w-8 h-8 ${benefit.iconColor}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section
        id="jobs"
        className="py-20 px-6 bg-gray-50/80 backdrop-blur-sm relative z-10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => {
              const IconComponent = job.icon;
              return (
                <div key={job.id} className="group relative">
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${job.borderColor} hover:border-red-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 ${job.iconBg} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-600 font-bold">
                          {job.salary}
                        </div>
                        <div className="text-gray-500 text-sm">per year</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {job.summary}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-gray-900 font-semibold mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.slice(0, 3).map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Apply Now
                      </button>
                      <button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                      >
                        {selectedJob === job.id ? "Less Info" : "More Info"}
                      </button>
                    </div>

                    {selectedJob === job.id && (
                      <div className="mt-8 pt-8 border-t border-gray-200 animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="text-gray-900 font-semibold mb-4">
                              All Responsibilities:
                            </h5>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-gray-600 text-sm"
                                >
                                  <ChevronRight className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-gray-900 font-semibold mb-4">
                              Qualifications:
                            </h5>
                            <ul className="space-y-2">
                              {job.qualifications.map((qual, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-gray-600 text-sm"
                                >
                                  <ChevronRight className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {qual}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              How to Apply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your journey with us in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group relative text-center">
                  <div
                    className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg`}
                  >
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards an exciting career in technology and
              education. We're excited to meet you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact HR Team
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Interview
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradient-shift {
            0%,
            100% {
              background: linear-gradient(
                135deg,
                #f8fafc 0%,
                #ffffff 50%,
                #fef2f2 100%
              );
            }
            50% {
              background: linear-gradient(
                135deg,
                #fef2f2 0%,
                #f8fafc 50%,
                #f0f9ff 100%
              );
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes float-reverse {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(20px) rotate(-180deg);
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes flow {
            0% {
              stroke-dashoffset: 1000;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes particle-float {
            0% {
              transform: translateY(100vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) translateX(50px) rotate(360deg);
              opacity: 0;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }

          .animate-gradient-shift {
            animation: gradient-shift 8s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          .floating-shape {
            animation: float 20s ease-in-out infinite;
          }

          .shape-1 {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
          }

          .shape-2 {
            top: 60%;
            right: 10%;
            animation: float-reverse 25s ease-in-out infinite;
            animation-delay: -5s;
          }

          .shape-3 {
            bottom: 20%;
            left: 20%;
            animation-delay: -10s;
          }

          .shape-4 {
            top: 30%;
            right: 30%;
            animation: float-reverse 30s ease-in-out infinite;
            animation-delay: -15s;
          }

          .flowing-line {
            stroke-dasharray: 100 20;
            animation: flow 15s linear infinite;
          }

          .line-1 {
            animation-delay: 0s;
          }

          .line-2 {
            animation-delay: -7s;
          }

          .particle {
            animation: particle-float linear infinite;
          }

          .grid-pattern {
            background-image: linear-gradient(
                rgba(239, 68, 68, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(239, 68, 68, 0.1) 1px,
                transparent 1px
              );
            background-size: 50px 50px;
            animation: float 30s ease-in-out infinite;
          }

          /* Backdrop blur fallback for older browsers */
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }

          @media (prefers-reduced-motion: reduce) {
            .floating-shape,
            .flowing-line,
            .particle,
            .grid-pattern {
              animation: none;
            }

            .animate-gradient-shift,
            .animate-pulse-slow {
              animation: none;
            }
          }

          /* Enhanced hover effects */
          .group:hover .floating-shape {
            animation-play-state: paused;
          }

          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f5f9;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
          }
        `}
      </style>
    </div>
  );
}      
