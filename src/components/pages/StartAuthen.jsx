import React from 'react'

import './authen.css'
import './start.css'
import { Link } from 'react-router'

import FormButtonS from './FormButtonS'
const StartAuthen = () => {
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
        <div className='start'>
            <Link to="/register">
                <div className='nds'>
                    <span>NDIS Provider</span>
                
                <div className='ndsIcon'>
                    <span></span>
                </div>
                </div>
            </Link>
        </div>
            <FormButtonS detail='Sign in instead' account='Already Have an Account?'/>
        </div>
        </div>
    </>
  )
}

export default StartAuthen
