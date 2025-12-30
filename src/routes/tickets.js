import e from "express";
import { createTicket, deleteTicket, getTickets, updateTicket } from "../controllers/ticket.controller";

const tickets = e.Router()

tickets.route('/')
    .post((req, res) => {
        createTicket(req, res)
        res.send('Ticket Criado!')
    })

    .get((req, res) => {
        getTickets(req, res)
        res.send('Ticket Listado!')
    })

    .put('/:id', (req, res) => {
        updateTicket(req, res)
        res.send('Ticket Atualizado!')
    })

    .delete('/:id', (req, res) => {
        deleteTicket(req, res)
        res.send('Ticket Deletado!')
    })

    .patch('/:id/status', (req, res) => {
        closeTicket(req, res)
        res.send('Ticket Fechado!')
    })

export default tickets