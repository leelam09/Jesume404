"use client";
import { useState, useEffect } from "react";

export default function JobForm() {
  // Form state
  const [emails, setEmails] = useState(["kunalverma8055@gmail.com"]);
  const [jobDescription, setJobDescription] = useState("");
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [payType, setPayType] = useState("Range");
  const [minPay, setMinPay] = useState(13946.9);
  const [maxPay, setMaxPay] = useState(63780.55);
  const [payRate, setPayRate] = useState("per month");
  const [supplementalPay, setSupplementalPay] = useState([]);
  const [peopleToHire, setPeopleToHire] = useState("");
  const [timeline, setTimeline] = useState("");
  const [hasStartDate, setHasStartDate] = useState("no");
  const [startDate, setStartDate] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [sendEmailNotifications, setSendEmailNotifications] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Available benefits and supplemental pay options
  const availableBenefits = [
    "Health Insurance",
    "Dental Insurance",
    "Vision Insurance",
    "Provident Fund",
    "Cell phone reimbursement",
    "Work from home",
    "Flexible schedule",
    "Paid time off",
    "Professional development",
    "Retirement plan",
    "Life insurance",
  ];

  const availableSupplementalPay = [
    "Performance bonus",
    "Yearly bonus",
    "Commission pay",
    "Overtime pay",
    "Quarterly bonus",
    "Shift allowance",
    "Joining bonus",
    "Other",
  ];

  // Show more/less state for benefits
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const displayedBenefits = showAllBenefits
    ? availableBenefits
    : availableBenefits.slice(0, 6);

  // Text editor state
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle adding email
  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  // Handle removing email
  const removeEmail = (index) => {
    if (emails.length > 1) {
      const newEmails = [...emails];
      newEmails.splice(index, 1);
      setEmails(newEmails);
    }
  };

  // Toggle benefits selection
  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  // Toggle supplemental pay selection
  const toggleSupplementalPay = (pay) => {
    if (supplementalPay.includes(pay)) {
      setSupplementalPay(supplementalPay.filter((p) => p !== pay));
    } else {
      setSupplementalPay([...supplementalPay, pay]);
    }
  };

  // Text editor functions
  const applyFormat = (format) => {
    switch (format) {
      case "bold":
        setIsBold(!isBold);
        break;
      case "italic":
        setIsItalic(!isItalic);
        break;
      case "underline":
        setIsUnderline(!isUnderline);
        break;
      case "strikethrough":
        setIsStrikethrough(!isStrikethrough);
        break;
      case "bullet":
        const bulletPoint = "• ";
        setJobDescription(jobDescription + bulletPoint);
        break;
      default:
        break;
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    // Check required fields
    if (emails.some((email) => !email || !validateEmail(email))) {
      errors.emails = "Please provide valid email addresses";
    }

    if (!jobDescription.trim()) {
      errors.jobDescription = "Job description is required";
    }

    if (!peopleToHire) {
      errors.peopleToHire = "Please select the number of people to hire";
    }

    if (!timeline) {
      errors.timeline = "Please select a recruitment timeline";
    }

    if (hasStartDate === "yes" && !startDate) {
      errors.startDate = "Please provide a start date";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle continue button
  const handleContinue = () => {
    if (validateForm()) {
      // In a real app, this would submit the form or move to next step
      alert("Form is valid! Moving to next step...");
    }
  };

  // Handle preview toggle
  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  // Format currency for display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h1>

      {/* Communication Preferences */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Communication Preferences
        </h2>
        <label className="block font-medium text-gray-700 mb-2">
          Get application updates <span className="text-red-500">*</span>
        </label>

        {emails.map((email, index) => (
          <div key={index} className="flex mb-2 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const newEmails = [...emails];
                newEmails[index] = e.target.value;
                setEmails(newEmails);
              }}
              className={`flex-grow border ${
                formErrors.emails && (!email || !validateEmail(email))
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
              placeholder="Enter email address"
            />
            {emails.length > 1 && (
              <button
                onClick={() => removeEmail(index)}
                className="ml-2 text-gray-500 hover:text-red-500"
                aria-label="Remove email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}

        {formErrors.emails && (
          <p className="text-red-500 text-sm mt-1 mb-2">{formErrors.emails}</p>
        )}

        <button
          onClick={addEmail}
          className="text-red-500 text-sm font-medium hover:underline mb-4 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add another email
        </button>

        <div className="mt-2">
          <label className="inline-flex items-center text-sm cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-500 rounded focus:ring-red-500 border-gray-300"
              checked={sendEmailNotifications}
              onChange={() =>
                setSendEmailNotifications(!sendEmailNotifications)
              }
            />
            <span className="ml-2">
              Send me an email each time someone applies
            </span>
          </label>
        </div>
      </div>

      {/* Job Description */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Job Details
        </h2>
        <label className="block font-medium text-gray-700 mb-2">
          Job description <span className="text-red-500">*</span>
        </label>

        <div
          className={`border ${
            formErrors.jobDescription ? "border-red-500" : "border-gray-300"
          } rounded-md overflow-hidden`}
        >
          <div className="bg-gray-100 p-2 flex space-x-2 text-sm border-b border-gray-300 overflow-x-auto">
            <button
              className={`hover:bg-gray-200 px-2 py-1 rounded ${
                isBold ? "bg-gray-300" : ""
              }`}
              onClick={() => applyFormat("bold")}
              title="Bold"
            >
              B
            </button>
            <button
              className={`hover:bg-gray-200 px-2 py-1 rounded ${
                isItalic ? "bg-gray-300" : ""
              }`}
              onClick={() => applyFormat("italic")}
              title="Italic"
            >
              I
            </button>
            <button
              className={`hover:bg-gray-200 px-2 py-1 rounded ${
                isUnderline ? "bg-gray-300" : ""
              }`}
              onClick={() => applyFormat("underline")}
              title="Underline"
            >
              U
            </button>
            <button
              className={`hover:bg-gray-200 px-2 py-1 rounded ${
                isStrikethrough ? "bg-gray-300" : ""
              }`}
              onClick={() => applyFormat("strikethrough")}
              title="Strikethrough"
            >
              S
            </button>
            <button
              className="hover:bg-gray-200 px-2 py-1 rounded"
              onClick={() => applyFormat("bullet")}
              title="Bullet List"
            >
              •
            </button>
          </div>

          <textarea
            className="w-full h-48 p-3 focus:outline-none resize-vertical"
            placeholder="Type job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: `${isUnderline ? "underline" : ""} ${
                isStrikethrough ? "line-through" : ""
              }`.trim(),
            }}
          ></textarea>
        </div>

        {formErrors.jobDescription && (
          <p className="text-red-500 text-sm mt-1">
            {formErrors.jobDescription}
          </p>
        )}
      </div>

      {/* Benefits */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <label className="block font-medium text-gray-700 mb-3">Benefits</label>

        <div className="flex flex-wrap gap-2 mb-2">
          {displayedBenefits.map((benefit, i) => (
            <button
              key={i}
              onClick={() => toggleBenefit(benefit)}
              className={`px-3 py-1 border rounded-full text-sm transition ${
                selectedBenefits.includes(benefit)
                  ? "bg-red-500 text-white border-red-500"
                  : "text-gray-700 bg-white hover:bg-gray-100 border-gray-300"
              }`}
            >
              {selectedBenefits.includes(benefit) ? "✓ " : "+ "}
              {benefit}
            </button>
          ))}
        </div>

        <button
          className="text-red-500 text-sm font-medium hover:underline mt-1"
          onClick={() => setShowAllBenefits(!showAllBenefits)}
        >
          {showAllBenefits ? "Show fewer" : "Show more"}
        </button>
      </div>

      {/* Pay Section */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Pay</h2>
        <p className="text-sm text-gray-600 mb-4">
          Review the pay we estimated for your job and adjust as needed. Check
          your local minimum wage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Show pay by
            </label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={payType}
              onChange={(e) => setPayType(e.target.value)}
            >
              <option value="Range">Range</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>

          {payType === "Range" ? (
            <>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Minimum
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={minPay}
                    onChange={(e) => setMinPay(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Maximum
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={maxPay}
                    onChange={(e) => setMaxPay(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Fixed Amount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  ₹
                </span>
                <input
                  type="number"
                  value={minPay}
                  onChange={(e) => setMinPay(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Rate
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={payRate}
            onChange={(e) => setPayRate(e.target.value)}
          >
            <option value="per month">per month</option>
            <option value="per annum">per annum</option>
            <option value="per week">per week</option>
            <option value="per day">per day</option>
            <option value="per hour">per hour</option>
          </select>
        </div>

        {/* Supplemental Pay */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Supplemental Pay
          </label>

          <div className="flex flex-wrap gap-2">
            {availableSupplementalPay.map((item, idx) => (
              <button
                key={idx}
                onClick={() => toggleSupplementalPay(item)}
                className={`px-3 py-1 border rounded-full text-sm transition ${
                  supplementalPay.includes(item)
                    ? "bg-red-500 text-white border-red-500"
                    : "text-gray-700 bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {supplementalPay.includes(item) ? "✓ " : "+ "}
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Details */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Hiring Details
        </h2>
        {/* Number of people */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-1">
            Number of people you wish to hire for this job{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            className={`w-full border ${
              formErrors.peopleToHire ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
            value={peopleToHire}
            onChange={(e) => setPeopleToHire(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2-5">2-5</option>
            <option value="5+">5+</option>
          </select>

          {formErrors.peopleToHire && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.peopleToHire}
            </p>
          )}
        </div>

        {/* Recruitment timeline */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-1">
            Recruitment timeline for this job{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            className={`w-full border ${
              formErrors.timeline ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="1 month">1 month</option>
            <option value="More than 1 month">More than 1 month</option>
          </select>

          {formErrors.timeline && (
            <p className="text-red-500 text-sm mt-1">{formErrors.timeline}</p>
          )}
        </div>

        {/* Planned Start Date */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Is there a planned start date for this job?
          </label>

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <label className="inline-flex items-center border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                name="startDate"
                value="yes"
                className="mr-2 text-red-500 focus:ring-red-500"
                checked={hasStartDate === "yes"}
                onChange={() => setHasStartDate("yes")}
              />
              Yes
            </label>

            <label className="inline-flex items-center border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                name="startDate"
                value="no"
                className="mr-2 text-red-500 focus:ring-red-500"
                checked={hasStartDate === "no"}
                onChange={() => setHasStartDate("no")}
              />
              No
            </label>
          </div>

          {hasStartDate === "yes" && (
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Select Start Date
              </label>
              <input
                type="date"
                className={`w-full border ${
                  formErrors.startDate ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />

              {formErrors.startDate && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.startDate}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Schedule Interview Section */}
      <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Schedule Interviews
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Set up available interview slots for candidates (optional)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Select Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Select Time
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={interviewTime}
              onChange={(e) => setInterviewTime(e.target.value)}
            />
          </div>
        </div>

        <button className="mt-4 flex items-center text-red-500 text-sm font-medium hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add another time slot
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        <div className="flex w-full sm:w-auto gap-3">
          <button
            onClick={togglePreview}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Preview
          </button>

          <button
            onClick={handleContinue}
            className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600 transition"
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Feedback */}
      <div className="text-center text-sm mt-8 text-gray-500">
        Have feedback?{" "}
        <button className="text-red-500 hover:underline">Tell us more</button>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Job Posting Preview</h3>
              <button
                onClick={togglePreview}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Job Details</h2>

              <div className="mb-4">
                <div className="font-medium">Description:</div>
                <div className="mt-1 text-gray-700 whitespace-pre-wrap">
                  {jobDescription || "No description provided"}
                </div>
              </div>

              {selectedBenefits.length > 0 && (
                <div className="mb-4">
                  <div className="font-medium">Benefits:</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedBenefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-sm rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="font-medium">Pay:</div>
                <div className="mt-1 text-gray-700">
                  {payType === "Range"
                    ? `${formatCurrency(minPay)} - ${formatCurrency(
                        maxPay
                      )} ${payRate}`
                    : `${formatCurrency(minPay)} ${payRate}`}
                </div>
              </div>

              {supplementalPay.length > 0 && (
                <div className="mb-4">
                  <div className="font-medium">Supplemental Pay:</div>
                  <div className="mt-1 text-gray-700">
                    {supplementalPay.join(", ")}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="font-medium">Number of people to hire:</div>
                <div className="mt-1 text-gray-700">
                  {peopleToHire || "Not specified"}
                </div>
              </div>

              <div className="mb-4">
                <div className="font-medium">Recruitment timeline:</div>
                <div className="mt-1 text-gray-700">
                  {timeline || "Not specified"}
                </div>
              </div>

              {hasStartDate === "yes" && startDate && (
                <div className="mb-4">
                  <div className="font-medium">Planned start date:</div>
                  <div className="mt-1 text-gray-700">
                    {new Date(startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              )}

              {interviewDate && interviewTime && (
                <div className="mb-4">
                  <div className="font-medium">Interview slot:</div>
                  <div className="mt-1 text-gray-700">
                    {new Date(interviewDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at {interviewTime}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="font-medium">Communication:</div>
                <div className="mt-1 text-gray-700">
                  <p>Email notifications to: {emails.join(", ")}</p>
                  {sendEmailNotifications && (
                    <p className="mt-1">
                      Will receive notifications for each application
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={togglePreview}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
