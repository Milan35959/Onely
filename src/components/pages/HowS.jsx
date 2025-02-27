import React from 'react'
import './hows.css'
import { FaCircleQuestion } from "react-icons/fa6";
const HowS = ({heading,boxPara}) => {
  return (
    <>
      <div className='box'>
        <div className='boxI'>
        <FaCircleQuestion />
        </div>
        <div className='boxT'>
            <h2>{heading}</h2>
            <p>
                {boxPara}
            </p>
        </div>
      </div>
    </>
  )
}

export default HowS
