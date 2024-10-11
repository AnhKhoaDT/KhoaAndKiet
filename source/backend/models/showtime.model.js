const mongoose = require('mongoose');

const showTimeSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const User = mongoose.model('User', userSchema,'User');

module.exports = User;