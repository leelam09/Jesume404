import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const resumes = [
  { id: 1, name: 'Jonathan Wright', imageUrl: '/resume1.png' },
  { id: 2, name: 'Andrew Clark', imageUrl: '/resume2.png' },
  { id: 3, name: 'Timothy Duncan', imageUrl: '/resume3.png' },
  { id: 4, name: 'Belinda Morales', imageUrl: '/resume4.png' },
  { id: 5, name: 'Nelson Barker', imageUrl: '/resume5.png' },
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
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {resumes.map((resume, index) => {
        const positionDiff = (index - activeIndex + resumes.length) % resumes.length;

        let transformStyle = '';
        let zIndex = 0;
        let opacity = 0.5;
        let scale = 0.7;

        switch(positionDiff) {
          case 0:
            transformStyle = 'translate-x-0';
            zIndex = 10;
            opacity = 1;
            scale = 1;
            break;
            case 1:
              transformStyle = 'translate-x-[20%] rotate-6';
            zIndex = 5;
            scale = 0.8;
            break;
          case 2:
            transformStyle = 'translate-x-[40%] rotate-12';
            zIndex = 3;
            scale = 0.6;
            break;
            case resumes.length - 1:
              transformStyle = '-translate-x-[20%] -rotate-6';
            zIndex = 5;
            scale = 0.8;
            break;
          case resumes.length - 2:
            transformStyle = '-translate-x-[40%] -rotate-12';
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
              transform: `scale(${scale})`,
            }}
          >
            <Image 
              src={resume.imageUrl} 
              alt={`Resume of ${resume.name}`}
              layout="fill"
              objectFit="contain"
              className="shadow-lg rounded-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default function ResumeTemplatesSection() {
  return (
    <>
    <section className="bg-gray-100">
      <div className="max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left - Carousel */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <ReCarousel />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            35+ templates in one resume builder
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Unlock access to over 35 professionally designed templates tailored for different industries and job roles. Our resume builder combines flexibility, ATS-compatibility, and elegance to help you craft the perfect resume.
          </p>
          <button className="px-6 py-3 border border-red-600 text-red-800 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors">
            View All Templates
          </button>
        </div>
      </div>
    </section>
  </>
  );
}
