import React from 'react'
import './homeSb.css'
const HomeSbf = ({title,Para}) => {
  return (
    <>
      <div className='card'>
        <div className='cardImg'>
            <img src="../../../public/icon.png" alt="Icon not found" />
        </div>
        <div className='cardText'>
            <h5>{title}</h5>
            <p>{Para}</p>
        </div>
      </div>
    </>
  )
}

export default HomeSbf
