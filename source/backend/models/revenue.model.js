const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    totalRevenue: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Revenue = mongoose.model('Revenue', revenueSchema, 'Revenue');

module.exports = Revenue;
