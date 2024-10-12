const Rating = require('../models/rating.model');

const createRating = async (req, res) => {
    const ratingData = req.body;
    if (!ratingData.userId || !ratingData.movieId || !ratingData.rating) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newRating = new Rating(ratingData);
    try {
        await newRating.save();
        res.status(201).json({ success: true, data: newRating });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteRating = async (req, res) => {
    const id = req.params.id;
    try {
        const rating = await Rating.findByIdAndDelete(id);
        if (!rating) {
            return res.status(404).json({ success: false, message: "Rating not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getRatings = async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.status(200).json({ success: true, data: ratings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getRatingById = async (req, res) => {
    const id = req.params.id;
    try {
        const rating = await Rating.findById(id);
        if (!rating) {
            return res.status(404).json({ success: false, message: "Rating not found" });
        }
        res.status(200).json({ success: true, data: rating });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateRating = async (req, res) => {
    const id = req.params.id;
    const ratingData = req.body;
    try {
        const rating = await Rating.findByIdAndUpdate(id, ratingData, { new: true, runValidators: true });
        if (!rating) {
            return res.status(404).json({ success: false, message: "Rating not found" });
        }
        res.status(200).json({ success: true, data: rating });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createRating, deleteRating, getRatings, getRatingById, updateRating };
