// "use client";
// import { useState } from "react";
// import Head from "next/head";

// export default function ProfileForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     educationLevel: "",
//     graduationYear: "",
//     institution: "",
//     major: "",
//     jobRole: "",
//     skills: "",
//     experience: "",
//     projects: "",
//     certifications: "",
//     linkedin: "",
//     github: "",
//     portfolio: "",
//     resume: null,
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.educationLevel)
//       newErrors.educationLevel = "Education level is required";
//     if (!formData.jobRole) newErrors.jobRole = "Desired job role is required";
//     if (!formData.skills) newErrors.skills = "Skills are required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       // Here you would typically send the data to your backend
//       console.log("Form submitted:", formData);
//     }
//   };

//   if (submitSuccess) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-red-600 text-center">
//           <h2 className="text-2xl font-bold text-red-600 mb-4">
//             Profile Submitted Successfully!
//           </h2>
//           <p className="text-black mb-6">
//             Thank you for completing your profile. We'll review your information
//             and get back to you soon.
//           </p>
//           <button
//             onClick={() => setSubmitSuccess(false)}
//             className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>Job Seeker Profile Form</title>
//         <meta name="description" content="Complete your job seeker profile" />
//       </Head>

//       <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
//               Job Seeker Profile
//             </h1>
//             <p className="mt-3 text-lg text-gray-700">
//               Complete your profile to increase your job opportunities
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="bg-white shadow rounded-lg p-6 border border-red-600">
//               <h2 className="text-xl font-bold text-red-600 mb-6 border-b border-red-600 pb-2">
//                 Personal Information
//               </h2>

//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-black"
//                   >
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.firstName ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                   />
//                   {errors.firstName && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.lastName ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                   />
//                   {errors.lastName && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6 border border-red-600">
//               <h2 className="text-xl font-bold text-red-600 mb-6 border-b border-red-600 pb-2">
//                 Education Details
//               </h2>

//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="educationLevel"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Highest Education Level *
//                   </label>
//                   <select
//                     id="educationLevel"
//                     name="educationLevel"
//                     value={formData.educationLevel}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.educationLevel
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                   >
//                     <option value="">Select education level</option>
//                     <option value="high_school">High School</option>
//                     <option value="diploma">Diploma</option>
//                     <option value="bachelor">Bachelor's Degree</option>
//                     <option value="master">Master's Degree</option>
//                     <option value="phd">PhD</option>
//                     <option value="other">Other</option>
//                   </select>
//                   {errors.educationLevel && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.educationLevel}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="graduationYear"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Graduation Year
//                   </label>
//                   <input
//                     type="number"
//                     id="graduationYear"
//                     name="graduationYear"
//                     min="1900"
//                     max="2099"
//                     value={formData.graduationYear}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="institution"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Institution Name
//                   </label>
//                   <input
//                     type="text"
//                     id="institution"
//                     name="institution"
//                     value={formData.institution}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="major"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Major/Field of Study
//                   </label>
//                   <input
//                     type="text"
//                     id="major"
//                     name="major"
//                     value={formData.major}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6 border border-red-600">
//               <h2 className="text-xl font-bold text-red-600 mb-6 border-b border-red-600 pb-2">
//                 Professional Information
//               </h2>

//               <div className="grid grid-cols-1 gap-6">
//                 <div>
//                   <label
//                     htmlFor="jobRole"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Desired Job Role *
//                   </label>
//                   <input
//                     type="text"
//                     id="jobRole"
//                     name="jobRole"
//                     value={formData.jobRole}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.jobRole ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                     placeholder="e.g., Frontend Developer, Data Analyst"
//                   />
//                   {errors.jobRole && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {errors.jobRole}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="skills"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Skills (comma separated) *
//                   </label>
//                   <textarea
//                     id="skills"
//                     name="skills"
//                     rows={3}
//                     value={formData.skills}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border ${
//                       errors.skills ? "border-red-500" : "border-gray-300"
//                     } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
//                     placeholder="e.g., JavaScript, React, Python, SQL"
//                   />
//                   {errors.skills && (
//                     <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="experience"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Work Experience (if any)
//                   </label>
//                   <textarea
//                     id="experience"
//                     name="experience"
//                     rows={4}
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="Describe your previous work experience, including company names, positions, and duration"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="projects"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Projects
//                   </label>
//                   <textarea
//                     id="projects"
//                     name="projects"
//                     rows={4}
//                     value={formData.projects}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="Describe any relevant projects you've worked on"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="certifications"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Certifications
//                   </label>
//                   <textarea
//                     id="certifications"
//                     name="certifications"
//                     rows={3}
//                     value={formData.certifications}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="List any professional certifications you've earned"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6 border border-red-600">
//               <h2 className="text-xl font-bold text-red-600 mb-6 border-b border-red-600 pb-2">
//                 Online Presence
//               </h2>

