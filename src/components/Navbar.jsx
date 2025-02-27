import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header className='container mx-auto'>
        <nav className='nav'>
          <div className='navbar'>
            <Link to="/">
              <div className='logo'>
                <img src="../../../public/logo.png" alt='Logo cannot be load' id='logo' />
              </div>
            </Link>
            <div className='list'>
              <ul >
              <li><Link to="/">Home</Link></li>
                <li><Link to="/howtowork">How it Work</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/">Help</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/start">
                  <button>Start my journey with Onely</button>
                  </Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
