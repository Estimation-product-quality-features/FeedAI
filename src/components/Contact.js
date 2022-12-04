import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardItem from './CardItem';

import './Contact.css';

// const Contact = () => {
class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        }
    render() {
        return (
            <>
            <Navbar />
            
            <div class="greenbg">
            <br></br><br></br>
            <h1>Contact List</h1>
            <div className="contact">

            <div>
                <div>
                <ul >
                <h2 className="left">Supervisor:</h2>
                    M.Sc. Maite Alvela <br></br>
                    malvela@uni-bremen.de
                    <br></br>
                    <br></br>
                    Prof. Dr.-Ing. Klaus-Dieter Thoben <br></br>
                    thoben@uni-bremen.de
                </ul>
                </div>
                <br></br>
                <h2 className="leftStudent">Student:</h2>
                    <ul className="student">
                        Hannes Gelbhardt <br></br>
                        ha_ge@uni-bremen.de
                    </ul>

                </div>
            </div>
            <br></br>
            </div>
            <Footer />
        
            </>
            
        );
    }
}



export default Contact;