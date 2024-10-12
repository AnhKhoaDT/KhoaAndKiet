const Promotion = require('../models/promotion.model');

const createPromotion = async (req, res) => {
    const promotionData = req.body;
    if (!promotionData.code || !promotionData.discount || !promotionData.startDate || !promotionData.endDate) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newPromotion = new Promotion(promotionData);
    try {
        await newPromotion.save();
        res.status(201).json({ success: true, data: newPromotion });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deletePromotion = async (req, res) => {
    const id = req.params.id;
    try {
        const promotion = await Promotion.findByIdAndDelete(id);
        if (!promotion) {
            return res.status(404).json({ success: false, message: "Promotion not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.status(200).json({ success: true, data: promotions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getPromotionById = async (req, res) => {
    const id = req.params.id;
    try {
        const promotion = await Promotion.findById(id);
        if (!promotion) {
            return res.status(404).json({ success: false, message: "Promotion not found" });
        }
        res.status(200).json({ success: true, data: promotion });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updatePromotion = async (req, res) => {
    const id = req.params.id;
    const promotionData = req.body;
    try {
        const promotion = await Promotion.findByIdAndUpdate(id, promotionData, { new: true, runValidators: true });
        if (!promotion) {
            return res.status(404).json({ success: false, message: "Promotion not found" });
        }
        res.status(200).json({ success: true, data: promotion });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createPromotion, deletePromotion, getPromotions, getPromotionById, updatePromotion };
