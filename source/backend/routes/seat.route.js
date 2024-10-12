const express = require('express');
const Seat = require('../models/seat.model');
const commonController = require('../controllers/common.controller');

const seatRouter = express.Router();

seatRouter.post('/', commonController.createDocument(Seat));
seatRouter.get('/', commonController.getDocuments(Seat));
seatRouter.get('/:id', commonController.getDocumentById(Seat));
seatRouter.put('/:id', commonController.updateDocument(Seat));
seatRouter.delete('/:id', commonController.deleteDocument(Seat));

module.exports = seatRouter;
