FROM node:14
MAINTAINER anaflavia-moraes
COPY . /var/www 
WORKDIR /var/www
RUN npm install
RUN npm install express
ENTRYPOINT node server.js
EXPOSE 3000