import express from "express";
import {
    createTicket,
    deleteTicket,
    getTickets,
    updateTicket,
    closeTicket
} from "../controllers/ticket.controller.js";

const tickets = express.Router();

// coleção
tickets.post('/', createTicket);
tickets.get('/', getTickets);

// recurso por id
tickets.put('/:id', updateTicket);
tickets.delete('/:id', deleteTicket);

// ação específica
tickets.patch('/:id/status', closeTicket);

export default tickets;
