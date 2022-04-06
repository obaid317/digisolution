import React,  { useState, useEffect } from 'react'
import {Link} from "react-scroll"
import '../Components/Navbar.css'
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
   <nav className='navbar' id="navbar">


<div className="navbar-container">
<img className='logo' src='images/horizontal-logo-black.png' />

<div className='menu-icon' onClick={handleClick}>
<div>
   <img className='w-apps' onClick={() => window.open("https://api.whatsapp.com/send?phone=+971501828784")} src="icons/abc.svg"/>
     
</div>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='home' smooth={true} duration={1000}>
              <p  className='nav-links' onClick={closeMobileMenu}>
                Home
              </p>
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='about' smooth={true} duration={1000}>
              <p
              
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </p>

</Link>
            </li>
            <li className='nav-item'>
            <Link to='services' smooth={true} duration={1000}>
              <p
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </p>
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='client' smooth={true} duration={1000}>
              <p
               
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Clients
              </p>
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='contact' smooth={true} duration={1000}>
              <p
                    className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </p>
              </Link >
            </li>
            <li className='nav-item'>
            <Link to='footer' smooth={true} duration={1000}>
              <p
               
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Support
              </p>
              </Link>
            </li>
            <li className='nav-item' >
             
             <img className='w-app' onClick={() => window.open("https://api.whatsapp.com/send?phone=+971501828784")} src="icons/abc.svg"/>
             
            </li>

            
          </ul>
</div>

   </nav>
  )
}

export default Navbar