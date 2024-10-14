const mongoose = require('mongoose');
const hashPassword = require('../middleware/hashPassword');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    dob: {
        type: Date,
        required: true 
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
        
    },
 
}, {
    timestamps: true // createdAt, updatedAt
});

userSchema.pre('save', hashPassword);

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
