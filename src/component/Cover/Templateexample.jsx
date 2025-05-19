"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const coverLetterExamples = [
  {
    id: 1,
    title: "QA Engineer",
    author: "Jeremy Estrada",
    image: "/cover/Templates/cover1.png",
    color: "bg-red-50",
  },
  {
    id: 2,
    title: "Dentist",
    author: "Eusebio Leonard",
    image: "/cover/Templates/cover2.png",
    color: "bg-red-100",
  },
  {
    id: 3,
    title: "Entry Level Engineer",
    author: "Joann Lozano",
    image: "/cover/Templates/cover3.png",
    color: "bg-red-50",
  },
  {
    id: 4,
    title: "Data Engineer",
    author: "Dee Todd",
    image: "/cover/Templates/cover4.png",
    color: "bg-red-100",
  },
  {
    id: 5,
    title: "English Teacher",
    author: "Andrea Ibarra",
    image: "/cover/Templates/cover1.png",
    color: "bg-red-50",
  },
  {
    id: 6,
    title: "Product Marketing Manager",
    author: "Earnest Hendrix",
    image: "/cover/Templates/cover1.png",
    color: "bg-red-100",
  },
];

export default function CoverLetterGallery() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Update active index (approximate)
      if (direction === "left" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (
        direction === "right" &&
        activeIndex < coverLetterExamples.length - 1
      ) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden py-16 relative">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,rgba(220,38,38,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_400px_at_80%_80%,rgba(220,38,38,0.1),transparent)]"></div>
      </div>

      {/* Modern abstract shapes */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-tr from-red-300 to-red-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"
      ></div>
      <div
        aria-hidden="true"
        className="absolute top-3/4 left-1/4 w-24 h-24 bg-gradient-to-tr from-red-400 to-red-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-2000"
      ></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 inline-block">
            Cover Letter Examples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover professionally crafted templates to inspire your next
            career move
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-red-700 text-gray-800 dark:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform transition hover:scale-105 border border-gray-white dark:border-white"
            aria-label="Scroll Left"
            disabled={activeIndex === 0}
          >
            <ChevronLeft
              size={24}
              className={activeIndex === 0 ? "opacity-40" : ""}
            />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden no-scrollbar gap-6 px-12 py-6 snap-x"
          >
            {coverLetterExamples.map((example, index) => (
              <div
                key={example.id}
                className="text-center flex-shrink-0 snap-center transition-all duration-300 transform hover:scale-105"
                style={{ opacity: Math.abs(activeIndex - index) < 3 ? 1 : 0.7 }}
              >
                <div
                  className={`w-80 aspect-[3/4] bg-white dark:bg-white rounded-xl shadow-xl overflow-hidden group relative ${example.color} bg-opacity-10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 group-hover:opacity-30 transition-opacity"></div>

                  <div className="h-full w-full relative p-1">
                    <img
                      src={example.image}
                      alt={`${example.title} cover letter example`}
                      className="h-full w-full object-cover rounded-lg"
                    />

                    {/* Overlay information */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6  opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-xl font-bold text-white">
                        {example.title}
                      </p>
                      <p className="text-sm text-gray-200">
                        By {example.author}
                      </p>
                      <button className="mt-4 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                        View Template <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-950">
                  {example.title}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-red-700 text-gray-800 dark:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform transition hover:scale-105 border border-gray-100 dark:border-white"
            aria-label="Scroll Right"
            disabled={activeIndex === coverLetterExamples.length - 1}
          >
            <ChevronRight
              size={24}
              className={
                activeIndex === coverLetterExamples.length - 1
                  ? "opacity-40"
                  : ""
              }
            />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {coverLetterExamples.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-red-600 w-6"
                  : "bg-gray-300 dark:bg-red-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                setActiveIndex(index);
                const container = scrollRef.current;
                if (container) {
                  container.scrollTo({
                    left: index * 300,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
