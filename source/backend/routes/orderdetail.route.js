const express = require('express');
const { createOrderDetail, deleteOrderDetail, getOrderDetails, getOrderDetailById, updateOrderDetail } = require('../controllers/orderdetail.controller');

const orderDetailRouter = express.Router();

orderDetailRouter.post('/', createOrderDetail);
orderDetailRouter.get('/', getOrderDetails);
orderDetailRouter.get('/:id', getOrderDetailById);
orderDetailRouter.put('/:id', updateOrderDetail);
orderDetailRouter.delete('/:id', deleteOrderDetail);

module.exports = orderDetailRouter;
