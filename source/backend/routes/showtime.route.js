const express = require('express');
const { createShowTime, deleteShowTime, getShowTimes, getShowTimeById, updateShowTime } = require('../controllers/showtime.controller');

const showTimeRouter = express.Router();

showTimeRouter.post('/', createShowTime);
showTimeRouter.get('/', getShowTimes);
showTimeRouter.get('/:id', getShowTimeById);
showTimeRouter.put('/:id', updateShowTime);
showTimeRouter.delete('/:id', deleteShowTime);

module.exports = showTimeRouter;
