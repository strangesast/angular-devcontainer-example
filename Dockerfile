from node

workdir /usr/src/app

copy package*.json ./

run npm ci

copy . .

run npm run build
