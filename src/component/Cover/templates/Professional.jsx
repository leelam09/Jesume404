import Link from 'next/link';

export default function Professional({ coverLetterData = {} }) {
  const {
    personalInfo = {},
    recipientInfo = {},
    letterSections = {},
  } = coverLetterData;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#2c3e50',
        maxWidth: '720px',
        padding: '30px 40px',
        backgroundColor: '#fff',
        display: 'flex',
        gap: '30px',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          flexBasis: '180px',
          borderRight: '3px solid #2980b9',
          paddingRight: '20px',
          color: '#2980b9',
        }}
      >
        <h1 style={{ fontSize: '26px', margin: '0 0 12px', fontWeight: '700' }}>
          {personalInfo.name || 'Your Name'}
        </h1>
        <h3 style={{ fontWeight: '600', marginTop: 0, marginBottom: '20px' }}>
          {personalInfo.title || 'Your Title'}
        </h3>
        <p style={{ margin: '6px 0', fontSize: '14px' }}>
          <Link
            href={`mailto:${personalInfo.email || 'your.email@example.com'}`}
            style={{ color: '#2980b9', textDecoration: 'none' }}
          >
            {personalInfo.email || 'your.email@example.com'}
          </Link>
        </p>
        <p style={{ margin: '6px 0', fontSize: '14px' }}>
          {personalInfo.phone || '(123) 456-7890'}
        </p>
        <p style={{ margin: '6px 0', fontSize: '14px' }}>
          {personalInfo.location || 'City, State'}
        </p>
        <p
          style={{
            marginTop: '20px',
            fontSize: '13px',
            color: '#7f8c8d',
          }}
        >
          Date: {personalInfo.date || 'Current Date'}
        </p>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {/* Recipient */}
        <section
          style={{ marginBottom: '25px', fontSize: '15px', color: '#34495e' }}
        >
          <p>{recipientInfo.name || 'Recipient Name'}</p>
          <p>{recipientInfo.title || 'Recipient Title'}</p>
          <p>{recipientInfo.company || 'Company Name'}</p>
          <p>{recipientInfo.address || 'Company Address, City, ST 12345'}</p>
        </section>

        {/* Salutation */}
        <p
          style={{
            fontWeight: '600',
            marginBottom: '25px',
            fontSize: '16px',
            color: '#2980b9',
          }}
        >
          {letterSections.salutation || 'Dear Hiring Manager,'}
        </p>

        {/* Letter Body */}
        <p
          style={{
            marginBottom: '18px',
            fontSize: '15px',
            lineHeight: '1.6',
            textAlign: 'justify',
          }}
        >
          {letterSections.introduction ||
            "I am writing to express my interest in the [POSITION] role at [COMPANY]. With my background in [FIELD/EXPERTISE] and passion for [RELEVANT SKILL/INDUSTRY], I believe I would be a valuable addition to your team."}
        </p>
        <p
          style={{
            marginBottom: '18px',
            fontSize: '15px',
            lineHeight: '1.6',
            textAlign: 'justify',
          }}
        >
          {letterSections.mainContent ||
            "Throughout my career, I have developed strong skills in [KEY SKILL 1], [KEY SKILL 2], and [KEY SKILL 3]. At [PREVIOUS COMPANY], I successfully [ACHIEVEMENT WITH METRICS IF POSSIBLE]. My experience with [RELEVANT EXPERIENCE] has prepared me well for the challenges and opportunities at [COMPANY]."}
        </p>
        <p
          style={{
            marginBottom: '18px',
            fontSize: '15px',
            lineHeight: '1.6',
            textAlign: 'justify',
          }}
        >
          {letterSections.closing ||
            "I am excited about the opportunity to bring my unique skills and experiences to [COMPANY]. Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team's success."}
        </p>

        {/* Signature */}
        <div style={{ marginTop: '40px', fontSize: '15px' }}>
          <p style={{ margin: 0, fontWeight: '600' }}>Sincerely,</p>
          <p
            style={{
              marginTop: '10px',
              fontWeight: '700',
              color: '#2980b9',
            }}
          >
            {personalInfo.name || 'Your Name'}
          </p>
        </div>
      </main>
    </div>
  );
}
