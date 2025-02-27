import React from 'react'
import './authen.css'
import { FaEye } from "react-icons/fa";
import FormButton from './FormButton';
const LoginBox = () => {
  return (
    <>
      <div className='authenBox'>
        <div className='authenItems'>
          <div className='logo'>
            <a href="/">
              <div className='logoimg'>
                <img src="../../../public/logo.png" alt="login unload" height={50} width={80}/>
              </div>
            </a>
          </div>
          <div className='authenText'>
            <div className='authenH'>
            Welcome to Onely ! 👋
            </div>
            <div className='authenP'>Please sign in to your account and start the adventure</div>
          </div>
          <div>
            <div className='form'>
              <form action="post">
                <div className='email'>
                  <label htmlFor="email">Email
                    <code>*</code>
                  </label>
                  <input type='text' placeholder='john@bitskraft.com' name='Email'  id='email'  />

                </div>
                <div className='password'>
                  <div className='passT'>
                    <label htmlFor="password">Password
                      <code>*</code>
                    </label>
                    <a href="/" >Forgot Password?</a>
                  </div>
                  <div className='passB'>
                    <input type="text" name="password" placeholder='*******' id="password" />
                    <span>
                    <FaEye />
                    </span>
                    
                  </div>

                </div>
                <div className='remember'>
                  <input type="checkbox" name="checkbox " id="default-checkbox" />
                  <label htmlFor="default-checkbox">Remember Me</label>
                </div>
                <div >
                  <button  >Sign In</button>
                </div>
              </form>
            </div>
          </div>
          <FormButton account='New on our platform?' detail='Create an Account'/>
        </div>
      </div>
    </>
  )
}

export default LoginBox
