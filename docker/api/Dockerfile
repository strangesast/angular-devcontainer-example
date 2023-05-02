from node as base

workdir /usr/src/app

from base as builder

copy api/package*.json ./
run npm ci
copy api ./
run npm run build

from base

env NODE_ENV=production
copy api/package*.json ./
run npm ci

copy api/config config
copy --from=builder /usr/src/app/build ./

cmd ["node", "server.js"]
