const express = require('express');
const { createTicket, deleteTicket, getTickets, getTicketById, updateTicket } = require('../controllers/ticket.controller');

const ticketRouter = express.Router();

ticketRouter.post('/', createTicket);
ticketRouter.get('/', getTickets);
ticketRouter.get('/:id', getTicketById);
ticketRouter.put('/:id', updateTicket);
ticketRouter.delete('/:id', deleteTicket);

module.exports = ticketRouter;
