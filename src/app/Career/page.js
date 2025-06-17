import Career from '@/component/Career'
import Footer from '@/component/Footer'
import JobNavBar from '@/component/Jobportal/JobNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <JobNavBar />
      </div>
      <div>
        <Career />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page