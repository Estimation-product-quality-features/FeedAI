import React from 'react';
import './addEvaluation.css';

import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

// Image imports
import corn from './images/corn.jpeg';
import corn2 from './images/corn2.jpeg';
import wheat from './images/wheat.jpeg';
import wheat2 from './images/wheat2.jpeg'; 
import triticale from './images/triticale.jpeg';
import triticale2 from './images/triticale2.jpeg';
import rays from './images/rays.jpeg';
import rays2 from './images/rays2.jpeg';

//tensorflow
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import "core-js/stable";
import "regenerator-runtime/runtime";
tf.setBackend('webgl');

let classesDir = {
  1: {
      name: 'Corn',
      id: 1,
  },
  2: {
      name: 'Rays',
      id: 2,
  },
  3: {
    name: 'Triticale',
    id: 3,
  },
  4: {
    name: 'Wheat',
    id: 4,
  },
}

async function load_ssd_model() {
  await tf.ready();
  model_name = "ssd"
  try {
    const model = await loadGraphModel('/models/ssd_js/model.json');
    return model;
  } catch(e) {
    console.log("the SSD model could not be loaded")
  }
}

async function load_rcnn_model() {
  model_name = "frcnn"
  await tf.ready();
  try {
    const model = await loadGraphModel('/models/rcnn_js/model.json');
    return model;
  } catch(e) {
    console.log("the RCNN model could not be loaded")
  }
}

function process_input(img){
  const tfimg = tf.browser.fromPixels(img).toInt();
  const expandedimg = tfimg.expandDims();
  return expandedimg;
};

async function detectFrame(img_url, model) {
  await tf.ready();
  var img = new Image();
  var src = document.getElementById('canvasTop');
  img.src = img_url;
  img.id = "imgCanvas";
  const imgWidth = 512
  const imgHeight = 512
  img.width = imgWidth //has to be defined for tensorflow pixel
  img.height = imgHeight // ^^

  //needs to be appended somewhere else or otherwise be made visible
  src.appendChild(img);

  Promise.all([model])
    .then(values => {
      tf.engine().startScope();
      values[0].executeAsync(process_input(img)).then(predictions => {
      renderPredictions(predictions);
      tf.engine().endScope();
    })
    .catch(error => {
      console.error(error);
    });
  });
};

function buildDetectedObjects(scores, threshold, boxes, classes, classesDir) {
  const detectionObjects = []
  var imgCanvas = document.getElementById('imgCanvas');
  scores[0].forEach((score, i) => {

    if (score > threshold) {
      const bbox = [];
      const minY = boxes[0][i][0] * imgCanvas.offsetHeight;
      const minX = boxes[0][i][1] * imgCanvas.offsetWidth;
      const maxY = boxes[0][i][2] * imgCanvas.offsetHeight;
      const maxX = boxes[0][i][3] * imgCanvas.offsetWidth;
      bbox[0] = minX;
      bbox[1] = minY;
      bbox[2] = maxX - minX;
      bbox[3] = maxY - minY;
      detectionObjects.push({
        class: classes[0][i],
        label: classesDir[classes[0][i]].name,
        score: score.toFixed(4),
        bbox: bbox
      })
    }
  })
  return detectionObjects
}


function renderPredictions(predictions) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";


    //Getting predictions
    // FRCNN
    var boxes = predictions[3].arraySync();
    var num = predictions[1].dataSync();
    var scores = predictions[2].arraySync();
    var classes = tf.tensor(predictions[0].arraySync()).arraySync();

    // If SSD-model change ordering of prediction
    if (model_name === "ssd") {
      boxes = predictions[2].arraySync();
      num = predictions[1].dataSync();
      scores = predictions[3].arraySync();
      classes = tf.tensor(predictions[0].arraySync()).arraySync();
    }

    const detections = buildDetectedObjects(scores, threshold,
                                    boxes, classes, classesDir);

    
    detections.forEach(item => {
      const x = item['bbox'][0];
      const y = item['bbox'][1];
      const width = item['bbox'][2];
      const height = item['bbox'][3];

      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%").width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
  });

  detections.forEach(item => {
    const x = item['bbox'][0];
    const y = item['bbox'][1];

    // Draw the text last to ensure it's on top.
    ctx.fillStyle = "#000000";
    ctx.fillText(item["label"] + " " + (100*item["score"]).toFixed(2) + "%", x, y);
  });
};


