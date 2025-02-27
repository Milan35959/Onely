import React from 'react'

import './pages/authen.css'
import AuthenImg from './pages/AuthenImg'
import LoginBox from './pages/LoginBox'

const Login = () => {
  return (
    <>
   
      <div className='logContainer'>
        <div className='login'>
          <AuthenImg />
          <LoginBox/>
        </div>
      </div>
    </>
  )
}

export default Login
