const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db.js');
const userRouter = require('./routes/user.route.js');
const movieRouter = require('./routes/movie.route.js'); // Import movie router
const ticketRouter = require('./routes/ticket.route.js');
const theaterRouter = require('./routes/theater.route.js'); 
const cinemaRouter = require('./routes/cinema.route.js');
const showtimeRouter = require('./routes/showtime.route.js');

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/movie', movieRouter); // Sử dụng movie router
app.use('/api/ticket', ticketRouter); 
app.use('/api/theater', theaterRouter);
app.use('/api/cinema', cinemaRouter);
app.use('/api/showtime', showtimeRouter);

// Thêm route cho đường dẫn gốc
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
