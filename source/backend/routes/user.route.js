const express = require('express');
const { createUser, deleteUser, getUsers, getUserById, updateUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
