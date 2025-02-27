import React from 'react'
import './howF.css'
import HowS from './HowS'
const HowF = () => {
  return (
    <>
      <div className='howcontainer'>
        <div className='howf'>
          <div className='howbox'>
            
            <div className='howTb'>
              <h1>How Onely Works</h1>
              <p>
              Onely revolutionizes care management through a seamless, all-in-one platform designed to simplify your operations. Begin by signing up and setting up your account, where you can easily customize the platform to suit your needs. Onboard your team with efficiency, ensuring they are well-prepared with the necessary qualifications and training. Manage client records securely in one central location, update information with ease, and monitor client progress to provide personalized care. Coordinate care services effectively by planning appointments and tracking goals. Create and manage staff rosters effortlessly to ensure optimal coverage and handle invoicing with automated tools for accurate billing and financial management. Onely also integrates smoothly with funding sources such as NDIS and HCP, and connects with third-party applications to further enhance your workflow.
              </p>
            </div>
            <div className='howimg'>
              <img src="../../../public/bg2.png" alt=" Image unload" />
            </div>
          </div>
            <div className='howS'>
                    <HowS heading='Access Support' boxPara='Our dedicated support team is here to help. Reach out via live chat, email, or phone for assistance with any questions or issues. We’re committed to ensuring your experience with Onely is smooth and effective.'/>
                    <HowS heading='Integrate and Optimize' boxPara='Onely integrates with NDIS, HCP, and other funding sources, allowing for a smooth workflow. Connect with third-party applications to enhance functionality and streamline your operations further.'/>
                    <HowS heading='Handle Invoicing and Payments' boxPara='Streamline your invoicing process with Onely’s automated tools. Generate accurate invoices, manage payments, and integrate seamlessly with Xero for financial management. Ensure timely and error-free billing for the services provided.'/>
                    <HowS heading='Sign Up and Set Up' boxPara='Getting started with Onely is simple. Sign up for an account, select the plan that best fits your needs, and configure your organization’s settings. You can customize the platform to match your specific requirements, including adding staff and setting up client records.'/>
                    <HowS heading='Onboard Your Team' boxPara='Effortlessly onboard your staff by entering their details, qualifications, and roles. Onely simplifies the hiring process, making it easy to ensure your team is prepared and equipped to provide top-notch care. Track certifications and manage training with automated reminders.'/>
                    <HowS heading='Manage Client Records' boxPara='Securely store and manage client information in one central location. Update records with ease, ensuring that all client data is current and accessible. Use the platform to monitor client progress and personalize support based on individual needs.'/>
                    <HowS heading='Plan and Coordinate Care' boxPara='Use Onely to plan and coordinate care services effectively. Set up care plans, manage appointments, and ensure that all clients receive the holistic support they need. Track goals and journey outcomes to provide tailored care.'/>
                    <HowS heading='Create and Manage Rosters' boxPara='Effortlessly create and manage staff schedules to ensure optimal coverage. Onely’s rostering tool helps you avoid gaps in care and manage staff availability efficiently. Adjust rosters as needed to meet changing demands.'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default HowF
