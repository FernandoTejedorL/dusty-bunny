const express = require('express');
const ordersController = require('../controllers/orders.controller');
const ordersRoutes = express.Router();

ordersRoutes.get('/', ordersController.getAllOrders);
ordersRoutes.get('/:id', ordersController.getOrderById);
ordersRoutes.get('/user/:userId', ordersController.getAllUserOrders);
ordersRoutes.post('/', ordersController.createOrder);

module.exports = ordersRoutes;
