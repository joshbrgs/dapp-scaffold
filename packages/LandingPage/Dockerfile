FROM alpine:3.14
WORKDIR /landingpage
COPY package*.json ./
RUN npm i
COPY ./ ./
EXPOSE 6000
CMD [ "node", "index.js" ]