// List of images
const itemData = [
  {
    img: corn,
    title: 'Corn',
  },
  {
    img: corn2,
    title: 'Corn',
  },
    {
    img: wheat,
    title: 'Wheat',
  },
  {
    img: wheat2,
    title: 'Wheat',
  },
  {
    img: triticale,
    title: 'Triticale',
  },
  {
    img: triticale2,
    title: 'Triticale',
  },
  {
    img: rays,
    title: 'Rays',
  },
  {
    img: rays2,
    title: 'Rays',
  },
  
];

// the Threshhold for the detected objects, the user could also choose it
var threshold = 0.5;

// Load the ssd model as initial model
var model_name = "ssd";
var currentModel = load_ssd_model();

// Canvas to draw on
var canvasRef = React.createRef();

class AddEvaluation extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      imgPred: "images/pred_init.svg"
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClickCard = this.handleClickCard.bind(this)
  }

  /////////////////////////////////////////////////////////
  // Handle changes
  /////////////////////////////////////////////////////////
  handleInputChange(event) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.setState({
      imgPred: URL.createObjectURL(event.target.files[0])
    })
  }

  handleClickCard(img) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.setState({
      imgPred: img
    })
  }

  handleMenuChange(event) {
    if (event.target.value === "ssd") {
      currentModel = load_ssd_model();
    } else {
      currentModel = load_rcnn_model();
    }
    //event.target.value;
  }

  handleClickCard2(imgSrc) {
    const ctx = canvasRef.current.getContext("2d");
    var img = new Image()
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    img.src = imgSrc
  }

  returnImage(img) {
    this.setState({
      imgPred: img
    })
  }

  // Scroll to the original position after page entering
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
        <div className= "Detection">
        <><Navbar />
        {/* Some spacing  */}
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>

        <Container>
          <Grid container spacing={6}>
              <div style={{display: 'flex', gap: '60px'}}>
                <div>
                  <h1>Select an image</h1>
                  <ImageList sx={{heigth:128, width:128}} cols={2} rowHeight={256}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                  srcSet={item.img}
                                  alt={item.title}
                                  title={item.title}
                                  height='256'
                                  onClick={() => this.handleClickCard(item.img)}
                                  />
                              </CardActionArea>
                        </ImageListItem>
                      ))}
                    </ImageList>
                </div>
              <div>
                  <h1>Model detection</h1>
                  <br></br>
                  <div style={{display: 'flex', gap: '30px', justifyContent: 'center'}}>
                  <Box sx={{height:'auto', width: '45%'}}>
                      <FormControl fullWidth variant="filled" color="primary">
                          <NativeSelect
                              id="modelID"
                              defaultValue={"model"}
                              color='primary'
                              onChange={this.handleMenuChange}
                              style={{background: "#D3D3D3", value: "M", height: '50px'}}
                          >
                          <option value="ssd">SSD MobileNetV1</option>
                          <option value="frcnn">Faster RCNN</option>
                          </NativeSelect>
                      </FormControl>
                      </Box>
                      <Button
                       variant="contained"
                       color='inherit'
                       size='large'
                       onClick={() => detectFrame(this.state.imgPred, currentModel)}>
                      Predict image
                      </Button>
                  </div>
                  <br></br> <br></br>
                  <Card>
                  <div id="wrapper">
                    <img src={this.state.imgPred} alt="predict image"/>
                  <canvas
                        className="size"
                        id="canvasTop"
                        ref={canvasRef}
                        width="512"
                        height="512"
                      />
                 </div>
                  </Card>

                  <br></br> <br></br>
                 <div style={{display: 'flex', justifyContent: 'center'}}>
                  <label class="custom-file-upload">
                  <input type="file" onChange={this.handleInputChange}/>
                     <i class="fa fa-cloud-upload"></i> UPLOAD IMAGE
                  </label>
                  </div>
                </div>
           </div>
          </Grid>
        </Container>
        {/* Some spacing  */}
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>

        <Footer />
        </>
        </div>
        );
    }
  }

 export default AddEvaluation;



