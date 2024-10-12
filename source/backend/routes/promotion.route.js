const express = require('express');
const { createPromotion, deletePromotion, getPromotions, getPromotionById, updatePromotion } = require('../controllers/promotion.controller');

const promotionRouter = express.Router();

promotionRouter.post('/', createPromotion);
promotionRouter.get('/', getPromotions);
promotionRouter.get('/:id', getPromotionById);
promotionRouter.put('/:id', updatePromotion);
promotionRouter.delete('/:id', deletePromotion);

module.exports = promotionRouter;
