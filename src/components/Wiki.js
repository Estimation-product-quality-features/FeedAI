import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardItem from './CardItem';
// import Grid from '@material-ui/core/Grid'

import './Wiki.css';

const Wiki = () => {

    return (
        <>
         <Navbar />
         <h1>Wiki</h1>
         <div class="wiki">
            <div class="column-1 box">
                <h1>SSD with Mobilenet v1</h1>
                    <p>
                    Pretrained on MSCOCO
                    <br></br>
                     <a href="https://link.springer.com/content/pdf/10.1007%2F978-3-319-46448-0_2.pdf">Link to original SSD paper</a>
                    <br></br>
                    </p>
            </div>
            <div class="column-2 box">
                <h1>Faster R-CNN with Inception v2</h1>
                    <p>
                    Pretrained on 0xford-IIIT Pets Dataset
                    <br></br>
                     <a href="https://proceedings.neurips.cc/paper/2015/file/14bfa6bb14875e45bba028a21ed38046-Paper.pdf">Link to original R-CNN paper</a>
                    <br></br>
                    </p>
            </div>
        </div> 
            
        <Footer />
      
        </>
        
    );



};



export default Wiki;