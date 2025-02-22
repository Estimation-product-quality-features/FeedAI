import React from "react";
import Navbar from "./Navbar";

import './LiveProd.css';

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
            </>
        );
    }
}


export default LiveProd;
