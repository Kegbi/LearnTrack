FROM node:12.18.4

WORKDIR /usr/src/learntrack

#COPY ./client /usr/src/learntrack
#COPY ./server /usr/src/learntrack

COPY ./ ./

RUN npm i -g nodemon
RUN npm install
RUN npm run install_packages
#RUN rm -rf ./server/node_modules/sharp
#RUN npm i sharp --prefix server

CMD ["/bin/bash"]
