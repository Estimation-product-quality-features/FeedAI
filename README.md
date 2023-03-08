# FeedAI: Product Quality Tracking Tool on the Example of Agri-Food Industries 🌾 [Visit this site here!](https://grain-52356.web.app/)

### An intuitive and helpful software tool for identifying and capturing the product quality in industrial processes. As a case study, the production of flour in the context of the compound feed industry is shown.
The compound feed industry can produce many feed mixtures up to many different ingredients. Ingredients as agricultural raw materials, such as maize and wheat, are to be processed in these industries. Under rapidly and strongly fluctuating input raw materials and changing recipes, the condition of a process has to be continually tuned by process operators to satisfy the quality requirements. Flour is one popular feed due to its balanced nutrional nature and availability in various forms, for instance, in pellets. The schredding of natural raw materials leads to the required flour structure, which is relevant for further processing, such as mixing and pelleting, and ultimative relevant for the animal health.
After milling, samples of the flour produced in this use case are evaluated on its particle size using deep learning algorithms. In this repo, we develop a quality traking tool that automatically detects, classifies and counts partially crushed and uncrushed seeds on images taken from the produced flour, so that engineers can subsequently use these results for evaluating the flour quality and adjusting better the mill parameters in future production charges. 

<br>
<img src="./public/images/.png"/>
<br>

## About
FeedAI consists of two packages: 
*  The package AI-models handles the deep learning models which were created for this application case. The models of FeedAI are created in Python3 and use the Tensorflow Object Detection API v1.12.0 [TF API]([https://github.com/facebook/create-react-app](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf1.md) and its comulative counting mode module [TF counting API](https://github.com/ahmetozlu/tensorflow_object_counting_api).
*  The package Framework contains the design of a webpage which lets you run different AI-models in near real time and visualize and download its outputs in a simple form. The framework of FeedAI was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Firebase running in a docker image to provide security and to help to build, run and deploy successfully the models in the webpage. 

## 🧰 Requirements 

<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<br></br>
<a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
<a href="https://www.tensorflow.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" width="40" height="40"/> 
</a>
<br></br>
<a href="https://www.docker.com/" target="_blank"> <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="Docker" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>

## Installation
### FeedAI_models
You can install the TensorFlow Object Detection API either with Python Package Installer (pip) or Docker. For local runs we recommend using Docker.
Clone the TensorFlow repository and proceed to one of the installation options.

```bash
git clone https://github.com/tensorflow/models.git
```

#### Docker Installation

```bash
# From the root of the git repository
docker build -f research/object_detection/dockerfiles/tf1/Dockerfile -t od .
docker run -it od
```

#### Python Package Installation

```bash
cd models/research
# Compile protos.
protoc object_detection/protos/*.proto --python_out=.
# Install TensorFlow Object Detection API.
cp object_detection/packages/tf1/setup.py .
python -m pip install --use-feature=2020-resolver .
```

```bash
# Test the installation.
python object_detection/builders/model_builder_tf1_test.py
```

### FeedAI_framework
The easiest way to run the app locally is to clone the repository and run the node pachage manager via  
> npm install

followed by  
> npm start  

For the deployment with firebase first build the production optimized site using  
> npm run build

to then deploy the webapp via firebase the same firebase commands as mentioned below can be used.  


To run the webapp using docker the following commands in the root folder and a shell of your choice.  
For the initial run build the by running the following command in your shell:  

> ```sudo docker build -t grain:dev .```

Next run the container on using  

> sudo docker run \\ \
>       -it \\ \
>       --rm \\ \
>       -v ${PWD}:/app \\ \
>       -v /app/node_modules \\ \
>       -p 3002:3000 \\ \
>       -e CHOKIDAR_USEPOLLING=true \\ \
>       grain:dev

After that open a browser of your choice and head to  
> http://localhost:3002/

Note that the port 3002 can be changed.  
The instructions can also be found and copied from the "docker_instructions.txt" file.  
On **windows** omit the ``` sudo ``` in both commands.  
Thats it, the app is up and running and adapts to changes in the code instantly.

### Deploying the App to firebase
To deploy the app with firebase hosting another docker image is provided.

To build the deployment container run

> ```sudo docker build -f Dockerfile.prod -t grain:prod .```

After the building process is finished the container can be spinned up using  

> sudo docker run \\ \
>       -itd \\ \
>       --rm \\ \
>       --name grain_prod \\ \
>       -p 3002:3000 \\ \
>       -p 9005:9005 \\ \
>       grain:prod

The 'd' in -itd detaches the container from the terminal.  
The port 9005 is being exposed to be able to connect your firebase account using the firebase cli.  

The ``` sudo docker exec command ``` enables to run commands inside the running docker container. 

> ``` sudo docker exec -it grain_prod firebase login ``` 

Follow the displayed link and enter the credentials of the google account associated with firebase. The next step is to initialize the firebase hosting using  

> ``` sudo docker exec -it grain_prod firebase init hosting ```

Follow the instructions given by firebase and choose the corresponding firebase projekt you want to deploy to. Note that as "public directory" **build** has to be specified. Additionally the page should be rewritten as single page. When ask to overwrite existing files the answer is "No".  

Finally deploy your webapp using 

> ```sudo docker exec -it grain_prod firebase deploy --only hosting ```

A url should be displayed where you can visit your site online.

## Documentation
Our SoftwareX paper: "" provides a concise description of the software. 
The code documentation is provided along the relevant code lines.

## Contributing
Pull requests for minor changes are welcome. For major changes, please open an issue or fork the repository first to discuss what you would like to change. In oder words:

* Issue: If you spotted a bug, have an idea for an improvement or a new feature, please open a issue. Please open an issue in both cases: If you want to work on in yourself and if you want to leave it to us to work on it.
* Fork: If you want to work on an issue yourself please fork the repository, then develop the feature in your copy of the repository and finally file a pull request to merge it into our repository.

## Cite
If you are using FeedAI in your academic work please cite it by referencing our SoftwareX paper:
...

## License
This software is licensed under the MIT license. For more information, read the file [MIT](https://choosealicense.com/licenses/mit/)

