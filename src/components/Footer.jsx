import React from 'react'
import './footer.css'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container mx-auto'>
            <div className='Foot'>
                <div className='boxFoot'>
                    <div className='footF'>
                        <div className='flogo'>
                            <img src="../../../public/logo.png" alt="Logo Unload" height="50" width="100" />
                        </div>
                        <div className='fText'>Making the world a better place through constructing elegant hierarchies</div>
                        <div className='ficon'>
                        <FaFacebook />
                        <FaTwitter/>
                        <FaInstagram />
                        <FaGithub/>
                        </div>
                        <div className='footC'>
                            Contact Us:
                            <a href="/">info@onely.com.au</a>
                        </div>
                    </div>
                    <div className='footS'>
                        <div className='footSh'>Features</div>
                        <div  className='fbtext'>Client Records Management</div>
                        <div  className='fbtext'>Staff Onboarding</div>
                        <div  className='fbtext'>Goal/ Journey Tracking </div>
                        <div  className='fbtext'>Care Management </div>
                        <div  className='fbtext'>HR management </div>
                        <div  className='fbtext'>Rostering </div>
                        <div  className='fbtext'>Invoicing </div>
                        <div  className='fbtext'>Integration </div>
                    </div>
                    <div className='footS'>
                        <div className='footSh'>Support</div>
                        <a href="/">
                            <div className='fbtext'>Raise a ticket</div>
                        </a>
                    </div>
                    <div className='footS'>
                        <div className='footSh'>Company</div>
                        <div className='fbtext'>Blog</div>
                        <div className='fbtext'>Career</div>
                        <div className='fbtext'>Press</div>
                    </div>
                    <div className='footS'>
                        <div className='footSh'>Legal</div>
                        <div className='fbtext '>
                            <a href="/">Privacy</a>

                        </div>
                        <div className='fbtext'>
                            <a href="/">Terms</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='endf'>© 2024 Onely Platform. All rights reserved.</div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
