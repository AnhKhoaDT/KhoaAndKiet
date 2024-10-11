const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    
    
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const User = mongoose.model('User', userSchema,'User');

module.exports = User;