const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Giả sử bạn có một bảng Product để lưu trữ thông tin sản phẩm
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    intoMoney: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema, 'OrderDetail');

module.exports = OrderDetail;