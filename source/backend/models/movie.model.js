const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    duration: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number, // Sử dụng Number thay vì Float
        required: true
    }
},
{
    timestamps: true // createdAt, updatedAt
});

const Movie = mongoose.model('Movie', movieSchema, 'Movie');

module.exports = Movie;
