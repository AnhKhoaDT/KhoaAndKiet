const Order = require('../models/order.model');

const createOrder = async (req, res) => {
    const orderData = req.body;
    if (!orderData.userId || !orderData.totalPrice) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newOrder = new Order(orderData);
    try {
        await newOrder.save();
        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getOrderById = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const orderData = req.body;
    try {
        const order = await Order.findByIdAndUpdate(id, orderData, { new: true, runValidators: true });
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createOrder, deleteOrder, getOrders, getOrderById, updateOrder };
