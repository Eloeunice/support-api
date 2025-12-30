import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export async function createTicket(req, res) {
    const { equipment, description } = req.body

    const ticket = await prisma.ticket.create({
        data: {
            equipment: equipment,
            description: description,
            status: 'open'
        }
    })
    return res.status(201).json(ticket)
}


export async function getTickets(req, res) {
    const status = req.query.status
    const tickets = await prisma.ticket.findMany({ status: status })
    return res.status(200).json(tickets)
}
export async function updateTicket(req, res) {
    const { id } = req.params
    const { equipment, description } = req.body

    const ticket = await prisma.ticket.update({
        where: {
            id: Number(id)
        },
        data: {
            equipment: equipment,
            description: description
        }
    })
    return res.status(200).json(ticket)
}

export async function closeTicket(req, res) {
    const { id } = req.params

    const ticket = await prisma.ticket.update({
        where: {
            id: Number(id)
        },
        data: {
            status: 'closed'
        }
    })
    return res.status(200).json({
        "message": "Ticket fechado com sucesso",
        "ticket": ticket
    })
}

export async function deleteTicket(req, res) {
    const { id } = req.params

    const ticket = await prisma.ticket.delete({
        where: {
            id: Number(id)
        }
    })
    return res.status(204).json({
        "message": "Ticket deletado com sucesso",
        "ticket": ticket
    })
}