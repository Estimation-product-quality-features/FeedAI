import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import './Wiki.css';

class Wiki extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                <Navbar />
                <div className="greenbg"><br></br>
                <div className="wiki">
                <div className="column-1 box">
                    <h1>SSD with Mobilenet v1</h1>

                    <p>
                    The Single-Shot Detector (SSD) model fuses the previously two-fold regional proposals and object recognition into a single model.
                    The model associate a set of default rectangular bounding boxes for each feature map cell and predict the offsets adjustment and scores for each box.
                     The prediction of images is computationally chearper than with the Faster R-CNN, making it more suitable for embedded devices. 
                     The model was pretrained on the MSCOCO Dataset. <br/>
                     Source: <a className="greenlink" href="https://link.springer.com/content/pdf/10.1007%2F978-3-319-46448-0_2.pdf">Here</a>
                        </p>


                <div style={{display: 'flex', alignContent: 'center'}} >
                <table style={{alignContent: 'center'}}>
                <caption>The overall results of the SSD model on the grain dataset.
                     The trained model can be tested under the tab data analysis</caption>
                     <tbody>
                    <tr>
                        <th>mAP [%]</th>
                        <th>Accuracy [%]</th>
                        <th>Speed [ms]</th>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>74</td>
                        <td>31</td>
                    </tr>
                    </tbody>
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
                        The model was pretrained on the 0xford-IIIT Pets Dataset. This model is shown in action under the "Live Production" tab.<br/>
                        Source: <a className="greenlink" href="https://proceedings.neurips.cc/paper/2015/file/14bfa6bb14875e45bba028a21ed38046-Paper.pdf">Here</a>
                        
                        <br></br>
                        <br></br>
                        
                <div style={{display: 'flex', alignContent: 'center'}} >
                <table style={{alignContent: 'flex-end'}}>
                
                <caption>The overall results of the Faster R-CNN on the grain dataset.
                     The trained model can be tested under the tab data analysis</caption>
                     <tbody>
                <tr>
                        <th>mAP [%]</th>
                        <th>Accuracy [%]</th>
                        <th>Speed [ms]</th>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>83</td>
                        <td>62</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                        </p>
                    <div>


                        
                    </div>

                </div>
            </div>
            <div style={{display: 'flex', alignContent: 'center'}} >
                <figure>
                <figcaption className="ssd">Figure 1: Architecture of the SSD 
                feed-forward convolutional network with a 512 x 512 input size</figcaption>
                    <img className="img_ssd1" src="images/ssd.png" width="10%"/>
            </figure>


            </div>
            <div style={{display: 'flex', alignContent: 'center'}} >
                <figure>
                <figcaption>Figure 2: Architecture of the faster RCNN feed-forward convolutional network with a variable input size</figcaption>
                
                        <img className="img_rcnn1" src="images/frcnn.png"/>
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