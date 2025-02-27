import React from 'react'
import './pages/authen.css'
import AuthenImg from './pages/AuthenImg'
import StartAuthen from './pages/startAuthen'
const Start = () => {
  return (
    <>
      <div className='logContainer'>
        <div className='login'>
            <AuthenImg/>
            <StartAuthen/>
        </div>
    </div>
    </>
  )
}

export default Start
