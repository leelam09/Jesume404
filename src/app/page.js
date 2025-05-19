"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/Navbar";
import FAQSection from "@/component/Fyq";
import Footer from "@/component/Footer";
import ResumeBuilderSteps from "@/component/Working";
import ReviewSection from "@/component/Review";
import ResumeHero from "@/component/hero";

export default function HomePage() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "Clean and professional design suitable for corporate roles",
      image: "/templates-previews/professional.png",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary layout with creative touches",
      image: "/templates-previews/modern.png",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Unique design for creative industries and roles",
      image: "/templates-previews/creative.png",
    },
    {
      id: "elegant",
      name: "Elegant",
      description: "Sophisticated design with elegant typography",
      image: "/templates-previews/elegant.png",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Timeless design with a traditional layout",
      image: "/templates-previews/classic.png",
    },
    {
      id: "best",
      name: "Best",
      description: "Best design for all industries",
      image: "/templates-previews/Best.png",
    },
    {
      id: "traditional",
      name: "Traditional",
      description: "Best design for all industries",
      image: "/templates-previews/Traditional.png",
    },
    {
      id: "Gullible",
      name: "Gullible",
      description: "Best design for all industries",
      image: "/templates-previews/Gullible.png",
    },
    {
      id: "toronto",
      name: "Toronto",
      description: "Best design for all industries",
      image: "/templates-previews/Toronto.png",
    },
    {
      id: "",
      name: "",
      description: "Best design for all industries",
      image: "/templates-previews/Formal.png",
    },
    {
      id: "simple",
      name: "Simple",
      description: "Best design for all industries",
      image: "/templates-previews/Simple.png",
    },
    {
      id: "stylish",
      name: "Stylish",
      description: "Best design for all industries",
      image: "/templates-previews/stylish.png",
    },
    {
      id: "iconic",
      name: "Iconic",
      description: "Best design for all industries",
      image: "/templates-previews/Iconic.png",
    },

    {
      id: "chronic",
      name: "Chronic",
      description: "Best design for all industries",
      image: "/templates-previews/chronic.png",
    },
    {
      id: "Deligant",
      name: "Deligant",
      description: "Best design for all industries",
      image: "/templates-previews/Deligant.png",
    },
    {
      id: "Chronicles",
      name: "Chronicles",
      description: "Best design for all industries",
      image: "/templates-previews/Chronicles.png",
    },
    {
      id: "Chronological",
      name: "chronological",
      description: "Best design for all industries",
      image: "/templates-previews/Chronological.png",
    },
    {
      id: "Executive",
      name: "Executive",
      description: "Best design for all industries",
      image: "/templates-previews/Executive.png",
    },
    {
      id: "composit",
      name: "composit",
      description: "Best design for all industries",
      image: "/templates-previews/Composit.png",
    },
    {
      id: "corporate",
      name: "corporate",
      description: "Best design for all industries",
      image: "/templates-previews/corporate.png",
    },
  ];

  const startBuilding = () => {
    if (selectedTemplate) {
      router.push(`/builder?template=${selectedTemplate}`);
    } else {
      alert("Please select a template to get started");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <ResumeHero />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
          Create a professional resume in minutes
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-700">
          Choose from our professionally designed templates and get personalized
          AI suggestions to make your resume stand out.
        </p>
      </section>

      {/* Template Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-black mb-8">
          Choose a Template
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`
                border rounded-lg overflow-hidden cursor-pointer transition-all duration-200
                ${
                  selectedTemplate === template.id
                    ? "ring-4 ring-red-500 border-transparent transform scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div className="relative h-96 bg-gray-100 ">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="p-4 text-black
              ">
                <h3 className="font-medium text-lg">{template.name}</h3>
                <p className="text-black text-sm mt-1">
                  {template.description}
                </p>

                {selectedTemplate === template.id && (
                  <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Selected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={startBuilding}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
          >
            Continue with Selected Template
          </button>
        </div>
      </section>

      <ResumeBuilderSteps />

     
      <ReviewSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
