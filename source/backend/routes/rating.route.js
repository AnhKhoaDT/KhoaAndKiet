const express = require('express');
const { createRating, deleteRating, getRatings, getRatingById, updateRating } = require('../controllers/rating.controller');

const ratingRouter = express.Router();

ratingRouter.post('/', createRating);
ratingRouter.get('/', getRatings);
ratingRouter.get('/:id', getRatingById);
ratingRouter.put('/:id', updateRating);
ratingRouter.delete('/:id', deleteRating);

module.exports = ratingRouter;