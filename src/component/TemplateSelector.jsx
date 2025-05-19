"use client";

import { useState } from "react";

export default function TemplateSelector({
  selectedTemplate,
  setSelectedTemplate,
  templates = [],
}) {
  // Get current template
  const currentTemplate =
  templates.find((t) => t.id === selectedTemplate) || templates[0] || {};
  

  return (
    <div className="w-64 relative text-gray-700">
      {/* Dot background with radial gradient overlay */}
      <div
        className="
    absolute inset-0 -z-10 bg-white
    [background-size:20px_20px]
  "
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Template
      </label>

      {/* Preview of current template */}
      <div className="mb-3 border rounded-md overflow-hidden shadow-sm">
        <div
          style={{
            backgroundColor: currentTemplate.color,
            height: "8px",
          }}
        />
        <div className="p-3">
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: currentTemplate.color }}
            />
            <strong className="text-sm">{currentTemplate.name}</strong>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {currentTemplate.description}
          </p>
        </div>
      </div>

      <select
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  );
}
