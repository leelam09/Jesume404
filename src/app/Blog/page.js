import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
    <div className='h-auto w-full p-5'>
      <Navbar/>
        <section class="group flex flex-col md:flex-row-reverse items-center justify-between bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-7xl mx-auto mt-10 hover:scale-[1.01] transition-scale duration-200 relative overflow-hidden">
        <div className="w-full md:w-1/2">
            <img src="/BlogResume.png" alt="Writing Resume Illustration" className="rounded-lg w-full h-auto" />
        </div>

        <div className='absolute w-0 h-1 bg-red-500 top-0 left-0 rounded-b-2xl group-hover:w-1/2 transition-width duration-500'/>
        <div className='absolute w-0 h-1 bg-red-500 bottom-0 right-0 rounded-t-2xl group-hover:w-1/2 transition-width duration-500'/>

        <div class="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <p class="text-sm text-red-600/60 font-semibold mb-2">FEATURED GUIDE</p>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Master Your Resume: <br class="hidden md:block"/> Tips to Stand Out in 2025
            </h2>
            <p class="text-gray-700 text-base mt-4">
            Discover modern resume strategies that highlight your achievements and
            impress recruiters in today’s competitive job market. Learn how to tailor your resume for every opportunity.
            </p>
            <a href="#" class="text-red-700 font-semibold mt-4 inline-block hover:underline">
            Explore the Guide →
            </a>
        </div>
        </section>

        <div class="bg-white py-12 sm:px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-black mb-10 text-center">Latest Articles</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">How AI Can Improve Your Resume</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 4/23/2025 • Updated: 5/8/2025</p>
            <p class="text-sm text-gray-600">7 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Using ChatGPT for Resume Writing</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 4/18/2025 • Updated: 5/8/2025</p>
            <p class="text-sm text-gray-600">6 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Top AI Tools for Job Seekers</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 3/24/2025 • Updated: 5/13/2025</p>
            <p class="text-sm text-gray-600">8 min read</p>
            </div>
            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">How AI Can Improve Your Resume</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 4/23/2025 • Updated: 5/8/2025</p>
            <p class="text-sm text-gray-600">7 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Using ChatGPT for Resume Writing</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 4/18/2025 • Updated: 5/8/2025</p>
            <p class="text-sm text-gray-600">6 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">6 Strategies to Make Your Resume AI-Friendly</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 3/15/2025 • Updated: 5/5/2025</p>
            <p class="text-sm text-gray-600">9 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">What Recruiters Look For in an AI-Scanned Resume</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 3/5/2025 • Updated: 4/20/2025</p>
            <p class="text-sm text-gray-600">10 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Best Resume Formats for AI Parsing</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 2/28/2025 • Updated: 4/12/2025</p>
            <p class="text-sm text-gray-600">5 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Avoid These Mistakes When Using AI to Write Resumes</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 2/10/2025 • Updated: 3/25/2025</p>
            <p class="text-sm text-gray-600">6 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Can AI Really Replace a Resume Writer?</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 1/20/2025 • Updated: 3/5/2025</p>
            <p class="text-sm text-gray-600">7 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">AI vs Human: Who Writes the Better Resume?</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 1/5/2025 • Updated: 2/10/2025</p>
            <p class="text-sm text-gray-600">8 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">COVER LETTER HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">How to Write a Cover Letter That Gets Noticed</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 4/10/2025 • Updated: 5/12/2025</p>
            <p class="text-sm text-gray-600">6 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">COVER LETTER HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">ChatGPT Cover Letter Tips for Tech Jobs</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 3/28/2025 • Updated: 5/1/2025</p>
            <p class="text-sm text-gray-600">7 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">COVER LETTER HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Mistakes to Avoid in Your AI-Written Cover Letter</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 3/10/2025 • Updated: 4/22/2025</p>
            <p class="text-sm text-gray-600">8 min read</p>
            </div>

            <div class="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer">
            <p class="text-xs text-red-600 font-semibold mb-2">COVER LETTER HELP</p>
            <h3 class="text-lg font-bold text-black group-hover:text-red-700 mb-2">Cover Letter vs Resume: Key Differences</h3>
            <p class="text-sm text-gray-700 mb-3">Published: 2/20/2025 • Updated: 4/2/2025</p>
            <p class="text-sm text-gray-600">5 min read</p>
            </div>

        </div>
        </div>
    </div>

    <Footer/>
    </div>
  )
}

export default page;