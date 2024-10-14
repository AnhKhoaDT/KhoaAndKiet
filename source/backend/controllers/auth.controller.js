const User = require('../models/user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Cấu hình nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const register = async (req, res) => {
    const { name, userName, dob, phone, email, password, confirmPassword, role } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    try {
        const existingUser = await User.findOne({ 
            $or: [
                { email }, 
                { userName }
            ]
        });
        
        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({ success: false, message: 'Email already in use' });
            }
            if (existingUser.userName === userName) {
                return res.status(400).json({ success: false, message: 'Username already in use' });
            }
        }
        const userId = new mongoose.Types.ObjectId();
        const user = new User({ _id: userId, name, userName, dob, phone, email, password, roles: role });
        await user.save(); // Lưu người dùng vào cơ sở dữ liệu
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    const loginData = req.body;
    console.log(loginData);
    try {
        const user = await User.findOne({
            $or: [{ email: loginData.email }, { userName: loginData.userName }]
        });
        console.log(user);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid userName' });
        }

        const isMatch = await bcrypt.compare(loginData.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid password' });
        }

        // Tạo mã xác nhận
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Gửi mã xác nhận qua email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Your verification code',
            text: `Your verification code is ${verificationCode}`
        };

        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                return res.status(500).json({ success: false, message: error.message });
            }

             // Lưu mã xác nhận vào session
        req.session.verificationCode = verificationCode;
        req.session.userId = user._id;
        
            res.status(200).json({ success: true, message: 'Verification code sent to email' });
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const verifyCode = async (req, res) => {
    const { email, verificationCode } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.verificationCode !== verificationCode) {
            return res.status(400).json({ success: false, message: 'Invalid verification code' });
        }
    // Xóa mã xác nhận sau khi xác thực thành công
    req.session.verificationCode = null;

        // Tạo token JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { register, login, verifyCode };
