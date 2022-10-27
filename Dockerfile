FROM node:16.17.1

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3130

CMD ["npm", "run", "server"]