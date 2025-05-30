// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('', router)
server.listen(3333, () => {
  console.log('JSON Server is running port: 3333')
})
