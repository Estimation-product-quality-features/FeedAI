# pull official base image
FROM node:13.12.0-alpine
#FROM node:16.13.1-alpine
#FROM node:8.15.1-alpine as build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm rebuild
COPY package.json ./
#COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install @tensorflow/tfjs


#Install peerDependencies
#RUN npm cache clean --force
#RUN npm install @tensorflow/tfjs-core@"^3.7.0"
#RUN npm install @tensorflow/tfjs-backend-webgl@"^3.7.0"
#RUN npm install @tensorflow-models/handpose@"^0.0.7"
#RUN npm install @tensorflow/tfjs-converter@"^3.7.0"
#RUN npm install fingerpose#@"^0.0.2"

# add app
COPY . ./

# start app
CMD ["npm", "start"]

