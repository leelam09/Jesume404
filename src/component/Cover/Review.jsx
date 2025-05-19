
"use client";
import { useState } from "react";

const CoverReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(null);
  const reviews = [
    {
      id: 1,
      content:
        "In just 20 days (or 3 weeks) of using Enhance, I got a job that pays almost double what I was making. I highly recommend Enhance.",
      author: "Lee",
    },
    {
      id: 2,
      content:
        "Gave my resume and cover letter the aesthetic facelift I was looking for!! Great templates and service, definitely would recommend!",
      author: "Mark",
    },
    {
      id: 3,
      content:
        "Having feedback to improve cover letter wording helped me increase my hiring process hit rate. After 6 months of using Enhance and multiple interview processes, I got a new job!",
      author: "Sergio",
    },
    {
      id: 4,
      content:
        "Everything is perfect with Enhance: the design of my resume, the bold and bright sections that I could add or remove depending on the job I apply for, the tips when describing my work experience. The vast choice of examples of cover letters and resumes help me a lot to pick up the best template for me.",
      author: "Kamelia",
    },
    {
      id: 5,
      content:
        "Great tool, easy to use, and provide great help from graphical and content perspectives on CVs and cover letters. Highly recommended!",
      author: "Corrado",
    },
  ];

  return (
    <section className="bg-white py-10 px-6  shadow-xl overflow-x-hidden transform transition-all ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          People from all over the world love our cover letter builder
        </h2>

        {/* Rating & CTA Section */}
        <div className="flex justify-center mb-8">
          <div className="text-gray-700 text-center">
            <div className="flex justify-center items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-lg font-medium">4.5 Rating</p>
            <p className="text-sm">
              3,908 happy customers shared their experience.
            </p>
            <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
              Read Reviews →
            </button>
          </div>
        </div>

        {/* Reviews Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-gray-50 p-6 rounded-2xl shadow-md transition-all cursor-pointer 
                ${
                  activeReview === review.id
                    ? "ring-4 ring-yellow-400 transform scale-105"
                    : ""
                }
                hover:shadow-lg hover:transform hover:scale-105`}
              onClick={() =>
                setActiveReview(activeReview === review.id ? null : review.id)
              }
            >
              <p className="text-gray-700 italic mb-4">"{review.content}"</p>
              <p className="font-bold text-red-600">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverReviewsSection;
