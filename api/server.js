const express = require('express');

const usersRouter = require('../users/usersRouter')
// const Users = require('../users/usersModel');
const server = express();

server.use(express.json());

server.use('/users', usersRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: 'Last Daily API'})
})


module.exports = server;