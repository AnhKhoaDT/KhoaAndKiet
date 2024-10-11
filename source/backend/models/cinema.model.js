const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
   
},
    {
    timestamps: true // createdAt, updatedAt
});

const Cinema = mongoose.model('Cinema', cinemaSchema, 'Cinema');

module.exports = Cinema;