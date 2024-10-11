const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db.js');
const userRouter = require('./routes/user.route.js');

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);

// Thêm route cho đường dẫn gốc
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
