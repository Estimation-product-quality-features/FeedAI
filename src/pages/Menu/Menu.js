import React from "react";
import '../../App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import FeaturesTiles from "../../components/FeaturesTiles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// One page
import { Button } from '../../components/Button';
import '../../components/HeroSection.css';
import './Menu.css';

// function Menu() {
class Menu extends React.Component {
  display_content(){
    var spinner_div = document.getElementById("spinner");
    spinner_div.className = "hidden";
    var content_div = document.getElementById("content");
    content_div.className = "show";
  }

  render() {

    // https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering#40989121
      return (
        <div >
            <div id='spinner' className='show'
             style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: "translateX(-50%) translateY(-50%)",
            }}>
            <CircularProgress size="10rem" />
          </div>

          <div id='content' className='hidden'>
            <Navbar />
            <div className='hero-container'>
              <video src='/videos/field_lower.mp4'
              id="field_video"
              autoPlay
              loop
              muted
              width="1920"
              height="1080"
              onCanPlayThrough={() => this.display_content()}
              />

              <h1>Product Quality Tracking Software</h1>
              
              <p>Whole Grain Detection for the agri-food sector</p>
                
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
            <Footer/>
          </div>
        </div>
        
      );
    
    }
}

export default Menu;

