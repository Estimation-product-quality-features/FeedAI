import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import './Wiki.css';

// const Wiki = () => {
class Wiki extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                <Navbar />
                <div className="greenbg"><br></br>
                {/* <h1>Wiki</h1> */}
                <div className="wiki">
                <div class="column-1 box">
                    <h1>SSD with Mobilenet v1</h1>

                    <p>
                    The Single-Shot Detector (SSD) model fuses the previously two-fold regional proposals and object recognition into a single model.
                    The model associate a set of default rectangular bounding boxes for each feature map cell and predict the offsets adjustment and scores for each box.
                     The prediction of images is computationally chearper than with the Faster R-CNN, making it more suitable for embedded devices.

                        {/* <br></br>
                            <a href="https://link.springer.com/content/pdf/10.1007%2F978-3-319-46448-0_2.pdf">Link to original SSD paper</a>
                        <br></br> */}
                        </p>

                        <br></br>
                        <br></br>

                <div style={{display: 'flex', alignContent: 'center'}} >
                <table style={{alignContent: 'center'}}>
                    <tr>
                        <th>Accuracy</th>
                        <th>Error</th>
                        <th>mAP</th>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                </table>
                </div>
                <br></br>
                        <br></br>

                </div>
                <div className="column-2 box">
                    <h1>Faster R-CNN with Inception v2</h1>
                    <p>
                        The Faster region-based convolutional neural network (R-CNN) is an extension to the Fast R-CNN,
                        which adds a Region Proposal Network to overcome the bottleneck of traditional region-based methods, that were calculate via CPU.
                        Depending on the hardware, the end-to-end system is able to predict bounding-boxes and scores of multiple images per second.
                        The model was pretrained on the 0xford-IIIT Pets Dataset.
                        {/* <br></br>
                            <a href="https://proceedings.neurips.cc/paper/2015/file/14bfa6bb14875e45bba028a21ed38046-Paper.pdf">Link to original Faster R-CNN paper</a>
                        <br></br> */}

                        <div style={{display: 'flex', alignContent: 'center'}} >
                <table style={{alignContent: 'flex-end'}}>
                    <tr>
                        <th>Accuracy</th>
                        <th>Error</th>
                        <th>mAP</th>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                </table>
                </div>
                        </p>
                    <div>


                        
                    </div>

                </div>
            </div>
            <div style={{display: 'flex', alignContent: 'center'}} >
                <figure>
                    <img class="img_ssd1" src="images/ssd.png" width="10%"/>
                    <figcaption className="ssd">Figure 1: architecure of the SSD feed-forward convolutional network with a 512 x 512 input size</figcaption>
                </figure>


            </div>
            <div style={{display: 'flex', alignContent: 'center'}} >
                <figure>
                        <img class="img_rcnn1" src="images/frcnn.png"/>
                        {/* <img class="img_rcnn1" src="images/rcnn_true.png"/>
                        <img class="img_rcnn2" src="images/rcnn_ar.png"/>
                        <img class="img_rcnn3" src="images/rcnn_pred.png"/> */}
                        <figcaption>Figure 2: architecure of the FRCNN feed-forward convolutional network with a variable input size</figcaption>
                </figure>

            </div>

            <br></br>
            <br></br>
            <br></br>
            </div>
            <Footer />
            
            </>
            
        );
    }
}


export default Wiki;