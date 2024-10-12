const mongoose = require('mongoose');

const goodTypeSchema = new mongoose.Schema({
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true
    },
    food: {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const GoodType = mongoose.model('GoodType', goodTypeSchema, 'GoodType');

module.exports = GoodType;
