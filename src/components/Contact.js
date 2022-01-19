import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardItem from './CardItem';

import './Contact.css';

const Contact = () => {

    return (
        
     
        <>
         <Navbar />
        

        <h1>Contact List</h1>
        <div className="contact">

        <div>
            <h2 class="left">Student:</h2>
                <ul>
                    Name: Hannes Gelbhardt <br></br>
                    Email: ha_ge@uni-bremen.de
                </ul>

            </div> 
            <br></br>
            <div>
            <h2 class="left">Supervisor:</h2>
                <ul>
                    Name: M.Sc. Maite Alvela <br></br>
                    Email: malvela@uni-bremen.de
                    <br></br>
                    <br></br>
                    Name: Prof. Dr.-Ing. Klaus-Dieter Thoben <br></br>
                    Email: thoben@uni-bremen.de
                    
        
                </ul>
            </div> 
       
        </div>
            
        <Footer />
      
        </>
        
    );



};



export default Contact;