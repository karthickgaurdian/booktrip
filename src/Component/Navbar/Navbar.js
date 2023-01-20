import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {

    const [isMobile,setIsMobile] = useState(false)
  return (
    <nav className='navbar'>
        <h3 className='logo'><i className='fa fa-beer'></i> Logo</h3>
        <ul className={isMobile? "nav-links-mobile": "nav-links"}>
            <Link to='/' className="home">
                <li><i className='fa fa-home'> &nbsp;</i>Home</li>
            </Link>
            <Link to='/about' className="about">
                <li>About</li>
            </Link>
            <Link to='/skills' className="skills">
                <li>Skills</li>
            </Link>
            <Link to='/contact' className="contact">
                <li>Contact</li>
            </Link>
            <Link to='/signup' className="signup">
                <li>Sign Up</li>
            </Link>


        </ul>
<button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
    {isMobile? (<i className='fa fa-times'></i>): (<i className='fa fa-bars'></i>)}
</button>
    </nav>
  )
}

export default Navbar;