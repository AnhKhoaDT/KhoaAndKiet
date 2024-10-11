const express = require('express');
const Cinema = require('../models/cinema.model');
const commonController = require('../controllers/common.controller');

const cinemaRouter = express.Router();

cinemaRouter.post('/', commonController.createDocument(Cinema));
cinemaRouter.get('/', commonController.getDocuments(Cinema));
cinemaRouter.get('/:id', commonController.getDocumentById(Cinema));
cinemaRouter.put('/:id', commonController.updateDocument(Cinema));
cinemaRouter.delete('/:id', commonController.deleteDocument(Cinema));

module.exports = cinemaRouter;
