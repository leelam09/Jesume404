"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
const resumes = [
  { id: 1, name: "Jonathan Wright", imageUrl: "/resume1.png" },
  { id: 2, name: "Andrew Clark", imageUrl: "/resume2.png" },
  { id: 3, name: "Timothy Duncan", imageUrl: "/resume3.png" },
  { id: 4, name: "Belinda Morales", imageUrl: "/resume4.png" },
  { id: 5, name: "Nelson Barker", imageUrl: "/resume5.png" },
];

const ReCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % resumes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {resumes.map((resume, index) => {
        const positionDiff =
          (index - activeIndex + resumes.length) % resumes.length;

        let transformStyle = "";
        let zIndex = 0;
        let opacity = 0.5;
        let scale = 0.7;

        switch (positionDiff) {
          case 0:
            transformStyle = "translate-x-0";
            zIndex = 10;
            opacity = 1;
            scale = 1;
            break;
          case 1:
            transformStyle = "translate-x-[20%] rotate-6";
            zIndex = 5;
            scale = 0.8;
            break;
          case 2:
            transformStyle = "translate-x-[40%] rotate-12";
            zIndex = 3;
            scale = 0.6;
            break;
          case resumes.length - 1:
            transformStyle = "-translate-x-[20%] -rotate-6";
            zIndex = 5;
            scale = 0.8;
            break;
          case resumes.length - 2:
            transformStyle = "-translate-x-[40%] -rotate-12";
            zIndex = 3;
            scale = 0.6;
            break;
        }

        return (
          <div
            key={resume.id}
            className={`
              absolute transition-all duration-700 ease-in-out
              w-[300px] h-[400px] 
              ${transformStyle}
            `}
            style={{
              zIndex,
              opacity,
              transform: `${
                transformStyle.includes("translate") ? "" : transformStyle
              } scale(${scale})`,
            }}
          >
            {/* Placeholder for resume image */}
            <div className="w-full h-full bg-white shadow-lg rounded-lg border-2 border-gray-200 flex flex-col p-4">
              <img
                src={resume.imageUrl}
                alt={`Resume of ${resume.name}`}
                className="object-cover shadow-lg rounded-lg w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const JobportalBotton = () => {
  return (
    <section className="bg-black mx-4 lg:mx-36 rounded-3xl text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Carousel */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <ReCarousel />
            </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Heading */}
            <ScrollReveal animation="fadeUp" duration={800} delay={0} triggerOnce>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-red-600">
                IMPRESSIVE RESUMES
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" duration={800} delay={200} triggerOnce>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-white">
                EASY ONLINE BUILDER
              </h2>
            </ScrollReveal>

            {/* Features List */}
            <ul className="space-y-4 mb-10 text-left max-w-2xl">
              {[ // map through your list items for cleaner code and animation
                {
                  bold: "Professional out-of-the-box resumes",
                  rest: ", instantly generated by the most advanced resume builder technology available."
                },
                {
                  bold: "Effortless crafting",
                  rest: " Real-time preview & pre-written resume examples.\nDozens of HR-approved resume templates."
                },
                {
                  bold: "Land your dream job",
                  rest: " with the perfect resume employers are looking for."
                }
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  animation="fadeUp"
                  duration={700}
                  delay={index * 200}
                  triggerOnce
                >
                  <li className="flex items-start whitespace-pre-line">
                    <span className="text-red-600 mr-2 mt-1">•</span>
                    <span>
                      <span className="font-semibold">{item.bold}</span>
                      {item.rest}
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            {/* CTA Button */}
            <ScrollReveal animation="fadeIn" duration={800} delay={300} triggerOnce>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105 shadow-lg mb-8">
                START MY RESUME
              </button>
            </ScrollReveal>

            {/* Optional decorative elements */}
             <div className="flex justify-center lg:justify-start space-x-4">
              {[1, 2, 3].map((item, idx) => (
                <ScrollReveal
                  key={item}
                  animation="slideLeft"
                  duration={600}
                  delay={100}
                  stagger={150}
                  index={idx}
                  easing="smooth"
                >
                  <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-black rounded-full"></div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobportalBotton;
