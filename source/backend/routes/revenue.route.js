const express = require('express');
const Revenue = require('../models/revenue.model');
const commonController = require('../controllers/common.controller');

const revenueRouter = express.Router();

revenueRouter.post('/', commonController.createDocument(Revenue));
revenueRouter.get('/', commonController.getDocuments(Revenue));
revenueRouter.get('/:id', commonController.getDocumentById(Revenue));
revenueRouter.put('/:id', commonController.updateDocument(Revenue));
revenueRouter.delete('/:id', commonController.deleteDocument(Revenue));

module.exports = revenueRouter;
