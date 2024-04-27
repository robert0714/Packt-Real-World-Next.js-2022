FROM node:21-alpine
# FROM node:21.7.1-alpine3.19 

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start