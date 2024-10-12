const OrderDetail = require('../models/orderdetail.model');

const createOrderDetail = async (req, res) => {
    const orderDetailData = req.body;
    if (!orderDetailData.orderId || !orderDetailData.goodTypeId || !orderDetailData.quantity || !orderDetailData.totalPrice) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newOrderDetail = new OrderDetail(orderDetailData);
    try {
        await newOrderDetail.save();
        res.status(201).json({ success: true, data: newOrderDetail });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteOrderDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const orderDetail = await OrderDetail.findByIdAndDelete(id);
        if (!orderDetail) {
            return res.status(404).json({ success: false, message: "Order detail not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.find();
        res.status(200).json({ success: true, data: orderDetails });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getOrderDetailById = async (req, res) => {
    const id = req.params.id;
    try {
        const orderDetail = await OrderDetail.findById(id);
        if (!orderDetail) {
            return res.status(404).json({ success: false, message: "Order detail not found" });
        }
        res.status(200).json({ success: true, data: orderDetail });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateOrderDetail = async (req, res) => {
    const id = req.params.id;
    const orderDetailData = req.body;
    try {
        const orderDetail = await OrderDetail.findByIdAndUpdate(id, orderDetailData, { new: true, runValidators: true });
        if (!orderDetail) {
            return res.status(404).json({ success: false, message: "Order detail not found" });
        }
        res.status(200).json({ success: true, data: orderDetail });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createOrderDetail, deleteOrderDetail, getOrderDetails, getOrderDetailById, updateOrderDetail };
