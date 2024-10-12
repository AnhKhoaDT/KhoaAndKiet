const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    theaterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
    seatNumber: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true // Mặc định là trống
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Seat = mongoose.model('Seat', seatSchema, 'Seat');

module.exports = Seat;