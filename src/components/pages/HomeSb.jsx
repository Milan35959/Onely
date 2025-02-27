import React from 'react'
import './homeSb.css'
import HomeSbf from './homeSbf'
const HomeSb = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='containarea'>
            <div className='containbox'>
                <div className='textBox'>
                    <h4>What is Onely?</h4>
                    <div className='paragraph'>Onely simplifies the complexities of care management</div>
                </div>
                    <div id='table'>

                         <HomeSbf title='Rostering:' Para='Effortlessly create and manage staff schedules to ensure optimal staffing levels.'/>
                         <HomeSbf title='Integration:' Para='Connect with NDIS, HCP, and other funding sources, and integrate with third-party applications for a smooth workflow.'/>
                         <HomeSbf title='Invoicing:' Para='Streamline billing with automated tools, ensuring accurate, timely invoicing and seamless Xero integration.'/>
                         <HomeSbf title='HR Management:' Para='Track staff certifications, set reminders for expiring training, and manage leave and availability.'/>
                         <HomeSbf title='Care Management:' Para='Plan and coordinate care services effectively for comprehensive client support.'/>
                         <HomeSbf title='Client Records Management:' Para='Securely store and access client information, keeping records up-to-date with ease.'/>
                         <HomeSbf title='Staff Onboarding:' Para='Simplify hiring, ensuring new staff are prepared with necessary qualifications and skills.'/>
                         <HomeSbf title='Goal/Journey Tracking:' Para='Monitor client progress and outcomes, offering personalized support tailored to individual needs.'/>

                    </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeSb
