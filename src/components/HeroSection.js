import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// https://stackoverflow.com/questions/54732340/react-video-loading-in-memory-before-rendering-to-screen#54885825

class HeroSection extends React.Component {
  render() {
    return (
      <div className='hero-container'>
        
        <video src='/videos/field_lower.mp4'
         autoPlay
         loop
         muted
         />
    
        <h1>TRACKER</h1>
      
        <p>Grain Detection Livestream</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        
        </div>
      </div>
    );
  }
}

export default HeroSection;
  