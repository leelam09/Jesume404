"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import Image from "next/image";

export default function JobReviewPage() {
  const [applicationDeadline, setApplicationDeadline] = useState("no");
  const [resumeRequired, setResumeRequired] = useState(false);
  const [allowContact, setAllowContact] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto p-4">
        {/* Header Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center justify-between">
  <h1 className="text-2xl font-semibold text-gray-700">Review</h1>
  <div className="w-40 h-32 relative">
    <img
      src="/jobreview.png"
      className="w-full h-full object-cover rounded-md"
    />

</div>

        </div>

        {/* Job Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Job details</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="text-gray-600">Job title</div>
              <div className="flex items-center">
                <span className="mr-2">Node.js Developer</span>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Pencil size={16} />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <div className="text-gray-600">Company for this job</div>
              <div className="flex items-center">
                <span className="mr-2">HealthyFy</span>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Pencil size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Application Preferences Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Application preferences
          </h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="resume-required"
                checked={resumeRequired}
                onChange={() => setResumeRequired(!resumeRequired)}
                className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="resume-required" className="text-gray-700">
                Resume is required
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="allow-contact"
                checked={allowContact}
                onChange={() => setAllowContact(!allowContact)}
                className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="allow-contact" className="text-gray-700">
                Let potential candidates contact you about this job by email to
                the address provided.
              </label>
            </div>
          </div>
        </div>

        {/* Application Deadline Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Is there an application deadline ?
          </h2>

          <div className="space-y-3">
            <div className="border rounded-md p-3 hover:border-gray-400 transition-colors">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="deadline-no"
                  name="application-deadline"
                  value="no"
                  checked={applicationDeadline === "no"}
                  onChange={() => setApplicationDeadline("no")}
                  className="w-4 h-4 mr-2 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <label
                  htmlFor="deadline-no"
                  className="text-gray-700 flex items-center"
                >
                  <span className="text-red-500 mr-1">*</span> No
                </label>
              </div>
            </div>

            <div className="border rounded-md p-3 hover:border-gray-400 transition-colors">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="deadline-yes"
                  name="application-deadline"
                  value="yes"
                  checked={applicationDeadline === "yes"}
                  onChange={() => setApplicationDeadline("yes")}
                  className="w-4 h-4 mr-2 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <label htmlFor="deadline-yes" className="text-gray-700">
                  Yes
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button className="px-4 py-2 border border-gray-300 rounded flex items-center hover:bg-gray-50 transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            Back
          </button>

          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Preview
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded flex items-center hover:bg-red-700 transition-colors">
              Continue
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 text-center text-sm">
          <span className="text-gray-600">Have feedback?</span>
          <button className="ml-1 text-red-600 hover:underline">
            Tell us more
          </button>
        </div>
      </div>
    </div>
  );
}
