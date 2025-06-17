"use client";
import React, { useState } from "react";
import {
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Users,
  BookOpen,
  FileText,
  AlertCircle,
} from "lucide-react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
    companySize: "",
    companyType: "",
    companyDescription: "",

    // Job Details
    jobTitle: "",
    jobCategory: "",
    jobType: "",
    workMode: "",
    experienceLevel: "",
    jobLocation: "",
    salaryType: "",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",

    // Job Requirements
    requiredSkills: "",
    preferredSkills: "",
    education: "",
    experience: "",
    jobDescription: "",
    responsibilities: "",
    benefits: "",

    // Application Details
    applicationDeadline: "",
    contactEmail: "",
    applicationUrl: "",

    // Additional
    urgentHiring: false,
    remoteOk: false,
    verified: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      "companyName",
      "companyEmail",
      "jobTitle",
      "jobCategory",
      "jobType",
      "jobLocation",
      "experienceLevel",
      "jobDescription",
      "requiredSkills",
      "applicationDeadline",
      "contactEmail",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.companyEmail && !emailRegex.test(formData.companyEmail)) {
      newErrors.companyEmail = "Please enter a valid email address";
    }
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }

    // Salary validation
    if (formData.salaryType === "range") {
      if (!formData.salaryMin)
        newErrors.salaryMin = "Minimum salary is required";
      if (!formData.salaryMax)
        newErrors.salaryMax = "Maximum salary is required";
      if (
        formData.salaryMin &&
        formData.salaryMax &&
        parseInt(formData.salaryMin) >= parseInt(formData.salaryMax)
      ) {
        newErrors.salaryMax = "Maximum salary must be greater than minimum";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Job posted successfully!");
      console.log("Form Data:", formData);
      // Reset form or redirect
    } catch (error) {
      alert("Error posting job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder = "",
    ...props
  }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-gray-400 ${
          errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
        {...props}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <AlertCircle size={14} />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const SelectField = ({
    label,
    name,
    options,
    required = false,
    ...props
  }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-gray-400 ${
          errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <AlertCircle size={14} />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const TextAreaField = ({
    label,
    name,
    required = false,
    rows = 4,
    placeholder = "",
    ...props
  }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-gray-400 resize-vertical ${
          errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
        {...props}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <AlertCircle size={14} />
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="w-full">
        {/* Header - Full Width */}
        <div className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Post a New Job
            </h1>
            <p className="text-xl text-red-100 max-w-2xl">
              Create a compelling job posting to attract the best candidates for
              your team
            </p>
          </div>
        </div>

        {/* Form Container - Full Width with Max Width */}
        <div className="w-full px-4 py-8">
          <div className="max-w-full ">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 space-y-12">
                {/* Company Information */}
                <section className="border-l-4 border-red-500 pl-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Building2 className="text-red-500" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">
                      Company Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputField
                      label="Company Name"
                      name="companyName"
                      required
                      placeholder="Enter your company name"
                    />
                    <InputField
                      label="Company Email"
                      name="companyEmail"
                      type="email"
                      required
                      placeholder="company@example.com"
                    />
                    <InputField
                      label="Company Phone"
                      name="companyPhone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                    />
                    <InputField
                      label="Company Website"
                      name="companyWebsite"
                      type="url"
                      placeholder="https://www.company.com"
                    />
                    <SelectField
                      label="Company Size"
                      name="companySize"
                      options={[
                        { value: "1-10", label: "1-10 employees" },
                        { value: "11-50", label: "11-50 employees" },
                        { value: "51-200", label: "51-200 employees" },
                        { value: "201-500", label: "201-500 employees" },
                        { value: "501-1000", label: "501-1000 employees" },
                        { value: "1000+", label: "1000+ employees" },
                      ]}
                    />
                    <SelectField
                      label="Company Type"
                      name="companyType"
                      options={[
                        { value: "startup", label: "Startup" },
                        { value: "small-business", label: "Small Business" },
                        { value: "corporation", label: "Corporation" },
                        { value: "non-profit", label: "Non-Profit" },
                        { value: "government", label: "Government" },
                        { value: "agency", label: "Agency" },
                      ]}
                    />
                  </div>

                  <div className="mt-8">
                    <TextAreaField
                      label="Company Description"
                      name="companyDescription"
                      placeholder="Tell us about your company, its mission, and culture..."
                      rows={4}
                    />
                  </div>
                </section>

                {/* Job Details */}
                <section className="border-l-4 border-black pl-8">
                  <div className="flex items-center gap-3 mb-8">
                    <FileText className="text-black" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">
                      Job Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputField
                      label="Job Title"
                      name="jobTitle"
                      required
                      placeholder="e.g., Senior Software Engineer"
                    />
                    <SelectField
                      label="Job Category"
                      name="jobCategory"
                      required
                      options={[
                        { value: "engineering", label: "Engineering" },
                        { value: "design", label: "Design" },
                        { value: "product", label: "Product" },
                        { value: "marketing", label: "Marketing" },
                        { value: "sales", label: "Sales" },
                        { value: "hr", label: "Human Resources" },
                        { value: "finance", label: "Finance" },
                        { value: "operations", label: "Operations" },
                        {
                          value: "customer-service",
                          label: "Customer Service",
                        },
                        { value: "other", label: "Other" },
                      ]}
                    />
                    <SelectField
                      label="Job Type"
                      name="jobType"
                      required
                      options={[
                        { value: "full-time", label: "Full-time" },
                        { value: "part-time", label: "Part-time" },
                        { value: "contract", label: "Contract" },
                        { value: "freelance", label: "Freelance" },
                        { value: "internship", label: "Internship" },
                        { value: "temporary", label: "Temporary" },
                      ]}
                    />
                    <SelectField
                      label="Work Mode"
                      name="workMode"
                      options={[
                        { value: "onsite", label: "On-site" },
                        { value: "remote", label: "Remote" },
                        { value: "hybrid", label: "Hybrid" },
                      ]}
                    />
                    <SelectField
                      label="Experience Level"
                      name="experienceLevel"
                      required
                      options={[
                        { value: "entry", label: "Entry Level (0-2 years)" },
                        { value: "mid", label: "Mid Level (2-5 years)" },
                        { value: "senior", label: "Senior Level (5-8 years)" },
                        { value: "lead", label: "Lead Level (8+ years)" },
                        { value: "executive", label: "Executive Level" },
                      ]}
                    />
                    <InputField
                      label="Job Location"
                      name="jobLocation"
                      required
                      placeholder="e.g., New York, NY or Remote"
                    />
                  </div>

                  {/* Salary Section */}
                  <div className="mt-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-6">
                      <DollarSign className="text-green-600" size={24} />
                      <h3 className="text-xl font-semibold text-gray-800">
                        Salary Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <SelectField
                        label="Salary Type"
                        name="salaryType"
                        options={[
                          { value: "range", label: "Salary Range" },
                          { value: "fixed", label: "Fixed Salary" },
                          { value: "negotiable", label: "Negotiable" },
                          { value: "undisclosed", label: "Undisclosed" },
                        ]}
                      />
                      <SelectField
                        label="Currency"
                        name="currency"
                        options={[
                          { value: "USD", label: "USD ($)" },
                          { value: "EUR", label: "EUR (€)" },
                          { value: "GBP", label: "GBP (£)" },
                          { value: "INR", label: "INR (₹)" },
                        ]}
                      />
                      {formData.salaryType === "range" && (
                        <>
                          <InputField
                            label="Minimum Salary"
                            name="salaryMin"
                            type="number"
                            placeholder="50000"
                          />
                          <InputField
                            label="Maximum Salary"
                            name="salaryMax"
                            type="number"
                            placeholder="80000"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/* Job Requirements */}
                <section className="border-l-4 border-red-500 pl-8">
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="text-red-500" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">
                      Job Requirements
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <TextAreaField
                      label="Job Description"
                      name="jobDescription"
                      required
                      placeholder="Provide a detailed description of the job role, what the candidate will be doing, and what success looks like..."
                      rows={6}
                    />
                    <TextAreaField
                      label="Key Responsibilities"
                      name="responsibilities"
                      placeholder="List the main responsibilities and duties for this role..."
                      rows={5}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <TextAreaField
                        label="Required Skills"
                        name="requiredSkills"
                        required
                        placeholder="e.g., JavaScript, React, Node.js, SQL..."
                        rows={4}
                      />
                      <TextAreaField
                        label="Preferred Skills"
                        name="preferredSkills"
                        placeholder="e.g., AWS, Docker, TypeScript..."
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <SelectField
                        label="Education Requirement"
                        name="education"
                        options={[
                          { value: "high-school", label: "High School" },
                          { value: "associate", label: "Associate's Degree" },
                          { value: "bachelor", label: "Bachelor's Degree" },
                          { value: "master", label: "Master's Degree" },
                          { value: "phd", label: "PhD" },
                          {
                            value: "none",
                            label: "No Formal Education Required",
                          },
                        ]}
                      />
                      <InputField
                        label="Years of Experience"
                        name="experience"
                        placeholder="e.g., 3-5 years"
                      />
                    </div>
                    <TextAreaField
                      label="Benefits & Perks"
                      name="benefits"
                      placeholder="e.g., Health insurance, 401k, flexible hours, remote work options..."
                      rows={4}
                    />
                  </div>
                </section>

                {/* Application Details */}
                <section className="border-l-4 border-black pl-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Clock className="text-black" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">
                      Application Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputField
                      label="Application Deadline"
                      name="applicationDeadline"
                      type="date"
                      required
                    />
                    <InputField
                      label="Contact Email"
                      name="contactEmail"
                      type="email"
                      required
                      placeholder="hr@company.com"
                    />
                    <div className="lg:col-span-2">
                      <InputField
                        label="Application URL (Optional)"
                        name="applicationUrl"
                        type="url"
                        placeholder="https://company.com/careers/apply"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="mt-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="urgentHiring"
                        name="urgentHiring"
                        checked={formData.urgentHiring}
                        onChange={handleChange}
                        className="w-6 h-6 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label
                        htmlFor="urgentHiring"
                        className="text-base font-medium text-gray-700"
                      >
                        🚨 Urgent Hiring (This job will be marked as urgent)
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="remoteOk"
                        name="remoteOk"
                        checked={formData.remoteOk}
                        onChange={handleChange}
                        className="w-6 h-6 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label
                        htmlFor="remoteOk"
                        className="text-base font-medium text-gray-700"
                      >
                        🌍 Remote candidates welcome
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="verified"
                        name="verified"
                        checked={formData.verified}
                        onChange={handleChange}
                        className="w-6 h-6 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label
                        htmlFor="verified"
                        className="text-base font-medium text-gray-700"
                      >
                        ✅ I confirm that all information provided is accurate
                      </label>
                    </div>
                  </div>
                </section>
              </div>

              {/* Submit Button */}
              <div className="bg-gray-50 px-8 md:px-12 py-8 border-t border-gray-200">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-xl shadow-xl hover:from-red-700 hover:to-gray-900 focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Posting Job...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Users size={24} />
                        Post Job Now
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingForm;
