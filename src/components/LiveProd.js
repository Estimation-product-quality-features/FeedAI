import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from '@material-ui/core/Container';

import './LiveProd.css';

// const Wiki = () => {
class LiveProd extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
            <Navbar />
            <div></div>
            <div className="vid-container">
            <video src='/videos/grains_website.mp4'
                autoPlay
                loop muted
                width="1920"
                height="1080"
            />
            </div>
            <div></div>
            {/* <Footer /> */}
            </>
        );
    }
}


export default LiveProd;
