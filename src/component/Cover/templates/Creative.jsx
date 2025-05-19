"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, CalendarDays } from 'lucide-react';

export default function Creative({ coverLetterData = {} }) {
  const {
    personalInfo = {},
    recipientInfo = {},
    letterSections = {},
  } = coverLetterData;

  return (
    <div style={{
      fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
      color: '#1F1F1F',
      maxWidth: '750px',
      padding: '40px',
      borderLeft: '6px solid #6D28D9',
    }}>
      {/* Header */}
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px', color: '#4B0082' }}>
          {personalInfo.name || 'FULL NAME'}
        </h1>
        <h2 style={{ fontSize: '16px', fontWeight: 'normal', marginBottom: '10px', color: '#6D28D9' }}>
          {personalInfo.title || 'PROFESSIONAL TITLE'}
        </h2>
        <div style={{ fontSize: '14px', color: '#444', lineHeight: '1.5' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={14} /> 
            <Link href={`mailto:${personalInfo.email || 'your.email@example.com'}`} style={{ color: '#4B0082' }}>
              {personalInfo.email || 'your.email@example.com'}
            </Link>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={14} /> {personalInfo.phone || '(123) 456-7890'}
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} /> {personalInfo.location || 'City, State'}
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CalendarDays size={14} /> {personalInfo.date || 'Current Date'}
          </p>
        </div>
      </header>

      {/* Recipient Info */}
      <section style={{ marginBottom: '20px', fontSize: '14px', color: '#333' }}>
        <p><strong>{recipientInfo.name || 'Recipient Name'}</strong></p>
        <p>{recipientInfo.title || 'Recipient Title'}</p>
        <p>{recipientInfo.company || 'Company Name'}</p>
        <p>{recipientInfo.address || 'Company Address, City, ST 12345'}</p>
      </section>

      {/* Salutation */}
      <p style={{ fontWeight: '600', color: '#4B0082', marginBottom: '16px' }}>
        {letterSections.salutation || 'Dear Hiring Manager,'}
      </p>

      {/* Letter Content */}
      <section style={{ fontSize: '15px', color: '#222', textAlign: 'justify' }}>
        <p style={{ marginBottom: '16px' }}>
          {letterSections.introduction || 
           "Opening paragraph introducing yourself and stating the position you're applying for. Share how you discovered the opportunity and express your enthusiasm for the role and organization."}
        </p>
        <p style={{ marginBottom: '16px' }}>
          {letterSections.mainContent || 
           "Middle paragraphs highlighting your relevant skills, accomplishments, and experiences that qualify you for this position. Connect your background with the company's needs and demonstrate your understanding of their mission and values."}
        </p>
        <p style={{ marginBottom: '16px' }}>
          {letterSections.closing || 
           "Concluding paragraph reiterating your interest in the position and organization. Thank them for considering your application and express your desire to discuss your qualifications further in an interview."}
        </p>
      </section>

      {/* Signature */}
      <footer style={{ marginTop: '30px' }}>
        <p>Sincerely,</p>
        <p>{personalInfo.name || 'FULL NAME'}</p>
      </footer>
    </div>
  );
}