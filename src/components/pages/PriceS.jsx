import React from 'react'
import './pricef.css'
import { TiTick } from "react-icons/ti";
<TiTick className='thick'/>

const PriceS = () => {
  return (
    <>
      {/* <div>
        <h2>{props.detail.name}</h2>
        <div>
            <span>{props.details.price}</span>
            <span>{props.details.priceDetails}</span>
        </div>
        <div>
            <p>{props.details.desc}</p>
        </div>
        <ul>
            <li>{props.details.lia}</li>
            <li>{props.details.lib}</li>
            <li>{props.details.lic}</li>
            <li>{props.details.lid}</li>
            <li>{props.details.lie}</li>
        </ul>
      </div> */}
      <div className='priceH'>
        <h2>Basic</h2>
        <div className='priceP'>
            <span className='spanO'>$7</span>
            <span className='spanD'>/user limit of 2 clients only</span>
        </div>
        <div className='pDesc'>
            <p>Sign up as a Sole trader or small organization</p>
        </div>
        <ul>
            <li>
              <TiTick className='thick'/>
              <span>Add participants/ Clients</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Add staffs</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Add roster/ calendar</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>NDIS Price guide API</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Live chat</span>
              </li>
        </ul>
        <div className='pbtn'>
          <button >Contact Us</button>
        </div>
      </div>
      <div className='priceH'>
        <h2>Onely Plus</h2>
        <div className='priceP'>
            <span className='spanO'>$7</span>
            <span className='spanD'>/ user/ 5/participant</span>
        </div>
        <div className='pDesc'>
            <p>All features of basic</p>
        </div>
        <ul>
            <li>
              <TiTick className='thick'/>
              <span>Advance Roster Management</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Care Management</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Add availabilities</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Apply leave</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Register - Compliance</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Generate Reports</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Xero integration</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Incident management</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>SCHADS and Nurse Awards</span>
              </li>
        </ul>
        <div className='pbtn'>
          <button >Contact Us</button>
        </div>
      </div>
      <div className='priceH'>
        <h2>Enterprise</h2>
        <div className='priceP'>
            <span className='spanD'>Book an appointment</span>
            
            
        </div>
        <div className='pDesc'>
            <p>Need a to meet Enterprise criteria</p>
        </div>
        <ul >
            <li>
              <TiTick className='thick'/>
              <span>All features of premium</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Reports management</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>File/ data exportation</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Compliance and quality</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Track participants funds</span>
              </li>
            <li>
              <TiTick className='thick'/>
              <span>Custom forms and Documents</span>
              </li>
           
        </ul>
        <div className='pbtn'>
          <button >Contact Us </button>
        </div>
      </div>
    </>
  )
}

export default PriceS
