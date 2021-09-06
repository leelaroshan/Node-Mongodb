const express = require('express');

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserOrder
} = require('../controllers/users');

const api = express.Router();

api
  .route('/') 
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)


  api.route('/:userId/orders')
  .get(getUserOrder)




module.exports = api;