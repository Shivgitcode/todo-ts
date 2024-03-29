FROM node:21-alpine

WORKDIR /app

COPY *.json .

RUN npm install 

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]