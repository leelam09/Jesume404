// components/CoverLetterPreview.jsx

export default function CoverLetterPreview({ formData, template }) {
  const renderModernTemplate = () => {
    return (
      <div className="bg-white font-sans p-8 max-w-3xl mx-auto border border-gray-200 shadow-sm rounded">
        <div className="border-b-2 border-blue-500 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{formData.fullName || 'Your Name'}</h1>
          <div className="text-gray-600 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {formData.email && (
              <span>{formData.email}</span>
            )}
            {formData.phone && (
              <span>{formData.phone}</span>
            )}
            {formData.address && (
              <span>{formData.address}</span>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-gray-600">{formData.date}</div>
          <div className="mt-4 font-medium">{formData.recipientName || 'Hiring Manager'}</div>
          <div>{formData.companyName || 'Company Name'}</div>
        </div>
        
        <div className="mb-4">
          <p className="font-medium">Re: Application for {formData.jobTitle || 'Position'}</p>
        </div>
        
        <div className="mb-4">
          <p className="mb-4">Dear {formData.recipientName || 'Hiring Manager'},</p>
          <p className="mb-4">{formData.introduction || 'I am writing to express my interest in the position at your company.'}</p>
          <p className="mb-4">{formData.skills || 'I have a background in relevant skills and qualifications that make me a strong candidate for this role.'}</p>
          <p className="mb-4">{formData.experience || 'My professional experience includes relevant achievements that align with the requirements of this position.'}</p>
          <p className="mb-4">{formData.closing || 'Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to your team.'}</p>
        </div>
        
        <div className="mt-8">
          <p className="mb-4">Sincerely,</p>
          <p className="font-medium">{formData.fullName || 'Your Name'}</p>
        </div>
      </div>
    );
  };

  const renderClassicTemplate = () => {
    return (
      <div className="bg-white font-serif p-8 max-w-3xl mx-auto border border-gray-200 shadow-sm rounded">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{formData.fullName || 'Your Name'}</h1>
          <div className="text-gray-600 text-sm">
            {formData.email && (
              <div>{formData.email}</div>
            )}
            {formData.phone && (
              <div>{formData.phone}</div>
            )}
            {formData.address && (
              <div>{formData.address}</div>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-right">{formData.date}</div>
          <div className="mt-4 font-medium">{formData.recipientName || 'Hiring Manager'}</div>
          <div>{formData.companyName || 'Company Name'}</div>
        </div>
        
        <div className="mb-4">
          <p className="font-medium">Subject: Application for {formData.jobTitle || 'Position'}</p>
        </div>
        
        <div className="mb-4">
          <p className="mb-4">Dear {formData.recipientName || 'Hiring Manager'},</p>
          <p className="mb-4 indent-8">{formData.introduction || 'I am writing to express my interest in the position at your company.'}</p>
          <p className="mb-4 indent-8">{formData.skills || 'I have a background in relevant skills and qualifications that make me a strong candidate for this role.'}</p>
          <p className="mb-4 indent-8">{formData.experience || 'My professional experience includes relevant achievements that align with the requirements of this position.'}</p>
          <p className="mb-4 indent-8">{formData.closing || 'Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to your team.'}</p>
        </div>
        
        <div className="mt-8">
          <p className="mb-4">Respectfully,</p>
          <p className="font-medium">{formData.fullName || 'Your Name'}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      {template === 'modern' ? renderModernTemplate() : renderClassicTemplate()}
    </div>
  );
}