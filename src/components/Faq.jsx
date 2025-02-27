import React from 'react'
import FaqO from './pages/FaqO'
import './pages/faq.css'
const Faq = () => {
  return (
    <>
       <div className='faqcontainer'>
        <div className='faq'>
          <div className='faqbox '>
            <div className='faqtext'>
              <h2>Frequently asked questions</h2>
            </div>
            <div className='faqGrid'>

            <FaqO title='What is the process for upgrading or downgrading my plan?' 
            content='You can upgrade or downgrade your plan by contacting our support team or through your account settings. We will assist you in making the transition smoothly.'/>
            <FaqO title='What is Onely?'
            content='Onely is a comprehensive platform designed to simplify the management of client records, staff onboarding, and care services for health and disability support providers. It helps streamline administrative tasks, enabling providers to focus on delivering exceptional care.'/>
            <FaqO title='What features does Onely offer?' 
            content='Onely includes:Client Records Management: Secure storage and easy access to client information.Staff Onboarding: Simplified hiring and qualification tracking.Goal/Journey Tracking: Monitor and support client progress.Care Management: Effective planning and coordination of care services.
                      HR Management: Track certifications, manage leave, and more.Rostering: Create and manage staff schedules effortlessly.Invoicing: Streamlined billing with integration to Xero.Integration: Connects with NDIS, HCP, and other funding sources.'/>
            <FaqO title='What pricing plans are available?' 
            content='Onely offers:Basic Plan: $7/user/month for small teams managing up to 2 clients.Premium Plan: $7/user/month for organizations managing up to 5 participants.Enterprise Plan: Custom pricing for large-scale operations with advanced needs.
                      Custom Plan: Tailored solutions for specific requirements.'/>
            <FaqO title='How do I choose the right plan?' 
            content='Choose the plan based on the size of your organization and the features you need. For small teams, the Basic or Premium plans might be sufficient. Larger organizations with complex needs should consider the Enterprise Plan or a Custom Plan.'/>
            <FaqO title=' How can I integrate Onely with other systems?' 
            content='Onely integrates seamlessly with NDIS, HCP, and other funding sources. It also connects with third-party applications for a streamlined workflow, including financial management with Xero.'/>
            <FaqO title='How secure is Onely?' 
            content='Onely prioritizes the security of client and staff data with robust encryption and compliance with data protection regulations, ensuring that your information is safe and secure.'/>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Faq
