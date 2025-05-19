"use client";
import React from "react";
import { format } from "date-fns";

export const CoverLetterTemplate = ({
  fullName,
  jobTitle,
  companyName,
  skills,
  experience,
  templateStyle,
}) => {
  const currentDate = format(new Date(), "MMMM d, yyyy");
  const skillsList = skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  // Generate a sample cover letter text using the provided information
  const generateLetterContent = () => {
    return (
      <>
        <p className="mb-4">Dear Hiring Manager,</p>
        <p className="mb-4">
          I am writing to express my interest in the {jobTitle} position at{" "}
          {companyName}. With my background and skills in {skills}, I believe I
          would be a valuable addition to your team.
        </p>
        <p className="mb-4">{experience}</p>
        <p className="mb-4">
          I am excited about the opportunity to bring my skills and experience
          to {companyName} and would welcome the chance to discuss how I can
          contribute to your team's success.
        </p>
        <p className="mb-4">
          Thank you for considering my application. I look forward to the
          possibility of working with you.
        </p>
        <p className="mb-4">Sincerely,</p>
        <p>{fullName}</p>
      </>
    );
  };

  // Minimal Template
  if (templateStyle === "minimal") {
    return (
      <div className="p-8 max-w-4xl mx-auto font-sans">
        <div className="border-b-2 border-red-700 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-red-800">{fullName}</h1>
          <p className="text-gray-700">{jobTitle}</p>
        </div>

        <div className="mb-6 text-right">
          <p>{currentDate}</p>
        </div>

        <div className="mb-6">
          <p>Hiring Manager</p>
          <p>{companyName}</p>
        </div>

        <div className="text-gray-800 leading-relaxed">
          {generateLetterContent()}
        </div>
      </div>
    );
  }

  // Modern Template
  if (templateStyle === "modern") {
    return (
      <div className="font-sans">
        <div className="bg-red-800 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{fullName}</h1>
            <p className="text-xl">{jobTitle}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p>Hiring Manager</p>
              <p>{companyName}</p>
            </div>
            <p>{currentDate}</p>
          </div>

          <div className="text-gray-800 leading-relaxed">
            {generateLetterContent()}
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="font-bold text-red-800 mb-2">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Formal Template
  if (templateStyle === "formal") {
    return (
      <div className="p-8 max-w-4xl mx-auto font-serif">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-1">{fullName}</h1>
          <div className="h-1 w-24 bg-red-800 mx-auto mb-1"></div>
          <p className="text-gray-700">{jobTitle}</p>
        </div>

        <div className="mb-6 text-right">
          <p>{currentDate}</p>
        </div>

        <div className="mb-6">
          <p>Hiring Manager</p>
          <p>{companyName}</p>
        </div>

        <div className="text-gray-800 leading-relaxed">
          {generateLetterContent()}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm">
            References available upon request.
          </p>
        </div>
      </div>
    );
  }

  // Bold Template
  if (templateStyle === "bold") {
    return (
      <div className="font-sans">
        <div className="bg-black text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{fullName}</h1>
            <p className="text-xl">
              <span className="text-red-500">|</span> {jobTitle}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-8">
            <div className="flex justify-between items-baseline">
              <h2 className="text-2xl font-bold text-red-700">Cover Letter</h2>
              <p className="text-gray-700">{currentDate}</p>
            </div>
            <div className="h-1 w-full bg-red-700 mt-2"></div>
          </div>

          <div className="mb-6">
            <p>Hiring Manager</p>
            <p className="font-bold">{companyName}</p>
          </div>

          <div className="text-gray-800 leading-relaxed">
            {generateLetterContent()}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-red-700 mb-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsList.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-700 mr-2"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Creative Template
  if (templateStyle === "creative") {
    return (
      <div className="font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-red-800 text-white p-8 md:col-span-1">
            <div className="sticky top-8">
              <h1 className="text-2xl font-bold mb-6">{fullName}</h1>
              <p className="mb-6 text-red-200">{jobTitle}</p>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 border-b border-red-600 pb-1">
                  Contact
                </h3>
                <p className="text-sm mb-1">email@example.com</p>
                <p className="text-sm mb-1">(555) 123-4567</p>
                <p className="text-sm">City, State</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 border-b border-red-600 pb-1">
                  Skills
                </h3>
                <ul className="space-y-2">
                  {skillsList.map((skill, index) => (
                    <li key={index} className="text-sm flex items-center">
                      <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:col-span-2">
            <div className="mb-8">
              <p className="text-gray-600">{currentDate}</p>
              <div className="mt-4">
                <p>Hiring Manager</p>
                <p className="font-bold">{companyName}</p>
              </div>
            </div>

            <div className="text-gray-800 leading-relaxed">
              {generateLetterContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback to minimal template if none selected
  return (
    <div className="p-8 max-w-4xl mx-auto font-sans">
      <div className="border-b-2 border-red-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-red-800">{fullName}</h1>
        <p className="text-gray-700">{jobTitle}</p>
      </div>

      <div className="mb-6 text-right">
        <p>{currentDate}</p>
      </div>

      <div className="mb-6">
        <p>Hiring Manager</p>
        <p>{companyName}</p>
      </div>

      <div className="text-gray-800 leading-relaxed">
        {generateLetterContent()}
      </div>
    </div>
  );
};
