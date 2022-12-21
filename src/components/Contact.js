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
            {/* <h1>Contact List</h1> */}
            <div className="contact">

            <div>
                <div>
                <ul >
                <h2 className="left">Supervisor:</h2>
                    - M.Sc. Maite Alvela -
                    <br></br>
                    works as research associate for the
                    <br></br>
                    Institute of Integrated Product Developement (BIK)
                    <br></br>
                    at the University of Bremen.
                    <br></br>
                    E-Mail: malvela@uni-bremen.de
                    <br></br>
                    
                    <br></br>
                    - Prof. Dr.-Ing. Klaus-Dieter Thoben -
                    <br></br>
                    is professor for integrated product developement  
                    <br></br>
                    at the University of Bremen 
                    <br></br>
                    and member of the management of the
                    <br></br>
                    BIBA - Bremer Institute für Pruduktion und Logistik Gmbh.
                    <br></br>
                    <br></br>
                    {/* ist Professor für Integrierte Produktentwicklung an der Universität Bremen und Mitglied der Geschäftsführung des BIBA - Bremer Institut für Produktion und Logistik GmbH. */}
                    E-Mail: thoben@uni-bremen.de
                </ul>
                </div>
                <br></br>
                <h2 className="leftStudent">Student:</h2>
                    <ul className="student">
                        - Hannes Gelbhardt -
                        <br></br>
                        is doing his master 
                        <br></br>
                        with a focus on AI in computer science
                        <br></br>
                        at the University of Bremen
                        <br></br>
                        E-Mail: ha_ge@uni-bremen.de
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