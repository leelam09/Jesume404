import React from 'react'
import { Star, Coffee, Compass, Users } from "lucide-react";


const GoodCompany = () => {
  // Sample data for work-life balance stats
    const workLifeStats = [
    { 
      value: "78%", 
      label: "of employees say work-life balance is the most important factor in job satisfaction" 
    },
    { 
      value: "3.8x", 
      label: "higher productivity reported by employees with positive work-life balance" 
    },
    { 
      value: "65%", 
      label: "lower burnout rates in companies with flexible work policies" 
    },
    { 
      value: "87%", 
      label: "of job seekers consider company culture before applying" 
    }
  ];
   // Sample testimonials data
  const testimonials = [
    {
      quote: "Finding a company that valued my growth changed everything. I'm not just earning, I'm thriving.",
      author: "Alex Rivera",
      role: "Product Designer",
      company: "Microsoft"
    },
    {
      quote: "The right company culture makes Monday mornings something to look forward to. I never thought that was possible.",
      author: "Sarah Johnson",
      role: "Marketing Lead",
      company: "Adobe"
    },
    {
      quote: "It's not just about the salary. My company invests in my well-being and that makes all the difference.",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "Google"
    }
  ];
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-medium mb-3">MORE THAN JUST A JOB</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Good Life Starts with a Good Company
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            The right workplace doesn't just advance your career—it enhances your quality of life.
            Find companies that value what matters most to you.
          </p>
        </div>

        {/* Work-Life Balance Statistics */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workLifeStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-3xl font-bold text-red-600 mb-2">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Company Culture Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            What makes a company worth your talent?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-red-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-red-600 mb-4">
                <Coffee size={32} />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Work-Life Balance</h4>
              <p className="text-gray-700">
                Companies that respect your time outside work lead to higher job satisfaction and better mental health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-red-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-red-600 mb-4">
                <Compass size={32} />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Growth Opportunities</h4>
              <p className="text-gray-700">
                Organizations that invest in your development help you build a fulfilling and sustainable career path.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-red-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-red-600 mb-4">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Positive Culture</h4>
              <p className="text-gray-700">
                Supportive environments foster collaboration, innovation, and meaningful connections with colleagues.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Success stories from people like you
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col hover:shadow-xl hover:scale-102 hover:border-red-200 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Find companies that match your values</h3>
            <p className="text-white/90">Explore our company culture insights and reviews</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-red-600 hover:bg-gray-300 font-bold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer">
              View Top Companies
            </button>
            <button className="bg-black text-white hover:bg-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer">
              Company Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoodCompany
