import { useState } from 'react';

export default function ElegantCoverLetter({ coverLetterData = {} }) {
  // Extract data with empty defaults to prevent errors
  const {
    personalInfo = {},
    recipientInfo = {},
    letterSections = {}
  } = coverLetterData;
  
  return (
    <div className="font-serif text-gray-800 max-w-4xl mx-auto my-10 p-8 bg-white rounded-md">
      {/* Header with elegant border */}
      <header className="pb-6 mb-8 border-b border-gray-200">
        <h1 className="text-3xl font-light tracking-wide text-center text-gray-900 mb-2">
          {personalInfo.name || "FULL NAME"}
        </h1>
        <p className="text-center text-gray-600 font-light tracking-wider uppercase text-sm mb-6">
          {personalInfo.title || "PROFESSIONAL TITLE"}
        </p>
        
        {/* Contact details in elegant horizontal layout */}
        <div className="flex flex-wrap justify-center gap-x-6 text-xs text-gray-500">
          <span>{personalInfo.email || "email@example.com"}</span>
          <span className="hidden sm:block">•</span>
          <span>{personalInfo.phone || "(123) 456-7890"}</span>
          <span className="hidden sm:block">•</span>
          <span>{personalInfo.linkedin || "linkedin.com/in/yourprofile"}</span>
          <span className="hidden sm:block">•</span>
          <span>{personalInfo.location || "City, State"}</span>
        </div>
      </header>
      
      {/* Date */}
      <div className="text-right mb-8 text-gray-500 text-sm">
        {personalInfo.date || "Current Date"}
      </div>
      
      {/* Recipient */}
      <section className="mb-8 text-sm leading-relaxed">
        <p>{recipientInfo.name || "Recipient Name"}</p>
        <p>{recipientInfo.title || "Recipient Title"}</p>
        <p>{recipientInfo.company || "Company Name"}</p>
        <p>{recipientInfo.address || "Company Address, City, ST 12345"}</p>
      </section>
      
      {/* Letter Content */}
      <main className="space-y-6 text-gray-700">
        {/* Salutation */}
        <p className="font-medium">
          {letterSections.salutation || "Dear Hiring Manager,"}
        </p>
        
        {/* Introduction */}
        <p className="leading-relaxed text-justify">
          {letterSections.introduction || 
           "Opening paragraph introducing yourself and stating the position you're applying for. Mention how you learned about the opportunity and express your enthusiasm for the role and organization."}
        </p>
        
        {/* Main Content */}
        <p className="leading-relaxed text-justify">
          {letterSections.mainContent || 
           "Middle paragraphs highlighting your relevant skills, accomplishments, and experiences that make you an ideal candidate. Reference specific qualifications from the job description and explain how your background aligns with the company's needs and goals."}
        </p>
        
        {/* Closing */}
        <p className="leading-relaxed text-justify">
          {letterSections.closing || 
           "Concluding paragraph reiterating your interest in the position and company. Express gratitude for their consideration and indicate your desire for a personal interview to further discuss your qualifications."}
        </p>
      </main>
      
      {/* Signature */}
      <footer className="mt-12">
        <p className="mb-1">Sincerely,</p>
        <p className="text-gray-900 mt-6 font-medium">
          {personalInfo.name || "FULL NAME"}
        </p>
      </footer>
    </div>
  );
}