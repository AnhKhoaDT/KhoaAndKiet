const express = require('express');
const { createMovie, deleteMovie, getMovies, getMovieById, updateMovie } = require('../controllers/movie.controller');

const movieRouter = express.Router();

movieRouter.post('/', createMovie);
movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.put('/:id', updateMovie);
movieRouter.delete('/:id', deleteMovie);

module.exports = movieRouter;
