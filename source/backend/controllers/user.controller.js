const User = require('../models/user.model');
const mongoose = require('mongoose');


const createUser = async (req, res) => {
    const userData = req.body;
    if(!userData.id || !userData.name) {  
        return res.status(400).json({sucess:false,message: "Invalid data"});
    }
    const newUser = new User(userData);
    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteUser = (async(req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = { createUser, deleteUser };
