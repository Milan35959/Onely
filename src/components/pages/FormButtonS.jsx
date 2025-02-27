import React from 'react'
import './authen.css'
import { Link } from 'react-router'
const FormButtonS = () => {
  return (
    <>
       <p className='plat'>
       Already Have an Account?
          <Link to="/login">Sign in instead</Link>
          </p>
          <div className='divisor'>
            <p>
              or
            </p>
          </div>
          <div className='google'>
            <div className='googleBox'>
              <img src="../../../public/google.svg" alt=" google not found"  height={15} width={15}/>
            </div>
          </div>
    </>
  )
}

export default FormButtonS
