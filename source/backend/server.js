const express = require('express');
require('dotenv').config();
const session = require('express-session'); // Import express-session

const { connectDB } = require('./config/db.js');
const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');
const movieRouter = require('./routes/movie.route.js'); // Import movie router
const ticketRouter = require('./routes/ticket.route.js');
const theaterRouter = require('./routes/theater.route.js'); 
const showtimeRouter = require('./routes/showtime.route.js');
const promotionRouter = require('./routes/promotion.route');
const seatRouter = require('./routes/seat.route');
const ratingRouter = require('./routes/rating.route');
const goodTypeRouter = require('./routes/goodtype.route');
const orderRouter = require('./routes/order.route');
const orderDetailRouter = require('./routes/orderdetail.route');

const auth = require('./middleware/auth');
const authorize = require('./middleware/authorize');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger); // Sử dụng middleware ghi log

// Cấu hình session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Đặt thành true nếu sử dụng HTTPS
}));



app.use('/api/auth', authRouter); // Sử dụng route auth cho đăng nhập và đăng ký
app.use('/api/user', auth, authorize(['customer', 'admin']), userRouter);

app.use('/api/movie', movieRouter); // Sử dụng movie router
app.use('/api/ticket', ticketRouter); 
app.use('/api/theater', theaterRouter);
app.use('/api/showtime', showtimeRouter);
app.use('/api/promotions', promotionRouter);
app.use('/api/seats', seatRouter);
app.use('/api/goodtypes', goodTypeRouter);
app.use('/api/ratings', ratingRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orderdetails', orderDetailRouter);

app.use(errorHandler); // Sử dụng middleware xử lý lỗi

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
