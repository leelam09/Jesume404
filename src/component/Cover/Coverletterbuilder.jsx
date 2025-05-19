"use-client";

 import React, { useState } from "react";
 import { CoverLetterTemplate } from "./CoverLetterTemplates";
 import html2pdf from "html2pdf.js";

 const CoverLetterBuilder = () => {
   const [formData, setFormData] = useState({
     fullName: "",
     jobTitle: "",
     companyName: "",
     skills: "",
     experience: "",
     templateStyle: "minimal",
   });

   const [previewMode, setPreviewMode] = useState < boolean > false;

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     setPreviewMode(true);
   };

   const handleEdit = () => {
     setPreviewMode(false);
   };

   const handleDownloadPDF = () => {
     const element = document.getElementById("cover-letter-preview");
     if (!element) return;

     const opt = {
       margin: 0.5,
       filename: `${formData.fullName.replace(/\s+/g, "_")}_Cover_Letter.pdf`,
       image: { type: "jpeg", quality: 0.98 },
       html2canvas: { scale: 2 },
       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
     };

     html2pdf().set(opt).from(element).save();
   };

   const templateOptions = [
     { value: "minimal", label: "Minimal" },
     { value: "modern", label: "Modern" },
     { value: "formal", label: "Formal" },
     { value: "bold", label: "Bold" },
     { value: "creative", label: "Creative" },
   ];

   return (
     <div className="max-w-6xl mx-auto p-4 md:p-6">
       <h1 className="text-3xl font-bold mb-6 text-center text-red-800">
         Cover Letter Builder
       </h1>

       {!previewMode ? (
         <div className="bg-white rounded-lg shadow-lg p-6">
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label
                   htmlFor="fullName"
                   className="block text-sm font-medium text-gray-700 mb-1"
                 >
                   Full Name
                 </label>
                 <input
                   type="text"
                   id="fullName"
                   name="fullName"
                   required
                   value={formData.fullName}
                   onChange={handleChange}
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 />
               </div>

               <div>
                 <label
                   htmlFor="jobTitle"
                   className="block text-sm font-medium text-gray-700 mb-1"
                 >
                   Job Title
                 </label>
                 <input
                   type="text"
                   id="jobTitle"
                   name="jobTitle"
                   required
                   value={formData.jobTitle}
                   onChange={handleChange}
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 />
               </div>

               <div>
                 <label
                   htmlFor="companyName"
                   className="block text-sm font-medium text-gray-700 mb-1"
                 >
                   Company Name
                 </label>
                 <input
                   type="text"
                   id="companyName"
                   name="companyName"
                   required
                   value={formData.companyName}
                   onChange={handleChange}
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 />
               </div>

               <div>
                 <label
                   htmlFor="templateStyle"
                   className="block text-sm font-medium text-gray-700 mb-1"
                 >
                   Template Style
                 </label>
                 <select
                   id="templateStyle"
                   name="templateStyle"
                   value={formData.templateStyle}
                   onChange={handleChange}
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 >
                   {templateOptions.map((option) => (
                     <option key={option.value} value={option.value}>
                       {option.label}
                     </option>
                   ))}
                 </select>
               </div>
             </div>

             <div>
               <label
                 htmlFor="skills"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Key Skills (comma separated)
               </label>
               <input
                 type="text"
                 id="skills"
                 name="skills"
                 value={formData.skills}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 placeholder="e.g., Project Management, JavaScript, Communication"
               />
             </div>

             <div>
               <label
                 htmlFor="experience"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Relevant Experience
               </label>
               <textarea
                 id="experience"
                 name="experience"
                 rows={5}
                 value={formData.experience}
                 onChange={handleChange}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                 placeholder="Describe your relevant experience and qualifications..."
               />
             </div>

             <div className="flex justify-center">
               <button
                 type="submit"
                 className="px-6 py-3 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
               >
                 Generate Cover Letter
               </button>
             </div>
           </form>
         </div>
       ) : (
         <div className="space-y-6">
           <div className="flex justify-between items-center">
             <button
               onClick={handleEdit}
               className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
             >
               Edit Information
             </button>
             <button
               onClick={handleDownloadPDF}
               className="px-4 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
             >
               Download PDF
             </button>
           </div>

           <div
             id="cover-letter-preview"
             className="border border-gray-300 bg-white rounded-lg overflow-hidden"
           >
             <CoverLetterTemplate
               fullName={formData.fullName}
               jobTitle={formData.jobTitle}
               companyName={formData.companyName}
               skills={formData.skills}
               experience={formData.experience}
               templateStyle={formData.templateStyle}
             />
           </div>
         </div>
       )}
     </div>
   );
 };

 export default CoverLetterBuilder;
