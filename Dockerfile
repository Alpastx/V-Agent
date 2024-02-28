FROM node:latest

WORKDIR /pages

COPY package.json .

RUN npm install --force 

COPY . .

RUN npm run build

CMD ["npm", "start" ]

EXPOSE 3000