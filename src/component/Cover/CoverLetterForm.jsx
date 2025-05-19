"use client";

import { useState } from "react";

export default function CoverLetterForm({
  coverLetterData,
  setCoverLetterData,
  setActiveSection,
}) {
  const [currentTab, setCurrentTab] = useState("personal");

  const safeData = {
    personalInfo: coverLetterData.personalInfo || {},
    recipientInfo: coverLetterData.recipientInfo || {},
    letterSections: coverLetterData.letterSections || {},
    experience: coverLetterData.experience || [],
    education: coverLetterData.education || [],
    skills: coverLetterData.skills || [],
    projects: coverLetterData.projects || [],
  };

  const handleChange = (section, e) => {
    const { name, value } = e.target;
    // console.log(`Updating ${section}.${name} = ${value}`);
    setCoverLetterData({
      ...coverLetterData,
      [section]: {
        ...coverLetterData[section],
        [name]: value,
      },
    });
    setActiveSection(section);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-gray-700">
      {/* Tabs */}
      <div className="flex flex-wrap border-b mb-6">
        {[
          ["personal", "Personal Info"],
          ["recipient", "Recipient Info"],
          ["letter", "Letter Sections"],
        ].map(([key, label]) => (
          <button
            key={key}
            className={`px-4 py-2 ${
              currentTab === key
                ? "border-b-2 border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => setCurrentTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Job Title Field */}
      {/* <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Job Title You're Applying For
        </label>
        <input
          type="text"
          name="jobTitle"
          value={safeData.jobTitle}
          onChange={(e) =>
            setCoverLetterData({ ...coverLetterData, jobTitle: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
      </div> */}

      {/* Personal Info */}
      {currentTab === "personal" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "title", "email", "phone", "location", "date"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={safeData.personalInfo[field] || ""}
                  onChange={(e) => handleChange("personalInfo", e)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )
          )}
        </div>
      )}

      {/* Recipient Info */}
      {currentTab === "recipient" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "title", "company", "address"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={safeData.recipientInfo[field] || ""}
                onChange={(e) => handleChange("recipientInfo", e)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {/* Letter Sections */}
      {currentTab === "letter" && (
        <div className="space-y-4">
          {[
            ["salutation", "Salutation (e.g., Dear Mr./Ms. Name)"],
            ["introduction", "Introduction"],
            ["mainContent", "Main Content"],
            ["closing", "Closing"],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <textarea
                name={field}
                value={safeData.letterSections[field] || ""}
                onChange={(e) => handleChange("letterSections", e)}
                className="w-full p-2 border rounded-md"
                rows={field === "salutation" ? 1 : 3}
              ></textarea>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
