const express = require('express');
const Theater = require('../models/theater.model');
const commonController = require('../controllers/common.controller');

const theaterRouter = express.Router();

theaterRouter.post('/', commonController.createDocument(Theater));
theaterRouter.get('/', commonController.getDocuments(Theater));
theaterRouter.get('/:id', commonController.getDocumentById(Theater));
theaterRouter.put('/:id', commonController.updateDocument(Theater));
theaterRouter.delete('/:id', commonController.deleteDocument(Theater));

module.exports = theaterRouter;
