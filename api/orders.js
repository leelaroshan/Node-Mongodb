const express = require('express');

const {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
  // getUserOrder
} = require('../controllers/orders');

const api = express.Router();

api
  .route('/') 
  .get(getOrders)
  .post(createOrder)

api
  .route('/:id')
  .get(getOrder)
  .delete(deleteOrder)
  .put(updateOrder)



module.exports = api;