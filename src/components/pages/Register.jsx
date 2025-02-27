import React from 'react'
import './authen.css'
import AuthenImg from './AuthenImg'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <>
    <div className='logContainer'>
        <div className='login'>
           <AuthenImg/>
           <RegisterForm/>
        </div>
    </div>
    </>
  )
}

export default Register
