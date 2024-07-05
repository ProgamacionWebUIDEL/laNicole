FROM node:22-bullseye

WORKDIR /Clase1Express/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]