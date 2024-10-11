const Ticket = require('../models/ticket.model');

const createTicket = async (req, res) => {
    const ticketData = req.body;
    if (!ticketData.userId || !ticketData.showTimeId || !ticketData.seatId || !ticketData.price || !ticketData.status || !ticketData.bookingDate) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }
    const newTicket = new Ticket(ticketData);
    try {
        await newTicket.save();
        res.status(201).json({ success: true, data: newTicket });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const ticket = await Ticket.findByIdAndDelete(id);
        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json({ success: true, data: tickets });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getTicketById = async (req, res) => {
    const id = req.params.id;
    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }
        res.status(200).json({ success: true, data: ticket });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateTicket = async (req, res) => {
    const id = req.params.id;
    const ticketData = req.body;
    try {
        const ticket = await Ticket.findByIdAndUpdate(id, ticketData, { new: true, runValidators: true });
        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }
        res.status(200).json({ success: true, data: ticket });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createTicket, deleteTicket, getTickets, getTicketById, updateTicket };
