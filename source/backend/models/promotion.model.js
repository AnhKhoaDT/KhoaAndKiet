const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    discount: {
        type: Number, // Sử dụng Number để lưu trữ giá trị phần trăm hoặc số tiền giảm giá
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    condition: {
        type: String,
        required: false
    }
},
{
    timestamps: true // createdAt, updatedAt
});

const Promotion = mongoose.model('Promotion', promotionSchema, 'Promotion');

module.exports = Promotion;
