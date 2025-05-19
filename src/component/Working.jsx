import { useState, useEffect } from "react";
import Link from "next/link";

export default function ResumeBuilderSteps() {
  const [isHovering, setIsHovering] = useState(false);

  const steps = [
    {
      name: "Select Template",
      description: "Choose from our professional resume templates",
    },
    {
      name: "Fill Details",
      description: "Enter your personal and professional information",
    },
    {
      name: "Customize Layout",
      description: "Arrange sections and adjust styling to your preference",
    },

    {
      name: "Download",
      description: "Export your resume in PDF, DOCX or other formats",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-center">
      {/* Left Side: Creative Content */}
      <div className="w-full lg:w-1/2 p-6 space-y-8">
        <h2 className="text-4xl font-bold text-red-700 leading-tight">
          Craft Your Perfect Resume
        </h2>

        <p className="text-gray-700 text-xl leading-relaxed">
          Your career journey starts with a compelling resume. Our intuitive
          builder helps you create professional resumes that stand out from the
          competition.
        </p>

        <div className="flex flex-col space-y-6 mt-10">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="text-gray-700 text-lg">
              ATS-friendly templates that get past screening filters
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <span className="text-gray-700 text-lg">
              AI-powered content suggestions to highlight your skills
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <span className="text-gray-700 text-lg">
              Multiple export formats for any application process
            </span>
          </div>
        </div>

        <Link href="/builder">
          <button className="mt-10 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 text-lg rounded-lg transition-colors shadow-md hover:shadow-lg">
            Start Building Now
          </button>
        </Link>
      </div>

      {/* Right Side: Rotating Steps (properly sized) */}
      <div className="w-full lg:w-1/2 relative " style={{ height: "500px" }}>
        {/* Rotating Cards Container */}
        <div className="w-full h-full  relative">
          <ul
            className="list-none m-0 p-0 relative w-full h-full z-10"
            style={{ "--count": steps.length }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {steps.map((step, index) => (
              <li
                key={index}
                className="absolute top-1/2 w-full"
                style={{
                  transform: "translateY(-50%)",
                  animation: `rotateCW 30s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite`,
                  animationDelay: `calc((30/${steps.length}) * -${index}s)`,
                  animationPlayState: isHovering ? "paused" : "running",
                }}
              >
                <div
                  className="w-2/5 flex flex-col items-start p-2  bg-white rounded-lg shadow-lg"
                  style={{
                    animation: `rotateCCW 30s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite`,
                    animationDelay: `calc((30/${steps.length}) * -${index}s)`,
                    animationPlayState: isHovering ? "paused" : "running",
                  }}
                >
                  <span className="font-medium text-lg text-red-600">
                    {step.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {step.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Concentric circles */}
          <div className="absolute w-2/3 aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-50 bg-opacity-25 rounded-full shadow-lg"></div>
          <div className="absolute w-2/5 aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-50 bg-opacity-50 rounded-full shadow-lg"></div>
        </div>

        {/* Glow effect */}
        {/* <div
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            // backgroundPosition: "100% 50%",
            // backgroundRepeat: "no-repeat",
            backgroundImage:
              "radial-gradient(70% 50% at 100% 50%, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0) 100%)",
            animation: "pulseGlow 5s linear infinite alternate",
          }}
        ></div> */}

        {/* Center circle */}
        <div className="absolute w-32 aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-lg text-center font-semibold text-red-700">
            Resume Builder
          </span>
        </div>

        {/* CSS for animations */}
        <style jsx>{`
          @keyframes rotateCW {
            from {
              transform: translate3d(0px, -50%, -1px) rotate(-45deg);
            }
            to {
              transform: translate3d(0px, -50%, 0px) rotate(-315deg);
            }
          }
          @keyframes rotateCCW {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(315deg);
            }
          }
          @keyframes pulseGlow {
            from {
              background-size: 60%;
            }
            to {
              background-size: 100%;
            }
          }
        `}</style>
      </div>

      {/* Responsive message */}
      <div className="w-full text-center mt-6 text-sm text-gray-500 md:hidden">
        For best experience, view on a larger screen
      </div>
    </div>
  );
}
