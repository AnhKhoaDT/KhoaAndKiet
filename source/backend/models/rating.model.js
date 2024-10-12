const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: false
    },
    createDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Rating = mongoose.model('Rating', ratingSchema, 'Rating');

module.exports = Rating;
