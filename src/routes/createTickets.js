import e from "express";

const tickets = e.Router()

tickets.route('/')
    .post((req, res) => {
        res.send('Ticket Criado!')
    })

    .get((req, res) => {
        res.send('Ticket Listado!')
    })

    .put((req, res) => {
        res.send('Ticket Atualizado!')
    })

    .delete((req, res) => {
        res.send('Ticket Deletado!')
    })

    .patch((req, res) => {
        res.send('Ticket Fechado!')
    })

export default tickets