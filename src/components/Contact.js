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
                <h2 className="left">Supervisor:</h2>
                    <ul>
                        Name: M.Sc. Maite Alvela <br></br>
                        Email: malvela@uni-bremen.de
                        <br></br>
                        <br></br>
                        Name: Prof. Dr.-Ing. Klaus-Dieter Thoben <br></br>
                        Email: thoben@uni-bremen.de
                    </ul>
                </div>
                <br></br>
                <h2 className="left">Student:</h2>
                    <ul>
                        Name: Hannes Gelbhardt <br></br>
                        Email: ha_ge@uni-bremen.de
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