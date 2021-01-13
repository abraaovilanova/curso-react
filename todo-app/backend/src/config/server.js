const port = 3003

const bodyParser = require('body-parser') // fará o sarse do corpo da requisição
const express = require('express')
const server = express() // start do express
const allowCors = require('./cors')

 // midware chain of responsibility
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server