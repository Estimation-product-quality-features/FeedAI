# pull official base image
FROM node:13.12.0-alpine

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm rebuild
# RUN npm run build

COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install @tensorflow/tfjs
USER root

# add app
COPY . ./

# start app
CMD ["npm", "start"]





