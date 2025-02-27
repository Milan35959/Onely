import React from 'react'
import './register.css'
import { FaEye } from "react-icons/fa";
const RegisterForm = () => {
  return (
    <>
      <div className='Register'>
        <div className='Registerbox'>
          <div className='regH'>
            <a href="/">
              <div className='regImg'>
                <img src="../../../public/logo.png" alt="login unload" height={40} width={90}/>
              </div>
            </a>
          </div>
          <div className='regT'>
            <div className='regTh'>Adventure starts here</div>
            <div className='regTp'>Make your app management easy and fun!</div>
          </div>
        
        <div>
          <form action="post">
            <div>
              <div className='Fform'>
                <label htmlFor="fullname">
                  Full Name
                  <code>*</code>
                </label>
                <input type="text" placeholder='John Doe' name='name' id='name'/>
              </div>
              <div className='Fform'>
                <label htmlFor="monumber">
                  Mobile Number
                  <code>*</code>
                </label>
                <input type="text" placeholder="04xx xxx xxx" name='number' id='number' />
              </div>
              <div className='Fform'>
                <label htmlFor="email">
                  Email
                  <code>*</code>
                </label>
                <input requiredtype="email" placeholder="john@bitskraft.com" name='email' id='email' />
              </div>
              <div className='Fform'>
                <label htmlFor="password">
                  Password
                  <code>*</code>

                </label>
                <div className='textform'>
                  <input requiredtype="password" name='password' id='password' placeholder='.........'  />
                  <span>
                      <FaEye />
                  </span>
                </div>
              </div>
              <div className='Fform'>
                <label htmlFor="conpassword">
                  Confirm Password
                  <code>*</code>

                </label>
                <div className='textform'>
                  <input  requiredtype="password" name='password' id='password' placeholder='.........' />
                  <span>
                    <FaEye />
                  </span>
                </div>
              </div>
              <div>
                <div className='policy'>
                  <input type="checkbox" name="checkbox " id="default-checkbox"  />
                  <label htmlFor="default-checkbox">I agree to 
                    <span> privacy policy & terms</span>
                  </label>
                </div>
              </div>

            </div>
            <div className='formBtn'>
              <button>Sign In</button>
            </div>
          </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default RegisterForm
