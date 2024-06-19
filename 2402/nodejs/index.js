const server = require('./server')
const router = require('./router')
console.log(__dirname)
server.start(router.route)
