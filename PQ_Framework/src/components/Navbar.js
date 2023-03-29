import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
                    <NavLink to='/startpage' className='nav-links' activeStyle={{background: "rgb(106, 134, 115)"}} onClick={closeMobileMenu}>  
                      <h3>Home</h3>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/data-analysis' className='nav-links' activeStyle={{background: "rgb(106, 134, 115)"}} onClick={closeMobileMenu}>  
                    <h3>Data Analysis</h3>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/live' className='nav-links' activeStyle={{background: "rgb(106, 134, 115)"}} onClick={closeMobileMenu}>  
                    <h3>Live Production</h3>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/wiki' className='nav-links' activeStyle={{background: "rgb(106, 134, 115)"}} onClick={closeMobileMenu}>  
                    <h3>Wiki</h3>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                  <NavLink
                    to='/contact'
                    className='nav-links'
                    activeStyle={{background: "rgb(106, 134, 115)"}}
                    onClick={closeMobileMenu}
                  >
                    <h3>Contact</h3>
                  </NavLink>
                </li>
              </ul>
          </div>
        </nav>
      </>
    )
}

export default Navbar;