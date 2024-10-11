const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName:{
    type:String,
    required:true
   },
   dob:{
    type:Date,
    required:true 
   },
   phone:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
},
    {
    timestamps: true // createdAt, updatedAt
});
 
const User = mongoose.model('User', userSchema,'User');

module.exports = User;