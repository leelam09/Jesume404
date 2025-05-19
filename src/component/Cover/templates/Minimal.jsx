"use client";

import Link from 'next/link';

export default function Minimal({ coverLetterData = {} }) {
  const {
    personalInfo = {},
    recipientInfo = {},
    letterSections = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
  } = coverLetterData;

  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#222', maxWidth: '700px', margin: 'auto', padding: '30px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '28px', letterSpacing: '1px', margin: 0 }}>
          <span style={{ fontWeight: 'normal' }}>{(personalInfo.name || 'FULL NAME').toUpperCase()}</span>
        </h1>
        
        <h2 style={{ fontSize: '18px', letterSpacing: '0.5px', fontWeight: 'normal', margin: '4px 0' }}>
          <span style={{ fontWeight: 'bold' }}>{personalInfo.title || 'PROFESSIONAL TITLE'}</span>
        </h2>

        <p style={{ fontSize: '14px', margin: '4px 0' }}>
          <span>{personalInfo.location || 'City, State'} · </span>
          <span>{personalInfo.phone || '(123) 456-7890'} · </span>
          <Link href={`mailto:${personalInfo.email || 'your.email@example.com'}`} style={{ color: '#059669' }}>
            {personalInfo.email || 'your.email@example.com'}
          </Link>
        </p>
      </div>

      {/* Divider */}
      <hr style={{ borderTop: '1px solid #ccc', marginBottom: '20px' }} />
      <p style={{ fontSize: '14px', margin: '4px 0' }}>
        <span>{personalInfo.date || 'Current Date'}</span>
      </p>

      {/* Recipient Info */}
      <div style={{ marginBottom: '20px', fontSize: '14px' }}>
        <p>{recipientInfo.name || 'Recipient Name'}</p>
        <p>{recipientInfo.title || 'Recipient Title'}</p>
        <p>{recipientInfo.company || 'Company Name'}</p>
        <p>{recipientInfo.address || 'Company Address, City, ST 12345'}</p>
      </div>

      {/* Salutation */}
      <p style={{ color: '#059669', fontWeight: 'bold', marginBottom: '15px' }}>
        {letterSections.salutation || 'Dear Hiring Manager,'}
      </p>

      {/* Introduction */}
      <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
        {letterSections.introduction || 
         "I am writing to express my interest in the [POSITION] role at [COMPANY]. With my background in [FIELD/EXPERTISE] and passion for [RELEVANT SKILL/INDUSTRY], I believe I would be a valuable addition to your team."}
      </p>

      {/* Main Content */}
      <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
        {letterSections.mainContent || 
         "Throughout my career, I have developed strong skills in [KEY SKILL 1], [KEY SKILL 2], and [KEY SKILL 3]. At [PREVIOUS COMPANY], I successfully [ACHIEVEMENT WITH METRICS IF POSSIBLE]. My experience with [RELEVANT EXPERIENCE] has prepared me well for the challenges and opportunities at [COMPANY]."}
      </p>

      {/* Closing */}
      <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
        {letterSections.closing || 
         "I am excited about the opportunity to bring my unique skills and experiences to [COMPANY]. Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team's success."}
      </p>

      {/* Signature */}
      <div style={{ marginTop: '20px' }}>
        <p>Sincerely,</p>
        <p>{personalInfo.name || 'FULL NAME'}</p>
      </div>
    </div>
  );
}