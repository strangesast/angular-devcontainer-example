from node as builder

workdir /usr/src/app

copy package*.json ./

run npm ci

copy . .

run npm run build

from nginx

copy example.conf /etc/nginx/conf.d/default.conf

copy --from=builder /usr/src/app/dist/example /usr/share/nginx/html/
