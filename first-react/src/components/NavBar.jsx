import React from 'react'
import logo from '../assets/logo.png'
import icon from '../assets/search.png'
import icon2 from '../assets/group.png'
const NavBar = () => {
  return (
    <div className='nav'>
    
        <div className="logo">
            <img src={logo} alt="img1" />
        </div>
        <div className="menu">
            <ul className='item'>
                <li>Welcome</li>
                <li>Our Menu</li>
                <li>Franchise</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="icon">
            <img src={icon} alt="img2" />
            <img src={icon2} alt="img3" />
        </div>
    
    </div>
  )
}

export default NavBar



