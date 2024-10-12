const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Order = mongoose.model('Order', orderSchema, 'Order');

module.exports = Order;
