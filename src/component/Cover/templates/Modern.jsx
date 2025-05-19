"use client";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";

const ensureHttps = (url) => {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://${url}`;
};

export default function ModernCoverLetter({ coverLetterData = {} }) {
  const {
    personalInfo = {},
    recipientInfo = {},
    letterSections = {},
    skills = [],
  } = coverLetterData;

  return (
    <div className="w-full h-full bg-white text-gray-800 flex flex-col max-w-3xl mx-auto">
      {/* Header */}
      <header className="bg-blue-600 text-white px-8 py-6 mb-8">
        <h1 className="text-3xl font-bold">{personalInfo.name || "YOUR NAME"}</h1>
        <h2 className="text-xl mt-1">{personalInfo.title || "PROFESSIONAL TITLE"}</h2>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            {personalInfo.email || "your.email@example.com"}
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            {personalInfo.phone || "(123) 456-7890"}
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {personalInfo.location || "City, State"}
          </div>

          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {personalInfo.date || "Current Date"}
          </div>
        </div>
      </header>

      <div className='px-8'>
      {/* Recipient Info */}
      <section className="mb-6 text-gray-700">
        <p>{recipientInfo.name || "Recipient Name"}</p>
        <p>{recipientInfo.title || "Recipient Title"}</p>
        <p>{recipientInfo.company || "Company Name"}</p>
        <p>{recipientInfo.address || "Company Address, City, ST 12345"}</p>
      </section>

      {/* Salutation */}
      <section className="mb-4 font-bold text-blue-600">
        {letterSections.salutation || `Dear ${recipientInfo.name || "Hiring Manager"},`}
      </section>

      {/* Letter Body */}
      <section className="mb-6 space-y-4 text-gray-800">
        <p>
          {letterSections.introduction ||
            "I am writing to express my interest in the [POSITION] role at [COMPANY]. With my background in [FIELD/EXPERTISE] and passion for [RELEVANT SKILL/INDUSTRY], I believe I would be a valuable addition to your team."}
        </p>
        <p>
          {letterSections.mainContent ||
            "Throughout my career, I have developed strong skills in [KEY SKILL 1], [KEY SKILL 2], and [KEY SKILL 3]. At [PREVIOUS COMPANY], I successfully [ACHIEVEMENT WITH METRICS IF POSSIBLE]. My experience with [RELEVANT EXPERIENCE] has prepared me well for the challenges and opportunities at [COMPANY]."}
        </p>
        <p>
          {letterSections.closing ||
            "I am excited about the opportunity to bring my unique skills and experiences to [COMPANY]. Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team's success."}
        </p>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 border-b border-blue-200 pb-1 mb-3">
            KEY SKILLS
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            {skills.map((skill, i) => (
              <li key={i} className="text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Signature */}
      <section className="mt-auto text-gray-700">
        <p>Sincerely,</p>
        <p className="font-bold">{personalInfo.name || "YOUR NAME"}</p>
        {personalInfo.title && <p>{personalInfo.title}</p>}
      </section>
      </div>
    </div>
  );
}
