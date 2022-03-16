import React from "react";
import '../../App.css';
import HeroSection from '../../components/HeroSection';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeaturesTiles from "../../components/FeaturesTiles";


 function Menu() {
    return (
      <>
        <Navbar />
        <HeroSection />
        {/* <FeaturesTiles /> */}
        <Footer />
      </>
    );
  }

export default Menu;

