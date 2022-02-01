import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
       
        
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>About Us</h3>
            <Link to='/contact'>The Team</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Contact Us</h3>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Footer;