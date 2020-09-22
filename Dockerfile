FROM node:12.8.4

WORKDIR /usr/src/learntrack

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
