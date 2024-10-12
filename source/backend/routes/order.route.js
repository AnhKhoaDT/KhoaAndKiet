const express = require('express');
const { createOrder, deleteOrder, getOrders, getOrderById, updateOrder } = require('../controllers/order.controller');

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', getOrders);
orderRouter.get('/:id', getOrderById);
orderRouter.put('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);

module.exports = orderRouter;
