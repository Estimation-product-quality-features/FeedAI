import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardItem from './CardItem';

import './Contact.css';


class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        }
    render() {
        return (
            <>
            <Navbar />
            
            <div className="greenbg">
            <br></br>
            <div className="contact">

            <div>
                <div>
                
                <div className="text-center">
                <h2>Supervisor:</h2>
                <p>
                M.Sc. Maite Alvela works as research associate for the Institute <br/>
                of Integrated Product Developement (BIK) at the University of Bremen. <br/>
                <b>E-Mail: malvela@uni-bremen.de</b>
                </p>

                </div>

                <div className="text-center">
                <p>
                Prof. Dr.-Ing. Klaus-Dieter Thoben is professor for integrated product <br/>
                developement at the University of Bremen and member of <br/>  the management of 
                the BIBA - Bremer Institute für Pruduktion und Logistik GmbH. <br/>
                <b>E-Mail: thoben@uni-bremen.de</b>
                </p>

                </div>

                
                <div className="text-center">
                <h2>Student:</h2>
                <p>
                    Hannes Gelbhardt is doing his master with a focus on AI in computer science <br/> 
                    at the University of Bremen and works at the BIK as research assistant<br/> 
                    <b>E-Mail: ha_ge@uni-bremen.de</b>

                </p>

                </div>

                
                </div>
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>

            <Footer />
            </>
            
        );
    }
}



export default Contact;