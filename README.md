# Flour Quality Tracker in Batch Processing 🌾  
## [Visit this site here!](https://grain-90424.web.app/)

### An intuitive and helpful tracking tool for evaluating the quality on image data of the produced flour, in the context of compound feed industries.
The compound feed industry can product many feed mixtures up to many different ingredients. Ingredients as agricultural raw materials, such as maize and wheat, are to be processed in these industries. Under rapidly and strongly fluctuating input materials and changing recipes, the condition of a process has to be continually tuned by process operators to satisfy the quality requirements. Flour is one popular feed due to its balanced nutrional nature and availability in various forms, for instance, in pellets. The schredding of natural raw materials leads to the required product structure (flour), which is relevant for mixing and pelleting, and ultimative for the animal health.
After milling, samples of the produced flour are evaluated on the particle size (quality specification) via machine-learning algorithms. In this repo, we developed a traker tool that automatically detect partially crushed and uncrushed grains on product images, so that engineers can subsequently use these results for a better adjustment of the mill parameters. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a Firebase running in a docker image to provide security and to help to build, run and deploy successfully the app.


#TODO: Screenshot of the homepage instead.
<br>
<img src=""/>
<br>


---
## 🧰 Toolbox

<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<br></br>
<a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
<a href="https://www.tensorflow.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" width="40" height="40"/> 
</a>
<br></br>
<a href="https://www.docker.com/" target="_blank"> <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="Docker" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
    

---
## Installation

The easiest way to run the app locally is to clone the repository and execute the following docker commands in the root folder and a shell of your choice.  
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

The ``` sudo docker exec command ``` enables the to run commands inside the running docker container. 

> ``` sudo docker exec -it grain_prod firebase login ``` 

Follow the displayed link and enter the credentials of the google account associated with firebase. The next step is to initialize the firebase hosting using  

> ``` sudo docker exec -it grain_prod firebase init hosting ```

Follow the instructions given by firebase and choose the corresponding firebase projekt you want to deploy to. Note that as "public directory" **build** has to be specified. Additionally the page should be rewritten as single page.  

Finally deploy your webapp using 

> ```sudo docker exec -it grain_prod firebase deploy --only hosting ```

A url should be displayed where you can visit your site online.
Note that it can take a while untill the the website will be dislayed.
    

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 


## License
[MIT](https://choosealicense.com/licenses/mit/)