//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="linkedin"
//                     className="block text-sm font-medium text-black"
//                   >
//                     LinkedIn Profile
//                   </label>
//                   <input
//                     type="url"
//                     id="linkedin"
//                     name="linkedin"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="https://linkedin.com/in/yourprofile"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="github"
//                     className="block text-sm font-medium text-black"
//                   >
//                     GitHub Profile
//                   </label>
//                   <input
//                     type="url"
//                     id="github"
//                     name="github"
//                     value={formData.github}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="https://github.com/yourusername"
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="portfolio"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Portfolio Website
//                   </label>
//                   <input
//                     type="url"
//                     id="portfolio"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="resume"
//                     className="block text-sm font-medium text-black"
//                   >
//                     Upload Resume (PDF)
//                   </label>
//                   <input
//                     type="file"
//                     id="resume"
//                     name="resume"
//                     onChange={handleChange}
//                     accept=".pdf"
//                     className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Submitting..." : "Complete Profile"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  FileText,
  Calendar,
  DollarSign,
} from "lucide-react";

export default function JobSeekerForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",

    // Education
    highestEducation: "",
    graduationYear: "",
    university: "",
    degree: "",
    gpa: "",

    // Professional Information
    currentJobTitle: "",
    currentCompany: "",
    totalExperience: "",
    desiredJobRole: "",
    desiredIndustry: "",
    expectedSalary: "",
    noticePeriod: "",

    // Skills and Additional Info
    technicalSkills: "",
    softSkills: "",
    certifications: "",
    languages: "",
    linkedinProfile: "",
    portfolioWebsite: "",
    summary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Profile saved successfully! Check console for details.");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      dateOfBirth: "",
      highestEducation: "",
      graduationYear: "",
      university: "",
      degree: "",
      gpa: "",
      currentJobTitle: "",
      currentCompany: "",
      totalExperience: "",
      desiredJobRole: "",
      desiredIndustry: "",
      expectedSalary: "",
      noticePeriod: "",
      technicalSkills: "",
      softSkills: "",
      certifications: "",
      languages: "",
      linkedinProfile: "",
      portfolioWebsite: "",
      summary: "",
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">
            Job Seeker Profile
          </h1>
          <p className="text-gray-600">
            Complete your profile to attract potential employers
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  State/Province
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  ZIP/Postal Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  Highest Education Level *
                </label>
                <select
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Graduation Year *
                </label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  min="1950"
                  max="2030"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  University/Institution
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Degree/Major
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  GPA (Optional)
                </label>
                <input
                  type="number"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">
                Professional Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  Current Job Title
                </label>
                <input
                  type="text"
                  name="currentJobTitle"
                  value={formData.currentJobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Total Experience
                </label>
                <select
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                >
                  <option value="">Select Experience</option>
                  <option value="Fresher">Fresher (0 years)</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Desired Job Role *
                </label>
                <input
                  type="text"
                  name="desiredJobRole"
                  value={formData.desiredJobRole}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Desired Industry
                </label>
                <select
                  name="desiredIndustry"
                  value={formData.desiredIndustry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Expected Salary (Annual)
                </label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  placeholder="e.g., $50,000 - $60,000"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Notice Period
                </label>
                <select
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                >
                  <option value="">Select Notice Period</option>
                  <option value="Immediate">Immediate</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Skills and Additional Information Section */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">
                Skills & Additional Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  Technical Skills *
                </label>
                <textarea
                  name="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., JavaScript, React, Python, SQL, AWS..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Soft Skills
                </label>
                <textarea
                  name="softSkills"
                  value={formData.softSkills}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., Leadership, Communication, Problem-solving..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-medium mb-2">
                    Certifications
                  </label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="List your certifications..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">
                    Languages
                  </label>
                  <textarea
                    name="languages"
                    value={formData.languages}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="e.g., English (Native), Spanish (Fluent)..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-medium mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/your-profile"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">
                    Portfolio Website
                  </label>
                  <input
                    type="url"
                    name="portfolioWebsite"
                    value={formData.portfolioWebsite}
                    onChange={handleInputChange}
                    placeholder="https://your-portfolio.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">
                  Professional Summary
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Write a brief summary about yourself, your experience, and career goals..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors transform hover:scale-105 shadow-lg"
            >
              Save Profile
            </button>

            <button
              onClick={handleReset}
              className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105 shadow-lg"
            >
              Reset Form
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            Complete your profile to increase your chances of getting hired!
          </p>
        </div>
      </div>
    </div>
  );
}