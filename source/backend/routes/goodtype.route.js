const express = require('express');
const GoodType = require('../models/goodtype.model');
const commonController = require('../controllers/common.controller');

const goodTypeRouter = express.Router();

goodTypeRouter.post('/', commonController.createDocument(GoodType));
goodTypeRouter.get('/', commonController.getDocuments(GoodType));
goodTypeRouter.get('/:id', commonController.getDocumentById(GoodType));
goodTypeRouter.put('/:id', commonController.updateDocument(GoodType));
goodTypeRouter.delete('/:id', commonController.deleteDocument(GoodType));

module.exports = goodTypeRouter;
