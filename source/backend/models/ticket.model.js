const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    showTimeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ShowTime' },
    seatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat' },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    }
    
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const Ticket = mongoose.model('Ticket', userSchema,'Ticket');

module.exports = Ticket;