"use client";
import React from "react";
import { useState, useRef } from "react";
import CoverLetterForm from "@/component/Cover/CoverLetterForm";
import CoverLetterPreview from "@/component/Cover/CoverLetterPreview";
import TemplateSelector from "@/component/TemplateSelector";

const page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("null");
  const [activeSection, setActiveSection] = useState("Body");
  const coverLetterRef = useRef(null);
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and professional with a touch of color",

      color: "#3b82f6", // blue-500
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional format ideal for corporate roles",

      color: "#1e3a8a", // blue-900
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for creative industries",

      color: "#ec4899", // pink-500
    },
    {
      id: "elegant",
      name: "Elegant",
      description: "Sophisticated design with serif fonts for executive roles",

      color: "#713f12", // yellow-900
    },
    {
      id: "classic",
      name: "Classic",
      description: "Timeless design with a traditional layout",

      color: "#1e3a8a", // blue-900
    },
    {
      id: "best",
      name: "Best",
      description: "Best design for all industries",

      color: "#0000", // black
    },
    {
      id: "traditional",
      name: "Traditional",
      description: "Best design for all industries",

      color: "#0000", // black
    },
    {
      id: "formal",
      name: "Formal",
      description: "Best design for all industries",

      color: "#0000", // black
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Best design for all industries",

      color: "#DEFF00", // black
    },
  ];
  const startBuilding = () => {
    if (selectedTemplate) {
      router.push(`/Coverbuilder?template=${selectedTemplate}`);
    } else {
      alert("Please select a template to get started");
    }
  };

  const coverTemplates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and professional with a touch of color",

      color: "#3b82f6", // blue-500
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional format ideal for corporate roles",

      color: "#1e3a8a", // blue-900
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Best design for all industries",

      color: "#DEFF00", // black
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for creative industries",

      color: "#ec4899", // pink-500
    },
    {
      id: "elegant",
      name: "Elegant",
      description: "Sophisticated design with serif fonts for executive roles",

      color: "#713f12", // yellow-900
    },
  ];

  const [coverLetterData, setCoverLetterData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      profileImage: null,
    },
    recipientInfo: {
      name: "",
      title: "",
      company: "",
      address: "",
    },
    letterSections: {
      salutation: "",
      introduction: "",
      mainContent: "",
      closing: "",
    },
  });
  return (
    <div>
      <div className="flex justify-start items-center mt-4 mb-6 gap-6 flex-wrap px-6 bg-white">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          templates={coverTemplates}
        />

        {/* Add PDF download button */}
        {/* <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
          </button> */}

        {/* <button
            onClick={() => setShowAISuggestions(!showAISuggestions)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
          {showAISuggestions ? 'Hide AI Suggestions' : 'Show AI Suggestions'}
          </button> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <CoverLetterForm
          coverLetterData={coverLetterData}
          setCoverLetterData={setCoverLetterData}
          setActiveSection={setActiveSection}
        />
        <div className="sticky top-8">
          <div>
            <CoverLetterPreview
              coverLetterData={coverLetterData}
              selectedTemplate={selectedTemplate}
              forwardedRef={coverLetterRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
