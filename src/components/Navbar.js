import React, { useState, useEffect } from 'react';
import { Button } from './Button';


import { Link } from 'react-router-dom';
import './Navbar.css';
import App from '../App';
import app from "../Firebase/firebase-config";


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
      <>
        <nav className='navbar'>
          <div className='navbar-container1'>
          <div className="uni" >
               <a href="/menu">
                  <img src="/images/logo_small_ub_2021.png" width="auto" height = "60" alt="Uni Bremen">
                  </img>
                </a>
            </div>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          </div>
          <div className='navbar-container2'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>  
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/add-Evaluation' className='nav-links' onClick={closeMobileMenu}>  
                      Data Analysis
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/live' className='nav-links' onClick={closeMobileMenu}>  
                      Live Prodution
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/wiki' className='nav-links' onClick={closeMobileMenu}>  
                      Wiki
                    </Link>
                  </li>
                  <li className='nav-item'>
                  <Link
                    to='/contact'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
          {/* nowrap */}
        </nav>
      </>
    )
}

export default Navbar;