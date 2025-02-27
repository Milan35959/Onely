import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './homeSc.css'
const HomeSc = () => {
  return (
    <>
      <section id='homeSc'>
        <div className='container mx-auto'>
            <div id='sectionContain'>
                <div className='mainSec'>
                    <img src="../../../public/bg.png" alt=" Image unload" />
                    <div className='secText'>
                        <div className='secTh'>
                            <div className='secfTh'>Our Story</div>
                            <h3>Our journey began with a vision</h3>
                        </div>
                        <p>
                            to transform the way health and disability support services are managed. We recognized the challenges faced by care providers in handling complex administrative tasks and sought to create a solution that simplifies these processes.
                            Inspired by the need for a more efficient and user-friendly platform, we developed Onely to empower providers with the tools they need to deliver exceptional care. Our mission is to streamline client records, staff onboarding, and care management, allowing providers to focus on what truly matters—supporting their clients.
                            As we continue to innovate and grow, our commitment remains steadfast: to enhance the quality of care through technology, making every step of the process smoother and more effective for those who are dedicated to making a difference.
                        </p>
                        <a href="/">
                            <button id='btn'>
                            Get Started
                            <FaArrowRightLong  className='btnI'/>

                            </button>
                            
                            </a>
                    </div>
                </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default HomeSc
