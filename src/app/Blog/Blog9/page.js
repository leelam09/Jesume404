import RecruiterAIResumeInsights from '@/component/Blog/Blog7'
import Footer from '@/component/Footer';
import JobNavBar from '@/component/Jobportal/JobNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <div><JobNavBar/></div>
      <div>
        <RecruiterAIResumeInsights />
      </div>
    </div>
  );
}

export default page