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
            <br></br>
            <div className="contact">

            <div>
                <div>
                <h2 className="left">Supervisor:</h2>
                <div className="text-center">
                <p>
                M.Sc. Maite Alvela works as research associate for the Institute <br/>
                of Integrated Product Developement (BIK) at the University of Bremen. <br/>
                E-Mail: malvela@uni-bremen.de
                </p>

                </div>

                <div className="text-center">
                <p>
                Prof. Dr.-Ing. Klaus-Dieter Thoben is professor for integrated product <br/>
                developement at the University of Bremen and member of <br/>  the management of 
                the BIBA - Bremer Institute für Pruduktion und Logistik Gmbh. <br/>
                E-Mail: thoben@uni-bremen.de
                </p>

                </div>
                <h2 className="leftStudent">Student:</h2>
                <div className="text-center">
                <p>
                    Hannes Gelbhardt is doing his master with a focus on AI in <br/> 
                    computer science at the University of Bremen <br/> 
                    E-Mail: ha_ge@uni-bremen.de

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
            {/* <br></br> */}
            </>
            
        );
    }
}



export default Contact;