const ShowTime = require('../models/showtime.model');

const createShowTime = async (req, res) => {
    const showTimeData = req.body;
    if (!showTimeData.movieId || !showTimeData.startTime || !showTimeData.endTime) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newShowTime = new ShowTime(showTimeData);
    try {
        await newShowTime.save();
        res.status(201).json({ success: true, data: newShowTime });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteShowTime = async (req, res) => {
    const id = req.params.id;
    try {
        const showTime = await ShowTime.findByIdAndDelete(id);
        if (!showTime) {
            return res.status(404).json({ success: false, message: "ShowTime not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getShowTimes = async (req, res) => {
    try {
        const showTimes = await ShowTime.find();
        res.status(200).json({ success: true, data: showTimes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getShowTimeById = async (req, res) => {
    const id = req.params.id;
    try {
        const showTime = await ShowTime.findById(id);
        if (!showTime) {
            return res.status(404).json({ success: false, message: "ShowTime not found" });
        }
        res.status(200).json({ success: true, data: showTime });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateShowTime = async (req, res) => {
    const id = req.params.id;
    const showTimeData = req.body;
    try {
        const showTime = await ShowTime.findByIdAndUpdate(id, showTimeData, { new: true, runValidators: true });
        if (!showTime) {
            return res.status(404).json({ success: false, message: "ShowTime not found" });
        }
        res.status(200).json({ success: true, data: showTime });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createShowTime, deleteShowTime, getShowTimes, getShowTimeById, updateShowTime };
