const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
    
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const User = mongoose.model('User', userSchema,'User');

module.exports = User;