const User = require('../models/user.model');

const createUser = async (req, res) => {
    const userData = req.body;
    if (!userData.name || !userData.userName || !userData.dob || !userData.phone || !userData.email || !userData.password) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    // Đảm bảo rằng các trường roles được xử lý đúng
    if (!userData.roles) {
        userData.roles = ['customer']; // Mặc định là 'customer' nếu không chỉ định
    }
  
    const newUser = new User(userData);
    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUsers = async (req, res) => {// tìm tất cả người dùng
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUserById = async (req, res) => {// tìm kiếm 1 người theo id
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createUser, deleteUser, getUsers, getUserById, updateUser };
