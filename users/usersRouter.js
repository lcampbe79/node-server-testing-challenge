
const router = require('express').Router();

const Users = require('./usersModel')

router.get('/users', (req, res) => {
  Users.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

module.exports = router;

