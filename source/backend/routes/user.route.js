// routes/user.route.js
const express = require('express');
const { createUser, deleteUser } = require('../controllers/user.controller');
const User = require('../models/user.model');

const router = express.Router();

router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
