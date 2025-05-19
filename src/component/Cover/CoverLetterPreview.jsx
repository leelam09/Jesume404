"use client";

import { useRef } from "react";
import Professional from "@/component/Cover/templates/Professional";
import Minimal from "@/component/Cover/templates/Minimal";
import Modern from "@/component/Cover/templates/Modern";
import Creative from "@/component/Cover/templates/Creative";
import Elegant from "@/component/Cover/templates/Elegant";

export default function CoverLetterPreview({
  coverLetterData,
  selectedTemplate,
}) {
  const coverLetterRef = useRef(null);

  // Ensure coverLetterData has fallback values to prevent errors
  const safeData = {
    personalInfo: coverLetterData?.personalInfo || {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      profileImage: null,
      linkedin: "",
      website: "",
    },
    recipientInfo: coverLetterData?.recipientInfo || {
      name: "",
      title: "",
      company: "",
      address: "",
    },
    letterSections: coverLetterData?.letterSections || {
      salutation: "",
      introduction: "",
      mainContent: "",
      closing: "",
    },
  };

  // This function downloads the cover letter as a PDF
  const downloadPDF = async () => {
    try {
      const { toCanvas } = await import("html-to-image");
      const { jsPDF } = await import("jspdf");

      const element = coverLetterRef.current;
      if (!element) throw new Error("Cover letter element not found");

      // Show loading state
      const downloadBtn = document.getElementById("cover-letter-download-btn");
      const originalText = downloadBtn.innerText;
      downloadBtn.innerText = "Generating...";
      downloadBtn.disabled = true;

      // Using toCanvas for higher quality rendering
      const canvas = await toCanvas(element, {
        quality: 1,
        pixelRatio: 4,
        backgroundColor: "#ffffff",
        skipFonts: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      // Create PDF with higher DPI
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
        hotfixes: ["px_scaling"],
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Add image to PDF with better quality settings
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST"
      );

      // Add clickable links to the PDF
      await addClickableLinks(pdf, safeData);

      // Save the PDF with a fallback filename
      const fileName = safeData.personalInfo.name?.trim()
        ? `${safeData.personalInfo.name.replace(/\s+/g, "_")}_cover_letter.pdf`
        : "cover_letter.pdf";
      pdf.save(fileName);

      // Reset button state
      downloadBtn.innerText = originalText;
      downloadBtn.disabled = false;
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");

      // Reset button on error
      const downloadBtn = document.getElementById("cover-letter-download-btn");
      if (downloadBtn) {
        downloadBtn.innerText = "Download PDF";
        downloadBtn.disabled = false;
      }
    }
  };

  // Add clickable links to the PDF (email, linkedin, website)
  const addClickableLinks = async (pdf, data) => {
    try {
      const element = coverLetterRef.current;
      if (!element) return;

      // Get all links in the cover letter
      const links = element.querySelectorAll("a[href]");

      // Calculate the scale factors between screen and PDF
      const elementRect = element.getBoundingClientRect();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const scaleX = pdfWidth / elementRect.width;
      const scaleY = pdfHeight / elementRect.height;

      // Process each link
      links.forEach((link) => {
        if (!link.href) return;

        // Get link position relative to the cover letter container
        const linkRect = link.getBoundingClientRect();
        const offsetX = linkRect.left - elementRect.left;
        const offsetY = linkRect.top - elementRect.top;

        // Convert to PDF coordinates
        const x = offsetX * scaleX;
        const y = offsetY * scaleY;
        const width = linkRect.width * scaleX;
        const height = linkRect.height * scaleY;

        // Add clickable area to PDF
        const url = ensureHttps(link.href);
        pdf.link(x, y, width, height, { url });
      });
    } catch (error) {
      console.error("Error adding clickable links:", error);
    }
  };

  // Helper to ensure URLs have http/https
  const ensureHttps = (url) => {
    if (!url) return "";

    try {
      new URL(url);
      return url;
    } catch (e) {
      if (!url.startsWith("http")) {
        return `https://${url}`;
      }
      return url;
    }
  };

  // Function to determine which template to render
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <Modern coverLetterData={safeData} />;
      case "professional":
        return <Professional coverLetterData={safeData} />;
      case "creative":
        return <Creative coverLetterData={safeData} />;
      case "elegant":
        return <Elegant coverLetterData={safeData} />;
      case "minimal":
        return <Minimal coverLetterData={safeData} />;
      default:
        return <Modern coverLetterData={safeData} />;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-gray-700">
      <div className="p-2 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium">Cover Letter Preview</h3>
        <button
          id="cover-letter-download-btn"
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm transition-colors"
        >
          Download PDF
        </button>
      </div>

      {/* The actual cover letter preview with improved scaling and text size */}
      <div
        className="w-full overflow-auto overflow-x-hidden"
        style={{ height: "calc(100vh - 150px)" }}
      >
        {/* Full-size container with larger text */}
        <div
          ref={coverLetterRef}
          className="mx-auto"
          style={{
            width: "199mm", // A4 width
            minHeight: "297mm", // A4 height
            fontSize: "16px", // Increased base font size
            lineHeight: "1.5",
            backgroundColor: "white",
            boxSizing: "border-box",
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}
