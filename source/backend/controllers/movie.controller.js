const Movie = require('../models/movie.model');

const createMovie = async (req, res) => {
    const movieData = req.body;
    if (!movieData.userId || !movieData.title || !movieData.genre || !movieData.duration || !movieData.releaseDate || !movieData.rating) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newMovie = new Movie(movieData);
    try {
        await newMovie.save();
        res.status(201).json({ success: true, data: newMovie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteMovie = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ success: true, data: movies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getMovieById = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.status(200).json({ success: true, data: movie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateMovie = async (req, res) => {
    const id = req.params.id;
    const movieData = req.body;
    try {
        const movie = await Movie.findByIdAndUpdate(id, movieData, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.status(200).json({ success: true, data: movie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createMovie, deleteMovie, getMovies, getMovieById, updateMovie };
