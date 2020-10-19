FROM node:12.18.4

WORKDIR /usr/src/learntrack

#COPY ./client /usr/src/learntrack
#COPY ./server /usr/src/learntrack

COPY ./ ./

RUN npm install
RUN npm run client:install

CMD ["/bin/bash"]
