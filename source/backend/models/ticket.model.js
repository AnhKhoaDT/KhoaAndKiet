const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
        required:true 
    },
    showTimeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ShowTime', 
        required:true
    },
    seatId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Seat',
         required:true
    },
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
 
const Ticket = mongoose.model('Ticket', ticketSchema,'Ticket');

module.exports = Ticket;