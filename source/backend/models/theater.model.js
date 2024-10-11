const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    cinemaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema' },

    name: {
        type: String,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    }
   
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const Theater = mongoose.model('Theater', theaterSchema, 'Theater');

module.exports = Theater;