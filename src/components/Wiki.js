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
                <h1>Wiki</h1>
                <div className="wiki">
                <div class="column-1 box">
                    <h1>SSD with Mobilenet v1</h1>

                    <p>
                        The core of SSD and RCNN is predicting category scores and bounding boxes using small convolutional filters applied to feature maps (see Figure 1 and Figure 2).
                        <br></br>
                            <a href="https://link.springer.com/content/pdf/10.1007%2F978-3-319-46448-0_2.pdf">Link to original SSD paper</a>
                        <br></br>
                        </p>

                        <br></br>
                        <br></br>
                    <div className="mainRunner_ssd">
                        <img class="img_ssd1" src="images/ssd.png"/>
                        {/* <img class="img_ssd1" src="images/ssd_true.png"/>
                        <img class="img_ssd2" src="images/ssd_ar.png"/>
                        <img class="img_ssd3" src="images/ssd_pred.png"/> */}
                    </div>
                </div>
                <div className="column-2 box">
                    <h1>Faster R-CNN with Inception v2</h1>
                    <p>
                        Pretrained on 0xford-IIIT Pets Dataset
                        <br></br>
                            <a href="https://proceedings.neurips.cc/paper/2015/file/14bfa6bb14875e45bba028a21ed38046-Paper.pdf">Link to original R-CNN paper</a>
                        <br></br>
                        </p>
                    <div>
                        <img class="img_rcnn1" src="images/frcnn.png"/>
                        {/* <img class="img_rcnn1" src="images/rcnn_true.png"/>
                        <img class="img_rcnn2" src="images/rcnn_ar.png"/>
                        <img class="img_rcnn3" src="images/rcnn_pred.png"/> */}
                    </div>

                </div>
            </div>
            <div style={{display: 'flex', alignContent: 'center'}} >
                <table style={{alignContent: 'center'}}>
                    <tr>
                        <th>Model</th>
                        <th>Accuracy</th>
                        <th>Error</th>
                        <th>mAP</th>
                    </tr>
                    <tr>
                        <td>SSD</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FRCNN</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
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